import React, { useRef, useEffect } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 100 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    const init = () => {
      particles = [];
      canvas.width = window.innerWidth;
      // We want the canvas to cover the hero section properly, 
      // but to ensure it always draws correctly we use innerHeight
      canvas.height = window.innerHeight;
      
      // Draw text to canvas
      ctx.fillStyle = 'white';
      // Responsive font size
      const fontSize = Math.min(canvas.width / 7, 180);
      ctx.font = `900 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // Draw text in the upper center of the screen, slightly higher to avoid overlap
      ctx.fillText('SHREYASH', canvas.width / 2, canvas.height * 0.35);
      
      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the text

      const step = canvas.width > 768 ? 6 : 4; // density of particles
      for (let y = 0, y2 = textCoordinates.height; y < y2; y += step) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x += step) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            let positionX = x + (Math.random() - 0.5) * step;
            let positionY = y + (Math.random() - 0.5) * step;
            // Particles that form the name
            particles.push(new Particle(positionX, positionY, false));
          }
        }
      }
      
      // Add random moving background stars (Increased count for full page)
      const numBackgroundStars = canvas.width > 768 ? 600 : 250;
      for(let i=0; i<numBackgroundStars; i++){
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, true));
      }
    };

    class Particle {
      constructor(x, y, isBackground) {
        // Start randomly anywhere
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.destX = x;
        this.destY = y;
        this.isBackground = isBackground;
        this.size = isBackground ? Math.random() * 1.2 : Math.random() * 1.5 + 0.2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        
        if (isBackground) {
          const bgColors = ['rgba(255, 255, 255, 0.7)', 'rgba(200, 230, 255, 0.5)', 'rgba(255, 255, 255, 0.3)'];
          this.color = bgColors[Math.floor(Math.random() * bgColors.length)];
        } else {
          const nameColors = [
            'rgba(0, 243, 255, 1)',   // Bright Cyan
            'rgba(150, 220, 255, 1)', // Ice blue
            'rgba(100, 150, 255, 1)',  // Clear blue
            'rgba(255, 255, 255, 1)'  // White highlight
          ];
          this.color = nameColors[Math.floor(Math.random() * nameColors.length)];
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        
        if (this.isBackground) {
          // Twinkle effect for background stars
          let alpha = Math.sin(Date.now() * 0.003 * this.density) * 0.4 + 0.6; // between 0.2 and 1.0
          ctx.globalAlpha = alpha;
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 0;
        } else {
          ctx.globalAlpha = 1;
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
        }
        
        ctx.fill();
        ctx.globalAlpha = 1; // reset
        ctx.shadowBlur = 0; // reset
      }

      update() {
        if (this.isBackground) {
          this.x += this.vx;
          this.y += this.vy;
          // Wrap around edges
          if(this.x < 0) this.x = canvas.width;
          if(this.x > canvas.width) this.x = 0;
          if(this.y < 0) this.y = canvas.height;
          if(this.y > canvas.height) this.y = 0;
        } else {
          // move to destination with an ease, accounting for window scroll!
          let targetY = this.destY - window.scrollY;
          let dx = this.destX - this.x;
          let dy = targetY - this.y;
          this.x += dx * 0.05;
          this.y += dy * 0.05;

          // Mouse interaction (repel)
          if (mouse.x != null) {
            let dxMouse = mouse.x - this.x;
            let dyMouse = mouse.y - this.y;
            let distance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
            if (distance < mouse.radius) {
              let forceDirectionX = dxMouse / distance;
              let forceDirectionY = dyMouse / distance;
              let force = (mouse.radius - distance) / mouse.radius;
              let directionX = forceDirectionX * force * this.density;
              let directionY = forceDirectionY * force * this.density;
              
              this.x -= directionX;
              this.y -= directionY;
            }
          }
        }
      }
    }

    const animate = () => {
      // Fade trails while preserving canvas transparency
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; // Adjust for trail length
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars normally
      ctx.globalCompositeOperation = 'source-over';
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Ensure fonts are loaded before initializing text canvas
    document.fonts.ready.then(() => {
      init();
      animate();
      
      // Scatter effect after 4 seconds
      setTimeout(() => {
        particles.forEach(p => {
          if (!p.isBackground) {
            p.isBackground = true;
            // Give them a gentle random velocity to drift away like normal stars
            p.vx = (Math.random() - 0.5) * 2;
            p.vy = (Math.random() - 0.5) * 2;
          }
        });
      }, 4000);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none' // allow clicks to pass through to the rest of the site
      }} 
    />
  );
};

export default StarBackground;

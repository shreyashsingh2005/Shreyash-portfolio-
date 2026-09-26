import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, right, center }) => {
  return (
    <section 
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: center ? 'center' : right ? 'flex-end' : 'flex-start',
        padding: '0 10%',
        color: '#fff',
        fontFamily: "'Inter', sans-serif",
        pointerEvents: 'none' // Allow clicking through to 3D if needed
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '600px', textAlign: center ? 'center' : right ? 'right' : 'left', pointerEvents: 'auto' }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default function Overlay() {
  return (
    <div style={{ width: '100vw' }}>
      
      {/* 0: Opening Core */}
      <Section center>
        <p style={{ letterSpacing: '0.5em', textTransform: 'uppercase', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
          Initialize
        </p>
      </Section>

      {/* 1: SHREYASH */}
      <Section center>
        <div style={{ marginTop: '20vh' }}>
          <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: 300, letterSpacing: '0.3em', margin: 0, color: 'var(--fire-1)' }}>WEB DEVELOPER</h2>
          <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.3)', margin: '15px auto' }}></div>
          <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: 300, letterSpacing: '0.3em', margin: 0, color: '#fff' }}>FRONT-END DEVELOPER</h2>
        </div>
      </Section>

      {/* 2: Weather Website */}
      <Section>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, margin: '0 0 10px 0', textTransform: 'uppercase', lineHeight: 1.1 }}>01 <br/>Weather</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
          Real-time weather platform with lightning-fast city search API.
        </p>
        <p style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--fire-1)' }}>HTML5 • CSS3 • JS • API</p>
      </Section>

      {/* 3: Resume Forge Pro */}
      <Section right>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, margin: '0 0 10px 0', textTransform: 'uppercase', lineHeight: 1.1 }}>02 <br/>Resume <br/>Forge</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
          Interactive resume builder engineered with heavy DOM manipulation.
        </p>
        <p style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--fire-1)' }}>REACT • VITE • CSS MODULES</p>
      </Section>

      {/* 4: Nexus Meet */}
      <Section>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, margin: '0 0 10px 0', textTransform: 'uppercase', lineHeight: 1.1 }}>03 <br/>Nexus Meet</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
          Secure online meeting platform backed by a robust PHP/MySQL stack.
        </p>
        <p style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--fire-1)' }}>PHP • MYSQL • WEBRTC</p>
      </Section>

      {/* 5: Med 24/7 */}
      <Section right>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, margin: '0 0 10px 0', textTransform: 'uppercase', lineHeight: 1.1 }}>04 <br/>Med 24/7</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
          Comprehensive healthcare management and appointment system.
        </p>
        <p style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--fire-1)' }}>JS • PHP • MYSQL • AJAX</p>
      </Section>

      {/* 6: Chronosphere */}
      <Section>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, margin: '0 0 10px 0', textTransform: 'uppercase', lineHeight: 1.1 }}>05 <br/>Chronosphere</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
          Global time management and celestial tracking application.
        </p>
        <p style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--fire-1)' }}>THREE.JS • REACT • API</p>
      </Section>

      {/* 7: Tech Stack / About */}
      <Section center>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, margin: '0 0 20px 0', textTransform: 'uppercase' }}>THE BUILDER</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }}>
          BCA final-year student and front-end-focused Web Developer with hands-on experience independently designing and building five end-to-end web applications.
        </p>
      </Section>

      {/* 8: Finale */}
      <Section center>
        <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: 300, letterSpacing: '0.2em', marginBottom: '40px' }}>LET'S BUILD SOMETHING.</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', letterSpacing: '2px', fontSize: '0.9rem', padding: '10px 20px', border: '1px solid rgba(255,255,255,0.2)' }}>GITHUB</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', letterSpacing: '2px', fontSize: '0.9rem', padding: '10px 20px', border: '1px solid rgba(255,255,255,0.2)' }}>LINKEDIN</a>
          <a href="mailto:shreyashsingh0717@gmail.com" style={{ color: 'var(--bg-dark)', background: 'var(--fire-1)', textDecoration: 'none', letterSpacing: '2px', fontSize: '0.9rem', padding: '10px 20px' }}>EMAIL</a>
        </div>
      </Section>

    </div>
  );
}

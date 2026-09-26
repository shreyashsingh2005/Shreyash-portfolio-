export const PARTICLE_COUNT = 15000;

// Utility to random float between min and max
const random = (min, max) => Math.random() * (max - min) + min;

// State 0: Point / Core
export const getCorePositions = () => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const radius = Math.random() * 0.1;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = radius * Math.cos(phi);
  }
  return pos;
};

// State 1: Text SHREYASH
export const getTextPositions = () => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '900 180px Arial';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('SHREYASH', canvas.width / 2, canvas.height / 2);
  
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const validPixels = [];
  
  for (let y = 0; y < canvas.height; y+=2) {
    for (let x = 0; x < canvas.width; x+=2) {
      const idx = (y * canvas.width + x) * 4;
      if (imgData[idx] > 128) {
        // scale to fit within [-4, 4]
        validPixels.push({ x: (x - canvas.width/2) * 0.007, y: -(y - canvas.height/2) * 0.007 });
      }
    }
  }
  
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = validPixels[i % validPixels.length] || {x:0, y:0};
    pos[i * 3] = p.x + (Math.random() - 0.5) * 0.05; 
    pos[i * 3 + 1] = p.y + (Math.random() - 0.5) * 0.05;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 0.3; 
  }
  return pos;
};

// State 2: Weather
export const getWeatherPositions = () => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = random(-5, 5);
    const z = random(-3, 2);
    const y = Math.sin(x * 0.5) * 2.0 + Math.cos(z * 1.5) * 1.0 + random(-1, 1);
    
    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;
  }
  return pos;
};

// State 3: Document
export const getDocumentPositions = () => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  const lines = 40;
  const pointsPerLine = Math.floor(PARTICLE_COUNT / lines);
  
  let pIdx = 0;
  for (let l = 0; l < lines; l++) {
    const y = 3 - (l * 0.15); 
    const width = l % 6 === 0 ? 3 : 5; 
    const startX = -2.5;
    
    for (let p = 0; p < pointsPerLine; p++) {
      if (pIdx >= PARTICLE_COUNT) break;
      pos[pIdx * 3] = startX + (p / pointsPerLine) * width + random(-0.02, 0.02);
      pos[pIdx * 3 + 1] = y + random(-0.02, 0.02);
      pos[pIdx * 3 + 2] = random(-0.05, 0.05);
      pIdx++;
    }
  }
  
  while(pIdx < PARTICLE_COUNT) {
    pos[pIdx * 3] = random(-2, 2);
    pos[pIdx * 3 + 1] = random(-2, 2);
    pos[pIdx * 3 + 2] = random(-1, 1);
    pIdx++;
  }
  return pos;
};

// State 4: Network
export const getNetworkPositions = () => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  const nodeCount = 50;
  const nodes = [];
  
  for(let i=0; i<nodeCount; i++) {
    nodes.push({ x: random(-4, 4), y: random(-3, 3), z: random(-2, 2) });
  }
  
  for(let i=0; i<PARTICLE_COUNT; i++) {
    if (Math.random() > 0.4) {
      const node = nodes[i % nodeCount];
      pos[i*3] = node.x + random(-0.2, 0.2);
      pos[i*3+1] = node.y + random(-0.2, 0.2);
      pos[i*3+2] = node.z + random(-0.2, 0.2);
    } else {
      const n1 = nodes[Math.floor(Math.random()*nodeCount)];
      const n2 = nodes[Math.floor(Math.random()*nodeCount)];
      const t = Math.random();
      pos[i*3] = n1.x + (n2.x - n1.x) * t + random(-0.02, 0.02);
      pos[i*3+1] = n1.y + (n2.y - n1.y) * t + random(-0.02, 0.02);
      pos[i*3+2] = n1.z + (n2.z - n1.z) * t + random(-0.02, 0.02);
    }
  }
  return pos;
};

// State 5: Panels
export const getDataPositions = () => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  const panels = [
    { x: -2.5, y: 0, w: 2, h: 5 },
    { x: 1.5, y: 1.5, w: 4, h: 2 },
    { x: 1.5, y: -1.5, w: 4, h: 2 },
  ];
  
  for(let i=0; i<PARTICLE_COUNT; i++) {
    const panel = panels[i % panels.length];
    pos[i*3] = panel.x + random(0, panel.w) - panel.w/2;
    pos[i*3+1] = panel.y + random(0, panel.h) - panel.h/2;
    pos[i*3+2] = Math.sin(pos[i*3]*8)*0.2; 
  }
  return pos;
};

// State 6: Planet
export const getPlanetPositions = () => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  const ringCount = Math.floor(PARTICLE_COUNT * 0.4);
  
  for(let i=0; i<PARTICLE_COUNT; i++) {
    if (i < ringCount) {
      const angle = random(0, Math.PI * 2);
      const r = random(2.8, 4.5);
      pos[i*3] = Math.cos(angle) * r;
      pos[i*3+1] = random(-0.1, 0.1); 
      pos[i*3+2] = Math.sin(angle) * r;
    } else {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + random(-0.05, 0.05);
      
      pos[i*3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i*3+2] = r * Math.cos(phi);
    }
  }
  return pos;
};

// State 7: Constellation
export const getConstellationPositions = () => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const techCenters = [];
    for(let i=0; i<10; i++) {
        techCenters.push({ x: random(-4, 4), y: random(-3, 3), z: random(-2, 2) });
    }

    for(let i=0; i<PARTICLE_COUNT; i++) {
        const center = techCenters[i % techCenters.length];
        const distance = Math.pow(Math.random(), 3) * 1.5; 
        const angle = random(0, Math.PI * 2);
        const phi = Math.acos(random(-1, 1));

        pos[i*3] = center.x + distance * Math.sin(phi) * Math.cos(angle);
        pos[i*3+1] = center.y + distance * Math.sin(phi) * Math.sin(angle);
        pos[i*3+2] = center.z + distance * Math.cos(phi);
    }
    return pos;
};

export const getStatePositions = (index) => {
  switch(index) {
    case 0: return getCorePositions();
    case 1: return getTextPositions();
    case 2: return getWeatherPositions();
    case 3: return getDocumentPositions();
    case 4: return getNetworkPositions();
    case 5: return getDataPositions();
    case 6: return getPlanetPositions();
    case 7: return getConstellationPositions();
    case 8: return getCorePositions(); 
    default: return getCorePositions();
  }
}

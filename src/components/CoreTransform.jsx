import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { getStatePositions, PARTICLE_COUNT } from '../utils/particleGenerators';

export default function CoreTransform() {
  const pointsRef = useRef();
  const scroll = useScroll();
  
  // Pre-generate all states
  const states = useMemo(() => {
    const arr = [];
    for (let i = 0; i <= 8; i++) {
      arr.push(getStatePositions(i));
    }
    return arr;
  }, []);

  const positions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);
  const colors = useMemo(() => {
    const col = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Base color: cool cyan to icy blue
      const r = 0.0 + Math.random() * 0.2;
      const g = 0.5 + Math.random() * 0.5;
      const b = 0.8 + Math.random() * 0.2;
      col[i * 3] = r;
      col[i * 3 + 1] = g;
      col[i * 3 + 2] = b;
    }
    return col;
  }, []);

  const targetPositions = useRef(new Float32Array(PARTICLE_COUNT * 3));
  
  // Custom easing function
  const easeInOutCubic = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Determine target scroll state
    const numStates = 8;
    const progress = scroll.offset * numStates;
    const currentState = Math.floor(progress);
    const nextState = Math.min(currentState + 1, numStates);
    
    // Local progress between the two states (0 to 1)
    let fraction = progress - currentState;
    
    // Add some "stickiness" or easing to the transitions
    fraction = easeInOutCubic(fraction);
    
    const currentArr = states[currentState];
    const nextArr = states[nextState];
    const geomPos = pointsRef.current.geometry.attributes.position.array;
    
    // We add a bit of noise based on time
    const time = state.clock.getElapsedTime();
    
    // Mouse interaction
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
    
    for (let i = 0; i < PARTICLE_COUNT * 3; i+=3) {
      // Interpolate base shape
      const targetX = currentArr[i] + (nextArr[i] - currentArr[i]) * fraction;
      const targetY = currentArr[i+1] + (nextArr[i+1] - currentArr[i+1]) * fraction;
      const targetZ = currentArr[i+2] + (nextArr[i+2] - currentArr[i+2]) * fraction;
      
      // Add subtle noise/floating effect
      const noiseX = Math.sin(time + i) * 0.02;
      const noiseY = Math.cos(time + i * 0.5) * 0.02;
      
      // Mouse repulsion/attraction (very subtle)
      const dx = targetX - (mouseX * 5); // scale mouse to world approx
      const dy = targetY - (mouseY * 5);
      const dist = Math.sqrt(dx*dx + dy*dy);
      const interaction = Math.max(0, 1 - dist/2) * 0.2;
      
      const repelX = (dx / (dist + 0.1)) * interaction;
      const repelY = (dy / (dist + 0.1)) * interaction;
      
      // Smoothly move current geometry to target
      geomPos[i] += (targetX + noiseX + repelX - geomPos[i]) * 0.1;
      geomPos[i+1] += (targetY + noiseY + repelY - geomPos[i+1]) * 0.1;
      geomPos[i+2] += (targetZ - geomPos[i+2]) * 0.1;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Object level rotation for extra dynamics (reacts to scroll and mouse)
    pointsRef.current.rotation.y = time * 0.05 + scroll.offset * Math.PI + (mouseX * 0.2);
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1 - (mouseY * 0.2);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

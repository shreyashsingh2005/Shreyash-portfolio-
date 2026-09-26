import React from 'react';
import { motion } from 'framer-motion';
import './FluidBackground.css';

const FluidBackground = () => {
  return (
    <div className="fluid-bg-container">
      {/* Noise Overlay for premium texture */}
      <div className="noise-overlay"></div>
      
      {/* Abstract Glowing Blobs */}
      <motion.div 
        className="fluid-blob blob-orange"
        animate={{
          x: [0, 150, -100, 0],
          y: [0, 100, 200, 0],
          scale: [1, 1.2, 0.9, 1],
          rotate: [0, 90, 180, 360]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="fluid-blob blob-blue"
        animate={{
          x: [0, -200, 150, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.3, 0.8, 1],
          rotate: [0, -90, -180, -360]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      
       <motion.div 
        className="fluid-blob blob-purple"
        animate={{
          x: [0, 100, -200, 0],
          y: [0, -200, -50, 0],
          scale: [1, 0.8, 1.2, 1],
          rotate: [0, 45, 90, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

       <motion.div 
        className="fluid-blob blob-dark-blue"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 200, -150, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default FluidBackground;

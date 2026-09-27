import React from 'react';
import { motion } from 'framer-motion';

export default function Statement() {
  return (
    <section style={{ background: 'var(--red)', padding: '60px 0', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center' }}>
      
      <div className="marquee-container" style={{ whiteSpace: 'nowrap', display: 'flex', width: '200vw' }}>
        <motion.div 
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
          style={{ display: 'flex', gap: '32px', paddingRight: '32px', flexShrink: 0 }}
        >
          {Array(4).fill(0).map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(3rem, 6vw, 5rem)', textTransform: 'uppercase', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                GOOD INTERFACES MAKE THINGS EASIER
              </span>
              <span style={{ color: 'var(--black)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>✦</span>
            </div>
          ))}
        </motion.div>
        
        {/* Duplicate for seamless infinite scroll */}
        <motion.div 
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
          style={{ display: 'flex', gap: '32px', paddingRight: '32px', flexShrink: 0 }}
        >
          {Array(4).fill(0).map((_, i) => (
            <div key={i + 4} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(3rem, 6vw, 5rem)', textTransform: 'uppercase', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                GOOD INTERFACES MAKE THINGS EASIER
              </span>
              <span style={{ color: 'var(--black)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>✦</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

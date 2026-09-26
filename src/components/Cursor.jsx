import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const isClickable = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button');
      setHovering(isClickable);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none',
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: 'transform 0.1s cubic-bezier(0.16,1,0.3,1)',
      }}>
        {/* Main red dot */}
        <div style={{
          position: 'absolute', top: '-4px', left: '-4px',
          width: '8px', height: '8px', borderRadius: '50%',
          background: 'var(--red)',
          transform: `scale(${hovering ? 0 : (clicked ? 0.5 : 1)})`,
          transition: 'transform 0.3s var(--ease)',
        }} />
        
        {/* Ring that expands on hover */}
        <div style={{
          position: 'absolute', top: '-16px', left: '-16px',
          width: '32px', height: '32px', borderRadius: '50%',
          border: `1px solid ${hovering ? 'rgba(196,28,28,0.8)' : 'rgba(255,255,255,0.2)'}`,
          background: hovering ? 'rgba(196,28,28,0.1)' : 'transparent',
          transform: `scale(${hovering ? 1.5 : (clicked ? 0.8 : 1)})`,
          transition: 'transform 0.4s var(--ease), border-color 0.4s, background 0.4s',
          boxShadow: hovering ? '0 0 20px rgba(196,28,28,0.3)' : 'none',
        }} />
      </div>

      <style>{`
        * { cursor: none !important; }
        @media (pointer: coarse) {
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  );
}

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Statement() {
  const [ref, visible] = useScrollReveal(0.2);

  return (
    <section style={{ background: 'var(--red)', padding: '100px 0', overflow: 'hidden', position: 'relative' }}>
      {/* Giant quote mark */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-10%', left: '-2%',
        fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 'clamp(16rem, 35vw, 40rem)',
        lineHeight: 0.7, color: 'rgba(0,0,0,0.15)',
        userSelect: 'none', pointerEvents: 'none',
      }}>"</div>

      <div className="container" ref={ref}>
        <div style={{
          maxWidth: '920px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative', zIndex: 1,
        }}>
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              textTransform: 'uppercase',
              color: 'var(--white)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: '32px',
            }}>
              "Good interfaces aren't just built to look good. They're built to make things easier."
            </h2>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px',
            }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.5)' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.8)', fontStyle: 'italic',
                letterSpacing: '0.1em',
              }}>— SHREYASH SINGH</span>
              <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.5)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { num: '05+', label: 'Web Applications', sub: 'Built End-to-End' },
  { num: '2026', label: 'BCA Graduation', sub: 'Expected Year' },
  { num: 'FRONTEND', label: 'Primary Focus', sub: 'Core Specialization' },
  { num: 'FULL-STACK', label: 'Project Exposure', sub: 'Frontend + Backend' },
];

export default function Stats() {
  const [ref, visible] = useScrollReveal(0.15);

  return (
    <section style={{ background: 'var(--black-deep)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      {/* Red decorative line top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--red) 0%, transparent 60%)' }} />

      <div className="container" ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '64px 28px',
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              textAlign: 'center',
              position: 'relative',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
            }}>
              {/* Red dot top */}
              <div style={{ width: '4px', height: '4px', background: 'var(--red)', borderRadius: '50%', margin: '0 auto 20px' }} />

              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 'clamp(2.2rem, 3.8vw, 4.5rem)',
                color: 'var(--white)', lineHeight: 1, marginBottom: '10px',
                letterSpacing: '-0.01em',
              }}>{s.num}</div>

              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '0.8125rem', textTransform: 'uppercase',
                letterSpacing: '0.18em', color: 'var(--red)', marginBottom: '5px',
              }}>{s.label}</div>

              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '0.625rem',
                textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--dim)',
              }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .stats-grid > div:nth-child(2) { border-right: none !important; }
          .stats-grid > div:nth-child(1),
          .stats-grid > div:nth-child(2) { border-bottom: 1px solid var(--border); }
        }
        @media (max-width: 400px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid var(--border) !important; padding: 44px 24px !important; }
        }
      `}</style>
    </section>
  );
}

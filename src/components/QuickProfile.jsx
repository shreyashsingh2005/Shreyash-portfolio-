import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function QuickProfile() {
  const [ref, visible] = useScrollReveal(0.15);

  const metadata = [
    { num: '01', label: 'Frontend' },
    { num: '02', label: 'JavaScript' },
    { num: '03', label: 'API Integration' },
    { num: '04', label: 'Full-Stack Exposure' },
  ];

  return (
    <section style={{ background: 'var(--black-card)', padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '38% 62%',
          gap: '60px',
          alignItems: 'start',
        }} className="profile-grid">

          {/* LEFT */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(7rem, 14vw, 14rem)',
              lineHeight: 0.85,
              WebkitTextStroke: '2px rgba(196, 28, 28, 0.6)',
              color: 'transparent',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}>02</div>
            <div className="label" style={{ marginBottom: '8px' }}>Quick Profile</div>
            <div style={{ width: '40px', height: '1px', background: 'var(--red)', marginBottom: '0' }} />
          </div>

          {/* RIGHT */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              color: 'var(--white)',
              marginBottom: '28px',
              maxWidth: '700px',
            }}>
              Building Digital Experiences<br />
              That Solve<br />
              <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}>Real Problems.</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              lineHeight: 1.75,
              color: 'var(--muted)',
              maxWidth: '560px',
              marginBottom: '40px',
            }}>
              I'm a BCA final-year student from Ghaziabad, focused on frontend development
              and independently building real web applications end-to-end. I work across
              the stack — from responsive UI to PHP/MySQL backends — and ship things that
              actually work.
            </p>

            {/* Metadata tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {metadata.map((m, i) => (
                <div key={i} style={{
                  padding: '8px 16px',
                  border: '1px solid var(--border-mid)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--white)',
                  transition: 'border-color 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--red)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-mid)'}
                >
                  <span style={{ color: 'var(--red)', fontWeight: 700 }}>{m.num}</span>
                  <span style={{ width: '1px', height: '12px', background: 'var(--border-mid)' }} />
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .profile-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
        }
      `}</style>
    </section>
  );
}

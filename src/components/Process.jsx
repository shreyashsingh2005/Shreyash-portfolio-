import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { num: '01', title: 'Discover', desc: 'Understand the real problem, define requirements and identify constraints before touching any code.' },
  { num: '02', title: 'Plan', desc: 'Structure the interface architecture, database schema and functionality flow. Plan it before you build it.' },
  { num: '03', title: 'Build', desc: 'Develop frontend and backend in parallel — responsive UI, DOM logic, API calls, and database integration.' },
  { num: '04', title: 'Test', desc: 'Debug thoroughly, validate edge cases and improve the experience across browsers and screen sizes.' },
  { num: '05', title: 'Deploy', desc: 'Prepare the project for real-world use. Clean code, final checks, and ready to ship.' },
];

export default function Process() {
  const [ref, visible] = useScrollReveal(0.08);

  return (
    <section style={{ padding: '110px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '60px', marginBottom: '72px' }} className="proc-header">
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-36px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--red)',
              marginBottom: '28px',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--red)' }} />
              06 / Process
            </span>

            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'clamp(4rem, 7vw, 7.5rem)',
              textTransform: 'uppercase', lineHeight: 0.86,
            }}>
              <div style={{ color: 'var(--white)' }}>HOW I</div>
              <div style={{ WebkitTextStroke: '2px rgba(255,255,255,0.65)', color: 'transparent' }}>WORK</div>
            </div>
          </div>

          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s',
            display: 'flex', alignItems: 'flex-end', paddingBottom: '4px',
          }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '400px' }}>
              Every project follows a deliberate process — from understanding
              the real problem to shipping something that actually works.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative', paddingLeft: '28px' }}>
          {/* Vertical red line */}
          <div style={{
            position: 'absolute', top: '22px', bottom: '22px', left: '0',
            width: '1px',
            background: 'linear-gradient(to bottom, var(--red), rgba(255,42,42,0.1))',
          }} />

          {steps.map((step, i) => (
            <div key={step.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 1fr',
                gap: '32px',
                alignItems: 'start',
                borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
                padding: '32px 0',
                position: 'relative',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-28px)',
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${0.25 + i * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.25 + i * 0.1}s`,
              }}
            >
              {/* Number dot */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: '48px', height: '48px',
                  border: '1px solid var(--border-mid)',
                  background: 'var(--black)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', zIndex: 2, flexShrink: 0,
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.9375rem', color: 'var(--red)', letterSpacing: '0.05em' }}>{step.num}</span>
                </div>
              </div>

              {/* Content */}
              <div className="process-content" style={{ paddingTop: '10px', paddingRight: '20%' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 900,
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  color: 'var(--red)', marginBottom: '10px',
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                  lineHeight: 1.72, color: 'var(--muted)',
                }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .proc-header { grid-template-columns: 1fr !important; gap: 32px !important; }
          .process-content { padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}

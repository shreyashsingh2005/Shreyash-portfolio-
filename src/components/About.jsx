import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [ref, visible] = useScrollReveal(0.1);

  const rev = (delay = 0, axis = 'Y') => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate(0,0)' : (axis === 'X' ? 'translateX(-40px)' : 'translateY(36px)'),
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  const coursework = ['Web Development', 'Database Management', 'Data Structures', 'Software Engineering', 'Programming Fundamentals'];

  return (
    <section id="about" style={{ padding: '110px 0', borderTop: '1px solid var(--border)', background: 'var(--black-section)' }}>
      <div className="container" ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: '42% 58%', gap: '0' }} className="about-grid">

          {/* LEFT */}
          <div style={{
            ...rev(0, 'X'),
            paddingRight: '64px',
            borderRight: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: '32px',
          }}>
            <div>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--red)',
                marginBottom: '28px',
              }}>
                <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--red)' }} />
                04 / About Me
              </span>

              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 'clamp(4rem, 7.5vw, 8rem)',
                textTransform: 'uppercase', lineHeight: 0.86,
              }}>
                <div style={{ color: 'var(--white)', display: 'block' }}>ABOUT</div>
                <div style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)', color: 'transparent', display: 'block' }}>ME</div>
              </div>

              <div style={{ width: '48px', height: '2px', background: 'var(--red)', marginTop: '28px' }} />
            </div>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.9375rem',
              lineHeight: 1.78, color: 'var(--muted)', maxWidth: '360px',
            }}>
              I design and build web applications without a team. Every project
              is planned, architected, and shipped by me — frontend to backend.
              My focus is clean interfaces and backend logic that holds up under real use.
            </p>
          </div>

          {/* RIGHT */}
          <div style={{ ...rev(0.2), paddingLeft: '64px' }}>

            {/* Education card */}
            <div style={{ marginBottom: '48px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--red)',
                marginBottom: '20px',
              }}>
                <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--red)' }} />
                Education
              </span>

              <div style={{
                border: '1px solid var(--border)',
                background: 'var(--black-card)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Red corner triangle */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: '0', height: '0',
                  borderTop: '52px solid var(--red)',
                  borderLeft: '52px solid transparent',
                }} />
                {/* Top accent line */}
                <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--red), transparent 60%)' }} />

                <div className="edu-card-body" style={{ padding: '32px 40px 36px' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 900,
                    fontSize: '3.5rem', color: 'var(--white)', lineHeight: 1, marginBottom: '6px',
                  }}>BCA</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                    color: 'var(--muted)', marginBottom: '20px',
                  }}>Bachelor of Computer Applications</div>

                  <div style={{ height: '1px', background: 'var(--border)', marginBottom: '20px' }} />

                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.9375rem',
                    fontWeight: 600, color: 'var(--white)', marginBottom: '6px',
                  }}>HI-TECH Institute of Engineering and Technology</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.8125rem',
                    color: 'var(--muted)', marginBottom: '20px',
                  }}>Ghaziabad, Uttar Pradesh</div>

                  <span style={{
                    display: 'inline-block',
                    padding: '5px 14px',
                    background: 'rgba(196,28,28,0.12)',
                    border: '1px solid rgba(196,28,28,0.5)',
                    fontFamily: 'var(--font-body)', fontSize: '0.625rem',
                    textTransform: 'uppercase', letterSpacing: '0.2em',
                    color: 'var(--red)', fontWeight: 600,
                  }}>Expected 2026</span>
                </div>
              </div>
            </div>

            {/* Coursework */}
            <div>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--red)',
                marginBottom: '16px',
              }}>
                <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--red)' }} />
                Relevant Coursework
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {coursework.map((c, i) => <span key={i} className="tag">{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:first-child {
            padding-right: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
            padding-bottom: 48px !important;
            margin-bottom: 0 !important;
          }
          .about-grid > div:last-child { padding-left: 0 !important; padding-top: 48px; }
        }
        @media (max-width: 480px) {
          .edu-card-body { padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}

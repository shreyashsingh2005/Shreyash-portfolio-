import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'DOM Manipulation', 'AJAX', 'Fetch API', 'Responsive Design', 'UI/UX Design', 'Cross-Browser Compat.'],
  },
  {
    label: 'Backend',
    skills: ['PHP', 'MySQL', 'CRUD Operations', 'Session Handling', 'Apache', 'XAMPP'],
  },
  {
    label: 'Tools & Other',
    skills: ['Git', 'GitHub', 'VS Code', 'REST APIs', 'Prompt Engineering', 'AI-Assisted Dev', 'Debugging', 'Version Control'],
  },
];

export default function Skills() {
  const [ref, visible] = useScrollReveal(0.08);

  return (
    <section id="skills" style={{ background: 'var(--black-card)', padding: '110px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: '36% 64%', gap: '70px' }} className="skills-grid">

          {/* LEFT */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-36px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
            position: 'sticky', top: '100px', alignSelf: 'start',
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--red)',
              marginBottom: '28px',
            }}>
              <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--red)' }} />
              05 / Stack
            </span>

            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'clamp(3.5rem, 6.5vw, 7rem)',
              textTransform: 'uppercase', lineHeight: 0.86, letterSpacing: '-0.02em',
            }}>
              <div style={{ color: 'var(--white)' }}>TOOLS</div>
              <div style={{ color: 'var(--white)' }}>I BUILD</div>
              <div style={{ WebkitTextStroke: '2px rgba(255,255,255,0.65)', color: 'transparent' }}>WITH</div>
            </div>

            <div style={{ width: '48px', height: '2px', background: 'var(--red)', marginTop: '28px', marginBottom: '24px' }} />

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.72, color: 'var(--muted)', maxWidth: '280px' }}>
              A focused stack built through practical, end-to-end project experience.
            </p>
          </div>

          {/* RIGHT */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(36px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}>
            {skillGroups.map((group, gi) => (
              <div key={group.label} style={{
                marginBottom: gi < skillGroups.length - 1 ? '44px' : 0,
                paddingBottom: gi < skillGroups.length - 1 ? '44px' : 0,
                borderBottom: gi < skillGroups.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.6875rem',
                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em',
                    color: 'var(--red)',
                  }}>{group.label}</span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.skills.map((skill, si) => (
                    <span key={si} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
          .skills-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}

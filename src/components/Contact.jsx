import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactItems = [
  { label: 'Email', value: 'shreyashsingh9717@gmail.com', href: 'mailto:shreyashsingh9717@gmail.com' },
  { label: 'GitHub', value: 'github.com/shreyashsingh2005', href: 'https://github.com/shreyashsingh2005' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shreyash-singh', href: 'https://www.linkedin.com/in/shreyash-singh-a1a437345' },
  { label: 'Location', value: 'Ghaziabad, India', href: null },
];

export default function Contact() {
  const [ref, visible] = useScrollReveal(0.08);

  const rev = (delay = 0, x = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate(0,0)' : `translate(${x}px, 36px)`,
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <section id="contact" style={{ padding: '120px 0 110px', borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>

        {/* Giant heading */}
        <div style={{ marginBottom: '72px', ...rev(0) }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--red)',
            marginBottom: '24px',
          }}>
            <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--red)' }} />
            07 / Contact
          </span>

          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(4rem, 11vw, 12rem)',
            textTransform: 'uppercase', lineHeight: 0.86,
            letterSpacing: '-0.02em',
          }}>
            <div style={{ color: 'var(--white)' }}>LET'S BUILD</div>
            <div style={{ color: 'var(--white)' }}>SOMETHING</div>
            <div style={{ color: 'var(--red)' }}>USEFUL.</div>
          </div>
        </div>

        {/* Content row */}
        <div style={{ display: 'grid', gridTemplateColumns: '42% 58%', gap: '60px', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <div style={rev(0.2, -24)}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1.0625rem',
              lineHeight: 1.78, color: 'var(--muted)',
              marginBottom: '40px', maxWidth: '380px',
            }}>
              Have an idea, opportunity, or project?
              Let's create something meaningful together.
            </p>
            <a href="mailto:shreyashsingh9717@gmail.com" className="btn-red" style={{ display: 'inline-flex' }}>
              Let's Talk →
            </a>
          </div>

          {/* Right — detail rows */}
          <div style={rev(0.3, 24)}>
            {contactItems.map((item, i) => (
              <div key={i} className="contact-row" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '24px 0',
                borderBottom: i < contactItems.length - 1 ? '1px solid var(--border)' : 'none',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.625rem',
                  textTransform: 'uppercase', letterSpacing: '0.25em',
                  color: 'var(--red)', fontWeight: 600, flexShrink: 0,
                }}>{item.label}</span>

                {item.href ? (
                  <a href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.9375rem',
                      color: 'var(--white)', fontWeight: 400, transition: 'color 0.25s',
                      textAlign: 'right', wordBreak: 'break-word',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--red)'}
                    onMouseLeave={e => e.target.style.color = 'var(--white)'}
                  >{item.value}</a>
                ) : (
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--muted)', textAlign: 'right' }}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 52px !important; }
        }
        @media (max-width: 480px) {
          .contact-row { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; padding: 18px 0 !important; }
          .contact-row > span:first-child { margin-bottom: 4px; }
          .contact-row > a, .contact-row > span:last-child { text-align: left !important; font-size: 1rem !important; }
        }
      `}</style>
    </section>
  );
}

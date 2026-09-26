import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Resume() {
  const [ref, visible] = useScrollReveal(0.1);

  const rev = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(36px)',
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <section id="resume" style={{ padding: '140px 0', borderTop: '1px solid var(--border)', background: 'var(--black-section)' }}>
      <div className="container" ref={ref}>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={rev(0.1)}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--red)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.35em', color: 'var(--red)' }}>05 / Resume</span>
              <span style={{ width: '40px', height: '1px', background: 'var(--red)' }} />
            </div>
            
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', textTransform: 'uppercase', color: 'var(--white)', lineHeight: 1.05, marginBottom: '24px' }}>
              Professional <br /> <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}>Curriculum Vitae</span>
            </h2>
            
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '56px', marginInline: 'auto', maxWidth: '520px' }}>
              A comprehensive overview of my experience, technical skills, and academic background. Click below to view or securely download a copy.
            </p>
          </div>

          <div style={{ ...rev(0.3), display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            
            <a 
              href="/resume-preview.png" 
              target="_blank" rel="noopener noreferrer"
              className="res-btn res-view"
            >
              <div className="res-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <span>View Resume</span>
            </a>

            <a 
              href="/resume-preview.png" 
              download="Shreyash_Singh_Resume.png" 
              className="res-btn res-down"
            >
              <div className="res-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <span>Download PDF</span>
            </a>

          </div>

        </div>

      </div>
      <style>{`
        .res-btn {
          display: inline-flex; align-items: center; gap: 18px;
          padding: 12px 36px 12px 12px; 
          border-radius: 100px; text-decoration: none; cursor: pointer;
          font-family: var(--font-display); font-weight: 900; font-size: 1.125rem;
          text-transform: uppercase; letter-spacing: 0.05em;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        
        .res-view {
          background: var(--black-card); border: 1px solid var(--border); color: var(--white);
        }
        .res-view .res-icon {
          background: rgba(255,255,255,0.04); color: var(--muted); border: 1px solid rgba(255,255,255,0.05);
        }
        .res-view:hover {
          background: #1a1a1a; border-color: var(--dim); transform: translateY(-4px);
        }
        .res-view:hover .res-icon {
          background: rgba(255,255,255,0.1); color: var(--white);
        }

        .res-down {
          background: var(--red); border: 1px solid var(--red); color: #fff;
        }
        .res-down .res-icon {
          background: rgba(255,255,255,0.2); color: #fff;
        }
        .res-down:hover {
          background: var(--red-bright); border-color: var(--red-bright); transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(196,28,28,0.25);
        }

        .res-icon {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; justify-content: center; align-items: center;
          transition: all 0.4s ease;
        }

        @media (max-width: 480px) {
          .res-btn { width: 100%; justify-content: flex-start; }
        }
      `}</style>
    </section>
  );
}

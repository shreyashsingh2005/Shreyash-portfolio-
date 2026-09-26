import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Active section tracking
      const sections = ['home', 'projects', 'about', 'skills', 'contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: '60px',
        background: scrolled ? 'rgba(8,8,8,0.97)' : 'rgba(10,10,10,0.6)',
        borderBottom: scrolled ? '1px solid #2a2a2a' : '1px solid transparent',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.4s var(--ease)',
      }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 6%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <button onClick={() => scrollTo('home')} style={{ display: 'flex', flexDirection: 'column', gap: '2px', cursor: 'pointer', background: 'none', border: 'none', padding: '4px 0' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', letterSpacing: '0.06em', color: 'var(--white)', lineHeight: 1 }}>SHREYASH SINGH</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--red)', fontWeight: 600 }}>Web Developer</span>
          </button>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-nav">
            <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
              {navLinks.map(link => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500,
                    textTransform: 'uppercase', letterSpacing: '0.2em',
                    color: activeSection === link.id ? 'var(--white)' : 'var(--dim)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    transition: 'color 0.25s',
                    position: 'relative', padding: '4px 0',
                  }}>
                    {link.label}
                    {activeSection === link.id && (
                      <span style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '1px', background: 'var(--red)' }} />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)', boxShadow: '0 0 8px var(--red)', animation: 'navPulse 2s ease infinite', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--dim)', whiteSpace: 'nowrap' }}>Available</span>
            </div>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="hamburger" style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '8px', cursor: 'pointer', background: 'none', border: 'none', minWidth: '44px', minHeight: '44px', alignItems: 'center', justifyContent: 'center' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '1.5px',
                background: menuOpen && i === 1 ? 'transparent' : 'var(--white)',
                transition: 'all 0.32s var(--ease)',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translateY(4.5px) translateX(4.5px)'
                  : i === 2 ? 'rotate(-45deg) translateY(-4.5px) translateX(4.5px)' : 'none'
                  : 'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <div style={{
        position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 999,
        background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(20px)',
        borderBottom: menuOpen ? '1px solid var(--border)' : 'none',
        maxHeight: menuOpen ? '320px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s var(--ease)',
      }}>
        <div style={{ padding: menuOpen ? '16px 6% 24px' : '0 6%' }}>
          {navLinks.map((link, i) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
              textTransform: 'uppercase', color: 'var(--white)',
              padding: '12px 0',
              borderBottom: i < navLinks.length - 1 ? '1px solid var(--border)' : 'none',
              letterSpacing: '0.03em', background: 'none', border: 'none',
              cursor: 'pointer',
              borderBottom: i < navLinks.length - 1 ? '1px solid var(--border)' : 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
            >{link.label}</button>
          ))}
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)', boxShadow: '0 0 8px var(--red)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--dim)' }}>Available for Opportunities</span>
          </div>
        </div>
      </div>

      {/* Overlay to close menu */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 998, background: 'rgba(0,0,0,0.5)' }} />
      )}

      <style>{`
        @keyframes navPulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

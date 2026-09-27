import React, { useEffect, useState, useRef } from 'react';

/* ─────────────────────────────────────────
   RICH DEVELOPER DASHBOARD VISUAL
   Full IDE-style layout — Responsive
───────────────────────────────────────── */
const DevVisual = () => {
  const [activeLine, setActiveLine] = useState(2);

  useEffect(() => {
    const id = setInterval(() => setActiveLine(p => (p % 6) + 1), 1200);
    return () => clearInterval(id);
  }, []);

  const codeLines = [
    { num: 1, tokens: [{ t: 'const ', c: '#c41c1c' }, { t: 'shreyash', c: '#8ad4ff' }, { t: ' = {', c: '#fff' }] },
    { num: 2, tokens: [{ t: '  role', c: '#a0a0a0' }, { t: ': ', c: '#fff' }, { t: '"Web Developer"', c: '#98ff98' }, { t: ',', c: '#fff' }] },
    { num: 3, tokens: [{ t: '  stack', c: '#a0a0a0' }, { t: ': ', c: '#fff' }, { t: '["JS"', c: '#ffd580' }, { t: ', ', c: '#fff' }, { t: '"PHP"', c: '#ffd580' }, { t: ', ', c: '#fff' }, { t: '"MySQL"]', c: '#ffd580' }, { t: ',', c: '#fff' }] },
    { num: 4, tokens: [{ t: '  focus', c: '#a0a0a0' }, { t: ': ', c: '#fff' }, { t: '"Frontend"', c: '#98ff98' }, { t: ',', c: '#fff' }] },
    { num: 5, tokens: [{ t: '  open', c: '#a0a0a0' }, { t: ': ', c: '#fff' }, { t: 'true', c: '#c41c1c' }, { t: ',', c: '#fff' }] },
    { num: 6, tokens: [{ t: '};', c: '#c41c1c' }] },
  ];

  const files = [
    { name: 'index.jsx', active: true, icon: '⚛' },
    { name: 'style.css', active: false, icon: '#' },
    { name: 'api.js', active: false, icon: '⚡' },
    { name: 'db.php', active: false, icon: '🗄' },
  ];

  const termLines = [
    { text: '$ npm run dev', color: '#a0a0a0' },
    { text: '▶  VITE v8.3 ready in 312ms', color: '#98ff98' },
    { text: '   Local: http://localhost:5173/', color: '#8ad4ff' },
    { text: '✓  Build complete. No errors.', color: '#98ff98' },
  ];

  const metrics = [
    { label: 'Performance', val: '98', color: '#98ff98' },
    { label: 'Accessibility', val: '100', color: '#8ad4ff' },
    { label: 'Best Practices', val: '95', color: '#ffd580' },
  ];

  return (
    <div className="dev-visual-wrap" style={{
      position: 'relative', width: '100%',
      background: '#0d0d0d', overflow: 'hidden',
      border: '1px solid #2a2a2a', display: 'flex', flexDirection: 'column',
    }}>
      {/* Top accent line */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, var(--red) 0%, #8ad4ff 50%, transparent 100%)', flexShrink: 0 }} />

      {/* IDE Title bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '9px 14px', borderBottom: '1px solid #222',
        background: '#111', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#c41c1c', '#e6a817', '#3fb950'].map((c, i) => (
            <span key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div className="dev-visual-tabs" style={{ flex: 1, display: 'flex', gap: '2px', marginLeft: '12px', overflow: 'hidden' }}>
          {files.map((f, i) => (
            <div key={i} style={{
              padding: '3px 12px', background: f.active ? '#1a1a1a' : 'transparent',
              borderTop: f.active ? '1px solid var(--red)' : '1px solid transparent',
              borderRight: '1px solid #1e1e1e',
              display: 'flex', alignItems: 'center', gap: '5px',
            }}>
              <span style={{ fontSize: '0.5rem', opacity: 0.7 }}>{f.icon}</span>
              <span style={{ fontFamily: 'monospace', fontSize: '0.625rem', color: f.active ? '#fff' : '#555', whiteSpace: 'nowrap' }}>{f.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main IDE body */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* File tree sidebar */}
        <div className="dev-visual-sidebar" style={{
          width: '140px', flexShrink: 0, background: '#0f0f0f',
          borderRight: '1px solid #1e1e1e', padding: '12px 0',
        }}>
          <div style={{ padding: '0 10px 8px', fontFamily: 'monospace', fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#444' }}>EXPLORER</div>
          {[
            { label: '📁 src', depth: 0 }, { label: '⚛ App.jsx', depth: 1, active: true },
            { label: '# index.css', depth: 1 }, { label: '⚡ api.js', depth: 1 },
            { label: '📁 components', depth: 1 }, { label: '⚛ Hero.jsx', depth: 2 },
            { label: '⚛ Projects.jsx', depth: 2 }, { label: '📁 public', depth: 0 },
          ].map((item, i) => (
            <div key={i} style={{
              padding: `3px 10px 3px ${10 + item.depth * 10}px`,
              fontFamily: 'monospace', fontSize: '0.5625rem',
              color: item.active ? '#fff' : '#555',
              background: item.active ? 'rgba(196,28,28,0.15)' : 'transparent',
              borderLeft: item.active ? '2px solid var(--red)' : '2px solid transparent',
              whiteSpace: 'nowrap', overflow: 'hidden',
            }}>{item.label}</div>
          ))}
        </div>

        {/* Code editor */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ flex: 1, padding: '16px 0', overflowY: 'hidden', background: '#0d0d0d', minHeight: '200px' }}>
            {codeLines.map((line) => (
              <div key={line.num} style={{
                display: 'flex', alignItems: 'center',
                background: line.num === activeLine ? 'rgba(255,255,255,0.04)' : 'transparent',
                borderLeft: line.num === activeLine ? '2px solid var(--red)' : '2px solid transparent',
                transition: 'all 0.3s', padding: '2px 0',
              }}>
                <span style={{
                  width: '36px', textAlign: 'right', paddingRight: '16px',
                  fontFamily: 'monospace', fontSize: '0.625rem',
                  color: line.num === activeLine ? '#555' : '#333', flexShrink: 0,
                }}>{line.num}</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.6875rem', lineHeight: 1.6, whiteSpace: 'nowrap' }}>
                  {line.tokens.map((tk, ti) => <span key={ti} style={{ color: tk.c }}>{tk.t}</span>)}
                </span>
              </div>
            ))}
            <div style={{ paddingLeft: '52px', marginTop: '2px' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '14px', background: 'var(--red)', animation: 'blink 1s step-end infinite' }} />
            </div>
          </div>

          {/* Terminal panel */}
          <div className="dev-visual-term" style={{ borderTop: '1px solid #222', background: '#090909', padding: '10px 14px', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '8px', borderBottom: '1px solid #1a1a1a', paddingBottom: '6px' }}>
              {['TERMINAL', 'PROBLEMS'].map((t, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: i === 0 ? 'var(--white)' : '#444', borderBottom: i === 0 ? '1px solid var(--red)' : 'none', paddingBottom: '4px' }}>{t}</span>
              ))}
            </div>
            {termLines.map((l, i) => <div key={i} style={{ fontFamily: 'monospace', fontSize: '0.5625rem', color: l.color, lineHeight: 1.7 }}>{l.text}</div>)}
          </div>
        </div>

        {/* Right info panel */}
        <div className="dev-visual-right" style={{
          width: '130px', flexShrink: 0, background: '#0f0f0f',
          borderLeft: '1px solid #1e1e1e', padding: '12px 10px',
          display: 'flex', flexDirection: 'column', gap: '16px',
        }}>
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#444', marginBottom: '8px' }}>AUDIT SCORES</div>
            {metrics.map((m, i) => (
              <div key={i} style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.45rem', color: '#666', textTransform: 'uppercase' }}>{m.label}</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.5rem', color: m.color, fontWeight: 700 }}>{m.val}</span>
                </div>
                <div style={{ height: '2px', background: '#1e1e1e', borderRadius: '1px' }}>
                  <div style={{ height: '100%', width: `${m.val}%`, background: m.color }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '12px' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#444', marginBottom: '8px' }}>GIT STATUS</div>
            {[{ icon: '●', label: 'main', color: '#98ff98' }, { icon: '↑', label: '3 commits', color: '#8ad4ff' }].map((g, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '5px' }}>
                <span style={{ fontSize: '0.5rem', color: g.color }}>{g.icon}</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.5rem', color: '#555' }}>{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="dev-visual-statusbar" style={{
        height: '22px', background: 'var(--red)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 14px',
      }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.5rem', color: 'rgba(255,255,255,0.9)' }}>⎇ main</span>
          <span style={{ fontFamily: 'monospace', fontSize: '0.5rem', color: 'rgba(255,255,255,0.9)' }}>✓ No errors</span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.5rem', color: 'rgba(255,255,255,0.9)' }}>JSX</span>
          <span style={{ fontFamily: 'monospace', fontSize: '0.5rem', color: 'rgba(255,255,255,0.9)' }}>UTF-8</span>
        </div>
      </div>
    </div>
  );
};

import { motion } from 'framer-motion';

/* ─── Hero Component ─── */
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 2.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, opacity: 1, 
      transition: { type: 'spring', stiffness: 120, damping: 25 }
    }
  };

  const name1 = "SHREYASH".split('');
  const name2 = "SINGH".split('');

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', paddingTop: '64px' }}>

      {/* Ghost background text */}
      <div aria-hidden="true" className="ghost-text-web" style={{
        position: 'absolute', top: '-4%', right: '-4%',
        fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 'clamp(8rem, 30vw, 34rem)', lineHeight: 0.82,
        color: 'rgba(255,255,255,0.022)', textTransform: 'uppercase',
        letterSpacing: '-0.04em', userSelect: 'none', pointerEvents: 'none', zIndex: 0,
      }}>WEB</div>
      <div aria-hidden="true" className="ghost-text-dev" style={{
        position: 'absolute', bottom: '6%', left: '-3%',
        fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 'clamp(8rem, 30vw, 34rem)', lineHeight: 0.82,
        color: 'rgba(255,255,255,0.018)', textTransform: 'uppercase',
        letterSpacing: '-0.04em', userSelect: 'none', pointerEvents: 'none', zIndex: 0,
      }}>DEV</div>

      {/* Vertical red accent line */}
      <div className="hero-accent-line" style={{
        position: 'absolute', top: '80px', right: '5%',
        width: '1px', height: '50%',
        background: 'linear-gradient(to bottom, var(--red) 0%, rgba(196,28,28,0.0) 100%)',
        zIndex: 1,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid', gap: '48px', alignItems: 'center',
            minHeight: 'calc(100vh - 64px - 36px)',
            paddingBottom: '60px', paddingTop: '48px',
          }}
        >

          {/* ── LEFT ── */}
          <div>
            <motion.div variants={itemVariants} style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'var(--red)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--red)' }}>01 / Hello, I'm</span>
            </motion.div>

            <motion.div variants={itemVariants} style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', overflow: 'hidden', paddingBottom: '16px' }}>
                {name1.map((char, i) => (
                  <motion.span key={i} variants={letterVariants} 
                  whileHover={{ y: -20, scale: 1.1, color: 'var(--red)', transition: { type: 'spring', stiffness: 300 } }}
                  style={{
                    fontFamily: 'var(--font-display)', fontWeight: 900,
                    fontSize: 'clamp(2.5rem, 11vw, 12rem)',
                    lineHeight: 0.86, textTransform: 'uppercase',
                    letterSpacing: '-0.02em', color: 'var(--white)',
                    display: 'inline-block', cursor: 'default'
                  }}>{char}</motion.span>
                ))}
              </div>
              <div style={{ display: 'flex', overflow: 'hidden', paddingBottom: '16px' }}>
                {name2.map((char, i) => (
                  <motion.span key={i} variants={letterVariants} 
                  whileHover={{ y: -20, scale: 1.1, WebkitTextStroke: '2px var(--red)', transition: { type: 'spring', stiffness: 300 } }}
                  style={{
                    fontFamily: 'var(--font-display)', fontWeight: 900,
                    fontSize: 'clamp(2.5rem, 11vw, 12rem)',
                    lineHeight: 0.86, textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    WebkitTextStroke: 'clamp(1.5px, 0.18vw, 2px) rgba(255,255,255,0.8)',
                    color: 'transparent',
                    display: 'inline-block', cursor: 'default'
                  }}>{char}</motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '24px 0' }}>
              <span style={{ width: '8px', height: '8px', background: 'var(--red)', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 10px rgba(196,28,28,0.5)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--muted)', lineHeight: 1.4 }}>Web Developer & Front-End Developer</span>
            </motion.div>

            <motion.p variants={itemVariants} style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '440px', marginBottom: '36px' }}>
              Building responsive, interactive and user-focused web experiences with modern frontend technologies.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="#projects" className="btn-red" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>View Projects →</a>
              <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact Me →</a>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', borderTop: '1px solid var(--border)' }} className="hero-info-grid">
              {[
                { label: 'Based In', value: 'Ghaziabad, India' },
                { label: 'Focus', value: 'Frontend · Web Dev' },
                { label: 'Status', value: 'Available' },
              ].map((item, i) => (
                <div key={item.label} className="hero-info-item" style={{ paddingTop: '20px' }}>
                  <div style={{ fontSize: '0.5625rem', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--red)', marginBottom: '5px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{item.label}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Rich IDE Visual ── */}
          <motion.div variants={itemVariants} className="hero-right-col">
            <DevVisual />
            {/* Stat row below IDE */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--border)', borderTop: 'none' }} className="hero-stats">
              {[{ num: '05+', text: 'Projects' }, { num: '2026', text: 'Graduation' }, { num: '100%', text: 'Frontend' }].map((s, i) => (
                <div key={i} style={{ padding: '16px 10px', borderRight: i < 2 ? '1px solid var(--border)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--white)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--dim)', marginTop: '4px' }}>{s.text}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Marquee strip */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid var(--border)', height: '36px', overflow: 'hidden', display: 'flex', alignItems: 'center', background: 'rgba(5,5,5,0.95)', zIndex: 5 }}>
        <div style={{ display: 'inline-flex', animation: 'marquee 28s linear infinite', whiteSpace: 'nowrap' }}>
          {[1, 2].map(rep => (
            <span key={rep} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {['BCA FINAL-YEAR', 'GHAZIABAD, INDIA', 'AVAILABLE FOR WORK', '5 PROJECTS BUILT', 'FRONTEND FOCUSED', 'JS · PHP · MYSQL · REACT'].map((t, j) => (
                <React.Fragment key={j}>
                  <span style={{ padding: '0 28px', fontFamily: 'var(--font-body)', fontSize: '0.5625rem', textTransform: 'uppercase', letterSpacing: '0.22em', color: t === 'AVAILABLE FOR WORK' ? 'var(--white)' : 'var(--dim)' }}>{t}</span>
                  <span style={{ 
                    width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)', 
                    display: 'inline-block', flexShrink: 0, opacity: 0.9,
                    boxShadow: t === 'AVAILABLE FOR WORK' ? '0 0 12px var(--red)' : 'none',
                    animation: t === 'AVAILABLE FOR WORK' ? 'blink 1.5s ease infinite' : 'none'
                  }} />
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .hero-grid { grid-template-columns: 52% 48%; }
        .dev-visual-wrap { height: 520px; }
        .hero-info-item { padding-right: 32px; border-right: 1px solid var(--border); margin-right: 32px; }
        .hero-info-item:last-child { border-right: none; margin-right: 0; padding-right: 0; }

        @media (max-width: 1200px) {
          .hero-grid { grid-template-columns: 1fr; gap: 64px; }
          .hero-accent-line { display: none; }
          .hero-right-col { max-width: 800px; margin: 0 auto; width: 100%; }
        }

        @media (max-width: 768px) {
          .dev-visual-sidebar, .dev-visual-right { display: none !important; }
          .dev-visual-tabs > div:not(:first-child) { display: none !important; }
          .dev-visual-wrap { height: 340px; }
          .hero-info-item { padding-right: 20px; margin-right: 20px; }
          .hero-stats { grid-template-columns: 1fr !important; }
          .hero-stats > div { border-right: none !important; border-bottom: 1px solid var(--border); }
          .hero-stats > div:last-child { border-bottom: none; }
        }

        @media (max-width: 480px) {
          .hero-info-grid { flex-direction: column; gap: 0; }
          .hero-info-item { padding: 16px 0 0 0 !important; margin: 0 !important; border-right: none !important; }
          .ghost-text-web { top: 5% !important; right: -10% !important; }
          .ghost-text-dev { bottom: 15% !important; left: -10% !important; }
          .dev-visual-term { display: none !important; }
          .dev-visual-wrap { height: 260px; }
        }
      `}</style>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute', bottom: '0px', left: '5%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
          zIndex: 10
        }}
      >
        <div style={{ writingMode: 'vertical-rl', fontFamily: 'var(--font-body)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--muted)' }}>
          Scroll
        </div>
        <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%', background: 'var(--red)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

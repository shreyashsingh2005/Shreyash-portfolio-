import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    num: '01', name: 'Weather Website', category: 'Web Application',
    desc: 'Real-time weather search application that pulls live data from a weather API. Type any city and instantly see current conditions, temperature and wind.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
    features: ['Live weather data', 'City search', 'Responsive interface', 'API integration'],
    accent: '#0a1f3a',
    liveUrl: 'https://weather-website-six-xi.vercel.app/', githubUrl: 'https://github.com/shreyashsingh2005'
  },
  {
    num: '02', name: 'Resume Forge Pro', category: 'Productivity Tool',
    desc: 'A dynamic resume builder with live DOM-driven preview. Edit fields and watch your resume update in real time without any page refresh.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Live preview', 'DOM manipulation', 'Section editing', 'Export-ready layout'],
    accent: '#2a1000',
    liveUrl: 'https://resumeforge-pro-gji4.onrender.com/', githubUrl: 'https://github.com/shreyashsingh2005'
  },
  {
    num: '03', name: 'Nexus Meet', category: 'Communication Platform',
    desc: 'An online meeting platform where users create rooms, share invite links, and join sessions. Built on a PHP/MySQL backend with session-based auth.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    features: ['Room creation', 'Shareable room links', 'Session handling', 'Database-backed storage', 'Responsive UI'],
    accent: '#001a2a',
    liveUrl: 'https://nexus-meet-wki7.onrender.com', githubUrl: 'https://github.com/shreyashsingh2005'
  },
  {
    num: '04', name: 'Med 24/7', category: 'Healthcare Application',
    desc: 'A healthcare web application for appointment booking and medical record management. Robust validation, database storage and clean clinical UI.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    features: ['Appointment booking', 'Medical record management', 'Form validation', 'Database-backed'],
    accent: '#001a00',
    liveUrl: 'https://med-247.onrender.com', githubUrl: 'https://github.com/shreyashsingh2005'
  },
  {
    num: '05', name: 'Chronosphere', category: 'Utility Application',
    desc: 'A combined real-time weather and world-clock application. Shows live weather and time for multiple cities simultaneously using AJAX and Fetch API.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'AJAX', 'Fetch API'],
    features: ['Real-time weather', 'World clock', 'Multiple time zones', 'Interactive interface'],
    accent: '#1a1000',
    liveUrl: 'https://chronosphere-app.onrender.com', githubUrl: 'https://github.com/shreyashsingh2005'
  },
];

/* ── Rich project mockups per project type ── */
const WeatherMockup = () => (
  <div className="card-mockup" style={{ position: 'relative', width: '100%', height: '220px', background: 'linear-gradient(145deg, #0a1f3a 0%, #050d1a 100%)', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 40%, rgba(138,212,255,0.08) 0%, transparent 60%)' }} />
    <div style={{ position: 'absolute', top: '20px', left: '24px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '3.5rem', color: '#fff', lineHeight: 1 }}>24°C</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: '#8ad4ff', letterSpacing: '0.1em', marginTop: '4px' }}>GHAZIABAD, IN</div>
    </div>
    <div style={{ position: 'absolute', bottom: '48px', left: '24px', right: '24px', display: 'flex', gap: '16px' }} className="mockup-weather-row">
      {[{ icon: '💧', val: '62%', label: 'Humidity' }, { icon: '💨', val: '14km/h', label: 'Wind' }, { icon: '👁', val: '10km', label: 'Visibility' }].map((c, i) => (
        <div key={i} style={{ flex: 1, background: 'rgba(138,212,255,0.06)', border: '1px solid rgba(138,212,255,0.12)', padding: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.875rem' }}>{c.icon}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', color: '#8ad4ff' }}>{c.val}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.45rem', color: '#444', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.label}</div>
        </div>
      ))}
    </div>
    <div style={{ position: 'absolute', bottom: '16px', left: '24px', right: '24px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(138,212,255,0.15)', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '0.625rem', color: '#8ad4ff' }}>🔍</span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', color: '#555' }}>Search city...</span>
    </div>
    <div style={{ position: 'absolute', top: '14px', right: '20px', padding: '3px 10px', background: 'rgba(138,212,255,0.1)', border: '1px solid rgba(138,212,255,0.2)' }}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', color: '#8ad4ff', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Live API</span>
    </div>
    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg, #8ad4ff, transparent)' }} />
  </div>
);

const ResumeMockup = () => (
  <div className="card-mockup" style={{ position: 'relative', width: '100%', height: '220px', background: '#0a0a0a', overflow: 'hidden', borderBottom: '1px solid var(--border)', display: 'flex' }}>
    {/* Sidebar Editor */}
    <div className="resume-editor" style={{ width: '40%', background: '#111', borderRight: '1px solid #222', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--white)', letterSpacing: '0.05em', marginBottom: '4px' }}>EDITOR</div>
      {[
        { label: 'Full Name', val: 'Shreyash Singh' },
        { label: 'Role', val: 'Frontend Developer' },
      ].map((f, i) => (
        <div key={i}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', color: '#666', textTransform: 'uppercase', marginBottom: '4px' }}>{f.label}</div>
          <div style={{ background: '#1a1a1a', border: '1px solid #333', padding: '4px 8px', fontFamily: 'monospace', fontSize: '0.5625rem', color: '#bbb' }}>{f.val}</div>
        </div>
      ))}
      <div style={{ marginTop: 'auto', background: 'var(--red)', color: '#fff', textAlign: 'center', padding: '6px', fontFamily: 'var(--font-display)', fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase' }}>EXPORT PDF</div>
    </div>
    
    {/* Live Canvas */}
    <div style={{ flex: 1, background: '#1a1a1a', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(196,28,28,0.1) 0%, transparent 70%)' }} />
      
      {/* Paper Document */}
      <div style={{ width: '80%', height: '85%', background: '#fff', borderRadius: '2px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', padding: '16px', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        <div style={{ borderBottom: '2px solid #222', paddingBottom: '8px', marginBottom: '8px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.25rem', color: '#111', lineHeight: 1 }}>SHREYASH SINGH</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2px', fontWeight: 600 }}>Frontend Developer</div>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
          <div style={{ flex: 2 }}>
            <div style={{ fontSize: '0.5rem', fontWeight: 700, color: '#111', borderBottom: '1px solid #ccc', marginBottom: '4px' }}>EXPERIENCE</div>
            <div style={{ height: '4px', width: '90%', background: '#444', marginBottom: '3px' }} />
            <div style={{ height: '3px', width: '100%', background: '#ddd', marginBottom: '3px' }} />
            <div style={{ height: '3px', width: '85%', background: '#ddd', marginBottom: '10px' }} />
            <div style={{ height: '4px', width: '70%', background: '#444', marginBottom: '3px' }} />
            <div style={{ height: '3px', width: '95%', background: '#ddd', marginBottom: '3px' }} />
            <div style={{ height: '3px', width: '60%', background: '#ddd' }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.5rem', fontWeight: 700, color: '#111', borderBottom: '1px solid #ccc', marginBottom: '4px' }}>SKILLS</div>
            {['#ddd','#ddd','#ddd','#ddd'].map((c,i) => <div key={i} style={{ height: '3px', width: '100%', background: c, marginBottom: '3px' }} />)}
          </div>
        </div>
      </div>
      
      {/* Live Badge */}
      <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(0,0,0,0.6)', padding: '3px 6px', borderRadius: '4px' }}>
        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ff3333', animation: 'blink 1.5s ease infinite' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.45rem', color: '#fff', textTransform: 'uppercase' }}>Live Sync</span>
      </div>
    </div>
    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg, var(--red), transparent)' }} />
  </div>
);

const NetworkMockup = () => (
  <div className="card-mockup" style={{ position: 'relative', width: '100%', height: '220px', background: 'linear-gradient(145deg, #001a2a 0%, #050d0d 100%)', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 400 220">
      {[
        [200,110, 100,60], [200,110, 300,60], [200,110, 80,150], [200,110, 320,150],
        [200,110, 160,170], [100,60, 60,30], [300,60, 340,30],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(138,212,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
      ))}
      {[
        [200,110, 12, 'rgba(196,28,28,0.8)', 'HOST'],
        [100,60, 8, 'rgba(138,212,255,0.6)', 'R1'],
        [300,60, 8, 'rgba(138,212,255,0.6)', 'R2'],
        [80,150, 7, 'rgba(138,212,255,0.4)', 'U1'],
        [320,150, 7, 'rgba(138,212,255,0.4)', 'U2'],
        [160,170, 7, 'rgba(138,212,255,0.4)', 'U3'],
        [60,30, 6, 'rgba(80,80,80,0.6)', ''],
        [340,30, 6, 'rgba(80,80,80,0.6)', ''],
      ].map(([cx,cy,r,fill,label], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill={fill} />
          {label && <text x={cx} y={cy + r + 10} textAnchor="middle" fontSize="8" fill="rgba(138,212,255,0.6)" fontFamily="monospace">{label}</text>}
        </g>
      ))}
    </svg>
    <div style={{ position: 'absolute', bottom: '14px', left: '16px', display: 'flex', gap: '8px' }}>
      {[['4', 'Rooms Active'], ['12', 'Users']].map(([n, l], i) => (
        <div key={i} style={{ padding: '4px 10px', background: 'rgba(138,212,255,0.06)', border: '1px solid rgba(138,212,255,0.15)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: '#8ad4ff' }}>{n} </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{l}</span>
        </div>
      ))}
    </div>
    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg, #8ad4ff, transparent)' }} />
  </div>
);

const MedMockup = () => (
  <div className="card-mockup" style={{ position: 'relative', width: '100%', height: '220px', background: 'linear-gradient(145deg, #001500 0%, #060a06 100%)', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(60,180,60,0.05) 0%, transparent 60%)' }} />
    <div style={{ background: 'rgba(60,180,60,0.08)', borderBottom: '1px solid rgba(60,180,60,0.15)', padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', color: 'rgba(60,180,60,0.9)', letterSpacing: '0.1em' }}>MED 24/7</span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', color: '#555', textTransform: 'uppercase' }}>Healthcare Portal</span>
    </div>
    <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[
        { time: '09:30', name: 'Dr. Sharma — Cardiology', status: 'Confirmed', c: 'rgba(60,180,60,0.7)' },
        { time: '11:00', name: 'Dr. Patel — General', status: 'Pending', c: 'rgba(255,213,0,0.7)' },
        { time: '14:15', name: 'Lab Test — Blood Panel', status: 'Scheduled', c: 'rgba(138,212,255,0.7)' },
      ].map((apt, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '7px 10px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.5625rem', color: '#555', width: '30px', flexShrink: 0 }}>{apt.time}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', color: '#888', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{apt.name}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.4375rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: apt.c, flexShrink: 0 }}>{apt.status}</span>
        </div>
      ))}
    </div>
    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg, rgba(60,180,60,0.8), transparent)' }} />
  </div>
);

const ChronoMockup = () => (
  <div className="card-mockup" style={{ position: 'relative', width: '100%', height: '220px', background: 'linear-gradient(145deg, #1a1000 0%, #0a0808 100%)', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,213,0,0.04) 0%, transparent 60%)' }} />
    <div style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }} className="chrono-globe">
      {[60, 45, 30, 16].map((r, i) => (
        <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', width: `${r*2}px`, height: `${r*2}px`, transform: 'translate(-50%, -50%)', borderRadius: '50%', border: `1px solid rgba(255,213,0,${0.08 - i*0.015})` }} />
      ))}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,213,0,0.08)', border: '1px solid rgba(255,213,0,0.3)' }} />
    </div>
    <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[
        { city: 'New Delhi', time: '19:28', off: '+5:30' },
        { city: 'New York', time: '08:58', off: '-5:00' },
        { city: 'London', time: '13:58', off: '+0:00' },
        { city: 'Tokyo', time: '22:58', off: '+9:00' },
      ].map((tz, i) => (
        <div key={i} style={{ background: 'rgba(255,213,0,0.04)', border: '1px solid rgba(255,213,0,0.1)', padding: '5px 10px', minWidth: '130px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', color: '#555', textTransform: 'uppercase' }}>{tz.city}</span>
            <span style={{ fontFamily: 'monospace', fontSize: '0.625rem', color: 'rgba(255,213,0,0.7)' }}>{tz.time}</span>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.4rem', color: '#444', textAlign: 'right' }}>UTC {tz.off}</div>
        </div>
      ))}
    </div>
    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg, rgba(255,213,0,0.7), transparent)' }} />
  </div>
);

const getMockup = (num) => {
  switch(num) {
    case '01': return <WeatherMockup />;
    case '02': return <ResumeMockup />;
    case '03': return <NetworkMockup />;
    case '04': return <MedMockup />;
    case '05': return <ChronoMockup />;
    default: return <WeatherMockup />;
  }
};

/* ── Project Card ── */
const ProjectCard = ({ project, large }) => {
  const [hov, setHov] = React.useState(false);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const tiltX = ((y - cy) / cy) * 3;
    const tiltY = (-(x - cx) / cx) * 3;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setHov(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHov(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'var(--black-card)', border: '1px solid var(--border)',
        borderLeft: `4px solid ${hov ? 'var(--red)' : 'transparent'}`,
        display: 'flex', flexDirection: 'column',
        transform: hov ? `translateY(-8px) perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'none',
        transition: hov ? 'border-color 0.4s, box-shadow 0.4s' : 'all 0.5s var(--ease)',
        boxShadow: hov ? '0 28px 70px rgba(0,0,0,0.7)' : '0 4px 20px rgba(0,0,0,0.3)',
        overflow: 'hidden', height: '100%',
        willChange: 'transform',
      }}
    >
      {getMockup(project.num)}

      <div style={{ padding: '26px 26px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--red)', fontWeight: 600 }}>{project.num} — {project.category}</span>
          <span style={{ fontSize: '1rem', color: 'var(--red)', transform: hov ? 'translate(3px,-3px)' : 'none', transition: 'transform 0.3s' }}>↗</span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: large ? 'clamp(1.8rem, 2.8vw, 2.8rem)' : 'clamp(1.5rem, 2.2vw, 2.2rem)',
          textTransform: 'uppercase', color: 'var(--white)', lineHeight: 1.02,
          marginBottom: '12px', transform: hov ? 'translateX(5px)' : 'none', transition: 'transform 0.3s',
        }}>{project.name}</h3>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', lineHeight: 1.72, color: 'var(--muted)', marginBottom: '16px', flex: 1 }}>{project.desc}</p>

        <div style={{ marginBottom: '18px' }}>
          {project.features.map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'var(--dim)', marginBottom: '5px' }}>
              <span style={{ width: '14px', height: '1.5px', background: 'var(--red)', flexShrink: 0 }} />{f}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.tech.map((t, i) => (
            <span key={i} style={{ padding: '4px 11px', border: '1px solid var(--border-mid)', fontFamily: 'var(--font-body)', fontSize: '0.5625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)' }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '20px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          {[{ text: 'View Project →', href: project.liveUrl, primary: true }, { text: 'View Code →', href: project.githubUrl }]
            .filter(link => link.href && link.href !== '#')
            .map((link, i) => (
            <a key={i} href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: link.primary ? 'var(--white)' : 'var(--dim)', transition: 'color 0.25s' }}
              onMouseEnter={e => e.target.style.color = 'var(--red)'}
              onMouseLeave={e => e.target.style.color = link.primary ? 'var(--white)' : 'var(--dim)'}
            >{link.text}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [ref, visible] = useScrollReveal(0.05);
  const rev = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(44px)',
    transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <section id="projects" style={{ padding: '110px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container" ref={ref}>

        {/* Title */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ ...rev(0), display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '18px' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(4.5rem, 10vw, 10.5rem)', lineHeight: 0.86, textTransform: 'uppercase', color: 'var(--white)', letterSpacing: '-0.02em' }}>SELECTED</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(4.5rem, 10vw, 10.5rem)', lineHeight: 0.86, textTransform: 'uppercase', WebkitTextStroke: '1.5px rgba(255,255,255,0.25)', color: 'transparent', letterSpacing: '-0.02em' }}>PROJECTS</div>
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--red)', alignSelf: 'flex-start', paddingTop: '6px' }}>03</span>
              </div>
            </div>
            <a href="https://github.com/shreyashsingh2005" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--muted)', transition: 'color 0.25s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >View All on GitHub →</a>
          </div>
          <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginTop: '28px' }} />
        </div>

        {/* Row 1 — 60/40 */}
        <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '3px', marginBottom: '3px' }} className="proj-r1">
          <div style={rev(0.1)}><ProjectCard project={projects[0]} large /></div>
          <div style={rev(0.2)}><ProjectCard project={projects[1]} /></div>
        </div>

        {/* Row 2 — Full width horizontal */}
        <div style={{ ...rev(0.3), marginBottom: '3px' }}>
          <div
            onMouseEnter={e => { e.currentTarget.style.borderLeft = '4px solid var(--red)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderLeft = '4px solid transparent'; e.currentTarget.style.transform = 'none'; }}
            style={{ background: 'var(--black-card)', border: '1px solid var(--border)', borderLeft: '4px solid transparent', display: 'grid', gridTemplateColumns: '38% 62%', transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)' }}
            className="proj-full"
          >
            <NetworkMockup />
            <div style={{ padding: '36px 40px' }} className="proj-full-body">
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--red)', fontWeight: 600, display: 'block', marginBottom: '14px' }}>{projects[2].num} — {projects[2].category}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.8rem)', textTransform: 'uppercase', color: 'var(--white)', lineHeight: 1, marginBottom: '16px' }}>{projects[2].name}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.72, color: 'var(--muted)', marginBottom: '22px', maxWidth: '520px' }}>{projects[2].desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
                {projects[2].tech.map((t, i) => <span key={i} className="tag">{t}</span>)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                {projects[2].features.map((f, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'var(--dim)' }}>
                    <span style={{ width: '12px', height: '1.5px', background: 'var(--red)', display: 'inline-block' }} />{f}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '20px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                {[{ text: 'View Project →', href: projects[2].liveUrl, primary: true }, { text: 'View Code →', href: projects[2].githubUrl }]
                  .filter(link => link.href && link.href !== '#')
                  .map((link, i) => (
                  <a key={i} href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: link.primary ? 'var(--white)' : 'var(--dim)', transition: 'color 0.25s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--red)'}
                    onMouseLeave={e => e.target.style.color = link.primary ? 'var(--white)' : 'var(--dim)'}
                  >{link.text}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 — 50/50 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }} className="proj-r3">
          <div style={rev(0.4)}><ProjectCard project={projects[3]} /></div>
          <div style={rev(0.5)}><ProjectCard project={projects[4]} /></div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .proj-r1, .proj-r3 { grid-template-columns: 1fr !important; }
          .proj-full { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .proj-full-body { padding: 24px !important; }
          .chrono-globe { display: none !important; }
        }
        @media (max-width: 480px) {
          .card-mockup { height: 180px !important; }
          .mockup-weather-row { display: none !important; }
          .resume-editor { display: none !important; }
        }
      `}</style>
    </section>
  );
}

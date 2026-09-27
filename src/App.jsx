import React, { useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickProfile from './components/QuickProfile';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Process from './components/Process';
import Stats from './components/Stats';
import Statement from './components/Statement';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 25) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
      setProgress(current);
    }, 70);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: '#050505', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', color: '#fff',
        willChange: 'transform'
      }}
    >
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 15vw, 12rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em' }}>
        {progress}%
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '24px' }}>
        <span style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.4em', color: 'var(--red)', textTransform: 'uppercase', textAlign: 'center' }}>
          System Initialization
        </span>
      </div>
    </motion.div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      </AnimatePresence>
      <div className="noise-overlay" />
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: '3px',
          background: 'var(--red)', transformOrigin: '0%', zIndex: 9999,
          scaleX: scrollYProgress
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <QuickProfile />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Stats />
        <Statement />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

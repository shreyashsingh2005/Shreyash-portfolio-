import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickProfile from './components/QuickProfile';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Process from './components/Process';
import Stats from './components/Stats';
import Statement from './components/Statement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: '3px',
          background: 'var(--red)', transformOrigin: '0%', zIndex: 9999,
          scaleX: scrollYProgress
        }}
      />
      <div className="bg-grid" />
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}

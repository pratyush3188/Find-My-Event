import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ScrollTrigger Background Transition
    // Use document.documentElement or document.body directly
    const ctx = gsap.context(() => {
      gsap.to(document.body, {
        backgroundColor: '#111',
        color: '#fff',
        scrollTrigger: {
          trigger: '.second-section',
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        }
      });
      
      gsap.to('.dot-grid', {
        opacity: 0.1,
        scrollTrigger: {
          trigger: '.second-section',
          scrub: true,
        }
      });
    });

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div className="App" ref={containerRef}>
      <div className="dot-grid"></div>
      <Navbar />
      <main>
        <Hero />
        <section 
          className="second-section"
          style={{ 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, textAlign: 'center', lineHeight: 1 }}
          >
            All your campus events <br /> <span className="serif-italic" style={{ fontWeight: 400 }}>one search away.</span>
          </motion.h2>
        </section>
      </main>
    </div>
  );
}

export default App;

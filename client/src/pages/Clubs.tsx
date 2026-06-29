import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Footer from '../components/Footer';
import { api } from '../lib/api';

export default function Clubs() {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const marker1Ref = useRef<HTMLSpanElement>(null);
  const marker2Ref = useRef<HTMLSpanElement>(null);
  const [clubs, setClubs] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    api.get('/clubs')
      .then(res => {
        if (Array.isArray(res.data)) {
          setClubs(res.data);
        }
      })
      .catch(console.error);

    if (heroRef.current) {
      const lines = heroRef.current.querySelectorAll('.hero-line');
      gsap.fromTo(lines, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
      );

      gsap.fromTo([marker1Ref.current, marker2Ref.current],
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power3.out', stagger: 0.2, delay: 0.6 }
      );
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', fontFamily: "'Inter', 'SF Pro Display', sans-serif", color: '#111', position: 'relative', overflowX: 'hidden' }}>
      
      <style>{`
        .premium-hero-heading {
          font-family: 'Inter', 'SF Pro Display', 'Neue Haas Grotesk', sans-serif;
          font-weight: 800;
          text-align: center;
          line-height: 0.98;
          color: #111111;
          margin: 0 auto 3rem;
          max-width: 900px;
          letter-spacing: -1.5px;
        }
        @media (min-width: 1200px) {
          .premium-hero-heading { font-size: 72px; }
        }
        @media (min-width: 1024px) and (max-width: 1199px) {
          .premium-hero-heading { font-size: 64px; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .premium-hero-heading { font-size: 54px; }
        }
        @media (max-width: 767px) {
          .premium-hero-heading { font-size: 38px; }
        }
        .hero-line {
          display: block;
          opacity: 0;
        }
        .marker-highlight {
          position: absolute;
          top: 6%;
          bottom: 6%;
          left: -10px;
          right: -10px;
          border-radius: 999px;
          z-index: -1;
          transform: rotate(-2deg);
        }
        .marker-pink {
          background-color: #FF5DAA;
        }
        .marker-cyan {
          background-color: #49D8F6;
        }
      `}</style>

      {/* Background Gradient */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0,
        right: 0, 
        height: '800px', 
        background: 'radial-gradient(ellipse at top, rgba(239, 230, 255, 1) 0%, #FAFAFA 80%)', 
        zIndex: 0, 
        pointerEvents: 'none',
      }} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Massive Hero Section */}
        <section style={{ padding: '8rem 2rem 4rem', textAlign: 'center', maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
          
          <h1 ref={heroRef} className="premium-hero-heading">
            <span className="hero-line">
              JECRC <span style={{ position: 'relative', display: 'inline-block', fontStyle: 'italic', zIndex: 1, marginLeft: '0.1em' }}>
                <span ref={marker1Ref} className="marker-highlight marker-pink" />
                University
              </span> have
            </span>
            <span className="hero-line" style={{ marginTop: '0.15em' }}>
              soo many <span style={{ position: 'relative', display: 'inline-block', fontStyle: 'italic', zIndex: 1, margin: '0 0.15em' }}>
                <span ref={marker2Ref} className="marker-highlight marker-cyan" />
                clubs
              </span> and initiatives.
            </span>
          </h1>

          {/* Hero Image */}
          <div style={{ position: 'relative', width: '100%', margin: '0 auto', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(139,92,246,0.2)' }}>
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              src="/jecrc_image.png" 
              alt="JECRC University Campus" 
              style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} 
            />
          </div>
        </section>

        {/* Dynamic Infinite Marquee */}
        <div style={{ width: '100vw', background: 'linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6)', padding: '1.5rem 0', transform: 'rotate(-2deg) scale(1.05)', overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', position: 'relative', zIndex: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            style={{ display: 'flex', gap: '2rem', fontSize: '2rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}
          >
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span>DISCOVER</span> <span>•</span>
                <span>CREATE</span> <span>•</span>
                <span style={{ color: 'transparent', WebkitTextStroke: '1px #fff' }}>CONNECT</span> <span>•</span>
                <span>INNOVATE</span> <span>•</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Interactive Bento Grid Section */}
        <section style={{ maxWidth: '1400px', margin: '8rem auto 6rem', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>
              ALL CLUBS.
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {clubs.map((club, i) => (
              <motion.div 
                key={club.id}
                onClick={() => window.location.hash = `#club-detail-${club.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                whileHover="hover"
                style={{ position: 'relative', cursor: 'pointer', borderRadius: '32px', overflow: 'hidden', height: '480px', background: '#111', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              >
                {/* Image Background */}
                <motion.div 
                  variants={{ hover: { scale: 1.08, filter: 'brightness(0.7)' } }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
                >
                  <img src={club.logo || '/club-images/Rectangle 31.png'} alt={club.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
                
                {/* Vibrant Hover Overlay (Bottom Gradient) */}
                <motion.div 
                  variants={{ hover: { opacity: 1, background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)` } }}
                  initial={{ opacity: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' }}
                  transition={{ duration: 0.4 }}
                  style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                />

                {/* Pill Tag */}
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', color: '#000', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', zIndex: 2 }}>
                  {club.type || 'Club'}
                </div>

                {/* Content Container */}
                <motion.div 
                  variants={{ hover: { y: -10 } }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 10 }}
                >
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                    {club.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: 500, margin: 0 }}>
                    {club.description || 'Backs visionary founders with capital and robust support.'}
                  </p>
                  
                  {/* Explore Button (Appears on hover) */}
                  <motion.div 
                    variants={{ hover: { opacity: 1, y: 0, height: 'auto' } }}
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}
                  >
                    Explore Club <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

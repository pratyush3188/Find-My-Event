import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function Clubs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dummyClubs = [
    { id: 1, img: '/club-images/Rectangle 31.png' },
    { id: 2, img: '/club-images/Rectangle 32.png' },
    { id: 3, img: '/club-images/Rectangle 33.png' },
    { id: 4, img: '/club-images/Rectangle 31.png' },
    { id: 5, img: '/club-images/Rectangle 32.png' },
    { id: 6, img: '/club-images/Rectangle 33.png' },
    { id: 7, img: '/club-images/Rectangle 31.png' },
    { id: 8, img: '/club-images/Rectangle 32.png' },
    { id: 9, img: '/club-images/Rectangle 33.png' }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', fontFamily: "'Inter', 'SF Pro Display', sans-serif", color: '#111', position: 'relative' }}>
      
      {/* Background Gradient */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0,
        right: 0, 
        height: '600px', 
        background: 'radial-gradient(ellipse at top, #EFE6FF 0%, #FAFAFA 70%)', 
        zIndex: 0, 
        pointerEvents: 'none',
        opacity: 0.8
      }} />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '7rem 2rem 6rem', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', lineHeight: 1.25, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
            <span style={{ fontWeight: 600 }}>JECRC University have</span><br/>
            <span style={{ fontWeight: 800 }}>soo many clubs and initiatives</span>
          </h1>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ width: '100%', height: '500px', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 100px rgba(139,92,246,0.15)', marginBottom: '5rem', border: '1px solid #f1f5f9' }}
        >
          <img src="/jecrc_image.png" alt="JECRC University Campus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>

        {/* All Clubs Section */}
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2.5rem', color: '#0f172a' }}>All clubs</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem 2rem' }}>
            {dummyClubs.map(club => (
              <motion.div 
                key={club.id}
                whileHover={{ y: -8 }}
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{ width: '100%', height: '360px', borderRadius: '24px', overflow: 'hidden', marginBottom: '1.25rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid rgba(226,232,240,0.5)' }}>
                  <img src={club.img} alt="Club" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem', textAlign: 'center' }}>
                  JECRC Incubation Center
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center', lineHeight: 1.5, maxWidth: '280px', margin: 0 }}>
                  JECRC Incubation Center backs visionary founders with capital.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

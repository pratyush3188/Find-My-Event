import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import api from '../api/axios';
import gsap from 'gsap';

const Home2 = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(2);
  const heroRef = useRef<HTMLHeadingElement>(null);
  const marker1Ref = useRef<HTMLSpanElement>(null);
  const marker2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 3000);

    // GSAP Animation for Hero
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

    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: 'Hackathon', icon: '🎪', color: '#ffb3ba' },
    { name: 'Concert', icon: '🪩', color: '#ffdfba' },
    { name: 'Music', icon: '📻', color: '#ffffba' },
    { name: 'Photography', icon: '📷', color: '#baffc9' },
    { name: 'E-Sports', icon: '🎮', color: '#bae1ff' },
    { name: 'Sports', icon: '🏆', color: '#d5baff' },
    { name: 'Cultural', icon: '🎭', color: '#ffbaff' },
    { name: 'Literature', icon: '📚', color: '#bafff0' },
    { name: 'Drama', icon: '🎬', color: '#ffc9ba' },
    { name: 'Comedy', icon: '🎭', color: '#e6ffba' },
  ];

  const filterCategories = ['All', 'Music', 'Gaming', 'Tech', 'Dance', 'Drama', 'Academics', 'Workshops', 'Culture', 'Media', 'Socialz', 'Empower'];

  const [eventsList, setEventsList] = useState<any[]>([]);
  const [clubs, setClubs] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsRes, approvedRes, clubsRes] = await Promise.all([
          api.get('/events'),
          api.get('/events/approved'),
          api.get('/clubs')
        ]);

        const mappedApproved = approvedRes.data.map((s: any) => ({
          id: s._id,
          title: s.title,
          desc: s.description || '',
          date: s.startDate,
          location: s.location || 'TBA',
          price: 'Free',
          img: s.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80',
          category: 'Workshops',
        }));

        const mappedEvents = eventsRes.data.map((s: any) => ({
          id: s._id,
          title: s.title,
          desc: s.description || '',
          date: s.date,
          location: s.venue || 'TBA',
          price: s.price || 'Free',
          img: s.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80',
          category: s.category || 'Tech',
        }));

        setEventsList([...mappedApproved, ...mappedEvents]);
        setClubs(clubsRes.data || []);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      }
    };
    fetchData();
  }, []);

  const filteredEvents = eventsList.filter(ev => activeCategory === 'All' || ev.category === activeCategory).slice(0, 6);

  return (
    <div className="home2-page" style={{ background: '#FFFFFF', minHeight: '100vh', color: '#111', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
      
      {/* Hero Section */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', textAlign: 'center', overflow: 'hidden', background: '#FFFFFF' }}>
        <h1 ref={heroRef} className="premium-hero-heading">
          <span className="hero-line">
            Discover <span style={{ position: 'relative', display: 'inline-block', fontStyle: 'italic', zIndex: 1, marginLeft: '0.1em' }}>
              <span ref={marker1Ref} className="marker-highlight marker-pink" />
              events
            </span>
          </span>
          <span className="hero-line" style={{ marginTop: '0.15em' }}>
            worth <span style={{ position: 'relative', display: 'inline-block', fontStyle: 'italic', zIndex: 1, margin: '0 0.15em' }}>
              <span ref={marker2Ref} className="marker-highlight marker-cyan" />
              showing
            </span> up for.
          </span>
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3rem', position: 'relative', height: '600px', width: '100%', overflow: 'hidden' }}>
          {[1, 2, 3, 4, 5].map((item, index) => {
            const offset = (index - activeIndex + 5) % 5;
            
            const isCenter = offset === 0;
            const isAdjRight = offset === 1;
            const isFarRight = offset === 2;
            const isFarLeft = offset === 3;
            const isAdjLeft = offset === 4;
            
            let zIndex = 1;
            let left = '50%';
            let height = '360px';
            let width = '18vw';
            
            if (isCenter) {
              zIndex = 10; left = '50%'; height = '560px'; width = '32vw';
            } else if (isAdjLeft) {
              zIndex = 5; left = '28%'; height = '460px'; width = '26vw';
            } else if (isAdjRight) {
              zIndex = 5; left = '72%'; height = '460px'; width = '26vw';
            } else if (isFarLeft) {
              zIndex = 2; left = '8%'; height = '360px'; width = '22vw';
            } else if (isFarRight) {
              zIndex = 2; left = '92%'; height = '360px'; width = '22vw';
            }

            return (
              <motion.div
                key={item}
                onClick={() => window.location.hash = `#event-detail-c${item}`}
                initial={false}
                animate={{
                  width,
                  height,
                  left,
                  zIndex,
                  opacity: 1
                }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  borderRadius: '24px',
                  boxShadow: isCenter ? '0 30px 60px rgba(0,0,0,0.4)' : '0 15px 30px rgba(0,0,0,0.2)',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  overflow: 'hidden',
                  background: '#111'
                }}
              >
                <img 
                  src={`/hero-images/Rectangle 3${item}.png`} 
                  alt={`Event ${item}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '2rem 2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Explore Events Categories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
          {categories.map((cat) => (
            <motion.div 
              key={cat.name}
              whileHover={{ y: -5 }}
              style={{ 
                background: '#fff', 
                borderRadius: '16px', 
                padding: '1rem', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                aspectRatio: '1',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: `linear-gradient(to top, ${cat.color}88, transparent)` }} />
              <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem', zIndex: 1 }}>{cat.icon}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, zIndex: 1, textAlign: 'center' }}>{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clubs Section */}
      <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '3rem 2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Explore Clubs in JECRC</h2>
          <button style={{ background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>more...</button>
        </div>
        <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '1rem' }}>
          {clubs.map(club => (
            <div 
              key={club.id} 
              onClick={() => window.location.hash = `#club-detail-${club.id}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', minWidth: '120px', cursor: 'pointer' }}
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={club.logo} 
                alt={club.name} 
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', background: '#e2e8f0', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} 
              />
              <span style={{ fontWeight: 600 }}>{club.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* All Events Section */}
      <div style={{ background: '#FFFFFF' }}>
        <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '4rem 2.5rem 6rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2.5rem', color: '#111' }}>All events</h2>
          
          {/* Filters */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '2.5rem', borderBottom: '1px solid #e2e8f0', width: '100%' }}>
            {filterCategories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ 
                  background: 'none',
                  border: 'none',
                  borderBottom: cat === activeCategory ? '2px solid #8B5CF6' : '2px solid transparent', 
                  color: cat === activeCategory ? '#111' : '#94a3b8',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  paddingBottom: '0.75rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(410px, 1fr))', gap: '2.5rem' }}>
          {filteredEvents.map(event => (
            <motion.div 
              key={event.id}
              onClick={() => window.location.hash = `#event-detail-${event.id}`}
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { y: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.04)' },
                hover: { y: -12, boxShadow: '0 40px 80px rgba(139,92,246,0.15)' }
              }}
              style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(226,232,240,0.8)', display: 'flex', flexDirection: 'column', height: '620px', position: 'relative', cursor: 'pointer' }}
            >
              <div style={{ height: '460px', position: 'relative', overflow: 'hidden' }}>
                <motion.img 
                  variants={{ initial: { scale: 1 }, hover: { scale: 1.08 } }}
                  transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  src={event.img} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                {/* Overlay gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 35%)' }} />
                
                {/* Floating Date Badge */}
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', padding: '0.6rem 1rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#111', fontSize: '0.8rem', fontWeight: 800, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="3"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {event.date}
                </div>

                {/* Floating Price Badge */}
                <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#8B5CF6', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 900, boxShadow: '0 8px 24px rgba(139,92,246,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {event.price}
                </div>
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: '#fff', zIndex: 2, position: 'relative' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem', color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.03em' }}>{event.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {event.location}
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <div style={{ display: 'flex', marginLeft: '0.5rem' }}>
                       {[1,2,3].map(i => <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${event.id}${i}`} alt="avatar" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #fff', marginLeft: '-0.75rem', background: '#f1f5f9', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }} />)}
                     </div>
                     <span style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 700, marginLeft: '0.5rem' }}>+69 going</span>
                  </div>
                  
                  <motion.div 
                    variants={{ initial: { x: -10, opacity: 0 }, hover: { x: 0, opacity: 1 } }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{ color: '#8B5CF6', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 800, fontSize: '0.95rem' }}
                  >
                    Explore <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      </div>

      {/* Footer (Dark variant by default from component) */}
      <div style={{ background: '#111' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home2;

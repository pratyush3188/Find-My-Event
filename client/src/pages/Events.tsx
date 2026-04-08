import { useState } from 'react';
import { Calendar, MapPin, MoreHorizontal, Grid, List, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import '../index.css';

const events = [
  {
    id: 1,
    title: 'National Healthcare Hackathon 2.0',
    organizer: 'JECRC University',
    date: 'Oct 12, 2024 • 9:00 AM PST',
    venue: 'Moscone Center, SF / Hybrid',
    image: '/event1.png',
    category: 'Tech',
    isMyEvent: true
  },
  {
    id: 2,
    title: 'Hukum Holi Fest',
    organizer: 'JECRC University',
    date: 'Oct 12, 2024 • 9:00 AM PST',
    venue: 'Moscone Center, SF / Hybrid',
    image: '/event2.png',
    category: 'Music',
    isMyEvent: false
  },
  {
    id: 3,
    title: 'Code Sparks: Intro to Python',
    organizer: 'Tech Innovators',
    date: 'Oct 15, 2024 • 11:00 AM PST',
    venue: 'Virtual',
    image: '/event1.png',
    category: 'Tech',
    isMyEvent: true
  }
];

const EventCard = ({ event, index, onViewMore, onRegister }: { event: any, index: number, onViewMore: () => void, onRegister: () => void }) => {
  return (
    <motion.div 
      className="event-card-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      whileTap="hover"
      style={{
        display: 'flex',
        flexDirection: 'row',
        background: '#151518',
        borderRadius: '16px',
        padding: '1.5rem',
        gap: '2rem',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.05)',
        width: '100%',
        maxWidth: '900px',
        alignItems: 'center',
        margin: '0 auto',
        cursor: 'pointer'
      }}
      variants={{
        hover: {
          y: -8,
          scale: 1.02,
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(255,255,255,0.15)',
          transition: { duration: 0.3, ease: 'easeOut' }
        }
      }}
      onClick={onViewMore}
    >
      <div className="event-card-image-box" style={{ width: '240px', height: '240px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden' }}>
        <motion.img 
          src={event.image} 
          alt={event.title} 
          variants={{
            hover: { scale: 1.08, transition: { duration: 0.4, ease: 'easeOut' } }
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <h3 className="event-card-title" style={{ fontSize: '1.75rem', fontWeight: 600, color: '#fff', marginBottom: '0.25rem' }}>{event.title}</h3>
          <p style={{ color: '#888', fontSize: '0.95rem' }}>Organized by {event.organizer}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Calendar size={18} color="#aaa" style={{ marginTop: '0.1rem' }} />
            <div>
              <p style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Date & Time</p>
              <p style={{ color: '#ccc', fontSize: '0.95rem', fontWeight: 500 }}>{event.date}</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <MapPin size={18} color="#aaa" style={{ marginTop: '0.1rem' }} />
            <div>
              <p style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Venue</p>
              <p style={{ color: '#ccc', fontSize: '0.95rem', fontWeight: 500 }}>{event.venue}</p>
            </div>
          </div>
        </div>

        <div className="event-actions-container" style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
          <motion.button 
            onClick={(e: React.MouseEvent) => { e.stopPropagation(); onRegister(); }}
            whileHover={{ scale: 1.05, backgroundColor: '#eee' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: '#fff',
              color: '#000',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.95rem',
              flex: 1
            }}
          >
            Register Now
          </motion.button>
          
          <motion.button 
            onClick={(e: React.MouseEvent) => { e.stopPropagation(); onViewMore(); }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              color: '#aaa',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              flex: 1
            }}
          >
            <MoreHorizontal size={18} /> View More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Grid View Card ───────────────────────────────────────────────────────────
const GridEventCard = ({ event, index, onViewMore, onRegister }: { event: any, index: number, onViewMore: () => void, onRegister: () => void }) => {
  return (
    <motion.div 
      className="event-card-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      whileTap="hover"
      style={{
        background: '#151518',
        borderRadius: '16px',
        padding: '1.5rem',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.05)',
        cursor: 'pointer',
        maxWidth: '320px'
      }}
      variants={{
        hover: {
          y: -8,
          scale: 1.02,
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(255,255,255,0.15)',
          transition: { duration: 0.3, ease: 'easeOut' }
        }
      }}
      onClick={onViewMore}
    >
      <div style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
        <motion.img 
          src={event.image} 
          alt={event.title} 
          variants={{
            hover: { scale: 1.08, transition: { duration: 0.4, ease: 'easeOut' } }
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.25rem', lineHeight: 1.3 }}>{event.title}</h3>
        <p style={{ color: '#888', fontSize: '0.9rem' }}>By {event.organizer}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={14} color="#aaa" />
          <span style={{ color: '#ccc', fontSize: '0.8rem' }}>{event.date}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={14} color="#aaa" />
          <span style={{ color: '#ccc', fontSize: '0.8rem' }}>{event.venue}</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <motion.button 
          onClick={(e: React.MouseEvent) => { e.stopPropagation(); onRegister(); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            padding: '0.6rem 1rem',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '0.85rem',
            flex: 1
          }}
        >
          Register
        </motion.button>
        
        <motion.button 
          onClick={(e: React.MouseEvent) => { e.stopPropagation(); onViewMore(); }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'transparent',
            color: '#aaa',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '0.6rem 1rem',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MoreHorizontal size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

// ─── Event Details View ───────────────────────────────────────────────────────
import { EventDetail, RegisterView } from '../components/SharedViews';

export default function Events({ isLoggedIn }: { isLoggedIn?: boolean }) {
  const [currentView, setCurrentView] = useState<'list' | 'details' | 'register'>('list');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');
  const [filterDate, setFilterDate] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredEvents = events.filter(event => {
    const matchDate = filterDate === 'all' || event.date.includes(filterDate);
    const matchCategory = filterCategory === 'all' || event.category === filterCategory;
    return matchDate && matchCategory;
  }).sort((a: any, b: any) => {
    if (a.isMyEvent && !b.isMyEvent) return -1;
    if (!a.isMyEvent && b.isMyEvent) return 1;
    return 0;
  });

  const handleViewMore = (event: any) => {
    setSelectedEvent(event);
    setCurrentView('details');
    window.scrollTo(0, 0);
  };

  const handleRegister = (event: any) => {
    setSelectedEvent(event);
    setCurrentView('register');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentView('list');
    setSelectedEvent(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#09090b',
      backgroundImage: `
        radial-gradient(circle at top right, rgba(138, 43, 226, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 80% 20%, rgba(255, 60, 150, 0.08) 0%, transparent 50%),
        radial-gradient(circle at top center, rgba(30, 60, 150, 0.1) 0%, transparent 60%)
      `,
      fontFamily: "'Outfit', sans-serif",
      overflowX: 'hidden'
    }}>


      <AnimatePresence mode="wait">
        {currentView === 'list' && (
          <motion.main 
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="events-main-section" 
            style={{ padding: '8rem 6rem 4rem 6rem', display: 'flex', flexDirection: 'column', maxWidth: '1400px', margin: '0 auto' }}
          >
            <motion.h1 
              className="events-h1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ 
                color: '#fff', 
                fontSize: '3.5rem', 
                fontWeight: 700, 
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center'
              }}
            >
              Events<motion.span 
                className="events-dot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 10 }}
                style={{ color: '#3b82f6', fontSize: '4rem', lineHeight: '0' }}
              >.</motion.span>
            </motion.h1>

            {/* Filters and View Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Filter size={16} color="#94a3b8" />
                  <select
                    value={filterDate}
                    onChange={e => setFilterDate(e.target.value)}
                    style={{
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px', padding: '0.5rem 1rem', color: '#e2e8f0',
                      fontSize: '0.85rem', outline: 'none'
                    }}
                  >
                    <option value="all">All Dates</option>
                    <option value="Oct">October</option>
                    <option value="Nov">November</option>
                  </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Category:</span>
                  <select
                    value={filterCategory}
                    onChange={e => setFilterCategory(e.target.value)}
                    style={{
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px', padding: '0.5rem 1rem', color: '#e2e8f0',
                      fontSize: '0.85rem', outline: 'none'
                    }}
                  >
                    <option value="all">All Categories</option>
                    <option value="Tech">Tech</option>
                    <option value="Music">Music</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <motion.button
                  onClick={() => setViewMode('timeline')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: viewMode === 'timeline' ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${viewMode === 'timeline' ? '#3b82f6' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: '8px', padding: '0.5rem', color: '#e2e8f0',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
                  }}
                >
                  <List size={16} />
                  Timeline
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('grid')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: viewMode === 'grid' ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${viewMode === 'grid' ? '#3b82f6' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: '8px', padding: '0.5rem', color: '#e2e8f0',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
                  }}
                >
                  <Grid size={16} />
                  Grid
                </motion.button>
              </div>
            </motion.div>

            {viewMode === 'timeline' ? (
              <div style={{ display: 'flex', gap: '4rem', width: '100%' }}>
                {/* Left Timeline Section */}
                <div className="mobile-hidden" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100px' }}>
                  <div style={{
                    background: 'transparent',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '20px',
                    padding: '0.5rem 1.25rem',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    marginBottom: '2rem',
                    zIndex: 2
                  }}>
                    Today
                  </div>
                  
                  <div style={{ position: 'relative', width: '2px', background: 'rgba(255,255,255,0.1)', flex: 1 }}>
                     {filteredEvents.map((_, index) => (
                       <div key={index} style={{
                         position: 'absolute',
                         top: `calc(${index * 280}px + 60px)`,
                         left: '50%',
                         transform: 'translateX(-50%)',
                         width: '12px',
                         height: '12px',
                         background: '#3b82f6',
                         borderRadius: '50%',
                         boxShadow: '0 0 0 4px #0a0a0c'
                       }}></div>
                     ))}
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', flex: 1, paddingBottom: '4rem' }}>
                  {filteredEvents.map((event, index) => (
                    <EventCard 
                      key={event.id} 
                      event={event} 
                      index={index} 
                      onViewMore={() => handleViewMore(event)}
                      onRegister={() => handleRegister(event)} 
                    />
                  ))}
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', paddingBottom: '4rem' }}
              >
                {filteredEvents.map((event, index) => (
                  <GridEventCard 
                    key={event.id} 
                    event={event} 
                    index={index} 
                    onViewMore={() => handleViewMore(event)}
                    onRegister={() => handleRegister(event)} 
                  />
                ))}
              </motion.div>
            )}
          </motion.main>
        )}

        {currentView === 'details' && selectedEvent && (
          <EventDetail key="details" event={selectedEvent} onBack={handleBack} onRegister={() => handleRegister(selectedEvent)} />
        )}

        {currentView === 'register' && selectedEvent && (
          <RegisterView key="register" event={selectedEvent} onBack={handleBack} />
        )}
      </AnimatePresence>

      {/* Auth Blur Overlay */}
      {!isLoggedIn && currentView === 'list' && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100vh',
          background: 'linear-gradient(to top, #09090b 40%, rgba(9,9,11,0.7) 70%, transparent 100%)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'all',
          backdropFilter: 'blur(6px)',
          paddingTop: '30vh'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '450px', padding: '2rem' }}>
            <h2 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.25rem' }}>The best events, just for you.</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2.5rem' }}>Sign in to see full event details, register for workshops, and track your campus life.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { window.location.hash = '#signin'; }}
              style={{
                background: '#fff',
                color: '#000',
                border: 'none',
                padding: '1.25rem 3rem',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: '0 15px 35px rgba(255,255,255,0.1)'
              }}
            >
              Login to view more
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}

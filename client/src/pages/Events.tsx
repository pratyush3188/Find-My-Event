import { useState } from 'react';
import { Calendar, MapPin, MoreHorizontal, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import '../index.css';

const events = [
  {
    id: 1,
    title: 'National Healthcare Hackathon 2.0',
    organizer: 'JECRC University',
    date: 'Oct 12, 2024 • 9:00 AM PST',
    venue: 'Moscone Center, SF / Hybrid',
    image: '/event1.png'
  },
  {
    id: 2,
    title: 'Hukum Holi Fest',
    organizer: 'JECRC University',
    date: 'Oct 12, 2024 • 9:00 AM PST',
    venue: 'Moscone Center, SF / Hybrid',
    image: '/event2.png'
  },
  {
    id: 3,
    title: 'National Healthcare Hackathon 2.0',
    organizer: 'JECRC University',
    date: 'Oct 12, 2024 • 9:00 AM PST',
    venue: 'Moscone Center, SF / Hybrid',
    image: '/event1.png'
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

const EventDetails = ({ event, onBack, onRegister }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="events-main-section" 
      style={{ padding: '8rem 6rem 4rem 6rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}
    >
      <div 
        onClick={onBack}
        style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', marginBottom: '2rem', transition: 'background 0.2s' }}
        onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
      >
        <ArrowLeft size={24} color="#fff" />
      </div>

      <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
        <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <h2 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.2 }}>{event.title}</h2>
      <p style={{ color: '#888', fontSize: '1.1rem', marginBottom: '2.5rem' }}>Organized by {event.organizer}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Calendar size={24} color="#aaa" />
          <div>
            <p style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Date & Time</p>
            <p style={{ color: '#ccc', fontSize: '1.05rem', fontWeight: 500 }}>{event.date}</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <MapPin size={24} color="#aaa" />
          <div>
            <p style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Venue</p>
            <p style={{ color: '#ccc', fontSize: '1.05rem', fontWeight: 500 }}>{event.venue}</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
         <motion.button 
           onClick={onRegister}
           whileHover={{ scale: 1.02, backgroundColor: '#eee' }}
           whileTap={{ scale: 0.95 }}
           style={{ background: '#fff', color: '#000', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
             Register Now
         </motion.button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '4px', height: '24px', background: '#3b82f6', borderRadius: '4px' }}></div>
        <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600 }}>About the Event</h3>
      </div>
      
      <div style={{ color: '#aaa', lineHeight: 1.6, fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p>This event is an amazing opportunity to connect, build solutions, and compete for exciting prizes. Registration is currently open!</p>
        <p>Theme: AI Powered Excellence.<br/>Build AI-driven solutions for real-world challenges.</p>
        <div>
          <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>🏆 Prizes:</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>🥇 1st Prize: ₹75,000</li>
            <li>🥈 2nd Prize: ₹50,000</li>
          </ul>
        </div>
        <div>
          <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>📅 Important Dates:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Registration Deadline: 14th March</li>
            <li>Hackathon: 1st & 2nd April</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

const RegisterView = ({ event, onBack }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="events-main-section" 
      style={{ padding: '8rem 6rem 4rem 6rem', maxWidth: '650px', margin: '0 auto', width: '100%' }}
    >
      <div 
        onClick={onBack}
        style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', marginBottom: '2rem', transition: 'background 0.2s' }}
        onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
      >
        <ArrowLeft size={24} color="#fff" />
      </div>

      <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.2 }}>{event.title}</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>
          <span>Full Name <span style={{ color: '#3b82f6' }}>*</span></span>
          <input type="text" placeholder="Participant Name" style={{ background: '#121214', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none', fontSize: '1rem' }} />
        </label>
        
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>
          <span>Email Address <span style={{ color: '#3b82f6' }}>*</span></span>
          <input type="email" placeholder="Enter your email address" style={{ background: '#121214', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none', fontSize: '1rem' }} />
        </label>
        
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>
          <span>Mobile Number <span style={{ color: '#3b82f6' }}>*</span></span>
          <input type="text" placeholder="+91 12345-67890" style={{ background: '#121214', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none', fontSize: '1rem' }} />
        </label>
        
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>
          <span>Team Name <span style={{ color: '#3b82f6' }}>*</span></span>
          <input type="text" placeholder="Ex. PHOENIX" style={{ background: '#121214', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none', fontSize: '1rem' }} />
        </label>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => { alert('Success! You have registered.'); onBack(); }}
          style={{ background: '#fff', color: '#000', padding: '1rem', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer', marginTop: '1rem', fontSize: '1.05rem' }}>
          Register
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const [currentView, setCurrentView] = useState<'list' | 'details' | 'register'>('list');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

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
      <Navbar />

      <AnimatePresence mode="wait">
        {currentView === 'list' && (
          <motion.main 
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="events-main-section" 
            style={{ padding: '8rem 6rem 4rem 6rem', display: 'flex', flexDirection: 'column', maxWidth: '1200px', margin: '0 auto' }}
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
                marginBottom: '3rem',
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

            <div style={{ display: 'flex', gap: '4rem', width: '100%' }}>
              {/* Left Timeline Section - Restored as requested */}
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
                   {events.map((_, index) => (
                     <div key={index} style={{
                       position: 'absolute',
                       top: `calc(${index * 280}px + 60px)`, // Rough approximation
                       left: '50%',
                       transform: 'translateX(-50%)',
                       width: '12px',
                       height: '12px',
                       background: '#fff',
                       borderRadius: '50%',
                       boxShadow: '0 0 0 4px #0a0a0c'
                     }}></div>
                   ))}
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', flex: 1, paddingBottom: '4rem' }}>
                {events.map((event, index) => (
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
          </motion.main>
        )}

        {currentView === 'details' && selectedEvent && (
          <EventDetails key="details" event={selectedEvent} onBack={handleBack} onRegister={() => handleRegister(selectedEvent)} />
        )}

        {currentView === 'register' && selectedEvent && (
          <RegisterView key="register" event={selectedEvent} onBack={handleBack} />
        )}
      </AnimatePresence>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Search, MapPin, Star, TrendingUp, Bell, Plus, Users, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Registered Events', value: '12', icon: Calendar, color: '#ff6f3f' },
    { label: 'University Events', value: '45', icon: Users, color: '#3b82f6' },
    { label: 'Saved', value: '8', icon: Star, color: '#facc15' },
  ];

  const upcomingEvents = [
    { title: 'National Healthcare Hackathon 2.0', date: 'Oct 12, 2024', venue: 'JECRC University', image: '/event1.png' },
    { title: 'Indie Night: Live Bands', date: 'Feb 14, 2026', venue: 'Music Hall', image: '/event2.png' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#fff', padding: '100px 5% 50px' }}>
      <div className="dot-grid" style={{ opacity: 0.1 }}></div>
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '3rem' }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Hello, <span style={{ color: '#ff6f3f' }}>{user?.name.split(' ')[0]}!</span>
        </h1>
        <p style={{ opacity: 0.6, fontSize: '1.1rem' }}>Welcome back to your personalized campus hub.</p>
      </motion.div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '24px',
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem'
            }}
          >
            <div style={{ background: `${stat.color}15`, padding: '1rem', borderRadius: '16px', color: stat.color }}>
               <stat.icon size={28} />
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}>{stat.value}</div>
              <div style={{ opacity: 0.5, fontSize: '0.9rem' }}>{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
        {/* Left Column: My Schedule */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Upcoming Schedule</h2>
            <button style={{ background: 'none', border: 'none', color: '#ff6f3f', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              View all <ArrowRight size={16} />
            </button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  background: 'rgba(255,255,255,0.02)',
                  padding: '1rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.03)',
                  alignItems: 'center'
                }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={event.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>{event.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem', opacity: 0.5, fontSize: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} /> {event.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={14} /> {event.venue}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Right Column: Recommended */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Recommended for You</h2>
            <button style={{ background: 'none', border: 'none', color: '#ff6f3f', fontWeight: 600, cursor: 'pointer' }}>See all</button>
          </div>

          <div style={{ background: 'linear-gradient(135deg, rgba(255,111,63,0.1) 0%, rgba(139,92,246,0.1) 100%)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
             <TrendingUp size={100} style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.05, transform: 'rotate(-15deg)' }} />
             <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>Smart Recommendations</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: '1.5rem' }}>Based on your interests, we found 5 new workshops and 2 hackathons happening next week.</p>
                <button style={{ background: '#fff', color: '#000', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '12px', fontWeight: 700, cursor: 'pointer' }}>
                  Explore Now
                </button>
             </div>
          </div>
        </section>
      </div>

      {/* Action shortcuts */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', display: 'flex', gap: '1rem', zIndex: 100 }}>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ff6f3f', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(255,111,63,0.3)', cursor: 'pointer' }}>
          <Plus size={24} />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', cursor: 'pointer' }}>
          <Bell size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MapPin, Search, X, Sparkles, TrendingUp, Clock, Filter, Star } from 'lucide-react';

import { EventDetail, RegisterView } from '../components/SharedViews';

// ─── Data ─────────────────────────────────────────────────────────────────────
const allEvents = [
  { id: 1, title: 'Indie Night: Live Bands & Open Mic', organizer: 'JECRC Music Club', date: 'Sat, Feb 14 • 4:45 am', venue: 'Jaipur, Rajasthan', image: '/event1.png', category: 'Music', price: 'Free', seats: '69/100', tag: 'Trending' },
  { id: 2, title: 'EDM Blast Fest 2026', organizer: 'Hukum Productions', date: 'Sat, Feb 14 • 4:45 am', venue: 'Jaipur, Rajasthan', image: '/event2.png', category: 'Music', price: 'Free', seats: '69/100', tag: 'Hot' },
  { id: 3, title: 'Udaipur World Music Festival', organizer: 'City Palace Events', date: 'Sat, Feb 14 • 4:45 am', venue: 'Jaipur, Rajasthan', image: '/event1.png', category: 'Music', price: 'Free', seats: '69/100', tag: '' },
  { id: 4, title: 'Bollywood Beats DJ Party', organizer: 'Club Rhythm', date: 'Sat, Feb 14 • 4:45 am', venue: 'Jaipur, Rajasthan', image: '/event2.png', category: 'Gaming', price: 'Free', seats: '69/100', tag: 'New' },
  { id: 5, title: "It's all a DREAM, Karan Aujla India Tour", organizer: 'BookMyShow Live', date: 'Sat, Feb 14 • 4:45 am', venue: 'Jaipur, Rajasthan', image: '/event1.png', category: 'Music', price: 'Free', seats: '69/100', tag: '' },
  { id: 6, title: 'Hukum Live in USA, Diljeet', organizer: 'International Shows', date: 'Sat, Feb 14 • 4:45 am', venue: 'Jaipur, Rajasthan', image: '/event2.png', category: 'Dance', price: 'Free', seats: '69/100', tag: 'Hot' },
  { id: 7, title: 'Acoustic Vibes: Coffee & Music', organizer: 'Café Culture Events', date: 'Sat, Feb 14 • 4:45 am', venue: 'Jaipur, Rajasthan', image: '/event1.png', category: 'Music', price: 'Free', seats: '69/100', tag: '' },
  { id: 8, title: 'Jaana Samjho Na, Aditya Rikhari India Tour 2026', organizer: 'Live Nation India', date: 'Sat, Feb 14 • 4:45 am', venue: 'Jaipur, Rajasthan', image: '/event2.png', category: 'Tech', price: 'Free', seats: '69/100', tag: 'Trending' },
  { id: 9, title: 'Anuv Jain, Jaipur Live at JECRC University', organizer: 'JECRC University', date: 'Sat, Feb 14 • 4:45 am', venue: 'Jaipur, Rajasthan', image: '/event1.png', category: 'Music', price: 'Free', seats: '69/100', tag: '' },
  { id: 10, title: 'Armaan Malik, Live in Bengaluru', organizer: 'Paytm Insider', date: 'Sat, Feb 14 • 4:45 am', venue: 'Jaipur, Rajasthan', image: '/event2.png', category: 'Culture', price: 'Free', seats: '69/100', tag: 'New' },
  { id: 11, title: 'National Healthcare Hackathon 2.0', organizer: 'JECRC University', date: 'Oct 12, 2024 • 9:00 AM PST', venue: 'Moscone Center, SF / Hybrid', image: '/event1.png', category: 'Tech', price: 'Free', seats: '69/100', tag: 'Trending' },
  { id: 12, title: 'Hukum Holi Fest', organizer: 'JECRC University', date: 'Oct 12, 2024 • 9:00 AM PST', venue: 'Moscone Center, SF / Hybrid', image: '/event2.png', category: 'Dance', price: 'Free', seats: '69/100', tag: '' },
];

const categories = ['All', 'Music', 'Gaming', 'Tech', 'Dance', 'Drama', 'Academics', 'Workshops', 'Culture'];

const featuredEvents = allEvents.filter(e => e.tag === 'Trending' || e.tag === 'Hot').slice(0, 3);

// ─── Featured Event Card ────────────────────────────────────────────────────────
const FeaturedCard = ({ event, onClick }: { event: any; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(99,102,241,0.1))',
        border: '1px solid rgba(139,92,246,0.3)',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(139,92,246,0.2)',
      }}
    >
      <div style={{ position: 'relative', width: '100%', paddingTop: '60%', overflow: 'hidden', background: '#1a1a1f' }}>
        <TagBadge tag={event.tag} />
        <motion.img
          src={event.image}
          alt={event.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)'
        }} />
      </div>

      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Star size={16} color="#fbbf24" fill="#fbbf24" />
          <span style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 600 }}>Featured</span>
        </div>

        <h3 style={{
          color: '#f1f5f9', fontSize: '1.1rem', fontWeight: 700,
          lineHeight: 1.3, marginBottom: '0.5rem'
        }}>
          {event.title}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
          <MapPin size={14} color="#8b5cf6" />
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{event.venue}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{event.seats}</span>
          <span style={{
            fontSize: '0.85rem', fontWeight: 700,
            color: event.price === 'Free' ? '#34d399' : '#f59e0b',
            background: event.price === 'Free' ? 'rgba(52,211,153,0.1)' : 'rgba(245,158,11,0.1)',
            padding: '3px 10px', borderRadius: '15px'
          }}>
            {event.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Tag Badge ────────────────────────────────────────────────────────────────
const TagBadge = ({ tag }: { tag: string }) => {
  if (!tag) return null;
  const colors: Record<string, string> = {
    Trending: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    Hot: 'linear-gradient(135deg, #ef4444, #ec4899)',
    New: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  };
  return (
    <div style={{
      position: 'absolute', top: '10px', left: '10px', zIndex: 3,
      background: colors[tag] || '#3b82f6',
      color: '#fff', fontSize: '0.65rem', fontWeight: 700,
      padding: '3px 8px', borderRadius: '20px',
      textTransform: 'uppercase', letterSpacing: '0.08em',
      boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
      display: 'flex', alignItems: 'center', gap: '3px'
    }}>
      {tag === 'Trending' && <TrendingUp size={10} />}
      {tag === 'Hot' && '🔥'}
      {tag === 'New' && <Sparkles size={10} />}
      {tag}
    </div>
  );
};

// ─── Animated Card ────────────────────────────────────────────────────────────
const DiscoverCard = ({ event, index, onClick }: { event: any; index: number; onClick: () => void }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        backdropFilter: 'blur(8px)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.18)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.2)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '75%', overflow: 'hidden', background: '#1a1a1f' }}>
        <TagBadge tag={event.tag} />
        <motion.img
          src={event.image}
          alt={event.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Info */}
      <div style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
          <Clock size={12} color="#6b7280" />
          <span style={{ fontSize: '0.72rem', color: '#6b7280' }}>{event.date}</span>
        </div>

        <h3 style={{
          color: '#f1f5f9', fontSize: '0.92rem', fontWeight: 600,
          lineHeight: 1.35, marginBottom: '0.5rem',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
        }}>
          {event.title}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.6rem' }}>
          <MapPin size={12} color="#8b5cf6" />
          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{event.venue}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.65rem' }}>
          <span style={{ fontSize: '0.72rem', color: '#6b7280' }}>{event.seats}</span>
          <span style={{
            fontSize: '0.75rem', fontWeight: 700,
            color: event.price === 'Free' ? '#34d399' : '#f59e0b',
            background: event.price === 'Free' ? 'rgba(52,211,153,0.1)' : 'rgba(245,158,11,0.1)',
            padding: '2px 8px', borderRadius: '20px'
          }}>
            {event.price}
          </span>
        </div>
      </div>

      {/* Hover glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute', inset: 0, borderRadius: '16px', pointerEvents: 'none',
          background: 'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
};

// Event Detail string is now removed since it's imported.

// ─── Main Discover Page ───────────────────────────────────────────────────────
export default function Discover({ isLoggedIn }: { isLoggedIn?: boolean }) {
  const [currentView, setCurrentView] = useState<'grid' | 'details' | 'register'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>(['Music events', 'Tech workshops']);
  const [showRecent, setShowRecent] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'popularity' | 'name'>('popularity');

  const filteredEvents = allEvents.filter(e => {
    const matchCat = selectedCategory === 'All' || e.category === selectedCategory;
    const matchSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  }).sort((a, b) => {
    if (sortBy === 'date') return new Date(a.date).getTime() - new Date(b.date).getTime();
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    // popularity: prioritize trending/hot tags
    const aScore = (a.tag === 'Trending' ? 3 : a.tag === 'Hot' ? 2 : a.tag === 'New' ? 1 : 0);
    const bScore = (b.tag === 'Trending' ? 3 : b.tag === 'Hot' ? 2 : b.tag === 'New' ? 1 : 0);
    return bScore - aScore;
  });

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setCurrentView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegisterClick = () => {
    setCurrentView('register');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (currentView === 'register') {
      setCurrentView('details');
    } else {
      setSelectedEvent(null);
      setCurrentView('grid');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    if (query && !recentSearches.includes(query)) {
      setRecentSearches(prev => [query, ...prev.slice(0, 4)]);
    }
    setShowRecent(false);
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
    setShowRecent(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setSearchFocused(false);
      setShowRecent(false);
    }, 150);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#08080c',
      backgroundImage: `
        radial-gradient(ellipse at 20% 0%, rgba(139,92,246,0.18) 0%, transparent 45%),
        radial-gradient(ellipse at 80% 10%, rgba(99,102,241,0.12) 0%, transparent 40%),
        radial-gradient(ellipse at 50% 100%, rgba(236,72,153,0.06) 0%, transparent 50%)
      `,
      fontFamily: "'Outfit', sans-serif",
      overflowX: 'hidden',
    }}>
      {/* Subtle grid lines */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />



      <AnimatePresence mode="wait">
        {currentView === 'details' && selectedEvent ? (
          <motion.div key="detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
            <EventDetail event={selectedEvent} onBack={handleBack} onRegister={handleRegisterClick} />
          </motion.div>
        ) : currentView === 'register' && selectedEvent ? (
          <motion.div key="register" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
            <RegisterView event={selectedEvent} onBack={handleBack} />
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="discover-padding"
            style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem 6rem 2rem', maxWidth: '1300px', margin: '0 auto' }}
          >
            {/* ── Header ── */}
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: '20px', padding: '5px 14px', marginBottom: '1.25rem' }}
              >
                <Sparkles size={13} color="#a78bfa" />
                <span style={{ color: '#a78bfa', fontSize: '0.82rem', fontWeight: 600 }}>What's happening</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.5rem' }}
              >
                Discover Events
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{ color: '#64748b', fontSize: '1.1rem', fontWeight: 500 }}
              >
                worth showing up for<span style={{ color: '#8b5cf6' }}>.</span>
              </motion.p>
            </div>

            {/* ── Search Bar ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ maxWidth: '560px', margin: '0 auto 2.5rem auto', position: 'relative' }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${searchFocused ? 'rgba(139,92,246,0.6)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '14px', padding: '0.85rem 1.25rem',
                boxShadow: searchFocused ? '0 0 0 4px rgba(139,92,246,0.12)' : 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}>
                <Search size={18} color={searchFocused ? '#a78bfa' : '#555'} />
                <input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  onKeyDown={e => e.key === 'Enter' && handleSearchSubmit(searchQuery)}
                  placeholder="Search events, artists, venues..."
                  style={{
                    flex: 1, background: 'transparent', border: 'none', outline: 'none',
                    color: '#f1f5f9', fontSize: '0.95rem', fontFamily: "'Outfit', sans-serif"
                  }}
                />
                {searchQuery && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} onClick={() => setSearchQuery('')} style={{ cursor: 'pointer' }}>
                    <X size={16} color="#555" />
                  </motion.div>
                )}
              </div>

              {/* Recent Searches Dropdown */}
              <AnimatePresence>
                {showRecent && recentSearches.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    style={{
                      position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 10,
                      background: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px', marginTop: '0.5rem', overflow: 'hidden',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {recentSearches.map((search, index) => (
                      <motion.div
                        key={search}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleSearchSubmit(search)}
                        style={{
                          padding: '0.75rem 1rem', cursor: 'pointer',
                          borderBottom: index < recentSearches.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                          color: '#e2e8f0', fontSize: '0.9rem'
                        }}
                        whileHover={{ background: 'rgba(139,92,246,0.1)' }}
                      >
                        <Clock size={14} style={{ marginRight: '0.5rem', opacity: 0.6 }} />
                        {search}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── Featured Events ── */}
            {selectedCategory === 'All' && !searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                style={{ marginBottom: '3rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <Sparkles size={20} color="#a78bfa" />
                  <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700 }}>Featured Events</h2>
                </div>
                <div className="discover-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {featuredEvents.map((event) => (
                    <FeaturedCard key={event.id} event={event} onClick={() => handleEventClick(event)} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Filters & Sort ── */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Filter size={16} color="#94a3b8" />
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 500 }}>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  style={{
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px', padding: '0.4rem 0.8rem', color: '#e2e8f0',
                    fontSize: '0.85rem', outline: 'none'
                  }}
                >
                  <option value="popularity">Popularity</option>
                  <option value="date">Date</option>
                  <option value="name">Name</option>
                </select>
              </div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
                {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
              </div>
            </motion.div>

            {/* ── Category Filter ── */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', overflowX: 'auto', paddingBottom: '4px' }}
            >
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    flexShrink: 0,
                    background: selectedCategory === cat ? 'linear-gradient(135deg, #8b5cf6, #6366f1)' : 'rgba(255,255,255,0.05)',
                    color: selectedCategory === cat ? '#fff' : '#94a3b8',
                    border: selectedCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                    padding: '0.5rem 1.25rem', borderRadius: '20px',
                    fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem',
                    fontFamily: "'Outfit', sans-serif",
                    boxShadow: selectedCategory === cat ? '0 4px 15px rgba(139,92,246,0.4)' : 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>

            {/* ── Grid ── */}
            <AnimatePresence mode="popLayout">
              {filteredEvents.length > 0 ? (
                <motion.div
                  layout
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.5rem',
                  }}
                >
                  {filteredEvents.map((event, index) => (
                    <motion.div key={event.id} layout exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}>
                      <DiscoverCard 
                        event={event} 
                        index={index} 
                        onClick={() => {
                          if (!isLoggedIn) {
                            window.location.hash = '#signin';
                            return;
                          }
                          handleEventClick(event);
                        }} 
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: 'center', padding: '5rem 2rem', color: '#475569' }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#64748b' }}>No events found</p>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Try a different search or category</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Auth Blur Overlay */}
            {!isLoggedIn && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '70%',
                background: 'linear-gradient(to top, #08080c 40%, rgba(8,8,12,0.8) 70%, transparent 100%)',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '20vh',
                pointerEvents: 'all',
                backdropFilter: 'blur(4px)'
              }}>
                <div style={{ textAlign: 'center', maxWidth: '400px', padding: '2rem' }}>
                  <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Want to see more?</h2>
                  <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Login to explore thousands of college events and find your next vibe.</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { window.location.hash = '#signin'; }}
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                      color: '#fff',
                      border: 'none',
                      padding: '1rem 2.5rem',
                      borderRadius: '30px',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      boxShadow: '0 10px 25px rgba(139,92,246,0.3)'
                    }}
                  >
                    Login to view more
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

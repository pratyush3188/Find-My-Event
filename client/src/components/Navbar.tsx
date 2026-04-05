import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="navbar-pill"
    >
      <div 
        style={{ 
          fontWeight: 800, 
          fontSize: '1.25rem', 
          paddingRight: '1.5rem', 
          borderRight: '1px solid rgba(0,0,0,0.1)',
          letterSpacing: '-0.02em',
          cursor: 'pointer'
        }}
      >
        Find my event.
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', paddingLeft: '1rem' }}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#discover" className="nav-link">Discover</a>
        <a href="#events" className="nav-link">Events</a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: 'auto' }}>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <Search size={20} strokeWidth={2.5} />
        </motion.div>
        
        <a href="#signin" className="nav-link" style={{ fontWeight: 600 }}>Sign In</a>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-button"
        >
          Join Now
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

import { motion } from 'framer-motion';

const Footer = () => (
  <footer style={{
    backgroundColor: '#0a0a0a',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '5rem 6rem 3rem 6rem',
    color: '#fff',
    fontFamily: "'Outfit', sans-serif",
  }}>
    {/* Top: Big brand + tagline */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem' }}>
      <div>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.8rem' }}>
          Find my event<span style={{ color: '#ff4d00' }}>.</span>
        </h2>
        <p style={{ fontSize: '1.05rem', opacity: 0.45, maxWidth: '380px', lineHeight: 1.6 }}>
          Your one-stop platform to discover, create, and register for campus events.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '5rem' }}>
        {/* Column 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.3, marginBottom: '0.5rem' }}>Product</span>
          <a href="#home" style={{ color: '#fff', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem', transition: 'opacity 0.2s' }}>Home</a>
          <a href="#events" style={{ color: '#fff', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>Events</a>
          <a href="#discover" style={{ color: '#fff', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>Discover</a>
        </div>
        {/* Column 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.3, marginBottom: '0.5rem' }}>Company</span>
          <a href="#about" style={{ color: '#fff', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>About</a>
          <a href="#contact" style={{ color: '#fff', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>Contact</a>
          <a href="#careers" style={{ color: '#fff', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>Careers</a>
        </div>
        {/* Column 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.3, marginBottom: '0.5rem' }}>Social</span>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>Twitter</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>Instagram</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>LinkedIn</a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '2rem' }} />

    {/* Bottom bar */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
      <p style={{ fontSize: '0.85rem', opacity: 0.3 }}>© 2026 Find My Event. All rights reserved.</p>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.3, fontSize: '0.85rem' }}>Privacy Policy</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.3, fontSize: '0.85rem' }}>Terms of Service</a>
      </div>
    </div>

    {/* Giant watermark text */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.03 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', marginTop: '3rem', fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.9, userSelect: 'none', pointerEvents: 'none' }}
    >
      FIND MY EVENT
    </motion.div>
  </footer>
);

export default Footer;

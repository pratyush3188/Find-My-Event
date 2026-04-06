import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', backgroundColor: '#f8f9fa', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Elements */}
      <div className="dot-grid"></div>
      
      {/* Back to Home Button */}
      <motion.a 
        href="#home"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none',
          color: '#1a1a1a',
          fontWeight: 500,
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.5)',
          padding: '0.5rem 1rem',
          borderRadius: '999px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0,0,0,0.05)'
        }}
      >
        <ArrowLeft size={18} />
        Back
      </motion.a>

      {/* Left Section - Graphic / Branding */}
      <div 
        style={{
          flex: 1,
          display: 'none', 
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '4rem',
          position: 'relative',
          backgroundColor: '#111',
          color: 'white',
          borderTopRightRadius: '3rem',
          borderBottomRightRadius: '3rem',
        }}
        className="auth-left-panel"
      >
        {/* We can expose this on desktop via CSS */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Discover the <br />
            <span className="serif-italic" style={{ color: '#ff6f3f' }}>best events</span> <br />
            on campus.
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '400px', lineHeight: 1.6 }}>
            Join our community to explore, register, and experience unforgettable moments just one search away.
          </p>
        </motion.div>
        
        {/* Background abstract shapes */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,111,63,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Right Section - Form */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ width: '100%', maxWidth: '440px' }}>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'signup'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div variants={itemVariants} style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
                  {isLogin ? 'Welcome back' : 'Create an account'}
                </h2>
                <p style={{ color: '#666', fontSize: '1rem' }}>
                  {isLogin ? 'Enter your details to access your account' : 'Sign up to start discovering events'}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
                <button style={{
                  width: '100%',
                  padding: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  backgroundColor: 'white',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <GoogleIcon />
                  {isLogin ? 'Log in with Google' : 'Sign up with Google'}
                </button>
              </motion.div>

              <motion.div variants={itemVariants} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                margin: '1.5rem 0'
              }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
                <span style={{ fontSize: '0.875rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Or continue with</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
              </motion.div>

              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {!isLogin && (
                  <motion.div variants={itemVariants}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                      Full Name
                    </label>
                    <div style={{ position: 'relative' }}>
                      <User size={18} color="#888" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem 0.875rem 2.75rem',
                          borderRadius: '12px',
                          border: '1px solid rgba(0,0,0,0.1)',
                          backgroundColor: 'rgba(255,255,255,0.8)',
                          fontSize: '1rem',
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                          fontFamily: 'inherit'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#ff6f3f';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,111,63,0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                    Email Address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} color="#888" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input 
                      type="email" 
                      placeholder="you@university.edu"
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem 0.875rem 2.75rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.1)',
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#ff6f3f';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,111,63,0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a' }}>
                      Password
                    </label>
                    {isLogin && (
                      <a href="#" style={{ fontSize: '0.875rem', color: '#ff6f3f', textDecoration: 'none', fontWeight: 500 }}>
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <div style={{ position: 'relative' }}>
                    <Lock size={18} color="#888" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem 0.875rem 2.75rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.1)',
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#ff6f3f';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,111,63,0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} style={{ marginTop: '0.5rem' }}>
                  <button 
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      backgroundColor: '#ff6f3f',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 14px rgba(255,111,63,0.3)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#e55a2b';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,111,63,0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff6f3f';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(255,111,63,0.3)';
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </button>
                </motion.div>
                
              </form>

              <motion.div variants={itemVariants} style={{ marginTop: '2rem', textAlign: 'center' }}>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button 
                    onClick={() => setIsLogin(!isLogin)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ff6f3f',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      padding: 0
                    }}
                    onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    {isLogin ? 'Sign up' : 'Log in'}
                  </button>
                </p>
              </motion.div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default Auth;

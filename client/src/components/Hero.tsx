import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRive, Layout, Fit, Alignment, useStateMachineInput } from '@rive-app/react-canvas';

const Hero = () => {
  const { RiveComponent, rive } = useRive({
    src: 'https://cdn.prod.website-files.com/66b0c146aa30e40075a7013f/6717774f2eba913f99710e52_unicorn.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  // Track mouse movement for Rive interactivity (if inputs exist)
  const pointerX = useStateMachineInput(rive, 'State Machine 1', 'pointerX');
  const pointerY = useStateMachineInput(rive, 'State Machine 1', 'pointerY');

  const onMouseMove = (e: React.MouseEvent) => {
    if (pointerX && pointerY) {
      pointerX.value = (e.clientX / window.innerWidth) * 100;
      pointerY.value = (e.clientY / window.innerHeight) * 100;
    }
  };

  const tagline = "Campus Events,";
  const serifText = "Sorted.";

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const wordVars = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section 
      onMouseMove={onMouseMove}
      style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        position: 'relative',
        padding: '0 2rem'
      }}
    >
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        style={{ width: '100%', maxWidth: '1400px' }}
      >
        <h1 
          style={{ 
            fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', 
            fontWeight: 800, 
            lineHeight: 0.9,
            marginBottom: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.2em'
          }}
        >
          {tagline.split(' ').map((word, i) => (
            <motion.span key={i} variants={wordVars} style={{ display: 'inline-block' }}>
              {word}
            </motion.span>
          ))}
          
          <motion.div 
            variants={wordVars}
            style={{ 
              width: '1.2em', 
              height: '1.2em', 
              backgroundColor: '#111', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 0.15em',
              overflow: 'hidden'
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <RiveComponent style={{ width: '130%', height: '130%' }} />
            </div>
          </motion.div>

          <motion.span 
            variants={wordVars} 
            className="serif-italic"
            style={{ display: 'inline-block' }}
          >
            {serifText}
          </motion.span>
        </h1>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ maxWidth: '600px', fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: '#444', marginTop: '1rem', fontWeight: 400 }}
      >
        Discover the best mini-events, workshops, and student-run festivals across your campus.
      </motion.p>

      <div style={{ position: 'absolute', bottom: '3rem', left: '4rem', fontSize: '0.9rem', fontWeight: 500, opacity: 0.4 }}>
        @findmyevent
      </div>
      <div style={{ position: 'absolute', bottom: '3rem', right: '4rem', fontSize: '0.9rem', fontWeight: 500, opacity: 0.4 }}>
        We see the magic in the details.
      </div>
    </section>
  );
};

export default Hero;

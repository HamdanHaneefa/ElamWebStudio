import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ShinyText from './ShinyText';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col justify-between items-center px-4 md:px-6 relative pt-16 md:pt-32 overflow-hidden hero-section-mobile">
      {/* Smooth overlay for seamless transition */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-slate-800/30 pointer-events-none"></div> */}
      
      {/* Main Heading - Perfectly Centered with Animation */}
      <div className="flex-1 flex items-center justify-center w-full max-w-full md:flex-1 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-full overflow-hidden drop-shadow-2xl"
        >
          <motion.h1 
            className="text-7xl md:text-8xl lg:text-9xl font-bold md:font-normal tracking-wide md:tracking-wider text-center break-words select-none max-w-full hero-title" 
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              wordBreak: 'keep-all',
              whiteSpace: 'normal',
              overflow: 'hidden',
              maxWidth: '100vw',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              pointerEvents: 'none',
              cursor: 'default',
              lineHeight: '1.1'
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span 
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <ShinyText 
                text="Elam" 
                disabled={false} 
                speed={3} 
                className="text-white hero-title"
                style={{
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  color: 'inherit'
                }}
              />
            </motion.span>
            <motion.span 
              className="text-orange-400 font-semibold italic ml-1 md:ml-2 mobile-line-break" 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              style={{
                pointerEvents: 'none',
                cursor: 'default'
              }}
            >
              <ShinyText 
                text="Web" 
                disabled={false} 
                speed={3} 
                className="text-orange-400 font-semibold italic hero-title"
                style={{
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  color: 'inherit'
                }}
              />
            </motion.span>
            <motion.span 
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <ShinyText 
                text="Studio" 
                disabled={false} 
                speed={3} 
                className="text-white hero-title"
                style={{
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  color: 'inherit'
                }}
              />
            </motion.span>
          </motion.h1>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div 
        className="text-center mb-8 md:mb-12 max-w-full px-2 md:px-4 md:max-w-2xl w-full select-none relative z-10 drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.p 
          className="text-gray-300 font-light leading-relaxed select-none"
          style={{
            fontFamily: '"Inter", "Poppins", "Helvetica Neue", sans-serif',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            fontSize: 'clamp(0.75rem, 2vw, 1.125rem)',
            letterSpacing: 'clamp(0.02em, 0.05vw, 0.1em)',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            pointerEvents: 'none',
            cursor: 'default'
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="block sm:inline">TRANSFORMING VISIONS INTO DIGITAL MASTERPIECES</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline mt-1 sm:mt-0">WHERE INNOVATION MEETS EXCELLENCE</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;

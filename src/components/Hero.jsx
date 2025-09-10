import { useState, useEffect } from 'react';
import ShinyText from './ShinyText';
import FadeContent from './FadeContent';

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-between items-center px-4 md:px-6 relative pt-16 md:pt-32 overflow-hidden hero-section-mobile">
      {/* Main Heading - Animate all words together */}
      <div className="flex-1 flex items-center justify-center w-full max-w-full md:flex-1 relative z-10">
        <FadeContent blur={false} duration={1000} initialOpacity={0}>
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-bold md:font-normal tracking-wide md:tracking-wider text-center break-words select-none max-w-full hero-title"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              wordBreak: 'keep-all',
              whiteSpace: 'normal',
              overflow: 'hidden',
              maxWidth: '100vw',
              userSelect: 'none',
              pointerEvents: 'none',
              cursor: 'default',
              lineHeight: '1.1'
            }}
          >
            <span className="text-white">
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
            </span>
            <span className="text-orange-400 font-semibold italic ml-1 md:ml-2 mobile-line-break" style={{ pointerEvents: 'none', cursor: 'default' }}>
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
            </span>
            <span className="text-white">
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
            </span>
          </h1>
        </FadeContent>
      </div>

      {/* Bottom Text */}
      <FadeContent blur={false} duration={1000} initialOpacity={0} delay={300}>
        <div className="text-center mb-8 md:mb-12 max-w-full px-2 md:px-4 md:max-w-2xl w-full select-none relative z-10 drop-shadow-lg">
          <p 
            className="text-gray-300 font-light leading-relaxed select-none"
            style={{
              fontFamily: '"Montserrat", "Segoe UI", "Arial", sans-serif',
              userSelect: 'none',
              fontSize: 'clamp(0.75rem, 2vw, 1.125rem)',
              letterSpacing: 'clamp(0.02em, 0.05vw, 0.1em)',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              pointerEvents: 'none',
              cursor: 'default'
            }}
          >
            <span className="block sm:inline">TRANSFORMING VISIONS INTO DIGITAL MASTERPIECES</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-1 sm:mt-0">WHERE INNOVATION MEETS EXCELLENCE</span>
          </p>
        </div>
      </FadeContent>
    </section>
  );
};

export default HeroSection;

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const designCards = [
  {
    id: 1,
    title: 'Collective Lux',
    category: 'Branding',
    color: '#f8f9fa',
    textColor: '#2d3748',
    type: 'logo',
    backgroundImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 2,
    title: 'Exclusive Offer',
    subtitle: 'Femina Haircut & Spa • Blue Hair Spa & Spa Facial - $349',
    details: 'Full Long Full Hands Underarms & Brazil - $199',
    category: 'Social Media',
    color: '#4c51bf',
    textColor: '#fff',
    type: 'promo',
    backgroundImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 3,
    title: 'NATURE',
    subtitle: "Nature's Gift to Your Skin",
    category: 'Package Design',
    color: '#38a169',
    textColor: '#fff',
    type: 'nature',
    backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 4,
    title: 'PRO CRUNCH',
    category: 'Product Design',
    color: '#f7fafc',
    textColor: '#2d3748',
    type: 'product',
    backgroundImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 5,
    title: 'MILKSHAKE HAIRCARE',
    subtitle: 'Premium Beauty Products',
    category: 'Beauty Brand',
    color: '#d69e2e',
    textColor: '#fff',
    type: 'beauty',
    backgroundImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 6,
    title: 'YOUR PARTNER IN SKIN WELLNESS',
    category: 'Healthcare',
    color: '#ed8936',
    textColor: '#fff',
    type: 'wellness',
    backgroundImage: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 7,
    title: 'Collective Lux',
    category: 'Logo Design',
    color: '#f8f9fa',
    textColor: '#2d3748',
    type: 'logo',
    backgroundImage: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 8,
    title: 'Exclusive Offer',
    subtitle: 'Femina Haircut & Spa',
    details: 'Premium Packages Available',
    category: 'Marketing',
    color: '#553c9a',
    textColor: '#fff',
    type: 'promo',
    backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 9,
    title: 'NATURE',
    subtitle: "Nature's Gift to Your Skin",
    category: 'Eco Design',
    color: '#38a169',
    textColor: '#fff',
    type: 'nature',
    backgroundImage: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=400&h=600&fit=crop&crop=center'
  }
];

const DesignCard = ({ card }) => {
  const renderCardContent = () => {
    switch (card.type) {
      case 'logo':
        return (
          <>
            <div className="card-content">
              <div className="card-category">{card.category}</div>
              <div className="card-title">{card.title}</div>
            </div>
            <div className="logo-design">
              <div className="logo-circle">
                <div className="logo-inner">
                  <svg viewBox="0 0 100 100" className="logo-svg">
                    <path d="M20,50 Q50,20 80,50 Q50,80 20,50" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </>
        );
      case 'promo':
        return (
          <div className="promo-content">
            <div className="promo-header">
              <div className="card-category">{card.category}</div>
              <div className="promo-badge">EXCLUSIVE</div>
            </div>
            <div className="card-title">{card.title}</div>
            {card.subtitle && <div className="card-subtitle">{card.subtitle}</div>}
            {card.details && <div className="promo-details">{card.details}</div>}
            <div className="promo-cta">Book Now</div>
          </div>
        );
      case 'nature':
        return (
          <>
            <div className="card-content">
              <div className="card-category">{card.category}</div>
              <div className="nature-title">{card.title}</div>
              {card.subtitle && <div className="nature-subtitle">{card.subtitle}</div>}
            </div>
            <div className="nature-design">
              <div className="nature-leaves">
                <div className="leaf leaf-1"></div>
                <div className="leaf leaf-2"></div>
                <div className="leaf leaf-3"></div>
              </div>
              <div className="nature-badge">NATURE'S GIFT<br />TO YOUR SKIN</div>
            </div>
          </>
        );
      case 'product':
        return (
          <div className="product-content">
            <div className="card-category">{card.category}</div>
            <div className="product-title">{card.title}</div>
            <div className="product-visual">
              <div className="product-box"></div>
            </div>
          </div>
        );
      case 'beauty':
        return (
          <div className="beauty-content">
            <div className="card-category">{card.category}</div>
            <div className="beauty-title">{card.title}</div>
            {card.subtitle && <div className="beauty-subtitle">{card.subtitle}</div>}
            <div className="beauty-icon">💄</div>
          </div>
        );
      case 'wellness':
        return (
          <div className="wellness-content">
            <div className="card-category">{card.category}</div>
            <div className="wellness-title">{card.title}</div>
            <div className="wellness-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        );
      default:
        return (
          <div className="card-content">
            <div className="card-category">{card.category}</div>
            <div className="card-title">{card.title}</div>
            {card.subtitle && <div className="card-subtitle">{card.subtitle}</div>}
          </div>
        );
    }
  };

  return (
    <motion.a 
      href="#"
      className="design-card block cursor-pointer"
      style={{
        backgroundColor: card.color,
        color: card.textColor,
        transform: 'rotateY(0deg) rotateX(0deg)',
        transformStyle: 'preserve-3d',
        backgroundImage: `url(${card.backgroundImage})`
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={(e) => {
        e.preventDefault();
        console.log(`Clicked on ${card.title} project`);
        // Future: navigate to project detail page
      }}
    >
      {renderCardContent()}
    </motion.a>
  );
};

const DesignShowcase = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    
    if (!container || !cards) return;

    const cardElements = cards.querySelectorAll('.design-card');
    const cardWidth = 300 + 32; // Card width + gap (2rem = 32px)
    const totalWidth = cardElements.length * cardWidth;
    
    // Create horizontal scroll animation
    const scrollTween = gsap.to(cards, {
      x: () => -(totalWidth - window.innerWidth + 100),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth * 1.5}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          setIsScrolling(self.isActive);
          
          // Apply 3D effects to cards based on their position
          cardElements.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const distanceFromCenter = Math.abs(cardCenterX - centerX);
            const maxDistance = window.innerWidth / 2;
            const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
            
            // Calculate 3D transforms based on position
            const rotationY = (cardCenterX < centerX ? -1 : 1) * normalizedDistance * 10;
            const rotationX = Math.sin(normalizedDistance * Math.PI) * 3;
            const scale = 1 - (normalizedDistance * 0.05);
            const z = (1 - normalizedDistance) * 30;
            
            gsap.set(card, {
              rotationY: rotationY,
              rotationX: rotationX,
              scale: scale,
              z: z,
              transformOrigin: "center center"
            });
          });
        }
      }
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="design-showcase-section"
    >
      <style jsx>{`
        .design-showcase-section {
          height: 100vh;
          overflow: hidden;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          position: relative;
          width: 100%;
        }

        .showcase-header {
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 10;
          pointer-events: none;
          width: 100%;
          padding: 0 2rem;
        }

        .showcase-category {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 50px;
          color: #22c55e;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }

        .showcase-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .showcase-subtitle {
          font-size: 1rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .cards-container {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 2rem;
          height: 480px;
          perspective: 1200px;
          transform-style: preserve-3d;
          will-change: transform;
          flex-wrap: nowrap !important;
          overflow: visible;
          width: max-content;
          padding-left: 2rem;
        }

        .design-card {
          flex: none;
          width: 300px;
          height: 450px;
          border-radius: 20px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 15px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform;
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          flex-shrink: 0;
        }

        .design-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%);
          z-index: 1;
        }

        .design-card > * {
          position: relative;
          z-index: 2;
        }

        .design-card:hover {
          transform: translateY(-10px) rotateY(5deg) !important;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .card-category {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.8;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          display: inline-block;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.5rem;
        }

        .card-subtitle {
          font-size: 1rem;
          opacity: 0.9;
          line-height: 1.4;
        }

        /* Logo Design Styles */
        .logo-design {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-circle {
          width: 80px;
          height: 80px;
          border: 2px solid currentColor;
          border-radius: 50%;
          opacity: 0.6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-inner {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-svg {
          width: 40px;
          height: 40px;
        }

        /* Promo Design Styles */
        .promo-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .promo-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .promo-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .promo-details {
          font-size: 0.875rem;
          opacity: 0.8;
          margin: 1rem 0;
        }

        .promo-cta {
          background: rgba(255, 255, 255, 0.2);
          padding: 1rem 2rem;
          border-radius: 50px;
          text-align: center;
          font-weight: 600;
          margin-top: auto;
        }

        /* Nature Design Styles */
        .nature-title {
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }

        .nature-subtitle {
          font-size: 1rem;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .nature-design {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 50%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        .nature-leaves {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
        }

        .leaf {
          position: absolute;
          background: currentColor;
          border-radius: 0 100% 0 100%;
          opacity: 0.4;
        }

        .leaf-1 {
          width: 30px;
          height: 30px;
          transform: rotate(45deg);
        }

        .leaf-2 {
          width: 25px;
          height: 25px;
          transform: rotate(135deg) translate(15px, -15px);
        }

        .leaf-3 {
          width: 20px;
          height: 20px;
          transform: rotate(225deg) translate(25px, -5px);
        }

        .nature-badge {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.15);
          padding: 0.75rem;
          border-radius: 10px;
          font-size: 0.625rem;
          font-weight: 700;
          text-align: center;
          line-height: 1.2;
        }

        /* Product Design Styles */
        .product-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .product-title {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: 2rem 0;
        }

        .product-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
        }

        .product-box {
          width: 80px;
          height: 100px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          position: relative;
        }

        .product-box::before {
          content: '';
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          height: 20px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }

        /* Beauty Design Styles */
        .beauty-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
        }

        .beauty-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 2rem 0;
        }

        .beauty-subtitle {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .beauty-icon {
          font-size: 3rem;
          margin-top: auto;
          margin-bottom: 2rem;
        }

        /* Wellness Design Styles */
        .wellness-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
        }

        .wellness-title {
          font-size: 1.125rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 2rem 0;
          text-align: center;
        }

        .wellness-icon {
          margin-top: auto;
          margin-bottom: 2rem;
          opacity: 0.6;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 0.875rem;
          opacity: 0.7;
          pointer-events: none;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .design-card {
            width: 250px;
            height: 380px;
            padding: 1.25rem;
          }

          .showcase-title {
            font-size: 1.75rem;
          }

          .showcase-subtitle {
            font-size: 0.875rem;
            padding: 0 1rem;
          }
          
          .cards-container {
            gap: 1.5rem;
            height: 380px;
            top: 52%;
            padding-left: 1rem;
          }

          .showcase-header {
            top: 8%;
            padding: 0 1rem;
          }
        }
      `}</style>

      {/* Header */}
      <div className="showcase-header">
        <div className="showcase-category">Graphics</div>
        <h2 className="showcase-title">Design to Stare</h2>
        <p className="showcase-subtitle">
          We create the most stunning graphic designs for your social media, websites, branding, or literally anything. They are just mindblowing
        </p>
      </div>

      {/* Scrollable Cards Container */}
      <div ref={cardsRef} className="cards-container">
        {designCards.map((card) => (
          <DesignCard key={card.id} card={card} />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        {isScrolling ? 'Scrolling through designs' : 'Scroll down to navigate left/right'}
      </div>
    </section>
  );
};

export default DesignShowcase;

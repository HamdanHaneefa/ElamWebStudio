import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const designCards = [
  {
    id: 1,
    title: 'Collective Lux',
    category: 'Branding',
    type: 'logo',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-800',
    backgroundImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 2,
    title: 'Exclusive Offer',
    subtitle: 'Femina Haircut & Spa • Blue Hair Spa & Spa Facial - $349',
    details: 'Full Long Full Hands Underarms & Brazil - $199',
    category: 'Social Media',
    type: 'promo',
    bgColor: 'bg-indigo-600',
    textColor: 'text-white',
    backgroundImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 3,
    title: 'NATURE',
    subtitle: "Nature's Gift to Your Skin",
    category: 'Package Design',
    type: 'nature',
    bgColor: 'bg-green-600',
    textColor: 'text-white',
    backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 4,
    title: 'PRO CRUNCH',
    category: 'Product Design',
    type: 'product',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-800',
    backgroundImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 5,
    title: 'MILKSHAKE HAIRCARE',
    subtitle: 'Premium Beauty Products',
    category: 'Beauty Brand',
    type: 'beauty',
    bgColor: 'bg-yellow-600',
    textColor: 'text-white',
    backgroundImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 6,
    title: 'YOUR PARTNER IN SKIN WELLNESS',
    category: 'Healthcare',
    type: 'wellness',
    bgColor: 'bg-orange-600',
    textColor: 'text-white',
    backgroundImage: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 7,
    title: 'Collective Lux',
    category: 'Logo Design',
    type: 'logo',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-800',
    backgroundImage: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 8,
    title: 'Exclusive Offer',
    subtitle: 'Femina Haircut & Spa',
    details: 'Premium Packages Available',
    category: 'Marketing',
    type: 'promo',
    bgColor: 'bg-purple-700',
    textColor: 'text-white',
    backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&crop=center'
  },
  {
    id: 9,
    title: 'NATURE',
    subtitle: "Nature's Gift to Your Skin",
    category: 'Eco Design',
    type: 'nature',
    bgColor: 'bg-green-600',
    textColor: 'text-white',
    backgroundImage: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=400&h=600&fit=crop&crop=center'
  }
];

const DesignCard = ({ card, isActive }) => {
  const renderCardContent = () => {
    switch (card.type) {
      case 'logo':
        return (
          <>
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider opacity-80 mb-4">
                {card.category}
              </div>
              <div className="text-2xl font-bold leading-tight mb-2">
                {card.title}
              </div>
            </div>
            <div className="absolute bottom-8 right-8 flex items-center justify-center">
              <div className="w-20 h-20 border-2 border-current rounded-full opacity-60 flex items-center justify-center">
                <div className="w-15 h-15 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-10 h-10">
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
          <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-8">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider opacity-80">
                {card.category}
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full text-xs font-bold">
                EXCLUSIVE
              </div>
            </div>
            <div className="text-2xl font-bold leading-tight mb-2">
              {card.title}
            </div>
            {card.subtitle && (
              <div className="text-base opacity-90 leading-relaxed">
                {card.subtitle}
              </div>
            )}
            {card.details && (
              <div className="text-sm opacity-80 my-4">
                {card.details}
              </div>
            )}
            <div className="bg-white/20 px-8 py-4 rounded-full text-center font-semibold mt-auto">
              Book Now
            </div>
          </div>
        );
      case 'nature':
        return (
          <>
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider opacity-80 mb-4">
                {card.category}
              </div>
              <div className="text-4xl font-black tracking-tight mb-2">
                {card.title}
              </div>
              {card.subtitle && (
                <div className="text-base opacity-90 mb-8">
                  {card.subtitle}
                </div>
              )}
            </div>
            <div className="absolute bottom-0 right-0 w-full h-1/2 flex items-end justify-end">
              <div className="absolute bottom-8 right-8">
                <div className="relative">
                  <div className="absolute w-8 h-8 bg-current rounded-tl-full rounded-br-full opacity-40 rotate-45"></div>
                  <div className="absolute w-6 h-6 bg-current rounded-tl-full rounded-br-full opacity-40 rotate-135 translate-x-4 -translate-y-4"></div>
                  <div className="absolute w-5 h-5 bg-current rounded-tl-full rounded-br-full opacity-40 rotate-225 translate-x-6 -translate-y-1"></div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/15 p-3 rounded-lg text-xs font-bold text-center leading-tight">
                NATURE'S GIFT<br />TO YOUR SKIN
              </div>
            </div>
          </>
        );
      case 'product':
        return (
          <div className="h-full flex flex-col justify-between">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider opacity-80 mb-4">
              {card.category}
            </div>
            <div className="text-3xl font-black tracking-tight my-8">
              {card.title}
            </div>
            <div className="flex items-center justify-center flex-grow">
              <div className="relative w-20 h-25 bg-black/10 rounded-lg">
                <div className="absolute top-3 left-3 right-3 h-5 bg-black/10 rounded"></div>
              </div>
            </div>
          </div>
        );
      case 'beauty':
        return (
          <div className="h-full flex flex-col justify-between text-center">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider opacity-80 mb-4">
              {card.category}
            </div>
            <div className="text-xl font-bold my-8">
              {card.title}
            </div>
            {card.subtitle && (
              <div className="text-sm opacity-80">
                {card.subtitle}
              </div>
            )}
            <div className="text-5xl mt-auto mb-8">💄</div>
          </div>
        );
      case 'wellness':
        return (
          <div className="h-full flex flex-col justify-between items-center text-center">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider opacity-80 mb-4">
              {card.category}
            </div>
            <div className="text-lg font-bold leading-tight my-8 text-center">
              {card.title}
            </div>
            <div className="mt-auto mb-8 opacity-60">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        );
      default:
        return (
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider opacity-80 mb-4">
              {card.category}
            </div>
            <div className="text-2xl font-bold leading-tight mb-2">
              {card.title}
            </div>
            {card.subtitle && (
              <div className="text-base opacity-90 leading-relaxed">
                {card.subtitle}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <motion.div 
      className={`
        relative overflow-hidden bg-cover bg-center bg-no-repeat
        flex-none w-[300px] h-[450px] rounded-3xl p-6
        flex flex-col justify-between cursor-pointer
        transition-all duration-300 ease-out
        shadow-[0_10px_30px_rgba(0,0,0,0.3)]
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
        hover:-translate-y-2 hover:scale-[1.02]
        ${isActive ? 'scale-105 shadow-[0_15px_35px_rgba(0,0,0,0.4)]' : ''}
        ${card.bgColor} ${card.textColor}
        md:w-[280px] md:h-[400px] md:p-5
        sm:w-[250px] sm:h-[350px] sm:p-4
      `}
      style={{
        backgroundImage: `url(${card.backgroundImage})`
      }}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        transition: { duration: 0.2 }
      }}
      onClick={() => {
        console.log(`Clicked on ${card.title} project`);
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/30 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {renderCardContent()}
      </div>
    </motion.div>
  );
};

const DesignShowcase = () => {
  const scrollContainerRef = useRef(null);
  const [currentCard, setCurrentCard] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const totalCards = designCards.length;

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = 320; // Card width + gap
      const newCurrentCard = Math.min(Math.floor(scrollLeft / cardWidth) + 1, totalCards);
      setCurrentCard(newCurrentCard);
      setScrollPosition(scrollLeft);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY || e.deltaX;
      scrollContainer.scrollLeft += delta * 0.5;
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    scrollContainer.addEventListener('wheel', handleWheel);

    // Handle touch events for mobile
    let startX = 0;
    let startY = 0;
    let isScrolling = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isScrolling = false;
    };

    const handleTouchMove = (e) => {
      if (!startX || !startY) return;
      
      const deltaX = Math.abs(e.touches[0].clientX - startX);
      const deltaY = Math.abs(e.touches[0].clientY - startY);
      
      if (deltaX > deltaY && deltaX > 10) {
        isScrolling = true;
        e.preventDefault();
      }
    };

    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollContainer.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
    };
  }, [scrollPosition, totalCards]);

  return (
    <section className="min-h-screen py-16 flex flex-col justify-center items-center relative">
      {/* Header */}
      <div className="text-center mb-16 px-8 max-w-6xl w-full">
        <div className="inline-block px-5 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium tracking-wider mb-6">
          Graphics
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
          Design to Stare
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We create the most stunning graphic designs for your social media, websites, branding, or literally anything. They are just mindblowing
        </p>
      </div>

      {/* Scrollable Cards Container */}
      <div 
        ref={scrollContainerRef} 
        className="w-full max-w-full overflow-x-auto overflow-y-hidden px-8 pb-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-8 px-8 w-max">
          {designCards.map((card, index) => (
            <DesignCard 
              key={card.id} 
              card={card} 
              isActive={index + 1 === currentCard}
            />
          ))}
        </div>
      </div>

      {/* Card Counter */}
      <div className="fixed bottom-8 right-8 text-white text-base font-semibold opacity-90 z-50 bg-black/50 px-6 py-3 rounded-full backdrop-blur-lg border border-white/10">
        {currentCard}/{totalCards}
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-8 text-slate-400 text-sm">
        Scroll horizontally to view all designs →
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default DesignShowcase;
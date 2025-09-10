import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';

const Pill = ({ children }) => (
  <span className="text-[10px] uppercase tracking-widest text-orange-300/90 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full">
    {children}
  </span>
);

const ServiceCardItem = ({ item }) => (
  <div className="h-full rounded-2xl bg-[#0b0b0b]/80 border border-white/10 hover:border-orange-400 transition-colors duration-300 backdrop-blur-xl shadow-[0_8px_40px_-16px_rgba(0,0,0,0.6)] overflow-hidden">
    <div className="relative h-full p-6 flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
          {item.icon}
        </div>
        <Pill>{item.category}</Pill>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{item.title}</h3>
      <p className="text-gray-300/90 text-sm leading-relaxed flex-1">{item.description}</p>
      <div className="mt-4 pt-3 border-t border-white/10">
        <span className="inline-flex items-center text-[11px] text-gray-400">
          <span className="mr-2 inline-block w-1.5 h-1.5 rounded-full bg-orange-400/70"></span>
          End-to-end support
        </span>
      </div>
    </div>
  </div>
);

const ArrowBtn = ({ side = 'left', onClick, disabled }) => (
  <button
    type="button"
    aria-label={side === 'left' ? 'Previous' : 'Next'}
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 z-20 ${
      side === 'left' ? 'left-2' : 'right-2'
    } p-2 md:p-3 text-orange-400 transition-colors ${
      disabled ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:text-orange-300'
    } bg-transparent`}
  >
    {side === 'left' ? (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    ) : (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    )}
  </button>
);

const useCarouselNav = (viewportRef) => {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 0);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 1);
  }, [viewportRef]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    update();
    const onScroll = () => update();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, [viewportRef, update]);

  return { canPrev, canNext, update };
};

const getItemWidth = (el) => {
  if (!el) return 0;
  const style = window.getComputedStyle(el);
  const marginLeft = parseFloat(style.marginLeft) || 0;
  const marginRight = parseFloat(style.marginRight) || 0;
  return el.getBoundingClientRect().width + marginLeft + marginRight;
};

const ServiceCarousel = ({ services = [] }) => {
  const viewportRef = useRef(null);
  const contentRef = useRef(null);
  const { canPrev, canNext, update } = useCarouselNav(viewportRef);

  const scrollByItem = (dir) => {
    const vp = viewportRef.current;
    const content = contentRef.current;
    if (!vp || !content) return;
    const firstItem = content.querySelector('[data-carousel-item]');
    const delta = getItemWidth(firstItem) || vp.clientWidth * 0.8;
    vp.scrollBy({ left: dir * delta, behavior: 'smooth' });
  };

  useEffect(() => {
    // ensure buttons enable/disable state correct after mount
    update();
  }, [services, update]);

  return (
    <div className="relative w-full">
      <div
        ref={viewportRef}
        className="relative overflow-x-auto overflow-y-visible snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        <style>{`
          /* hide scrollbar for webkit */
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
        <div ref={contentRef} className="flex gap-4 md:gap-6 px-1 py-2">
          {services.map((item, idx) => (
            <div
              key={item.title + idx}
              data-carousel-item
              className="snap-center flex-[0_0_85%] md:flex-[0_0_48%] lg:flex-[0_0_32%] xl:flex-[0_0_28%] h-[340px]"
            >
              <ServiceCardItem item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* arrows on md+; on mobile they remain available but overlay nicely */}
      <ArrowBtn side="left" onClick={() => scrollByItem(-1)} disabled={!canPrev} />
      <ArrowBtn side="right" onClick={() => scrollByItem(1)} disabled={!canNext} />
    </div>
  );
};

export default ServiceCarousel;

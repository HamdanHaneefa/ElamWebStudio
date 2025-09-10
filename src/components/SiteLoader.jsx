import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/Logo.png';

export default function SiteLoader() {
  const [mountedAt] = useState(() => Date.now());
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const fallbackRef = useRef(null);

  useEffect(() => {
    const MIN_SHOW_MS = 500; // ensure it doesn't flash
    const fadeAndHide = () => {
      const elapsed = Date.now() - mountedAt;
      const wait = Math.max(0, MIN_SHOW_MS - elapsed);
      window.setTimeout(() => {
        setIsFading(true);
        window.setTimeout(() => setIsVisible(false), 300); // match CSS duration
      }, wait);
    };

    const onLoad = () => fadeAndHide();
    window.addEventListener('load', onLoad, { once: true });

    // Fallback in case 'load' doesn't fire (e.g., instant cache)
    fallbackRef.current = window.setTimeout(() => fadeAndHide(), 2500);

    return () => {
      window.removeEventListener('load', onLoad);
      if (fallbackRef.current) window.clearTimeout(fallbackRef.current);
    };
  }, [mountedAt]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src={Logo}
          alt="ElamAI Logo"
          className="h-12 w-12 sm:h-14 sm:w-14 object-contain select-none drop-shadow-[0_0_12px_rgba(255,255,255,0.08)] animate-pulse"
          draggable={false}
        />
        <span className="text-xs tracking-wide text-white/70 select-none">Loading…</span>
      </div>
    </div>
  );
}

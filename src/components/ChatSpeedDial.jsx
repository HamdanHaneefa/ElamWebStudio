import React, { useEffect, useRef, useState } from 'react';
import ElamAIChatbot from './ElamAIChatbot';

export default function ChatSpeedDial() {
  // WhatsApp bubble: show while actively scrolling (down or up), hide when idle; never show over hero
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const hideTimerRef = useRef(null);

  // Observe the Hero section if present; if not found, treat as not visible
  useEffect(() => {
    const hero = document.querySelector('#home');
    if (!hero) {
      setIsHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: [0, 0.2, 0.5] }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScrollActivity = () => {
      // Only show during scroll when hero is not visible
      if (!isHeroVisible) {
        setShowWhatsApp(true);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        // Hide after 1.5s of no scroll activity
        hideTimerRef.current = setTimeout(() => setShowWhatsApp(false), 1500);
      } else {
        setShowWhatsApp(false);
      }
    };

    // Respond to scroll and touch/pointer wheel
    window.addEventListener('scroll', onScrollActivity, { passive: true });
    window.addEventListener('wheel', onScrollActivity, { passive: true });
    window.addEventListener('touchmove', onScrollActivity, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollActivity);
      window.removeEventListener('wheel', onScrollActivity);
      window.removeEventListener('touchmove', onScrollActivity);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [isHeroVisible]);

  return (
    <>
      {/* Chatbot visible on all pages - docked bottom-right */}
      <ElamAIChatbot anchor="bottom-right" />

  {/* WhatsApp bubble: bottom-right above the chat icon; appears while scrolling, hides when idle */}
      {showWhatsApp && (
        <div
          className="fixed right-4 z-[10000]"
          style={{ bottom: `calc(88px + env(safe-area-inset-bottom, 0px))` }}
        >
          <a
            href="https://wa.me/919747419297"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
            className="h-12 w-12 rounded-full bg-[#25D366] text-white shadow-2xl ring-1 ring-white/20 flex items-center justify-center hover:brightness-95"
          >
            <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
              <path d="M19.11 17.45c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.35-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.53-.45-.46-.62-.46-.16 0-.34-.02-.52-.02s-.48.07-.73.34c-.25.27-.96.94-.96 2.29 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.96 4.68 4.15.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.18.16-1.28-.07-.11-.25-.18-.52-.32z"/>
              <path d="M16.01 3.2C9.4 3.2 4.06 8.54 4.06 15.14c0 2.7.97 5.18 2.58 7.11L5.2 28.8l6.75-1.78c1.84 1.01 3.96 1.59 6.22 1.59 6.61 0 11.95-5.34 11.95-11.95S22.62 3.2 16.01 3.2zm0 21.6c-2.14 0-4.12-.68-5.74-1.84l-3.99 1.05 1.07-3.89c-1.29-1.77-2.05-3.95-2.05-6.31 0-5.88 4.79-10.66 10.66-10.66S26.67 8.93 26.67 14.8c0 5.87-4.79 10.66-10.66 10.66z"/>
            </svg>
          </a>
        </div>
      )}
    </>
  );
}

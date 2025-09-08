import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

// Hook to track page views automatically
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    const page_title = document.title;
    const page_location = window.location.href;
    
    trackPageView(page_title, page_location);
  }, [location]);
};

// Hook to track scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track at 25%, 50%, 75%, and 100% scroll depths
      if (scrollPercent >= 25 && !window.scrollTracked25) {
        window.gtag && window.gtag('event', 'scroll', {
          event_category: 'Scroll Depth',
          event_label: '25%'
        });
        window.scrollTracked25 = true;
      }
      if (scrollPercent >= 50 && !window.scrollTracked50) {
        window.gtag && window.gtag('event', 'scroll', {
          event_category: 'Scroll Depth',
          event_label: '50%'
        });
        window.scrollTracked50 = true;
      }
      if (scrollPercent >= 75 && !window.scrollTracked75) {
        window.gtag && window.gtag('event', 'scroll', {
          event_category: 'Scroll Depth',
          event_label: '75%'
        });
        window.scrollTracked75 = true;
      }
      if (scrollPercent >= 100 && !window.scrollTracked100) {
        window.gtag && window.gtag('event', 'scroll', {
          event_category: 'Scroll Depth',
          event_label: '100%'
        });
        window.scrollTracked100 = true;
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(trackScrollDepth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook to track section visibility
export const useSectionTracking = (sectionRef, sectionName) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.tracked) {
            window.gtag && window.gtag('event', 'view_section', {
              event_category: 'Section View',
              event_label: sectionName
            });
            entry.target.dataset.tracked = 'true';
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionRef, sectionName]);
};

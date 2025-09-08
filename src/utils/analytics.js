// Google Analytics utility functions

// Google Analytics Measurement ID for ElamWebStudio
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-QZL1ZYST44';
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://elamwebstudio.elamai.in';
export const MAIN_DOMAIN = import.meta.env.VITE_MAIN_DOMAIN || 'elamai.in';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      cookie_domain: MAIN_DOMAIN,
      allow_ad_personalization_signals: true,
      allow_google_signals: true,
      site_speed_sample_rate: 100
    });
  }
};

// Track page views
export const trackPageView = (page_title, page_location) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title,
      page_location,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, section) => {
  trackEvent('click', 'Button', `${buttonName} - ${section}`);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('submit', 'Form', formName);
};

// Track section views (when user scrolls to a section)
export const trackSectionView = (sectionName) => {
  trackEvent('view', 'Section', sectionName);
};

// Track contact interactions
export const trackContactInteraction = (interactionType) => {
  trackEvent('contact', 'Interaction', interactionType);
};

// Track service page views
export const trackServiceView = (serviceName) => {
  trackEvent('view', 'Service', serviceName);
};

// Track pricing plan views
export const trackPricingView = (planName) => {
  trackEvent('view', 'Pricing', planName);
};

// Track downloads
export const trackDownload = (fileName) => {
  trackEvent('download', 'File', fileName);
};

// Track external link clicks
export const trackExternalLink = (url) => {
  trackEvent('click', 'External Link', url);
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll', 'Depth', `${percentage}%`);
};

// Enhanced ecommerce tracking for service inquiries
export const trackServiceInquiry = (serviceName, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Service Inquiry',
      event_label: serviceName,
      value: value,
      currency: 'INR'
    });
  }
};

// Track user engagement
export const trackEngagement = (engagementType, duration) => {
  trackEvent('engagement', engagementType, 'Duration', duration);
};

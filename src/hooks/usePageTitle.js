import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Define title mappings for different sections (outside component to avoid re-creation)
const titleMappings = {
  home: 'ElamWebStudio - Professional Web Development & Design Services',
  services: 'ElamWebStudio - Services | Web Development & Design Solutions',
  portfolio: 'ElamWebStudio - Portfolio | Our Latest Design Work',
  about: 'ElamWebStudio - About Us | Your Partner in Digital Excellence',
  pricing: 'ElamWebStudio - Pricing | Affordable Web Development Packages',
  contact: 'ElamWebStudio - Contact | Get In Touch for Your Next Project'
};

const usePageTitle = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Function to update title based on current section in view
    const updateTitleBasedOnSection = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'pricing'];
      let currentVisibleSection = 'home';

      // Check which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
          
          if (isInView) {
            currentVisibleSection = sectionId;
            break;
          }
        }
      }

      // Update title if section changed
      if (currentVisibleSection !== currentSection) {
        setCurrentSection(currentVisibleSection);
        document.title = titleMappings[currentVisibleSection] || titleMappings.home;
      }
    };

    // Set initial title based on route
    if (location.pathname === '/') {
      // For home page, update title based on scroll position
      updateTitleBasedOnSection();
      
      // Add scroll listener for dynamic title updates
      const handleScroll = () => {
        updateTitleBasedOnSection();
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // For other routes (when you add them), set specific titles
      const routeTitles = {
        '/services': titleMappings.services,
        '/portfolio': titleMappings.portfolio,
        '/about': titleMappings.about,
        '/pricing': titleMappings.pricing,
        '/contact': titleMappings.contact
      };
      
      document.title = routeTitles[location.pathname] || titleMappings.home;
    }
  }, [location.pathname, currentSection]);

  // Function to manually set title (useful for navigation clicks)
  const setTitle = (section) => {
    if (titleMappings[section]) {
      document.title = titleMappings[section];
      setCurrentSection(section);
    }
  };

  return { currentSection, setTitle, titleMappings };
};

export default usePageTitle;

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo.png';
import { trackButtonClick, trackSectionView } from '../utils/analytics';
import FadeContent from './FadeContent';

const titleMappings = {
  home: 'ElamWebStudio - Professional Web Development & Design Services',
  services: 'ElamWebStudio - Services | Web Development & Design Solutions',
  portfolio: 'ElamWebStudio - Portfolio | Our Latest Design Work',
  pricing: 'ElamWebStudio - Pricing | Affordable Web Development Packages',
  about: 'ElamWebStudio - About Us | Your Partner in Digital Excellence'
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [showTimeout, setShowTimeout] = useState(null);

  const navItems = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'Services', href: '#services', section: 'services' },
    { name: 'Portfolio', href: '#portfolio', section: 'portfolio' },
    { name: 'Pricing', href: '#pricing', section: 'pricing' },
    { name: 'About', href: '#about', section: 'about' }
  ];

  const handleNavClick = (section, navName, e) => {
    if (e) {
      e.preventDefault();
    }
    if (titleMappings[section]) {
      document.title = titleMappings[section];
    }
    trackButtonClick(navName, 'Navigation');
    trackSectionView(section);
    setIsOpen(false);
    
    // Smooth scroll to the section
    if (section === 'about') {
      // Redirect About to contact form like Let's Talk button
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to about section if contact-form not found
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const targetId = section === 'home' ? 'home' : section;
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll show/hide logic on desktop
      if (window.innerWidth < 1024) {
        setIsVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      // Always show in hero section
      if (currentScrollY < window.innerHeight * 0.8) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        if (showTimeout) clearTimeout(showTimeout);
        return;
      }
      // Show when scrolling up, hide after 1.5s
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        if (showTimeout) clearTimeout(showTimeout);
        const timeout = setTimeout(() => setIsVisible(false), 1500);
        setShowTimeout(timeout);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        if (showTimeout) clearTimeout(showTimeout);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (showTimeout) clearTimeout(showTimeout);
    };
    // eslint-disable-next-line
  }, [lastScrollY, showTimeout]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full px-6 py-8 z-50"
      style={{
        fontFamily: '"Poppins", "Inter", "Segoe UI", "Helvetica Neue", sans-serif',
        background: 'transparent',
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
        transform:
          isVisible || window.innerWidth < 1024
            ? 'translateY(0)'
            : 'translateY(-60px)',
        opacity: isVisible || window.innerWidth < 1024 ? 1 : 0,
        pointerEvents: isVisible || window.innerWidth < 1024 ? 'auto' : 'none'
      }}
    >
      <FadeContent blur={false} duration={700} initialOpacity={0}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick('home', 'Logo', e)}
            className="flex items-center cursor-pointer"
          >
            <img src={logo} alt="ElamWebStudio Logo" className="h-16 md:h-20 w-auto drop-shadow-lg" />
          </a>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(item.section, item.name, e)}
                className={`text-lg font-bold transition-all duration-300 hover:text-orange-400 hover:scale-105 ${
                  item.name === 'Home' ? 'text-orange-400' : 'text-white'
                }`}
                style={{
                  fontFamily: '"Segoe UI", "Arial", sans-serif',
                  opacity: 0.85
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Let's Talk Button - Desktop */}
          <div className="hidden lg:block">
            <button
              className="bg-transparent border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-lg text-lg font-bold hover:bg-orange-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-400/25"
              onClick={() => {
                trackButtonClick('Let\'s Talk', 'Navigation');
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Talk →
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                style={{
                  transition: 'transform 0.3s',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </div>
            </button>
          </div>
        </div>
      </FadeContent>
      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 flex flex-col"
          style={{
            background: '#1e293b',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none'
          }}
          onClick={() => setIsOpen(false)}
        >
          <FadeContent
            blur={false}
            duration={500}
            initialOpacity={0}
            className="flex flex-col h-full"
          >
            {/* Top bar with logo and close button */}
            <div className="flex items-center justify-between px-6 pt-8 pb-4">
              <img src={logo} alt="ElamWebStudio Logo" className="h-12 w-auto drop-shadow-lg" />
              <button
                className="text-white p-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>
            </div>
            
            {/* Centered menu */}
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <div className="bg-slate-800/40 rounded-xl border border-white/10 px-8 py-8 w-full max-w-xs mx-auto backdrop-blur-sm">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`block text-center text-2xl font-bold mb-6 transition-colors duration-300 ${
                      item.name === 'Home' ? 'text-orange-400' : 'text-white'
                    }`}
                    style={{
                      fontFamily: '"Segoe UI", "Arial", sans-serif',
                      opacity: 0.95
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavClick(item.section, item.name, e);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  className="w-full mt-2 border-2 border-orange-400 text-orange-400 px-0 py-4 rounded-lg text-xl font-bold hover:bg-orange-400 hover:text-white transition-all duration-300 shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    trackButtonClick('Let\'s Talk', 'Mobile Navigation');
                    setIsOpen(false);
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Let's Talk →
                </button>
              </div>
            </div>
          </FadeContent>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
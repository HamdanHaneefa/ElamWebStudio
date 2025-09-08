import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' }
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 w-full px-6 py-8 z-50"
          style={{
            fontFamily: '"Poppins", "Inter", "Segoe UI", "Helvetica Neue", sans-serif',
            background: 'transparent',
            backdropFilter: 'blur(5px)'
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo - Single logo for all views */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto drop-shadow-lg" />
            </motion.div>

            {/* Desktop Menu - Centered */}
            <div className="hidden lg:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`text-lg font-bold transition-all duration-300 hover:text-orange-400 hover:scale-105 ${
                    item.name === 'Home' ? 'text-orange-400' : 'text-white'
                  }`}
                  whileHover={{ y: -2, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Let's Talk Button - Desktop */}
            <div className="hidden lg:block">
              <motion.button 
                className="bg-transparent border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-lg text-lg font-bold hover:bg-orange-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-400/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.2 }}
              >
                Let's Talk →
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden mt-6 rounded-xl border border-white/10"
                style={{
                  background: 'transparent',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex flex-col items-center py-8 space-y-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className={`text-xl font-bold transition-colors duration-300 hover:text-orange-400 ${
                        item.name === 'Home' ? 'text-orange-400' : 'text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <motion.button 
                    className="bg-transparent border-2 border-orange-400 text-orange-400 px-10 py-4 rounded-lg text-lg font-bold hover:bg-orange-400 hover:text-white transition-all duration-300 shadow-lg"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Talk →
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
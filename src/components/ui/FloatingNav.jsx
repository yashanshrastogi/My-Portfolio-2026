import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

const FloatingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          const sections = [...navLinks].reverse().map(link => link.href.replace('#', ''));
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 150) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark/80 backdrop-blur-lg border-b border-white/5' 
            : 'bg-transparent'
        }`}
        style={isScrolled ? { backgroundColor: 'var(--nav-bg)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              onClick={(e) => { e.preventDefault(); window.location.reload(); }}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full 
                         bg-white/5 border border-white/10 hover:border-violet-500/50 
                         shadow-lg shadow-violet-500/5 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base md:text-lg font-bold gradient-text font-display group-hover:scale-110 transition-transform">
                YR
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    activeSection === link.href.replace('#', '') ? 'text-white' : ''
                  }`}>
                    {link.name}
                  </span>
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-b from-violet-800/40 via-violet-700/60 to-violet-800/40 
                                 border border-violet-600/50 shadow-[0_0_15px_rgba(109,40,217,0.2)]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-violet-900/20 dark:bg-violet-900/40 transition-opacity duration-300" />
                </a>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 
                          hover:border-violet-500/30 text-slate-400 hover:text-violet-300 transition-all"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile: Theme + Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden backdrop-blur-lg border-b border-white/5"
            style={{ backgroundColor: 'var(--nav-bg)' }}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-white bg-violet-500/20 border border-violet-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;

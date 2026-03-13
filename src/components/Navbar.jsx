import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import clsx from 'clsx';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinks = [
    { to: 'projects', label: t('nav.experience') },
    { to: 'expertise', label: t('nav.expertise') },
    { to: 'about', label: t('nav.profile') }
  ];

  // Initialize dark mode from system or localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const updateTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const toggleDarkMode = (event) => {
    // Fallback for browsers that don't support View Transitions or if user prefers reduced motion
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      updateTheme();
      return;
    }

    // Get origin coordinates (from click or center of screen)
    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(async () => {
      updateTheme();
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: isDarkMode ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: isDarkMode ? '::view-transition-old(root)' : '::view-transition-new(root)',
        }
      );
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-brand-light/80 backdrop-blur-md shadow-sm border-b border-separator" : "bg-transparent"
      )}
      data-purpose="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold tracking-tighter text-brand-dark" data-purpose="brand-logo">
            Andrés Saavedra
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12" aria-label="Navegación principal">
          <ul className="flex space-x-12 text-sm font-medium uppercase tracking-widest">
            {navLinks.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-brand-dark hover:text-brand-gray transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gray rounded-sm px-1"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
            <li>
              <ScrollLink
                to="contacto"
                smooth={true}
                duration={500}
                className="cursor-pointer text-brand-dark hover:text-brand-gray transition-colors underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gray rounded-sm px-1"
              >
                {t('nav.contact')}
              </ScrollLink>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-xs font-bold uppercase tracking-widest text-brand-gray hover:text-brand-dark transition-colors px-2 py-1 rounded border border-separator"
              aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="dmode p-2 rounded-full text-brand-gray hover:bg-separator hover:text-brand-dark transition-colors focus-visible"
              aria-label={isDarkMode ? t('nav.toggleLight') : t('nav.toggleDark')}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button & Dark Mode */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Language Toggle Mobile */}
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold uppercase tracking-widest text-brand-gray hover:text-brand-dark transition-colors px-2 py-1 rounded border border-separator"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            onClick={toggleDarkMode}
            className="dmode p-2 rounded-full text-brand-gray hover:bg-separator transition-colors focus-visible"
            aria-label={isDarkMode ? t('nav.toggleLight') : t('nav.toggleDark')}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="p-2 rounded-md text-brand-gray hover:bg-separator transition-colors focus-visible"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-brand-light border-b border-black/5 shadow-md"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col items-center py-4 space-y-4 text-sm font-medium uppercase tracking-widest text-brand-dark">
            {navLinks.map((item) => (
              <li key={item.to} className="w-full text-center">
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer hover:text-brand-gray transition-colors block py-3 w-full focus-visible"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
            <li className="w-full text-center">
              <ScrollLink
                to="contacto"
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer hover:text-brand-gray transition-colors block py-3 w-full underline underline-offset-4 focus-visible"
              >
                {t('nav.contact')}
              </ScrollLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

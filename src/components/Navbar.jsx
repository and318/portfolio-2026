import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import clsx from 'clsx';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinks = [
    { to: 'projects', label: 'Experience' },
    { to: 'expertise', label: 'Expertise' },
    { to: 'about', label: 'Profile' }
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

  const toggleDarkMode = () => {
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
          <h1 className="text-xl font-bold tracking-tighter uppercase text-brand-dark" data-purpose="brand-logo">
            Portfolio.
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
              <a href="mailto:hello@example.com" className="cursor-pointer text-brand-dark hover:text-brand-gray transition-colors underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gray rounded-sm px-1">
                Contact
              </a>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-brand-gray hover:bg-separator hover:text-brand-dark transition-colors focus-visible"
            aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button & Dark Mode */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-brand-gray hover:bg-separator transition-colors focus-visible"
            aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="p-2 rounded-md text-brand-gray hover:bg-separator transition-colors focus-visible"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-brand-light border-b border-black/5 shadow-md" aria-label="Navegación móvil">
          <ul className="flex flex-col items-center py-4 space-y-4 text-sm font-medium uppercase tracking-widest">
            {navLinks.map((item) => (
              <li key={item.to} className="w-full text-center">
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer text-brand-dark hover:text-brand-gray transition-colors block py-3 w-full focus-visible"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
            <li className="w-full text-center">
              <a href="mailto:hello@example.com" className="cursor-pointer text-brand-dark hover:text-brand-gray transition-colors block py-3 w-full underline underline-offset-4 focus-visible" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

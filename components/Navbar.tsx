import React, { useState, useEffect } from 'react';
import { Language, Translation } from '../types';
import { BookOpen, Menu, X, Languages, CalendarCheck } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
  openBooking: () => void;
  t: Translation['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ toggleLang, openBooking, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#' },
    { name: t.about, href: '#about' },
    // NEW: chronology link
    { name: t.chronology, href: '#chronology' },
    { name: t.services, href: '#services' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'bg-library-primary text-white'
                  : 'bg-white text-library-primary shadow-lg'
              }`}
            >
              <BookOpen size={24} />
            </div>
            <span
              className={`font-serif text-xl font-bold tracking-tight ${
                isScrolled ? 'text-library-primary' : 'text-library-primary'
              }`}
            >
              Information Knowledge Manager
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-slate-600 hover:text-library-secondary transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-300 mx-2"></div>
            <button
              onClick={toggleLang}
              className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-white/50 text-slate-600 hover:text-library-secondary transition-all text-xs font-bold"
            >
              <Languages size={16} />
              <span>{t.toggleLang}</span>
            </button>
            <button
              onClick={openBooking}
              className="bg-library-secondary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-amber-700 transition-colors shadow-md flex items-center group"
            >
              <CalendarCheck
                size={16}
                className="mr-2 group-hover:scale-110 transition-transform"
              />
              {t.bookBtn}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={openBooking}
              className="bg-library-secondary text-white p-2 rounded-full shadow-md"
            >
              <CalendarCheck size={20} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-library-primary p-2 bg-white/80 rounded-md shadow-sm"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-library-secondary hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <hr className="my-2 border-slate-100" />
            <button
              onClick={() => {
                openBooking();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-3 text-base font-bold text-library-secondary flex items-center"
            >
              <CalendarCheck size={18} className="mr-2" />
              {t.bookBtn}
            </button>
            <button
              onClick={() => {
                toggleLang();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-2 flex items-center justify-center space-x-2 px-4 py-3 bg-slate-50 text-library-primary font-bold rounded-md border border-slate-100"
            >
              <Languages size={16} />
              <span>{t.toggleLang}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

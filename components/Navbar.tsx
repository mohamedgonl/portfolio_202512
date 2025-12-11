import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Translation } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.education, href: '#education' },
    { name: t.experience, href: '#experience' },
    { name: t.skills, href: '#skills' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/80 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
               NQL.
             </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
                className="flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded-full text-sm transition-colors border border-slate-700"
              >
                <Globe size={14} />
                <span>{language === 'en' ? 'VI' : 'EN'}</span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark border-b border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                    setLanguage(language === 'en' ? 'vi' : 'en');
                    setIsOpen(false);
                }}
                className="w-full text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Switch to {language === 'en' ? 'Vietnamese' : 'English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
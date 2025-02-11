'use client';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { isMobile, createScreenSizeListener } from '@/utils/screens';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Use the debounced screen size listener from utils
    setIsMobileView(isMobile()); // Initial check
    return createScreenSizeListener((size) => {
      setIsMobileView(size === 'mobile');
    });
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobileView) {
      setIsOpen(false);
    }
  }, [isMobileView]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/works', label: 'Works' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
    { href: 'https://github.com/saatvik333', label: 'GitHub' }
  ];

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <ul className={`${isMobileView ? 'flex flex-col space-y-2' : 'flex space-x-3'}`}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={`transition-colors duration-200 ${
              isMobileView
                ? 'block px-3 py-2'
                : 'px-3 py-2 rounded-md hover:bg-primary-light dark:hover:bg-primary-dark'
            }`}
            onClick={onClick}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="w-full p-4 bg-header-light/70 dark:bg-header-dark/70 backdrop-blur-lg text-gray-900 dark:text-white fixed top-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/" className="transition-colors duration-200">
            Saatvik Sharma
          </a>
        </h1>

        {isMobileView ? (
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none backdrop-blur-lg"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Mobile Menu */}
            <div
              className={`absolute top-full left-[-16px] w-[calc(100%+16px)] bg-header-light dark:bg-header-dark p-4 backdrop-blur-lg transition-all duration-300 transform ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <NavLinks onClick={() => setIsOpen(false)} />
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="mr-6">
              <NavLinks />
            </div>
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
}

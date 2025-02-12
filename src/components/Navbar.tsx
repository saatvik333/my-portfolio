'use client';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { createScreenSizeListener, BREAKPOINTS } from '@/utils/screens';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Types
interface NavLink {
  href: string;
  label: string;
}

interface NavLinksProps {
  onClick?: () => void;
  isMobileView: boolean;
}

// Constants
const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
  // { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://github.com/saatvik333', label: 'GitHub' },
];

// Components
const Logo = () => (
  <h1 className="text-2xl">
    <Link href="/" className="group relative inline-block">
      <span className="text-primary-light dark:text-primary-dark transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-80 inline-block">
        &lt;
      </span>
      <span className="inline-block transition-all duration-300 group-hover:scale-110 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary-light dark:after:bg-primary-dark after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
        SS
      </span>
      <span className="text-primary-light dark:text-primary-dark transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-80 inline-block">
        /&gt;
      </span>
    </Link>
  </h1>
);

const NavLinks = ({ onClick, isMobileView }: NavLinksProps) => (
  <ul
    className={`${isMobileView ? 'flex flex-col space-y-2' : 'flex space-x-3'}`}
  >
    {NAV_LINKS.map((link) => (
      <li key={link.href}>
        {link.href.startsWith('http') ? (
          <a
            href={link.href}
            className={`transition-colors duration-200 ${
              isMobileView
                ? 'block px-3 py-2'
                : 'px-3 py-2 rounded-md hover:bg-primary-light dark:hover:bg-primary-dark'
            }`}
            onClick={onClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ) : (
          <Link
            href={link.href}
            className={`transition-colors duration-200 ${
              isMobileView
                ? 'block px-3 py-2'
                : 'px-3 py-2 rounded-md hover:bg-primary-light dark:hover:bg-primary-dark'
            }`}
            onClick={onClick}
          >
            {link.label}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

const MobileMenuButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="p-2 focus:outline-none backdrop-blur-lg"
    aria-label="Toggle mobile menu"
    aria-expanded={isOpen}
  >
    <div
      className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${
        isOpen ? 'rotate-45 translate-y-2' : ''
      }`}
    />
    <div
      className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${
        isOpen ? 'opacity-0' : ''
      }`}
    />
    <div
      className={`w-6 h-0.5 bg-current transition-all duration-300 ${
        isOpen ? '-rotate-45 -translate-y-2' : ''
      }`}
    />
  </button>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(window.innerWidth < BREAKPOINTS.MOBILE);
    return createScreenSizeListener((size) => {
      setIsMobileView(size === 'mobile' || size === 'tablet');
    });
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      setIsOpen(false);
    }
  }, [isMobileView]);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <nav className="w-full p-4 bg-header-light/60 dark:bg-header-dark/60 backdrop-blur-md text-gray-900 dark:text-white fixed top-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Logo />

        {isMobileView ? (
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <MobileMenuButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />

            <motion.div
              initial="closed"
              animate={isOpen ? 'open' : 'closed'}
              variants={menuVariants}
              className="absolute top-full left-[-16px] w-[calc(100%+16px)] bg-header-light dark:bg-header-dark backdrop-blur-md overflow-hidden"
            >
              <div className="p-4">
                <NavLinks
                  isMobileView={isMobileView}
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="mr-6">
              <NavLinks isMobileView={isMobileView} />
            </div>
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
}

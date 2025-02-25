'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';
import { createScreenSizeListener, BREAKPOINTS } from '@/utils/screens';
import Link from 'next/link';

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
  { href: '/contact', label: 'Contact' },
  { href: 'https://github.com/saatvik333', label: 'GitHub' },
];

// Variants for the mobile menu container
const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    y: -10,
    transition: {
      when: 'afterChildren',
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    y: 0,
    transition: {
      when: 'beforeChildren',
      duration: 0.4,
      ease: 'easeOut',
      staggerChildren: 0.05,
    },
  },
};

// Variants for each nav item in the dropdown
const navItemVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

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
  <motion.ul
    className={`${isMobileView ? 'flex flex-col space-y-2' : 'flex space-x-3'}`}
    initial="closed"
    animate="open"
    exit="closed"
    // When in mobile view, stagger the children
    variants={{
      open: { transition: { staggerChildren: 0.05 } },
      closed: {},
    }}
  >
    {NAV_LINKS.map((link) => (
      <motion.li key={link.href} variants={isMobileView ? navItemVariants : {}}>
        {link.href.startsWith('http') ? (
          <a
            href={link.href}
            className={`transition-colors duration-200 ${
              isMobileView
                ? 'block px-3 py-2'
                : 'px-3 py-2 rounded-lg hover:bg-primary-light dark:hover:bg-primary-dark'
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
                : 'px-3 py-2 rounded-lg hover:bg-primary-light dark:hover:bg-primary-dark'
            }`}
            onClick={onClick}
          >
            {link.label}
          </Link>
        )}
      </motion.li>
    ))}
  </motion.ul>
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
    className="p-2 focus:outline-none"
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

  return (
    // Unified container for a seamless blur between navbar and dropdown
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="bg-header-light/60 dark:bg-header-dark/60 backdrop-blur-md">
        <nav className="p-4 text-gray-900 dark:text-white">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <Logo />
            {isMobileView ? (
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <MobileMenuButton
                  isOpen={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                />
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
        <AnimatePresence>
          {isMobileView && isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="overflow-hidden"
            >
              <div className="p-4">
                <NavLinks
                  isMobileView={isMobileView}
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

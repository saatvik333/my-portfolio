'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-60vh)] flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 text-center -mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-primary-light dark:text-primary-dark">404</span>
          </h1>
          <h2 className="text-2xl mb-8 text-gray-900 dark:text-white">
            Oops! Page not found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            It seems you&apos;ve ventured into uncharted territory. Let&apos;s get you back on track!
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary-light dark:bg-primary-dark
                     text-white rounded-lg hover:opacity-90 transition-all duration-200
                     transform hover:scale-105 active:scale-95 shadow-md"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

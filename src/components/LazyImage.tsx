'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function LazyImage({
  src,
  alt,
  className = '',
  priority = false,
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        className={`transition-transform duration-300 ${className}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
        priority={priority}
        onLoadingComplete={() => {
          setIsLoading(false);
          setTimeout(() => setIsReady(true), 100);
        }}
        onError={() => {
          setIsLoading(false);
          setIsError(true);
        }}
      />

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-gray-100/30 dark:bg-gray-800/30 z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent animate-shimmer" />
            <LoadingSpinner size="sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {isError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm"
        >
          <div className="text-center px-4 py-2 rounded-lg bg-white/80 dark:bg-black/80 backdrop-blur-sm">
            <svg
              className="w-6 h-6 mx-auto mb-1 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Failed to load image
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

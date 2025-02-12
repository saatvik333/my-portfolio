'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({
  src,
  alt,
  className = '',
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
          >
            <LoadingSpinner size="sm" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={src}
          alt={alt}
          className={`transition-all duration-300 ${className}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          priority={false}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setIsError(true);
          }}
        />
      </motion.div>

      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
          Failed to load image
        </div>
      )}
    </div>
  );
}

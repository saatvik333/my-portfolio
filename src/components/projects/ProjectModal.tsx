'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import LazyImage from '../LazyImage';
import { useEffect, useRef, useCallback, useState } from 'react';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const images = project.images
    ? [project.image, ...project.images]
    : [project.image];

  const handleNext = useCallback(() => {
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setSlideDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    },
    [handleNext, handlePrev, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const renderCarousel = () => (
    <div className="relative w-full aspect-video mb-6">
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ x: 100 * slideDirection, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100 * slideDirection, opacity: 0 }}
            transition={{
              x: { type: 'tween', duration: 0.15 },
              opacity: { duration: 0.1 },
            }}
            className="absolute inset-0"
          >
            <LazyImage
              src={images[currentIndex]}
              alt={`${project.title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-black/40 text-white
                         backdrop-blur-sm pointer-events-auto
                         transition-opacity hover:bg-black/60"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-black/40 text-white
                         backdrop-blur-sm pointer-events-auto
                         transition-opacity hover:bg-black/60"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-4 inset-x-4">
              <div className="flex items-center justify-center gap-1.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSlideDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`
                      h-1 rounded-full transition-all duration-200
                      ${
                        index === currentIndex
                          ? 'w-6 bg-white'
                          : 'w-1.5 bg-white/60 hover:bg-white/80'
                      }
                    `}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              relative w-full bg-header-light dark:bg-header-dark
              md:w-[90%] md:max-w-2xl md:mx-4
              h-[90vh] md:max-h-[90vh]
              rounded-t-[2rem] md:rounded-2xl
              transform-gpu
              flex flex-col
              overflow-hidden
            "
          >
            {/* Header - Fixed */}
            <div className="flex-shrink-0 bg-header-light/80 dark:bg-header-dark/80 backdrop-blur-md pt-6 px-6 pb-3 border-b border-gray-200 dark:border-gray-800">
              {/* Mobile drag indicator */}
              <div className="md:hidden w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-6" />

              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <div className="p-6">
                {renderCarousel()}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10
                                 text-primary-light dark:text-primary-dark rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {project.features && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        Key Features
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        {project.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-light dark:bg-primary-dark" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Footer - Fixed */}
            <div className="flex-shrink-0 bg-header-light/80 dark:bg-header-dark/80 backdrop-blur-md px-6 py-4 border-t border-gray-200 dark:border-gray-800">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-end"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 bg-primary-light dark:bg-primary-dark
                           text-white rounded-xl hover:opacity-90 transition-all duration-200
                           transform hover:scale-105 active:scale-95 shadow-md"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

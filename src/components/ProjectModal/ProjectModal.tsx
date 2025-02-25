'use client';

import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { useCarousel } from '../../hooks/useCarousel';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import { ProjectContent } from './ProjectContent';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

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

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { handleNext, handlePrev } = useCarousel(
    project.images ? project.images.length + 1 : 1
  );

  useKeyboardNavigation({
    onNext: handleNext,
    onPrev: handlePrev,
    onClose,
    isEnabled: isOpen,
  });

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
          />

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
            {/* Header */}
            <div className="flex-shrink-0 bg-header-light/80 dark:bg-header-dark/80 backdrop-blur-md pt-6 px-6 pb-3 border-b border-gray-200 dark:border-gray-800">
              <div className="md:hidden w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-6" />
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
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

            <ProjectContent project={project} />

            {/* Footer */}
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
                           text-white rounded-lg hover:opacity-90 transition-all duration-200
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

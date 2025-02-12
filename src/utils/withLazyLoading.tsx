'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from '@/components/LoadingSpinner';

const loadingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

export function withLazyLoading<T extends object>(
  Component: React.ComponentType<T>,
  LoadingComponent = LoadingSpinner
) {
  return function LazyLoadedComponent(props: T) {
    return (
      <motion.div
        variants={loadingContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Suspense
          fallback={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-[300px] flex items-center justify-center bg-gray-50 dark:bg-gray-900/50 rounded-lg"
            >
              <LoadingComponent size="lg" />
            </motion.div>
          }
        >
          <Component {...props} />
        </Suspense>
      </motion.div>
    );
  };
}

'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from '@/components/LoadingSpinner';

export function withLazyLoading<T extends object>(
  Component: React.ComponentType<T>,
  LoadingComponent = LoadingSpinner
) {
  return function LazyLoadedComponent(props: T) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Suspense
          fallback={
            <div className="w-full h-[300px] flex items-center justify-center">
              <LoadingComponent />
            </div>
          }
        >
          <Component {...props} />
        </Suspense>
      </motion.div>
    );
  };
}

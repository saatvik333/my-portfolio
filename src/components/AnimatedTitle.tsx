'use client';

import { motion } from 'framer-motion';

export default function AnimatedTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl mb-8 text-gray-900 dark:text-white"
    >
      {children}
    </motion.h1>
  );
}

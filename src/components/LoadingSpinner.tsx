'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({
  size = 'md',
  className = '',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-5 w-5',
    md: 'h-7 w-7',
    lg: 'h-9 w-9',
  };

  const circleVariants = {
    hidden: { opacity: 0, pathLength: 0, rotate: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      rotate: 360,
      transition: {
        pathLength: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        },
        rotate: {
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        },
        opacity: {
          duration: 0.25
        }
      }
    }
  };

  return (
    <div className={`w-full h-full flex justify-center items-center ${className}`}>
      <motion.svg
        className={`${sizeClasses[size]} text-primary-light/80 dark:text-primary-dark/80`}
        viewBox="0 0 50 50"
        initial="hidden"
        animate="visible"
      >
        {/* Background circle */}
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          className="stroke-current/10"
          strokeWidth="2.5"
        />
        {/* Animated circle */}
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          className="stroke-current"
          strokeWidth="4"
          strokeLinecap="round"
          variants={circleVariants}
          style={{
            transformOrigin: 'center'
          }}
        />
      </motion.svg>
    </div>
  );
}

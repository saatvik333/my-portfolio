'use client';

import { motion } from 'framer-motion';
import ProfileImage from '@/components/ProfileImage';

export default function Home() {
  return (
    <div className="min-h-screen py-16">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl mb-4 text-gray-900 dark:text-white">
              Hi, I&apos;m{' '}
              <span className="text-primary-light dark:text-primary-dark">
                Saatvik Sharma
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Software Developer
              <br />( Linux enthusiast / Gamer / Artist )
            </p>
          </motion.div>

          <ProfileImage />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I&apos;m a passionate developer focused on creating beautiful and
            functional web applications. With expertise in modern web
            technologies, I bring ideas to life through clean code and intuitive
            design.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

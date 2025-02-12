'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary-light dark:border-primary-dark"
    >
      <Image
        src="/profile.jpg"
        alt="Saatvik Sharma"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 128px, 160px"
      />
    </motion.div>
  );
}

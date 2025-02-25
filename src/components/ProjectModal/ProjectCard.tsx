'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { Project } from '@/types';
import LazyImage from '@/components/LazyImage';

export default function ProjectCard(props: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, technologies, image } = props;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        <div
          className="bg-header-light dark:bg-header-dark rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {image && (
            <div className="relative h-48 w-full overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full"
              >
                <LazyImage
                  src={image}
                  alt={title}
                  className="object-cover"
                  priority={false}
                />
              </motion.div>
            </div>
          )}

          <div className="p-6">
            <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <ProjectModal
        project={props}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

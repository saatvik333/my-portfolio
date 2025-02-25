import { memo } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ProjectCarousel } from '@/components/Carousel/ProjectCarousel';

interface ProjectContentProps {
  project: Project;
}

export const ProjectContent = memo(function ProjectContent({
  project,
}: ProjectContentProps) {
  const images = project.images ? [project.image, ...project.images] : [project.image];

  return (
    <div className="flex-1 overflow-y-auto overscroll-contain">
      <div className="p-6">
        <ProjectCarousel images={images} title={project.title} />

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
  );
});

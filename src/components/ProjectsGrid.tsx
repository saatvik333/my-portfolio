'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Project } from '@/types';

const ProjectCard = dynamic(() => import('./ProjectCard'), {
  ssr: false,
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </motion.div>
  );
}

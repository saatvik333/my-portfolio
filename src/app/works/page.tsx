'use client';

import { projects } from '@/app/works/projects';
import ProjectsGrid from '@/components/ProjectModal/ProjectsGrid';
import AnimatedTitle from '@/components/AnimatedTitle';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

function WorksContent() {
  return (
    <div className="min-h-screen py-16">
      <AnimatedTitle>My Works</AnimatedTitle>
      <ProjectsGrid projects={projects} />
    </div>
  );
}

export default function Works() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      }
    >
      <WorksContent />
    </Suspense>
  );
}

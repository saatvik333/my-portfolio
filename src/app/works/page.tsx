import ProjectCard from '@/components/ProjectCard';

export default function Works() {
  return (
    <div className="min-h-screen py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        My Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website built with Next.js and TailwindCSS',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    link: 'https://github.com/saatvik333/portfolio',
    image: '/works/projects/portfolio.png',
  },
  // Add more projects here
];

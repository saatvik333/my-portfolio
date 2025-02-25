import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'A modern portfolio website built with Next.js and Tailwind CSS',
    longDescription:
      'A personal portfolio website showcasing my projects and skills. Features a responsive design, dark mode support, and smooth animations. Built with modern web technologies and best practices for performance and accessibility.',
    image: '/works/projects/project1.jpg',
    images: [
      '/works/projects/project2.jpg',
      '/works/projects/project3.jpg',
    ],
    link: 'https://myportfolio.dev',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Responsive design that works seamlessly across all devices',
      'Dark mode support with system preference detection',
      'Smooth page transitions and micro-interactions',
      'SEO optimized with Next.js features',
    ],
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Full-featured admin dashboard for managing online stores',
    longDescription:
      'A comprehensive e-commerce dashboard that helps store owners manage their products, orders, and customers. Includes advanced analytics, inventory management, and real-time order tracking.',
    image: '/works/projects/project2.jpg',
    images: [
      '/works/projects/project3.jpg',
      '/works/projects/project1.jpg',
    ],
    link: 'https://dashboard-demo.com',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Chart.js'],
    features: [
      'Real-time sales and inventory tracking',
      'Advanced analytics with customizable charts',
      'Bulk product management and import/export',
      'Customer relationship management tools',
    ],
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management solution for teams',
    longDescription:
      'A modern task management application that helps teams stay organized and productive. Features real-time updates, team collaboration tools, and integration with popular services.',
    image: '/works/projects/project3.jpg',
    images: [
      '/works/projects/project1.jpg',
      '/works/projects/project2.jpg',
    ],
    link: 'https://taskmaster.app',
    technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
    features: [
      'Real-time collaboration with team members',
      'Drag-and-drop task organization',
      'File attachments and comments',
      'Progress tracking and reporting',
    ],
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with detailed forecasts',
    longDescription:
      'An elegant weather application that provides detailed forecasts, radar maps, and severe weather alerts. Uses multiple weather APIs to ensure accurate data and features a clean, intuitive interface.',
    image: '/works/projects/project1.jpg',
    images: [
      '/works/projects/project2.jpg',
      '/works/projects/project3.jpg',
    ],
    link: 'https://weatherly.app',
    technologies: ['React Native', 'Redux', 'OpenWeather API', 'Google Maps'],
    features: [
      '7-day detailed weather forecasts',
      'Interactive radar maps',
      'Severe weather alerts',
      'Location-based automatic updates',
    ],
  },
  {
    title: 'Recipe Sharing Platform',
    description: 'Social platform for sharing and discovering recipes',
    longDescription:
      'A community-driven recipe sharing platform where users can discover, share, and save their favorite recipes. Features include step-by-step instructions, ingredient scaling, and social sharing capabilities.',
    image: '/works/projects/project2.jpg',
    images: [
      '/works/projects/project3.jpg',
      '/works/projects/project1.jpg',
    ],
    link: 'https://cookbook.social',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
    features: [
      'User-generated content with moderation',
      'Recipe scaling and unit conversion',
      'Shopping list generation',
      'Social sharing and bookmarking',
    ],
  },
  {
    title: 'Recipe Sharing Platform',
    description: 'Social platform for sharing and discovering recipes',
    longDescription:
      'A community-driven recipe sharing platform where users can discover, share, and save their favorite recipes. Features include step-by-step instructions, ingredient scaling, and social sharing capabilities.',
    image: '/works/projects/project2.jpg',
    images: [
      '/works/projects/project3.jpg',
      '/works/projects/project1.jpg',
    ],
    link: 'https://cookbook.social',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
    features: [
      'User-generated content with moderation',
      'Recipe scaling and unit conversion',
      'Shopping list generation',
      'Social sharing and bookmarking',
    ],
  },
];

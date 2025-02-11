import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ced4da',
          dark: '#101010',
        },
        header: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        text: {
          light: '#1A202C',
          dark: '#FFFFFF',
        },
        muted: {
          light: '#4A5568', // gray-600
          dark: '#000000', // gray-300
        },
        primary: {
          light: '#38B2AC', // Teal
          dark: '#ED64A6', // Pink
        }
      },
    },
  },
  plugins: [],
} satisfies Config;

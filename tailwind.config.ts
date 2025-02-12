import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          light: '#FFFFFF', // White
          dark: '#0F0F0F', // Soft black
        },
        header: {
          DEFAULT: 'var(--header)',
          light: '#F5F5F5', // Light gray
          dark: '#171717', // Elevated black
        },
        primary: {
          DEFAULT: 'var(--primary)',
          light: '#3B82F6', // Blue
          dark: '#14B8A6', // Teal
        },
        text: {
          DEFAULT: 'var(--text)',
          light: '#1A1A1A', // Near black
          dark: '#FFFFFF', // White
        },
        body: {
          DEFAULT: 'var(--body)',
          light: '#4B5563', // Medium gray
          dark: '#D1D5DB', // Light gray
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

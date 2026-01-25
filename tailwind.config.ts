import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#050b07',
          900: '#07120b',
          800: '#0b1c12',
          700: '#10261a',
          600: '#163222',
          500: '#1d412c',
          400: '#275438',
          300: '#356b49',
          200: '#5c9b74',
          100: '#bfe2ce'
        },
        accent: {
          500: '#c7b07b',
          600: '#ae9966'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};

export default config;

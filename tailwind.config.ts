import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4E7BAA',
        secondary: '#F6F1E8',
        accent: '#2F5D8A'
      }
    }
  },
  plugins: []
} satisfies Config;

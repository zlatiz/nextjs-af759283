import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        surface: 'var(--muted)',
        foreground: 'var(--foreground)',
        bordercolor: 'var(--border)'
      },
      borderRadius: {
        md: 'var(--radius)'
      }
    }
  },
  plugins: []
};

export default config;

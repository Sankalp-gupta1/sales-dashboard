import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: { soft: '0 18px 60px rgba(15, 23, 42, 0.10)' },
      colors: { brand: { 50: '#eefdf6', 600: '#059669', 700: '#047857' } }
    }
  },
  plugins: []
};
export default config;

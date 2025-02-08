import type { Config } from 'tailwindcss';
import baseConfig from '../tailwind.config';

export default {
  ...baseConfig,
  content: [
    "../app/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}"
  ],
} satisfies Config; 
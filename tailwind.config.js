// tailwind.config.js
const { heroui } = require('@heroui/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/components/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#3BB77E',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

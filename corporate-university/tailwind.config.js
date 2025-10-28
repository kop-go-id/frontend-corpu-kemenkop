/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#065366',
        secondary: '#E5A80E',
        'dark-primary': '#065366',
        'alt-primary': '#065366',
        'alt-secondary': '#a0b73e',
        'alt-tertiary': '#e3a924',
        'alt-quaternary': '#d47800',
        'alt-white': '#ffffff',
        'alt-red': '#a52525',
        'alt-black': '#121212',
        'alt-beige': '#e9d6a6',
        solitude: '#fafafa',
      },
    },
  },
  plugins: [],
};

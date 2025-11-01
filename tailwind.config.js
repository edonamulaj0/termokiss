/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
      },
      letterSpacing: {
        'extra-wide': '0.25em',
        'super-wide': '0.5em',
      },
      animation: {
        'scale-hover': 'scale 0.2s ease-in-out',
      },
      scale: {
        '105': '1.05',
      }
    },
  },
  plugins: [],
}
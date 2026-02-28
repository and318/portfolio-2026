/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,scss}",
  ],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        'brand-dark': '#111111',
        'brand-light': '#F9F9F9',
        'brand-gray': '#666666'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif', '"Playfair Display"'], // Keep previous for compatibility if needed
      }
    },
  },
  plugins: [],
}
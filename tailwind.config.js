/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        library: {
          primary: '#1e293b', // Slate 800
          secondary: '#b45309', // Amber 700
          cream: '#fcfbf9',
          paper: '#f5f5f4',
          accent: '#0f172a',
        }
      }
    },
  },
  plugins: [],
}
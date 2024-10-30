/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'golden-gradient': 'linear-gradient(to right, #DAA520, #B8860B)',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Update this if your HTML file is in the public folder
    "./src/**/*.{js,jsx,ts,tsx}",  // This is correct for scanning all files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
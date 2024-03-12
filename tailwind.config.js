/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#3db2bb",
        'secondary': "#001925",
        'primary-strong': "#87d2d8",
        'vpurple': "#9545ac",
        'vorange': "#ff8c38"
      }
    },
  },
  plugins: [],
}
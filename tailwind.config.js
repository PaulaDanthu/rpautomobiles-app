/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  theme: {
    fontFamily: {
      'mono': ['ui-monospace', 'Times'],
      'display': ['Times'],
      'body': ['Times'],
    }
  },
  extend: {},
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        veteran: {
          navy: '#0A1628',
          gold: '#C5A572',
          red: '#BF0D3E',
          blue: '#0033A0',
        }
      }
    },
  },
  plugins: [],
}

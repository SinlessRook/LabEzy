/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark_blue': '#000000',
        'light_blue': '#0018CC',
        'blue': '#DCDCDC', 
        'baby_blue': '#F0FFFF',
        'color_1':'#8BC6EC',
        'color_2':'#9599E2',
      },
    },
  },
  plugins: [],
}

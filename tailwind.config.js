/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'name': ['"Aboreto-Regular"', 'system-ui'],
        'raleway': ['"Raleway"', 'sans-serif'],
        'fre': ['"Fredoka-Regular"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      colors: {
        'accents-1': '#111',
        'accents-2': '#333',
        'accents-3': '#444',
        'accents-4': '#666',
        'accents-5': '#888',
        'accents-6': '#999',
        'accents-7': '#eaeaea',
        'accents-8': '#fafafa',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      transitionProperty: {
        'left': 'left',
        'width': 'width',
      },
      blur: {
        '32': '32px',
      },
      backgroundSize: {
        '200%': '200%',
      },
      spacing: {
        '9.5': '23.75px',
        '12.5': '50px',
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}
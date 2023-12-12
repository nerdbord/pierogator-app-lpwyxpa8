/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barrio: ['Barrio', 'sans-serif'],
        barriecito: ['Barriecito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      fontSize: {
        h1: [
          '42px',
          { lineHeight: '34px', letterSpacing: 0, fontWeight: '400' },
        ],
        h2: ['30px', { lineHeight: '24px', letterSpacing: 0 }],
        h3: ['14px', { lineHeight: '16px', letterSpacing: 0 }],
        body: ['14px', { lineHeight: '20px', letterSpacing: 0 }],
        button: ['14px', { lineHeight: '16px', letterSpacing: 0 }],
        button2: ['14px', { lineHeight: '16px', letterSpacing: 0 }],
      },
      colors: {
        'bright-yellow': '#FFE5B2',
        'cream-yellow': '#FACE90',
        'dark-green': '#002902',
        'gray-dark': '#969696',
        gray: '#D6D6D6',
        'gray-light': '#E8E8E8',
        'gray-background': '#F9F9F9',
        white: '#FFFFFF', // Typically, white is already defined in Tailwind CSS
        green: '#004B03',
      },
    },
  },
  plugins: [],
};

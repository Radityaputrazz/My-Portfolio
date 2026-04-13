/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Jika pakai folder `src`
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        floatX: 'floatX 2s ease-in-out infinite',
        floatY: 'floatY 3s ease-in-out infinite',
        floatYDelay: 'floatY 3s ease-in-out infinite 0.5s',
        floatXY: 'floatXY 3s ease-in-out infinite', // ✅ gabungan X & Y
      },
      keyframes: {
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatXY: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translateX(6px)' },
          '50%': { transform: 'translateY(-6px)' },
          '75%': { transform: 'translateX(-6px)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

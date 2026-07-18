/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1F3864',
          light: '#2A4B85',
          dark: '#132442',
        },
        gold: {
          DEFAULT: '#B8860B',
          hover: '#986F09',
          soft: '#E6C25A',
        },
        ink: '#0F1C32',
        muted: '#475569',
        paper: '#FDFDFD',
        cream: '#F6F2EA',
        support: {
          blue: '#1F6FB2',
          coral: '#C1440E',
          teal: '#0F766E',
          amber: '#B8860B',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(31,56,100,0.06)',
        cardHover: '0 14px 44px rgba(31,56,100,0.12)',
        gold: '0 10px 30px rgba(184,134,11,0.28)',
      },
      letterSpacing: {
        editorial: '-0.02em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};

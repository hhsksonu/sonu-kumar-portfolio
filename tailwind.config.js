/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        em: '#10b981',
        'em-light': '#34d399',
        'em-dark': '#059669',
        bg: '#030712',
        'bg-card': '#0d1117',
        'bg-card2': '#0f172a',
        gold: '#f59e0b',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'em-glow': '0 0 40px rgba(16,185,129,0.25)',
        'em-glow-sm': '0 0 20px rgba(16,185,129,0.2)',
        'card': '0 20px 40px rgba(0,0,0,0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

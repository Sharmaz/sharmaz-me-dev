module.exports = {
  content: ['./src/**/*.{js,jsx}', './dist/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#282C34',
        background: '#07071C',
        heliotrope: '#E963FD',
        'dark-orchid': '#8233C5',
        'metallic-blue': '#274B74',
      },
      animation: {
        'purple-animation': 'animationGradient 2s ease alternate infinite',
      },
      keyframes: {
        animationGradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '50% 100%' },
          '100%': { 'background-position': '100% 0%' },
        },
      },
    },
  },
  plugins: [],
};
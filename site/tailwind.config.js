/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './motion.js'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        surface: '#13131A',
        line: '#23232D',
        ink: '#F5F5F0',
        muted: '#9C9CA8',
        accent: '#B8F25C',
      },
      fontFamily: {
        display: ['Geist', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#1a1a1a',
        forest: '#6E4F66',
        ash: '#1c1c1c',
        charcoal: '#2a2a2a',
        stone: '#3d3d3d',
        mist: '#a8b8c0',
        glacier: '#7eb8c4',
        'glacier-light': '#b8dde5',
        moss: '#4a6741',
        'moss-light': '#7a9b6e',
        cream: '#f0ebe0',
        'cream-dark': '#d4cfc4',
        aurora: '#a8d8b0',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}

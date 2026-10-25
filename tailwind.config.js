/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: 'rgba(6, 182, 212, 0.5)'
        },
        obsidian: {
          900: '#0a0a0a',
          800: '#111415',
          700: '#1d2022'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        heading: ['Geist', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

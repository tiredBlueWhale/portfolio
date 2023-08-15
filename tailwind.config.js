/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          "50%": { opacity: '0' }
        }
      },
      animation: {
        blink: 'blink 0.8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}


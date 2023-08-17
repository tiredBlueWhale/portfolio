/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
        'screen-large': ['100vh /* fallback for Opera, IE and etc. */', '100lvh'],
        'section-placeholder': ['110vh /* fallback for Opera, IE and etc. */', '110lvh'],
      },
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


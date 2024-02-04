const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        hero: '#0148ca',
        'stay-inside': '#601aaf',
        'stay-inside-shadow': '#1aafaa',
        'color-and-shape': '#082f49'
      },
      fontFamily: {
        'sans': ['Fira-Mono', ...defaultTheme.fontFamily.sans],
        'fira': ['Fira-Mono', 'sans-serif'],
        'martian': ['Martian-Mono', 'sans-serif'],
        'audiowide': ['Audiowide', 'sans-serif'],
        'press-start-2p': ['"Press Start 2P"'],
      },
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
        'screen-large': ['100vh /* fallback for Opera, IE and etc. */', '100lvh'],
        'section-placeholder': ['110vh /* fallback for Opera, IE and etc. */', '110lvh'],
      },
      maxWidth: {
        header: '1800px'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          "50%": { opacity: '0' }
        },
        'hero-bar': {
          '0%': { width: '0px' },
          '100%': {},
        },
        'hero-title': {
          '0%': { transform: 'translateY(100%)' },
          '100%': {},
        },
        'hero-sub-title': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': {},
        },
      },
      animation: {
        blink: 'blink 0.8s ease-in-out infinite',
        intro: 'fade-in 2s ease-in-out 3s backwards',
        'hero-bar': 'hero-bar 1.5s ease-in-out backwards',
        'hero-title': 'hero-title 1.5s ease-in-out 1s backwards',
        'hero-sub-title': 'hero-sub-title 1.5s ease-in-out 1s backwards',
        'hero-logo': 'fade-in 1.5s ease-in-out 2.5s backwards',
      },
      textShadow: {
        DEFAULT: '6px 6px 0px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}


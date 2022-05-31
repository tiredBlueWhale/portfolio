module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // 'sans': ['"Fira-Mono"'],
      'sans': ['Inter'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      keyframes: {
        swipeLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        swipeTop: {
          '0%, 100%': { top: '100%' },
          '50%': { top: '0px' },
        },
        swipeBottom: {
          '0%, 100%': { bottom: '100%' },
          '50%': { bottom: '0px' },
        },
        swipeChild: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '80%': { opacity: '.5' },
          '100%': { opacity: '1' },
        },
        logo: {
          '0%': { opacity: 0, heigth: 0 },
          '50%': { opacity: .5 },
          '100%': { opacity: 1, heigth: '100%' },
        },
      },
      animation: {}
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}

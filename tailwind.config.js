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
        swipe: {
          '0%, 100%': { transform: 'rotate(-90deg)' },
          '50%': { transform: 'rotate(90deg)' },
        }
      },
      animation: {
        swipe: 'swipe 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}

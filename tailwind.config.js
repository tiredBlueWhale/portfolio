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
        appear: {
          '0%': { opacity: 0, heigth: 0 },
          '50%': { opacity: .5 },
          '100%': { opacity: 1, heigth: '100%' },
        },
        appearTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        appearBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        appearLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        appearRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        swipeTop: 'swipeTop 1.0s 0s ease-in-out infinite both',
        swipeBottom: 'swipeBottom 1.0s 0s ease-in-out infinite both',
        swipeChild: 'swipeChild 1.0s 0s ease-in-out infinite both',
        appearLogoTitle: 'appearTop 1.0s 0s ease-in-out 1 both',
        appearLogoLine: 'swipeLine 1.0s 0s ease-in-out 1 both',
        appearLogoSubtitle: 'appearBottom 1.0s 0s ease-in-out 1 both',
        appearLogoImage: 'appearBottom 1.0s 1s ease-in-out 1 both',
        appearWaveLeft: 'appearLeft 1.0s 1s ease-in-out 1 both',
        appearWaveRight: 'appearRight 1.0s 1s ease-in-out 1 both',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}

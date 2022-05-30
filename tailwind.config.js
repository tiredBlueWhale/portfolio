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
      // colors: {
      //   'bg-color': '#1d4ed8',
      // },
    },
  },
  plugins: []
}

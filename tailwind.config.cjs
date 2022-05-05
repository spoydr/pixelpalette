module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily : {
        'sans': ['Inter', 'sans-serif'],
        'odibee': ['Odibee Sans', 'cursive'],
        'pixel': ['VT323', 'monospace']

      },
      dropShadow : {
        'button': '4 0px 14px rgba(0,0,0,0.25)'
      },
    },
  },
  plugins: [],
}

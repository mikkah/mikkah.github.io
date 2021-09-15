module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: '#04040f',
        lightblue: '#7bbbff',
        darkblue: '#04040f',
        skyblue: 'rgb(75, 151, 210)',
        yellow: '#ecf51f',
        lightgreen: 'rgb(103, 228, 151)',
        paleBlue: '#323256'
      },
      fontFamily: {
        body: ['Mulish']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

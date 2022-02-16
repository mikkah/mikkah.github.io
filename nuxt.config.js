export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mikhael | Site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Mikhael Oriel | Site` },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', name: 'og:title', content: `Mikhael | Site | Portfolio` },
      { hid: 'og:description', name: 'og:description', content: `Mikhael Oriel | Site | Portfolio` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/Mulish/stylesheet.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/main.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: '/assets/favicon_io/android-chrome-512x512.png',
      fileName: 'favicon.ico',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      purpose: 'any'
    },
    manifest: {
      name: "Mikhael Site",
      short_name: "Mikka",
      lang: 'en',
      theme_color:"#141347",
      background_color:"#141347",
      display:"standalone",
      start_url: "/"
    },
    meta: {
      mobileApp: true,
      appleStatusBarStyle: 'black',
      favicon: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {}
  },
  server: {
    host: "0.0.0.0"
  }
}

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  env: {
    baseUrl: process.env.BASE_URL || 'https://127.0.0.1:8000',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'science_app_frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~assets/scss/style.scss",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~plugins/core-ui', ssr: false},
    {src: '~plugins/core-ui-icons', ssr: false},
    {src: '~plugins/v-select', ssr: false},
    {src: '~plugins/api', ssr: false},
    {src: '~plugins/common-methods', ssr: false},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL || 'https://127.0.0.1:8000'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

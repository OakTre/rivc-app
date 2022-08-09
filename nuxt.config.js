export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'РИВЦ',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'центр притяжения цифровых технологий в АПК' },
      { name: 'msapplication-TileColor', content: '#171A3D' },
      { name: 'theme-color', content: '#171A3D' }
    ],
    link: [
      { rel: 'pple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
      { as: 'style', rel: 'stylesheet preload prefetch', href: '/fonts/fonts.css' }
    ]
  },
  css: [
    '@node_modules/reset-css/reset.css',
    '@assets/styles/global'
  ],

  plugins: [
    '@plugins/mixins/getDynamicFile.js',
    '@plugins/mixins/mask.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },
  svgSprite: {
  },
  axios: {
    baseURL: '/'
  },
  build: {
  }
}

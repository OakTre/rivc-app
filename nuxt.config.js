export default {
  ssr: false,
  head: {
    title: 'РИВЦ',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Центр притяжения цифровых технологий в АПК' },
      { name: 'msapplication-TileColor', content: '#11132D' },
      { name: 'theme-color', content: '#11132D' }
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
    '@plugins/mixins/mask.js',
    '@plugins/ScrollLock.js'
  ],

  components: true,

  buildModules: [
    // '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/device'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    '@nuxtjs/strapi'
  ],
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru'
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1339/api',
    entities: [
      'nav-menus',
      'advantages',
      'partners',
      'why-uses',
      'mission-goals',
      'articles',
      { name: 'logo', type: 'single' },
      { name: 'intro', type: 'single' },
      { name: 'email', type: 'single' },
      { name: 'location', type: 'single' },
      { name: 'increase', type: 'single' },
      { name: 'about-text', type: 'single' },
      { name: 'first-project', type: 'single' },
      { name: 'project-second', type: 'single' },
      { name: 'project-third', type: 'single' },
      { name: 'project-four', type: 'single' },
      { name: 'policy', type: 'single' },
    ]
  },
  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },
  svgSprite: {
  },
  axios: {
    baseURL: '/'
  },
  build: {
    postcss: null
  },
  serverMiddleware: ['~/api/index.js'],
  server: {
    host: '0.0.0.0',
    port: 8000
  }
}

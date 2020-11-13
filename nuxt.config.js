export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList'
    }, {
      src: 'https://kit.fontawesome.com/e007d1f7cc.js'
    }, {
      src: 'https://www.powr.io/powr.js?platform=vuejs'
    }, {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js'
    }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff'
  },

  /*
  ** Global CSS
  */
  css: ['vue-essential-slices/src/styles/styles.scss', '~/assets/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/vue-carousel.js', ssr: false }],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [// Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'],

  /*
  ** Nuxt.js modules
  */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ivy-yoga.ca',
    cacheTime: 1000 * 60 * 15,
    generate: true
  },
  modules: [// Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios', '@nuxtjs/pwa', // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv', ['@nuxtjs/prismic', {
      endpoint: 'https://ivy-yoga.cdn.prismic.io/api/v2',
      apiOptions: {
        routes: [{
          type: 'page',
          path: '/:uid'
        }]
      }
    }], ['nuxt-sm']],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {},

    transpile: ['vue-slicezone', 'nuxt-sm']
  },
  storybook: {
    stories: ['~/slices/**/*.stories.js']
  },
  ignore: ['**/*.stories.js']
}

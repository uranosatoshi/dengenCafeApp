module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dengenCafeApp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'semantic-ui-vue/nuxt',
    ['semantic-ui-vue/nuxt', { css: false }],
    '@nuxtjs/dotenv',
  ],
  env: {
    GURUNAVI_KEY: process.env.GURUNAVI_KEY,
  },
  axios: {
    proxy: true
  },
  proxy: {
    '/gurunavi': {
      target: 'https://api.gnavi.co.jp',
      pathRewrite: {
        '^/gurunavi': ''
      }
    },
    '/geo': {
      target: 'http://geoapi.heartrails.com',
      pathRewrite: {
        '^/geo': ''
      }
    },
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}


export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Farsan&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/hooper',
      ssr: false
    },
    {
      src: '~/plugins/sweet',
      ssr: false
    },
    {
      src: '~/plugins/ga',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    [
      'nuxt-fire',
      {
        // Required:
        config: {
          development: {
            apiKey: 'AIzaSyBRZcUxyc_R-UBCXSnOWhckpcyhDZNhxdA',
            authDomain: 'turrnit.firebaseapp.com',
            databaseURL: 'https://turrnit.firebaseio.com',
            projectId: 'turrnit',
            storageBucket: 'turrnit.appspot.com',
            messagingSenderId: '46910929747',
            appId: '1:46910929747:web:dccfc1f6b957c516'
          },
          production: {
            apiKey: 'AIzaSyBRZcUxyc_R-UBCXSnOWhckpcyhDZNhxdA',
            authDomain: 'turrnit.firebaseapp.com',
            databaseURL: 'https://turrnit.firebaseio.com',
            projectId: 'turrnit',
            storageBucket: 'turrnit.appspot.com',
            messagingSenderId: '46910929747',
            appId: '1:46910929747:web:dccfc1f6b957c516'
          }
        },
        // The following options are optional:
        useOnly: ['auth', 'firestore', 'realtimeDb', 'messaging'],
        customEnv: false,
        functionsLocation: 'us-central1'
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

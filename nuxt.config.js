export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'i-Buzz',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '全方位網路聲譽管理專家'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/wheelnav.js",
        type: "text/javascript"
      },
      {
        src: "/js/raphael.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/raphael.icons.min.js",
        type: "text/javascript"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['vue-slick-carousel/dist/vue-slick-carousel.css', 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~/plugins/vue-sticky-directive.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-smooth-scroll.js'
    },
    {
      src: '~/plugins/vue-scrollto.js'
    },
    {
      src: './plugins/vue-slick.js'
    },
      {
      src: './plugins/fb-sdk.js'
    },
    {
      src: '~/plugins/vue-chartjs.js',
      ssr: false
    }
  ],
  loading: '~/components/loading.vue',
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['nuxt-mail', {
        smtp: {
          host: "www3.hibox.hinet.net",
          port: 587,
          secure: false,
          auth: {
            user: "Contact@i-buzz.com.tw",
            pass: "bb0226"
          }
        },
    }
    ]
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  server: {
    port: 5000,
    host: '0.0.0.0'
  }
}

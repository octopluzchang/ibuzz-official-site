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
    title: 'i-Buzz大數據產業調研中心 | 以知識驅動你的品牌競爭力',
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
        content: '以數據知識為核心，策動產業調查、競品分析、消費者研究，提供具價值的發現與建議。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/thumbnail.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/thumbnail.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'i-Buzz大數據產業調研中心'
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
      },
      {
        crossorigin:"anonymous",
        src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0",
        nonce: "6gN7k3Xx"
      },
      {
        async:"async",
        src: "https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js",
        defer: "defer"
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
      src: '~/plugins/vue-chartjs.js',
      ssr: false
    },
    {
      src: './plugins/vee-validate.js'
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
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-97624464-5'
  },
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
    ],
    ['@nuxtjs/sitemap',{
      sitemap: {
        path: '/sitemap.xml', // sitemap名稱，不用改
        hostname: 'http://localhost:3000/', // 網址
        cacheTime: 1000 * 60 * 15, // 站點路由更新頻率，只在 generate: false有用
        gzip: true, // 生成 .xml.gz 檔的 sitemap
        generate: true, // 允許使用 nuxt generate 生成
        // 排除不要的頁面路由
        exclude: [],
        // 靜態頁面路徑
        routes(callback) {
          axios.all([
              // 首頁
              axios.get(process.env.API_URL + '/rest/api/文章案例?_format=json'),
              // blog 列表頁
              axios.get(process.env.API_URL + '/rest/api/文章案例?_format=json'),
              // blog 內容頁
              axios.get(process.env.API_URL + '/rest/api/文章案例?_format=json'),
            ])
            .then(axios.spread(function (index, blogPage, blogLise) {
              let indexRoutes = index.data.map((data) => {
                return {
                  url: '/',
                  changefreq: 'daily',
                  priority: 1,
                  lastmodISO: '2017-06-30T13:30:00.000Z'
                }
              });
              let blogPageRoutes = blogPage.data.map((data) => {
                return {
                  url: '/文章案例',
                  changefreq: 'daily',
                  priority: 1,
                  lastmodISO: '2017-06-30T13:30:00.000Z'
                }
              });
              let blogListRoutes = blogList.data.map((data) => {
                return {
                  url: '/文章案例/' + data.nid,
                  changefreq: 'daily',
                  priority: 0.8,
                  lastmodISO: '2017-06-30T13:30:00.000Z'
                }
              });
              // 用 concat 進行合併
              callback(null, indexRoutes.concat(blogPageRoutes, blogListRoutes));
            }), function (err) {
              return next(err);
            });
        }
      }
    }]
  ],
  loading: {
    color: '#ddb306',
    height: '5px'
  },
  axios: {
    baseURL: 'http://localhost:4000', // Used as fallback if no runtime config is provided
    proxy: true
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [
    "vee-validate/dist/rules"
  ],
  },
  server: {
    host: '0.0.0.0'
  },
}

const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // { hid: 'description', name: 'description', content: 'Nuxt.js project' }
      {
        hid: "caihaop",
        name: "caihaop",
        content: "打不过我吧。"
      },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */

  loading: { color: '#3B8070' },
  plugins: [
           {
            src: '~plugins/ElementUI',
            ssr: true,
          },
          // {
          //   src: '~plugins/VueAwesomeSwiper',
          //   ssr: true,
          // },
    {
            src: '~plugins/http',
            ssr: true,
          },
],
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
     // 'swiper/dist/css/swiper.css',
  ],
  // modules: [
  //   '@nuxtjs/axios',  //nuxt自带的
  //   '@nuxtjs/proxy'
  // ],
  // axios: {
  //   proxy: true,
  // },
  // proxy:{
  //     '/api':
  //     {
  //       target: 'http://192.168.131.237:9090', // api主机
  //       // target: 'http://192.168.131.94:8082', // api主机
  //       pathRewrite: { '^/api' : '/' }
  //     }
  //
  // },

  /*
  ** Build configuration
  */

  build: {
    /*
    ** Run ESLint on save
    */
    extractCSS: { allChunks: true },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: [
           'assets/css/base.scss'
          ]
        }
      }
      // 遍历nuxt定义的loader配置，向里面添加新的配置。
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {
          rule.use.push(sassResourcesLoader)
        }
      })
    },
    vender:[
      'element-ui',
      'VueAwesomeSwiper',
      'axios'
    ]
  },
}

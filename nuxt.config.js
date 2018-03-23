const webpack = require('webpack')
module.exports = {
    head: {
        titleTemplate: '%s - my-app-nuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' }
        ]
    },
    build: {
        analyze: true,
        filenames: {
            vendor: 'vendor1.[hash].js',
            app: 'app1.[chunkhash].js'
        },
        plugins: [
            new webpack.DefinePlugin({
            'process.VERSION': require('./package.json').version //process.VERSION相当于全局变量,业务代码可以直接使用配置的标识
            })
        ],
        vendor: ['axios']
    },
    cache: {
        max: 1000,
        maxAge: 900000
    },
    loading: '~/components/loading.vue',
    css: [
        '~/assets/scss/main.scss'
    ],
    router: {
        base: '/app/',
        mode: 'hash' ,//默认值：'history'
        scrollBehavior: function (to, from, savedPosition) { //所有页面渲染后滚动至顶部
            return { x: 0, y: 0 }
        },
        middleware: 'user-agent' // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    },
    transition: {
        name: 'page',
        mode: 'out-in',
        beforeEnter(el){
            console.log('Before enter...');
        }
    }
}

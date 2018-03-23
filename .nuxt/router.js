import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7f557c32 = () => import('..\\pages\\list.vue' /* webpackChunkName: "pages_list" */).then(m => m.default || m)
const _65c77ad9 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



const scrollBehavior = function (to, from, savedPosition) { //所有页面渲染后滚动至顶部
            return { x: 0, y: 0 }
        }


export function createRouter () {
  return new Router({
    mode: 'hash',
    base: '/app/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/list",
			component: _7f557c32,
			name: "list"
		},
		{
			path: "/",
			component: _65c77ad9,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}

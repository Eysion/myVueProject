// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import VueLazyload from 'vue-lazyload'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'

import App from './App'
import routerMap from './router'
import store from './vuex/store'

import '../static/iconfont/iconfont.css'

Vue.use(Router)
Vue.use(IScrollView, IScroll)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

const router = new Router(Object.assign({}, routerMap, {
  mode: 'history'
}))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: start => start(App)
})

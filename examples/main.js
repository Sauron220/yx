import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import hljs from 'highlight.js'
import routes from './route.config'
import DemoBlock from './components/demo-block.vue'
import MainFooter from './components/footer'
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import FooterNav from './components/footer-nav'
import 'packages/theme-chalk/src/index.scss'
import './demo-styles/index.scss'
import './assets/styles/common.scss'
import './assets/styles/fonts/style.css'

Vue.use(VueRouter)

Vue.component('demo-block', DemoBlock)
Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav)
Vue.component('footer-nav', FooterNav)

Vue.use(Element, {
  size: 'mini' // set element-ui default size
})

Vue.config.productionTip = false

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  document.title = 'YXUI'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'packages/theme-chalk/src/index.scss'
import Element from 'element-ui'
import hljs from 'highlight.js'
import routes from './route.config'
import DemoBlock from './components/demo-block.vue'

Vue.component('demo-block', DemoBlock)
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

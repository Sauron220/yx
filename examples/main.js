import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import Block from '../packages/Block'

Vue.use(Block)
Vue.use(Element, {
  size: 'mini' // set element-ui default size
})

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

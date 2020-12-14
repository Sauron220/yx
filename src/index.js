/* Automatically generated by './build/build-entry.js' */

import Block from 'packages/block'
import PageForm from 'packages/page-form'
import PageTable from 'packages/page-table'
import Row from 'packages/row'
import Dialog from 'packages/dialog'

const components = [
  Block,
  PageForm,
  PageTable,
  Row,
  Dialog
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否可以安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.2-6',
  install,
  Block,
  PageForm,
  PageTable,
  Row,
  Dialog
}

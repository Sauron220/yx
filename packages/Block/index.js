// 导入组件
import Block from './src/main'

// 为组件提供 install 安装方法，供按需引入
Block.install = function (Vue) {
  Vue.component(Block.name, Block)
}

// 默认导出组件
export default Block

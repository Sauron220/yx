import PageTable from './src/main'

PageTable.install = function (Vue) {
  Vue.component(PageTable.name, PageTable)
}

export default PageTable

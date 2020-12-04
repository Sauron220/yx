<!-- PageTable 表格 2020-12-4 9:52:26 -->
## PageTable 表格

页面表格组件

### 基本使用

用于页面中表格展示数据组件

:::demo

```html
<yx-page-table
  :loading="loading"
  :column="column"
  :data="tableData"
  pagination
  :current-page="pageNo"
  :page-size="pageSize"
  :total="total"
  @size-change="handleSizeChange"
  @p-current-change="handleCurrentChange"
/>
<script>
export default {
  data () {
    return {
      loading: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      pageNo: 0,
      pageSize: 20,
      total: 0,
      column: [
        {
          prop: 'date',
          label: '日期',
          minWidth: '80'
        },
        {
          prop: 'name',
          label: '姓名',
          minWidth: '80'
        },
        {
          prop: 'address',
          label: '地址',
          minWidth: '80'
        }
      ]
    }
  },
  methods: {
    handleSizeChange (num) {
      console.log(num)
    },
    handleCurrentChange (pageNo) {
      console.log(pageNo)
    }
  }
}
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| loading | 加载中 | boolean | — | false |
| column | 表格列配置 | array | - | - |
| data | 表格数据 | array | — | - |
| spanMethod | 合并单元格方法 | function | — | - |
| pagination | 分页组件是否展示 | boolean | — | true |
| paginationTop | 分页组件距离上边距 | string | — | 10px |
| paginationBottom | 分页组件距离下边距 | string | — | 0 |
| paginationAlign | 分页组件对齐方式 | string | right | left | right |
| currentPage | 当前页 | number | - | 1 |
| merge | 合并单元格 | array | - | - |
| listenHeight | 监听页面高度，表格自适应 | boolean | - | true |
| cellStyle | 单元格样式 | object | - | { padding: '5px 0' } |
| tableRowClassName | 表格行添加class | function | - | - |
| cellClassName | 单元格添加class | function | - | - |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| p-current-change | currentPage 改变时会触发 | 当前页currentPage |
| size-change | pageSize 改变时会触发 | 每页条数size |

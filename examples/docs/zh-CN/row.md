<!-- Row 网格排版 2020-12-4 16:35:24 -->
## Row 网格排版

网格布局方式，格式为__ 字段：值

### 基本用法

根据输入配置，自动生成网格排版

:::demo
```html
<yx-row
  title="基本信息"
  :row="row"
  :source="source"
/>
<script>
export default {
  data () {
    return {
      source: {
        custName: '小明',
        age: 18,
        sex: '男',
        idNo: '350201198701146613',
        idNoAddr: '福建省 厦门市 市辖区'
      },
      row: [
        {
          key: 'custName',
          label: '姓名',
          link: true,
          span: 3,
          lineStyle: { width: '45%' }
        },
        {
          key: 'age',
          label: '年龄',
          span: 3,
          lineStyle: { width: '45%' }
        },
        {
          key: 'sex',
          label: '性别',
          span: 3,
          lineStyle: { width: '45%' }
        },
        {
          key: 'idNo',
          label: '身份证号',
          link: true,
          span: 2,
          lineStyle: { width: '24.65%' }
        },
        {
          key: 'idNoAddr',
          label: '身份证号归属地',
          span: 2,
          lineStyle: { width: '30%' }
        }
      ]
    }
  }
}
</script>
```
:::

### 操作按钮插入
:::demo
```html
<yx-row
  title="基本信息"
  :row="row"
  :source="source"
>
  <template #header>
    <div class="action-btn-wrap">
      <el-button type="primary">处理</el-button>
    </div>
  </template>
</yx-row>
<script>
export default {
  data () {
    return {
      source: {
        custName: '小明',
        age: 18,
        sex: '男',
        idNo: '350201198701146613',
        idNoAddr: '福建省 厦门市 市辖区'
      },
      row: [
        {
          key: 'custName',
          label: '姓名',
          link: true,
          span: 3,
          lineStyle: { width: '45%' }
        },
        {
          key: 'age',
          label: '年龄',
          span: 3,
          lineStyle: { width: '45%' }
        },
        {
          key: 'sex',
          label: '性别',
          span: 3,
          lineStyle: { width: '45%' }
        },
        {
          key: 'idNo',
          label: '身份证号',
          link: true,
          span: 2,
          lineStyle: { width: '24.65%' }
        },
        {
          key: 'idNoAddr',
          label: '身份证号归属地',
          span: 2,
          lineStyle: { width: '30%' }
        }
      ]
    }
  }
}
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | 标题           | string | — | — |
| row | 字段配置项 | object | - | - |
| source | 数据源 | object | — | — |

### Slot

| Name | Description |
|------|--------|
| — | 描述 |
| header | 头部插入操作 |
| footer | 底部插入操作 |

<!-- PageForm 条件筛选 2020-12-3 13:55:13 -->

## PageForm 条件筛选

表格条件筛选的组件

### 基本用法

用于 Table 数据筛选条件

:::demo PageForm 可通过 slot 插入操作按钮。

```html
<yx-page-form
  :ref-obj.sync='formInfo.ref'
  :data='formData'
  :field-list='formInfo.fieldList'
  :rules='formInfo.rules'
  :list-type-info='formInfo.listTypeInfo'
  operate-class='col-fluid'
>
  <div slot='operate'>
    <el-button type='primary' @click='handleQuery'>
      查询
    </el-button>
    <el-button @click='handleReset'>
      重置
    </el-button>
  </div>
</yx-page-form>
<script>
export default {
  data () {
    return {
      formData: {
        applNo: '',
        dateApplBegin: '',
        backspaceFlag: ''
      },
      formInfo: {
        ref: null,
        fieldList: [
          {
            type: 'input',
            label: '案件编号',
            prop: 'applNo',
            colLg: 8
          },
          {
            type: 'date',
            label: '开始日期',
            prop: 'dateApplBegin',
            colLg: 8
          },
          {
            type: 'select',
            label: '是否退回案件',
            prop: 'backspaceFlag',
            list: 'spaceOpts',
            colLg: 8,
            relyProp: 'dateApplBegin',
            allows: ['NO_EMPTY']
          }
        ],
        rules: {},
        listTypeInfo: {
          spaceOpts: [
            {
              label: '全部',
              value: ''
            },
            {
              label: '是',
              value: 'Y'
            },
            {
              label: '否',
              value: 'N'
            }
          ]
        }
      }
    }
  },
  methods: {
    handleQuery () {
      this.formInfo.ref.validate(valid => {
        if (valid) {
          this.$message(JSON.stringify(this.formData))
        } else {
          console.log('err')
        }
      })
    },
    handleReset () {
      this.formInfo.ref.resetFields()
    }
  }
}
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| rowGutter | 间距 | number | — | 20 |
| colXs | <768px 响应式栅格数或者栅格属性对象 | number | - | 24 |
| colSm | ≥768px 响应式栅格数或者栅格属性对象 | number | — | 12 |
| colMd | ≥992px 响应式栅格数或者栅格属性对象 | number | — | 8 |
| colLg | ≥1200px 响应式栅格数或者栅格属性对象 | number | — | 4 |
| data | 表单数据 | object | — | — |
| fieldList | 相关字段 | array | — | - |
| rules | 表单各字段验证规则 | object | - | - |
| listTypeInfo | 相关下拉框选项 | object | - | - |
| labelWidth | label 宽度 | string | - | 120px |
| labelPosition | label 位置 | string | left|right|top | top |
| refObj | 表单引用兑现 | object | - | - |
| operate | 操作按钮集合 | array | - | - |
| operateClass | 操作按钮class | string | - | - |

### fieldList
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 组件类型 | string | input、password、number、inputNumber、textarea、select、multselect、date、time、atime、text | - |
| label | 标签文本 | string | - | - |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | 传入 Form 组件的 model 中的字段 | - | - |
| disabled | 禁用 | boolean | - | false |
| relyProp | 依赖字段 | prop | - | - |
| allows | 允许此项展示的条件，和relyProp一起使用 | array | - | - |
| event | 事件 | string | - | - |
| $attrs | 属性,传递原本element-ui组件的属性定义 | object | - | - |

### Slot

| Name | Description |
|------|--------|
| — | 描述 |
| operate | 按钮操作 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| handleEvent | 各字段绑定事件(change, focus) | (事件名称, 数据, 操作项配置) |
| handleClick | 操作按钮绑定事件 | (事件名称, 数据) |
| handleInput | 各字段绑定事件(input) | (事件名称, 数据) |

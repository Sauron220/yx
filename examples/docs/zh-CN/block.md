<!-- Block 区块 2020/12/2 下午4:32:04 -->
## Block 区块

自定义折叠面板，可自动打开、关闭
### 基本用法

用于自动打开关闭，根据输入的SourceData是否为空值，自动判断是否需要打开。 

:::demo Block 通过 slot 展示自定义内容。
```html
<template>
  <yx-block
    title="This is panel header 1"
    :sourceData="sourceData1"
  >
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
  </yx-block>
  <yx-block
    title="This is panel header 2"
    :sourceData="sourceData2"
  >
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
  </yx-block>
  <yx-block
    title="This is panel header 3"
    :ableClick="true"
    @show="toast"
  >
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
  </yx-block>
</template>
<script>
export default {
  data () {
    return {
      sourceData1: {},
      sourceData2: {
        age: 12
      }
    }
  },
  methods: {
    toast () {
      this.$message('walalala...')
    }
  }
}
</script>
```
:::

### Attribute
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | - | - |
| ableClick | 能否点击 | boolean | - | false |
| sourceData | 必选参数,数据源 | object | - | - |

### Slot
| name | 说明 |
|------|--------|
| default | 展示包含区域内的内容 |

### Methods
| 方法名      | 说明          | 参数 |
|----------- |-------------- | -- |
| show | ableClick 为 true 时可以点击 | — |

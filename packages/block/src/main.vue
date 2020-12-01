<template>
  <div class="yx-block">
    <div v-if="!sourceData">
      <h3 v-if="ableClick" class="yx-block__cursor yx-text__link" @click="modal">
        {{ title }}
      </h3>
      <h3 v-else>{{ title }}</h3>
      <slot />
    </div>
    <el-collapse v-else :value="open">
      <el-collapse-item name="1">
        <template slot="title">
          <h3 v-if="ableClick" class="yx-block__cursor yx-text__link" @click="modal">
            {{ title }}
          </h3>
          <h3 v-else>{{ title }}</h3>
        </template>
        <slot />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    title: {
      type: String,
      default: ''
    },
    ableClick: {
      type: Boolean,
      default: false
    },
    sourceData: {
      type: [Object, Array],
      default: () => {}
    }
  },
  computed: {
    open () {
      if (!this.sourceData && this.sourceData.length <= 0) {
        return ''
      } else {
        const arr = Object.values(this.sourceData)
        const newArr = arr.filter(item => item) // 去掉空值
        if (newArr.length > 0) {
          const fora1 = newArr.reduce((pre, cur) => {
            const curArr = cur instanceof Object ? Object.values(cur) : cur
            return pre.concat(curArr)
          }, []).filter(item => item)

          return fora1.length > 0 ? '1' : ''
        } else {
          return ''
        }
      }
    }
  },
  methods: {
    modal () {
      this.$emit('show')
    },
    formatterVal (arr) {
      arr.foreach(item => {})
      return arr.map(item => {
        if (item && item instanceof Object) {
          return Object.values(item)
        } else if (item) {
          return item
        } else {
          return ''
        }
      })
    }
  }
}
</script>

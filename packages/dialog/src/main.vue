<template>
  <div class="yx-dialog">
    <el-dialog
      :title="title"
      :width="width"
      v-bind="$attrs"
      v-on="$listeners">
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #default>
        <slot></slot>
      </template>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'YxDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '30%'
    }
  }
}
</script>

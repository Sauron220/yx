<template>
  <div id="app">
    <el-button type="primary">按钮1</el-button>
    <Block
      title="测试"
      :sourceData="{ 'age': 12 }"
    >
      <p>这是测试</p>
    </Block>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

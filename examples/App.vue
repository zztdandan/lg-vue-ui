<template lang="html">
  <el-container style="height:100%; padding-top: 25px">
    <el-aside width="230px" style="padding-left: 25px">
      <menu-model></menu-model>
    </el-aside>
    <el-main style="padding-left: 80px; padding-top: 25px; padding-right: 25%">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import MenuModel from './components/menu'

export default {
  components: {
    MenuModel
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
/* 引入代码高亮样式 */
@import 'highlight.js/styles/color-brewer.css';
</style>


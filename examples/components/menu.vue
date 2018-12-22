<template lang="html">
  <div class="menu-model">
    <el-menu
      default-active="1"
      :unique-opened="true"
      :default-openeds="['1', '2', '3']"
      :default-active="defaultActive"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <span style="font-size: 18px">组件</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/lgform">From 表单</el-menu-item>
          <el-menu-item index="/lgtable">Table 表格</el-menu-item>
          <el-menu-item index="/lgexcel">Excel 导入/导出</el-menu-item>
          <el-menu-item index="/lgsimpletable">LgSimpleTable 简单表格</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!--el-submenu index="2">
        <template slot="title">
          <span>测试</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/test">测试</el-menu-item>
        </el-menu-item-group>
      </el-submenu-->
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: '/test'
    }
  },
  created () {
    const path = this.$route.fullPath
    this.defaultActive = path == '/' ? '/test' : path
  },
  methods: {
  }
}
</script>

<style>
.menu-model{
  height: 100%;
}
</style>

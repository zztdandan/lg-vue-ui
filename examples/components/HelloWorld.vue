<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <button-demo></button-demo>
    <lg-form :forms='formData' :fuzzy='flag' :inline='flag'></lg-form>
    <lg-export-excel :data="list"></lg-export-excel>
    <lg-import-excel></lg-import-excel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      flag: false,
      msg: 'Welcome to Your Vue.js App',
      formData: [{
        prop: 'url',
        label: 'url地址',
        size: 'small', // 选填
        itemType: 'input'
      }],
      list: [{
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-03'          
        }, {
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-02'          
        }, {
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-04'          
        }, {
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-01'          
        }]
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

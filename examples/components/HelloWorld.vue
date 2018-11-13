<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <button-demo></button-demo>
    <lg-form :forms='formData' :fuzzy='flag' :inline='flag'></lg-form>
    <lg-form-table></lg-form-table>   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      flag: true,
      msg: 'Welcome to Your Vue.js App',
      formData: [{
        prop: 'url',
        label: 'url地址',
        size: 'small', // 选填
        itemType: 'input'
      }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="lg-sample-table"></div>
</template>

<script>
export default {
  name: 'LgSampleTable',
  props: {
    size: String,
    type: String,
    btnText: {
      type: String,
      default: '导出excel'
    },
    header: {
      type: Array
    },
    filter: {
      type: Array
    },
    data: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      loading: false,
      dialogVisible: false,
      form: {
        name: '',
        type: 'xlsx'
      }
    };
  }
};
</script>

<style>

</style>

<template>
  <el-form-item :label="this.Info.label" :label-width="labelWidth">
    <el-select v-model="input_value" placeholder="请选择">
      <el-option v-for="item in valueList" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  export default {
    name: "select-input",
    props: {
      Info: {
        type: Object,
        default: {},
        required: true
      },
      value: {
        type: String,
        default: ""
      }
    },
    data: function() {
      // console.log("组件渲染开始 ");
      return {
        input_value: "",
        labelWidth: "5rem",
        valueList: [],
        full: true
        //格式:[{value:,label:},{value:,label:}]
      };
    },
    watch: {
      //手动实现与Props的同步
      input_value: function(newval, oldval) {
        // console.log("检测到内部input_value的改动");

        this.$emit("update:value", newval);
      },
      value: function(newval, oldval) {
        // console.log("检测到输入数据的改动");
        this.input_value = newval.value;
      }
    },
    created: function() {
      //设置文字宽度
      let that_labelWidth = "";
      if (this.Info.labelWidth) {
        this.labelWidth = this.Info.labelWidth;
      } else {
        this.labelWidth = (this.Info.label.length+1)+"rem";
      }
      //设置数值列表
      this.valueList = this.Info.value_list;
      //设置不输入时是否全部显示搜索结果
      // this.full = this.Info.full ? true : false;
    },
    methods: {}
  };
</script>

<style scoped>
</style>
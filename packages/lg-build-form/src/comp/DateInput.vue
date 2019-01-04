<template>

    <el-form-item :label="(this.long_label)?'':this.Info.label" :label-width="labelWidth">
        <el-date-picker v-model="input_value" type="datetime" placeholder="选择日期时间">
        </el-date-picker>
    </el-form-item>

</template>

<script>
    //字符串形式

    export default {
      name: "text-input",
      props: {
        Info: {
          type: Object,
          default: {},
          required: true
        },
        value: {}
      },

      data: function() {
        // console.log("组件渲染开始 ");
        return {
          input_value: this.value,
          labelWidth: "5rem",
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
          this.input_value = newval;
        }
      },
      computed: {
      
      },
      created: function() {
        let that_labelWidth = "";
        if (this.Info.labelWidth) {
          this.labelWidth = this.Info.labelWidth;
        } else {
          this.labelWidth = this.Info.label.length + 1 + "rem";
        }
      }
    };
</script>

<style scoped>
.sub-title {
  text-align: center;
  color: #606266;
  font-size: 1rem;
}
</style>



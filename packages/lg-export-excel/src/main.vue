<template>
  <div class="lg-export-excel">
  <el-button :loading="loading" :size="size" :type="type" @click="handleClick">{{btnText}}</el-button>
	<el-dialog title="导出" width="30%" :visible.sync="dialogVisible" :before-close="handleClose">
	  <el-form ref="form" :model="form" label-width="80px">
		  <el-form-item label="文件名称:">
		    <el-input v-model="form.name" placeholder="请输入文件名(默认excel-list)"></el-input>
		  </el-form-item>
		  <el-form-item label="文件类型:">
		    <el-radio-group v-model="form.type">
		      <el-radio label="xlsx"></el-radio>
		      <el-radio label="csv"></el-radio>
		    </el-radio-group>
		  </el-form-item>
	  </el-form>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="handleCancel">取 消</el-button>
	    <el-button type="primary" @click="handleDownload">确 定</el-button>
	  </span>
	</el-dialog>
  </div>
</template>

<script>
import { export_json_to_excel } from './Export2Excel';

export default {
  name: 'LgExportExcel',
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
  },
  methods: {
    handleClick() {
      this.dialogVisible = true;
      this.loading = true;
    },
    handleDownload() {
      this.dialogVisible = false;
      let tHeader = [];
      let filterVal = [];
      if (this.filter) {
        filterVal = this.filter;
      } else {
        if (this.data) {
          filterVal = Object.keys(this.data[0]);
        }
      }
      if (this.header) {
        tHeader = this.header;
      } else {
        // const tHeader = ['name', 'province', 'city', 'address', 'date'];
        if (this.data) {
          tHeader = Object.keys(this.data[0]);
        }
      }
      // const filterVal = ['name', 'province', 'city', 'address', 'date'];
      // 取出值
      const data = this.formatJson(filterVal, this.data);
      export_json_to_excel({
        header: tHeader,
        data: data,
        filename: this.form.name,
        bookType: this.form.type,
        autoWidth: false
      });
      this.loading = false;
    },
    handleCancel() {
      this.dialogVisible = false;
      this.loading = false;
    },
    handleClose() {
      this.dialogVisible = false;
      this.loading = false;
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return this.parseTime(v[j]);
        } else {
          return v[j];
        }
      }));
    },
    parseTime(time, cFormat) {
      if (arguments.length === 0) {
        return null;
      }
      const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
      let date;
      if (typeof time === 'object') {
        date = time;
      } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000;
        date = new Date(time);
      }
      const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
      };
      const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ]; }
        if (result.length > 0 && value < 10) {
          value = '0' + value;
        }
        return value || 0;
      });
      return time_str;
    }
  }
};
</script>

<style>

</style>

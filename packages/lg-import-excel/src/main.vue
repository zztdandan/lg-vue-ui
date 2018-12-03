<template>
  <div class="lg-import-excel">
    <input ref="lg-excel-input" class="lg-excel-input" type="file" accept=".xlsx, .xls, .csv" @change="handleClick">
    <el-button :loading="loading" :size="size" :type="type" @click="handleUpload">{{btnText}}</el-button>
  </div>
</template>

<script>
import { import_excel_to_json } from '../../lg-export-excel/src/ExcelUtils';

export default {
  name: 'LgImportExcel',
  props: {
    size: String,
    type: String,
    btnText: {
      type: String,
      default: '导入excel'
    },
    beforeUpload: Function,
    onSuccess: Function
  },
  data() {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null
      }
    };
  },
  methods: {
    handleUpload() {
      this.$refs['lg-excel-input'].click();
    },
    handleClick(e) {
      const files = e.target.files;
      const rawFile = files[0]; // only use files[0]
      if (!rawFile) return;
      this.upload(rawFile);
    },
    upload(rawFile) {
      this.$refs['lg-excel-input'].value = null; // fix can't select the same excel
      if (!this.beforeUpload) {
        this.readerData(rawFile);
        return;
      }
      const before = this.beforeUpload(rawFile);
      if (before) {
        this.readerData(rawFile);
      }
    },
    readerData(rawFile) {
      this.loading = true;
      import_excel_to_json(rawFile, this.generateData);
      this.loading = false;
    },
    generateData({ header, results }) {
      this.excelData.header = header;
      this.excelData.results = results;
      console.log(this.excelData);
      this.onSuccess && this.onSuccess(this.excelData);
    }
  }
};
</script>

<style>
.lg-excel-input{
  display: none;
  z-index: -9999;
}
</style>

<template>
  <div class="lg-import-excel">
    <input ref="lg-excel-input" class="lg-excel-input" type="file" accept=".xlsx, .xls, .csv" @change="handleClick">
    <el-button :loading="loading" :size="size" :type="type" @click="handleUpload">{{btnText}}</el-button>
  </div>
</template>

<script>
import XLSX from 'xlsx';

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
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        // 注册事件
        reader.onload = e => {
          const data = e.target.result;
          const fixedData = this.fixData(data);
          const workbook = XLSX.read(btoa(fixedData), { type: 'base64' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const header = this.getHeaderRow(worksheet);
          // 如果header指定，则第一行被视为数据行; 如果header 未指定，则第一行是标题行，不被视为数据。
          const results = XLSX.utils.sheet_to_json(worksheet);
          this.generateData({ header, results });
          this.loading = false;
          resolve();
        };
        reader.readAsArrayBuffer(rawFile);
      });
    },
    fixData(data) {
      let o = '';
      let l = 0;
      const w = 10240;
      for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    },
    getHeaderRow(sheet) {
      const headers = [];
      const range = XLSX.utils.decode_range(sheet['!ref']);
      let C;
      const R = range.s.r;
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
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

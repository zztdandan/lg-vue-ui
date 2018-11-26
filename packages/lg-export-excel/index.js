import LgExportExcel from './src/main';

/* istanbul ignore next */
LgExportExcel.install = function(Vue) {
  Vue.component(LgExportExcel.name, LgExportExcel);
};

export default LgExportExcel;

import LgImportExcel from './src/main';

/* istanbul ignore next */
LgImportExcel.install = function(Vue) {
  Vue.component(LgImportExcel.name, LgImportExcel);
};

export default LgImportExcel;

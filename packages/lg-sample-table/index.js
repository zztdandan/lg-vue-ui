import LgSampleTable from './src/main';

/* istanbul ignore next */
LgSampleTable.install = function(Vue) {
  Vue.component(LgSampleTable.name, LgSampleTable);
};

export default LgSampleTable;

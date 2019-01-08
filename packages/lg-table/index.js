import LgTable from './src/main';

/* istanbul ignore next */
LgTable.install = function(Vue) {
  Vue.component(LgTable.name, LgTable);
};

export default LgTable;

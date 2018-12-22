import LgSimpleTable from './src/main';

/* istanbul ignore next */
LgSimpleTable.install = function(Vue) {
  Vue.component(LgSimpleTable.name, LgSimpleTable);
};

export default LgSimpleTable;

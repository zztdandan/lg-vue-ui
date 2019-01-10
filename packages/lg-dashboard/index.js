import LgDashboard from './src/main';

/* istanbul ignore next */
LgDashboard.install = function(Vue) {
  Vue.component(LgDashboard.name, LgDashboard);
};

export default LgDashboard;

import LgForm from './src/main';

/* istanbul ignore next */
LgForm.install = function(Vue) {
  Vue.component(LgForm.name, LgForm);
};

export default LgForm;

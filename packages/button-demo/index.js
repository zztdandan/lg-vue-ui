import ButtonDemo from './src/main';

/* istanbul ignore next */
ButtonDemo.install = function(Vue) {
  Vue.component(ButtonDemo.name, ButtonDemo);
};

export default ButtonDemo;

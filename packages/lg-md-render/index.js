import LgMdRender from './src/main';

/* istanbul ignore next */
LgMdRender.install = function(Vue) {
  Vue.component(LgMdRender.name, LgMdRender);
};

export default LgMdRender;

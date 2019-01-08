// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/less/index.less';
import './assets/css/buttons.css';
import demoBlock from './components/demoBlock.vue';
Vue.component('demo-block', demoBlock);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import eExcel from '../packages/lg-export-excel/index.js';
Vue.use(eExcel);
import iExcel from '../packages/lg-import-excel/index.js';

Vue.use(iExcel);

import Lgui from '../src/index.js';
Vue.use(Lgui);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

/* Automatically generated by './build/bin/build-entry.js' */

import ButtonDemo from '../packages/button-demo/index.js';
import LgForm from '../packages/lg-form/index.js';
import LgTable from '../packages/lg-table/index.js';
import LgFormTable from '../packages/lg-form-table/index.js';
import LgSimpleSearchBar from '../packages/lg-simple-search-bar/index.js';
import LgSimpleTable from '../packages/lg-simple-table/index.js';
import LgBuildForm from '../packages/lg-build-form/index.js';
import LgMdRender from '../packages/lg-md-render/index.js';
import LgDashboard from '../packages/lg-dashboard/index.js';

const components = [
  ButtonDemo,
  LgForm,
  LgTable,
  LgFormTable,
  LgSimpleSearchBar,
  LgSimpleTable,
  LgBuildForm,
  LgMdRender,
  LgDashboard
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ButtonDemo,
  LgForm,
  LgTable,
  LgFormTable,
  LgSimpleSearchBar,
  LgSimpleTable,
  LgBuildForm,
  LgMdRender,
  LgDashboard
};

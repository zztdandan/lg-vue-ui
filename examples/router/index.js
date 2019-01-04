import Vue from 'vue';
import Router from 'vue-router';
import test from '@/components/ui/test';
import lgform from '@/components/ui/lgform';
import lgtable from '@/components/ui/lgtable';
import lgexcel from '@/components/ui/lgexcel';
import lgsimpletable from '@/components/ui/lgsimpletable';
import lgbuildform from '@/components/ui/lgbuildform';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/lgform'
    },
    {
      path: '/lgsimpletable',
      name: 'lgsimpletable',
      component: lgsimpletable
    },
    {
      path: '/lgbuildform',
      name: 'lgbuildform',
      component: lgbuildform
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/lgform',
      name: 'lgform',
      component: lgform
    },
    {
      path: '/lgtable',
      name: 'lgtable',
      component: lgtable
    },
    {
      path: '/lgexcel',
      name: 'lgexcel',
      component: lgexcel
    }
  ]
});

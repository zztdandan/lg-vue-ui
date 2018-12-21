import Vue from 'vue';
import Router from 'vue-router';
import test from '@/components/ui/test';
import lgform from '@/components/ui/lgform';
import lgtable from '@/components/ui/lgtable';
import lgexcel from '@/components/ui/lgexcel';

Vue.use(Router);

export default new Router({
  routes: [
    { 
      path: '/',
      redirect: '/lgform'
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

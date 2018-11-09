import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/quickstart',
      component: () => import('../pages/documents/quickStart.vue')
    },
    {
      path: '/badge',
      component: () => import('../pages/components/badgePage.vue')
    },
  ],
});

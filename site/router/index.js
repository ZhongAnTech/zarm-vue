import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index';
import Documents from '../pages/documents/Index';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/documents',
      component: Documents,
      children: [
        {
          path: 'quick-start',
          component: () => import('../pages/documents/quickStart'),
        },
        {
          path: 'badge',
          component: () => import('../pages/components/badgePage'),
        },
      ],
    },
  ],
});

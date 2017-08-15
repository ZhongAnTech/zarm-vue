import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/input',
      component: () => import('../components/inputPage.vue'),
    },
    {
      path: '/checkbox',
      component: () => import('../components/checkboxPage.vue'),
    },
    {
      path: '/icon',
      component: () => import('../components/iconPage.vue'),
    },
  ],
});

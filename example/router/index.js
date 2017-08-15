import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../components/index.vue'),
    },
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
    {
      path: '/button',
      component: () => import('../components/buttonPage.vue'),
    },
    {
      path: '/spinner',
      component: () => import('../components/spinnerPage.vue'),
    },
    {
      path: '/cell',
      component: () => import('../components/cellPage.vue'),
    },
  ],
});

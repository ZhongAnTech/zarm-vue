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
    {
      path: '/message',
      component: () => import('../components/messagePage.vue'),
    },
    {
      path: '/radio',
      component: () => import('../components/radioPage.vue'),
    },
    {
      path: '/badge',
      component: () => import('../components/badgePage.vue'),
    },
    {
      path: '/tabs',
      component: () => import('../components/tabsPage.vue'),
    },
    {
      path: '/stepper',
      component: () => import('../components/stepperPage.vue'),
    },
  ],
});

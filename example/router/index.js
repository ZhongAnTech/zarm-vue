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
    {
      path: '/switch',
      component: () => import('../components/switchPage.vue'),
    },
    {
      path: '/toast',
      component: () => import('../components/toastPage.vue'),
    },
    {
      path: '/popup',
      component: () => import('../components/popupPage.vue'),
    },
    {
      path: '/uploader',
      component: () => import('../components/uploaderPage.vue'),
    },
    {
      path: '/actionsheet',
      component: () => import('../components/actionsheetPage.vue'),
    },
    {
      path: '/modal',
      component: () => import('../components/modalPage.vue'),
    },
    {
      path: '/swipeaction',
      component: () => import('../components/swipeactionPage.vue'),
    },
    {
      path: '/swipe',
      component: () => import('../components/swipePage.vue'),
    },
    {
      path: '/picker',
      component: () => import('../components/pickerPage.vue'),
    },
    {
      path: '/progress',
      component: () => import('../components/progressPage.vue'),
    },
    {
      path: '/calendar',
      component: () => import('../components/calendarPage.vue'),
    },
  ],
});

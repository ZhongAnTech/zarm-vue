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
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/inputPage.vue')
      },
    },
    {
      path: '/checkbox',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/checkboxPage.vue')
      },
    },
    {
      path: '/icon',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/iconPage.vue')
      },
    },
    {
      path: '/button',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/buttonPage.vue')
      },
    },
    {
      path: '/spinner',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/spinnerPage.vue')
      },
    },
    {
      path: '/cell',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/cellPage.vue')
      },
    },
    {
      path: '/message',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/messagePage.vue')
      },
    },
    {
      path: '/radio',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/radioPage.vue')
      },
    },
    {
      path: '/badge',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/badgePage.vue')
      },
    },
    {
      path: '/tabs',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/tabsPage.vue')
      },
    },
    {
      path: '/stepper',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/stepperPage.vue')
      },
    },
    {
      path: '/switch',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/switchPage.vue')
      },
    },
    {
      path: '/toast',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/toastPage.vue')
      },
    },
    {
      path: '/popup',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/popupPage.vue')
      },
    },
    {
      path: '/uploader',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/uploaderPage.vue')
      },
    },
    {
      path: '/actionsheet',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/actionsheetPage.vue')
      },
    },
    {
      path: '/modal',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/modalPage.vue')
      },
    },
    {
      path: '/swipeaction',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/swipeactionPage.vue')
      },
    },
    {
      path: '/swipe',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/swipePage.vue')
      },
    },
    {
      path: '/picker',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/pickerPage.vue')
      },
    },
    {
      path: '/progress',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/progressPage.vue')
      },
    },
    {
      path: '/noticebar',
      component: () => import('./bundle.vue'),
      meta: {
        mRender: () => import('../components/noticeBarPage.vue')
      },
    },
  ],
});

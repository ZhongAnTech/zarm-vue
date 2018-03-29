import Vue from 'vue';
import Router from 'vue-router';
import Bundle from './bundle';
import Index from '../components/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/input',
      component: Bundle,
      meta: {
        mRender: () => import('../components/inputPage.vue')
      },
    },
    {
      path: '/checkbox',
      component: Bundle,
      meta: {
        mRender: () => import('../components/checkboxPage.vue')
      },
    },
    {
      path: '/icon',
      component: Bundle,
      meta: {
        mRender: () => import('../components/iconPage.vue')
      },
    },
    {
      path: '/button',
      component: Bundle,
      meta: {
        mRender: () => import('../components/buttonPage.vue')
      },
    },
    {
      path: '/spinner',
      component: Bundle,
      meta: {
        mRender: () => import('../components/spinnerPage.vue')
      },
    },
    {
      path: '/cell',
      component: Bundle,
      meta: {
        mRender: () => import('../components/cellPage.vue')
      },
    },
    {
      path: '/message',
      component: Bundle,
      meta: {
        mRender: () => import('../components/messagePage.vue')
      },
    },
    {
      path: '/radio',
      component: Bundle,
      meta: {
        mRender: () => import('../components/radioPage.vue')
      },
    },
    {
      path: '/badge',
      component: Bundle,
      meta: {
        mRender: () => import('../components/badgePage.vue')
      },
    },
    {
      path: '/tabs',
      component: Bundle,
      meta: {
        mRender: () => import('../components/tabsPage.vue')
      },
    },
    {
      path: '/stepper',
      component: Bundle,
      meta: {
        mRender: () => import('../components/stepperPage.vue')
      },
    },
    {
      path: '/switch',
      component: Bundle,
      meta: {
        mRender: () => import('../components/switchPage.vue')
      },
    },
    {
      path: '/toast',
      component: Bundle,
      meta: {
        mRender: () => import('../components/toastPage.vue')
      },
    },
    {
      path: '/popup',
      component: Bundle,
      meta: {
        mRender: () => import('../components/popupPage.vue')
      },
    },
    {
      path: '/uploader',
      component: Bundle,
      meta: {
        mRender: () => import('../components/uploaderPage.vue')
      },
    },
    {
      path: '/slider',
      component: Bundle,
      meta: {
        mRender: () => import('../components/sliderPage.vue')
      },
    },
    {
      path: '/actionsheet',
      component: Bundle,
      meta: {
        mRender: () => import('../components/actionsheetPage.vue')
      },
    },
    {
      path: '/modal',
      component: Bundle,
      meta: {
        mRender: () => import('../components/modalPage.vue')
      },
    },
    {
      path: '/swipeaction',
      component: Bundle,
      meta: {
        mRender: () => import('../components/swipeactionPage.vue')
      },
    },
    {
      path: '/swipe',
      component: Bundle,
      meta: {
        mRender: () => import('../components/swipePage.vue')
      },
    },
    {
      path: '/picker',
      component: Bundle,
      meta: {
        mRender: () => import('../components/pickerPage.vue')
      },
    },
    {
      path: '/datepicker',
      component: Bundle,
      meta: {
        mRender: () => import('../components/datePickerPage.vue')
      },
    },
    {
      path: '/calendar',
      component: Bundle,
      meta: {
        mRender: () => import('../components/calendarPage.vue')
      },
    },
    {
      path: '/progress',
      component: Bundle,
      meta: {
        mRender: () => import('../components/progressPage.vue')
      },
    },
    {
      path: '/noticebar',
      component: Bundle,
      meta: {
        mRender: () => import('../components/noticeBarPage.vue')
      },
    },
    {
      path: '/panel',
      component: Bundle,
      meta: {
        mRender: () => import('../components/panelPage.vue')
      },
    },
    {
      path: '/pull',
      component: Bundle,
      meta: {
        mRender: () => import('../components/pullPage.vue')
      },
    },
    {
      path: '/accordion',
      component: Bundle,
      meta: {
        mRender: () => import('../components/accordion.vue')
      },
    },
  ],
});

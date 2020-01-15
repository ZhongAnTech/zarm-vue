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
      path: '/keyboard',
      component: Bundle,
      meta: {
        mRender: () => import('../components/keyboardPage.vue')
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
      path: '/activity-indicator',
      component: Bundle,
      meta: {
        mRender: () => import('../components/activityIndicatorPage.vue')
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
      path: '/popper',
      component: Bundle,
      meta: {
        mRender: () => import('../components/popperPage.vue')
      },
    },
    {
      path: '/file-picker',
      component: Bundle,
      meta: {
        mRender: () => import('../components/filePickerPage.vue')
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
      path: '/action-sheet',
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
      path: '/swipe-action',
      component: Bundle,
      meta: {
        mRender: () => import('../components/swipeactionPage.vue')
      },
    },
    {
      path: '/carousel',
      component: Bundle,
      meta: {
        mRender: () => import('../components/carouselPage.vue')
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
      path: '/stack-picker',
      component: Bundle,
      meta: {
        mRender: () => import('../components/stackPickerPage.vue')
      },
    },
    {
      path: '/date-picker',
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
      path: '/notice-bar',
      component: Bundle,
      meta: {
        mRender: () => import('../components/noticeBarPage.vue')
      },
    },
    {
      path: '/nav-bar',
      component: Bundle,
      meta: {
        mRender: () => import('../components/navBarPage.vue')
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
      path: '/collapse',
      component: Bundle,
      meta: {
        mRender: () => import('../components/collapsePage.vue')
      },
    },
    {
      path: '/search-bar',
      component: Bundle,
      meta: {
        mRender: () => import('../components/searchBarPage.vue')
      },
    },
    {
      path: '/tab-bar',
      component: Bundle,
      meta: {
        mRender: () => import('../components/tabBarPage.vue')
      },
    },
    {
      path: '/locale-provider',
      component: Bundle,
      meta: {
        mRender: () => import('../components/localeProviderPage.vue')
      },
    },
  ],
});

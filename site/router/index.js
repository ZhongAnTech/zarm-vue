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
          component: () => import('../pages/documents/QuickStart'),
        },
        {
          path: 'change-log',
          component: () => import('../pages/documents/ChangeLog'),
        },
        {
          path: 'badge',
          component: () => import('../pages/components/BadgePage'),
        },
        {
          path: 'input',
          component: () => import('../pages/components/InputPage'),
        },
        {
          path: 'action-sheet',
          component: () => import('../pages/components/ActionSheetPage'),
        },
        {
          path: 'button',
          component: () => import('../pages/components/ButtonPage'),
        },
        {
          path: 'calendar',
          component: () => import('../pages/components/CalendarPage'),
        },
        {
          path: 'carousel',
          component: () => import('../pages/components/CarouselPage'),
        },
        {
          path: 'cell',
          component: () => import('../pages/components/CellPage'),
        },
        {
          path: 'checkbox',
          component: () => import('../pages/components/CheckBoxPage'),
        },
        {
          path: 'collapse',
          component: () => import('../pages/components/CollapsePage'),
        },
        {
          path: 'panel',
          component: () => import('../pages/components/PanelPage'),
        },
        {
          path: 'date-picker',
          component: () => import('../pages/components/DatePickerPage'),
        },
        {
          path: 'file-picker',
          component: () => import('../pages/components/FilePickerPage'),
        },
        {
          path: 'keyboard',
          component: () => import('../pages/components/KeyBoardPage'),
        },
        {
          path: 'icon',
          component: () => import('../pages/components/IconPage'),
        },
        {
          path: 'message',
          component: () => import('../pages/components/MessagePage'),
        },
        {
          path: 'modal',
          component: () => import('../pages/components/ModalPage'),
        },
        {
          path: 'notice-bar',
          component: () => import('../pages/components/NoticeBarPage'),
        },
        {
          path: 'nav-bar',
          component: () => import('../pages/components/NavBarPage'),
        },
        {
          path: 'picker',
          component: () => import('../pages/components/PickerPage'),
        },
        {
          path: 'popup',
          component: () => import('../pages/components/PopupPage'),
        },
        {
          path: 'progress',
          component: () => import('../pages/components/ProgressPage'),
        },
        {
          path: 'pull',
          component: () => import('../pages/components/PullPage'),
        },
        {
          path: 'radio',
          component: () => import('../pages/components/RadioPage'),
        },
        {
          path: 'search-bar',
          component: () => import('../pages/components/SearchBarPage'),
        },
        {
          path: 'slider',
          component: () => import('../pages/components/SliderPage'),
        },
        {
          path: 'activity-indicator',
          component: () => import('../pages/components/ActivityIndicatorPage'),
        },
        {
          path: 'stepper',
          component: () => import('../pages/components/StepperPage'),
        },
        {
          path: 'swipe-action',
          component: () => import('../pages/components/SwipeActionPage'),
        },
        {
          path: 'switch',
          component: () => import('../pages/components/SwitchPage'),
        },
        {
          path: 'tabs',
          component: () => import('../pages/components/TabsPage'),
        },
        {
          path: 'toast',
          component: () => import('../pages/components/ToastPage'),
        },
        {
          path: 'locale-provider',
          component: () => import('../pages/components/LocaleProviderPage'),
        },
      ],
    },
  ],
});

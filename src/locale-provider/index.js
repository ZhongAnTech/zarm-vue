import LocaleProvider from './src/locale-provider';

/* istanbul ignore next */
LocaleProvider.install = function (Vue) {
  Vue.component(LocaleProvider.name, LocaleProvider);
};

export default LocaleProvider;

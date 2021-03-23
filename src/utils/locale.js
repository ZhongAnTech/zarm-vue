export default {
  getLocaleByComponent(localeProvider, name = '', key) {
    if (!localeProvider) return '';
    const currentLang = localeProvider.lang;
    if (currentLang) {
      const currentProvider = localeProvider.locale;
      return currentProvider[name][key];
    }
    return '';
  },
};

export default {
  getLocaleByComponent(localeProvider, name = '', key) {
    if (!localeProvider) return '';
    const currentLang = localeProvider.lang;
    if (currentLang) {
      const currentProvider = localeProvider.locale[currentLang];
      return currentProvider[name][key];
    }
    return '';
  },
};

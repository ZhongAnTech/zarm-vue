export default {
  getLocaleByComponent(localeProvider: any, name: string = '', key: string) {
    if (!localeProvider) return '';
    const currentLang = localeProvider.lang;
    if (currentLang) {
      const currentProvider = localeProvider.locale[currentLang];
      return currentProvider[name][key];
    }
    return '';
  },
};

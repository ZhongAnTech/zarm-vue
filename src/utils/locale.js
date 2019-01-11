export default {
  getLocaleByComponent($component, name = '', key) {
    if (!$component.localeProvider) return '';
    const componentProvider = $component.localeProvider[name];
    if (componentProvider) {
      return componentProvider[key];
    }
    return '';
  },
};

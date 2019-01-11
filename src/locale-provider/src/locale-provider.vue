<template>
  <div :class="{[`${prefixCls}`]: true}">
    <slot></slot>
  </div>
</template>
<script>
import defaultLocale from './index';

export default {
  name: 'zaLocaleProvider',
  props: {
    prefixCls: {
      type: String,
      default: 'za-locale-provider',
    },
    locale: {
      type: Object,
      default: () => defaultLocale,
    },
    lang: {
      type: String,
      default: 'zh_CN',
    },
  },
  provide() {
    return {
      localeProvider: this.locale[this.lang],
    };
  },
};
</script>


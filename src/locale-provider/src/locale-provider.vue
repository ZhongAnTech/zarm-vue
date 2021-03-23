<template>
  <div :class="{[`${prefixCls}`]: true}">
    <slot></slot>
  </div>
</template>
<script>
import { provide, reactive, toRefs } from 'vue';
import defaultLocale from './default';

export default {
  name: 'zaLocaleProvider',
  props: {
    prefixCls: {
      type: String,
      default: 'za-locale-provider',
    },
    lang: {
      type: String,
      default: 'zh_CN',
    },
    locale: {
      type: Object,
      default: () => defaultLocale,
    },
  },
  setup(props) {
    const { locale, lang } = toRefs(props);
    const localeConfig = reactive({
      locale,
      lang,
    });

    provide('localeProvider', localeConfig);
  },
};
</script>


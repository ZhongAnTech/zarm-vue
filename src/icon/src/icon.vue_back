<template lang="html">
  <i :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}-${type}`]: !!type,
    [`${prefixCls}--${theme}`]: !!theme,
  }' @click='handleClick'></i>
</template>

<script>
import { defaultThemeValidator } from '@/utils/validator';

export default {
  name: 'zaIcon',
  props: {
    prefixCls: {
      type: String,
      default: 'za-icon',
    },
    type: String,
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: null,
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

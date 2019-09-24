<template lang="html">
  <i :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}-${type}`]: !!type,
    [`${prefixCls}--${theme}`]: !!theme,
  }' @click='handleClick'>
    <svg
      v-if='tag === "symbol"'
      width='1em'
      height='1em'
      fill='currentColor'
      viewBox='0 0 32 32'
    >
      <use :xlink:href='`#${type}`' />
    </svg>
  </i>
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
    tag: String,
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

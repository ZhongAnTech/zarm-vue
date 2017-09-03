<template lang="html">
  <span :class='{
    [`${prefixCls}`]: true,
    [`theme-${theme}`]: !!theme,
    [`shape-${shape}`]: !!shape,
    }'>
    <slot></slot>
    <sup :class='{
      [`${prefixCls}-sup`]: true,
      [`${prefixCls}-sup-up`]: sup,
      }'
      @click='supClick'>
      {{text}}
      <slot name='text'></slot>
    </sup>
  </span>
</template>

<script>
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

export default {
  name: 'zaBadge',
  props: {
    prefixCls: {
      type: String,
      default: 'za-badge',
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'error',
    },
    shape: {
      type: String,
      validator: enumGenerator(['dot', 'radius', 'round', 'circle']),
      default: null,
    },
    sup: {
      type: Boolean,
      default: false,
    },
    text: [String, Number],
  },
  methods: {
    supClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<template lang="html">
  <div :class='{
   [`${prefixCls}`]: true,
   [`${prefixCls}--${theme}`]: !!theme
 }' :style='styleCls' v-show="visible" ref='tooltip'>
    <div :class='`${prefixCls}__inner`'>{{message}}</div>
    <slot></slot>
  </div>
</template>

<script>
import { defaultThemeValidator } from '@/utils/validator';

export default {
  name: 'zaTooltip',
  props: {
    prefixCls: {
      type: String,
      default: 'za-tooltip',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'default',
    },
    styleCls: {},
    message: {
      type: [String, Number],
    },
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    },
  },
};
</script>

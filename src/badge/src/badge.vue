<template lang="html">
  <span :class='{
    [`${prefixCls}`]: true,
    [`${className}`]: true,
    [`${prefixCls}--${shape}`]: !!shape,
    [`${prefixCls}--${theme}`]: !!theme,
    }'>
    <slot></slot>
    <sup :class='{
      [`${prefixCls}__sup`]: true,
      [`${prefixCls}__sup--up`]: sup,
      }'
      @click='supClick'>
      {{text}}
      <slot name='text'></slot>
    </sup>
  </span>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { defaultThemeValidator, enumGenerator } from '../../utils/validator';

@Component({
  name: 'zaBadge',
  props: {
    prefixCls: {
      type: String,
      default: 'za-badge',
    },
    className: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'error',
    },
    shape: {
      type: String,
      validator: enumGenerator([
        'dot',
        'rect',
        'radius',
        'round',
        'circle',
        'leaf',
      ]),
      default: null,
    },
    sup: {
      type: Boolean,
      default: false,
    },
    text: [String, Number],
  },
})
class Badge extends Vue {
  supClick(event) {
    this.$emit('click', event);
  }
}
export default Badge;
</script>

<template lang="html">
  <a :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}--${theme}`]: !!theme,
    [`${prefixCls}--${shape}`]: !!shape,
    [`${prefixCls}--${size}`]: !!size,
    [`${prefixCls}--block`]: !!block,
    [`${prefixCls}--bordered`]: !!ghost,
    [`${prefixCls}--disabled`]:  !!disabled,
  }' @click='handleClick'>
    <span :class='`${prefixCls}__content`'>
      <za-activity-indicator class="rotate360" v-if='loading'/>
      <slot name='icon' v-else></slot>
      <span>
        <slot></slot>
      </span>
    </span>
  </a>
</template>

<script>
import zaActivityIndicator from '@/activity-indicator';
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

export default {
  name: 'zaButton',
  components: {
    zaActivityIndicator,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-button',
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'default',
    },
    size: {
      type: String,
      validator: enumGenerator(['xl', 'lg', 'sm', 'xs']),
      default: null,
    },
    shape: {
      type: String,
      validator: enumGenerator(['rect', 'radius', 'round', 'circle']),
      default: 'radius',
    },
    block: {
      type: Boolean,
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
  },
};
</script>

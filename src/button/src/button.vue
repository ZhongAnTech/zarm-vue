<template lang="html">
  <a :class='{
    [`${prefixCls}`]: true,
    [`theme-${theme}`]: !!theme,
    [`size-${size}`]: !!size,
    [`shape-${shape}`]: !!shape,
    block,
    bordered,
    active,
    focus,
    disabled,
  }' @click='handleClick'>
    <span :class='`${prefixCls}-content`'>
      <za-activity-indicator class="rotate360" v-if='loading'/>
      <slot name='icon' v-else></slot>
      <span>
        <slot></slot>
      </span>
    </span>
  </a>
</template>

<script>
// necessary when used alone
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
      validator: enumGenerator(['radius', 'round', 'circle']),
      default: null,
    },
    block: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    focus: {
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
  data() {
    return {

    };
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

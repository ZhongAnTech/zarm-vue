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
      <za-spinner class="rotate360" v-if='loading'/>
      <slot name='icon' v-else></slot>
      <span>
        <slot></slot>
      </span>
    </span>
  </a>
</template>

<script>
// necessary when used alone
import zaSpinner from '@/spinner';

export default {
  name: 'zaButton',
  components: {
    zaSpinner,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-button',
    },
    theme: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
      },
      default: 'default',
    },
    size: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['xl', 'lg', 'sm', 'xs'].indexOf(v) >= 0;
      },
      default: null,
    },
    shape: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['radius', 'round', 'circle'].indexOf(v) >= 0;
      },
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

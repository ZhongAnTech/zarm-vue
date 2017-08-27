<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    [`theme-${theme}`]: !!theme,
    [`size-${size}`]: !!size,
  }' @click='handleClick' v-if='currentVisible'>
    <div :class='`${prefixCls}-header`'>
      <div :class='`${prefixCls}-icon`' v-if='icon'>
        <za-icon :type='icon'></za-icon>
      </div>
    </div>
    <div :class='`${prefixCls}-body`'>
      <slot></slot>
    </div>
    <div :class='`${prefixCls}-footer`' v-if='closable || hasArrow'>
      <za-icon type="arrow-right" v-if='hasArrow'></za-icon>
      <za-icon type="wrong" v-if='closable' @click='wrongIconClick'></za-icon>
    </div>
  </div>
</template>

<script>
import zaIcon from '../../icon';

export default {
  name: 'zaMessage',
  components: {
    zaIcon,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-message',
    },
    theme: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
      },
      default: 'primary',
    },
    size: {},
    closable: {
      type: Boolean,
      default: false,
    },
    hasArrow: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentVisible: this.visible,
    };
  },
  watch: {
    visible(val) {
      if (val !== this.currentVisible) return;
      this.currentVisible = val;
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
    wrongIconClick() {
      this.currentVisible = false;
      this.$emit('update:visible', false);
    },
  },
};
</script>

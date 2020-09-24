<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}--${theme}`]: !!theme,
    [`${prefixCls}--${size}`]: !!size,
  }' v-if='currentVisible'>
    <div :class='`${prefixCls}__header`'>
      <div :class='`${prefixCls}__icon`' v-if='$slots.icon || icon'>
        <slot name='icon'></slot>
        <za-icon :type='icon' v-if='!$slots.icon'></za-icon>
      </div>
    </div>
    <div :class='`${prefixCls}__body`'>
      <slot></slot>
    </div>
    <div :class='`${prefixCls}__footer`' v-if='closable || hasArrow'>
      <za-icon type="arrow-right" v-if='hasArrow'></za-icon>
      <za-icon type="wrong" v-if='closable' @click='wrongIconClick'></za-icon>
    </div>
  </div>
</template>

<script>
import { defaultThemeValidator } from '@/utils/validator';
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
      validator: defaultThemeValidator,
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
    wrongIconClick() {
      this.currentVisible = false;
      this.$emit('update:visible', false);
    },
  },
};
</script>

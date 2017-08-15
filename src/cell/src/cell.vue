<template lang="html">
  <div :class="{
    [this.prefixCls]: true,
    disabled,
    [`theme-${theme}`]: !!theme,
    'is-link': !disabled && !!isLink,
    'has-icon': !!hasIcon,
    'has-arrow': hasArrow,
    }">
    <div :class="`${prefixCls}-inner`">
      <div :class='`${prefixCls}-header`'>
        <slot name='icon'></slot>
      </div>
      <div :class='`${prefixCls}-body`'>
        <div :class='`${prefixCls}-title`' v-if='!!title'>{{title}}</div>
        <slot name='title'></slot>
        <div :class='`${prefixCls}-content`'>
          <slot></slot>
        </div>
      </div>
      <div :class='`${prefixCls}-footer`'>
        <slot name='description'></slot>
      </div>
      <div :class='`${prefixCls}-arrow`' v-if='hasArrow'/>
    </div>
    <div :class='`${prefixCls}-help`' v-if='!!help'>
      {{help}}
    </div>
    <slot name='help'></slot>
</div>
</template>

<script>
export default {
  name: 'zaCell',
  props: {
    prefixCls: {
      type: String,
      default: 'za-cell',
    },
    hasArrow: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    help: String,
    isLink: {
      type: Boolean,
      default: false,
    },
    theme: String,
    title: String,
  },
  data() {
    return {

    };
  },
  computed: {
    hasIcon() {
      return this.$slots && this.$slots.icon && this.$slots.icon.length > 0;
    },
  },
};
</script>

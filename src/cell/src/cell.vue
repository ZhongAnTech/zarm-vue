<template lang="html">
  <div :class="{
    [this.prefixCls]: true,
    disabled,
    [`theme-${theme}`]: !!theme,
    'is-link': !disabled && !!isLink,
    'has-icon': !!hasIcon,
    'has-arrow': hasArrow,
    }" @click='handleClick'>
    <div :class="`${prefixCls}-inner`">
      <div :class='`${prefixCls}-header`'>
        <div :class='`${prefixCls}-icon`' v-if='$slots.icon'>
          <slot name='icon'></slot>
        </div>
      </div>
      <div :class='`${prefixCls}-body`'>
        <div :class='`${prefixCls}-title`' v-if='$slots.title || title'>
          <slot name='title'></slot>
          <template v-if="!$slots.title">{{title}}</template>
        </div>
        <div :class='`${prefixCls}-content`'>
          <slot></slot>
        </div>
      </div>
      <div :class='`${prefixCls}-footer`'>
        <slot name='description'></slot>
      </div>
      <div :class='`${prefixCls}-arrow`' v-if='hasArrow'/>
    </div>
    <div :class='`${prefixCls}-help`' v-if='$slots.help || help'>
      <slot name='help'></slot>
      <template v-if="!$slots.help">{{help}}</template>
    </div>
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
    isLink: {
      type: Boolean,
      default: false,
    },
    theme: String,
    title: String,
    help: String,
  },
  computed: {
    hasIcon() {
      return this.$slots && this.$slots.icon && this.$slots.icon.length > 0;
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

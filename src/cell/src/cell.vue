<template>
  <div :class="{
    [`${prefixCls}`]: true,
    [`${prefixCls}--disabled`]: !!disabled,
    [`${prefixCls}--${theme}`]: !!theme,
    [`${prefixCls}--is-link`]: !disabled && !!isLink,
    [`${prefixCls}--has-icon`]: !!hasIcon,
    [`${prefixCls}--has-arrow`]: hasArrow,
    }">
    <div :class="`${prefixCls}__inner`">
      <div :class='`${prefixCls}__header`'>
        <div
          :class='`${prefixCls}__icon`'
          v-if='$slots.icon'
        >
          <slot name='icon'></slot>
        </div>
      </div>
      <div :class='`${prefixCls}__body`'>
        <div
          :class='`${prefixCls}__title`'
          v-if='$slots.title || title'
        >
          <slot name='title'></slot>
          <template v-if="!$slots.title">{{title}}</template>
        </div>
        <div :class='`${prefixCls}__content`'>
          <slot></slot>
        </div>
      </div>
      <div
        :class='`${prefixCls}__footer`'
        v-if='$slots.description || description'
      >
        <slot name='description'></slot>
        <template v-if="!$slots.description">
          <span>{{description}}</span>
        </template>
      </div>
      <div
        :class='`${prefixCls}__arrow`'
        v-if='hasArrow'
      />
    </div>
    <div
      :class='`${prefixCls}__help`'
      v-if='$slots.help || help'
    >
      <slot name='help'></slot>
      <template v-if="!$slots.help">
        <span>{{help}}</span>
      </template>
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
    description: String,
  },
  computed: {
    hasIcon() {
      return this.$slots && this.$slots.icon && this.$slots.icon().length > 0;
    },
  },
};
</script>

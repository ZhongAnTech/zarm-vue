<template lang="html">
  <div :class="{
    [this.prefixCls]: true,
    disabled,
    [`theme-${theme}`]: !!theme,
    'is-link': !disabled && !!isLink,
    'has-icon': !!icon,
    'has-arrow': hasArrow,
    }">
    <div :class="`${prefixCls}-inner`">
      <div :class='`${prefixCls}-header`'>
        <div :class='`${prefixCls}-icon`' v-if='!!icon'>{{icon}}</div>
      </div>
      <div :class='`${prefixCls}-body`'>
        <div :class='`${prefixCls}-title`' v-if='!!title'>{{title}}</div>
        <div :class='`${prefixCls}-content`'>
          <slot></slot>
        </div>
      </div>
      <div :class='`${prefixCls}-footer`'>
        {{description}}
      </div>
      <div :class='`${prefixCls}-arrow`' v-if='hasArrow'/>
    </div>
    <div :class='`${prefixCls}-help`' v-if='!!help'>
      {{help}}
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
    description: String,
    help: String,
    isLink: {
      type: Boolean,
      default: false,
    },
    theme: String,
    title: String,
    icon: String,
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

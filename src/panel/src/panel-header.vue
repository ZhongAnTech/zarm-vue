<template>
  <div :class='`${prefixCls}__header`'>
    <div :class='`${prefixCls}__title`' v-if='$slots.title || title'>
      <slot name='title'></slot>
      <template v-if="!$slots.title">{{title}}</template>
    </div>
    <div :class='`${prefixCls}__more`' v-if='$slots.more || more'>
      <slot name='more'></slot>
      <template v-if="!$slots.more">{{more}}</template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zaPanelHeader',
  props: {
    prefixCls: {
      type: String,
      default: 'za-panel',
    },
    title: {},
    more: {},
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

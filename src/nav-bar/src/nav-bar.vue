<template lang="html">
  <div :class='`${prefixCls}`'>
    <div :class="`${prefixCls}__left`">
      <slot name="left"></slot>
    </div>
    <div :class='`${prefixCls}__title`'>
      <slot name="title"></slot>
    </div>
    <div :class='`${prefixCls}__right`'>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'zaNavBar',
  props: {
    prefixCls: {
      type: String,
      default: 'za-navbar',
    },
  },
  data() {
    return {
    };
  },
};
</script>

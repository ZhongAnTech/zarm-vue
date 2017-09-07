<template lang="html">
  <div :class='`${prefixCls}-item`'>
    <slot></slot>
  </div>
</template>

<script>
// let itemId = 0;

export default {
  name: 'zaSwipeItem',
  props: {
    prefixCls: {
      type: String,
      default: 'za-swipe', // naming different from zarm
    },
  },
};
</script>

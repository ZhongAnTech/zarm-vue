<template>
  <div :class='`${prefixCls}__item`'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaCarouselItem',
  props: {
    prefixCls: {
      type: String,
      default: 'za-carousel', // naming different from zarm
    },
  },
};
</script>

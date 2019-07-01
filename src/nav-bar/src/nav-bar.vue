<template>
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

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'zaNavBar',
  props: {
    prefixCls: {
      type: String,
      default: 'za-navbar',
    },
  },
})
class NavBar extends Vue {}
export default NavBar;
</script>

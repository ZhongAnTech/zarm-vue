<template lang="html">
  <div :class='prefixCls'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaCellIcon',
  props: {
    prefixCls: {
      type: String,
      default: 'za-cell-icon',
    },
  },
};
</script>

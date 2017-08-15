<template lang="html">
  <div :class='prefixCls'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaCellHelp',
  props: {
    prefixCls: {
      type: String,
      default: 'za-cell-help',
    },
  },
};
</script>

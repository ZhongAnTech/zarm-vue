<template lang="html">
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaPanelMore',
  props: {
    prefixCls: {
      type: String,
      default: 'za-panel-more',
    },
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

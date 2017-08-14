<template lang="html">
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaPanelTitle',
  props: {
    prefixCls: {
      type: String,
      default: 'za-panel-title',
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

<template lang="html">
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaPanelHeader',
  props: {
    prefixCls: {
      type: String,
      default: 'za-panel-header',
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

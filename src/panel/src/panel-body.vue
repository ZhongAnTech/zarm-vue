<template lang="html">
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaPanelBody',
  props: {
    prefixCls: {
      type: String,
      default: 'za-panel-body',
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

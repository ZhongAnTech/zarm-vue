<template lang="html">
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaPanelFooter',
  props: {
    prefixCls: {
      type: String,
      default: 'za-panel-footer',
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

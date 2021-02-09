<template>
  <div :class="`${prefixCls}__body`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaPanelBody',
  props: {
    prefixCls: {
      type: String,
      default: 'za-panel',
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

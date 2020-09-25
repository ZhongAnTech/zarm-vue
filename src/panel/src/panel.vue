<template>
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaPanel',
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

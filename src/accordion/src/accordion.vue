<template lang="html">
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaAccordion',
  components: {
    // zaPopup
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-accordion',
    },
    activeTag: {
      type: Array,
      default: () => [],
    },
    defaultActiveTag: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onchange(index) {
      this.$emit('change', index);
    },
  },
};
</script>

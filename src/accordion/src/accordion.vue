<template lang="html">
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaAccordion',
  props: {
    prefixCls: {
      type: String,
      default: 'za-accordion',
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
  data() {
    return {
      activeTag: [],
    };
  },
  methods: {
    onchange(index) {
      const { multiple } = this;
      this.$emit('change', index);
      if (multiple) {
        const accordionItemRefs = this.$children;
        const aiTags = [];
        accordionItemRefs.forEach(item => {
          if (item.$options.name === 'zaAccordionItem') {
            aiTags.push(item.aiTag);
          }
        });
        this.activeTag = aiTags.filter(i => i === index);
      }
    },
  },
};
</script>

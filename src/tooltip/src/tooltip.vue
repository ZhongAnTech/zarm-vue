<template lang="html">
  <div :class='{
   [`${prefixCls}`]: true,
   [`theme-${theme}`]: !!theme
 }' :style='styleCls' v-if="currentVisible" ref='tooltip'>
    <div :class='`${prefixCls}-inner`'>{{message}}</div>
    <slot></slot>
  </div>
</template>

<script>
  import { defaultThemeValidator } from '@/utils/validator';

  export default {
    name: 'zaTooltip',
    props: {
      prefixCls: {
        type: String,
        default: 'za-tooltip',
      },
      visible: {
        type: Boolean,
        default: false,
      },
      theme: {
        type: String,
        validator: defaultThemeValidator,
        default: 'default',
      },
      message: {
        type: [String, Number],
      },
    },
    data() {
      return {
        currentVisible: this.visible,
        styleCls: undefined,
      };
    },
    watch: {
      currentVisible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
        this.show();
      },
    },
    methods: {
      show() {
        this.$nextTick(() => {
          if (this.$refs.tooltip && !this.styleCls) {
            const rect = this.$refs.tooltip.getBoundingClientRect();
            const scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
            const top = rect.top + scrollTop;
            this.styleCls = {
              left: `${rect.left}px`,
              top: `${top}px`,
              width: `${rect.width}`,
            };
          }
        });
      },
      close() {
        this.currentVisible = false;
      },
    },
  };
</script>
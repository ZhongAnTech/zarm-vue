<template lang="html">
  <div
    v-if='visible'
    :class='{
      [`${prefixCls}`]: true,
      [type]: !!type,
    }'></div>
</template>

<script>
export default {
  name: 'zaMask',
  props: {
    prefixCls: {
      type: String,
      default: 'za-mask',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['transparent', 'normal'].indexOf(v) >= 0;
      },
      default: 'normal',
    },
  },
  methods: {
  },
};
</script>

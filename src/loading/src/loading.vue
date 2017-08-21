<template lang="html">
  <za-toast :prefixCls='prefixCls' :visible.sync='currentVisible' :duration='0'>
    <za-spinner size='lg' class='rotate360' />
  </za-toast>
</template>

<script>
import zaToast from '../../toast';
import zaSpinner from '../../spinner';

export default {
  name: 'zaLoading',
  components: {
    zaToast,
    zaSpinner,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-loading',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentVisible: {
      get() {
        return this.visible;
      },

      set(val) {
        this.$emit('update:visible', val);
      },
    },
  },
};
</script>

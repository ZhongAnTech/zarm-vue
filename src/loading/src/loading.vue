<template lang="html">
  <za-toast :prefixCls='prefixCls' v-model:visible='currentVisible' :duration='0' @close="onClose">
    <za-activity-indicator size='lg' class='rotate360' />
  </za-toast>
</template>

<script>
import zaToast from '@/toast';
import zaActivityIndicator from '@/activity-indicator';

export default {
  name: 'zaLoading',
  components: {
    zaToast,
    zaActivityIndicator,
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
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
};
</script>

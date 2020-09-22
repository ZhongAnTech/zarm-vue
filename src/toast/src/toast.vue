<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}--open`]: currentVisible,
    }'>
    <div :class='`${prefixCls}__container`'>
      <slot>{{message}}</slot>
    </div>
    <za-mask type="transparent" :visible='currentVisible' @click='onMaskClick'></za-mask>
  </div>
</template>

<script>
import zaMask from '../../mask';

export default {
  name: 'zaToast',
  components: {
    zaMask,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-toast',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  methods: {
    onMaskClick(event) {
      this.$emit('maskClick', event);
    },
    enter() {
      if (this.duration === 0) return;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.currentVisible = false;
        this.event = undefined;
        this.reason = 'timeout';
      }, this.duration);
    },
    leave() {
      this.$emit('update:visible', false);
      this.$emit('close', this.reason, this.event);
    },
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.currentVisible = value;
    },
    currentVisible(value) {
      if (value) {
        this.enter();
      } else {
        this.leave();
      }
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      message: '',
    };
  },
  mounted() {
    if (this.currentVisible) {
      this.enter();
    }
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
};
</script>

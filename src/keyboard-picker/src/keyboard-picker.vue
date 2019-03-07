<template lang="html">
  <div :prefixCls="prefixCls" @click.stop='stopPropagation'>
    <za-popup
      :visible='currentVisible'
      :get-container="getContainer"
      maskType="transparent"
      @close='onMaskClick'
      :closeOnClickModal='closeOnClickModal'>
      <za-keyboard 
        :type="type"
        @keyClick="onKeyClick"
      />
    </za-popup>
  </div>
</template>

<script>
import Event from '@/utils/events';
import zaPopup from '../../popup';
import zaKeyboard from '../../keyboard';

export default {
  name: 'zaKeyboardPicker',
  props: {
    prefixCls: {
      type: String,
      default: 'za-keyboard-picker',
    },
    type: String,
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      getContainer: () => document.body,
    };
  },
  watch: {
    visible(val, oldVal) { // eslint-disable-line no-unused-vars
      if (this.currentVisible === val) return;
      this.currentVisible = val;
    },
  },
  components: {
    zaPopup,
    zaKeyboard,
  },
  methods: {
    stopPropagation(e) {
      Event.stopPropagation(e);
    },
    // 点击遮罩层
    onMaskClick(reason) {
      if (reason === 'clickaway') {
        this.onCancel();
      }
    },
    onKeyClick(key) {
      if (['ok', 'close'].indexOf(key) > -1) {
        this.onCancel();
      }
      this.$emit('keyClick', key);
    },
    // 切换显示状态
    onCancel() {
      // eslint-disable-next-line
      this.currentVisible = !this.currentVisible;
      this.$emit('update:visible', this.currentVisible);
    },
  },
};
</script>

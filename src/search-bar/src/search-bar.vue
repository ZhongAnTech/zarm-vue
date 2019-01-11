<template lang="html">
  <div :class="prefixCls">
    <form action="#" :class="{
      [`${prefixCls}-form`]: true,
      [`${prefixCls}-form-focus`]: !!(focus || (currentValue && currentValue.length > 0))
    }" @submit="onSubmit" ref="searchForm">
      <div :class="{
        [`${prefixCls}-content`]: true,
        [`shape-${shape}`]: !!shape
      }">
        <div :class="`${prefixCls}-mock`">
          <div :class="`${prefixCls}-mock-container`" ref="searchContainer">
            <za-icon type="search" />
            <span :class="`${prefixCls}-mock-placeholder`" v-show="isVisibility">{{placeholder || placeholderText}}</span>
          </div>
        </div>
        <za-input type="search" :placeholder="placeholder || placeholderText" :value="currentValue" :disabled="disabled" :clearable="clearable" ref="inputRef"
          :maxLength='maxLength' @focus="onFocus" @compositionStart="handleComposition" @compositionUpdate="handleComposition"
          @compositionEnd="handleComposition" @change="onChange" @blur="onBlur" @clear="onClear" />
      </div>
      <div :class="{
          [`${prefixCls}-cancel`]: true,
          [`${prefixCls}-cancel-show`]: !!(showCancel || focusStatus || (currentValue && currentValue.length > 0))
        }" ref="cancelRef" @click="onCancel">{{cancelText || cancelBtnText}}</div>
    </form>
  </div>
</template>

<script>
import Locale from '../../utils/locale';
import zaInput from '../../input/src/input';

export default {
  name: 'zaSearchBar',
  components: {
    zaInput,
  },
  inject: {
    localeProvider: {
      default: '',
    },
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-search-bar',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: [String, Number],
    maxLength: [Number],
    shape: {
      type: String,
      default: 'raduis',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
      default: '',
    },
    showCancel: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      focusStatus: false,
      currentValue: this.defaultValue || this.value || '',
      isOnComposition: false,
    };
  },
  watch: {
    value(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
    },
  },
  computed: {
    isVisibility() {
      return this.currentValue ? 0 : 1;
    },
    cancelBtnText() {
      return this.localeProvider.lang ? this.getLocales('cancelText') : '取消';
    },
    placeholderText() {
      return this.localeProvider.lang ? this.getLocales('placeholder') : '搜索';
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.calculatePositon();
    });
  },
  methods: {
    // 国际化
    getLocales(key) {
      return Locale.getLocaleByComponent(this.localeProvider, 'SearchBar', key);
    },
    // 初始化搜索提示文字的位置
    calculatePositon() {
      const { showCancel } = this;
      const formWidth = this.$refs.searchForm.getBoundingClientRect().width;
      const containerWidth = this.$refs.searchContainer.getBoundingClientRect().width;
      const ml = parseInt(window.getComputedStyle(this.$refs.cancelRef, '')['margin-left'].split('px')[0], 10);
      this.cancelOuterWidth = Math.ceil(ml + parseInt(this.$refs.cancelRef.getBoundingClientRect().width, 10));
      if (!showCancel) {
        this.$refs.cancelRef.style.cssText = `margin-right: -${this.cancelOuterWidth}px;`;
        this.initPos = (formWidth / 2) - (containerWidth / 2);
      } else {
        this.initPos = (formWidth / 2) - (this.cancelOuterWidth / 2) - (containerWidth / 2);
      }

      if (!this.currentValue) {
        this.$refs.searchContainer.style.transform = `translate3d(${this.initPos}px, 0, 0)`;
        this.$refs.searchContainer.style.webkitTransform = `translate3d(${this.initPos}px, 0, 0)`;
      } else {
        this.focusAnim(0);
      }
    },

    onFocus() {
      this.focusStatus = true;
      this.focusAnim();
      this.$emit('focus');
    },

    onChange(value) {
      this.currentValue = value;
      if (!this.isOnComposition) {
        this.$emit('change', this.currentValue);
      }
    },

    handleComposition(e) {
      if (e.type === 'compositionstart') {
        this.isOnComposition = true;
      }

      if (e.type === 'compositionend') {
        // composition is end
        this.isOnComposition = false;
        const value = e.target.value;
        this.$emit('change', value);
      }
    },

    onBlur() {
      this.focusStatus = false;
      if (!this.currentValue) {
        this.blurAnim();
      }
      this.$emit('blur');
    },

    onClear() {
      this.currentValue = '';
      this.isOnComposition = false;
      this.focus();
      this.$emit('clear', this.currentValue);
    },

    onCancel() {
      const { showCancel } = this;
      if (!showCancel) {
        this.currentValue = '';
        this.isOnComposition = false;
        this.onBlur();
      }
      this.$emit('cancel');
    },

    onSubmit(e) {
      e.preventDefault();
      this.$refs.inputRef.blur();
      this.$emit('submit', this.currentValue);
    },

    focusAnim(transition = 300) {
      this.$refs.searchContainer.style.cssText += `transform: translate3d(10px, 0, 0);transition: ${transition}ms;`;
      this.$refs.cancelRef.style.cssText = 'margin-right: 0px;';
      this.$refs.cancelRef.classList.add('animation-ease');
    },

    blurAnim() {
      const { showCancel } = this;
      this.$refs.searchContainer.style.cssText += `transform: translate3d(${this.initPos}px, 0, 0);transition: 300ms;`;
      if (!showCancel) {
        this.$refs.cancelRef.style.cssText = `margin-right: -${this.cancelOuterWidth}px;`;
      }
    },

    focus() {
      this.$refs.inputRef.focus();
    },
  },
};
</script>
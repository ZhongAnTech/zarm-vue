<template lang="html">
  <div :class='{
    [prefixCls]: true,
    disabled,
    }'>
    <input
      :class='`${prefixCls}-input`'
      ref='file'
      type="file"
      :accept='accept'
      :multiple='multiple'
      :capture='capture'
      @click='handleDefaultInput'
      @change='handleChange'
    />
    <span :class='`${prefixCls}-trigger`' @click='handleClick' />
    <slot></slot>
  </div>
</template>

<script>
/**
 * 设置选择前的方法，获取选择文件的相关信息，需要时可以对图片进行压缩、改变图片尺寸。
 *
 * multiple: 默认为 false，设置为 true 之后一次可以选择多张，onChange 事件调用之后返回一个数组，
 *           不设置或者设置为 false，onChange 事件调用之后返回一个对象。
 * disabled: 传递之后不可以点击上传，整个选择组件会设置为半透明状态，透明度为 0.5。
 * quality: 没有默认值，不设置不会进行压缩。
 * accept: 设置选择的文件类型，默认为所有类型，只有文件类型为图片（image/*）的时候会有本地预览图。
 * onChange: () => { file, fileType, fileSize, fileName, thumbnail }。
 * onBeforeSelect: () => boolean，返回 false 的时候阻止后续的选择事件。
 */
import handleFileInfo from './util';

export default {
  name: 'zaUploader',
  props: {
    prefixCls: {
      type: String,
      default: 'za-uploader',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    accept: String,
    capture: String,
    quality: Number,
    beforeChange: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleClick() {
      this.$refs.file.click();
    },
    handleDefaultInput(event) {
      const { beforeChange, disabled } = this;
      // 防止选择同一张图片两次造成 onChange 事件不触发
      event.target.value = null; // eslint-disable-line no-param-reassign

      // 阻止 input onChange 默认事件
      if (beforeChange(event) === false || disabled) {
        event.preventDefault();
      }
    },
    handleChange(e) {
      const { quality, multiple } = this;
      const files = Array.from(e.target.files);
      const fileList = [];

      const getFileInfoCb = (data) => {
        if (multiple) {
          fileList.push(data);

          if (files.length === fileList.length) {
            this.$emit('change', fileList);
          }
        } else {
          this.$emit('change', data);
        }
      };

      if (files) {
        files.map(file => handleFileInfo({ file, quality }, getFileInfoCb));
      }
    },
  },
};
</script>

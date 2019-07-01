<template>
  <i :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}-${type}`]: !!type,
    [`${prefixCls}--${theme}`]: !!theme,
  }' @click='handleClick'></i>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { defaultThemeValidator } from '../../utils/validator';

@Component({
  name: 'zaIcon',
  props: {
    prefixCls: {
      type: String,
      default: 'za-icon',
    },
    type: String,
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: null,
    },
  },
})
class Icon extends Vue {
  handleClick(event) {
    this.$emit('click', event);
  }
}
export default Icon;
</script>

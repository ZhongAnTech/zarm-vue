<template lang="html">
  <div :class="{
      [`${prefixCls}`]: true,
      [`shape-${shape}`]: !!shape,
      'is-compact': compact,
      block,
      disabled,
    }">
    <slot></slot>
  </div>
</template>

<script>
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

export default {
  name: 'zaCheckboxGroup',
  props: {
    prefixCls: {
      type: String,
      default: 'za-checkbox-group',
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'primary',
    },
    type: {
      type: String,
      validator: enumGenerator(['button', 'cell']),
      default: null,
    },
    shape: {
      type: String,
      validator: enumGenerator(['radius', 'round']),
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    value: {},
  },
};
</script>

<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    [`theme-${theme}`]: !!theme,
    [`${prefixCls}-${type}`]: !!type,
    }'>
    <div v-if="type==='circle'" :class='`${prefixCls}-inner`'>
      <za-spinner :theme='theme' :strokeWidth='strokeWidth' :percent='percent' />
    </div>
    <div v-else :class='`${prefixCls}-inner`' :style='{height: `${strokeWidth}px`}'>
      <div :class='`${prefixCls}-bg`' :style='{ width: `${percent}%` }' />
    </div>
    <div :class='`${prefixCls}-text`'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import zaSpinner from '../../spinner';

export default {
  name: 'zaProgress',
  components: {
    zaSpinner,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-progress',
    },
    theme: zaSpinner.props.theme,
    strokeWidth: zaSpinner.props.strokeWidth,
    percent: zaSpinner.props.percent,
    type: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['line', 'circle'].indexOf(v) >= 0;
      },
      default: 'line',
    },
  },
};
</script>

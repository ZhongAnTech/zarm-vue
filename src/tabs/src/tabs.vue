<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    [`theme-${theme}`]: !!theme,
  }'>
    <div :class='`${prefixCls}-header`'>
      <ul role="tablist">
        <tab-nav v-for='(pane, index) in panes' :label='pane.label' :name='pane.name' :key='index' :disabled='pane.disabled'></tab-nav>
      </ul>
      <div :class='`${prefixCls}-line`' :style='lineStyle'>
        <span v-if='lineWidth' :class='`${prefixCls}-line-inner`' :style='{ width: lineWidth + "px" }' />
      </div>
    </div>
    <div :class='`${prefixCls}-container`'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// change the name of this component to Tabs (zarm call it Tab)
import TabNav from './tab-nav';

export default {
  name: 'zaTabs',
  components: {
    TabNav,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-tab',
    },
    theme: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
      },
      default: 'primary',
    },
    lineWidth: [String, Number],
    value: {},
  },
  computed: {
    currentIndex() {
      const value = this.value; // trigger computing
      const panes = this.panes;
      let cur = 0;
      panes.some((child, index) => {
        if (child.$options.name === 'zaTabPane' && child.name === value) {
          cur = index;
          return true;
        }
        return false;
      });
      return cur;
    },
    paneNum() {
      return this.panes.length;
    },
    lineStyle() {
      return {
        width: `${100 / this.paneNum}%`,
        left: `${(this.currentIndex / this.paneNum) * 100}%`,
        backgroundColor: this.lineWidth ? 'transparent' : '',
      };
    },
  },
  data() {
    return {
      panes: [],
    };
  },
  methods: {
    changeCb(item, event) {
      this.$emit('tab-click', item, event);
    },
    notify(pane, flag) {
      const index = this.getNotifyPaneIndex(pane);
      if (!flag) {
        this.panes.splice(index, 1);
      } else if (index < 0) {
        this.panes.push(pane);
      } else {
        this.panes.splice(index, 1, pane);
      }
    },
    getNotifyPaneIndex(pane) {
      let index = -1;
      this.panes.some((p, i) => {
        if (p._panelIndex === pane._panelIndex) {
          index = i;
          return true;
        }
        return false;
      });
      return index;
    },
  },
};
</script>

<style lang="css">
</style>

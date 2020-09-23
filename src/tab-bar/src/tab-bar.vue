<script>
export default {
  name: 'zaTabBar',
  props: {
    prefixCls: {
      type: String,
      default: 'za-tab-bar',
    },
    visible: {
      type: Boolean,
      default: true,
    },
    defaultActiveKey: {
      type: [String, Number],
      default: null,
    },
    activeKey: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      currentValue: this.activeKey || this.defaultActiveKey || this.value,
    };
  },
  watch: {
    visible(val) {
      if (val === this.currentVisible) return;
      this.currentVisible = val;
    },
  },
  methods: {
    onChildChange(value) {
      this.currentValue = value;
      this.$emit('update', value);
      this.$emit('change', value);
    },
  },
  render() {
    const { currentVisible, prefixCls } = this;
    const cls = !currentVisible ? `${prefixCls} ${prefixCls}--hidden` : `${prefixCls}`;

    return (
      <div class={cls}>
        {this.$slots.default()}
      </div>
    );
  },
};
</script>

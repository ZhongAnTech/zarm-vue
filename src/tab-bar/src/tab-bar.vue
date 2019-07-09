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
    value: {},
  },
  data() {
    return {
      currentValue: this.activeKey || this.defaultActiveKey || this.value,
    };
  },
  methods: {
    onChildChange(value) {
      this.currentValue = value;
      this.$emit('input', value);
      this.$emit('change', value);
    },
  },
  render() {
    const { visible, prefixCls } = this;
    const cls = !visible ? `${prefixCls} ${prefixCls}--hidden` : `${prefixCls}`;

    return (
      <div class={cls}>
        {this.$slots.default}
      </div>
    );
  },
};
</script>

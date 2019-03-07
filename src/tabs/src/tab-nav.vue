<script>
import Emitter from '@/mixins/emitter';

export default {
  name: 'zaTabItem',
  mixins: [Emitter],
  props: {
    prefixCls: {
      type: String,
      default: 'za-tabs',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: String,
    name: [String, Number],
    currentName: {},
  },
  methods: {
    handleClick(event) {
      if (this.disabled) return;
      this.$emit('nav-click', this, event);
    },
  },
  render(h) { // eslint-disable-line no-unused-vars
    const {
      disabled,
      currentName,
      label,
      prefixCls,
      handleClick,
    } = this;

    const cls = {
      [`${prefixCls}__header-item`]: true,
      [`${prefixCls}__header-item--disabled`]: !!disabled,
      [`${prefixCls}__header-item--active`]: this.name === currentName,
    };

    return (
      <div class={cls} on-click={handleClick}>{label}</div>
    );
  },
};
</script>

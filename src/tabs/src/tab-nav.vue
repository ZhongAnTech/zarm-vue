<script>
import Emitter from '@/mixins/emitter';

export default {
  name: 'zaTabItem',
  mixins: [Emitter],
  props: {
    prefixCls: {
      type: String,
      default: 'za-tab',
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
      // this.dispatch('zaTabs', 'nav-click', [this.name, event]);
      // this._tabs.changeCb(this, event);
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
      [`${prefixCls}-header-item`]: true,
      disabled,
      active: this.name === currentName,
    };

    return (
      <div class={cls} on-click={handleClick}>{label}</div>
    );
  },
};
</script>

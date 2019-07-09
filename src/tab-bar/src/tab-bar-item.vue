<script>
import Emitter from '@/mixins/emitter';
import findParent from '@/mixins/find-parent';

export default {
  name: 'zaTabBarItem',
  mixins: [Emitter, findParent],
  props: {
    prefixCls: {
      type: String,
      default: 'za-tab-bar',
    },
    title: {
      type: String,
      default: null,
    },
    itemKey: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    selected() {
      return this.getSelected();
    },
  },
  created() {
    this.findParent('zaTabBar');
  },
  methods: {
    getSelected() {
      const { activeKey, currentValue } = this.parent;
      return activeKey === this.itemKey || currentValue === this.itemKey;
    },
    handleChange() {
      const { itemKey } = this;
      this.parent.onChildChange(itemKey);
    },
  },
  render() {
    const { prefixCls, title, selected, handleChange } = this;
    let cls = `${prefixCls}__item`;
    if (selected) {
      cls = `${prefixCls}__item ${prefixCls}--active`;
    }
    return (
      <div class={cls} on-click={handleChange}>
        <div class={`${prefixCls}__icon`}>
          {
            this.selected ? this.$slots.icon : this.$slots.activeIcon
          }
        </div>
        <div class={`${prefixCls}__title`}>{title}</div>
      </div>
    );
  },
};
</script>

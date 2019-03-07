<script>
import zaCarouselItem from '../../carousel-item';

let paneIndex = 0;
export default {
  name: 'zaTabPane',
  components: {
    zaCarouselItem,
  },
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
  },
  computed: {
    currentName() {
      return this.container && this.container.value;
    },
    canSwipe() {
      return this.container && this.container.canSwipe;
    },
    container() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'zaTabs') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
  },
  watch: {
    label() {
      this.notifyParent();
    },
    name() {
      this.notifyParent();
    },
    disabled() {
      this.notifyParent();
    },
  },
  created() {
    this._panelIndex = paneIndex;
    paneIndex += 1;
    // for vue2.1.0+ can be scoped slot here
    this.notifyParent();
  },
  beforeDestroy() {
    this.notifyParent(false);
  },
  methods: {
    notifyParent(flag = true) {
      if (this.container) {
        this.container.notify(this, flag);
      }
    },
  },
  render(h) { // eslint-disable-line no-unused-vars
    const {
      prefixCls,
      currentName,
      name,
      canSwipe,
    } = this;

    const cls = {
      [`${prefixCls}__panel-item`]: true,
      [`${prefixCls}__panel-item--active`]: name === currentName,
    };

    const panel = canSwipe ? <za-carousel-item>{this.$slots.default}</za-carousel-item>
      :
      (
        <div class={`${prefixCls}__panel`}>
          <div class={cls}>
            {this.$slots.default}
          </div>
        </div>
      );

    return panel;
  },
};
</script>

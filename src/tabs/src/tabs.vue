<script>
// change the name of this component to Tabs (zarm call it Tab)
import { defaultThemeValidator } from '@/utils/validator';
import TabNav from './tab-nav';
import zaCarousel from '../../carousel';

export default {
  name: 'zaTabs',
  components: {
    TabNav,
    zaCarousel,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-tabs',
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'primary',
    },
    lineWidth: [String, Number],
    modelValue: {
      type: String,
      default: null,
    },
    slideable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentIndex() {
      const currentValue = this.currentValue; // trigger computing
      const panes = this.panes;
      let cur = 0;
      panes.some((child, index) => {
        if (child.$options.name === 'zaTabPanel' && child.name === currentValue) {
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
  watch: {
    modelValue(val, oldVal) { // eslint-disable-line no-unused-vars
      if (val === this.currentValue) return;
      this.currentValue = val;
    },
  },
  data() {
    return {
      panes: [],
      currentValue: this.modelValue,
    };
  },
  methods: {
    handleNavClick(item, event) {
      // order matters
      this.$emit('update:modelValue', item.name);
      if (!this.slideable) {
        this.$emit('change', item, event);
      }
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
    handleSwipeChange(index) {
      const newName = this.findValueByIndex(index);
      this.currentValue = newName;
      this.$emit('input', newName);
      this.$emit('change', this.panes[index]);
    },
    findValueByIndex(index) {
      return this.panes[index].name;
    },
  },
  render() { // eslint-disable-line no-unused-vars
    const {
      panes,
      handleNavClick,
      currentValue,
      lineStyle,
      lineWidth,
      currentIndex,
      slideable,
      prefixCls,
      theme,
      handleSwipeChange,
    } = this;

    const cls = {
      [`${prefixCls}`]: true,
      [`${prefixCls}--${theme}`]: !!theme,
    };

    return (
      <div class={cls}>
        <div class={`${prefixCls}__header`}>
          <ul role="tablist">
            {
              panes.map((pane, index) => {
                return (
                  <tab-nav
                    label={pane.label}
                    name={pane.name}
                    key={index}
                    disabled={pane.disabled}
                    currentName={currentValue}
                    onNavClick={handleNavClick}
                  ></tab-nav>
                );
              })
            }
          </ul>
          <div class={`${prefixCls}__line`} style={lineStyle}>
            {
              lineWidth &&
              <span class={`${prefixCls}__line-inner`} style={{ width: `${lineWidth}px` }} />
            }
          </div>
        </div>
        <div class={`${prefixCls}__container`}>
          {
            !slideable ? <div>{this.$slots.default()}</div> :
              <za-carousel
                showPagination={false}
                activeIndex={currentIndex}
                ref='carousel'
                on-change={handleSwipeChange}>
                {this.$slots.default()}
              </za-carousel>
          }
        </div>
      </div>
    );
  },
};
</script>

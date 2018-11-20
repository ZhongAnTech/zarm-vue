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
      default: 'za-tab',
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'primary',
    },
    lineWidth: [String, Number],
    value: {},
    canSwipe: {
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
        if (child.$options.name === 'zaTabPane' && child.name === currentValue) {
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
    value(val, oldVal) { // eslint-disable-line no-unused-vars
      if (val === this.currentValue) return;
      this.currentValue = val;
    },
  },
  data() {
    return {
      panes: [],
      currentValue: this.value,
    };
  },
  methods: {
    handleNavClick(item, event) {
      // order matters
      this.$emit('input', item.name);
      if (!this.canSwipe) {
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
  render(h) { // eslint-disable-line no-unused-vars
    const {
      panes,
      handleNavClick,
      currentValue,
      lineStyle,
      lineWidth,
      currentIndex,
      canSwipe,
      prefixCls,
      theme,
      handleSwipeChange,
    } = this;

    const cls = {
      [`${prefixCls}`]: true,
      [`theme-${theme}`]: !!theme,
    };

    return (
      <div class={cls}>
        <div class={`${prefixCls}-header`}>
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
                    on-nav-click={handleNavClick}
                  ></tab-nav>
                );
              })
            }
          </ul>
          <div class={`${prefixCls}-line`} style={lineStyle}>
            {
              lineWidth &&
              <span class={`${prefixCls}-line-inner`} style={{ width: `${lineWidth}px` }} />
            }
          </div>
        </div>
        <div class={`${prefixCls}-container`}>
          {
            !canSwipe ? this.$slots.default :
              <za-carousel
                showPagination={false}
                activeIndex={currentIndex}
                ref='carousel'
                on-change={handleSwipeChange}>
                {this.$slots.default}
              </za-carousel>
          }
        </div>
      </div>
    );
  },
};
</script>

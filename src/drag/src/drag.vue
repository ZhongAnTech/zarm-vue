<script>
export default {
  name: 'zaDrag',
  props: {
    onDragStart: {
      type: Function,
      default: () => {},
    },
    onDragMove: {
      type: Function,
      default: () => {},
    },
    onDragEnd: {
      type: Function,
      default: () => {},
    },
  },
  created() {
    this.dragState = {};
  },

  methods: {
    touchstart(event) {
      const dragState = this.dragState;
      const touch = event.touches[0];

      dragState.startX = touch.pageX;
      dragState.startY = touch.pageY;
      dragState.startTime = new Date();

      this.onDragStart(event, dragState);
    },

    touchmove(event) {
      const dragState = this.dragState;
      const touch = event.touches[0];

      const currentX = touch.pageX;
      const currentY = touch.pageY;

      const offsetX = currentX - dragState.startX;
      const offsetY = currentY - dragState.startY;

      const state = {
        ...dragState,
        offsetX,
        offsetY,
        currentX,
        currentY,
      };

      if (!this.onDragMove(event, state)) return; // only if it returns true

      this.dragState = state;
    },

    touchend(event) {
      const dragState = this.dragState;
      if (!dragState.currentX && !dragState.currentY) return;

      this.onDragEnd(event, dragState);

      this.dragState = {};
    },

    attachListener(listeners) {
      ['touchstart', 'touchmove', 'touchend'].forEach(key => {
        listeners[key] = this[key];
      });
    },
  },
  render() {
    const defaultSlots = this.$slots.default;
    // find the first none-text vnode
    const firstDefaultSlots = defaultSlots.find(s => {
      return s && s.tag;
    });
    if (!firstDefaultSlots) return null;
    // console.log(firstDefaultSlots); // eslint-disable-line
    if (firstDefaultSlots.componentOptions) {
      firstDefaultSlots.componentOptions.listeners =
        firstDefaultSlots.componentOptions.listeners || {};
      this.attachListener(firstDefaultSlots.componentOptions.listeners);
    } else {
      firstDefaultSlots.data.on = firstDefaultSlots.data.on || {};
      this.attachListener(firstDefaultSlots.data.on);
    }
    return firstDefaultSlots;
  },
};
</script>

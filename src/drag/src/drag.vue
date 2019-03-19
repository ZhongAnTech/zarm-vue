<script>
// const EVENTS_MAP = {
//   touchstart: 'onTouchStart',
//   touchmove: 'onTouchMove',
//   touchend: 'onTouchEnd',
//   mousedown: 'onTouchStart',
//   mousemove: 'onTouchMove',
//   mouseup: 'onTouchEnd',
// };

export default {
  name: 'zaDrag',
  props: {
    dragStart: {
      type: Function,
      default: () => {},
    },
    dragMove: {
      type: Function,
      default: () => {},
    },
    dragEnd: {
      type: Function,
      default: () => {},
    },
  },
  created() {
    this.dragState = {};
  },
  methods: {
    onTouchStart(event) {
      const dragState = this.dragState;
      if (!event.touches) {
        dragState.startX = event.clientX;
        dragState.startY = event.clientY;
      } else {
        const touch = event.touches[0];
        dragState.startX = touch.pageX;
        dragState.startY = touch.pageY;
      }
      dragState.startTime = new Date();
      this.dragStart(event, dragState);
    },

    onTouchMove(event) {
      const dragState = this.dragState;
      let currentX;
      let currentY;

      if (!event.touches) {
        currentX = event.clientX;
        currentY = event.clientY;
      } else {
        const touch = event.touches[0];
        currentX = touch.pageX;
        currentY = touch.pageY;
      }

      const offsetX = currentX - dragState.startX;
      const offsetY = currentY - dragState.startY;

      const state = {
        ...dragState,
        offsetX,
        offsetY,
        currentX,
        currentY,
      };
      if (!this.dragMove(event, state)) return; // only if it returns true
      this.dragState = state;
    },

    onTouchEnd(event) {
      const dragState = this.dragState;
      this.dragEnd(event, dragState);
      this.dragState = Object.create(null);
    },

    // attachListener(listeners) {
    //   ['touchstart', 'touchmove', 'touchend', 'mousedown', 'mousemove', 'mouseup'].forEach(key => {
    //     listeners[key] = this[EVENTS_MAP[key]];
    //   });
    // },
  },
  render() {
    // const defaultSlots = this.$slots.default || [];
    // const firstDefaultSlots = defaultSlots.find(s => {
    //   return s && s.tag;
    // });
    // if (!firstDefaultSlots) return null;
    // if (firstDefaultSlots.componentOptions) {
    //   firstDefaultSlots.componentOptions.listeners =
    //     firstDefaultSlots.componentOptions.listeners || {};
    //   this.attachListener(firstDefaultSlots.componentOptions.listeners);
    // } else if (firstDefaultSlots.data) {
    //   firstDefaultSlots.data.on = firstDefaultSlots.data.on || {};
    //   this.attachListener(firstDefaultSlots.data.on);
    // }
    // return firstDefaultSlots;
    return (
      <div
        ref="drag"
        onTouchstart={this.onTouchStart}
        onTouchmove={this.onTouchMove}
        onTouchend={this.onTouchEnd}
        onTouchcancel={this.onTouchEnd}
        onMousedown={this.onTouchStart}
        onMousemove={this.onTouchMove}
        onMouseup={this.onTouchEnd}
      >
        {this.$slots.default}
      </div>
    );
  },
};
</script>

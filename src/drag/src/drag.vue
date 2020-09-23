<script>
export default {
  name: 'zaDrag',
  props: {
    dragStart: {
      type: Function,
      default: () => { },
    },
    dragMove: {
      type: Function,
      default: () => { },
    },
    dragEnd: {
      type: Function,
      default: () => { },
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
  },
  render() {
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
        {this.$slots.default()}
      </div>
    );
  },
};
</script>

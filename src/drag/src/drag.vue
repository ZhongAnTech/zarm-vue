<template>
  <div
    style="height:inherit;"
    ref="drag"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
    @mousedown="onTouchStart"
    @mousemove="onTouchMove"
    @mouseup="onTouchEnd"
  >
    <slot></slot>
  </div>
</template>

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
  data() {
    return {
      dragState: {
        startTime: null,
        startX: 0,
        startY: 0,
      },
    };
  },
  methods: {
    onTouchStart(event) {
      const { dragState } = this;
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
      const { dragState } = this;
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

      const { startTime, startX, startY } = dragState;

      const state = {
        startTime,
        startX,
        startY,
        offsetX,
        offsetY,
        currentX,
        currentY,
      };
      if (!this.dragMove(event, state)) return; // only if it returns true
      this.dragState = state;
    },

    onTouchEnd(event) {
      const { dragState } = this;
      this.dragEnd(event, dragState);
      this.dragState = Object.create(null);
    },
  },
};
</script>

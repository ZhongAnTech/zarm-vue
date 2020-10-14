<script>
/* eslint-disable no-mixed-operators */
import Events from '@/utils/events';

function getDistance(a, b) {
  if (!b) return 0;
  return Math.sqrt((b.clientX - a.clientX) ** 2 + (b.clientY - a.clientY) ** 2);
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export default {
  name: 'zaPinchName',
  props: {
    prefixCls: {
      type: String,
      default: 'za-pinch-zoom',
    },
    minScale: {
      type: Number,
      default: 1,
    },
    maxScale: {
      type: Number,
      default: 3,
    },
  },

  data() {
    return {
      _container: null,
      startTouchX: 0,
      startTouchY: 0,
      moveX: 0,
      moveY: 0,
      startMoveX: 0,
      startMoveY: 0,
      deltaX: 0,
      deltaY: 0,
      moving: false,
      zooming: false,
      scale: 1,
      startScale: null,
      prevDistance: 0,
      originHeight: null,
      originWidth: null,
    };
  },

  mounted() {
    this._container = this.$refs.pinchZoom;

    Events.on(this._container, 'touchstart', this.touchstart);
    Events.on(document.documentElement, 'touchmove', this.touchmove);
    Events.on(document.documentElement, 'touchend', this.touchEnd);
    Events.on(document.documentElement, 'touchcancel', this.touchEnd);
  },

  beforeUnMounted() {
    Events.off(this._container, 'touchstart', this.touchstart);
    Events.off(document.documentElement, 'touchmove', this.touchmove);
    Events.off(document.documentElement, 'touchend', this.touchEnd);
    Events.off(document.documentElement, 'touchcancel', this.touchEnd);
  },

  methods: {
    getMaxMoveX() {
      if (this.originWidth) {
        return Math.max(0, (this.scale * this.originWidth - window.innerWidth) / 2);
      }
      return 0;
    },

    getMaxMoveY() {
      if (this.originHeight) {
        return Math.max(0, (this.scale * this.originHeight - window.innerHeight) / 2);
      }
      return 0;
    },

    touchstart(event) {
      const { touches } = event;
      this.startTouchX = touches[0].clientX;
      this.startTouchY = touches[0].clientY;

      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;

      this.moving = touches.length === 1 && this.scale !== 1;
      this.zooming = touches.length === 2;

      if (this.zooming) {
        this.startScale = this.scale;
        this.prevDistance = getDistance(touches[0], touches[1]);
      }
    },

    updateTransform(scale, x, y) {
      const moveX = scale > 1 ? x : 0;
      const moveY = scale > 1 ? y : 0;

      this._container.style.setProperty('--x', `${moveX}px`);
      this._container.style.setProperty('--y', `${moveY}px`);
      this._container.style.setProperty('--scale', scale);
    },

    touchmove(event) {
      const { touches } = event;
      this.deltaX = touches[0].clientX - this.startTouchX;
      this.deltaY = touches[0].clientY - this.startTouchY;

      if (this.moving) {
        const moveX = this.deltaX + this.startMoveX;
        const moveY = this.deltaY + this.startMoveY;

        const maxMoveX = this.getMaxMoveX();
        const maxMoveY = this.getMaxMoveY();
        this.moveX = range(moveX, -maxMoveX, maxMoveX);
        this.moveY = range(moveY, -maxMoveY, maxMoveY);
      }

      const { minScale, maxScale } = this;
      if (this.zooming && touches.length === 2) {
        const distance = getDistance(touches[0], touches[1]);
        const scale = (this.startScale * distance) / this.prevDistance;
        this.scale = range(minScale, scale, maxScale);
      }

      this.updateTransform(this.scale, this.moveX, this.moveY);

      this.$emit('change', {
        scale: this.scale,
        x: this.moveX,
        y: this.moveY,
      });

      if (this.moving || this.zooming) {
        event.preventDefault();
        event.stopPropagation();
      }
    },

    touchEnd(event) {
      let stopPropagation = false;
      if (this.moving || this.zooming) {
        stopPropagation = true;
        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          if (this.zooming) {
            this.moveX = range(this.moveX, -this.getMaxMoveX(), this.getMaxMoveX());
            this.moveY = range(this.moveY, -this.getMaxMoveY(), this.getMaxMoveY());
            this.zooming = false;
            this.updateTransform(this.scale, this.moveX, this.moveY);
          }
          this.moving = false;
          this.startTouchX = 0;
          this.startTouchY = 0;
          this.startScale = 1;
        }
      }
      if (stopPropagation) {
        event.preventDefault();
        event.stopPropagation();
      }
    },

    onload(event) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const { naturalWidth, naturalHeight } = event.target;
      const windowRatio = windowHeight / windowWidth;
      const imageRatio = naturalHeight / naturalWidth;

      const vertical = imageRatio > windowRatio;

      if (vertical) {
        this.originWidth = windowHeight / imageRatio;
        this.originHeight = windowHeight;
      } else {
        this.originWidth = windowWidth;
        this.originHeight = windowWidth * imageRatio;
      }
    },
  },

  render() {
    const { prefixCls } = this;
    return (
      <div ref="pinchZoom" class={`${prefixCls}`}>
        {this.$slots.default()}
      </div>
    );
  },
};
</script>

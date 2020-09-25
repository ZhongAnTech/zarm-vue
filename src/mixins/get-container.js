export default {
  props: {
    getContainer: Function,
  },
  watch: {
    getContainer() {
      this.move();
    },
  },
  methods: {
    removeContainer() {
      if (this.getContainer) {
        const container = this.getContainer();
        if (container.contains(this.$el)) {
          container.removeChild(this.$el);
        }
      }
    },
    move() {
      if (this.getContainer) {
        this.getContainer().appendChild(this.$el);
      } else if (this.$parent) {
        this.$parent.$el.appendChild(this.$el);
      }
    },
  },
  mounted() {
    if (this.getContainer) {
      this.move();
    }
  },
  beforeUnmount() {
    this.removeContainer();
  },
};

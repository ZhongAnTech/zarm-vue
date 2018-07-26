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
        this.getContainer().removeChild(this.$el);
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
  beforeDestroy() {
    this.removeContainer();
  },
};

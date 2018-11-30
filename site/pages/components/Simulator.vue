<template>
  <div class="simulator">
    <iframe :src="componentPath" title="simulator" frameBorder="0" style="width: 375px;height: 667px;" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    componentPath() {
      return `${window.CONFIG.pathname}demo.html#/${this.url}`;
    }
  }
};
</script>

<style scoped lang="scss">
.simulator {
  position: fixed;
  top: 105px;
  right: 0;
  width: 500px;
  z-index: 10;

  iframe {
    box-sizing: content-box;
    border: 1px solid #eaeefb;
  }
}
</style>

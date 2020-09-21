<script>
import { h } from 'vue';
export default {
  data() {
    return {
      visible: true,
    }
  },
  created() {
    const mRender = this.$route.meta.mRender;
    mRender().then(mod => {
      this.m = mod.default ? mod.default : mod;
      this.visible = false;
    })
  },
  render() {
    return this.visible ? h('zaLoading', {
      props: {
        visible: true,
      }
    }) : h(this.m);
  },
}
</script>

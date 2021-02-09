<template lang="html">
  <Container>
    <Demo></Demo>
    <Simulator :url="path" />
  </Container>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import Simulator from "./Simulator";
import Container from 'site/components/Container';

export default {
  components: {
    Container,
    Simulator
  },
  data() {
    return {
      path: null
    }
  },
  created() {
    const v = this.$store.state.version;
    this.path = this.$route.path.replace('/documents/', '');
    // window.app.component('Demo', function(resolve, reject) {
    //   require([`docs/${v}/tabBar.md`], resolve)
    // });
    const AsyncComp = defineAsyncComponent(() =>
      import(`docs/${v}/tabBar.md`)
    )
    window.app.component('Demo', AsyncComp);
  }
};
</script>


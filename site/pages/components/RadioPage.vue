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
    //   require([`docs/${v}/radio.md`], resolve)
    // });
    const AsyncComp = defineAsyncComponent(() =>
      import(`docs/${v}/radio.md`)
    )
    window.app.component('Demo', AsyncComp);
  }
};
</script>


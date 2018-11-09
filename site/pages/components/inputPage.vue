<template lang="html">
  <Container>
    <InputDemo></InputDemo>
  </Container>
</template>

<script>
import Vue from 'vue';
import Container from 'site/components/Container';

export default {
  components: {
    Container
  },
  created() {
    const v = this.$store.state.version;
    Vue.component('InputDemo', function(resolve, reject) {
      require([`docs/${v}/input.md`], resolve)
    });
  }
};
</script>


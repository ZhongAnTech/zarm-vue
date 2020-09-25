<template lang="html">
  <Container class="spinner-page">
    <PageHeader title="活动指示器 ActivityIndicator" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Demo from 'docs/3.0.0/activityIndicator.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

<style lang="css">
</style>

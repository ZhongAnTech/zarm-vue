<template lang="html">
  <Container class="spinner-page">
    <PageHeader title="活动指示器 Spinner" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Demo from 'docs/2.0.0/spinner.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/SpinnerPage.scss';

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

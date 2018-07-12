<template lang="html">
  <Container class="spinner-page">
    <PageHeader title="指示器 Spinner" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/spinner.md';

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

<template lang="html">
  <Container class="progress-page">
    <PageHeader title="进度条 Progress" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/progress.md';

import '../styles/pages/ProgressPage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

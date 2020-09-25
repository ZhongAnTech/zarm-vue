<template lang="html">
  <Container class="toast-page">
    <PageHeader title="轻提示 Toast" />
    <Demo></Demo>
    <PageFooter/>
  </Container>
</template>

<script>
import Demo from 'docs/3.0.0/toast.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/ToastPage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

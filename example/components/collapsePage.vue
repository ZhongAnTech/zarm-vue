<template lang="html">
  <Container class="zaCollapse-page">
    <PageHeader title="折叠面板 zaCollapse" />
    <Demo></Demo>
    <PageFooter/>
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/collapse.md';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

<template lang="html">
  <Container class='cell-page'>
    <PageHeader title="列表项 Cell" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Demo from 'docs/2.0.0/cell.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/CellPage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

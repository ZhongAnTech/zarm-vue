<template lang="html">
  <Container class='cell-page'>
    <PageHeader title="列表 Cell" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/cell.md';
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

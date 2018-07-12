<template lang="html">
  <Container class="zaAccordion-page">
    <PageHeader title="手风琴 zaAccordion" />
    <Demo></Demo>
    <PageFooter/>
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/accordion.md';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

<template lang="html">
  <Container class="stepper-page">
    <PageHeader title="步进器 Stepper" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/stepper.md';


export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

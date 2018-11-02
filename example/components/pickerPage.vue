<template lang="html">
    <Container class="picker-page">
      <PageHeader title="选择器 Picker & Select" />
      <Demo></Demo>
      <PageFooter />
    </Container>
  </template>
  
<script>
import Demo from 'docs/2.0.0/picker.md';
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
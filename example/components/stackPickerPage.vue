<template lang="html">
    <Container class="picker-page">
      <PageHeader title="层叠选择器 StackPicker" />
      <Demo></Demo>
      <PageFooter />
    </Container>
  </template>

<script>
import Demo from 'docs/3.0.0/stackPicker.md';
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

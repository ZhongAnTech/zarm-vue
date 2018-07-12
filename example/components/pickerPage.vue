<template lang="html">
    <Container class="picker-page">
      <PageHeader title="选择器 Picker & Select" />
      <Demo></Demo>
      <PageFooter />
    </Container>
  </template>
  
  <script>
    import Container from '../common/Container.vue';
    import PageHeader from '../common/PageHeader.vue';
    import PageFooter from '../common/PageFooter.vue';
    import Demo from '../docs/picker.md';

    export default {
      components: {
        Container,
        PageHeader,
        PageFooter,
        Demo
      }
    };
  </script>
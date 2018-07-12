<template lang="html">
  <Container class="slider-page">
    <PageHeader title="滑块 Slider" />
       <Demo></Demo>
      <PageFooter />
    </Container>
  </template>
  
  <script>
  import Container from '../common/Container.vue';
  import PageHeader from '../common/PageHeader.vue';
  import PageFooter from '../common/PageFooter.vue';
  import Demo from '../docs/slider.md';

  import '../styles/pages/SliderPage.scss';
  
  export default {
    components: {
      Container,
      PageHeader,
      PageFooter,
      Demo
    }
  };
  </script>
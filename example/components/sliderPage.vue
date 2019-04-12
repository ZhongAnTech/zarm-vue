<template lang="html">
  <Container class="slider-page">
    <PageHeader title="滑动输入条 Slider" />
       <Demo></Demo>
      <PageFooter />
    </Container>
  </template>
  
<script>
import Demo from 'docs/2.0.0/slider.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
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
<template lang="html">
  <Container class="carousel-page">
    <PageHeader title="走马灯 Carousel" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Demo from 'docs/2.0.0/carousel.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/carouselPage.scss';


export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

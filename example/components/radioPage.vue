<template lang="html">
  <Container class="radio-page">
    <PageHeader title="单选框 Radio" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/radio.md';

import '../styles/pages/RadioPage.scss';


export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

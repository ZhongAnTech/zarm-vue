<template lang="html">
  <Container class="pull-page">
    <PageHeader title="上拉加载下拉刷新 Pull" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Demo from 'docs/2.0.0/pull.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/PullPage.scss';


export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

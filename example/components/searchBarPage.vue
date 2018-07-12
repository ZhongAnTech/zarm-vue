<template lang="html">
  <Container class="noticebar-page">
    <PageHeader title="搜索栏 SearchBar" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/searchBar.md';


export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

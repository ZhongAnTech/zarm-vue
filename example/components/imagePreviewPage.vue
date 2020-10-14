<template lang="html">
  <Container class="image-preview-page">
    <PageHeader title="图片预览 ImagePreview" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Demo from 'docs/3.0.0/imagePreview.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/ImagePreviewPage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

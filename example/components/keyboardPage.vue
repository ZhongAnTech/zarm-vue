<template lang="html">
  <Container>
    <PageHeader title="虚拟键盘 Keyboard & KeyboardPicker" />
    <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Demo from 'docs/2.0.0/keyboard.md';
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


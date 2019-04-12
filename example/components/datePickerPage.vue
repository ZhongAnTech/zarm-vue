<template>
  <Container class="picker-page">
    <PageHeader title="日期选择器 DatePicker & DateSelect" />
       <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Demo from 'docs/2.0.0/datePicker.md';
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
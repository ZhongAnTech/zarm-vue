<template>
  <Container class="picker-page">
    <PageHeader title="日期选择器 DatePicker & DateSelect" />
       <Demo></Demo>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/datePicker.md';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>
<template lang="html">
 <Container class="calendar-page">
   <PageHeader title="日历 Calendar" />
   <Demo></Demo>
   <PageFooter />
 </Container>
</template>

<script>
import Demo from 'docs/3.0.0/calendar.md';
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/CalendarPage.scss';
export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
    Demo
  }
};
</script>

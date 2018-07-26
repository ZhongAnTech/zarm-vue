<template lang="html">
 <Container class="calendar-page">
   <PageHeader title="日历 Calendar" />
   <Demo></Demo>
   <PageFooter />
 </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import Demo from '../docs/calendar.md';
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

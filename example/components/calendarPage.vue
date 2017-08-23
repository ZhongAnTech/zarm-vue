<template lang="html">
  <Container>
    <PageHeader title="日历 Calendar" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>日历选择</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell @click='handleChange'>{{date1}}</za-cell>
            <za-cell @click='handleChange2'>{{date2}}</za-cell>
          </za-panel-body>
        </za-panel>
      </div>
    </main>
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import Calendar from "@/calendar"
export default {
  components:{Container,PageHeader},
  data(){
    return{
       date1:"日历时间选择",
       date2:"日历时间范围选择"
    }
  },
  methods:{
    handleChange(){
      const self=this;
      var calendar = Calendar({
          // multiSelected: true,
          months: 12,
          selectedValue: '2017-08-01',
          maxDate: '2017-10-20',
          onClick(date) {
              console.log(date)
          },
          callback(date) {
              console.log(date)
              self.date1=date[0]
          }
      });
    },
    handleChange2(){
      const self=this;
      var calendar = Calendar({
          multiSelected: true,
          months: 12,
          selectedValue: '2017-08-01',
          maxDate: '2017-10-20',
          onClick(date) {
            console.log(date)
          },
          callback(date) {
            console.log(date)
            self.date2=date[0]+'到'+date[1]
          }
      });
    }
  }
}
</script>

<style lang="css">
</style>

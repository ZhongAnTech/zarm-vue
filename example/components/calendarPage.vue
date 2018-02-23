<template lang="html">
 <Container>
   <PageHeader title="日历 Calendar" />
   <main>
     <div>
       <za-panel>
         <za-panel-header title="简单日历"/>
         <za-panel-body>
           <za-cell title='选择时间' @click='showCal1'>{{value1.join(',')}}</za-cell>
         </za-panel-body>
       </za-panel>
       <za-panel>
          <za-panel-header title="时间范围选择"/>
          <za-panel-body>
            <za-cell title='选择时间范围' @click='showCal2'>{{value2.join(',')}}</za-cell>
          </za-panel-body>
        </za-panel>
        <za-panel>
          <za-panel-header title="时间最小最大限制"/>
          <za-panel-body>
            <za-cell title='选择时间范围' @click='showCal3'></za-cell>
          </za-panel-body>
        </za-panel>
     </div>
     <za-calendar :visible.sync='visible1' @changed='changeDate' @ok='handleOk1' :selectedValue='value1' />
     <za-calendar :visible.sync='visible2' @ok='handleOk2' :multiSelected='isMultiSelected' :selectedValue='value2'/>
     <za-calendar :visible.sync='visible3' :min='minDate' :max='maxDate' :months="24"/>
   </main>
   <PageFooter />
 </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';

export default {
 components: {
   Container,
   PageHeader,
   PageFooter,
 },
 data() {
   return {
     visible1: false,
     value1: [],
     visible2: false,
     visible3: false,
     minDate: new Date('2018-01-11'),
     maxDate: new Date('2019-10-10'),
     value2: ['2018-02-24','2018-03-10'],
     isMultiSelected: true,
   }
 },
 methods: {
   showCal1() {
     this.visible1 = true;
   },
   showCal2() {
     this.visible2 = true;
   },
   showCal3() {
     this.visible3 = true;
   },
   changeDate(date) {
     console.log(date); // eslint-disable-line
   },
   handleOk1(date) {
     this.value1 = date;
     console.log(date); // eslint-disable-line
   },
   handleOk2(date) {
     this.value2 = date;
     console.log(date); // eslint-disable-line
   }
 },
};
</script>

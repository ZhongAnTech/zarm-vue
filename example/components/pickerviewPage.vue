<template lang="html">
 <Container class="picker-page">
   <PageHeader title="选择器 picker-view" />
   <main>
     <div>
       <za-panel>
         <za-panel-header title="基本"/>
         <za-panel-body>
             <za-picker-view
               :value="v1"
               :dataSource='data1'
               @change='handleChange'/>
         </za-panel-body>
       </za-panel>

     </div>
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
     v1:'',
     data1:[
      {
        value: '1',
        label: '北京市',
        children: [
          { value: '11', label: '海淀区' },
          { value: '12', label: '西城区' },
        ],
      },
      {
        value: '2',
        label: '上海市',
        children: [
          { value: '21', label: '杨浦区' },
          { value: '22', label: '静安区' },
        ],
      },
    ]
   }
 },
 methods: {
   handleChange(v){
     console.log(v);
   }
 },
};
</script>

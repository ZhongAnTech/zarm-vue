<template>
  <Container class="picker-page">
    <PageHeader title="日期选择器 DatePicker & DateSelect" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="日期选择器"/>
          <za-panel-body>
            <!-- <za-cell title="日期选择">
              <za-date-picker
                title="选择日期"
                placeholder="请选择日期"
                mode='date'
                v-model='v5'
                max='2017-10-25'
                min='1917-10-25'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'/>
            </za-cell>

            <za-cell title="月份选择">
              <za-date-picker
                title="选择月份"
                placeholder="请选择月份"
                mode='month'
                v-model='v6'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'/>
            </za-cell>

            <za-cell title="时间选择">
              <za-date-picker
                title="选择时间"
                placeholder="请选择时间"
                mode='time'
                v-model='v7'
                :minuteStep='15'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'/>
            </za-cell>

            <za-cell title="时间&日期">
              <za-date-picker
                title="选择"
                placeholder="请选择时间和日期"
                mode='datetime'
                v-model='v8'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'/>
            </za-cell>

            <za-cell title="自定义格式">
              <za-date-picker
                title="选择日期"
                placeholder="请选择日期"
                mode='date'
                @ok='handleOk'
                v-model='v9'
                @change='handleChange'
                @cancel='handleCancel'
                format="YYYY年MM月DD日"/>
            </za-cell> -->
           </za-panel-body>
          </za-panel>
        <za-panel>
          <za-panel-header title="平铺日期选择器 DatePickerView"/>
          <za-panel-body>
              <za-date-picker-view
                title="选择年份"
                placeholder="请选择年份"
                mode='datetime'
                @ok='handleOk'
                @change='handleChange'/>
          </za-panel-body>
         </za-panel>
         
      </div>
    </main>
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
      v2:'',
      v3:'',
      v4:'',
    }
  },
  methods: {
    handleOk(v){
      console.log('it may still scrolling when ok is clicked. so ues v-model or @change instead')
      console.log(v);
    },
    handleChange(v){
      console.log(v);
    },
    handleCancel(event){
      console.log('cancelled');
    },
    displayGenerator(selected) {
      return selected.map(item => item.name).join('/')
    }
  },
};
</script>
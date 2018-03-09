<template>
  <Container class="picker-page">
    <PageHeader title="日期选择器 DatePicker & DateSelect" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="日期选择器"/>
          <za-panel-body>
              <za-cell title="日期选择">
                  <za-button slot='description' size='xs' @click='visible1 = true'>开启</za-button>
              </za-cell>
              <za-cell title="月份选择">
                  <za-button slot='description' size='xs' @click='visible2 = true'>开启</za-button>
              </za-cell>
              <za-cell title="时间选择">
                  <za-button slot='description' size='xs' @click='visible3 = true'>开启</za-button>
              </za-cell>
              <za-cell title="时间&日期">
                  <za-button slot='description' size='xs' @click='visible4 = true'>开启</za-button>
              </za-cell>
           </za-panel-body>
        </za-panel>
        <za-date-picker
          :visible.sync='visible1'
          title="选择日期"
          placeholder="请选择日期"
          mode='date'
          max='2030-10-25'
          min='1917-10-25'
          @ok='handleOk'/>
        <za-date-picker
          :visible.sync='visible2'
          title="选择月份"
          placeholder="请选择月份"
          mode='month'
          @ok='handleOk'/>
        <za-date-picker
          :visible.sync='visible3'
          title="选择时间"
          placeholder="请选择时间"
          mode='time'
          @ok='handleOk'/>
        <za-date-picker
          :visible.sync='visible4'
          title="选择"
          placeholder="请选择时间和日期"
          mode='datetime'
          @ok='handleOk'/>
        <za-panel>
            <za-panel-header title="城市选择器 Select"/>
            <za-panel-body>
              <za-cell title="省市选择">
                  <za-date-select
                  :visible.sync='visible1'
                  v-model='v5'
                  title="选择日期"
                  placeholder="请选择日期"
                  mode='date'
                  max='2030-10-25'
                  min='1917-10-25'
                  @ok='handleOk'/>
              </za-cell>
            </za-panel-body>
          </za-panel>
        <za-panel>
          <za-panel-header title="平铺日期选择器 DatePickerView"/>
          <za-panel-body>
              <za-date-picker-view
                title="选择年份"
                placeholder="请选择年份"
                mode='datetime'
                min="2018-01-13"
                max="2090-11-27"
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
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      v1:'',
      v2:'',
      v3:'',
      v4:'',
      v5:'2008-01-10',
      v6:'',
      v7:'',
      v8:'',
      v9:'',
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
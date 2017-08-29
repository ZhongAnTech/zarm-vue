<template lang="html">
  <Container class="picker-page">
    <PageHeader title="选择器 picker" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>基本</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell title="单列">
              <za-picker
                :visible.sync='visible'
                v-model='v1'
                :dataSource='data1'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'/>
            </za-cell>

            <za-cell title="多列">
              <za-picker
                :visible.sync='visible2'
                :dataSource='data2'
                v-model='v2'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'/>
            </za-cell>

            <za-cell title="多列联动">
              <za-picker
                :visible.sync='visible3'
                :dataSource='data3'
                v-model='v3'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'/>
            </za-cell>

            <za-cell title="指定默认值">
              <za-picker
                :visible.sync='visible4'
                :dataSource='data3'
                v-model='v11'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'
                displayAddon="-"/>
            </za-cell>

            <za-cell title="禁止修改">
              <za-picker
                :visible.sync='visible5'
                :dataSource='data4'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'
                :defaultValue="'2'"
                disabled />
            </za-cell>

            <za-cell title="自定义格式">
              <za-picker
                :visible.sync='visible6'
                :dataSource='data5'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'
                placeholder='自定义placeholder'
                valueMember="code"
                displayMember="name"
                :displayGenerator='displayGenerator'/>
            </za-cell>

          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>城市选择器</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell title="省市选择">
              <za-picker
                :visible.sync='visible7'
                :dataSource='District'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'
                :cols='2'/>
            </za-cell>
            <za-cell title="省市区选择">
              <za-picker
                :visible.sync='visible8'
                :dataSource='District'
                v-model='v0'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'/>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>日期选择器</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell title="年份选择">
              <za-date-picker
                title="选择年份"
                v-model='v4'
                placeholder="请选择年份"
                mode='year'
                @ok='handleOk'
                @change='handleChange'
                @cancel='handleCancel'
                :wheelDefaultValue='2009'/>
            </za-cell>

            <za-cell title="日期选择">
              <za-date-picker
                title="选择日期"
                placeholder="请选择日期"
                mode='date'
                v-model='v5'
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
            </za-cell>

            <za-panel>
              <za-panel-header>
                <za-panel-title>层叠式选择器</za-panel-title>
              </za-panel-header>
              <za-panel-body>
                <za-cell title="级联选择">
                  <za-stack-picker
                    v-model='v10'
                    title="级联选择"
                    placeholder="请选择"
                    :dataSource='District'
                    :displayRender="selected => selected.map(item => item.label).join('-')"
                    @ok='handleOk'
                    @change='handleChange'
                    @cancel='handleCancel'/>
                </za-cell>
              </za-panel-body>
            </za-panel>

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
import District from './district';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
      visible8: false,
      visible9: false,
      v1:'',
      v2:'',
      v3:'',
      v4:'',
      v5:'',
      v6:'',
      v7:'',
      v8:'',
      v9:'',
      v10:[],
      v0:'',
      v11:['1', '12'],
      District,
      data1:[
        { value: '1', label: '选项一' },
        { value: '2', label: '选项二' },
      ],
      data2:[
        [
          { value: '1', label: '选项一' },
          { value: '2', label: '选项二' },
        ],
        [
          { value: 'a', label: '选项A' },
          { value: 'b', label: '选项B' },
        ],
      ],
      data3:[
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
            { value: '21', label: '黄埔区' },
            { value: '22', label: '虹口区' },
          ],
        },
      ],
      data4: [
        { value: '1', label: '选项一' },
        { value: '2', label: '选项二' },
      ],
      data5: [
        {
          code: '1',
          name: '北京市',
          children: [
            { code: '11', name: '海淀区' },
            { code: '12', name: '西城区' },
          ],
        },
        {
          code: '2',
          name: '上海市',
          children: [
            { code: '21', name: '黄埔区' },
            { code: '22', name: '虹口区' },
          ],
        },
      ],
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

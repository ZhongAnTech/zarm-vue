<template lang="html">
    <Container class="picker-page">
      <PageHeader title="选择器 Picker & Select" />
      <main>
        <div>
          <za-panel>
            <za-panel-header title="基本" />
            <za-panel-body>
              <za-cell title="单列">
                  <za-button slot='description' size='xs' @click='visible1 = true'>开启</za-button>
              </za-cell>
              <za-cell title="多列">
                  <za-button slot='description' size='xs' @click='visible2 = true'>开启</za-button>
              </za-cell>
              <za-cell title="多列联动">
                  <za-button slot='description' size='xs' @click='visible3 = true'>开启</za-button>
              </za-cell>
              <za-cell title="自定义格式">
                  <za-button slot='description' size='xs' @click='visible4 = true'>开启</za-button>
              </za-cell>
            </za-panel-body>
          </za-panel>
  
          <za-picker :close-on-click-modal='false' :visible.sync='visible1'  :dataSource='data1' @ok='handleOk1'  />
          <za-picker :visible.sync='visible2' :dataSource='data2'  @ok='handleOk' />
          <za-picker :visible.sync='visible3' :dataSource='data3'  @ok='handleOk' />
          <za-picker :visible.sync='visible4' :dataSource='data4'  @ok='handleOk2' placeholder='自定义placeholder'
                  valueMember="code" :itemRender='(item) => item.name'  />
                  
          <za-panel>
              <za-panel-header title="城市选择器 Select"/>
              <za-panel-body>
                <za-cell title="省市选择">
                  <za-select
                    v-model='v6'
                    :dataSource='District'
                    @ok='handleOk'
                    @change='handleChange'
                    @cancel='handleCancel'
                    :cols='2'/>
                </za-cell>
                <za-cell title="省市区选择">
                  <za-select
                    :dataSource='District'
                    v-model='v7'
                    :displayRender="selected => selected.map(item => item.label).join('／')"
                    @ok='handleOk'
                    @change='handleChange'
                    @cancel='handleCancel'/>
                </za-cell>
              </za-panel-body>
            </za-panel>
  
            <za-panel>
                <za-panel-header title="层叠式选择器 StackPicker"/>
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
            
          <za-panel>
            <za-panel-header title="平铺选择器 PickerView" />
            <za-panel-body>
              <za-picker-view :defaultValue="v5" :dataSource='data5' @change='handleChange' />
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
          visible1: false,
          visible2: false,
          visible3: false,
          visible4: false,
          visible6: false,
          visible7: false,
          v1: '2',
          v2: ['2','3'],
          v3: ['2','21'],
          v4: '',
          v5: ['2','22'],
          v6: '',
          v7: '',
          v10: [],
          District,
          data1: [
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
          ],
          data2: [
            [
              { value: '1', label: '选项一' },
              { value: '2', label: '选项二' },
            ],
            [
              { value: '3', label: '选项A' },
              { value: '4', label: '选项B' },
            ],
          ],
          data3: [
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
          ],
          data4: [
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
          data5: [
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
        handleOk1(v) {
          console.log('it may still scrolling when ok is clicked. so ues v-model or @change instead')
          console.log(v);
          this.$zaToast(v.value);
        },
        handleOk(v) {
          console.log('it may still scrolling when ok is clicked. so ues v-model or @change instead')
          console.log(v);
          this.$zaToast(JSON.stringify(v.map(item => item.value)));
        },
        handleOk2(v) {
          console.log('it may still scrolling when ok is clicked. so ues v-model or @change instead')
          console.log(v);
          this.$zaToast(JSON.stringify(v.map(item => item.code)));
        },
        handleChange(v) {
          console.log(v);
        },
        handleCancel(event) {
          console.log('cancelled');
        },
        displayGenerator(selected) {
          return selected.map(item => item.name).join('/')
        }
      },
    };
  </script>
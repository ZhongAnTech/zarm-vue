<template lang="html">
  <Container class="radio-page">
    <PageHeader title="单选框 Radio" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>基本</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell>
              <za-radio-group slot='description' v-model='radioGroup1' @change='handleGroupChange'>
                <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
              </za-radio-group>
              普通
            </za-cell>
            <za-cell>
              <za-radio-group slot='description' v-model='radioGroup2' @change='handleGroupChange'>
                <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
              </za-radio-group>
              指定默认值
            </za-cell>
            <za-cell>
              <za-radio-group slot='description' v-model='radioGroup3' @change='handleGroupChange'>
                <za-radio v-for='(city, index) in cities' :label='city' :key="city" :disabled='index === 1'>{{city}}</za-radio>
              </za-radio-group>
              禁用指定项
            </za-cell>
            <za-cell>
              <za-radio-group slot='description' v-model='radioGroup4' @change='handleGroupChange' shape='radius'>
                <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
              </za-radio-group>
              圆角
            </za-cell>
            <za-cell>
              <za-radio-group slot='description' v-model='radioGroup5' @change='handleGroupChange' shape='round'>
                <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
              </za-radio-group>
              椭圆角
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>块级样式</za-panel-title>
          </za-panel-header>
          <za-panel-body class="block-radio">
            <za-radio-group block compact shape='radius' v-model='radioGroup6' @change='handleGroupChange'>
              <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
            </za-radio-group>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>列表样式</za-panel-title>
          </za-panel-header>
          <za-panel-body class="block-radio">
            <za-radio-group type="cell" v-model='radioGroup7' @change='handleGroupChange'>
              <za-radio v-for='(city, index) in num' :label='city' :key="city" :disabled='index === 1'>{{city + (index === 1 ? ' disabled' : '')}}</za-radio>
            </za-radio-group>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>列表样式禁用状态</za-panel-title>
          </za-panel-header>
          <za-panel-body class="block-radio">
            <za-radio-group type="cell" v-model='radioGroup8' @change='handleGroupChange' disabled>
              <za-radio v-for='(city, index) in num' :label='city' :key="city">{{city}}</za-radio>
            </za-radio-group>
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
import '../styles/pages/RadioPage.scss';


export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      cities: ['上海', '北京', '广州', '深圳'],
      num: [1, 2, 3, 4],
      radioGroup1: '',
      radioGroup2: '上海',
      radioGroup3: '',
      radioGroup4: '',
      radioGroup5: '',
      radioGroup6: '',
      radioGroup7: '',
      radioGroup8: '',
    };
  },
  methods: {
    handleGroupChange(v) {
      console.log(v);
    }
  },
};
</script>

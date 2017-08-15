<template lang="html">
  <Container>
    <PageHeader title="复选框 Checkbox" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>普通</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell>
              <za-checkbox v-model='v1' @change='handleChange'>单独使用</za-checkbox>
            </za-cell>
            <za-cell>
              <za-checkbox-group v-model='checkboxGroup' slot='description' value='cities' @change='handleGroupChange'>
                <za-checkbox v-for='(city, index) in cities' :label="city" :key="city"  :disabled='index === 2'>{{city}}</za-checkbox>
              </za-checkbox-group>
              组合使用
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>按钮样式</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell>
              <za-checkbox-group
                v-model='checkboxGroup2'
                slot='description'
                type="button"
                @change='handleGroupChange'>
                <za-checkbox v-for='(city, index) in cities' :label="city" :key="city">{{city}}</za-checkbox>
              </za-checkbox-group>
              普通
            </za-cell>
            <za-cell>
              <za-checkbox-group
                v-model='checkboxGroup3'
                slot='description'
                type="button"
                @change='handleGroupChange'>
                <za-checkbox v-for='city in cities' :label="city" :key="city">{{city}}</za-checkbox>
              </za-checkbox-group>
              指定默认值
            </za-cell>
            <za-cell>
              <za-checkbox-group
                v-model='checkboxGroup4'
                slot='description'
                type="button"
                @change='handleGroupChange'>
                <za-checkbox v-for='(city, index) in cities' :label="city" :key="city" :disabled='index === 2'>{{city}}</za-checkbox>
              </za-checkbox-group>
              禁用指定项
            </za-cell>
            <za-cell>
              <za-checkbox-group
                v-model='checkboxGroup5'
                slot='description'
                type="button"
                shape="radius"
                @change='handleGroupChange'>
                <za-checkbox v-for='(city, index) in cities' :label="city" :key="city">{{city}}</za-checkbox>
              </za-checkbox-group>
              圆角
            </za-cell>
            <za-cell>
              <za-checkbox-group
                v-model='checkboxGroup6'
                slot='description'
                type="button"
                shape="round"
                @change='handleGroupChange'>
                <za-checkbox v-for='(city, index) in cities' :label="city" :key="city">{{city}}</za-checkbox>
              </za-checkbox-group>
              椭圆角
            </za-cell>
            <za-cell>
              <za-checkbox-group
                v-model='checkboxGroupCompact'
                slot='description'
                type="button"
                compact
                shape="round"
                @change='handleGroupChange'>
                <za-checkbox v-for='(city, index) in cities' :label="city" :key="city">{{city}}</za-checkbox>
              </za-checkbox-group>
              椭圆角compact
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>列表样式</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-checkbox-group
              v-model='checkboxGroup7'
              type="cell"
              @change='handleGroupChange'>
              <za-checkbox v-for='(city, index) in cities' :label="city" :key="city" :disabled='index === 2'>{{city}}</za-checkbox>
            </za-checkbox-group>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>列表样式禁用状态</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-checkbox-group
              v-model='checkboxGroup8'
              type="cell"
              disabled
              @change='handleGroupChange'>
              <za-checkbox v-for='(city, index) in cities' :label="city" :key="city">{{city}}</za-checkbox>
            </za-checkbox-group>
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
      v1: false,
      cities: ['上海', '北京', '广州', '深圳'],
      checkboxGroup: ['上海'],
      checkboxGroup2: [],
      checkboxGroup3: ['上海', '北京'],
      checkboxGroup4: [],
      checkboxGroup5: [],
      checkboxGroup6: [],
      checkboxGroup7: [],
      checkboxGroup8: [],
      checkboxGroupCompact: [],
    }
  },
  methods: {
    handleChange(ev) {
      console.log(this.v1, ev);
    },
    handleGroupChange(v){
      console.log(v);
    },
  },
};
</script>

<style lang="css">
</style>

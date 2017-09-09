<template lang="html">
  <Container>
    <PageHeader title="复选框 Checkbox" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <za-cell>
              <za-checkbox v-model='v1' @change='handleChange'>普通</za-checkbox>
            </za-cell>
            <za-cell>
              <za-checkbox v-model='v2' @change='handleChange'>选中</za-checkbox>
            </za-cell>
            <za-cell>
              <za-checkbox v-model='v3' @change='handleChange' disabled>禁止</za-checkbox>
            </za-cell>
            <za-cell>
              <za-checkbox v-model='v4' @change='handleChange' disabled>选中且禁止</za-checkbox>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="单列样式"/>
          <za-panel-body>
            <za-checkbox v-model='v5' @change='handleChange' type='cell'>阅读并同意《XXX条款》中的相关规定</za-checkbox>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="组合使用"/>
          <za-panel-body>
            <za-cell>
              <za-checkbox-group v-model='checkboxGroup' slot='description' @change='handleGroupChange'>
                <za-checkbox v-for='(city, index) in cities' :label="city" :key="city"  :disabled='index === 2'>{{city}}</za-checkbox>
              </za-checkbox-group>
              组合使用
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="按钮样式"/>
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
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="块级样式"/>
          <za-panel-body style='padding:10px'>
            <za-checkbox-group
              v-model='checkboxGroupCompact2'
              type="button"
              block
              shape="radius"
              @change='handleGroupChange'>
              <za-checkbox v-for='(city, index) in cities' :label="city" :key="city" :disabled='index === 2'>{{city}}</za-checkbox>
            </za-checkbox-group>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="列表组样式"/>
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
          <za-panel-header title="列表样式禁用状态"/>
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
      v2: true,
      v3: false,
      v4: true,
      v5: false,
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
      checkboxGroupCompact2: [],
    }
  },
  methods: {
    handleChange(v, e) {
      console.log(v, e);
    },
    handleGroupChange(v, e){
      console.log(v, e);
    },
  },
};
</script>

<style lang="css">
</style>

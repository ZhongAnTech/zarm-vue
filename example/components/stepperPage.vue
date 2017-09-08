<template lang="html">
  <Container class="stepper-page">
    <PageHeader title="步进器 Stepper" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <za-cell title="普通">
              <za-stepper slot='description' v-model='stepper1' @change='handleChange'></za-stepper>
            </za-cell>
            <za-cell title="设置默认值">
              <za-stepper slot='description' v-model='stepper2' @change='handleChange'></za-stepper>
            </za-cell>
            <za-cell title="设置上下限">
              <za-stepper slot='description' v-model='stepper3' @change='handleChange' :min='-3' :max='3'></za-stepper>
            </za-cell>
            <za-cell title="设置步长">
              <za-stepper slot='description' v-model='stepper4' @change='handleChange' :step='0.5'></za-stepper>
            </za-cell>
            <za-cell title="禁用状态">
              <za-stepper slot='description' v-model='stepper5' @change='handleChange' disabled></za-stepper>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="多形状"/>
          <za-panel-body>
            <za-cell title="圆角">
              <za-stepper slot='description' v-model='stepper6' @change='handleChange' shape="radius"></za-stepper>
            </za-cell>
            <za-cell title="圆型">
              <za-stepper slot='description' v-model='stepper7' @change='handleChange' shape="circle"></za-stepper>
            </za-cell>
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
      stepper1: 0,
      stepper2: 2,
      stepper3: 0,
      stepper4: 0,
      stepper5: 0,
      stepper6: 0,
      stepper7: 0,
    }
  },
  methods: {
    handleChange(event) {
      console.log(event);
    }
  },
};
</script>

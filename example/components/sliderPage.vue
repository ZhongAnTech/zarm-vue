<template lang="html">
  <Container class="slider-page">
    <PageHeader title="滑块 Slider" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本">
          </za-panel-header>
          <za-panel-body>
            <za-cell title="普通">
              <za-slider
                :value='0'
                @change='handleChange'
                ></za-slider>
            </za-cell>

            <za-cell title="设置默认值">
              <za-slider :value='20'></za-slider>
            </za-cell>

            <za-cell title="设置上下限">
              <za-slider :min='-100' :max='100' :value='0' ></za-slider>
            </za-cell>

            <za-cell title="设置步长">
              <za-slider :step='10' ></za-slider>
            </za-cell>

            <za-cell title="禁用状态">
              <za-slider :value='20' disabled ></za-slider>
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
  import '../styles/pages/SliderPage.scss';
  
  export default {
    components: {
      Container,
      PageHeader,
      PageFooter,
    },
    data() {
      return {
  
      }
    },
    methods: {
      handleChange(v){
        console.log(v)
      }
    },
  };
  </script>
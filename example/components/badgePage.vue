<template lang="html">
  <Container class="badge-page">
    <PageHeader title="徽标 Badge" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本">
          </za-panel-header>
          <za-panel-body>
            <za-cell hasArrow title="点状">
              <za-badge slot='description' shape='dot' @click='handleClick'></za-badge>
            </za-cell>
            <za-cell hasArrow title="直角">
              <za-badge slot='description' text='免费'></za-badge>
            </za-cell>
            <za-cell hasArrow title="圆角">
              <za-badge slot='description' text='new' shape='radius'></za-badge>
            </za-cell>
            <za-cell hasArrow title="椭圆">
              <span slot='description'>
                <za-badge :text.number='3' shape='circle'></za-badge>
                <za-badge text='999+' shape='round'></za-badge>
              </span>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title='上标位置'>
          </za-panel-header>
          <za-panel-body class="custom-panel">
            <div class="box">
              <za-badge sup shape='dot' @click='handleClick'><div class="box-item" /></za-badge>
            </div>
            <div class="box">
              <za-badge sup shape='radius' text='new' @click='handleClick'><div class="box-item" /></za-badge>
            </div>
            <div class="box">
              <za-badge sup shape='round' text='3' @click='handleClick'><div class="box-item" /></za-badge>
            </div>
            <div class="box">
              <za-badge sup shape='round' text='999+' @click='handleClick'><div class="box-item" /></za-badge>
            </div>

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
import '../styles/pages/BadgePage.scss';

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
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

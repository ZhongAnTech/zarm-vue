<template lang="html">
  <Container class="progress-page">
    <PageHeader title="进度条 Progress" />
    <main>
      <div class="progress">
        <za-progress :percent='percent' :theme='theme'>
          {{percent + '%'}}
        </za-progress>
      </div>
      <div class="progress">
        <za-progress type='circle' :percent='percent' :theme='theme'>
          <div class="progress-content">
            <span class="progress-text">{{percent}}</span>
            <span class="progress-percent">%</span>
          </div>
        </za-progress>
      </div>

      <za-panel>
        <za-panel-header title="基本"/>
        <za-panel-body>
            <za-cell title='进度'>
              <za-stepper
                shape="radius"
                :step='10'
                :min='0'
                :max='100'
                v-model='percent'
                @step-change='handleStepChange'
              />

            </za-cell>
            <za-cell title='主题'>
              <za-select
                v-model='theme'
                :dataSource='dataSource'
                @ok='handleOk'
              />
            </za-cell>
        </za-panel-body>
      </za-panel>
    </main>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/ProgressPage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      percent: 10,
      visible: false,
      theme: 'primary',
      dataSource:[
        { value: 'default', label: 'default' },
        { value: 'primary', label: 'primary' },
        { value: 'info', label: 'info' },
        { value: 'warning', label: 'warning' },
        { value: 'error', label: 'error' },
      ],
    }
  },
  methods: {
    handleStepChange(e) {

    },
    handleOk(v) {
      this.theme = v.value;
    }
  },
};
</script>

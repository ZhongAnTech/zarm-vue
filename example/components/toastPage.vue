<template lang="html">
  <Container class="toast-page">
    <PageHeader title="轻提示 Toast" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>提示信息</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell>
              <za-button size='xs' theme='error' slot='description' @click='visible1 = true'>开启</za-button>
              错误提示
            </za-cell>
            <za-cell>
              <za-button size='xs' theme='success' slot='description' @click='visible2 = true'>开启</za-button>
              成功提示(close-on-click-modal)
            </za-cell>
            <za-cell>
              <za-button size='xs' slot='description' @click='visible3 = true'>开启</za-button>
              指定关闭时间
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>加载中</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell>
              <za-button size='xs' slot='description' @click='visible4 = true'>开启</za-button>
              Loading
            </za-cell>
          </za-panel-body>
        </za-panel>
      </div>

      <za-toast :visible.sync='visible1' @toast-close='toastClose'>默认3秒自动关闭</za-toast>
      <za-toast :visible.sync='visible2' @toast-close='toastClose' :close-on-click-modal='true'>
        <div>
          <za-icon type="right-round-fill" style='fontSize: 3rem' />
          <div style='marginBottom: 5px'>预约成功</div>
        </div>
      </za-toast>
      <za-toast :visible.sync='visible3' @toast-close='toastClose' :duration='10000'>指定10秒自动关闭</za-toast>
      <za-loading :visible.sync='visible4'></za-loading>
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
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
    }
  },
  methods: {
    toastClose(reason, event){
      console.log(reason, event);
    }
  },
};
</script>

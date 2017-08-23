<template lang="html">
  <Container class="noticebar-page">
    <PageHeader title="通告栏 NoticeBar" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>基本</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-notice-bar hasArrow @click='handleClick'>带图标，带右侧箭头的链接样式</za-notice-bar>
            <!-- 也可以不绑定visible -->
            <za-notice-bar closable theme='error' :visible.sync='visible' icon='wrong-round'>
              自定义icon，自定义主题，显示关闭按钮。
            </za-notice-bar>
            <za-notice-bar autoscroll>各位zarmer请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。</za-notice-bar>
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
import '../styles/pages/NoticeBarPage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    handleClick(){
      alert('click this notice!');
    }
  },
};
</script>

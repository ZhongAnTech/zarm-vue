<template lang="html">
  <Container class="message-page">
    <PageHeader title="消息 Message" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>基本</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-message>primary</za-message>

            <za-message theme='info'>
              <za-icon type='info-round' class='icon' slot='icon'></za-icon>
              <span>info</span>
            </za-message>

            <za-message theme='success'>
              <za-icon type='right-round' class='icon' slot='icon'></za-icon>
              <span>success</span>
            </za-message>

            <za-message theme='warning'>
              <za-icon type='info-round' class='icon' slot='icon'></za-icon>
              <span>warning</span>
            </za-message>

            <za-message theme='error'>
              <za-icon type='wrong-round' class='icon' slot='icon'></za-icon>
              <span>error</span>
            </za-message>

          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>可操作</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-message theme='warning' hasArrow @click='handleClick'>链接样式的</za-message>
            <!-- 也可以不绑定visible -->
            <za-message theme='error' closable :visible.sync='visible'>链接样式的</za-message>
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
import '../styles/pages/MessagePage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    handleClick(event) {
      console.log(event);
      alert('click this message!');
    }
  },
};
</script>

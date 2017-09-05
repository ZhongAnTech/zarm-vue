<template lang="html">
  <Container class="swipeAction-page">
    <PageHeader title="滑动操作 SwipeAction" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>基本</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-swipe-action
              autoClose
              @close='handleClose'
              @open='handleOpen'
              :right="action1">
              <za-cell>左滑看看（自动关闭）</za-cell>
            </za-swipe-action>

            <za-swipe-action
              @close='handleClose'
              @open='handleOpen'
              :left="action1">
              <za-cell>右滑看看</za-cell>
            </za-swipe-action>

            <za-swipe-action
              @close='handleClose'
              @open='handleOpen'
              :left="action1"
              :right="action1">
              <za-cell>左右都能滑动</za-cell>
            </za-swipe-action>
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
      action1:[
        {
          theme: 'error',
          text: '右按钮1',
          onClick: () => console.log('右按钮1'),
        },
        {
          theme: 'success',
          text: '右按钮2',
          onClick: () => console.log('右按钮2'),
        },
      ]
    }
  },
  methods: {
    handleClose(reason) {
      console.log(reason);
    },
    handleOpen(reason) {
      console.log(reason);
    },
  },
};
</script>

<template lang="html">
  <Container class="index-page">
    <header>
      <section class="brand">
        <div class="brand-title">Zarm-vue UI</div>
        <div class="brand-description">众安科技移动端组件库</div>
      </section>
    </header>
    <main>
      <za-panel>
        <za-panel-header>
          <za-panel-title>表单组件</za-panel-title>
        </za-panel-header>
        <za-panel-body>
          <za-cell hasArrow @click.native="$router.push('/checkbox')">
            复选框 Checkbox
          </za-cell>
          <za-cell hasArrow>
            <!-- 另一种写法，但暂时没有css类支持 -->
            <router-link to="input" tag='div' style='width:100%'>文本框 Input</router-link>
          </za-cell>
          <za-cell hasArrow @click.native="$router.push('/radio')">
            单选框 Radio
          </za-cell>
          <za-cell hasArrow @click.native="$router.push('/switch')">
            开关 Switch
          </za-cell>
          <za-cell hasArrow @click.native="$router.push('/stepper')">
            步进器 Stepper
          </za-cell>
        </za-panel-body>
      </za-panel>

      <za-panel>
        <za-panel-header>
          <za-panel-title>操作反馈</za-panel-title>
        </za-panel-header>
        <za-panel-body>
          <za-cell hasArrow @click.native="$router.push('/button')">
            按钮 Button
          </za-cell>
        </za-panel-body>
      </za-panel>

      <za-panel>
        <za-panel-header>
          <za-panel-title>数据展示</za-panel-title>
        </za-panel-header>
        <za-panel-body>
          <za-cell hasArrow @click.native="$router.push('/badge')">
            徽标 Badge
          </za-cell>
          <za-cell hasArrow @click.native="$router.push('/cell')">
            列表项 Cell
          </za-cell>
          <za-cell hasArrow @click.native="$router.push('/icon')">
            图标 Icon
          </za-cell>
          <za-cell hasArrow @click.native="$router.push('/message')">
            消息 Message
          </za-cell>
          <za-cell hasArrow @click.native="$router.push('/spinner')">
            指示器 Spinner
          </za-cell>
          <za-cell hasArrow @click.native="$router.push('/tabs')">
            标签页 Tabs
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
import '../styles/pages/IndexPage.scss';

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

  },
};
</script>

<template lang="html">
  <Container class="index-page">
    <header>
      <section class="brand">
        <div class="brand-title">Zarm-vue UI</div>
        <div class="brand-description">众安科技移动端组件库 (zarm in Vue.js)</div>
      </section>
    </header>
    <main>
      <za-panel>
        <za-panel-header title="表单组件"/>
        <za-panel-body>
          <za-cell hasArrow @click="$router.push('/checkbox')">
            复选框 Checkbox
          </za-cell>
          <za-cell hasArrow @click="$router.push('/input')">
            文本框 Input
          </za-cell>
          <za-cell hasArrow @click="$router.push('/keyboard')">
            数字键盘 Keyboard & KeyboardPicker
          </za-cell>
          <za-cell hasArrow @click="$router.push('/picker')">
            选择器 Picker & Select
          </za-cell>
          <za-cell hasArrow @click="$router.push('/datepicker')">
            日期选择器 DatePicker & DateSelect
          </za-cell>
          <za-cell hasArrow @click="$router.push('/calendar')">
            日历 Calendar
          </za-cell>
          <za-cell hasArrow @click="$router.push('/radio')">
            单选框 Radio
          </za-cell>
          <za-cell hasArrow @click="$router.push('/stepper')">
            步进器 Stepper
          </za-cell>
          <za-cell hasArrow @click="$router.push('/switch')">
            开关 Switch
          </za-cell>
          <za-cell hasArrow @click="$router.push('/uploader')">
            上传组件 Uploader
          </za-cell>
          <za-cell hasArrow @click="$router.push('/slider')">
            滑块组件 Slider
          </za-cell>
           <za-cell hasArrow @click="$router.push('/searchbar')">
            搜索栏组件 SearchBar
          </za-cell>
        </za-panel-body>
      </za-panel>

      <za-panel>
        <za-panel-header title="操作反馈"/>
        <za-panel-body>
          <za-cell hasArrow @click="$router.push('/actionsheet')">
            动作面板 ActionSheet
          </za-cell>
          <za-cell hasArrow @click="$router.push('/button')">
            按钮 Button
          </za-cell>
          <za-cell hasArrow @click="$router.push('/modal')">
            模态框 Modal
          </za-cell>
          <za-cell hasArrow @click="$router.push('/popup')">
            弹出框 Popup
          </za-cell>
          <za-cell hasArrow @click="$router.push('/pull')">
            下拉刷新 Pull
          </za-cell>
          <za-cell hasArrow @click="$router.push('/swipeaction')">
            滑动操作 SwipeAction
          </za-cell>
          <za-cell hasArrow @click="$router.push('/toast')">
            轻提示 Toast
          </za-cell>
        </za-panel-body>
      </za-panel>

      <za-panel>
        <za-panel-header title="数据展示"/>
        <za-panel-body>
          <za-cell hasArrow @click="$router.push('/accordion')">
            手风琴 Accordion
          </za-cell>
          <za-cell hasArrow @click="$router.push('/badge')">
            徽标 Badge
          </za-cell>
          <za-cell hasArrow @click="$router.push('/cell')">
            列表项 Cell
          </za-cell>
          <za-cell hasArrow @click="$router.push('/icon')">
            图标 Icon
          </za-cell>
          <za-cell hasArrow @click="$router.push('/message')">
            消息 Message
          </za-cell>
          <za-cell hasArrow @click="$router.push('/noticebar')">
            通知栏 NoticeBar
          </za-cell>
          <za-cell hasArrow @click="$router.push('/panel')">
            面板 Panel
          </za-cell>
          <za-cell hasArrow @click="$router.push('/progress')">
            进度条 Progress
          </za-cell>
          <za-cell hasArrow @click="$router.push('/spinner')">
            指示器 Spinner
          </za-cell>
          <za-cell hasArrow @click="$router.push('/swipe')">
            图片轮播 Swipe
          </za-cell>
          <za-cell hasArrow @click="$router.push('/tabs')">
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

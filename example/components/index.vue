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
        <za-panel-header title="数据录入(12)"/>
        <za-panel-body>
          <za-cell hasArrow @click="$router.push('/input')">
            文本框 Input
          </za-cell>
          <za-cell hasArrow @click="$router.push('/radio')">
            单选框 Radio
          </za-cell>
          <za-cell hasArrow @click="$router.push('/checkbox')">
            复选框 Checkbox
          </za-cell>
          <za-cell hasArrow @click="$router.push('/picker')">
            选择器 Picker
          </za-cell>
          <za-cell hasArrow @click="$router.push('/stack-picker')">
            层叠选择器 StackPicker
          </za-cell>
          <za-cell hasArrow @click="$router.push('/date-picker')">
            日期选择器 DatePicker
          </za-cell>
          <za-cell hasArrow @click="$router.push('/calendar')">
            日历 Calendar
          </za-cell>
          <za-cell hasArrow @click="$router.push('/slider')">
            滑动输入框 Slider
          </za-cell>
          <za-cell hasArrow @click="$router.push('/stepper')">
            步进器 Stepper
          </za-cell>
          <za-cell hasArrow @click="$router.push('/switch')">
            开关 Switch
          </za-cell>
           <za-cell hasArrow @click="$router.push('/search-bar')">
            搜索栏 SearchBar
          </za-cell>
          <za-cell hasArrow @click="$router.push('/file-picker')">
            文件选择器 FilePicker
          </za-cell>
          <za-cell hasArrow @click="$router.push('/keyboard')">
            虚拟键盘 Keyboard
          </za-cell>
        </za-panel-body>
      </za-panel>

      <za-panel>
        <za-panel-header title="操作反馈(8)"/>
        <za-panel-body>
          <za-cell hasArrow @click="$router.push('/button')">
            按钮 Button
          </za-cell>
          <za-cell hasArrow @click="$router.push('/action-sheet')">
            动作面板 ActionSheet
          </za-cell>
          <za-cell hasArrow @click="$router.push('/message')">
            消息 Message
          </za-cell>
          <za-cell hasArrow @click="$router.push('/modal')">
            模态框 Modal
          </za-cell>
          <za-cell hasArrow @click="$router.push('/toast')">
            轻提示 Toast
          </za-cell>
          <za-cell hasArrow @click="$router.push('/pull')">
            上拉加载下拉刷新 Pull
          </za-cell>
          <za-cell hasArrow @click="$router.push('/swipe-action')">
            滑动操作 SwipeAction
          </za-cell>
           <za-cell hasArrow @click="$router.push('/activity-indicator')">
            活动指示器 ActivityIndicator
          </za-cell>
        </za-panel-body>
      </za-panel>
      <za-panel>
        <za-panel-header title="数据展示(8)"/>
        <za-panel-body>
          <za-cell hasArrow @click="$router.push('/collapse')">
            折叠面板 Collapse
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
          <za-cell hasArrow @click="$router.push('/carousel')">
            走马灯 Carousel
          </za-cell>
          <za-cell hasArrow @click="$router.push('/progress')">
            进度条 Progress
          </za-cell>
          <za-cell hasArrow @click="$router.push('/notice-bar')">
            通知栏 NoticeBar
          </za-cell>
          <za-cell hasArrow @click="$router.push('/panel')">
            面板 Panel
          </za-cell>
        </za-panel-body>
      </za-panel>

      <za-panel>
        <za-panel-header title="导航(3)"/>
        <za-panel-body>
          <za-cell hasArrow @click="$router.push('/popup')">
            弹出框 Popup
          </za-cell>
          <za-cell hasArrow @click="$router.push('/tabs')">
            标签页 Tabs
          </za-cell>
           <za-cell hasArrow @click="$router.push('/tab-bar')">
            标签栏 TabBar
          </za-cell>
          <za-cell hasArrow @click="$router.push('/nav-bar')">
            导航栏 NavBar
          </za-cell>
        </za-panel-body>
      </za-panel>

       <za-panel>
        <za-panel-header title="其他(1)"/>
        <za-panel-body>
          <za-cell hasArrow @click="$router.push('/locale-provider')">
            国际化 LocaleProvider
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

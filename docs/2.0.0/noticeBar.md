<script>
export default {
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


:::demo 基本用法
```html
  <za-notice-bar hasArrow @click='handleClick'>带图标，带右侧箭头的链接样式</za-notice-bar>
  <!-- 也可以不绑定visible -->
  <za-notice-bar closable theme='error' :visible.sync='visible' icon='wrong-round'>
    自定义icon，自定义主题，显示关闭按钮。
  </za-notice-bar>
  <za-notice-bar scrollable theme='warning'>各位zarmer请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。</za-notice-bar>
```
:::

### API

#### NoticeBar Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-noticebar | | 类名前缀 |
| theme | string | 'default' | 'default', 'primary', 'success', 'warning', 'error' | 主题 |
| icon | string | | | 设置图标 |
| scrollable | bool | false | | 是否开启自动滚动轮播 |
| closable | bool | false | | 是否显示关闭按钮 |
| hasArrow | bool | false | | 是否显示箭头 |

#### NoticeBar Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | click时触发的事件 | event 事件对象 |
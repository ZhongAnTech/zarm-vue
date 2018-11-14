<script>
export default {
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


:::demo 基本用法
```html
  <za-message>默认</za-message>

  <za-message theme='error'>自定义主题</za-message>

  <za-message theme='warning' icon='info-round'>设置图标</za-message>

  <za-message theme='success'>
    <za-icon type='right-round' slot='icon'></za-icon>
    <span>slot 插槽</span>
  </za-message>
```
:::

:::demo 可操作
```html
  <za-message theme='warning' hasArrow @click='handleClick'>链接样式的</za-message>
  <!-- 也可以不绑定visible -->
  <za-message theme='error' closable :visible.sync='visible'>可关闭的</za-message>
```
:::

### API

#### Message Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| theme | string | 'default' | 'default', 'primary', 'success', 'warning', 'error' | 主题 |
| icon | string | | | 设置图标 |
| closable | bool | false | | 是否显示关闭按钮 |
| hasArrow | bool | false | | 是否显示箭头 |
| prefixCls | string | za-message | | 类名前缀 |


#### Message Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | click时触发的事件 | event 事件对象 |
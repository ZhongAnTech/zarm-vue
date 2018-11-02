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


:::demo 基本
```html
  <za-message>primary</za-message>

  <za-message theme='info'>
    <za-icon type='info-round' class='icon' slot='icon'></za-icon>
    <span>info</span>
  </za-message>

  <za-message theme='success' icon='right-round'>
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
```
:::

:::demo 可操作
```html
  <za-message theme='warning' hasArrow @click='handleClick'>链接样式的</za-message>
  <!-- 也可以不绑定visible -->
  <za-message theme='error' closable :visible.sync='visible'>链接样式的</za-message>
```
:::

### API

#### Message Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-message | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| hasClosable | bool | false | | 是否显示关闭按钮 |
| hasArrow | bool | false | | 是否显示箭头 |

#### Message Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | click时触发的事件 | event 事件对象 |
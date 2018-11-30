<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    clickHandle() {
      alert('clickHandle');
    },
  },
};
</script>

## 导航栏 NavBar

:::demo 左侧渲染
```html
  <za-nav-bar>
    <div slot="left"><za-icon theme="primary" type="arrow-left" @click="clickHandle"></za-icon></div>
    <div slot="title">这是标题</div>
    <div slot="right"></div>
  </za-nav-bar>
```
:::

:::demo 右侧渲染
```html
  <za-nav-bar>
    <div slot="left"></div>
    <div slot="title">这是标题</div>
    <div slot="right"><za-icon theme="primary" type="question-round" @click="clickHandle"></za-icon></div>
  </za-nav-bar>
```
:::

:::demo 复数渲染
```html
  <za-nav-bar>
    <div slot="left"><za-icon theme="primary" type="arrow-left" @click="clickHandle"></za-icon></div>
    <div slot="title">这是标题</div>
    <div slot="right">
      <za-icon theme="primary" type="add" @click="clickHandle"></za-icon>
      <za-icon theme="primary" type="question-round" @click="clickHandle"></za-icon>
    </div>
  </za-nav-bar>
```
:::

### API

#### NavBar Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-navbar | | 类名前缀 |
| title | html | | | 导航栏标题渲染 |
| slot="left" | html | | | 导航栏左侧渲染 |
| slot="right" | html | | | 导航栏右侧渲染 |

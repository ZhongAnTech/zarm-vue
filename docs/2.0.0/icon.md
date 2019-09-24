## 图标 Icon

:::demo 基本

```html
<div class="grid">
  <div
    v-for="(i, index) in ICONS"
    class="grid-column"
    style="width: 33.33%;display: inline-block;padding: 15px;text-align: center;"
    :key="index"
  >
    <za-icon theme="primary" :type="i" class="icon"></za-icon>
    <span class="icon-name">{{i}}</span>
  </div>
</div>
```

:::

:::demo Iconfont Symbol自定义图标

```html
<div class="grid">
  <div
    class="grid-column"
    style="width: 33.33%;display: inline-block;padding: 15px;text-align: center;"
  >
    <za-icon tag="symbol" theme="primary" type="home" class="icon"></za-icon>
    <span class="icon-name">home</span>
  </div>
  <div
    class="grid-column"
    style="width: 33.33%;display: inline-block;padding: 15px;text-align: center;"
  >
    <za-icon tag="symbol" theme="primary" type="insurance" class="icon"></za-icon>
    <span class="icon-name">insurance</span>
  </div>
  <div
    class="grid-column"
    style="width: 33.33%;display: inline-block;padding: 15px;text-align: center;"
  >
    <za-icon tag="symbol" theme="primary" type="user" class="icon"></za-icon>
    <span class="icon-name">user</span>
  </div>
</div>
```

:::

> Iconfont Symbol使用说明

```js
import { Icon } from 'zarm-vue';
Icon.createSymbolIconfont('//at.alicdn.com/t/font_1340918_4p9b5skcr79.js');
```


### Vue Script

```javascript
<script name="vue">
const ICONS = [
  'right', 'right-round', 'right-round-fill',
  'wrong', 'wrong-round', 'wrong-round-fill',
  'info-round', 'info-round-fill',
  'question-round', 'question-round-fill',
  'warning-round', 'warning-round-fill',
  'arrow-left', 'arrow-right', 'arrow-top', 'arrow-bottom',
  'add', 'add-round', 'add-round-fill',
  'minus', 'minus-round', 'minus-round-fill',
  'broadcast', 'search',
].sort();

export default {
  data() {
    return {
      ICONS,
      i: null
    }
  }
};
</script>
```

### API

#### Icon Attributes

| 属性      | 类型   | 默认值     | 可选值／参数    | 说明     |
| :-------- | :----- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| theme     | string | 'default'  | 'default', 'primary', 'info', 'success', 'warning', 'error'  | 主题     |
| type      | string |            | 'right', 'right-round', 'right-round-fill','wrong', 'wrong-round', 'wrong-round-fill', 'info-round', 'info-round-fill', 'question-round', 'question-round-fill', 'warning-round', 'warning-round-fill', 'arrow-left', 'arrow-right', 'arrow-top', 'arrow-bottom', 'add', 'add-round', 'add-round-fill', 'minus', 'minus-round', 'minus-round-fill', 'broadcast', 'search' | 图标类型 |
| tag     | string |   | 'symbol'  | iconfont symbol类型图标     |

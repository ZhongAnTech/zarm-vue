

## 图标 Icon

:::demo 基本
```html
  <div class="grid">
    <div v-for='(i, index) in ICONS' class="grid-column" style="width: 33.33%;display: inline-block;padding: 15px;text-align: center;" :key="index">
      <za-icon theme="primary" :type='i' class='icon'></za-icon>
      <span class="icon-name">{{i}}</span>
    </div>
  </div>
```
:::

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

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-stepper | | 类名前缀 |
| theme | string | 'default' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| type | string | | 'right', 'right-round', 'right-round-fill','wrong', 'wrong-round', 'wrong-round-fill', 'info-round', 'info-round-fill', 'question-round', 'question-round-fill', 'warning-round', 'warning-round-fill', 'arrow-left', 'arrow-right', 'arrow-top', 'arrow-bottom', 'add', 'add-round', 'add-round-fill', 'minus', 'minus-round', 'minus-round-fill', 'broadcast', 'search' | 图标类型 |
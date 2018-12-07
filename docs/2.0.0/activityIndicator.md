

## 活动指示器 ActivityIndicator

:::demo 基本
```html
  <za-cell>
    <za-activity-indicator slot='description' class="rotate360"></za-activity-indicator>
    普通
  </za-cell>
  <za-cell>
    <za-activity-indicator slot='description' class="rotate360" theme='error'></za-activity-indicator>
    主题
  </za-cell>
  <za-cell>
    <za-activity-indicator slot='description' class="rotate360" size="lg"></za-activity-indicator>
    大号
  </za-cell>
```
:::

### Vue Script
```javascript
<script name="vue">
export default {
  data() {
    return {
    }
  }
};
</script>
```

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-activity-indicator | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| size | string | | 'lg' | 大小 |
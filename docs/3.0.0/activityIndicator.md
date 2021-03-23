## 活动指示器 ActivityIndicator

:::demo 基本

```html
<za-cell title="普通">
  <template v-slot:description >
  <za-activity-indicator
    slot="description"
    class="rotate360"
  ></za-activity-indicator>
  </template>
</za-cell>
<za-cell title="主题">
  <template v-slot:description >
  <za-activity-indicator
    slot="description"
    class="rotate360"
    theme="error"
  ></za-activity-indicator>
  </template>
</za-cell>
<za-cell title="大号">
  <template v-slot:description >
  <za-activity-indicator
    slot="description"
    class="rotate360"
    size="lg"
  ></za-activity-indicator>
  </template>
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

| 属性      | 类型   | 默认值                | 可选值／参数                                                | 说明     |
| :-------- | :----- | :-------------------- | :---------------------------------------------------------- | :------- |
| theme     | string | 'primary'             | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题     |
| size      | string |                       | 'lg'                                                        | 大小     |

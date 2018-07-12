<script>
export default {
  data() {
    return {
    }
  }
};
</script>


:::demo
```html
  <za-panel>
    <za-panel-header title="基本"></za-panel-header>
    <za-panel-body>
      <za-cell>
        <za-spinner slot='description' class="rotate360"></za-spinner>
        普通
      </za-cell>
      <za-cell>
        <za-spinner slot='description' class="rotate360" theme='error'></za-spinner>
        主题
      </za-cell>
      <za-cell>
        <za-spinner slot='description' class="rotate360" size="lg"></za-spinner>
        大号
      </za-cell>
    </za-panel-body>
  </za-panel>

```
:::

::: api
### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-stepper | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| size | string | | 'lg' | 大小 |
:::
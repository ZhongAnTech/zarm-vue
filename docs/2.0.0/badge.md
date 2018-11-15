<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

## 徽标 Badge

:::demo 基本
```html
      <za-cell has-arrow title="点状">
        <za-badge slot='description' shape='dot' @click='handleClick'></za-badge>
      </za-cell>
      <za-cell has-arrow title="直角">
        <za-badge slot='description' text='免费'></za-badge>
      </za-cell>
      <za-cell has-arrow title="圆角">
        <za-badge slot='description' text='new' shape='radius'></za-badge>
      </za-cell>
      <za-cell has-arrow title="椭圆">
        <span slot='description'>
          <za-badge :text.number='3' shape='circle'></za-badge>
          <za-badge text='999+' shape='round'></za-badge>
        </span>
      </za-cell>
```
:::

::: demo 上标位置
```html
    <div class="custom-panel">
      <div class="box">
        <za-badge sup shape='dot' @click='handleClick'><div class="box-item" /></za-badge>
      </div>
      <div class="box">
        <za-badge sup shape='radius' text='new' @click='handleClick'><div class="box-item" /></za-badge>
      </div>
      <div class="box">
        <za-badge sup shape='round' text='3' @click='handleClick'><div class="box-item" /></za-badge>
      </div>
      <div class="box">
        <za-badge sup shape='round' text='999+' @click='handleClick'><div class="box-item" /></za-badge>
      </div>
    </div>
```
:::

### API

#### Badge Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-badge | | 类名前缀 |
| theme | string | 'error' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| shape | string | | 'dot', 'radius', 'round', 'circle' | 形状 |
| text | string, number | | | 显示文字 |
| sup | bool | false | | 是否上标位置 |

#### Badge Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | click时触发的事件 | event 事件对象 |
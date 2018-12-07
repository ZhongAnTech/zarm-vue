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
          <za-badge text='999+' shape='round'></za-badge>
        </span>
      </za-cell>
      <za-cell has-arrow title="圆形">
        <span slot='description'>
          <za-badge :text.number='3' shape='circle'></za-badge>
        </span>
      </za-cell>
      <za-cell has-arrow title="叶形">
        <span slot='description'>
          <za-badge text='新品' shape='leaf'></za-badge>
        </span>
      </za-cell>
```
:::

:::demo 多主题
```html
      <div class="custom-panel">
        <div class="box">
          <za-badge sup shape='dot' theme="primary"></za-badge>
        </div>
        <div class="box">
          <za-badge sup shape='dot' theme="success"></za-badge>
        </div>
        <div class="box">
          <za-badge sup shape='dot' theme="warning"></za-badge>
        </div>
        <div class="box">
          <za-badge sup shape='dot' theme="error"></za-badge>
        </div>
        <div class="box">
          <za-badge shape='round' text='999+' theme="primary"></za-badge>
        </div>
        <div class="box">
          <za-badge shape='round' text='999+' theme="success"></za-badge>
        </div>
        <div class="box">
          <za-badge shape='round' text='999+' theme="warning"></za-badge>
        </div>
        <div class="box">
          <za-badge shape='round' text='999+' theme="error"></za-badge>
        </div>
      </div>
```
:::

::: demo 上标位置
```html
    <div class="custom-panel">
      <div class="box">
        <za-badge sup shape='dot' @click='handleClick'>
          <div class="box-item"></div>
        </za-badge>
      </div>
      <div class="box">
        <za-badge sup shape='rect' text='免费' @click='handleClick'>
          <div class="box-item"></div>
        </za-badge>
      </div>
      <div class="box">
        <za-badge sup shape='radius' text='new' @click='handleClick'>
          <div class="box-item"></div>
        </za-badge>
      </div>
      <div class="box">
        <za-badge sup shape='round' text='999+' @click='handleClick'>
          <div class="box-item"></div>
        </za-badge>
      </div>
      <div class="box">
        <za-badge sup shape='circle' text='3' @click='handleClick'>
          <div class="box-item"></div>
        </za-badge>
      </div>
      <div class="box">
        <za-badge sup shape='leaf' text='新品' @click='handleClick'>
          <div class="box-item"></div>
        </za-badge>
      </div>
    </div>
```
:::

::: demo 文本示例
```html
    <div class="text-panel">
      <div class="box">
        <za-badge sup shape="dot">
          <span class="box-text">邀请有奖</span>
        </za-badge>
      </div>
      <div class="box">
        <span class="box-text">邀请有奖</span>
        <za-badge sup shape="dot"/>
      </div>
    </div>
```
:::

### Vue Script
```javascript
<script name="vue">
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
```

### API

#### Badge Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-badge | | 类名前缀 |
| className | string |  | | className |
| theme | string | 'error' | 'default', 'primary', 'success', 'warning', 'error' | 主题 |
| shape | string | | 'dot', 'rect', 'radius', 'round', 'circle', 'leaf' | 形状 |
| text | string, number | | | 显示文字 |
| sup | bool | false | | 是否上标位置 |

#### Badge Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | click时触发的事件 | event 事件对象 |
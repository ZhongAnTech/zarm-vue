<script>
export default {
  data() {
    return {
      stepper1: 0,
      stepper2: 2,
      stepper3: 0,
      stepper4: 0,
      stepper5: 0,
      stepper6: 0,
      stepper7: 0,
    }
  },
  methods: {
    handleChange(event) {
      console.log(event);
    }
  },
};
</script>


:::demo
```html
  <za-panel>
    <za-panel-header title="基本"></za-panel-header>
    <za-panel-body>
      <za-cell title="普通">
        <za-stepper slot='description' v-model='stepper1' @change='handleChange'></za-stepper>
      </za-cell>
      <za-cell title="设置默认值">
        <za-stepper slot='description' v-model='stepper2' @change='handleChange'></za-stepper>
      </za-cell>
      <za-cell title="设置上下限">
        <za-stepper slot='description' v-model='stepper3' @change='handleChange' :min='-3' :max='3'></za-stepper>
      </za-cell>
      <za-cell title="设置步长">
        <za-stepper slot='description' v-model='stepper4' @change='handleChange' :step='0.5'></za-stepper>
      </za-cell>
      <za-cell title="禁用状态">
        <za-stepper slot='description' v-model='stepper5' @change='handleChange' disabled></za-stepper>
      </za-cell>
    </za-panel-body>
  </za-panel>

  <za-panel>
    <za-panel-header title="多形状"></za-panel-header>
    <za-panel-body>
      <za-cell title="圆角">
        <za-stepper slot='description' v-model='stepper6' @change='handleChange' shape="radius"></za-stepper>
      </za-cell>
      <za-cell title="圆型">
        <za-stepper slot='description' v-model='stepper7' @change='handleChange' shape="circle"></za-stepper>
      </za-cell>
    </za-panel-body>
  </za-panel>

```
:::


::: api
### API

#### Stepper Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-stepper | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| shape | string | | 'radius', 'circle' | 形状 |
| v-model | number | | | 绑定值 |
| disabled | bool | false | | 是否禁用 |
| min | number | | | 最小值 |
| max | number | | | 最大值 |
| step | number | 1 | | 步长 |

#### Stepper Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 点击加减后触发的事件 | event 事件对象 |
:::
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleChange(ev,value){
      console.log(value)
    }
  },
};
</script>


:::demo 基本
```html
  <za-cell title="普通">
    <za-slider
      :default-value='0'
      @change='handleChange'
      ></za-slider>
  </za-cell>

  <za-cell title="设置默认值">
    <za-slider :default-value='20'></za-slider>
  </za-cell>

  <za-cell title="设置上下限">
    <za-slider :min='-100' :max='100' :default-value='0' ></za-slider>
  </za-cell>

  <za-cell title="设置步长">
    <za-slider :step='10' ></za-slider>
  </za-cell>

  <za-cell title="禁用状态">
    <za-slider :default-value='20' disabled ></za-slider>
  </za-cell>
```
:::

### API

#### Slider Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-slider | | 类名前缀 |
| defaultValue | number | | | 值 |
| min | number | | | 最小值 |
| max | number | | | 最大值 |
| step | number | 1 | | 步长 |
| disabled | bool | false | | 是否禁用 |


#### Slider Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | func | noop | \(event:$even, value: number\) | 值变化时触发的回调函数 |
## 滑动输入条 Slider

:::demo 基本

```html
<za-cell title="普通">
  <za-slider :default-value="40" @change="handleChange"></za-slider>
</za-cell>

<za-cell title="设置默认值">
  <za-slider :default-value="20"></za-slider>
</za-cell>

<za-cell title="设置上下限">
  <za-slider
    :min="-100"
    :max="100"
    v-model="initvalue"
    @change="handleChange"
  ></za-slider>
</za-cell>

<za-cell title="设置步长">
  <za-slider :step="10"></za-slider>
</za-cell>

<za-cell title="禁用状态">
  <za-slider :default-value="20" disabled></za-slider>
</za-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      initvalue: 10,
    }
  },
  methods: {
    handleChange(){
      const self = this;
      console.log(self.initvalue)
    }
  },
};
</script>
```

### API

#### Slider Attributes

| 属性          | 类型    | 默认值 | 可选值／参数 | 说明       |
| :------------ | :------ | :----- | :----------- | :--------- |
| v-model       | number  |        |              | 绑定选项值 |
| default-value | number  |        |              | 值         |
| min           | number  |        |              | 最小值     |
| max           | number  |        |              | 最大值     |
| step          | number  | 1      |              | 步长       |
| disabled      | boolean | false  |              | 是否禁用   |

#### Slider Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| change   | function | noop     | \(event:\$even, value: number\) | 值变化时触发的回调函数 |

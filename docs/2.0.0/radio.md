<script>
export default {
  data() {
    return {
      city: null,
      index: null,
      cities: ['上海', '北京', '广州', '深圳'],
      num: ['选项一', '选项二', '选项三', '选项四'],
      radioGroup1: '',
      radioGroup2: '上海',
      radioGroup3: '',
      radioGroup4: '',
      radioGroup5: '',
      radioGroup6: '',
      radioGroup7: '',
      radioGroup8: '',
      radioGroup9: '',
    };
  },
  methods: {
    handleGroupChange(v) {
      console.log(v);
    }
  },
};
</script>


:::demo 基本
```html
  <za-cell>
    <za-radio-group slot='description' v-model='radioGroup9' @change='handleGroupChange'>
      <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
    </za-radio-group>
    普通
  </za-cell>
  <za-cell>
    <za-radio-group slot='description' v-model='radioGroup1' @change='handleGroupChange' type="button">
      <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
    </za-radio-group>
    Button
  </za-cell>
  <za-cell>
    <za-radio-group slot='description' v-model='radioGroup2' @change='handleGroupChange' type="button">
      <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
    </za-radio-group>
    指定默认值
  </za-cell>
  <za-cell>
    <za-radio-group slot='description' v-model='radioGroup3' @change='handleGroupChange' type="button">
      <za-radio v-for='(city, index) in cities' :label='city' :key="city" :disabled='index === 1'>{{city}}</za-radio>
    </za-radio-group>
    禁用指定项
  </za-cell>
  <za-cell>
    <za-radio-group slot='description' v-model='radioGroup4' @change='handleGroupChange' shape='radius' type="button">
      <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
    </za-radio-group>
    圆角
  </za-cell>
  <za-cell>
    <za-radio-group slot='description' v-model='radioGroup5' @change='handleGroupChange' shape='round' type="button">
      <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
    </za-radio-group>
    椭圆角
  </za-cell>
```
:::

:::demo 块级样式
```html
  <za-radio-group block compact shape='radius' type="button" v-model='radioGroup6' @change='handleGroupChange'>
    <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
  </za-radio-group>
```
:::

:::demo 列表样式
```html
  <za-radio-group type="cell" v-model='radioGroup7' @change='handleGroupChange'>
    <za-radio v-for='(city, index) in num' :label='city' :key="city" :disabled='index === 1'>{{city + (index === 1 ? ' disabled' : '')}}</za-radio>
  </za-radio-group>
```
:::

:::demo 列表样式禁用状态
```html
  <za-radio-group type="cell" v-model='radioGroup8' @change='handleGroupChange' disabled>
    <za-radio v-for='(city, index) in num' :label='city' :key="city">{{city}}</za-radio>
  </za-radio-group>
```
:::

### API

#### Radio Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-radio | | 类名前缀 |
| disabled | bool | false | | 是否禁用 |

#### Radio Group Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-radio | | 类名前缀 |
| v-model | string | | | 绑定选中radio的label值 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| type | string | | 'button', 'cell' | 显示类型 |
| shape | string | | 'radius', 'round' | 形状 |
| block | bool | false | | 是否为块级元素 |
| disabled | bool | false | | 是否禁用 |
| compact | bool | false | | 是否启用紧凑模式 |

#### Radio Group Attributes
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 选择后触发的事件 | value 选中radio的label值 |
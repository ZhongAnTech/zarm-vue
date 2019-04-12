## 复选框 Checkbox

:::demo 基本

```html
<za-cell>
  <za-checkbox @change="handleChange">普通</za-checkbox>
</za-cell>
<za-cell>
  <za-checkbox checked @change="handleChange">选中</za-checkbox>
</za-cell>
<za-cell>
  <za-checkbox disabled>禁止</za-checkbox>
</za-cell>
<za-cell>
  <za-checkbox checked disabled>选中且禁止</za-checkbox>
</za-cell>
```

:::

:::demo 单列样式

```html
<za-checkbox v-model="v5" @change="handleChange" type="cell"
  >阅读并同意《XXX条款》中的相关规定</za-checkbox
>
```

:::

:::demo 按钮样式

```html
<za-cell>
  <za-checkbox-group
    v-model="checkboxGroup2"
    slot="description"
    type="button"
    @change="handleGroupChange"
  >
    <za-checkbox v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</za-checkbox
    >
  </za-checkbox-group>
  普通
</za-cell>
<za-cell>
  <za-checkbox-group
    v-model="checkboxGroup3"
    slot="description"
    type="button"
    @change="handleGroupChange"
  >
    <za-checkbox v-for="city in cities" :value="city" :key="city"
      >{{city}}</za-checkbox
    >
  </za-checkbox-group>
  指定默认值
</za-cell>
<za-cell>
  <za-checkbox-group
    v-model="checkboxGroup4"
    slot="description"
    type="button"
    @change="handleGroupChange"
  >
    <za-checkbox
      v-for="(city, index) in cities"
      :value="city"
      :key="city"
      :disabled="index === 2"
      >{{city}}</za-checkbox
    >
  </za-checkbox-group>
  禁用指定项
</za-cell>
<za-cell>
  <za-checkbox-group
    v-model="checkboxGroup5"
    slot="description"
    type="button"
    shape="rect"
    @change="handleGroupChange"
  >
    <za-checkbox v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</za-checkbox
    >
  </za-checkbox-group>
  直角
</za-cell>
<za-cell>
  <za-checkbox-group
    v-model="checkboxGroup6"
    slot="description"
    type="button"
    shape="round"
    @change="handleGroupChange"
  >
    <za-checkbox v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</za-checkbox
    >
  </za-checkbox-group>
  椭圆角
</za-cell>
```

:::

:::demo 块级样式

```html
<div style="padding:10px;">
  <za-checkbox-group
    v-model="provice"
    type="button"
    block
    shape="radius"
    @change="handleGroupChange"
  >
    <za-checkbox v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</za-checkbox
    >
  </za-checkbox-group>
</div>
```

:::

:::demo 列表组样式

```html
<za-checkbox-group
  v-model="checkboxGroup7"
  type="cell"
  @change="handleGroupChange"
>
  <za-checkbox
    v-for="(city, index) in cities"
    :value="city"
    :key="city"
    :disabled="index === 2"
    >{{city}}</za-checkbox
  >
</za-checkbox-group>
```

:::

:::demo 列表样式禁用状态

```html
<za-checkbox-group
  v-model="checkboxGroup8"
  type="cell"
  disabled
  @change="handleGroupChange"
>
  <za-checkbox v-for="(city, index) in cities" :value="city" :key="city"
    >{{city}}</za-checkbox
  >
</za-checkbox-group>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      v1: false,
      v2: true,
      v3: false,
      v4: true,
      v5: false,
      city: null,
      cities: ['上海', '北京', '广州', '深圳'],
      provice: [],
      provices: [{
        label: '条件A',
        checked: false,
        checkeds: []
      },{
        label: '条件B',
        checked: false,
        checkeds: []
      },{
        label: '条件C',
        checked: false,
        checkeds: []
      }],
      checkboxGroup: ['上海'],
      checkboxGroup2: [],
      checkboxGroup3: ['上海', '北京'],
      checkboxGroup4: [],
      checkboxGroup5: [],
      checkboxGroup6: [],
      checkboxGroup7: [],
      checkboxGroup8: [],
    }
  },
  methods: {
    handleChange(v, e) {
      console.log(v, e);
    },
    handleGroupChange(v, e){
      console.log(v, e);
    },
  },
};
</script>
```

### API

#### Checkbox-Group Attributes

| 属性     | 类型    | 默认值    | 可选值／参数                                                | 说明           |
| :------- | :------ | :-------- | :---------------------------------------------------------- | :------------- |
| theme    | string  | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题           |
| shape    | string  |           | 'radius', 'round'                                           | 形状           |
| type     | string  |           | 'button', 'cell'                                            | 显示类型       |
| v-model  | array   | [ ]       |                                                             | 绑定变量       |
| block    | boolean | false     |                                                             | 是否为块级元素 |
| disabled | boolean | false     |                                                             | 是否禁用       |

#### Checkbox Attributes

| 属性     | 类型          | 默认值    | 可选值／参数                                                | 说明     |
| :------- | :------------ | :-------- | :---------------------------------------------------------- | :------- |
| theme    | string        | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题     |
| type     | string        |           | 'button', 'cell'                                            | 显示类型 |
| value    | string,number |           |                                                             | 选项值   |
| checked  | boolean       |           |                                                             | 是否选中 |
| disabled | boolean       | false     |                                                             | 是否禁用 |

#### Checkbox Group Events

| 事件名称 | 说明                     | 回调参数                         |
| :------- | :----------------------- | :------------------------------- |
| change   | 当绑定值变化时触发的事件 | 1.选中的值列表，2.event 事件对象 |

#### Checkbox Events

| 事件名称 | 说明                     | 回调参数                         |
| :------- | :----------------------- | :------------------------------- |
| change   | 当绑定值变化时触发的事件 | 1.选中的值列表，2.event 事件对象 |

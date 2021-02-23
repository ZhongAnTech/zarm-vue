## 单选框 Radio

:::demo 普通

```html
<za-cell>
  <za-radio @change="handleChange" value="on">默认</za-radio>
</za-cell>
<za-cell>
  <za-radio checked >默认选中</za-radio>
</za-cell>
<za-cell>
  <za-radio disabled>禁用</za-radio>
</za-cell>
<za-cell>
  <za-radio checked disabled>选中且禁用</za-radio>
</za-cell>
```

:::

:::demo 按钮样式

```html
<za-cell title="Button">
  <za-radio-group
    slot="description"
    v-model="radioGroup1"
    @change="handleGroupChange"
    type="button"
  >
    <za-radio name="city1" v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</za-radio
    >
  </za-radio-group>

</za-cell>
<za-cell title="指定默认值">
  <za-radio-group
    slot="description"
    v-model="radioGroup2"
    @change="handleGroupChange"
    type="button"
  >
    <za-radio name="city2" v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</za-radio
    >
  </za-radio-group>

</za-cell>
<za-cell title="禁用指定项">
  <za-radio-group
    slot="description"
    v-model="radioGroup3"
    @change="handleGroupChange"
    type="button"
  >
    <za-radio
      v-for="(city, index) in cities"
      name="city3"
      :value="city"
      :key="city"
      :disabled="index === 1"
      >{{city}}</za-radio
    >
  </za-radio-group>

</za-cell>
<za-cell title="直角">
  <za-radio-group
    slot="description"
    v-model="radioGroup4"
    @change="handleGroupChange"
    shape="rect"
    type="button"
  >
    <za-radio v-for="(city, index) in cities" name="city4" :value="city" :key="city"
      >{{city}}</za-radio
    >
  </za-radio-group>

</za-cell>
<za-cell title="椭圆角">
  <za-radio-group
    slot="description"
    v-model="radioGroup5"
    @change="handleGroupChange"
    shape="round"
    type="button"
  >
    <za-radio v-for="(city, index) in cities" name="city5" :value="city" :key="city"
      >{{city}}</za-radio
    >
  </za-radio-group>

</za-cell>
```

:::

:::demo 块级样式

```html
<div style="padding:10px;">
  <za-radio-group
    block
    compact
    shape="radius"
    type="button"
    v-model="radioGroup6"
    @change="handleGroupChange"
  >
    <za-radio v-for="(city, index) in cities" name="city6" :value="city" :key="city"
      >{{city}}</za-radio
    >
  </za-radio-group>
</div>
```

:::

:::demo 列表样式

```html
<za-radio-group type="cell" v-model="radioGroup7" @change="handleGroupChange">
  <za-radio
    v-for="(city, index) in num"
    name="city7"
    :value="city"
    :key="city"
    :disabled="index === 1"
    >{{city + (index === 1 ? ' disabled' : '')}}</za-radio
  >
</za-radio-group>
```

:::

:::demo 列表样式禁用状态

```html
<za-radio-group
  type="cell"
  v-model="radioGroup8"
  @change="handleGroupChange"
  disabled
>
  <za-radio v-for="(city, index) in num" name="city8" :value="city" :key="city"
    >{{city}}</za-radio
  >
</za-radio-group>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      v1: false,
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
      radioGroup9: '上海',
    };
  },
  methods: {
    handleChange(v, e) {
      console.log(v, e);
    },
    handleGroupChange(v, e) {
      console.log(v, e);
    }
  },
};
</script>
```

### API

#### Radio Group Attributes

| 属性      | 类型   | 默认值   | 可选值／参数              | 说明                       |
| :-------- | :----- | :------- | :------------------------ | :------------------------- |
| v-model   | string |          |                           | 绑定选中值 |
| type      | string |          | 'button', 'cell'          | 显示类型                   |
| shape     | string | 'radius' | 'rect', 'radius', 'round' | 形状                       |
| block     | boolean   | false    |                           | 是否为块级元素             |
| disabled  | boolean   | false    |                           | 是否禁用                   |
| compact   | boolean   | false    |                           | 是否启用紧凑模式           |

#### Radio Attributes

| 属性      | 类型          | 默认值   | 可选值／参数              | 说明           |
| :-------- | :------------ | :------- | :------------------------ | :------------- |
| type      | string        |          | 'button', 'cell'          | 显示类型       |
| name      | string        |          |  | 结合radio-group使用，标识字段       |
| shape     | string        | 'radius' | 'rect', 'radius', 'round' | 形状           |
| block     | boolean          | false    |                           | 是否为块级元素 |
| value     | string,number |          |                           | 选项值         |
| checked   | boolean          |          |                           | 是否选中       |
| disabled  | boolean          | false    |                           | 是否禁用       |

#### Radio Events

| 事件名称 | 说明             | 回调参数                     |
| :------- | :--------------- | :--------------------------- |
| change   | 选择后触发的事件 | value 选中 radio 的 label 值 |

#### Radio Group Events

| 事件名称 | 说明             | 回调参数                     |
| :------- | :--------------- | :--------------------------- |
| change   | 选择后触发的事件 | value 选中 radio 的 label 值 |

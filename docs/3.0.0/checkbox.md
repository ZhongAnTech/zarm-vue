## 复选框 Checkbox

:::demo 基本

```html
<za-cell>
  <za-checkbox @change="handleChange">普通</za-checkbox>
</za-cell>
<za-cell>
  <za-checkbox checked >选中</za-checkbox>
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
<za-checkbox ref="ruleRef" checked @change="handleChange" type="cell"
  >阅读并同意《XXX条款》中的相关规定</za-checkbox
>
```

:::

:::demo 按钮样式

```html
<za-cell title="普通">
  <za-checkbox-group
    v-model="checkboxGroup2"
    slot="description"
    type="button"
    @change="handleGroupChange"
  >
      <za-checkbox name="city1" :value="city" v-for="(city, index) in cities" :key="city"
        >{{city}}</za-checkbox
      >
  </za-checkbox-group>
</za-cell>
<za-cell title="指定默认值">
  <za-checkbox-group
    v-model="checkboxGroup3"
    slot="description"
    type="button"
    @change="handleGroupChange"
  >
    <za-checkbox name="city2"  :value="city" v-for="(city, index) in cities" :key="city"
      >{{city}}</za-checkbox
    >
  </za-checkbox-group>
</za-cell>
<za-cell title="禁用指定项">
  <za-checkbox-group
    v-model="checkboxGroup4"
    slot="description"
    type="button"
    @change="handleGroupChange"
  >
    <za-checkbox
      v-for="(city, index) in cities"
      name="city3"
      :value="city"
      :key="city"
      :disabled="index === 2"
      >{{city}}</za-checkbox
    >
  </za-checkbox-group>
</za-cell>
<za-cell title="直角">
  <za-checkbox-group
    v-model="checkboxGroup5"
    slot="description"
    type="button"
    shape="rect"
    @change="handleGroupChange"
  >
    <za-checkbox v-for="(city, index) in cities" name="city4" :value="city" :key="city"
      >{{city}}</za-checkbox
    >
  </za-checkbox-group>
</za-cell>
<za-cell title="椭圆角">
  <za-checkbox-group
    v-model="checkboxGroup6"
    slot="description"
    type="button"
    shape="round"
    @change="handleGroupChange"
  >
    <za-checkbox v-for="(city, index) in cities" name="city5" :value="city" :key="city"
      >{{city}}</za-checkbox
    >
  </za-checkbox-group>
</za-cell>
```

:::

:::demo 块级样式

```html
<div style="padding:10px;">
  <za-checkbox-group
    v-model="checkboxGroup1"
    type="button"
    block
    shape="radius"
    @change="handleGroupChange"
  >
    <za-checkbox v-for="(city, index) in cities" name="city6" :value="city" :key="city"
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
    name="city7"
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
  <za-checkbox v-for="city in cities" name="city8" :value="city" :key="city">
    <span>{{city}}</span>
  </za-checkbox>
</za-checkbox-group>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      city: null,
      cities: ['上海', '北京', '广州', '深圳'],
      provices: [
        {
          name: '上海',
          checked: true,
        },
        {
          name: '北京',
          checked: false,
        },
        {
          name: '广州',
          checked: false,
        },
        {
          name: '深圳',
          checked: false,
        }
      ],
      checkboxGroup1: ['上海'],
      checkboxGroup2: [],
      checkboxGroup3: ['上海', '北京'],
      checkboxGroup4: [],
      checkboxGroup5: [],
      checkboxGroup6: [],
      checkboxGroup7: ['广州'],
      checkboxGroup8: ['上海'],
    }
  },
  methods: {
    handleChange(v, e) {
      console.log(this.$refs.ruleRef,v, e);
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
| name      | string        |          |  | 结合checkbox-group使用，标识字段       |
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

## 选择器 StackPicker & StackSelect

:::demo 基本

```html
<za-cell title="单列">
  <template v-slot:description>
  <za-button size="xs" @click="visible1 = true">开启</za-button>
  </template>
  <za-stack-picker
    :visible.sync="visible1"
    title="级联选择"
    placeholder="请选择"
    :data-source="District"
    :display-render="selected => selected.map(item => item.label).join('-')"
    @ok="handleOk"
    @change="handleChange"
    @cancel="handleCancel"
  />
</za-cell>
```

:::

:::demo 层叠式选择器 StackSelect

```html
<za-cell title="级联选择">
  <za-stack-select
    v-model="v1"
    title="级联选择"
    placeholder="请选择"
    :data-source="District"
    :display-render="selected => selected.map(item => item.label).join('-')"
    @ok="handleOk"
    @change="handleChange"
    @cancel="handleCancel"
  />
</za-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
const District = [{
  "value": "340000",
  "label": "安徽省",
  "children": [{
    "value": "340800",
    "label": "安庆市",
    "children": [{
      "value": "340803",
      "label": "大观区",
      "children": []
    }, {
      "value": "340822",
      "label": "怀宁县",
      "children": []
    }, {
      "value": "340882",
      "label": "其它区",
      "children": []
    }, {
      "value": "340883",
      "label": "其它区",
      "children": []
    }, {
      "value": "340884",
      "label": "其它区",
      "children": []
    }, {
      "value": "340885",
      "label": "其它区",
      "children": []
    }, {
      "value": "340886",
      "label": "其它区",
      "children": []
    }, {
      "value": "340887",
      "label": "其它区",
      "children": []
    }, {
      "value": "340888",
      "label": "其它区",
      "children": []
    }, {
      "value": "340889",
      "label": "其它区",
      "children": []
    }, {
      "value": "340890",
      "label": "其它区",
      "children": []
    }]
  }]
},{
  "value": "310000",
  "label": "上海",
  "children": [{
    "value": "310100",
    "label": "上海市",
    "children": [{
      "value": "310113",
      "label": "宝山区",
      "children": []
    }, {
      "value": "310105",
      "label": "长宁区",
      "children": []
    }, {
      "value": "310230",
      "label": "崇明县",
      "children": []
    }, {
      "value": "310152",
      "label": "川沙区",
      "children": []
    }]
  }]
}];
export default {
  data() {
    return {
      visible1: false,
      v1: [],
      District,
    }
  },
  methods: {
    handleOk(v) {
      console.log('it may still scrolling when ok is clicked. so ues v-model or @change instead')
      console.log(v);
    },
    handleChange(v) {
      console.log(v);
    },
    handleCancel(event) {
      console.log('cancelled');
    },
  },
};
</script>
```

### API

#### Attributes

| 属性          | 类型          | 默认值  | 可选值／参数 | 说明                 |
| :------------ | :------------ | :------ | :----------- | :------------------- |
| data-source   | array         | [ ]     |              | 数据源               |
| default-value | array, string |         |              | 初始值               |
| value-member  | string        | 'value' |              | 值字段对应的 key     |
| disabled      | boolean       | false   |              | 是否禁用             |
| item-render   | function      | noop    |              | 滚轮区域选项址值渲染 |
| cols          | number        |         |              | 级联选择器的级数     |

#### StackPicker & StackSelect Attributes

| 属性           | 类型          | 默认值   | 可选值／参数 | 说明                                 |
| :------------- | :------------ | :------- | :----------- | :----------------------------------- |
| title          | string        | '请选择' |              | 选择器标题                           |
| v-model        | array, string |          |              | 绑定值                               |
| placeholder    | string        | '请选择' |              | 输入提示信息                         |
| okText         | string        | '确定'   |              | 输入提示信息                         |
| cancel-text    | string        | '取消'   |              | 输入提示信息                         |
| display-render | function      |          |              | 所选值的展示                         |
| visible        | boolean       | false    |              | 是否显示, 支持.sync 修饰符 (v2.3.0+) |

#### StackPicker & StackSelect Events

| 事件名称 | 说明                         | 回调参数         |
| :------- | :--------------------------- | :--------------- |
| ok       | 点击确定时触发的回调函数     | 选中值的对象列表 |
| cancel   | 点击取消时触发的回调函数     | event 对象       |
| change   | 滚动时值变化时触发的回调函数 | 选中值的对象列表 |

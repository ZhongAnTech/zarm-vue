## 选择器 Picker & Select

:::demo 基本

```html
<za-cell title="单列">
  <template v-slot:description>
  <za-button size="xs" @click="visible1 = true"
    >开启</za-button>
    </template>
</za-cell>
<za-cell title="多列">
  <template v-slot:description>
  <za-button size="xs" @click="visible2 = true"
    >开启</za-button>
    </template>
</za-cell>
<za-cell title="多列联动">
  <template v-slot:description>
  <za-button size="xs" @click="visible3 = true"
    >开启</za-button>
    </template>
</za-cell>
<za-cell title="自定义格式">
  <template v-slot:description>
  <za-button size="xs" @click="visible4 = true"
    >开启</za-button>
    </template>
</za-cell>

<za-picker
  v-model:visible="visible1"
  :dataSource="data1"
  @ok="handleOk1"
></za-picker>
<za-picker
  v-model:visible="visible2"
  :dataSource="data2"
  @ok="handleOk"
></za-picker>
<za-picker
  v-model:visible="visible3"
  :dataSource="data3"
  @ok="handleOk"
></za-picker>
<za-picker
  v-model:visible="visible4"
  :dataSource="data4"
  @ok="handleOk2"
  placeholder="自定义placeholder"
  valueMember="code"
  :itemRender="(item) => item.name"
></za-picker>
```

:::

:::demo 表单选择器

```html
<za-cell title="单项选择">
  <za-select
    v-model="v1"
    :dataSource="data1"
    @ok="handleOk"
    @selected="handleChange"
    @cancel="handleCancel"
  ></za-select>
</za-cell>
<za-cell title="多项选择">
  <za-select
    :dataSource="data2"
    v-model="v2"
    @ok="handleOk"
    @selected="handleChange"
    @cancel="handleCancel"
  ></za-select>
</za-cell>
```

:::

:::demo 城市选择器

```html
<za-cell title="省市选择">
  <za-select
    v-model="v6"
    :dataSource="data3"
    @ok="handleOk"
    @selected="handleChange"
    @cancel="handleCancel"
    :cols="2"
  ></za-select>
</za-cell>
<za-cell title="省市区选择">
  <za-select
    :dataSource="data3"
    v-model="v7"
    :displayRender="selected => selected.map(item => item.label).join('／')"
    @ok="handleOk"
    @selected="handleChange"
    @cancel="handleCancel"
  ></za-select>
</za-cell>
```

:::


:::demo 平铺选择器 PickerView

```html
<za-picker-view
  :defaultValue="v5"
  :dataSource="data5"
  @selected="handleChange"
></za-picker-view>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible6: false,
      visible7: false,
      v1: ['2'],
      v2: ['2','3'],
      v3: ['2','21'],
      v5: ['2','22'],
      v6: '',
      v7: '',
      v10: [],
      data1: [
        { value: '1', label: '选项一' },
        { value: '2', label: '选项二' },
      ],
      data2: [
        [
          { value: '1', label: '选项一' },
          { value: '2', label: '选项二' },
        ],
        [
          { value: '3', label: '选项A' },
          { value: '4', label: '选项B' },
        ],
      ],
      data3: [
        {
          value: '1',
          label: '北京市',
          children: [
            { value: '11', label: '海淀区' },
            { value: '12', label: '西城区' },
          ],
        },
        {
          value: '2',
          label: '上海市',
          children: [
            { value: '21', label: '杨浦区' },
            { value: '22', label: '静安区' },
          ],
        },
      ],
      data4: [
        {
          code: '1',
          name: '北京市',
          children: [
            { code: '11', name: '海淀区' },
            { code: '12', name: '西城区' },
          ],
        },
        {
          code: '2',
          name: '上海市',
          children: [
            { code: '21', name: '黄埔区' },
            { code: '22', name: '虹口区' },
          ],
        },
      ],
      data5: [
        {
          value: '1',
          label: '北京市',
          children: [
            { value: '11', label: '海淀区' },
            { value: '12', label: '西城区' },
          ],
        },
        {
          value: '2',
          label: '上海市',
          children: [
            { value: '21', label: '杨浦区' },
            { value: '22', label: '静安区' },
          ],
        },
      ]
    }
  },
  methods: {
    handleOk1(v) {
      console.log(v);
    },
    handleOk(v) {
      console.log(v, this.v7);
    },
    handleOk2(v) {
      console.log(v);
    },
    handleChange(v) {
      console.log(v);
    },
    handleCancel(event) {
      console.log('cancelled');
    },
    displayGenerator(selected) {
      return selected.map(item => item.name).join('/')
    }
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

#### Picker & Select Attributes

| 属性           | 类型          | 默认值   | 可选值／参数 | 说明                                 |
| :------------- | :------------ | :------- | :----------- | :----------------------------------- |
| title          | string        | '请选择' |              | 选择器标题                           |
| v-model        | array, string |          |              | 绑定值                               |
| placeholder    | string        | '请选择' |              | 输入提示信息                         |
| okText         | string        | '确定'   |              | 输入提示信息                         |
| cancel-text    | string        | '取消'   |              | 输入提示信息                         |
| display-render | function      |          |              | 所选值的展示                         |
| visible        | boolean       | false    |              | 是否显示, 支持.sync 修饰符 (v2.3.0+) |

#### Picker & Select Events

| 事件名称   | 说明                         | 回调参数         |
| :--------- | :--------------------------- | :--------------- |
| ok         | 点击确定时触发的回调函数     | 选中值的对象列表 |
| cancel     | 点击取消时触发的回调函数     | event 对象       |
| selected     | 滚动时值变化时触发的回调函数 | 选中值的对象列表 |
| mask-click | 点击遮罩后出发的回调函数     |                  |  |  |

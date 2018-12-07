

## 选择器 Picker & Select

:::demo 基本
```html
  <za-cell title="单列">
      <za-button slot='description' size='xs' @click='visible1 = true'>开启</za-button>
  </za-cell>
  <za-cell title="多列">
      <za-button slot='description' size='xs' @click='visible2 = true'>开启</za-button>
  </za-cell>
  <za-cell title="多列联动">
      <za-button slot='description' size='xs' @click='visible3 = true'>开启</za-button>
  </za-cell>
  <za-cell title="自定义格式">
      <za-button slot='description' size='xs' @click='visible4 = true'>开启</za-button>
  </za-cell>

  <za-picker :close-on-click-modal='false' :visible.sync='visible1'  :data-source='data1' @ok='handleOk1'  ></za-picker>
  <za-picker :visible.sync='visible2' :data-source='data2'  @ok='handleOk' ></za-picker>
  <za-picker :visible.sync='visible3' :data-source='data3'  @ok='handleOk' ></za-picker>
  <za-picker :visible.sync='visible4' :data-source='data4'  @ok='handleOk2' placeholder='自定义placeholder'
          value-member="code" :item-render='(item) => item.name' ></za-picker>
```
:::

:::demo 表单选择器
```html         
  <za-cell title="单项选择">
    <za-select
      v-model='v1'
      :data-source='data1'
      @ok='handleOk'
      @change='handleChange'
      @cancel='handleCancel'/>
  </za-cell>
  <za-cell title="多项选择">
    <za-select
      :data-source='data2'
      v-model='v2'
      @ok='handleOk'
      @change='handleChange'
      @cancel='handleCancel'/>
  </za-cell>
```
:::

:::demo 城市选择器
```html         
  <za-cell title="省市选择">
    <za-select
      v-model='v6'
      :data-source='District'
      @ok='handleOk'
      @change='handleChange'
      @cancel='handleCancel'
      :cols='2'/>
  </za-cell>
  <za-cell title="省市区选择">
    <za-select
      :data-source='District'
      v-model='v7'
      :display-render="selected => selected.map(item => item.label).join('／')"
      @ok='handleOk'
      @change='handleChange'
      @cancel='handleCancel'/>
  </za-cell>
```
:::

:::demo 层叠式选择器StackPicker
```html
    <za-cell title="级联选择">
      <za-stack-picker
        v-model='v10'
        title="级联选择"
        placeholder="请选择"
        :data-source='District'
        :display-render="selected => selected.map(item => item.label).join('-')"
        @ok='handleOk'
        @change='handleChange'
        @cancel='handleCancel'/>
    </za-cell>
```
:::

:::demo 平铺选择器PickerView
```html   
    <za-picker-view :default-value="v5" :data-source='data5' @change='handleChange' />
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
      District,
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
      console.log('it may still scrolling when ok is clicked. so ues v-model or @change instead')
      console.log(v);
    },
    handleOk(v) {
      console.log('it may still scrolling when ok is clicked. so ues v-model or @change instead')
      console.log(v);
    },
    handleOk2(v) {
      console.log('it may still scrolling when ok is clicked. so ues v-model or @change instead')
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

#### Picker & Select Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-picker | | 类名前缀 |
| data-source | array | [ ] | | 数据源 |
| visible | bool | false | | 是否显示, 支持.sync修饰符 (v2.3.0+) |
| default-value | array, string |  | | 初始值 |
| v-model | array, string |  | | 绑定值 |
| valueMember | string | 'value' | | 值字段对应的key |
| displayMember | string | 'label' | | 选项列表显示字段对应的key |
| disabled | bool | false | | 是否禁用 |
| title | string | '请选择' | | 选择器标题 |
| placeholder | string | '请选择' | | 输入提示信息 |
| displayRender | func | noop | | 所选值渲染 |
| itemRender | func | noop | | 滚轮区域选项址值渲染 |
| cols | number | | | 级联选择器的级数 |

#### Picker & Select Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| ok | 点击确定时触发的回调函数 | 选中值的对象列表 |
| cancel | 点击取消时触发的回调函数 | event对象 |
| change | 滚动时值变化时触发的回调函数 | 选中值的对象列表 |
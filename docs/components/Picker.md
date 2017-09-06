# 选择器 Picker

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/picker)


### 代码演示

#### 基本用法


###### 单列
```vue
<za-picker
  :visible.sync='visible'
  v-model='value'
  :dataSource='data'
  @ok='handleOk'
  @cancel='handleCancel'
  />

// ...
data() {
  return {
    value: '',
    visible: false,
    data:[
      { value: '1', label: '选项一' },
      { value: '2', label: '选项二' },
    ],
  }
}
```


###### 多列
```vue
<za-picker
  :visible.sync='visible'
  v-model='value'
  :dataSource='data'
  />

// ...
data() {
  return {
    value: '',
    visible: false,
    data:[
      [
        { value: '1', label: '选项一' },
        { value: '2', label: '选项二' },
      ],
      [
        { value: 'a', label: '选项A' },
        { value: 'b', label: '选项B' },
      ],
    ],
  }
}
```

###### 多列联动
```vue
<za-picker
  :visible.sync='visible'
  v-model='value'
  :dataSource='data'
  />

// ...
data() {
  return {
    value: '',
    visible: false,
    data:[
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
          { value: '21', label: '黄埔区' },
          { value: '22', label: '虹口区' },
        ],
      },
    ],
  }
}
```

###### 初始值
```vue
<za-picker
  :visible.sync='visible'
  v-model='value'
  :dataSource='data'
  :defaultValue='["1", "12"]'
  />

// defaultValue必须在create时提供，否则请使用v-model
data() {
  return {
    value: '',
    visible: false,
    data:[
      {
        value: ['1', '12'],
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
          { value: '21', label: '黄埔区' },
          { value: '22', label: '虹口区' },
        ],
      },
    ],
  }
}
```

###### 禁止修改
```vue
<za-picker
  :visible.sync='visible'
  :dataSource='data'
  disabled
/>
```

###### 自定义格式
```vue
<za-picker
  :visible.sync='visible'
  :dataSource='data'
  title="自定义标题"
  placeholder='自定义placeholder'
  valueMember="code"
  displayMember="name"
  :displayGenerator='displayGenerator'
  />

// ...
data() {
  return {
    data: [
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
    visible: false,
  }
}
methods: {
  displayGenerator(selected) {
    return selected.map(item => item.name).join('/')
  }
}
```

#### 城市选择器

###### 省市选择
```vue
<za-picker :dataSource='District' :cols='2' />
```

###### 省市区选择
```vue
<za-picker :dataSource='District' />
```

#### 日期选择器

###### 年份选择
```vue
<za-date-picker
  title="选择年份"
  v-model='value'
  placeholder="请选择年份"
  mode='year'
  :wheelDefaultValue="2009"
  />
```

###### 日期选择
```vue
<za-date-picker
  title="选择日期"
  v-model='value'
  placeholder="请选择日期"
  mode='date'
  />
```

###### 时间选择
```vue
<za-date-picker
  title="选择时间"
  v-model='value'
  placeholder="请选择时间"
  mode='time'
  :minuteStep='15'
  />
```

###### 日期&时间
```vue
<za-date-picker v-model='value' mode='datetime' />
```

###### 自定义格式
```vue
<za-date-picker v-model='value' mode='date' format="YYYY年MM月DD日"/>
```

#### 层叠式选择器

###### 级联选择
```vue
<za-stack-picker
  v-model='value'
  title="级联选择"
  placeholder="请选择"
  :dataSource='District'
  :displayRender="selected => selected.map(item => item.label).join('-')"
  />
```


### API

#### Picker Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-picker | | 类名前缀 |
| dataSource | array | [ ] | | 数据源 |
| visible | bool | false | | 是否显示, 支持.sync修饰符 (v2.3.0+) |
| defaultValue | array, string |  | | 初始值 |
| v-model | array, string |  | | 绑定值 |
| valueMember | string | 'value' | | 值字段对应的key |
| displayMember | string | 'label' | | 选项列表显示字段对应的key |
| disabled | bool | false | | 是否禁用 |
| title | string | '请选择' | | 选择器标题 |
| placeholder | string | '请选择' | | 输入提示信息 |
| displayRender | func | noop | | 所选值渲染 |
| cols | number | | | 级联选择器的级数 |

#### Picker Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| ok | 点击确定时触发的回调函数 | 选中值的对象列表 |
| cancel | 点击取消时触发的回调函数 | event对象 |
| change | 滚动时值变化时触发的回调函数 | 选中值的对象列表 |

#### Date Picker 额外的属性

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| mode | string | date | `year`, `date`, `time` | 指定日期选择模式 |
| format | string | | 例：YYYY年MM月DD日<br /> 年:`YYYY`, 月:`MM`, 日:`DD`, 时:`hh`, 分:`mm`, 秒:`ss`。| 格式化显示值 |
| minuteStep | number | 1 | | 分钟步长 |
| wheelDefaultValue | array, string | | | 滚轮默认值 |

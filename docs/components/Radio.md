# 单选框 Radio

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/radio)


### 代码演示

#### 基本用法

###### 普通
```vue
<za-radio-group v-model='radio'>
  <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
</za-radio-group>

// ...
data() {
  return {
    cities: ['上海', '北京', '广州', '深圳'],
    radio: '',
  };
}
```

###### 指定默认值
```vue
<za-radio-group v-model='radio'>
  <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
</za-radio-group>

// ...
data() {
  return {
    cities: ['上海', '北京', '广州', '深圳'],
    radio: '上海',
  };
}
```

###### 禁用指定项
```vue
<za-radio-group v-model='radio'>
  <za-radio v-for='(city, index) in cities' :label='city' :key="city" :disabled='index === 1'>{{city}}</za-radio>
</za-radio-group>

// ...
data() {
  return {
    cities: ['上海', '北京', '广州', '深圳'],
    radio: '',
  };
}
```

###### 圆角
```vue
<za-radio-group v-model='radio' shape="radius">
  <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
</za-radio-group>

// ...
data() {
  return {
    cities: ['上海', '北京', '广州', '深圳'],
    radio: '',
  };
}
```

###### 椭圆角
```vue
<za-radio-group v-model='radio' shape="round">
  <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
</za-radio-group>

// ...
data() {
  return {
    cities: ['上海', '北京', '广州', '深圳'],
    radio: '',
  };
}
```

#### 块级样式
```vue
<za-radio-group v-model='radio' block compact shape="radius">
  <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
</za-radio-group>

// ...
data() {
  return {
    cities: ['上海', '北京', '广州', '深圳'],
    radio: '',
  };
}
```

#### 列表样式

###### 普通
```vue
<za-radio-group v-model='radio' type="cell">
  <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
</za-radio-group>

// ...
data() {
  return {
    cities: ['上海', '北京', '广州', '深圳'],
    radio: '',
  };
}
```

###### 禁用状态
```vue
<za-radio-group v-model='radio' type="cell" disabled>
  <za-radio v-for='(city, index) in cities' :label='city' :key="city">{{city}}</za-radio>
</za-radio-group>

// ...
data() {
  return {
    cities: ['上海', '北京', '广州', '深圳'],
    radio: '北京',
  };
}
```


### API

#### Radio Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-radio | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| type | string | | 'button', 'cell' | 显示类型 |
| value | string, number | | | 值 |
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

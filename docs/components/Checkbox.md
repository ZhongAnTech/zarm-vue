# 复选框 Checkbox

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/checkbox)

### 代码演示

#### 基本用法

###### 单独使用
```vue
<za-checkbox v-model='checked' @change='handleChange'>
  单独使用
</za-checkbox>
```

###### 组合使用
```vue
<za-checkbox-group v-model='checkboxGroup' @change='handleChange'>
  <za-checkbox label="a">a</za-checkbox>
  <za-checkbox label="b">b</za-checkbox>
  <za-checkbox label="c">c</za-checkbox>
</za-checkbox-group>
```

#### 按钮样式

###### 普通
```vue
<za-checkbox-group v-model='checkboxGroup' @change='handleChange' type="button">
  <za-checkbox label="a">a</za-checkbox>
  <za-checkbox label="b">b</za-checkbox>
  <za-checkbox label="c">c</za-checkbox>
</za-checkbox-group>
```

###### 指定默认值
```vue
<za-checkbox-group v-model='checkboxGroup'>
  <za-checkbox label="a">a</za-checkbox>
  <za-checkbox label="b">b</za-checkbox>
  <za-checkbox label="c">c</za-checkbox>
</za-checkbox-group>

//...
data () {
  return {
    checkboxGroup: ['a', 'b'],
  };
}
```

###### 禁用指定项
```vue
<za-checkbox-group v-model='checkboxGroup'>
  <za-checkbox label="a">a</za-checkbox>
  <za-checkbox label="b" disabled>b</za-checkbox>
  <za-checkbox label="c">c</za-checkbox>
</za-checkbox-group>
```

###### 圆角
```vue
<za-checkbox-group v-model='checkboxGroup' shape="radius">
  <za-checkbox label="a">a</za-checkbox>
  <za-checkbox label="b">b</za-checkbox>
  <za-checkbox label="c">c</za-checkbox>
</za-checkbox-group>
```

###### 椭圆角
```vue
<za-checkbox-group v-model='checkboxGroup' shape="round">
  <za-checkbox label="a">a</za-checkbox>
  <za-checkbox label="b">b</za-checkbox>
  <za-checkbox label="c">c</za-checkbox>
</za-checkbox-group>
```

##### 块级样式
```vue
<za-checkbox-group v-model='checkboxGroup' block>
  <za-checkbox label="a">a</za-checkbox>
  <za-checkbox label="b">b</za-checkbox>
  <za-checkbox label="c">c</za-checkbox>
</za-checkbox-group>
```

##### compact样式
```vue
<za-checkbox-group v-model='checkboxGroup' block compact>
  <za-checkbox label="a">a</za-checkbox>
  <za-checkbox label="b">b</za-checkbox>
  <za-checkbox label="c">c</za-checkbox>
</za-checkbox-group>
```

#### 列表样式

###### 普通
```vue
<za-checkbox-group v-model='checkboxGroup' type='cell'>
  <za-checkbox label="a">a</za-checkbox>
  <za-checkbox label="b">b</za-checkbox>
  <za-checkbox label="c">c</za-checkbox>
</za-checkbox-group>
```

###### 禁用状态
```vue
<za-checkbox-group v-model='checkboxGroup' type='cell' disabled>
  <za-checkbox label="a">a</za-checkbox>
  <za-checkbox label="b">b</za-checkbox>
  <za-checkbox label="c">c</za-checkbox>
</za-checkbox-group>
```


### API

#### Checkbox

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-checkbox | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| type | string | | 'button', 'cell' | 显示类型 |
| v-model | bool | false | | 绑定变量 |
| disabled | bool | false | | 是否禁用 |

#### Checkbox Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当绑定值变化时触发的事件 | event 事件对象 |

#### Checkbox.Group

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-checkbox | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| shape | string | | 'radius', 'round' | 形状 |
| type | string | | 'button', 'cell' | 显示类型 |
| v-model | array | [ ] | | 绑定变量 |
| block | bool | false | | 是否为块级元素 |
| disabled | bool | false | | 是否禁用 |

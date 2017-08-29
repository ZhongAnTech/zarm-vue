# 开关 Switch

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/switch)


### 代码演示

#### 基本用法

###### 普通
```vue
<za-switch v-model='switch' @change='handleChange' />
```

###### 设置默认值（开启）
```vue
<za-switch v-model='switch' />

// ...
data() {
  switch: true
}
```

###### 禁用状态
```vue
<za-switch disabled />
```


### API

#### Switch Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-switch | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| v-model | bool | false | | 绑定值 |
| disabled | bool | false | | 是否禁用 |

#### Switch Event
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 绑定值改变时的事件 | event 事件对象 |

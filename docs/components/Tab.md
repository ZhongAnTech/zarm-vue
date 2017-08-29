# 标签页 Tab

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/tabs)


### 代码演示

#### 基本用法

###### 普通
```vue
<za-tabs v-model="activeName" @change="handleChange">
  <za-tab-pane label='用户管理' name='first'>
    <div>用户管理</div>
  </za-tab-pane>
  <za-tab-pane label='配置管理' name='second'>
    <div>配置管理</div>
  </za-tab-pane>
</za-tabs>
```

###### 可滑动
```vue
<za-tabs v-model="activeName" @change="handleChange" canSwipe>
  <za-tab-pane label='用户管理' name='first'>
    <div>用户管理</div>
  </za-tab-pane>
  <za-tab-pane label='配置管理' name='second'>
    <div>配置管理</div>
  </za-tab-pane>
</za-tabs>
```

###### 自定义主题
```vue
<za-tabs v-model="activeName" @change="handleChange" theme="info">
  <za-tab-pane label='用户管理' name='first'>
    <div>用户管理</div>
  </za-tab-pane>
  <za-tab-pane label='配置管理' name='second'>
    <div>配置管理</div>
  </za-tab-pane>
</za-tabs>
```

###### 指定默认选项
```vue
<za-tabs v-model="activeName" @change="handleChange">
  <za-tab-pane label='用户管理' name='first'>
    <div>用户管理</div>
  </za-tab-pane>
  <za-tab-pane label='配置管理' name='second'>
    <div>配置管理</div>
  </za-tab-pane>
</za-tabs>

// ...
data() {
  return {
    activeName: 'second'
  }
}
```

###### 指定线条宽度
```vue
<za-tabs v-model="activeName" @change="handleChange" :lineWidth='60'>
  <za-tab-pane label='用户管理' name='first'>
    <div>用户管理</div>
  </za-tab-pane>
  <za-tab-pane label='配置管理' name='second'>
    <div>配置管理</div>
  </za-tab-pane>
</za-tabs>
```

###### 禁用指定选项
```vue
<za-tabs v-model="activeName" @change="handleChange" :lineWidth='60'>
  <za-tab-pane label='用户管理' name='first'>
    <div>用户管理</div>
  </za-tab-pane>
  <za-tab-pane label='配置管理' name='second' disabled>
    <div>配置管理</div>
  </za-tab-pane>
</za-tabs>
```



### API

#### Tabs Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-tab | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| v-model | string | | | 绑定当前tab的name值 |
| disabled | bool | false | | 是否禁用 |
| canSwipe | bool | false | | 是否支持滑动切换 |
| lineWidth | number, string | | | 线条宽度 |

#### Tabs Event
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | tab被选中时触发 | 1. 选中tab的vue实例, 2. event 事件对象 |


#### Tab Pane Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| disabled | bool | false | | 是否禁用 |
| label | string | | | 标题 |
| name | string | | | 标识 |

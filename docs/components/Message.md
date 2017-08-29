# 消息 Message

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/message)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-message>消息</za-message>
```

###### 设置主题
```vue
<za-message theme="warning">warning</za-message>
```

###### 定义图标
```vue
<za-message icon='right-round'>
  <span>success</span>
</za-message>

//或者使用slot
<za-message>
  <za-icon type='info-round' slot='icon' />
  <span>自定义图标</span>
</za-message>
```

#### 可操作

###### 链接样式的
```vue
<za-message hasArrow @click='handleClick'>链接样式的</za-message>

//...

methods() {
  handleClick(event) {
    console.log(event);
  }
}
```

###### 可关闭的
```vue

<za-message closable>链接样式的</za-message>

// 也可以同步visible 支持.sync修饰符 (v2.3.0+)
<za-message closable :visible.sync='visible'>链接样式的</za-message>

//...

data() {
  return {
    visible: true
  }
}
```

### API

#### Message Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-message | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| hasClosable | bool | false | | 是否显示关闭按钮 |
| hasArrow | bool | false | | 是否显示箭头 |

#### Message Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | click时触发的事件 | event 事件对象 |

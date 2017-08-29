# 动作面板 ActionSheet

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/actionsheet)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-actionsheet :visible.sync='visible' :actions='actions'/>

//...
data() {
  return {
    visible: false,
    actions: [{
      text: '操作一',
      onClick: () => console.log('action 1'),
    },{
      text: '操作二',
      onClick: () => console.log('action 2'),
    },{
      theme: 'error',
      text: '操作三',
      onClick: () => console.log('action 3'),
    }]
  }
}
```

###### 带取消操作
```vue
<za-actionsheet
  :visible.sync='visible'
  :actions='actions'
  :showCancel='false'
  @cancel='handleCancel'/>

//...
data() {
  return {
    visible: false,
    actions: [{
      text: '操作一',
      onClick: () => console.log('action 1'),
    },{
      text: '操作二',
      onClick: () => console.log('action 2'),
    },{
      theme: 'error',
      text: '操作三',
      onClick: () => console.log('action 3'),
    }]
  }
},
methods() {
  handleCancel(reason, event){
    console.log(reason, event)
  }
}
```


### API

#### ActionSheet Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-switch | | 类名前缀 |
| shape | string | | 'radius' | 形状 |
| visible | bool | false | | 是否显示, 支持.sync 修饰符 (v2.3.0+) |
| actions | arrayOf(object) | [ ] | object: { theme, text, onClick } | 动作列表 |
| cancelText | string | '取消' |  | 取消菜单的文案 |

#### ActionSheet Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| cancel | 当actionsheet关闭时触发的事件。当点击actionButton关闭时第一个参数为'action',当点击popup关闭时第一个参数为'clickaway' | 1. reason, 2. event 事件对象 |

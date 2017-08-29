# 模态框 Modal

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/modal)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-modal :visible.sync='visible' @close='handleClose' title="标题" :showClose='true'>
  模态框内容
</za-modal>

// ...
methods() {
  handleClose(reason, event) {
    console.log(reason, event)
  }
}
```

###### 圆角
```vue
// 也可以通过 slot='title' 来设置title
<za-modal :visible.sync='visible' @close='handleClose' radius :showClose='true'>
  <div slot='title' style='textAlign:left'>标题</div>
  模态框内容
</za-modal>
```

###### 点击遮罩层关闭
```vue
// 设置close-on-click-modal为true
<za-modal :visible.sync='visible' @close='handleClose' :close-on-click-modal='true' title="标题" :showClose='true' >
  遮罩层可关闭
</za-modal>
```

###### 无头部
```vue
<za-modal :visible.sync='visible' @close='handleClose' :close-on-click-modal='true'>
  无头部
</za-modal>
```

###### 动画效果
```vue
<za-modal :visible.sync='visible' @close='handleClose' animationType="rotate" :close-on-click-modal='true' title="标题" :showClose='true'>
  支持多种动画效果
</za-modal>
```

#### 特定场景

###### 警告框
```vue
<za-alert :visible.sync='visible' radius title="警告" message="这里是警告信息" @close='handleClose' />
```

###### 确认框
```vue
<za-confirm :visible.sync='visible' title="确认信息" message="你确定吗？" :ok='handleOk' :cancel='handleCancel' />
```


### API

#### Modal Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-modal | | 类名前缀 |
| shape | string | 无 | 'radius' | 形状 |
| visible | bool | false | | 是否显示, 支持.sync修饰符 |
| animationType | string | 'fade' | 'fade', 'door', 'flip', 'rotate', 'zoom','moveUp', 'moveDown', 'moveLeft', 'moveRight','slideUp', 'slideDown', 'slideLeft', 'slideRight' | 动画效果 |
| animationDuration | number | 200 | | 动画执行时间 |
| width | string, number | '70%' | | 宽度 |
| close-on-click-modal | bool | false | | 是否可以通过点击遮罩层关闭modal |

#### Modal Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| close | modal 关闭时触发的事件, 当点击按钮关闭时第一个参数为'close', 当点击遮罩层关闭时，第一个参数为'clickaway' | reason, event 事件对象 |

#### Alert Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| close | alert 关闭时触发的事件 | event 事件对象 |

#### Confirm Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| ok | confirm 确定时触发的事件 | event 事件对象 |
| cancel | confirm 取消时触发的事件 | event 事件对象 |

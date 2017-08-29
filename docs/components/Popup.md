# 弹出框 Popup

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/popup)


### 代码演示

#### 基本用法

###### 普通
```vue
<za-popup
  :visible.sync='visible1'
  direction="top"
  :duration='3000'
  maskType="transparent"
  autoClose
  @close='popupClose'>
  <div>更新成功</div>
</za-popup>
```

###### 自动关闭
```vue
<za-popup
  :visible.sync='visible'
  direction="top"
  :duration='5000'
  maskType="transparent"
  autoClose
  @close='popupClose'
>
  <div>5秒后自动关闭</div>
</za-popup>
```

### API

#### Popup Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-popup | | 类名前缀 |
| visible | bool | false | | 是否显示, 支持.sync修饰符 |
| direction | string | 'bottom' | 'top', 'bottom', 'left', 'right' | 弹出方向 |
| autoClose | bool | false | | 是否自动关闭 |
| duration | number | 3000 | | 自动关闭前停留的时间（单位：毫秒） |
| maskType | string | 'normal' | 'transparent', 'light', 'normal', 'dark' | 遮罩层的类型 |
| onClose | func | noop | | 关闭后触发的回调函数 |

#### Popup Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| close | 关闭后触发的事件 | reason, event 事件对象 |

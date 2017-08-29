# 通告栏 NoticeBar

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/noticebar)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-notice-bar>普通</za-notice-bar>
```

###### 设置主题
```vue
<za-notice-bar theme='error'>
  错误色
</za-notice-bar>
```

###### 自定义图标
```vue
<za-notice-bar icon='wrong-round'>
  自定义icon
</za-notice-bar>
```

###### 自动滚动轮播
```vue
<za-notice-bar autoscroll>各位zarmer请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。</za-notice-bar>
```

#### 可操作

###### 链接样式
```vue
<za-notice-bar hasArrow @click='handleClick'>带图标，带右侧箭头的链接样式</za-notice-bar>
```

###### 可关闭
```vue
// 可同步设置visible参数（可选）
<za-notice-bar closable :visible.sync='visible'>
  可关闭的
</za-notice-bar>
```


### API

#### NoticeBar Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-noticebar | | 类名前缀 |
| theme | string | 'warning' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| icon | string | | | 设置图标 |
| autoscroll | bool | false | | 是否开启自动滚动轮播 |
| closable | bool | false | | 是否显示关闭按钮 |
| hasArrow | bool | false | | 是否显示箭头 |

#### NoticeBar Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | click时触发的事件 | event 事件对象 |

# 图片轮播 Swipe

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/swipe)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-swipe>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</za-swipe>
```

###### 纵向
```vue
<za-swipe direction="top" :height='300'>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</za-swipe>
```

###### 循环
```vue
<za-swipe loop>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</za-swipe>
```

###### 自动循环轮播
```vue
<za-swipe loop autoPlay>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</za-swipe>
```


### API

#### Swipe Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-swipe | | 类名前缀 |
| direction | string | 'left' | 'left', 'right', 'top', 'bottom' | 滑动方向 |
| height | number, string | | | 高度 |
| loop | bool | false | | 是否循环 |
| autoPlay | bool | false | | 是否自动轮播 |

#### Swipe Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| changeStart | 动画开始时触发的事件 | index, 当前处于激活状态幻灯片的index值 |
| changeEnd | 动画结束后触发的事件 | index, 动画结束时处于激活状态幻灯片的index值 |

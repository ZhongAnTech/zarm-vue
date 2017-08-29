# 滑动操作 SwipeAction

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/swipeaction)


### 代码演示

#### 基本用法

###### 右侧操作
```vue
<za-swipe-action :right="action">
  <za-cell>左滑看看</za-cell>
</za-swipe-action>

// ...
data() {
  return {
    action:[
      {
        theme: 'error',
        text: '右按钮1',
        onClick: () => console.log('右按钮1'),
      },
      {
        theme: 'success',
        text: '右按钮2',
        onClick: () => console.log('右按钮2'),
      },
    ]
  }
}
```

###### 左侧操作
```vue
<za-swipe-action :left="action">
  <za-cell>右滑看看</za-cell>
</za-swipe-action>

// ...
data() {
  return {
    action:[
      {
        theme: 'error',
        text: '右按钮1',
        onClick: () => console.log('右按钮1'),
      },
      {
        theme: 'success',
        text: '右按钮2',
        onClick: () => console.log('右按钮2'),
      },
    ]
  }
}
```

###### 双侧操作
```vue
<za-swipe-action :right="action" :left='action'>
  <za-cell>左滑看看</za-cell>
</za-swipe-action>

// ...
data() {
  return {
    action:[
      {
        theme: 'error',
        text: '右按钮1',
        onClick: () => console.log('右按钮1'),
      },
      {
        theme: 'success',
        text: '右按钮2',
        onClick: () => console.log('右按钮2'),
      },
    ]
  }
}
```


### API

#### SwipeAction Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-swipeaction | | 类名前缀 |
| left | arrayOf(object) | [ ] | object: { theme, text, onClick } | 左侧按钮组 |
| right | arrayOf(object) | [ ] | object: { theme, text, onClick } | 右侧按钮组 |
| autoClose | bool | false | | 点击按钮是否自动关闭 |

#### SwipeAction Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| open | 打开时的事件 | direaction, 可能值left, right |
| close | 关闭时的事件 | reason, 可能值retract, touchaway |

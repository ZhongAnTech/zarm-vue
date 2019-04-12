## 滑动操作 SwipeAction

:::demo 基本

```html
<za-swipe-action
  autoClose
  @close="handleClose"
  @open="handleOpen"
  :right="action1"
>
  <za-cell>左滑看看（自动关闭）</za-cell>
</za-swipe-action>

<za-swipe-action @close="handleClose" @open="handleOpen" :left="action1">
  <za-cell>右滑看看</za-cell>
</za-swipe-action>

<za-swipe-action
  @close="handleClose"
  @open="handleOpen"
  :left="action1"
  :right="action1"
>
  <za-cell>左右都能滑动</za-cell>
</za-swipe-action>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      action1:[
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
  },
  methods: {
    handleClose(reason) {
      console.log(reason);
    },
    handleOpen(reason) {
      console.log(reason);
    },
  },
};
</script>
```

### API

#### SwipeAction Attributes

| 属性              | 类型            | 默认值         | 可选值／参数                     | 说明                     |
| :---------------- | :-------------- | :------------- | :------------------------------- | :----------------------- |
| left              | arrayOf(object) | [ ]            | object: { theme, text, onClick } | 左侧按钮组               |
| right             | arrayOf(object) | [ ]            | object: { theme, text, onClick } | 右侧按钮组               |
| auto-close         | boolean            | false          |                                  | 点击按钮是否自动关闭     |
| disabled          | boolean            | false          |                                  | 是否禁用                 |
| offset            | number          | 10             |                                  | 回弹偏移的距离           |
| move-distance-ratio | number          | 0.5            |                                  | 移动距离比例临界点       |
| move-time-span      | number          | 300            |                                  | 移动时间跨度临界点       |
| animation-duration | number          | 300            |                                  | 动画执行时间，单位：毫秒 |

#### SwipeAction Events

| 事件名称 | 说明         | 回调参数                          |
| :------- | :----------- | :-------------------------------- |
| open     | 打开时的事件 | direaction, 可能值 left, right    |
| close    | 关闭时的事件 | reason, 可能值 retract, touchaway |

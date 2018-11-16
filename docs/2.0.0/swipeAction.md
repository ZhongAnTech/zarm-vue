<script>
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

## 滑动操作 SwipeAction

:::demo 基本
```html
    <za-swipe-action
      autoClose
      @close='handleClose'
      @open='handleOpen'
      :right="action1">
      <za-cell>左滑看看（自动关闭）</za-cell>
    </za-swipe-action>

    <za-swipe-action
      @close='handleClose'
      @open='handleOpen'
      :left="action1">
      <za-cell>右滑看看</za-cell>
    </za-swipe-action>

    <za-swipe-action
      @close='handleClose'
      @open='handleOpen'
      :left="action1"
      :right="action1">
      <za-cell>左右都能滑动</za-cell>
    </za-swipe-action>
```
:::


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
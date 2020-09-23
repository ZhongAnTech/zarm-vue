## 气泡层 Popper

:::demo 基本

```html
<za-cell class="direction-demo">
  <div>
    <div style="marginLeft: 60px">
      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="topLeft"
        content="topLeft text"
      >
        <za-button ghost size="xs">TL</za-button>
      </za-popper>

      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="top"
        content="top text"
      >
        <za-button ghost size="xs">Top</za-button>
      </za-popper>

      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="topRight"
        content="topRight text"
      >
        <za-button ghost size="xs">TR</za-button>
      </za-popper>
    </div>

    <div style="width: 60px;float: left;clear: both">
      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="leftTop"
        content="leftTop text"
      >
        <za-button ghost size="xs">LT</za-button>
      </za-popper>

      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="left"
        content="left text"
      >
        <za-button ghost size="xs">Left</za-button>
      </za-popper>

      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="leftBottom"
        content="leftBottom text"
      >
        <za-button ghost size="xs">LB</za-button>
      </za-popper>
    </div>

    <div style="width: 60px;marginLeft: 260px;">
      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="rightTop"
        content="rightTop text"
      >
        <za-button ghost size="xs">RT</za-button>
      </za-popper>

      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="right"
        content="right text"
      >
        <za-button ghost size="xs">Right</za-button>
      </za-popper>

      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="rightBottom"
        content="rightBottom text"
      >
        <za-button ghost size="xs">RB</za-button>
      </za-popper>
    </div>

    <div style="marginLeft: 60px;clear: both">
      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="bottomLeft"
        content="bottomLeft text"
      >
        <za-button ghost size="xs">BL</za-button>
      </za-popper>

      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="bottom"
        content="bottom text"
      >
        <za-button ghost size="xs">Bottom</za-button>
      </za-popper>

      <za-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="bottomRight"
        content="bottomRight text"
      >
        <za-button ghost size="xs">BR</za-button>
      </za-popper>
    </div>
  </div>
</za-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      arrow: '1',
    }
  },
  methods: {

  },
};
</script>
```

### API

#### Attributes

| 属性               | 类型                                 | 默认值                                 | 说明                                                                                                                                                      |
| :----------------- | :----------------------------------- | :------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className          | string                               | -                                      | 气泡层类名追加                                                                                                                                            |
| content            | String                            | -                                      | 显示内容，也可以用slot                                                                                                                                                 |
| hasArrow           | boolean                              | false                                  | 是否显示箭头节点<font color="red">（注：需要自行定义箭头样式）</font>                                                                                     |
| destroy            | boolean                              | true                                   | 气泡层关闭后是否移除节点                                                                                                                                  |
| animationType      | string                               | 'zoom-fade'                            | 可选值 `fade`, `door`, `flip`, `rotate`, `zoom`,`moveUp`, `moveDown`, `moveLeft`, `moveRight`,`slideUp`, `slideDown`, `slideLeft`, `slideRight`           |
| animationDuration  | number                               | 200                                    | 动画执行时间（单位：毫秒）                                                                                                                                |
| arrowPointAtCenter | boolean                              | false                                  | 箭头是否指向目标元素中心                                                                                                                                  |
| mouseEnterDelay    | number                               | 100                                    | 鼠标移入显示气泡层的延时时间（单位：毫秒）                                                                                                                |
| mouseLeaveDelay    | number                               | 100                                    | 鼠标移出隐藏气泡层的延时时间（单位：毫秒）                                                                                                                |
| direction          | string                               | 'top'                                  | 显示方向，可选值 `topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom` |
| trigger            | string                               | 移动端为'click' <br /> 桌面端为'hover' | 触发方式，可选值为：`click` 点击触发状态、`hover` hover 状态触发、`focus` 聚焦状态触发、`manual` 受控触发、`contextMenu` 右键触发                         |
| visible            | boolean                              | false                                  | 是否显示，`trigger='manual'` 时有效                                                                                                                       |

#### Events

| 属性               | 类型                                 | 默认值                                 | 说明                                                                                                                                                      |
| :----------------- | :----------------------------------- | :------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @visibleChange    | (visible?: boolean) => void          | noop                                   | 显示/隐藏 气泡层触发的事件                                                                                                                                |

## 按钮 Button

:::demo 基本

```html
<za-button ghost>default</za-button>
<za-button theme="primary">primary</za-button>
```

:::

:::demo 块级按钮

```html
<za-button block ghost @click="handleClick">default</za-button>
<za-button block ghost disabled @click="handleClick"
  >default disabled</za-button
>
<za-button theme="primary" block>primary</za-button>
<za-button theme="primary" block disabled>primary disabled</za-button>
```

:::

:::demo 按钮主题

```html
<za-button ghost>default</za-button>
<za-button theme="primary">primary</za-button>
<za-button theme="danger">danger</za-button>
```

:::

:::demo 按钮大小

```html
<za-button ghost size="lg">lg</za-button>
<za-button ghost>md</za-button>
<za-button ghost size="sm">sm</za-button>
<za-button ghost size="xs">xs</za-button>
```

:::

:::demo 按钮形状

```html
<za-panel-body>
  <za-button theme="primary">rect</za-button>
  <za-button theme="primary" shape="radius">radius</za-button>
  <za-button theme="primary" shape="round">round</za-button>
  <za-button theme="primary" shape="circle">circle</za-button>
  <za-button shape="circle" ghost>
    <za-icon type="right" slot="icon"></za-icon>
  </za-button>
</za-panel-body>
```

:::

:::demo 带 icon 的按钮

```html
<za-button ghost shape="radius">
  <za-icon type="right-round" theme="success" slot="icon"></za-icon>
  正确
</za-button>
<za-button ghost shape="radius">
  <za-icon type="wrong-round" theme="error" slot="icon"></za-icon>
  错误
</za-button>
<za-button ghost loading shape="radius">
  加载中
</za-button>
```

:::

:::demo 幽灵按钮

```html
<za-button block ghost>default ghost</za-button>
<za-button theme="primary" block ghost>primary ghost</za-button>
<za-button theme="danger" block ghost>danger ghost</za-button>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  methods: {
    handleClick(n){
      console.log(n);
      alert('点击了我...');
    },
  },
};
</script>
```

### API

#### Button Attributes

| 属性      | 类型   | 默认值    | 可选值／参数                   | 说明           |
| :-------- | :----- | :-------- | :----------------------------- | :------------- |
| theme     | string | 'default' | 'default', 'primary', 'danger' | 主题           |
| size      | string |           | 'xl', 'lg', 'sm', 'xs'         | 大小           |
| shape     | string |           | 'radius', 'round', 'circle'    | 形状           |
| block     | boolean   | false     |                                | 是否为块级元素 |
| ghost     | boolean   | false     |                                | 是否是幽灵按钮 |
| disabled  | boolean   | false     |                                | 是否禁用       |
| loading   | boolean   | false     |                                | 是否显示加载中 |

#### Button Events

| 事件名称 | 说明               | 回调参数       |
| :------- | :----------------- | :------------- |
| click    | click 时触发的事件 | event 事件对象 |

## 面板 Panel

:::demo 普通

```html
<za-panel>
  <za-panel-body>
    <za-cell>body</za-cell>
  </za-panel-body>
</za-panel>
```

:::

:::demo 标题

```html
<za-panel>
  <za-panel-header title="标题">
    <a slot="more" @click="handleClick">更多</a>
  </za-panel-header>
  <za-panel-body>
    <za-cell>body</za-cell>
  </za-panel-body>
</za-panel>
```

:::

:::demo 带底部

```html
<za-panel>
  <za-panel-body>
    <za-cell>body</za-cell>
  </za-panel-body>
  <za-panel-footer title="左侧文案" more="右侧文案" />
</za-panel>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {

    }
  },
  methods: {
    handleClick() {
      alert('click me')
    }
  },
};
</script>
```

### API

#### panel

| 属性      | 类型   | 默认值   | 可选值／参数 | 说明     |
| :-------- | :----- | :------- | :----------- | :------- |
| prefixCls | string | za-panel |              | 类名前缀 |

#### panel-header

| 属性      | 类型   | 默认值   | 可选值／参数 | 说明                |
| :-------- | :----- | :------- | :----------- | :------------------ |
| prefixCls | string | za-panel |              | 类名前缀            |
| title     | String |          |              | 标题，也可以用 slot |
| more      | String |          |              | 更多，也可以用 slot |

#### panel-footer

| 属性      | 类型   | 默认值   | 可选值／参数 | 说明                |
| :-------- | :----- | :------- | :----------- | :------------------ |
| prefixCls | string | za-panel |              | 类名前缀            |
| title     | String |          |              | 标题，也可以用 slot |
| more      | String |          |              | 更多，也可以用 slot |

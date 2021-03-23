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


#### panel Attributes

| 属性      | 类型   | 默认值   | 可选值／参数 | 说明                |
| :-------- | :----- | :------- | :----------- | :------------------ |
| title     | String |          |              | 标题，也可以用 slot |
| more      | String |          |              | 更多，也可以用 slot |

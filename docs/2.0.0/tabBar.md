## 标签拦 TabBar

:::demo 基本用法

```html
<za-cell title="隐藏 | 展示">
  <za-button slot="description" ghost @click="toggle">{{ visible ? '隐藏' : '展示'}}</za-button>
</za-cell>
<za-tab-bar :visible="visible" :defaultActiveKey="1" @change="handleChange">
  <za-tab-bar-item :item-key="1" title="first">
      <za-icon slot="icon" theme="primary" type="add" class="icon"></za-icon>
      <za-icon slot="activeIcon" theme="primary" type="add-round" class="icon"></za-icon>
  </za-tab-bar-item>
  <za-tab-bar-item :item-key="2" title="first">
      <za-icon slot="icon" theme="primary" type="minus" class="icon"></za-icon>
      <za-icon slot="activeIcon" theme="primary" type="minus-round" class="icon"></za-icon>
  </za-tab-bar-item>
  <za-tab-bar-item :item-key="3" title="first">
      <za-icon slot="icon" theme="primary" type="arrow-top" class="icon"></za-icon>
      <za-icon slot="activeIcon" theme="primary" type="arrow-bottom" class="icon"></za-icon>
  </za-tab-bar-item>
</za-tab-bar>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      activeKey: null,
      visible: true,
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    handleChange(value) {
      alert(value);
    }
  },
};
</script>
```

### API


#### TabBar

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| activeKey | number \| string | - | 当前选中项 |
| defaultActiveKey | number \| string | - | 初始选中项, 默认第一个选中 |
| visible | boolean | `true` | 是否显示 |


#### TabBarItem

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| itemKey | number \| string | - | 唯一标识，对应`activeKey` |
| title |  | - | 标题文字 |
| icon | slot | - | 图标 |
| activeIcon | slot | - | 选中时图标 |


#### TabBar Events

| 事件名称     | 说明                 | 回调参数                                       |
| :----------- | :------------------- | :--------------------------------------------- |
| change   | 点击`tabbarItem`触发的选中事件 | 值变化时触发的回调函数 |
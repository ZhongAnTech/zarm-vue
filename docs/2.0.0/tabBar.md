## 标签拦 TabBar

:::demo 基本用法

```html
<za-cell title="隐藏 | 展示">
  <template v-slot:description>
    <za-button @click="showTabBar">{{ visible ? '隐藏' : '展示'}}</za-button>
  </template>
</za-cell>
<za-tab-bar v-model:visible="visible" :defaultActiveKey="1" @change="handleChange">
  <za-tab-bar-item :item-key="1" title="首页">
    <template v-slot:icon>
      <za-icon tag="symbol" type="home" class="icon"></za-icon>
    </template>
    <template v-slot:activeIcon>
      <za-icon tag="symbol" theme="primary" type="home" class="icon"></za-icon>
    </template>
  </za-tab-bar-item>
  <za-tab-bar-item :item-key="2" title="保险">
       <template v-slot:icon>
        <za-badge  sup shape="circle" text="3" @click="handleClick">
          <za-icon tag="symbol" type="insurance" class="icon"></za-icon>
        </za-badge>
      </template>
       <template v-slot:activeIcon>
        <za-badge sup shape="circle" text="3" @click="handleClick">
          <za-icon tag="symbol" theme="primary" type="insurance" class="icon"></za-icon>
        </za-badge>
      </template>
  </za-tab-bar-item>
  <za-tab-bar-item :item-key="3" title="用户">
     <template v-slot:icon>
      <za-icon  tag="symbol" type="user" class="icon"></za-icon>
      </template>
       <template v-slot:activeIcon>
      <za-icon tag="symbol" theme="primary" type="user" class="icon"></za-icon>
      </template>
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
      activeKey: 1,
      visible: true,
    }
  },
  methods: {
    showTabBar() {
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
| v-model | number \| string | - | 当前选中项 |
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

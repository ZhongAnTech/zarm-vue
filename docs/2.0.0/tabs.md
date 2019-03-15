## 标签页 Tabs

:::demo 基本

```html
<za-tabs v-model="activeName" @change="handleClick">
  <za-tab-panel label="用户管理" name="first">
    <div class="content">用户管理</div>
  </za-tab-panel>
  <za-tab-panel label="配置管理" name="second">
    <div class="content">配置管理</div>
  </za-tab-panel>
  <za-tab-panel label="角色管理" name="third">
    <div class="content">角色管理</div>
  </za-tab-panel>
</za-tabs>
```

:::

:::demo 可滑动

```html
<za-tabs v-model="activeNameSwipe" @change="handleClick" slideable>
  <za-tab-panel label="选项卡1" name="first">
    <div class="content">试试左滑</div>
  </za-tab-panel>
  <za-tab-panel label="选项卡2" name="second">
    <div class="content">试试左右滑</div>
  </za-tab-panel>
  <za-tab-panel label="选项卡3" name="third">
    <div class="content">试试右滑</div>
  </za-tab-panel>
</za-tabs>
```

:::

:::demo 指定默认选项

```html
<za-tabs v-model="activeName8" @change="handleClick">
  <za-tab-panel label="用户管理" name="first">
    <div class="content">用户管理</div>
  </za-tab-panel>
  <za-tab-panel label="配置管理" name="second">
    <div class="content">配置管理</div>
  </za-tab-panel>
  <za-tab-panel label="角色管理" name="third">
    <div class="content">角色管理</div>
  </za-tab-panel>
</za-tabs>
```

:::

:::demo 指定线条宽度

```html
<za-tabs v-model="activeName9" @change="handleClick" :lineWidth="60">
  <za-tab-panel label="用户管理" name="first">
    <div class="content">用户管理</div>
  </za-tab-panel>
  <za-tab-panel label="配置管理" name="second">
    <div class="content">配置管理</div>
  </za-tab-panel>
  <za-tab-panel label="角色管理" name="third">
    <div class="content">角色管理</div>
  </za-tab-panel>
</za-tabs>
```

:::

:::demo 禁用指定选项

```html
<za-tabs v-model="activeName0" @change="handleClick">
  <za-tab-panel label="用户管理" name="first">
    <div class="content">用户管理</div>
  </za-tab-panel>
  <za-tab-panel label="配置管理" name="second" disabled>
    <div class="content">配置管理</div>
  </za-tab-panel>
  <za-tab-panel label="角色管理" name="third">
    <div class="content">角色管理</div>
  </za-tab-panel>
</za-tabs>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      activeName: 'first',
      activeName2: 'first',
      activeName3: 'first',
      activeName4: 'first',
      activeName5: 'first',
      activeName6: 'first',
      activeName7: 'first',
      activeName8: 'second',
      activeName9: 'first',
      activeName0: 'first',
      activeNameSwipe: 'first',
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleClick2(tab, event){
      this.activeName7 = this.activeName6;
    }
  },
};
</script>
```

### API

#### Tabs Attributes

| 属性      | 类型           | 默认值    | 可选值／参数                                                | 说明                    |
| :-------- | :------------- | :-------- | :---------------------------------------------------------- | :---------------------- |
| prefixCls | string         | za-tab    |                                                             | 类名前缀                |
| theme     | string         | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题                    |
| v-model   | string         |           |                                                             | 绑定当前 tab 的 name 值 |
| disabled  | bool           | false     |                                                             | 是否禁用                |
| slideable  | bool           | false     |                                                             | 是否支持滑动切换        |
| lineWidth | number, string |           |                                                             | 线条宽度                |

#### Tabs Event

| 事件名称 | 说明             | 回调参数                                   |
| :------- | :--------------- | :----------------------------------------- |
| change   | tab 被选中时触发 | 1. 选中 tab 的 vue 实例, 2. event 事件对象 |

#### Tab Panel Attributes

| 属性     | 类型   | 默认值 | 可选值／参数 | 说明     |
| :------- | :----- | :----- | :----------- | :------- |
| disabled | bool   | false  |              | 是否禁用 |
| label    | string |        |              | 标题     |
| name     | string |        |              | 标识     |

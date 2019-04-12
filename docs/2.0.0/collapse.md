<style>
.za-collapse-item-content-inner {
  color: #999;
}
</style>

## 折叠面板 Collapse

::: demo 基本

```html
<za-collapse @change="onChange">
  <za-collapse-item title="单行文本" item-key="0">
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
  </za-collapse-item>
</za-collapse>
<script>
  export default {
    methods: {
      onChange(n) {
        console.log(n)
      }
    }
  }
</script>
```

:::

::: demo 手风琴模式

```html
<za-collapse animated default-active-key="a" >
  <za-collapse-item title="单行文本" item-key="a">
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
  </za-collapse-item>
  <za-collapse-item title="单行文本" item-key="b">
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
  </za-collapse-item>
  <za-collapse-item title="单行文本" item-key="c">
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
  </za-collapse-item>
</za-collapse>
```

:::

::: demo 默认展开项

```html
<za-collapse multiple animated :default-active-key="['a']">
  <za-collapse-item title="单行文本" item-key="a">
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
  </za-collapse-item>
  <za-collapse-item title="单行文本" item-key="b">
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
  </za-collapse-item>
</za-collapse>
```

:::

::: demo 禁用子项

```html
<za-collapse multiple animated :default-active-key="['a']">
  <za-collapse-item title="单行文本" item-key="a" disabled>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
  </za-collapse-item>
  <za-collapse-item title="单行文本" item-key="b">
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
    <div>我是50元套餐内容</div>
  </za-collapse-item>
</za-collapse>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      activeKey: ['1', '2']
    }
  },
  created() {
    setTimeout(() => {
        this.activeKey = ['1']
    }, 2000);
  },
  methods: {
    onChange(n){
      console.log(n);
    },
  },
};
</script>
```

#### Collapse Attributes

| 属性               | 类型                                  | 默认值 | 可选值／参数 | 说明             |
| :----------------- | :------------------------------------ | :----- | :----------- | :--------------- |
| default-active-key | number string Array< number string >  |        |              | 初始展开项       |
| active-key         | number string Array < number string > |        |              | 当前展开项       |
| multiple           | boolean                               | false  |              | 是否允许打开多项 |
| animated           | boolean                               | false  |              | 是否添加展开动画 |

#### CollapseItem Attributes

| 属性     | 类型    | 默认值 | 可选值／参数 | 说明                                 |
| :------- | :------ | :----- | :----------- | :----------------------------------- |
| item-key | string  |        |              | collapseItem 唯一标示 对应 activeKey |
| title    | string  |        |              | 标题的文案                           |
| disabled | boolean | false  |              | 是否禁用                             |

#### Collapse Events

| 事件名称 | 说明                         | 回调参数             |
| :------- | :--------------------------- | :------------------- |
| change   | 当 Collapse 切换时触发的事件 | 返回切换的 activeKey |

#### CollapseItem Events

| 事件名称    | 说明                             | 回调参数     |
| :---------- | :------------------------------- | :----------- |
| item-change | 当 CollapseItem 切换时触发的事件 | 返回 itemKey |

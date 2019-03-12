<style>
.za-collapse-item-content-inner {
  color: #999;
}
</style>

## 折叠面板 Collapse

::: demo 基本

```html
<za-collapse @change="onChange">
  <za-collapse-item title="单行文本" itemKey="0">
    <div>
      更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文
    </div>
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
<za-collapse animated defaultActiveKey="a" activeKey="b">
  <za-collapse-item title="单行文本" itemKey="a">
    <div>
      更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文
    </div>
  </za-collapse-item>
  <za-collapse-item title="单行文本" itemKey="b">
    <div>
      更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文
    </div>
  </za-collapse-item>
  <za-collapse-item title="单行文本" itemKey="c">
    <div>
      更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文
    </div>
  </za-collapse-item>
</za-collapse>
```

:::

::: demo 默认展开项

```html
<za-collapse multiple animated :defaultActiveKey="['a']">
  <za-collapse-item title="单行文本" itemKey="a">
    <div>
      更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文
    </div>
  </za-collapse-item>
  <za-collapse-item title="单行文本" itemKey="b">
    <div>
      更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文
    </div>
  </za-collapse-item>
</za-collapse>
```

:::

::: demo 禁用子项

```html
<za-collapse multiple animated :defaultActiveKey="['a']">
  <za-collapse-item title="单行文本" itemKey="a" disabled>
    <div>
      更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文
    </div>
  </za-collapse-item>
  <za-collapse-item title="单行文本" itemKey="b">
    <div>
      更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文本更多文
    </div>
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

| 属性             | 类型                                  | 默认值      | 可选值／参数 | 说明             |
| :--------------- | :------------------------------------ | :---------- | :----------- | :--------------- |
| prefixCls        | string                                | za-collapse |              | 类名前缀         |
| defaultActiveKey | number string Array< number string >  |             |              | 初始展开项       |
| activeKey        | number string Array < number string > |             |              | 当前展开项       |
| multiple         | bool                                  | false       |              | 是否允许打开多项 |
| animated         | bool                                  | false       |              | 是否添加展开动画 |

#### CollapseItem Attributes

| 属性     | 类型   | 默认值 | 可选值／参数 | 说明                                 |
| :------- | :----- | :----- | :----------- | :----------------------------------- |
| itemKey  | string |        |              | collapseItem 唯一标示 对应 activeKey |
| title    | string |        |              | 标题的文案                           |
| disabled | bool   | false  |              | 是否禁用                             |

#### Collapse Events

| 事件名称 | 说明                         | 回调参数             |
| :------- | :--------------------------- | :------------------- |
| change   | 当 Collapse 切换时触发的事件 | 返回切换的 activeKey |

#### CollapseItem Events

| 事件名称    | 说明                             | 回调参数     |
| :---------- | :------------------------------- | :----------- |
| item-change | 当 CollapseItem 切换时触发的事件 | 返回 itemKey |

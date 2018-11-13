<script>
export default {
  data() {
    return {
      active: [0],
    }
  },
  created() {
    setTimeout(() => {
        this.active = [1];
    }, 2000);
  },
  methods: {
    onChange(n){
      console.log(n);
    },
  },
};
</script>

## 折叠面板 Collapse

::: demo 基本
```html
    <za-collapse @change='onChange'>
      <za-collapse-item title="50元套餐" activeKey='0'>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
      </za-collapse-item>
      <za-collapse-item title="100元套餐" activeKey='1'>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
      </za-collapse-item>
      <za-collapse-item title="200元套餐" activeKey='2'>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
      </za-collapse-item>
    </za-collapse>
    <script>
    export default {
      methods: {
        onChange(n){
          console.log(n);
        },
      },
    };
    </script>
```
:::

::: demo 手风琴模式
```html
    <za-collapse animated  :multiple='true' :defaultActiveKey="['a']">
      <za-collapse-item title="50元套餐" activeKey='a'>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
      </za-collapse-item>
      <za-collapse-item title="100元套餐" activeKey='b'>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
      </za-collapse-item>
      <za-collapse-item title="200元套餐" activeKey='c'>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
      </za-collapse-item>
    </za-collapse>
```
:::

::: demo 默认展开项
```html
    <za-collapse animated :defaultActiveKey="['a']">
      <za-collapse-item title="50元套餐" activeKey='a'>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
      </za-collapse-item>
      <za-collapse-item title="100元套餐" activeKey='b'>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
      </za-collapse-item>
      <za-collapse-item title="200元套餐" activeKey='c'>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
      </za-collapse-item>
    </za-collapse>
```
:::

::: demo 强制展开模式
```html
    <za-collapse open>
      <za-collapse-item title="50元套餐">
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
        <div>我是50元套餐内容</div>
      </za-collapse-item>
      <za-collapse-item title="100元套餐">
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
        <div>我是100元套餐内容</div>
      </za-collapse-item>
      <za-collapse-item title="200元套餐">
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
        <div>我是200元套餐内容</div>
      </za-collapse-item>
    </za-collapse>
```
:::


#### Collapse Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-collapse | | 类名前缀 |
| defaultActiveKey | array | |  | 默认展开的activeKey数组 |
| multiple | bool | |  | 是否手风琴模式 |
| animated | bool | | false | 是否开启展开动画 |
| open | bool | false | | 强制默认展开 |

#### CollapseItem Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| activeKey | string |  | | collapseItem唯一标示 |
| title | string |  |  | 标题的文案 |

#### Collapse Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当Collapse切换时触发的事件 | 返回切换的activeKey |
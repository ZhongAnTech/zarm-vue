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

::: demo
```html
  <div>
    <za-panel>
        <za-panel-header title="基本" ></za-panel-header>
        <za-panel-body>
          <za-accordion @change='onChange'>
            <za-accordion-item title="50元套餐" aiTag='0'>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
            </za-accordion-item>
            <za-accordion-item title="100元套餐" aiTag='1'>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
            </za-accordion-item>
            <za-accordion-item title="200元套餐" aiTag='2'>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
            </za-accordion-item>
          </za-accordion>
        </za-panel-body>
      </za-panel>
```
:::

::: demo
```html
  <za-panel>
        <za-panel-header title="手风琴模式" ></za-panel-header>
        <za-panel-body>
          <za-accordion animated  :multiple='true' >
            <za-accordion-item title="50元套餐" aiTag='0'>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
            </za-accordion-item>
            <za-accordion-item title="100元套餐" aiTag='1'>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
            </za-accordion-item>
            <za-accordion-item title="200元套餐" aiTag='2'>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
            </za-accordion-item>
          </za-accordion>
        </za-panel-body>
      </za-panel>  
```  
:::

::: demo
```html
      <za-panel>
        <za-panel-header title="默认展开项"></za-panel-header>
        <za-panel-body>
          <za-accordion animated :defaultActiveTag="['a']">
            <za-accordion-item title="50元套餐" aiTag='a'>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
            </za-accordion-item>
            <za-accordion-item title="100元套餐" aiTag='b'>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
            </za-accordion-item>
            <za-accordion-item title="200元套餐" aiTag='d'>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
            </za-accordion-item>
          </za-accordion>
        </za-panel-body>
      </za-panel>
```
:::

::: demo
```html
      <za-panel>
        <za-panel-header title="强制展开模式"></za-panel-header>
        <za-panel-body>
          <za-accordion open>
            <za-accordion-item title="50元套餐">
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
              <div>我是50元套餐内容</div>
            </za-accordion-item>
            <za-accordion-item title="100元套餐">
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
              <div>我是100元套餐内容</div>
            </za-accordion-item>
            <za-accordion-item title="200元套餐">
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
              <div>我是200元套餐内容</div>
            </za-accordion-item>
          </za-accordion>
        </za-panel-body>
      </za-panel>
  </div>
```
:::

::: api

#### Accordion Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-accordion | | 类名前缀 |
| defaultActiveTag | array | |  | 默认展开的aiTag数组 |
| multiple | bool | |  | 是否手风琴模式 |
| animated | bool | | false | 是否开启展开动画 |
| open | bool | false | | 强制默认展开 |

#### AccordionItem Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| aiTag | string |  | | accordionItem唯一标示 |
| title | string |  |  | 标题的文案 |

#### Accordion Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当accordion切换时触发的事件 | 返回切换的aiTag |
:::
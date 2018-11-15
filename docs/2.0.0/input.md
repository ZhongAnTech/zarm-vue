<script>
export default {
  data() {
    return {
      v1:'',
      v2:'这是一个textarea',
      v3:'',
      v4:'',
      v5:'',
      v6:'',
      v7:'327198092039342',
    }
  },
  methods: {
    handleChange(v) {
      console.log(this.v1, v);
    },
    handleChange2(v) {
      console.log(this.v2, v);
    },
    handleChange3(v) {
      console.log(v);
    },
    focus() {
      this.$refs.inputFirst.focus()
    },
  },
};
</script>

## 文本框 Input

:::demo 普通
```html
    <za-cell title='单行文本'>
      <za-input ref='inputFirst' v-model='v1' type="text" placeholder="type is text" @change='handleChange'></za-input>
    </za-cell>
    <za-cell title='多行文本'>
      <za-input v-model='v2' type="textarea" placeholder="type is textarea" @change='handleChange2'></za-input>
    </za-cell>
    <za-cell>
      <a @click='focus'>click to focus the first input</a>
    </za-cell>
```
:::

:::demo 输入类型
```html
    <za-cell title='数字'>
      <za-input-number v-model='v5' type="number"  @change='handleChange'></za-input-number>
    </za-cell>
    <za-cell title='金额'>
      <za-input-number v-model='v6' type="price"  @change='handleChange'></za-input-number>
    </za-cell>
      <za-cell title='证件'>
      <za-input-number v-model='v7' type="idcard"  @change='handleChange'></za-input-number>
    </za-cell>
```
:::

:::demo 高度自适应
```html
    <za-cell title='多行文本'>
      <za-input autosize v-model='v3' type="textarea" placeholder="this is a autosize textarea"></za-input>
    </za-cell>
```
:::

:::demo 无标签栏
```html
    <za-cell>
      <za-input type="text" placeholder="标题" @change='handleChange3'/>
    </za-cell>
    <za-cell>
      <za-input autosize v-model='v4' type="textarea" rows='4' placeholder="摘要"></za-input>
    </za-cell>
```
:::

:::demo 显示输入字数
```html
    <za-cell>
      <za-input autosize show-length type="textarea" rows="4" max-length="200" placeholder="摘要" v-model='v5'></za-input>
    </za-cell>
```
:::

### Vue JavaScript代码

``` js
export default {
  data() {
    return {
      v1:'',
      v2:'这是一个textarea',
      v3:'',
      v4:'',
      v5:'',
      v6:'',
      v7:'327198092039342',
    }
  },
  methods: {
    handleChange(v) {
      console.log(this.v1, v);
    },
    handleChange2(v) {
      console.log(this.v2, v);
    },
    handleChange3(v) {
      console.log(v);
    },
    focus() {
      this.$refs.inputFirst.focus()
    },
  },
};
```

### API

#### Input Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-input | | 类名前缀 |
| type | string | text | | 显示类型 |
| disabled | `bool` | false | | 是否禁用 |
| rows | `string`, `number` | | | 多行文本时的显示行数 |
| autosize | bool | false | | 是否高度自适应 |
| showLength | bool | false | | 是否显示输入字数 |

#### Input Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当绑定值变化时触发的事件 | 最新的值 |
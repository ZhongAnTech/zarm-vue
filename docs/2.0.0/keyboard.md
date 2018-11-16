<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      v1:'',
      v2:'',
      v3:'',
    }
  },
  methods: {
    handleChange1(key) {
      if (['close', 'ok'].indexOf(key) > -1) {
        return;
      }
      this.v1 = getValue(this.v1, key)
      console.log(this.v1);
    },
    showPicker(name) {
      this[name] = true;
    },
    handleChange2(key) {
      if (['close', 'ok'].indexOf(key) > -1) {
        return;
      }
      this.v2 = getValue(this.v2, key)
      console.log(this.v2);
    },
    handleChange3(key) {
      if (['close', 'ok'].indexOf(key) > -1) {
        return;
      }
      this.v3 = getValue(this.v3, key)
      console.log(this.v3);
    },
  },
};
</script>

## 虚拟键盘 Keyboard & KeyboardPicker

:::demo 类型
```html
    <za-cell title='数字' @click="showPicker('visible1')">
      {{v1}}
    </za-cell>
    <za-cell title='金额' @click="showPicker('visible2')">
      {{v2}}
    </za-cell>
      <za-cell title='证件' @click="showPicker('visible3')">
      {{v3}}
    </za-cell>
    <za-keyboard-picker :visible.sync="visible1" type="number" @keyClick="handleChange1" ></za-keyboard-picker>
    <za-keyboard-picker :visible.sync="visible2" type="price" @keyClick="handleChange2" ></za-keyboard-picker>
    <za-keyboard-picker :visible.sync="visible3" type="idcard" @keyClick="handleChange3" ></za-keyboard-picker>
```
:::

:::demo 键盘
```html
    <za-keyboard type="number" ></za-keyboard>
```
:::

### API

#### keyboard Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-keyboard | | 类名前缀 |
| type | string | 'number' | | 键盘类型，可选`number`,`price`,`idcard` |


#### keyboardPicker Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| visible | bool | false | | 是否显示, 支持.sync修饰符 (v2.3.0+) |

#### keyboard & keyboardPicker Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| keyClick | 当点击键盘时触发的事件 | 最新点击的值 |
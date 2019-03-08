

## 虚拟键盘 Keyboard & KeyboardPicker

:::demo 平铺键盘 Keyboard
```html
    <za-keyboard type="number" ></za-keyboard>
```
:::

:::demo 键盘触发器 KeyboardPicker
```html
    <za-cell title="键盘类型">
      <za-select
        v-model='v1'
        :data-source='data1'
        @ok='handleOk'
        @cancel='handleCancel'/>
    </za-cell>
    <za-keyboard-picker :visible.sync="visible1" type="number" @keyClick="handleChange1" ></za-keyboard-picker>
    <za-keyboard-picker :visible.sync="visible2" type="price" @keyClick="handleChange2" ></za-keyboard-picker>
    <za-keyboard-picker :visible.sync="visible3" type="idcard" @keyClick="handleChange3" ></za-keyboard-picker>
```
:::


### Vue Script
```javascript
<script name="vue">
const getValue = (v, key) => {
  if (key == 'delete') {
    return v.slice(0, -1)
  }
  return `${v}${key}`
}
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      v1:'',
      data1: [
        { value: 'number', label: '数字' },
        { value: 'price', label: '金额' },
        { value: 'idcard', label: '证件' },
      ]
    }
  },
  methods: {
    handleOk(v) {
      const self = this;
      switch(v.value) {
        case 'number': self.visible1 = true;break;
        case 'price': self.visible2 = true;break;
        case 'idcard': self.visible3 = true;break;
        default:break;
      }
    },
    handleCancel(v) {
      this.v1 = '';
    },
    handleChange1(key) {
      if (['close', 'ok'].indexOf(key) > -1) {
        return;
      }
      this.v1 = getValue(this.v1, key)
      console.log(this.v1);
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
```

### API

#### keyboard Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-keyboard | | 类名前缀 |
| type | string | 'number' | | 键盘类型，可选`number`,`price`,`idcard` |
| className | string | | | 追加类名 |

#### keyboardPicker Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| visible | bool | false | | 是否显示, 支持.sync修饰符 (v2.3.0+) |
| type | string | 'number' | | 键盘类型，可选`number`,`price`,`idcard` |

#### keyboard & keyboardPicker Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| keyClick | 当点击键盘时触发的事件 | 最新点击的值 |
## 开关 Switch

:::demo 基本

```html
<za-cell>
  <za-switch slot="description" v-model="switch1" @change="handleChange">
  </za-switch>
  普通
</za-cell>
<za-cell>
  <za-switch slot="description" defaultChecked></za-switch>
  默认开
</za-cell>
<za-cell>
  <za-switch slot="description" disabled></za-switch>
  禁用的开关（默认关）
</za-cell>
<za-cell>
  <za-switch slot="description" disabled defaultChecked></za-switch>
  禁用的开关（默认开）
</za-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      switch1: false,
    }
  },
  methods: {
    handleChange(checked){
      console.log(checked);
    }
  }
};
</script>
```

### API

#### Switch Attributes

| 属性           | 类型    | 默认值      | 可选值／参数 | 说明     |
| :------------- | :------ | :---------- | :----------- | :------- |
| default-checked | boolean | false       | -            | 初始值   |
| v-model        | boolean | false       | -            | 值       |
| disabled       | boolean | false       | -            | 是否禁用 |

#### Switch Event

| 事件名称 | 说明               | 回调参数             |
| :------- | :----------------- | :------------------- |
| change   | 绑定值改变时的事件 | event.target.checked |

## 开关 Switch

:::demo 基本

```html
<za-cell title="普通">
  <template v-slot:description>
    <za-switch v-model="switch1" @change="handleChange">
    </za-switch>
  </template>
</za-cell>
<za-cell title="默认开">
  <template v-slot:description>
  <za-switch defaultChecked></za-switch>
  
  </template>
</za-cell>
<za-cell title=" 禁用的开关（默认关）">
  <template v-slot:description>
  <za-switch disabled></za-switch>
 
  </template>
</za-cell>
<za-cell title="禁用的开关（默认开）">
  <template v-slot:description>
  <za-switch disabled defaultChecked></za-switch>
  
  </template>
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

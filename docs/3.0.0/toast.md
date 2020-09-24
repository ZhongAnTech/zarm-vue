## 轻提示 Toast

:::demo 提示信息

```html
<za-cell title="错误提示">
   <template v-slot:description>
  <za-button size="xs" theme="error" @click="visible1 = true"
    >开启</za-button
  >
  </template>
  
</za-cell>
<za-cell title="成功提示">
   <template v-slot:description>
  <za-button
    size="xs"
    theme="success"
    slot="description"
    @click="visible2 = true"
    >开启</za-button
  >
  </template>
  
</za-cell>
<za-cell title="指定关闭时间">
   <template v-slot:description>
  <za-button size="xs" @click="visible3 = true"
    >开启</za-button
  >
  </template>
  
</za-cell>
<za-toast v-model:visible="visible1" @close="toastClose"
  >默认3秒自动关闭</za-toast
>
<za-toast
  v-model:visible="visible2"
  @close="toastClose"
  @maskClick="visible2 = false"
>
  <div class="box">
    <za-icon type="right-round-fill" class="box-icon"></za-icon>
    <div class="box-text">预约成功</div>
  </div>
</za-toast>
<za-toast v-model:visible="visible3" @close="toastClose" :duration="10000"
  >指定10秒自动关闭</za-toast
>
```

:::

:::demo 加载中

```html
<za-cell title="Loading">
   <template v-slot:description>
  <za-button size="xs" @click="visible4 = true"
    >开启</za-button
  >
  </template>
  
</za-cell>
<za-loading v-model:visible="visible4"></za-loading>
```

:::

:::demo 函数调用

```html
<za-cell title="$zaToast">
   <template v-slot:description>
  <za-button size="xs" theme="error" @click="showToast"
    >开启</za-button
  >
  </template>
  
</za-cell>
```
:::

`zarm-vue 为 Vue.prototype 上添加了全局方法：$zaToast 因此在 vue instance 内可以采用 this.$zaToast(messgae, options) 或 this.$zaToast(options) 的方式调用`。

#### 普通

```html
<script>
  export default {
    methods: {
      show() {
        this.$zaToast('this is toast')
      }
    }
  }
</script>
```

#### 指定停留时间

```html
<script>
  export default {
    methods: {
      show() {
        this.$zaToast('toast last for 5 sec', {
          duration: 5000
        })
      }
    }
  }
</script>
```

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      isLoading: false
    }
  },
  methods: {
    showToast() {
      this.$zaToast('this is toast')
    },
    toastClose(reason, event){
      console.log(reason, event);
    }
  },
};
</script>
```

### API

#### Toast Attributes

| 属性                 | 类型   | 默认值   | 可选值／参数 | 说明                                 |
| :------------------- | :----- | :------- | :----------- | :----------------------------------- |
| visible              | boolean   | false    |              | 是否显示, 支持.sync 修饰符 (v2.3.0+) |
| duration             | number | 3000     |              | 自动关闭前停留的时间（单位：毫秒）   |

#### Toast Event

| 事件名称 | 说明             | 回调参数                                                                    |
| :------- | :--------------- | :-------------------------------------------------------------------------- |
| close    | toast 关闭时触发 | 关闭时触发的回调函数 |
| mask-click | 点击遮罩后触发的事件 | event 事件对象 |

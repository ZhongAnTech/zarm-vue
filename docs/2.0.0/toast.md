<script>
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
    toastClose(reason, event){
      console.log(reason, event);
    }
  },
};
</script>

## 轻提示 Toast

:::demo 提示信息
```html
  <za-cell>
    <za-button size='xs' theme='error' slot='description' @click='visible1 = true'>开启</za-button>
    错误提示
  </za-cell>
  <za-cell>
    <za-button size='xs' theme='success' slot='description' @click='visible2 = true'>开启</za-button>
    成功提示(close-on-click-modal)
  </za-cell>
  <za-cell>
    <za-button size='xs' slot='description' @click='visible3 = true'>开启</za-button>
    指定关闭时间
  </za-cell>
  <za-toast :visible.sync='visible1' @close='toastClose'>默认3秒自动关闭</za-toast>
  <za-toast :visible.sync='visible2' @close='toastClose' :close-on-click-modal='true'>
    <div class='box'>
      <za-icon type="right-round-fill" class='box-icon' ></za-icon>
      <div class='box-text'>预约成功</div>
    </div>
  </za-toast>
  <za-toast :visible.sync='visible3' @close='toastClose' :duration='10000'>指定10秒自动关闭</za-toast>
```
:::

:::demo 加载中
```html
  <za-cell>
    <za-button size='xs' slot='description' @click='visible4 = true'>开启</za-button>
    Loading
  </za-cell>
  <za-loading :visible.sync='visible4'></za-loading>
```
:::


`zarm-vue 为 Vue.prototype 上添加了全局方法：$zaToast 因此在 vue instance 内可以采用
this.$zaToast(messgae, options) 或 this.$zaToast(options) 的方式调用`。

#### 普通
```html
<script>
export default{
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
export default{
  methods: {
    show() {
      this.$zaToast('toast last for 5 sec', {
        duration: 5000,
      })
    }
  }
}
</script>
```


### API

#### Toast Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-toast | | 类名前缀 |
| visible | bool | false | | 是否显示, 支持.sync修饰符 (v2.3.0+) |
| duration | number | 3000 | | 自动关闭前停留的时间（单位：毫秒） |
| close-on-click-modal | bool | false | | 点击遮罩层是否关闭toast |

#### Toast Event

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| close | toast关闭时触发 | 1.reason (可能值: clickaway, timeout) 2.event 事件对象(只有clickaway时有) |
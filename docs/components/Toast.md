# 轻提示 Toast

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/toast)


### 代码演示

#### 基本用法

###### 普通
```js
methods: {
  show() {
    this.$zaToast('this is toast')
  }
}
```

###### 指定停留时间
```js
methods: {
  show() {
    this.$zaToast('toast last for 5 sec', {
      duration: 5000,
    })
  }
}
```

###### 自定义内容
```vue
<za-toast
  :visible.sync='visible'
   @close='handleClose'
   :duration='10000'>
   <div>指定10秒自动关闭</div>
</za-toast>
```
###### 加载Loading
```js
methods: {
  request() {
    const loading = this.$zaLoading()
    fetch().then(res => {
      loading.close();
    })
  }
}
```


`zarm-vue 为 Vue.prototype 上添加了全局方法：$zaToast, $zaLoading 因此在 vue instance 内可以采用
this.$zaToast(messgae, options) 或 this.$zaToast(options) 的方式调用`。

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

# 加载 Loading

### 代码演示

#### 基本用法

###### 调用实例$zaLoading方法

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

`zarm-vue 为 Vue.prototype 上添加了全局方法：$zaLoading 因此在 vue instance 内可以采用
this.$zaLoading()的方式调用, 方法返回Loading的实例, 调用实例的close方法来关闭loading`。

###### 使用 v-za-loading 指令
```js
<div v-za-loading='isLoading'>
  <za-button @click='request'>click me</za-button>
</div>

// ...
data() {
  return {
    isLoading: false
  }
},
methods: {
  request() {
    this.isLoading = true;
    fetch().then(res => {
      this.isLoading = false;
    })
  }
}
```

`使用 v-za-loading 指令也可以调用loading，控制指令的value就可以控制loading`。



###### 使用za-loading component

```vue
<za-loading :visible.sync='visible'></za-loading>

// ...
data() {
  return {
    visible: false
  }
},
methods: {
  request() {
    this.visible = true;
    fetch().then(res => {
      this.visible = false;
    })
  }
}
```

### API

#### Loading Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-loading | | 类名前缀 |
| visible | bool | false | | 是否显示, 支持.sync修饰符 (v2.3.0+) |

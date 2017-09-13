# 下拉刷新 Pull

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/pull)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-pull :on-refresh='fetch' :refreshing='refreshing'>
  <za-cell v-for='i in myData' :key='i'>第 {{i}} 行</za-cell>
</za-pull>

// ...

data() {
  return {
    refreshing: false,
    myData: [1,2,3,4],
  }
},
methods: {
  fetch(){
    this.refreshing = true;
    setTimeout(() => {
      this.myData.push(0);
      this.refreshing = false;
    }, 1000)
  }
}

```

###### 自定义提示内容
```vue
// 可以使用 scopedSlots 来覆盖默认的样式，加载的几个状态分别为pull, drop, loading, success, failure
// 分别对应各自的 scopedSlots。
<za-panel-body>
  <za-pull :on-refresh='fetch' :refreshing='refreshing'>
    <za-cell v-for='i in myData' :key='i'>第 {{i}} 行</za-cell>

    <template scope='props' slot='pull'>
      <div class='custom-control' :style='{
        transform: `scale(${props.percent / 100})`
        }'>
        <img src='https://avatars2.githubusercontent.com/u/499550?v=4&s=72' alt="" />
      </div>
    </template>

    <template scope='props' slot='drop'>
      <div class='custom-control'>
        释放加载
      </div>
    </template>

    <template scope='props' slot='loading'>
      <div class='custom-control'>
        <za-spinner class="rotate360" />
      </div>
    </template>

    <template scope='props' slot='success'>
      <div class='custom-control'>
        加载成功
      </div>
    </template>

  </za-pull>
</za-panel-body>
```


### API

#### Pull Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-pull | | 类名前缀 |
| refreshing | bool | false | 是否正在刷新 |
| refreshInitDistance | number | 20 | | 下拉助跑距离 |
| refreshDistance | number | 60 | | 下拉距离阀值 |
| on-refresh | func | | | 达到阀值后释放触发刷新的回调函数 |
| duration | number | 300 | | 动画执行时间，单位：ms |
| stayTime | number | 1500 | | 加载成功停留时间 |

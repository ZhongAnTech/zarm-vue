## 上拉加载下拉刷新 Pull

:::demo 上拉加载下拉刷新

```html
<za-pull
  :on-refresh="refresh(2)"
  :refreshing="refreshing2"
  :loading="loading"
  :on-load="loadData"
>
  <za-cell v-for="(i, index) in myData2" :key="index">ID号 {{i}} </za-cell>
  <!-- 此处的几个slot用来覆盖默认样式，定义的会覆盖，不定义的依然使用默认样式 -->
  <template v-slot:refreshPull="props" >
    <div
      class="custom-control"
      :style="{
          transform: `scale(${props.percent / 100})`
          }"
    >
      <img
        src="https://static.zhongan.com/website/health/zarm/images/icons/state.png"
        alt=""
      />
    </div>
  </template>
  <template v-slot:refreshDrop="props" >
    <div class="custom-control">
      释放加载
    </div>
  </template>
  <template v-slot:refreshLoading="props" >
    <div class="custom-control">
      <za-activity-indicator class="rotate360" />
    </div>
  </template>
  <template v-slot:refreshSuccess="props">
    <div class="custom-control">
      加载成功
    </div>
  </template>
</za-pull>
```

:::

#### 上拉加载下拉刷新(自定义提示内容)

使用 scopedSlots 来覆盖默认的样式

上拉刷新的几个状态分别为 `refreshPull`, `refreshDrop`, `refreshLoading`, `refreshSuccess`, `refreshFailure` 分别对应各自的 scopedSlots。

下拉加载的几个状态分别为 `loadComplete`, `loadLoading`, `loadFailure` 分别对应各自的 scopedSlots。

scopedSlots 用来覆盖默认样式，定义的会覆盖，不定义的默认使用内定样式

```html
<za-panel-body>
  <za-pull
    :on-refresh="refresh"
    :refreshing="refreshing"
    :loading="loading"
    :on-load="loadData"
  >
    <za-cell v-for="i in myData" :key="i">第 {{i}} 行</za-cell>

    <template v-slot:refreshPull="props">
      <div
        class="custom-control"
        :style="{
        transform: `scale(${props.percent / 100})`
        }"
      >
        <img
          style="width:24px;height:24px"
          src="https://static.zhongan.com/website/health/zarm/images/icons/state.png"
          alt=""
        />
      </div>
    </template>

    <template v-slot:refreshDrop="props">
      <div class="custom-control">
        释放加载
      </div>
    </template>

    <template v-slot:refreshLoading="props">
      <div class="custom-control">
        <za-activity-indicator class="rotate360" />
      </div>
    </template>

    <template v-slot:refreshSuccess="props">
      <div class="custom-control">
        加载成功
      </div>
    </template>
  </za-pull>
</za-panel-body>
<script>
  export default {
    data() {
      return {
        myData: [1, 2, 3, 4],
        refreshing: false,
        loading: false
      }
    },
    methods: {
      random(length) {
        const newData = []
        for (let i = 0; i < length; i++) {
          newData.push(Math.round(Math.random() * 100))
        }
        return newData
      },
      refresh() {
        this.refreshing = true
        return new Promise((resolve, reject) => {
          fetch()
            .then(res => {
              this.refreshing = false
              resolve(true)
            })
            .catch(e => {
              this.refreshing = false
              reject(false)
            })
        })
      },
      loadData() {
        this.loading = true
        return new Promise((resolve, reject) => {
          fetch()
            .then(res => {
              this.loading = false
              resolve(true)
              // or resolve(false);
            })
            .catch(e => {
              this.loading = false
              reject(false)
            })
        })
      }
    }
  }
</script>
```

on-refresh, on-load 这两个回调函数要求返回一个 Promise 对象。对于 on-refresh 来说，resolve 时表示刷新成功，reject 则表示刷新失败。而对于 on-load 来说，resolve(true) 表示加载成功，并且还有更多数据，resolve(false) 表示加载成功，但后续没有数据了。reject 则表示加载失败。

**注意: zarm-vue 本身并不带有 Promise 库，请您根据自己的运行环境决定是否需要用引入 Promise Pollyfill.**

### Vue Script

```javascript
<script name="vue">
let times = 0;
let RandomLength = 25;

export default {
  mounted() {
    this.refreshing2 = true
    setTimeout(() => {
      this.myData2 = this.random(RandomLength);
      this.refreshing2 = false
    }, 1500)
  },
  data() {
    return {
      i: null,
      myData2: [],
      refreshing1: false,
      refreshing2: false,
      loading: false,
    }
  },
  methods: {
    random(length){
      const newData = [];
      for(let i = 0; i < length; i++){
        newData.push(Math.round(Math.random() * 100))
      }
      return newData;
    },
    refresh(index) {
      return () => new Promise((resolve, reject) => {
        this[`refreshing${index}`] = true;
        setTimeout(() => {
          this[`myData${index}`] = this.random(RandomLength);
          resolve(true);
          this[`refreshing${index}`] = false;
        }, 1000)
      })
    },
    loadData() {
      this.loading = true
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.8) {
            return reject(false); // capture error and reject it
          };
          if(times < 2){
            const length = this.myData2.length + 1
            for(let i = 0; i < 10; i++) {
              this.myData2.push( length + i);
            }
            resolve(true) // has more
          }else{
            resolve(false) // no more
          }
          this.loading = false
          times++;
        }, 1200)
      })
    }
  }
}
</script>
```

### API

#### Pull Attributes

| 属性                  | 类型     | 默认值 | 可选值／参数 | 说明                             |
| :-------------------- | :------- | :----- | :----------- | :------------------------------- |
| refreshing            | boolean  | false  | 是否正在刷新 |
| loading               | boolean  | false  | 是否正在加载 |
| refresh-init-distance | number   | 20     |              | 下拉助跑距离                     |
| refresh-distance      | number   | 60     |              | 下拉距离阀值                     |
| duration              | number   | 300    |              | 动画执行时间，单位：ms           |
| stay-time             | number   | 1500   |              | 加载成功停留时间                 |
| on-refresh            | function |        |              | 达到阀值后释放触发刷新的回调函数 |
| on-load               | function |        |              | 下拉加载的回调函数               |

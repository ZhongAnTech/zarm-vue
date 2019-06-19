## 走马灯 Carousel

:::demo 基本

```html
<za-carousel
  direction="left"
  @changeStart="handleChangeStart"
  @changeEnd="handleChangeEnd"
>
  <za-carousel-item
    :key="index"
    class="carousel-item-pic"
    v-for="(i, index) in ITEMS"
  >
    <img :src="i.url" :alt="i.img" :draggable="false" />
  </za-carousel-item>
</za-carousel>
```

:::

:::demo 纵向

```html
<za-carousel
  height="48vw"
  direction="bottom"
  @changeStart="handleChangeStart"
  @changeEnd="handleChangeEnd"
>
  <za-carousel-item
    :key="index"
    class="carousel-item-pic"
    v-for="(i, index) in ITEMS"
  >
    <img :src="i.url" :alt="i.img" :draggable="false" />
  </za-carousel-item>
</za-carousel>
```

:::

:::demo 循环轮播

```html
<za-carousel
  ref="carousel"
  direction="left"
  :swipeable="false"
  loop
  @changeStart="handleChangeStart"
  @changeEnd="handleChangeEnd"
>
  <za-carousel-item
    :key="index"
    class="carousel-item-pic"
    v-for="(i, index) in ITEMS"
  >
    <img :src="i.url" :alt="i.img" :draggable="false" />
  </za-carousel-item>
</za-carousel>
<div class="controls" style="text-align:center;padding-bottom:20px;">
  <za-button size="sm" @click="onJumpTo">无动画切换指定页</za-button>
  <za-button size="sm" style="margin-left:10px;" @click="onSlideTo"
    >滑动到指定页</za-button
  >
</div>
```

:::

:::demo 自动轮播

```html
<za-carousel direction="left" :swipeable="false" loop auto-play>
  <za-carousel-item :key="index" v-for="(i, index) in ITEMS">
    <div class="carousel-item-pic">
      <img :src="i.url" :alt="i.img" :draggable="false" />
    </div>
  </za-carousel-item>
</za-carousel>
```

:::

### Vue Script

```javascript
<script name="vue">
const ITEMS = [
  {
    url: 'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
    img: '1',
  },
  {
    url: 'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
    img: '2',
  },
  {
    url: 'https://static.zhongan.com/website/health/zarm/images/banners/3.png',
    img: '3',
  },
];

export default {
  data() {
    return {
      ITEMS,
      i: {}
    }
  },
  methods: {
    handleChangeStart(index){
      console.log(index);
    },
    handleChangeEnd(index){
      console.log(index);
    },
    onJumpTo(){
      this.$refs.carousel.onJumpTo(0)
    },
    onSlideTo(){
      this.$refs.carousel.onSlideTo(2)
    }
  },
};
</script>
```

### API

#### Carousel Attributes

| 属性                    | 类型           | 默认值 | 可选值／参数                     | 说明                           |
| :---------------------- | :------------- | :----- | :------------------------------- | :----------------------------- |
| direction               | string         | 'left' | 'left', 'right', 'top', 'bottom' | 滑动方向                       |
| height                  | number, string |        |                                  | 高度                           |
| loop                    | boolean        | false  |                                  | 是否循环                       |
| active-index             | number         | 0      |                                  | 当前页面的索引                 |
| swipeable               | boolean        | true   |                                  | 是否可拖拽                     |
| auto-play               | boolean        | false  |                                  | 是否自动轮播                   |
| auto-play-interval-time | number         | 3000   |                                  | 自动轮播时间间隔，单位：毫秒   |
| move-distance-ratio     | number         | 0.5    |                                  | 移动距离比例临界点             |
| move-time-span          | number         | 300    |                                  | 移动时间跨度临界点，单位：毫秒 |
| animation-duration      | number         | 300    |                                  | 动画执行时间，单位：毫秒       |

#### Carousel Events

| 事件名称     | 说明                 | 回调参数                                       |
| :----------- | :------------------- | :--------------------------------------------- |
| change-start | 动画开始时触发的事件 | index, 当前处于激活状态幻灯片的 index 值       |
| change-end   | 动画结束后触发的事件 | index, 动画结束时处于激活状态幻灯片的 index 值 |

## 走马灯 Carousel

:::demo 基本

```html
<za-carousel
  direction="left"
  @changeStart="handleChangeStart"
  @changeEnd="handleChangeEnd"
>
  <za-carousel-item :key="index" v-for="(i, index) in ITEMS">
    <div class="carousel-item-pic">
      <img :src="i.url" :alt="i.img" :draggable="false" />
    </div>
  </za-carousel-item>
</za-carousel>
```

:::

:::demo 纵向

```html
<za-carousel
  height="180"
  direction="bottom"
  @changeStart="handleChangeStart"
  @changeEnd="handleChangeEnd"
>
  <za-carousel-item :key="index" v-for="(i, index) in ITEMS">
    <div class="carousel-item-pic">
      <img :src="i.url" :alt="i.img" :draggable="false" />
    </div>
  </za-carousel-item>
</za-carousel>
```

:::

:::demo 循环轮播

```html
<za-carousel
  ref="carousel"
  direction="left"
  loop
  @changeStart="handleChangeStart"
  @changeEnd="handleChangeEnd"
>
  <za-carousel-item :key="index" v-for="(i, index) in ITEMS">
    <div class="carousel-item-pic">
      <img :src="i.url" :alt="i.img" :draggable="false" />
    </div>
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
<za-carousel direction="left" loop auto-play>
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
    url: 'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
    img: '2',
  },
  {
    url: 'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
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

| 属性                 | 类型           | 默认值      | 可选值／参数                     | 说明                           |
| :------------------- | :------------- | :---------- | :------------------------------- | :----------------------------- |
| prefixCls            | string         | za-carousel |                                  | 类名前缀                       |
| direction            | string         | 'left'      | 'left', 'right', 'top', 'bottom' | 滑动方向                       |
| height               | number, string |             |                                  | 高度                           |
| loop                 | bool           | false       |                                  | 是否循环                       |
| activeIndex          | number         | 0           |                                  | 当前页面的索引                 |
| autoPlay             | bool           | false       |                                  | 是否自动轮播                   |
| autoPlayIntervalTime | number         | 3000        |                                  | 自动轮播时间间隔，单位：毫秒   |
| moveDistanceRatio    | number         | 0.5         |                                  | 移动距离比例临界点             |
| moveTimeSpan         | number         | 300         |                                  | 移动时间跨度临界点，单位：毫秒 |
| animationDuration    | number         | 300         |                                  | 动画执行时间，单位：毫秒       |

#### Carousel Events

| 事件名称    | 说明                 | 回调参数                                       |
| :---------- | :------------------- | :--------------------------------------------- |
| changeStart | 动画开始时触发的事件 | index, 当前处于激活状态幻灯片的 index 值       |
| changeEnd   | 动画结束后触发的事件 | index, 动画结束时处于激活状态幻灯片的 index 值 |

## 图片预览

:::demo 基本

```html
<za-cell title="普通">
  <template v-slot:description>
    <za-button size="xs" @click="visibleState.common = true">开启</za-button>
  </template>
</za-cell>
<za-cell title="有查看原始图片功能">
  <template v-slot:description>
    <za-button size="xs" @click="visibleState.origin = true">开启</za-button>
  </template>
</za-cell>
<za-image-preview v-model:visible="visibleState.origin" :defaultImages="originImages" @close="hide"  :maxScale="5" >
</za-image-preview> 
<za-image-preview v-model:visible="visibleState.common" :defaultImages="commonImages" @close="hide" :maxScale="10" >
</za-image-preview> 
```

:::

:::demo 预览指定图片

```html
<za-cell>
  <div :key="index" class="picture-item" @click="show(index)" v-for="(pic, index) in commonImages">
    <img :src="pic" />
  </div>
</za-cell>
<za-image-preview v-model:visible="visible" :defaultImages="commonImages" @close="hide" :activeIndex="pictureIndex" >
</za-image-preview> 
```

:::


### Vue Script

```javascript
<script name="vue">
const commonImages = [
  'https://cdn-health.zhongan.com/zarm/imagePreview/1-small.jpg',
  'https://cdn-health.zhongan.com/zarm/imagePreview/2-small.jpg',
  'https://cdn-health.zhongan.com/zarm/imagePreview/3-small.jpg',
];


const originImages = [
  {
    url: 'https://cdn-health.zhongan.com/zarm/imagePreview/1-small.jpg',
    originUrl: 'https://cdn-health.zhongan.com/zarm/imagePreview/1.jpg'
  },
  {
    url: 'https://cdn-health.zhongan.com/zarm/imagePreview/2-small.jpg',
    originUrl:'https://cdn-health.zhongan.com/zarm/imagePreview/2.jpg',
  }, {
    url: 'https://cdn-health.zhongan.com/zarm/imagePreview/3-small.jpg',
    originUrl: 'https://cdn-health.zhongan.com/zarm/imagePreview/3.jpg',
  }
];

export default {
  data() {
    return {
      origin: false,
      common: false,
      picture: false,
      visibleState: {
        origin: false,
        common: false,
      },
      visible: false,
      pictureIndex: 0,
      originImages,
      commonImages,
    }
  },
  methods: {
    show(index) {
      this.visible = true;
      this.pictureIndex = index;
    },
    hide() {
      this.visibleState.origin = false;
      this.visibleState.common = false;
      this.visible = false;
    }
  },
}
</script>
```

### API

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| visible | boolean | false | 是否显示 |
| minScale | number | 1 | 图片最小缩放比例，1 为最小值 |
| maxScale | number | 3 | 图片最大缩放比例 |
| images | Array| - | 图片地址 |
| activeIndex | number | 0 | 当前展示的图片是第几张，从0开始 |
| showPagination | boolean | true | 是否显示分页器 |
| onChange | (activeIndex?: number) => void | - | 图片切换时候回调 |
| onClose | () => void | - | 关闭时候回调 |


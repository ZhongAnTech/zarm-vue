<script>
const ITEMS = [
  {
    url: '#',
    img: 1,
  },
  {
    url: '#',
    img: 2,
  },
  {
    url: '#',
    img: 3,
  },
];

export default {
  data() {
    return {
      ITEMS
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
      this.$refs.swipe.onJumpTo(0)
    },
    onSlideTo(){
      this.$refs.swipe.onSlideTo(2)
    }
  },
};
</script>


:::demo
```html
    <za-panel>
      <za-panel-header title="基本"></za-panel-header>
      <za-panel-body>
        <za-swipe
          direction='left'
          @changeStart='handleChangeStart'
          @changeEnd='handleChangeEnd'>
          <za-swipe-item
            :key='index'
            v-for='(i, index) in ITEMS'>
            <div class='swipe-item-pic'>
              <span style="display:block;width:100%;height:100px;text-align:center;line-height:100px;">{{i.img}}</span>
            </div>
          </za-swipe-item>
        </za-swipe>
      </za-panel-body>
    </za-panel>

    <za-panel>
      <za-panel-header title="纵向"></za-panel-header>
      <za-panel-body>
        <za-swipe
          direction='bottom'
          @changeStart='handleChangeStart'
          @changeEnd='handleChangeEnd'>
          <za-swipe-item
            :key='index'
            v-for='(i, index) in ITEMS'>
            <div class='swipe-item-pic'>
              <span style="display:block;width:100%;height:100px;text-align:center;line-height:100px;">{{i.img}}</span>
            </div>
          </za-swipe-item>
        </za-swipe>
      </za-panel-body>
    </za-panel>

    <za-panel>
      <za-panel-header title="循环轮播"></za-panel-header>
      <za-panel-body>
        <za-swipe
          ref='swipe'
          direction='left'
          loop
          @changeStart='handleChangeStart'
          @changeEnd='handleChangeEnd'>
          <za-swipe-item
            :key='index'
            v-for='(i, index) in ITEMS'>
            <div class='swipe-item-pic'>
              <span style="display:block;width:100%;height:100px;text-align:center;line-height:100px;">{{i.img}}</span>
            </div>
          </za-swipe-item>
        </za-swipe>
        <div class="controls" style="text-align:center;padding-bottom:20px;">
          <za-button
            size="sm"
            @click='onJumpTo'>无动画切换指定页</za-button>
          <za-button
            size="sm"
            style="margin-left:10px;"
            @click='onSlideTo'>滑动到指定页</za-button>
        </div>
      </za-panel-body>
    </za-panel>

    <za-panel>
      <za-panel-header title="自动循环轮播"></za-panel-header>
      <za-panel-body>
        <za-swipe
          direction='left'
          loop
          auto-play>
          <za-swipe-item
            :key='index'
            v-for='(i, index) in ITEMS'>
            <div class='swipe-item-pic'>
              <span style="display:block;width:100%;height:100px;text-align:center;line-height:100px;">{{i.img}}</span>
            </div>
          </za-swipe-item>
        </za-swipe>
      </za-panel-body>
    </za-panel>
```
:::


::: api
### API

#### Swipe Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-swipe | | 类名前缀 |
| direction | string | 'left' | 'left', 'right', 'top', 'bottom' | 滑动方向 |
| height | number, string | | | 高度 |
| loop | bool | false | | 是否循环 |
| autoPlay | bool | false | | 是否自动轮播 |

#### Swipe Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| changeStart | 动画开始时触发的事件 | index, 当前处于激活状态幻灯片的index值 |
| changeEnd | 动画结束后触发的事件 | index, 动画结束时处于激活状态幻灯片的index值 |
:::
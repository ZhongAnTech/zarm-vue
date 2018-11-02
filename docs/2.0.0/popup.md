<script>
const div1 = document.body;
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
    }
  },
  methods: {
    popupClose(reason, event) {
      console.log(reason, event);
    },
    getContainer: () => div1,
  },
};
</script>


:::demo 基本
```html
  <za-cell>
    <za-button size='xs' slot='description' @click='visible1 = true'>开启</za-button>
    从上方弹出
  </za-cell>
  <za-cell>
    <za-button size='xs' slot='description' @click='visible2 = true'>开启</za-button>
    从下方弹出
  </za-cell>
  <za-cell>
    <za-button size='xs' slot='description' @click='visible3 = true'>开启</za-button>
    从左侧弹出
  </za-cell>
  <za-cell>
    <za-button size='xs' slot='description' @click='visible4 = true'>开启</za-button>
    从右侧弹出
  </za-cell>

  <za-popup
    style="zIndex:2000"
    :visible.sync='visible1'
    direction="top"
    :duration='3000'
    maskType="transparent"
    autoClose
    @close='popupClose'
  >
    <div class="popup-box-top" style="width: 100%;padding: 10px;background: rgba(0,0,0,.7);color: #fff;font-size: 14px;text-align: center;">更新成功</div>
  </za-popup>

  <za-popup
    :visible.sync='visible2'
    direction="bottom"
    @close='popupClose'
  >
  <div class="popup-box" style="height: 100%;padding: 20px 20px 100px;background: #fff;">
    <za-button size="sm" @click='visible2 = false'>关闭弹层</za-button>
  </div>
  </za-popup>

  <za-popup
    :visible.sync='visible3'
    direction="left"
    @close='popupClose'
  >
  <div class="popup-box-left" style="width:160px;height: 100%;padding: 20px 20px 100px;background: #fff;">
    <za-button size="sm" @click='visible3 = false'>关闭弹层</za-button>
  </div>
  </za-popup>

  <za-popup
    :visible.sync='visible4'
    direction="right"
    @close='popupClose'
  >
  <div class="popup-box" style="width:160px;height: 100%;padding: 20px 20px 100px;background: #fff;">
    <za-button size="sm" @click='visible4 = false'>关闭弹层</za-button>
  </div>
  </za-popup>
```
:::

:::demo 设置挂载容器
```html
  <za-cell>
    <za-button size='xs' slot='description' @click='visible5 = true'>开启</za-button>
    从下方弹出
  </za-cell>

  <za-popup
    :visible.sync='visible5'
    direction="bottom"
    :get-container="getContainer"
    @close='popupClose'
  >
  <div class="popup-box" style="height: 100%;padding: 20px 20px 100px;background: #fff;">
    <za-button size="sm" @click='visible5 = false'>设置挂载容器</za-button>
  </div>
  </za-popup>
```
:::


### API

#### Popup Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-popup | | 类名前缀 |
| visible | bool | false | | 是否显示, 支持.sync修饰符 |
| direction | string | 'bottom' | 'top', 'bottom', 'left', 'right' | 弹出方向 |
| getContainer | func |  | | 自定义挂载Dom节点 |
| autoClose | bool | false | | 是否自动关闭 |
| duration | number | 3000 | | 自动关闭前停留的时间（单位：毫秒） |
| maskType | string | 'normal' | 'transparent', 'light', 'normal', 'dark' | 遮罩层的类型 |
| onClose | func | noop | | 关闭后触发的回调函数 |

#### Popup Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| close | 关闭后触发的事件 | reason, event 事件对象 |
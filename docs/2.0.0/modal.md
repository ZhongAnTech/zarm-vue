<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
    };
  },
  methods: {
    handleClose(reason, event){
      console.log(reason, event);
    },
    handleOk(){
      alert('ok')
    },
    showAlert() {
      this.$zaAlert('警告12', {
        callback: (event) => {
          console.log(event)
        }
      })
    },
    handleCancel(){
      this.visible7 = false
    }
  },
};
</script>

::: demo 基本
```html
  <za-cell>
    <za-button slot='description' size='xs' @click='visible1 = true'>开启</za-button>
    span普通
  </za-cell>

  <za-cell>
    <za-button slot='description' size='xs' @click='visible2 = true'>开启</za-button>
    圆角
  </za-cell>

  <za-cell>
    <za-button slot='description' size='xs' @click='visible3 = true'>开启</za-button>
    遮罩层可关闭
  </za-cell>

  <za-cell>
    <za-button slot='description' size='xs' @click='visible4 = true'>开启</za-button>
    无头部
  </za-cell>

  <za-cell>
    <za-button slot='description' size='xs' @click='visible5 = true'>开启</za-button>
    动画效果
  </za-cell>

  <za-modal :visible.sync='visible1' @close='handleClose' title="标题" :showClose='true'>
    模态框内容
  </za-modal>

  <za-modal :visible.sync='visible2' @close='handleClose' radius :showClose='true'>
    <div slot='title' style='textAlign:left'>标题</div>
    模态框内容
  </za-modal>

  <za-modal :visible.sync='visible3' @close='handleClose' :close-on-click-modal='true' title="标题" :showClose='true' >
    遮罩层可关闭
  </za-modal>

  <za-modal :visible.sync='visible4' @close='handleClose' :closeOnClickModal='true'>
    无头部
  </za-modal>

  <za-modal :visible.sync='visible5' @close='handleClose' animationType="rotate" :closeOnClickModal='true' title="标题" :showClose='true'>
    当前使用的是rotate旋转效果。<br /><br />
    支持多种动画效果：<br />
    zoom：缩放效果（默认）<br />
    rotate：旋转效果<br />
    fade：淡出淡入效果<br />
    door：开关门效果<br />
    flip：翻转效果<br />
    moveUp、moveDown、moveLeft、moveRight：移出移入效果<br />
    slideUp、slideDown、slideLeft、slideRight：滑出滑入效果<br />
  </za-modal>

```
:::

::: demo 特定场景
```html
  <za-cell>
    <za-button slot='description' size='xs' @click='visible6 = true' theme="warning">开启</za-button>
    警告框 Alert
  </za-cell>

  <za-cell>
    <za-button slot='description' size='xs' @click='visible7 = true' theme="warning">开启</za-button>
    确认框 Confirm
  </za-cell>

  <za-alert :visible.sync='visible6' radius title="警告" message="这里是警告信息" @close='handleClose'></za-alert>
  <za-confirm :visible='visible7' title="确认信息" message="你确定要这样做吗？" :ok='handleOk' :cancel='handleCancel'></za-confirm>
```
:::

#### 警告框 使用全局方法 $zaAlert

```html
<div @click='handleClick'></div>
<script>
export default{
  methods:{
    handleClick(){
      this.$zaAlert('警告', {
        callback: (event) => {
          console.log(event)
        }
      })
    }
  }
}
</script>
```

```html
<div @click='handleClick'></div>
<script>
export default{
  methods:{
    handleClick(){
      const h = this.$createElement;
      // 这里的message可以是VNode
      const message = h('p', null, [
        h('span', null, '内容可以是 '),
        h('i', { style: 'color: teal' }, 'VNode')
      ]);
      this.$zaAlert(message, {
        callback: (event) => {
          console.log(event)
        }
      })
    }
  }
}
```

#### 或者使用 za-alert Component

```html
<za-alert :visible.sync='visible' radius title="警告" message="这里是警告信息" @close='handleClose' ></za-alert>
```

#### 确认框 使用全局方法 $zaConfirm

```html
<div @click='handleClick'></div>
<script>
export default{
  methods:{
      handleClick() {
        const h = this.$createElement;
        // message 可以是VNode 或者 String
        const message = h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]);
        // $zaConfirm 参数为 <?message: String, options: Object>
        this.$zaConfirm({
          message,
          ok: (e) => {
            this.$zaToast('ok');
            return true; // 此处返回true, 会关闭confirm
          },
          cancel: (e) => {
            this.$zaToast('closed');
          },
        });
      }
    }
}
</script>
```

注意：这里的 `ok` 和 `cancel` 需要使用Arrow Function, 这样内部的this才会指向当前的vue实例, 另外，ok 函数只有在返回 true 的时候会关闭 Confirm, 而 cancel 会自动关闭 Confirm

或者使用模板


```html
<za-confirm :visible='visible' title="确认信息" message="你确定吗？" :ok='handleOk' :cancel='handleCancel' ></za-confirm>
```


### API

#### Modal Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-modal | | 类名前缀 |
| shape | string | 无 | 'radius' | 形状 |
| visible | bool | false | | 是否显示, 支持.sync修饰符 |
| okText | string | '确定' |  | 确认按钮文案 |
| cancelText | string | '关闭' |  | 取消按钮文案 |
| animationType | string | 'fade' | 'fade', 'door', 'flip', 'rotate', 'zoom','moveUp', 'moveDown', 'moveLeft', 'moveRight','slideUp', 'slideDown', 'slideLeft', 'slideRight' | 动画效果 |
| animationDuration | number | 200 | | 动画执行时间 |
| width | string, number | '70%' | | 宽度 |
| close-on-click-modal | bool | false | | 是否可以通过点击遮罩层关闭modal |
| getContainer | Func |  |  | 指定挂载的父容器DOM节点 |

#### Modal Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| close | modal 关闭时触发的事件, 当点击按钮关闭时第一个参数为'close', 当点击遮罩层关闭时，第一个参数为'clickaway' | reason, event 事件对象 |

#### Alert Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| close | alert 关闭时触发的事件 | event 事件对象 |

#### Confirm Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| ok | confirm 确定时触发的事件 | event 事件对象 |
| cancel | confirm 取消时触发的事件 | event 事件对象 |
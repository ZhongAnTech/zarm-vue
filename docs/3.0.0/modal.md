## 模态框 Modal

::: demo 基本

```html
<za-cell title="span普通">
  <template v-slot:description>
  <za-button size="xs" @click="visible1 = true"
    >开启</za-button
  >
  </template>
  
</za-cell>

<za-cell title="圆角">
  <template v-slot:description>
    <za-button  size="xs" @click="visible2 = true"
    >开启</za-button
  >
  </template>
</za-cell>

<za-cell title="遮罩层可关闭">
  <template v-slot:description>
    <za-button size="xs" @click="visible3 = true"
    >开启</za-button
  >
  </template>
  
  
</za-cell>

<za-cell title="无头部">
  <template v-slot:description>
    <za-button  size="xs" @click="visible4 = true"
      >开启</za-button
    >
  </template>
  
</za-cell>

<za-cell title="动画效果">
  <template v-slot:description>
     <za-button size="xs" @click="visible5 = true"
    >开启</za-button
  >
  </template>
 
  
</za-cell>

<za-modal
  v-model:visible="visible1"
  @close="handleClose"
  title="标题"
  :showClose="true"
>
  模态框内容
</za-modal>

<za-modal
  v-model:visible="visible2"
  @close="handleClose"
  radius
  :showClose="true"
>
  <div slot="title" style="textAlign:left">标题</div>
  模态框内容
</za-modal>

<za-modal
  v-model:visible="visible3"
  @close="handleClose"
  @maskClick="visible3 = false"
  title="标题"
  :showClose="true"
>
  遮罩层可关闭
</za-modal>

<za-modal
  v-model:visible="visible4"
  @close="handleClose"
  @maskClick="visible4 = false"
>
  无头部
</za-modal>

<za-modal
  v-model:visible="visible5"
  @close="handleClose"
  animationType="rotate"
  @maskClick="visible5 = false"
  title="标题"
  :showClose="true"
>
<div style="height:100px">
  当前使用的是rotate旋转效果。<br /><br />
  支持多种动画效果：<br />
  zoom：缩放效果（默认）<br />
  rotate：旋转效果<br />
  fade：淡出淡入效果<br />
  door：开关门效果<br />
  flip：翻转效果<br />
  moveUp、moveDown、moveLeft、moveRight：移出移入效果<br />
  slideUp、slideDown、slideLeft、slideRight：滑出滑入效果<br />
</div>
</za-modal>
```

:::

::: demo 特定场景

```html
<za-cell title="警告框">
  <template v-slot:description>
  <za-button
    size="xs"
    @click="visible6 = true"
    theme="warning"
    >开启</za-button
  >
  </template>
</za-cell>

<za-cell title="确认框">
  <template v-slot:description>
  <za-button
    size="xs"
    @click="visible7 = true"
    theme="warning"
    >开启</za-button
  >
  </template>
</za-cell>

<za-alert
  v-model:visible="visible6"
  radius
  title="警告"
  message="这里是警告信息"
  @close="handleClose"
></za-alert>
<za-confirm
  v-model:visible="visible7"
  title="确认信息"
  message="你确定要这样做吗？"
  :ok="handleOk"
  :cancel="handleCancel"
></za-confirm>
```

:::

::: demo 函数调用

```html
<za-cell title="$zaAlert">
  <template v-slot:description>
    <za-button size="xs" @click="showAlert">开启</za-button>
  </template>
</za-cell>
<za-cell title="$zaConfirm">
  <template v-slot:description>
    <za-button size="xs" @click="showConfirm">开启</za-button>
  </template>
</za-cell>
```
:::

#### 警告框 使用全局方法 \$zaAlert



```html
<za-button size="xs" @click="showAlert">$zaAlert</za-button>
<script>
  export default {
    methods: {
      showAlert() {
        this.$zaAlert('警告')
      }
    }
  }
</script>
```

```html
<za-button size="xs" @click="showAlert">$zaAlert</za-button>
<script>
export default{
  methods:{
    showAlert(){
      // 这里的message可以是VNode
      const message = h('p', null, [
        h('span', null, '内容可以是 '),
        h('i', { style: 'color: teal' }, 'VNode')
      ]);
      this.$zaAlert(message)
    }
  }
}
```

#### 或者使用 Component

```html
<za-alert
  v-model:visible="visible"
  radius
  title="警告"
  message="这里是警告信息"
  @close="handleClose"
></za-alert>
```

#### 确认框 使用全局方法 \$zaConfirm

```html
<za-button size="xs" @click="showConfirm">$zaConfirm</za-button>
<script>
  export default {
    methods: {
      showConfirm() {
        // message 可以是VNode 或者 String
        const message = h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
        // $zaConfirm 参数为 <?message: String, options: Object>
        this.$zaConfirm({
          message,
          ok: e => {
            return true // 此处返回true, 会关闭confirm
          },
          cancel: e => {}
        })
      }
    }
  }
</script>
```

注意：这里的 `ok` 和 `cancel` 需要使用 Arrow Function, 这样内部的 this 才会指向当前的 vue 实例, 另外，ok 函数只有在返回 true 的时候会关闭 Confirm, 而 cancel 会自动关闭 Confirm

#### 或者使用 Component

```html
<za-confirm
  v-model:visible="visible"
  title="确认信息"
  message="你确定吗？"
  :ok="handleOk"
  :cancel="handleCancel"
></za-confirm>
```

### Vue Script

```javascript
<script name="vue">
import { h } from 'vue';
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
      return true;
    },
    handleCancel(){
      this.visible7 = false;
    },
    showAlert() {
      this.$zaAlert('警告12');
    },
    showConfirm() {
      this.$zaConfirm('警告12',{
        ok: e => {
          console.log('confirm is closed');
          return true // 此处返回true, 会关闭confirm
        },
        cancel: e => {}
      });
    }
  },
};
</script>
```

### API

#### Modal Attributes

| 属性              | 类型           | 默认值   | 可选值／参数                                                                                                                             | 说明                       |
| :---------------- | :------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| shape             | string         | 无       | 'radius'                                                                                                                                 | 形状                       |
| visible           | boolean           | false    |                                                                                                                                          | 是否显示, 支持.sync 修饰符 |
| ok-text            | string         | '确定'   |                                                                                                                                          | 确认按钮文案               |
| cancel-text        | string         | '关闭'   |                                                                                                                                          | 取消按钮文案               |
| animation-type     | string         | 'fade'   | 'fade', 'door', 'flip', 'rotate', 'zoom','moveUp', 'moveDown', 'moveLeft', 'moveRight','slideUp', 'slideDown', 'slideLeft', 'slideRight' | 动画效果                   |
| animationDuration | number         | 200      |                                                                                                                                          | 动画执行时间               |
| width             | string, number | '70%'    |                                                                                                                                          | 宽度                       |
| get-container      | Func           |          |                                                                                                                                          | 指定挂载的父容器 DOM 节点  |

#### Modal Events

| 事件名称  | 说明                   | 回调参数               |
| :-------- | :--------------------- | :--------------------- |
| close     | modal 关闭时触发的事件 | reason, event 事件对象 |
| mask-click | 点击遮罩后触发的事件   | event 事件对象         |

#### Alert Events

| 事件名称 | 说明                   | 回调参数       |
| :------- | :--------------------- | :------------- |
| close    | alert 关闭时触发的事件 | event 事件对象 |

#### Confirm Events

| 事件名称 | 说明                     | 回调参数       |
| :------- | :----------------------- | :------------- |
| ok       | confirm 确定时触发的事件 | event 事件对象 |
| cancel   | confirm 取消时触发的事件 | event 事件对象 |

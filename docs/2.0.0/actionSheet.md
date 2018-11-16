<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      actions1: [{
        text: '操作一',
        onClick: () => console.log('action 1'),
      },{
        text: '操作二',
        onClick: () => console.log('action 2'),
      },{
        theme: 'error',
        text: '操作三',
        onClick: () => console.log('action 3'),
      }],
      actions2: [{
        text: '操作一',
        onClick: () => console.log('action 1'),
      },{
        text: '操作二',
        onClick: () => console.log('action 2'),
      }],
    }
  },
  methods: {
    cancelCb(reason, event){
      console.log(reason, event)
    }
  },
};
</script>

## 动作面板 ActionSheet

:::demo 基本
```html
    <za-cell>
      <za-button size="xs" slot='description' @click='visible2 = true'>开启</za-button>
      普通
    </za-cell>
    <za-cell>
      <za-button size="xs" slot='description' @click='visible1 = true'>开启</za-button>
      带取消操作
    </za-cell>
      <za-cell>
      <za-button size="xs" slot='description' @click='visible3 = true'>开启</za-button>
      圆角，留边
    </za-cell>
    <za-actionsheet :visible.sync='visible1' :actions='actions1' @cancel='cancelCb'></za-actionsheet>
    <za-actionsheet :visible.sync='visible2' :actions='actions2' :showCancel='false' @cancel='cancelCb'></za-actionsheet>
    <za-actionsheet :visible.sync='visible3' :spacing="true" shape="radius" :actions='actions2' @cancel='cancelCb'></za-actionsheet>
```
:::

``` js
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      actions1: [{
        text: '操作一',
        onClick: () => console.log('action 1'),
      },{
        text: '操作二',
        onClick: () => console.log('action 2'),
      },{
        theme: 'error',
        text: '操作三',
        onClick: () => console.log('action 3'),
      }],
      actions2: [{
        text: '操作一',
        onClick: () => console.log('action 1'),
      },{
        text: '操作二',
        onClick: () => console.log('action 2'),
      }],
    }
  },
  methods: {
    cancelCb(reason, event){
      console.log(reason, event)
    }
  },
};
```

### API

#### ActionSheet Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-switch | | 类名前缀 |
| shape | string | | '' | 形状 ，可选`radius`|
| spacing | bool | | false | 是否留边 |
| visible | bool | false | | 是否显示, 支持.sync 修饰符 (v2.3.0+) |
| actions | arrayOf(object) | [ ] | object: { theme, text, onClick } | 动作列表 |
| cancelText | string | '取消' |  | 取消菜单的文案 |

#### ActionSheet Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| cancel | 当actionsheet关闭时触发的事件。当点击actionButton关闭时第一个参数为'action',当点击popup关闭时第一个参数为'clickaway' | 1. reason, 2. event 事件对象 |
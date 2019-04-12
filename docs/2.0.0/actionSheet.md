## 动作面板 ActionSheet

:::demo 基本

```html
<za-cell>
  <za-button size="xs" slot="description" @click="visible2 = true"
    >开启</za-button
  >
  普通
</za-cell>
<za-cell>
  <za-button size="xs" slot="description" @click="visible1 = true"
    >开启</za-button
  >
  带取消操作
</za-cell>
<za-cell>
  <za-button size="xs" slot="description" @click="visible3 = true"
    >开启</za-button
  >
  圆角，留边
</za-cell>
<za-actionsheet
  :visible.sync="visible1"
  :actions="actions1"
  @cancel="cancelCb"
></za-actionsheet>
<za-actionsheet
  :visible.sync="visible2"
  :actions="actions2"
  :showCancel="false"
  @cancel="cancelCb"
></za-actionsheet>
<za-actionsheet
  :visible.sync="visible3"
  :spacing="true"
  shape="radius"
  :actions="actions2"
  @cancel="cancelCb"
></za-actionsheet>
```

:::

### Vue Script

```javascript
<script name="vue">
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
```

### API

#### ActionSheet Attributes

| 属性        | 类型            | 默认值 | 可选值／参数                     | 说明                                 |
| :---------- | :-------------- | :----- | :------------------------------- | :----------------------------------- |
| shape       | string          |        | ''                               | 形状 ，可选`radius`                  |
| spacing     | boolean            |        | false                            | 是否留边                             |
| visible     | boolean            | false  |                                  | 是否显示, 支持.sync 修饰符 (v2.3.0+) |
| actions     | arrayOf(object) | [ ]    | object: { theme, text, onClick } | 动作列表                             |
| cancel-text | string          | '取消' |                                  | 取消菜单的文案                       |

#### ActionSheet Events

| 事件名称 | 说明             | 回调参数       |
| :------- | :--------------- | :------------- |
| cancel   | 关闭时触发的事件 | event 事件对象 |

#### Actions 类型定义

| 属性    | 类型     | 默认值    | 说明                                                                 |
| :------ | :------- | :-------- | :------------------------------------------------------------------- |
| text    | string   | -         | 按钮文字                                                             |
| theme   | string   | 'default' | 按钮主题，可选值 `default`、`primary`、`success`、`warning`、`error` |
| onClick | function | -         | 按钮点击后触发的回调函数                                             |

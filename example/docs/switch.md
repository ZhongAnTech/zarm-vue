<script>
export default {
  data() {
    return {
      switch1: false,
      switch2: true,
      switch3: false,
      switch4: true,
      switch5: false,
      switch6: false,
    }
  },
  methods: {
    handleChange(event){
      console.log(event);
    },
    handleChange2(){
      this.switch6 = this.switch5;
    }
  },
};
</script>


:::demo
```html
    <za-panel>
      <za-panel-header title="基本"></za-panel-header>
      <za-panel-body>
        <za-cell>
          <za-switch slot='description' v-model='switch1' @change='handleChange'></za-switch>
          普通
        </za-cell>
        <za-cell>
          <za-switch slot='description' v-model='switch2'></za-switch>
          默认开
        </za-cell>
        <za-cell>
          <za-switch slot='description' v-model='switch3' disabled></za-switch>
          禁用的开关（默认关）
        </za-cell>
        <za-cell>
          <za-switch slot='description' v-model='switch4' disabled></za-switch>
          禁用的开关（默认开）
        </za-cell>
      </za-panel-body>
    </za-panel>

    <za-panel>
      <za-panel-header title="受控开关"></za-panel-header>
      <za-panel-body>
        <za-cell>
          <za-switch slot='description' v-model='switch5' @change='handleChange2'></za-switch>
          主开关
        </za-cell>
        <za-cell>
          <za-switch slot='description' v-model='switch6'></za-switch>
          受控开关
        </za-cell>
      </za-panel-body>
    </za-panel>

```
:::


::: api
### API

#### Switch Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-switch | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| v-model | bool | false | | 绑定值 |
| disabled | bool | false | | 是否禁用 |

#### Switch Event
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 绑定值改变时的事件 | event 事件对象 |
:::
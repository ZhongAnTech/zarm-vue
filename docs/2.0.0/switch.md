<script>
export default {
  data() {
    return {
      switch1: null,
      switch2: 'on',
      switch3: 'off',
      check: false
    }
  },
  methods: {
    handleChange(event){
      console.log(event);
    },
    handleChange2(event){
      this.check = event.target.checked;   
    },
    handleChange3(event){
      this.check = event.target.checked;
    }
  }
};
</script>

## 开关 Switch

:::demo 基本
```html
    <za-cell>
      <za-switch slot='description' v-model='switch1'
       @change='handleChange'>
      </za-switch>
      普通
    </za-cell>
    <za-cell>
      <za-switch slot='description' 
      defaultChecked></za-switch>
      默认开
    </za-cell>
    <za-cell>
      <za-switch slot='description' disabled></za-switch>
      禁用的开关（默认关）
    </za-cell>
    <za-cell>
      <za-switch slot='description' disabled defaultChecked></za-switch>
      禁用的开关（默认开）
    </za-cell>
    <za-cell>
      <za-switch slot='description' v-model='switch2'
      className="sup"
       @change='handleChange2'>
      </za-switch>
      主控开关（默认开）
    </za-cell>
    <za-cell>
      <za-switch slot='description' 
      className="sub"
      v-model='switch3'
      :checked='check'
      @change='handleChange3'
       >
      </za-switch>
      受控开关（默认关）
    </za-cell>
```
:::




### API

#### Switch Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-switch | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| defaultChecked | bool | false | | 初始值 |
| checked | bool | false | | 是否选中 |
| v-model | string | 'on' | 'off' | | 值 |
| disabled | bool | false | | 是否禁用 |
| className | string | null | | 追加类名 |
#### Switch Event
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 绑定值改变时的事件 | event 事件对象 |
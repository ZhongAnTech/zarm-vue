<script>
export default {
  data() {
    return {
      value: "",
    }
  },
  methods: {
    handleClick(){
      this.$refs.searchRef.focus();
    },
    handleChange(val){
      this.value = val
    },
    handleSubmit(val){
      console.log(`搜索内容为${val}`);
    },
    handleChange(val){
      console.log(`搜索内容为${val}`);
    },
    handleFocus(){
      console.log('获取焦点');
    },
    handleBlur(){
      console.log('失去焦点');
    },
    handleClear(){
      console.log('点击了清除');
    },
    handleCancel(){
      console.log('点击了取消');
    }
  },
};
</script>


:::demo
```html
  <za-panel>
    <za-panel-header title="基本"></za-panel-header>
    <za-panel-body>
      <za-search-bar placeholder="搜索" 
          cancelText="取消" 
          :showCancel="false" 
          @change="handleChange"
          @submit="handleSubmit"
          @blur="handleBlur"
          @focus="handleFocus"
          @clear="handleClear"
          @cancel="handleCancel"
       ></za-search-bar>
    </za-panel-body>
  </za-panel>
  <za-panel>
    <za-panel-header title="始终展示取消按钮"></za-panel-header>
    <za-panel-body>
      <za-search-bar placeholder="搜索" 
          shape="round"
          cancelText="取消" 
          :showCancel="true" 
          value="默认搜索关键字"
       ></za-search-bar>
    </za-panel-body>
  </za-panel>
  <za-panel>
    <za-panel-header title="手动获取焦点"></za-panel-header>
    <za-panel-body>
      <za-search-bar ref="searchRef" placeholder="搜索" shape="radius"
          cancelText="取消" ></za-search-bar>
    </za-panel-body>
  </za-panel>
```
:::

::: api
### API

#### SearchBar Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-search-bar | | 类名前缀 |
| placeholder | string | text | | placeholder |
| disabled | bool | false | | 是否禁用 |
| value | string, number | | | 搜索关键字 |
| shape | string |  | | 形状，`round`,`radius` |
| cancelText | string | '取消' | | 取消文本 |
| showCancel | bool | false | | 是否显示取消操作 |
| clearable | bool | false | | 是否可以清除操作 |

#### SearchBar Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当绑定值变化时触发的事件 | 最新的值 |
| focus | 当获取焦点时触发的事件 |  |
| blur | 当失去焦点时触发的事件 |  |
| clear | 当绑定值被清除时触发的事件 | 最新的值 |
| cancel | 当取消操作时触发的事件 | |
| submit | 当绑定值变化时触发的Form搜索事件 | 最新的值 |
:::
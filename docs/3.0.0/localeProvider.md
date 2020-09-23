## 国际化 LocaleProvider

:::demo 默认语言包

```html
<za-locale-provider lang="zh_CN">
  <za-search-bar
    shape="round"
    :showCancel="true"
    ref="searchRef"
  ></za-search-bar>
</za-locale-provider>
```

:::

:::demo 自定义语言包

```html
<za-cell title="切换语言包">
  <za-select v-model="v1" :data-source="langData" @ok="handleOk" />
</za-cell>

<za-locale-provider :lang="lang" :locale="locale">
  <za-search-bar
    shape="round"
    :showCancel="true"
    ref="searchRef"
  ></za-search-bar>
  <za-cell>
    <za-button
      slot="description"
      size="xs"
      @click="visible6 = true"
      theme="warning"
      >开启</za-button
    >
    警告框 Alert
  </za-cell>

  <za-cell>
    <za-button
      slot="description"
      size="xs"
      @click="visible7 = true"
      theme="warning"
      >开启</za-button
    >
    确认框 Confirm
  </za-cell>

  <za-alert
    :visible.sync="visible6"
    radius
    title="警告"
    message="这里是警告信息"
  ></za-alert>
  <za-confirm
    :visible.sync="visible7"
    title="确认信息"
    message="你确定要这样做吗？"
    :ok="handleOk2"
    :cancel="handleCancel"
  ></za-confirm>
</za-locale-provider>
```

:::

### Vue Script

```javascript
<script name="vue">
const Locale = {
  'en_US': {
    SearchBar: {
      placeholder: 'Search',
      cancelText: 'Cancel',
    },
    Alert: {
      cancelText: 'Cancel',
    },
    Confirm: {
      okText: 'Ok',
      cancelText: 'Cancel',
    }
  },
  'zh_CN': {
    SearchBar: {
      placeholder: '请输入搜索词...',
      cancelText: '关闭',
    },
    Alert: {
      cancelText: '知道了',
    },
    Confirm: {
      okText: '确定',
      cancelText: '关闭',
    }
  }
}

export default {
  data() {
    return {
      visible6: false,
      visible7: false,
      locale: Locale,
      lang: 'zh_CN',
      v1: 'zh_CN',
      langData:[
        { value: 'zh_CN', label: '中文' },
        { value: 'en_US', label: '英文' },
      ]
    }
  },
  watch: {
    lang() {
      this.$forceUpdate();
    },
  },
  methods: {
    handleOk(val){
      console.log(val);
      this.lang = val.value;
    },
    handleOk2(){
      this.visible7 = false
    },
    handleCancel(){
      this.visible7 = false
    }
  },
};
</script>
```

## API

| 属性   | 类型   | 默认值 | 说明                                  |
| :----- | :----- | :----- | :------------------------------------ |
| locale | Object | -      | 语言包配置                            |
| lang   | String | -      | 设置语言包类型，对应 locale 的 key 值 |

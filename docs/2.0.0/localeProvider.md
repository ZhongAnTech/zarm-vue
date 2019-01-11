## 国际化 LocaleProvider

:::demo 类型
```html
  <za-locale-provider lang="en_US">
     <za-search-bar
      shape="round"
      :showCancel="true" 
      ref="searchRef"
    ></za-search-bar>
  </za-locale-provider>
```
:::


## API

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| locale | Object | - | 语言包配置，语言包可到 zarm-vue/lib/locale-provider/locale 目录下寻找 |
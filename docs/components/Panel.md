# 面板 Panel

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/panel)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-panel>
  <za-panel-header title='普通' />
  <za-panel-body>
    <za-cell>body</za-cell>
  </za-panel-body>
</za-panel>
```

###### 带更多按钮
```vue
<za-panel>
  <za-panel-header title='带更多按钮'>
    <za-button slot='more'>更多</za-button>
  </za-panel-header>
  <za-panel-body>
    <za-cell>body</za-cell>
  </za-panel-body>
</za-panel>

```

###### 带底部
```vue
<za-panel>
  <za-panel-header title='带底部' />
  <za-panel-body>
    <za-cell>body</za-cell>
  </za-panel-body>
  <za-panel-footer title="左侧文案" more="右侧文案" />
</za-panel>
```


### API

#### panel

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-panel | | 类名前缀 |


#### panel-header

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-panel | | 类名前缀 |
| title | String | | | 标题，也可以用slot |
| more | String | | | 更多，也可以用slot |


#### panel-footer

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-panel | | 类名前缀 |
| title | String | | | 标题，也可以用slot |
| more | String | | | 更多，也可以用slot |

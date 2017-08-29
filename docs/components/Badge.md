# 徽标 Badge

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/badge)

### 代码演示

#### 基本用法

###### 点状
```vue
<za-badge shape='dot' />
```

###### 直角
```vue
<za-badge text='免费' />
```

###### 圆角
```vue
<za-badge text='免费' shape='radius' />
```

###### 椭圆形
```vue
<za-badge text='999+' shape='round' />
```

###### 圆形
```vue
<za-badge text='new' shape='radius' />
```

#### 上标位置
```vue
<za-badge sup shape='dot'>
  <div>Badge Content</div>
</za-badge>
```


### API

#### Badge Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-badge | | 类名前缀 |
| theme | string | 'error' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| shape | string | | 'dot', 'radius', 'round', 'circle' | 形状 |
| text | string, number | | | 显示文字 |
| sup | bool | false | | 是否上标位置 |

#### Badge Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | click时触发的事件 | event 事件对象 |

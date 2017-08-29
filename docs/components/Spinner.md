# 指示器 Spinner

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/spinner)


### 代码演示

#### 基本用法

###### 普通
```vue
<za-spinner />
```

###### 设置主题
```vue
<za-spinner theme="error" />
```

###### 设置动画
```vue
<za-spinner class="rotate360" />
```

###### 设置大小
```vue
<za-spinner class="rotate360" size="lg" />
```



### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-stepper | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| size | string | | 'lg' | 大小 |

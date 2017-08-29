# 图标 Icon

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/icon)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-icon type='add'/>
```

###### 主题
```vue
<za-icon theme="error" type='add'/>
```

### API

#### Icon Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-stepper | | 类名前缀 |
| theme | string | 'default' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| type | string | | 'right', 'right-round', 'right-round-fill','wrong', 'wrong-round', 'wrong-round-fill', 'info-round', 'info-round-fill', 'question-round', 'question-round-fill', 'warning-round', 'warning-round-fill', 'arrow-left', 'arrow-right', 'arrow-top', 'arrow-bottom', 'add', 'add-round', 'add-round-fill', 'minus', 'minus-round', 'minus-round-fill', 'broadcast' | 图标类型 |

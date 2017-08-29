# 步进器 Stepper

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/stepper)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-stepper v-model='stepper' @change='(event) => {}'/>
```

###### 设置上下限
```vue
<za-stepper v-model='stepper' :min='-3' :max='3'/>
```

###### 设置步长
```vue
<za-stepper v-model='stepper' :min='-3' :max='3' :step='0.5' />
```

###### 禁用状态
```vue
<za-stepper v-model='stepper' disabled />
```

#### 多形状

###### 圆角
```vue
<za-stepper shape="radius" />
```

###### 圆形
```vue
<za-stepper shape="circle" />
```


### API

#### Stepper Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-stepper | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| shape | string | | 'radius', 'circle' | 形状 |
| v-model | number | | | 绑定值 |
| disabled | bool | false | | 是否禁用 |
| min | number | | | 最小值 |
| max | number | | | 最大值 |
| step | number | 1 | | 步长 |

#### Stepper Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 点击加减后触发的事件 | event 事件对象 |

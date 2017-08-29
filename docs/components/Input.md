# 文本框 Input

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/input)


### 代码演示

#### 基本用法

###### 单行文本
```vue
<za-input v-model='value' type="text" placeholder="type is text" />
```

###### 多行文本
```vue
<za-input v-model='value' type="textarea" placeholder="type is textarea" />
```

#### 高度自适应
```vue
<za-input autosize v-model='value' type="textarea" placeholder="autosize textarea" />
```

#### 显示输入字数
```vue
<za-input autosize showLength type="textarea" rows="4" maxLength="200" placeholder="摘要" v-model='value' />
```


### API

#### Input Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-input | | 类名前缀 |
| type | string | text | | 显示类型 |
| disabled | bool | false | | 是否禁用 |
| rows | string, number | | | 多行文本时的显示行数 |
| autosize | bool | false | | 是否高度自适应 |
| showLength | bool | false | | 是否显示输入字数 |

#### Input Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当绑定值变化时触发的事件 | 最新的值 |

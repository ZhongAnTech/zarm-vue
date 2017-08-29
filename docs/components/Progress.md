# 进度条 Progress

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/progress)


### 代码演示

#### 基本用法

###### 普通
```vue
<za-progress />
```

###### 设置主题
```vue
<za-progress theme="error" />
```

###### 设置进度百分比
```vue
<za-progress :percent='percent' />

// ...
data() {
  return {
    percent: 10
  }
}
```

###### 设置文本
```vue
<za-progress :percent='percent' />
  {{percent + '%'}}
</za-progress>
```

#### 圆形
```vue
<za-progress shape="circle" />
```


### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-progress | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| percent | number | 0 | | 进度百分比（范围：0～100） |
| shape | string | 'line' | 'line', 'circle' | 类型 |

# 上传组件 Uploader

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/uploader)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-uploader @change='handleChange'>
  选择文件
</za-uploader>

// ...
methods: {
  handleChange(file){
    console.log(file)
  }
}
```

###### 设置允许上传的附件格式
```vue
<za-uploader accept="image/jpg, image/jpeg, image/gif, image/png">
  选择文件
</za-uploader>
```

###### 允许多选
```vue
<za-uploader multiple>选择文件</za-uploader>
```

###### 选择前的触发事件
```vue
<za-uploader :before-change='beforeChange'>选择文件</za-uploader>
```

###### 禁用状态
```vue
<za-uploader disabled>选择文件</za-uploader>
```


### API

#### Uploader

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-uploader | | 类名前缀 |
| accept | string | | | 允许上传的附件格式 |
| multiple | bool | false | | 是否多选 |
| capture | string | | 照相机`camera`, 摄像机`camcorder`, 录音`microphone`| 唤起的原生应用 |
| disabled | bool | false | | 是否禁用 |
| before-change | func |  | | 选择前触发的回调 |

#### Uploader Event

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 选择文件后触发的事件 | 1.file对象 |

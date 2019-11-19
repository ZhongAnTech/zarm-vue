# 列表项 Cell

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/cell)

### 代码演示

#### 基本用法

###### 普通
```vue
<za-cell title='标题文字' />

或者使用 slot

<za-cell>
  <div class='box' slot='title'>
    <div>标题文字</div>
    <div>描述文字</div>
  </div>
</za-cell>
```

###### 带描述
```vue
<za-cell title='标题文字' description='描述文字' />

或者使用 slot

<za-cell title='标题文字'>
  <za-icon slot='description' type='right'/>
</za-cell>
```

###### 带图标、标题、描述
```vue
<za-cell title='标题文字' description='描述文字'>
  <za-icon type='right' slot='icon'/>
</za-cell>
<za-cell title='标题文字' description='描述文字'>
  <img src="https://static.zhongan.com/website/health/zarm/images/icons/state.png" slot='icon'>
</za-cell>
```

###### 带跳转
```vue
<za-cell isLink @click='() => {}'>标题文字</za-cell>
```

#### 提示信息
```vue
<za-cell title='标题' help='标题不能为空'>
  <za-input type="text" placeholder="请输入标题" />
</za-cell>

或者使用 slot

<za-cell title='标题'>
  <za-message theme='error' slot='help'>
    <za-icon type="info-round" />
    <span style='marginLeft: 5px'>标题不能为空</span>
  </za-message>
  <za-input type="text" placeholder="请输入标题" />
</za-cell>
```


### API

#### Cell Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-cell | | 类名前缀 |
| isLink | bool | false | | 是否带激活样式 |
| title | string | | | 标题 |
| help | string | | | 下方提示信息 通常配合`Message`组件使用|
| description | string | | | 描述 |
| hasArrow | bool | false | | 是否显示箭头 |

# 按钮 Button

[demo页面](https://zhongantecheng.github.io/zarm-vue/#/button)


### 代码演示

#### 基本用法

###### 普通
```vue
<za-button>普通按钮</za-button>
```

###### 幽灵按钮
```vue
<za-button bordered>幽灵按钮</za-button>
```

###### 块级按钮
```vue
<za-button block>块级按钮</za-button>
```

###### 禁用状态
```vue
<za-button disabled>禁用状态的按钮</za-button>
```

#### 多主题
```vue
<za-button>Default</za-button>
<za-button theme="primary">primary</za-button>
<za-button theme="info">info</za-button>
<za-button theme="success">success</za-button>
<za-button theme="warning">warning</za-button>
<za-button theme="error">error</za-button>
```

#### 按钮大小
```vue
<za-button size='xl'>xl</za-button>
<za-button size='lg'>lg</za-button>
<za-button>md</za-button>
<za-button size='sm'>sm</za-button>
<za-button size='xs'>xs</za-button>
```

#### 多形状
```vue
<za-button bordered shape="radius">圆角按钮</za-button>
<za-button bordered shape="round">椭圆角按钮</za-button>
<za-button bordered shape="circle">圆形按钮</za-button>
<Button shape="radius">圆角按钮</Button>
<Button shape="round">椭圆角按钮</Button>
<Button shape="circle">Go</Button>
```

#### 带icon的按钮
```vue
// 使用 slot='icon' 来为button添加icon

<za-button bordered shape="radius">
  <za-icon type='right-round' theme='success' slot='icon'></za-icon>
  正确
</za-button>
<za-button bordered shape="radius">
  <za-icon type='wrong-round' theme='error' slot='icon'></za-icon>
  错误
</za-button>
<za-button bordered loading shape="radius">
  加载中
</za-button>
```


### API

#### Button Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-button | | 类名前缀 |
| theme | string | 'default' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| size | string | | 'xl', 'lg', 'sm', 'xs' | 大小 |
| shape | string | | 'radius', 'round', 'circle' | 形状 |
| block | bool | false | | 是否为块级元素 |
| bordered | bool | false | | 是否是幽灵按钮 |
| disabled | bool | false | | 是否禁用 |
| loading | bool | false | | 是否显示加载中 |

#### Button Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | click时触发的事件 | event 事件对象 |

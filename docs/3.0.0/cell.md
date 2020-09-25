## 列表项 Cell

:::demo 普通列表项

```html
<za-cell title="标题文字"></za-cell>
```

:::

:::demo 带描述的列表项

```html
<za-cell title="标题文字" description="描述文字"></za-cell>
<za-cell title="标题文字">
  <template v-slot:description >
    <za-icon stype="right"></za-icon>
  </template>
</za-cell>
```

:::

:::demo 带图标、描述的列表项

```html
<za-cell title="标题文字">
  <template v-slot:icon>
  <za-icon type="right" ></za-icon>
  </template>
  <template v-slot:description>
  <div>描述文字</div>
  </template>
</za-cell>
<za-cell title="标题文字">
  <template v-slot:icon>
  <img
    style="width:24px;height:24px"
    src="https://static.zhongan.com/website/health/zarm/images/icons/state.png"
    alt=""
  />
  </template>
  <template v-slot:description>
  <div>描述文字</div>
  </template>
</za-cell>
```

:::

:::demo 带跳转的列表项

```html
<za-cell is-link @click="() => {}">标题文字</za-cell>
<za-cell is-link @click="() => {}">标题文字</za-cell>
```

:::

:::demo 带描述、箭头、跳转的列表项

```html
<za-cell is-link title="标题文字" has-arrow @click="() => {}">
  <template v-slot:description>
  <div>描述文字</div>
  </template>
</za-cell>
<za-cell is-link title="标题文字" has-arrow @click="() => {}">
  <template v-slot:description>
  <div>描述文字</div>
  </template>
</za-cell>
```

:::

:::demo 带图标、描述、箭头、跳转的列表项

```html
<za-cell is-link title="标题文字" has-arrow @click="() => {}">
  <template v-slot:description>
  <div>描述文字</div>
  </template>
   <template v-slot:icon>
  <za-icon type="right" ></za-icon>
  </template>
</za-cell>
<za-cell is-link title="标题文字" has-arrow @click="() => {}">
  <template v-slot:description>
  <div>描述文字</div>
  </template>
  <template v-slot:icon>
  <img
    style="width:24px;height:24px"
    src="https://static.zhongan.com/website/health/zarm/images/icons/state.png"
    alt=""
  />
  </template>
</za-cell>
<za-cell is-link has-arrow @click="() => {}">
  <template v-slot:description>
  <div>描述文字</div>
  </template>
  <template v-slot:title>
 <div class="box-title">标题文字</div>
    <div class="box-description">描述文字</div>
  </template>
  <template v-slot:icon>
  <img
    style="width:24px;height:24px"
    src="https://static.zhongan.com/website/health/zarm/images/icons/state.png"
    alt=""
  />
  </template>
</za-cell>
```

:::

:::demo 提示信息

```html
<za-cell title="标题">
  <template v-slot:help>
 <za-message theme="error">
    <za-icon type="info-round"></za-icon>
    <span style="marginLeft: 5px">标题不能为空</span>
  </za-message>
  </template>
  <za-input type="text" placeholder="请输入标题"></za-input>
</za-cell>
```

:::

### API

#### Cell Attributes

| 属性        | 类型    | 默认值 | 可选值／参数 | 说明                                   |
| :---------- | :------ | :----- | :----------- | :------------------------------------- |
| isLink      | boolean | false  |              | 是否带激活样式                         |
| title       | string  |        |              | 标题                                   |
| help        | string  |        |              | 下方提示信息 通常配合`Message`组件使用 |
| description | string  |        |              | 描述                                   |
| has-arrow   | boolean | false  |              | 是否显示箭头                           |

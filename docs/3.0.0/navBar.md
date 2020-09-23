## 导航栏 NavBar

:::demo 左侧渲染

```html
<za-nav-bar>
  <template v-slot:left>
    <za-icon theme="primary" type="arrow-left" @click="clickHandle"></za-icon>
  </template>
  <template v-slot:title>
    <div slot="title">这是标题</div>
  </template>
 
</za-nav-bar>
```

:::

:::demo 右侧渲染

```html
<za-nav-bar>
   <template v-slot:title>
    <div slot="title">这是标题</div>
  </template>
   <template v-slot:right>
    <za-icon
      theme="primary"
      type="question-round"
      @click="clickHandle"
    ></za-icon>
   </template>
</za-nav-bar>
```

:::

:::demo 复数渲染

```html
<za-nav-bar>
  <template v-slot:left>
    <za-icon theme="primary" type="arrow-left" @click="clickHandle"></za-icon>
  </template>
  <template v-slot:title>
    <div>这是标题</div>
  </template>
  <template v-slot:right>
    <za-icon theme="primary" type="add" @click="clickHandle"></za-icon>
    <za-icon
      theme="primary"
      type="question-round"
      @click="clickHandle"
    ></za-icon>
  </template>
</za-nav-bar>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
    }
  },
  methods: {
    clickHandle() {
      alert('clickHandle');
    },
  },
};
</script>
```

### API

#### NavBar Attributes

| 属性         | 类型   | 默认值    | 可选值／参数 | 说明           |
| :----------- | :----- | :-------- | :----------- | :------------- |
| title        | html   |           |              | 导航栏标题渲染 |
| slot="left"  | html   |           |              | 导航栏左侧渲染 |
| slot="right" | html   |           |              | 导航栏右侧渲染 |

# Vue-Next 升级指南

### `new Vue()`废弃

- 替换方案：
```js
import { createApp } from 'vue';
import App from './app';

const app = createApp(App);
app.use('xxx')

app.mount('#app');

```

### `Vue.extend`废弃

- 替换`createApp()`方案

### `this.$slots.default`废弃

- 替换`this.$slots.default()`


### `transition`组件can not resolve

-

### `slot='xxx'`具名插槽废弃

- 替换
```js
<template v-slot:xxx>
//...
</teamplte>
```



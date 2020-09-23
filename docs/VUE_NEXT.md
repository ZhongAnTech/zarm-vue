
> `new Vue()` 废弃

- 替换方案：

```js
import { createApp } from 'vue';
import App from './app';

const app = createApp(App);
app.use('xxx')

app.mount('#app');

```

> `Vue.extend` 废弃

- 替换`createApp()`方案

> Template JSX中的`this.$slots.default`废弃

- 替换`this.$slots.default()`


> `transition` 组件can not resolve

- `import { Transition } from 'vue'`

> `slot='xxx'` 具名插槽废弃

- 替换方案：
```js
<template v-slot:xxx>
//...
</teamplte>
```


> `xxx.sync = ''` 废弃

- 替换`v-model:xxx =''`


> `v-model`

- `value`: `modelValue`
- `input`: `update:modelValue`


> `this.$slots.default`

- 替换`this.$slots.default()`
<p align="center">
  <a href="http://zarm.design">
    <img width="200" src="https://zarm.design/images/logo.732d9561.svg">
  </a>
</p>

<h1 align="center">Zarm Vue</h1>

<div align="center">

[![Build Status](https://www.travis-ci.org/ZhongAnTech/zarm-vue.svg?branch=master)](https://www.travis-ci.org/ZhongAnTech/zarm-vue)
[![Coverage Status](https://img.shields.io/coveralls/ZhongAnTech/zarm-vue/master.svg)](https://coveralls.io/github/ZhongAnTech/zarm-vue?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/db2483a3-5b1a-4e48-8e37-9cc56332be2d/deploy-status)](https://app.netlify.com/sites/zarm-vue/deploys)
[![npm package](https://img.shields.io/npm/v/zarm-vue)](https://www.npmjs.org/package/zarm-vue)
[![NPM downloads](https://img.shields.io/npm/dt/zarm-vue)](https://img.shields.io/npm/dt/zarm-vue)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.umd.js?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.default.css?compression=gzip&label=gzip%20size:%20CSS)
<a href="https://www.npmjs.com/package/zarm-vue"><img src="https://img.shields.io/npm/l/zarm-vue.svg" alt="License"></a>

</div>

### 版本

- Beta版：[![npm package](https://img.shields.io/npm/v/zarm-vue)](https://www.npmjs.org/package/zarm-vue)

- Alpha版：[[ZarmVue-Next]](https://zarm-vue.gitee.io/zarm-vue-next/#/documents/quick-start)

### Install 安装

```bash
npm install zarm-vue --save
```


### Import 引入

- 全组件引入

```javascript
import Vue from 'vue';
import zarmVue from 'zarm-vue';
// 引入全局样式
import 'zarm-vue/zarm-vue.default.css';
Vue.use(zarmVue);
```

- 按需引入

借助`ElementUI`提供的[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 添加：

```javascript
{
  // ...
  "plugins": [["component", {
      "libraryName": "zarm-vue",
      "styleLibraryName": "theme"
    }
  ]]
}
```


接下来，如果你只希望引入部分组件，比如 Button 和 Alert，那么需要在 main.js 中写入以下内容：

```javascript
import { Button, Alert } from 'zarm-vue'
Vue.use(Button)
Vue.use(Alert)
```


- 也可以通过cdn引入umd模块
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/zarm-vue@latest/zarm-vue.default.css">
  <script src="https://unpkg.com/vue@latest/dist/vue.min.js"></script>
  <script src="https://unpkg.com/zarm-vue@latest/zarm-vue.umd.js"></script>
</head>
<body>
  <div id="app">
      <za-button theme="primary">普通按钮</za-button>
  </div>
</body>
<script>
  new Vue({
    el: '#app'
  })
</script>
</html>

```





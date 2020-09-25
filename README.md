<p align="center">
  <a href="http://zarm.design">
    <img width="200" src="https://zarm.design/images/logo.732d9561.svg">
  </a>
</p>

<h1 align="center">Zarm Vue Next</h1>

<div align="center" style="display:none">

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

- Alpha版：[![npm package](https://img.shields.io/npm/v/zarm-vue-next)](https://www.npmjs.org/package/zarm-vue-next)


### 基于Vue3.0使用

- 使用`vue-cli`初始化**Vue3.x**项目

### Install 安装

```bash
npm install zarm-vue-next --save
```


### Import 引入

- 全组件引入

```javascript
import { createApp } from 'vue';
import zarmVue from 'zarm-vue-next';
// 引入全局样式
import 'zarm-vue-next/zarm-vue.default.css';

const app = createApp(App);
app.use(zarmVue);
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
      "libraryName": "zarm-vue-next",
      "styleLibraryName": "theme"
    }
  ]]
}
```


接下来，如果你只希望引入部分组件，比如 Button 和 Alert，那么需要在 main.js 中写入以下内容：

```javascript
import { Button, Alert } from 'zarm-vue-next'
app.use(Button)
app.use(Alert)
```


- 也可以通过cdn引入umd模块
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/zarm-vue-next@latest/zarm-vue.default.css">
  <script src="https://unpkg.com/vue@latest/dist/vue.min.js"></script>
  <script src="https://unpkg.com/zarm-vue-next@latest/zarm-vue-next.umd.js"></script>
</head>
<body>
  <div id="app">
      <za-button theme="primary">普通按钮</za-button>
  </div>
</body>
<script>
  Vue.createApp().mount("#app");
</script>
</html>

```





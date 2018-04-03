# zarm-vue UI
[![Build Status](https://www.travis-ci.org/ZhonganTechENG/zarm-vue.svg?branch=master)](https://www.travis-ci.org/ZhonganTechENG/zarm-vue)
[![Coverage Status](https://img.shields.io/coveralls/ZhonganTechENG/zarm-vue/master.svg)](https://coveralls.io/github/ZhonganTechENG/zarm-vue?branch=master)
[![npm package](https://img.shields.io/npm/v/zarm-vue.svg)](https://www.npmjs.org/package/zarm-vue)
[![NPM downloads](http://img.shields.io/npm/dm/zarm-vue.svg)](https://npmjs.org/package/zarm-vue)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.umd.js?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.default.css?compression=gzip&label=gzip%20size:%20CSS)

### 使用文档

[传送门](https://chuanshuoye.github.io/zarm-vue-doc/#/zh-CN)

### 更新注意

1.1.0之后部分组件使用上和1.0.x版本有些许差异，如果已经在用1.0.x版本的请使用 `npm install zarm-vue@1.0 --save` 可以固定在1.0.x版本，关于1.0.x版本后续不再维护。

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


接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import { Button, Alert } from 'zarm-vue'
Vue.use(Button)
Vue.use(Alert)
```


- 也可以通过cdn引入umd模块
```html
<link rel="stylesheet" href="https://unpkg.com/zarm-vue@latest/zarm-vue.default.css">

<script src="https://unpkg.com/vue@latest/dist/vue.min.js"></script>>
<script src="https://unpkg.com/zarm-vue@latest/zarm-vue.umd.js"></script>
```

### Usage 使用：

  ```javascript

  new Vue({
    el: '#app',
    template: '<za-button theme="primary">普通按钮</za-button>',
    components: { zaButton },
  });
  ```

### Theme 自定义主题
clone本仓库后先安装依赖，然后通过修改 `styles/variables.scss` 文件重写sass变量。运行下面命令生成新样式
```bash
npm run build:theme
```
新生成的样式文件： `lib/zarm-vue.default.css`

### License
MIT

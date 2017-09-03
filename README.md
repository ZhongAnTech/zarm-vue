# zarm-vue UI
[![Build Status](https://www.travis-ci.org/ZhonganTechENG/zarm-vue.svg?branch=master)](https://www.travis-ci.org/ZhonganTechENG/zarm-vue)
[![Coverage Status](https://img.shields.io/coveralls/ZhonganTechENG/zarm-vue/master.svg)](https://coveralls.io/github/ZhonganTechENG/zarm-vue?branch=master)
[![npm package](https://img.shields.io/npm/v/zarm-vue.svg)](https://www.npmjs.org/package/zarm-vue)
[![NPM downloads](http://img.shields.io/npm/dm/zarm-vue.svg)](https://npmjs.org/package/zarm-vue)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.umd.js?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/zarm-vue/zarm-vue.default.css?compression=gzip&label=gzip%20size:%20CSS)

  [众安科技zarm移动端组件库](https://github.com/ZhonganTechENG/zarm) **的 Vue.js版本**

### Example 案例

[Online example](https://zhongantecheng.github.io/zarm-vue/)

### Document 文档
[Document](https://github.com/ZhonganTechENG/zarm-vue/blob/master/docs/SUMMARY.md)

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

- 单组件使用
```javascript
import zaButton from 'zarm-vue/dist/button';
import 'zarm-vue/zarm-vue.default.css';
```


- 也可以通过cdn引入umd模块
```html
<link rel="stylesheet" href="https://unpkg.com/zarm-vue@latest/zarm-vue.default.css">

<script src="https://unpkg.com/vue@2.4.2/dist/vue.min.js"></script>>
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
和zarm一致，通过自己的variables文件重写sass变量。运行下面命令生成新样式
```bash
npm run build:theme
```

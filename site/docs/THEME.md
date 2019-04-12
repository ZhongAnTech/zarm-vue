> ## 可视化生成自定义主题

如果仅希望更换 ZarmVue 的品牌色，推荐使用[在线主题生成工具](https://chuanshuoye.github.io/zarm-vue-chalk/#/)。通过替换主题色，能够让 ZarmVue 的视觉更加符合具体项目的定位。

使用上述工具，可以很方便地实时预览主题色改变之后的视觉，同时它还可以基于新的主题色生成完整的样式文件包，供直接下载使用。


> ## 动态修改variables.scss常量实现自定义主题

写入以下内容：

```js
import 'zarm-vue/styles/default.scss'; // zarm-vue组件默认函数以及variables
import 'zarm-vue/styles/custom-variables.scss';  // 用户自定义的variables覆盖默认常量配置
import 'zarm-vue/styles/components.scss'; // 加载组件样式

import Vue from 'vue'
import ZarmVue from 'zarm-vue'
Vue.use(ZarmVue)
```

> ## 命令行自定义主题
ZarmVue 的样式使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 ZarmVue 的样式变量。

clone本仓库后先安装依赖，然后通过修改 `styles/variables.scss` 文件重写sass变量。


写入以下内容：

```css

// 基础
$base-fontSize: 14;
$placeholder-color: #a9a9a9;

// 图标字体
$icon-url: '//at.alicdn.com/t/font_126288_147h8m0m5se5ewmi';

// 主题
$theme-default: #e6e6e6;
$theme-default-light: rgba($theme-default, 0.5);
$theme-default-dark: darken($theme-default, 10%);

// ...

```

运行下面命令生成新样式：

```bash
npm run build:theme
```
新生成的样式文件： `lib/zarm-vue.default.css`


之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 ZarmVue 编译好的 CSS 文件）：

```html
import Vue from 'vue'
import ZarmVue from 'zarm-vue'
import './zarm-vue.default.css'

Vue.use(ZarmVue)
```


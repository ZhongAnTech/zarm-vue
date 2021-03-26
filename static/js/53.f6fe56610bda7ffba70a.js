(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{497:function(s,t,a){},499:function(s,t,a){"use strict";var n=a(497);a.n(n).a},500:function(s,t,a){"use strict";var n={data:()=>({}),components:{},created(){},mounted(){},methods:{}},l=(a(499),a(6)),e=Object(l.a)(n,(function(){var s=this.$createElement,t=this._self._c||s;return t("main",[t("div",{staticClass:"main-container"},[this._t("default")],2)])}),[],!1,null,"4d605d3f",null);t.a=e.exports},623:function(s,t,a){"use strict";a.r(t);var n=a(500),l=a(6),e=Object(l.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"}),a("div",{staticClass:"zarm-markdown-doc"},[a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"http://zarm.design"}},[a("img",{attrs:{width:"200",src:"https://zarm.design/images/logo.732d9561.svg"}})])]),s._v(" "),a("h1",{attrs:{align:"center"}},[s._v("Zarm Vue")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("p",[a("a",{attrs:{href:"https://www.travis-ci.org/ZhongAnTech/zarm-vue"}},[a("img",{attrs:{src:"https://www.travis-ci.org/ZhongAnTech/zarm-vue.svg?branch=master",alt:"Build Status"}})]),s._v(" "),a("a",{attrs:{href:"https://coveralls.io/github/ZhongAnTech/zarm-vue?branch=master"}},[a("img",{attrs:{src:"https://img.shields.io/coveralls/ZhongAnTech/zarm-vue/master.svg",alt:"Coverage Status"}})]),s._v(" "),a("a",{attrs:{href:"https://app.netlify.com/sites/zarm-vue/deploys"}},[a("img",{attrs:{src:"https://api.netlify.com/api/v1/badges/db2483a3-5b1a-4e48-8e37-9cc56332be2d/deploy-status",alt:"Netlify Status"}})]),s._v(" "),a("a",{attrs:{href:"https://www.npmjs.org/package/zarm-vue"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/zarm-vue",alt:"npm package"}})]),s._v(" "),a("a",{attrs:{href:"https://img.shields.io/npm/dt/zarm-vue"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dt/zarm-vue",alt:"NPM downloads"}})]),s._v(" "),a("img",{attrs:{src:"http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.umd.js?compression=gzip&label=gzip%20size:%20JS",alt:"JS gzip size"}}),s._v(" "),a("img",{attrs:{src:"http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.default.css?compression=gzip&label=gzip%20size:%20CSS",alt:"CSS gzip size"}}),s._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/zarm-vue"}},[a("img",{attrs:{src:"https://img.shields.io/npm/l/zarm-vue.svg",alt:"License"}})])])]),s._v(" "),a("h3",[s._v("版本")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Beta版："),a("a",{attrs:{href:"https://www.npmjs.org/package/zarm-vue"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/zarm-vue",alt:"npm package"}})])])]),s._v(" "),a("li",[a("p",[s._v("Alpha版："),a("a",{attrs:{href:"https://www.npmjs.org/package/zarm-vue-next"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/zarm-vue-next",alt:"npm package"}})])])])]),s._v(" "),a("h3",[s._v("Install 安装")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("npm install zarm-vue --save\n")])]),s._v(" "),a("h3",[s._v("Import 引入")]),s._v(" "),a("ul",[a("li",[s._v("全组件引入")])]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v(";\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" zarmVue "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'zarm-vue'")]),s._v(";\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 引入全局样式")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'zarm-vue/zarm-vue.default.css'")]),s._v(";\nVue.use(zarmVue);\n")])]),s._v(" "),a("ul",[a("li",[s._v("按需引入")])]),s._v(" "),a("p",[s._v("借助"),a("code",[s._v("ElementUI")]),s._v("提供的"),a("a",{attrs:{href:"https://github.com/ElementUI/babel-plugin-component"}},[s._v("babel-plugin-component")]),s._v("，我们可以只引入需要的组件，以达到减小项目体积的目的。")]),s._v(" "),a("p",[s._v("首先，安装 babel-plugin-component：")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("npm install babel-plugin-component -D\n")])]),s._v(" "),a("p",[s._v("然后，将 .babelrc 添加：")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("{\n  "),a("span",{staticClass:"hljs-comment"},[s._v("// ...")]),s._v("\n  "),a("span",{staticClass:"hljs-string"},[s._v('"plugins"')]),s._v(": [["),a("span",{staticClass:"hljs-string"},[s._v('"component"')]),s._v(", {\n      "),a("span",{staticClass:"hljs-string"},[s._v('"libraryName"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"zarm-vue"')]),s._v(",\n      "),a("span",{staticClass:"hljs-string"},[s._v('"styleLibraryName"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"theme"')]),s._v("\n    }\n  ]]\n}\n")])]),s._v(" "),a("p",[s._v("接下来，如果你只希望引入部分组件，比如 Button 和 Alert，那么需要在 main.js 中写入以下内容：")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Button, Alert } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'zarm-vue'")]),s._v("\nVue.use(Button)\nVue.use(Alert)\n")])]),s._v(" "),a("ul",[a("li",[s._v("也可以通过cdn引入umd模块")])]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-meta"},[s._v("<!DOCTYPE "),a("span",{staticClass:"hljs-meta-keyword"},[s._v("html")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("meta")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("charset")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"UTF-8"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- import CSS --\x3e")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/zarm-vue@latest/zarm-vue.default.css"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/vue@latest/dist/vue.min.js"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/zarm-vue@latest/zarm-vue.umd.js"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"app"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("theme")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("普通按钮"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"actionscript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n    el: "),a("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v("\n  })\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(">")]),s._v("\n\n")])])])])}],!1,null,null,null).exports,v={components:{Container:n.a,Demo:e}},i=Object(l.a)(v,(function(){var s=this.$createElement,t=this._self._c||s;return t("Container",{staticClass:"document-quick-start"},[t("Demo")],1)}),[],!1,null,"b0f82e34",null);t.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{679:function(t,s,a){"use strict";a.r(s);var l={data:()=>({initvalue:10}),methods:{handleChange(){console.log(this.initvalue)}}},e=a(0),n=Object(e.a)(l,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",{attrs:{title:"普通"}},[a("za-slider",{attrs:{"default-value":40},on:{change:t.handleChange}})],1),t._v(" "),a("za-cell",{attrs:{title:"设置默认值"}},[a("za-slider",{attrs:{"default-value":20}})],1),t._v(" "),a("za-cell",{attrs:{title:"设置上下限"}},[a("za-slider",{attrs:{min:-100,max:100},on:{change:t.handleChange},model:{value:t.initvalue,callback:function(s){t.initvalue=s},expression:"initvalue"}})],1),t._v(" "),a("za-cell",{attrs:{title:"设置步长"}},[a("za-slider",{attrs:{step:10}})],1),t._v(" "),a("za-cell",{attrs:{title:"禁用状态"}},[a("za-slider",{attrs:{"default-value":20,disabled:""}})],1)],1)])]),t._m(1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("基本\n\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[t._v("滑动输入条 Slider")]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"普通"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-slider")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":default-value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"40"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-slider")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"设置默认值"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-slider")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":default-value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"20"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-slider")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"设置上下限"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-slider")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"-100"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"100"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"initvalue"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-slider")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"设置步长"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-slider")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":step")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"10"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-slider")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"禁用状态"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-slider")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":default-value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"20"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-slider")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("h3",[t._v("Vue Script")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("<script name="),a("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("initvalue")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("10")]),t._v(",\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    handleChange(){\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" self = "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(";\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(self.initvalue)\n    }\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])]),t._v("\n")])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("Slider Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("绑定选项值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("default-value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("min")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最小值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最大值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("step")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("步长")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])])])]),t._v(" "),a("h4",[t._v("Slider Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("noop")])])])])])}],!1,null,null,null);s.default=n.exports},720:function(t,s,a){},803:function(t,s,a){"use strict";a.r(s);var l=a(679),e=a(319),n=a(320),i=a(321),v=(a(720),{components:{Container:e.a,PageHeader:n.a,PageFooter:i.a,Demo:l.default}}),_=a(0),c=Object(_.a)(v,function(){var t=this.$createElement,s=this._self._c||t;return s("Container",{staticClass:"slider-page"},[s("PageHeader",{attrs:{title:"滑动输入条 Slider"}}),this._v(" "),s("Demo"),this._v(" "),s("PageFooter")],1)},[],!1,null,null,null);s.default=c.exports}}]);
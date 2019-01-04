(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{205:function(t,s,a){"use strict";a.r(s);var l={data:()=>({min:"2018-05-06",max:"2018-10-02",value:"2018-05-08",defaultValue:["2018-05-07","2018-06-08"],multiple:"1",multipleOptions:[{value:"1",label:"true"},{value:"0",label:"false"}]}),methods:{change(t){console.log("change:"+t)},handleChange(t){this.multiple=t.value},disabledDate:t=>t.getDate()%10,dateRender(t){const s=this.$createElement;return/(0|6)/.test(t.getDay())?s("span",{style:"color: #12c287"},t.getDay()):t.getDate()}},watch:{value(t){console.log("watch:"+t)}}},e=a(1),n=Object(e.a)(l,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",{attrs:{title:"multiple"}},[a("za-select",{attrs:{"data-source":t.multipleOptions},on:{ok:t.handleChange},model:{value:t.multiple,callback:function(s){t.multiple=s},expression:"multiple"}})],1),t._v(" "),a("za-cell",{attrs:{title:"min"}},[a("za-date-select",{attrs:{title:"选择日期",placeholder:"请选择日期",mode:"date",format:"yyyy-MM-dd",max:"2030-10-25",min:"1917-10-25"},model:{value:t.min,callback:function(s){t.min=s},expression:"min"}})],1),t._v(" "),a("za-cell",{attrs:{title:"max"}},[a("za-date-select",{attrs:{title:"选择日期",placeholder:"请选择日期",mode:"date",format:"yyyy-MM-dd",max:"2030-10-25",min:"1917-10-25"},model:{value:t.max,callback:function(s){t.max=s},expression:"max"}})],1),t._v(" "),a("za-calendar",{attrs:{defaultValue:t.defaultValue,multiple:"1"==t.multiple,dateRender:t.dateRender,disabledDate:t.disabledDate,min:t.min,max:t.max},on:{change:t.change},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1)])]),t._m(1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("简单日历\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[t._v("日历 Calendar")]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("简单日历")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"multiple"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-select")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"multiple"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":data-source")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"multipleOptions"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-select")]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"min"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"min"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"选择日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请选择日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"date"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("format")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"yyyy-MM-dd"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2030-10-25"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"1917-10-25"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"max"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"max"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"选择日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请选择日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"date"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("format")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"yyyy-MM-dd"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2030-10-25"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"1917-10-25"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-calendar")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"change"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"defaultValue"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":multiple")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"multiple == '1'\"")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":dateRender")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"dateRender"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":disabledDate")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"disabledDate"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"min"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"max"')]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("h3",[t._v("Vue Script")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("<script name="),a("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"2018-05-06"')]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"2018-10-02"')]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'2018-05-08'")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("defaultValue")]),t._v(": ["),a("span",{staticClass:"hljs-string"},[t._v('"2018-05-07"')]),t._v(", "),a("span",{staticClass:"hljs-string"},[t._v('"2018-06-08"')]),t._v("],\n      "),a("span",{staticClass:"hljs-attr"},[t._v("multiple")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"1"')]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("multipleOptions")]),t._v(": [\n        { "),a("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'1'")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" },\n        { "),a("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'0'")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(" }\n      ]\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    change(date) {\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("'change:'")]),t._v(" + date);\n    },\n    handleChange(val) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".multiple = val.value;\n    },\n    disabledDate(date) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" date.getDate() % "),a("span",{staticClass:"hljs-number"},[t._v("10")]),t._v(";"),a("span",{staticClass:"hljs-comment"},[t._v("// 10倍数的不可用")]),t._v("\n    },\n    dateRender(date) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" h = "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$createElement;\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" ("),a("span",{staticClass:"hljs-regexp"},[t._v("/(0|6)/")]),t._v(".test(date.getDay())) {\n        "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" h("),a("span",{staticClass:"hljs-string"},[t._v("'span'")]),t._v(", { "),a("span",{staticClass:"hljs-attr"},[t._v("style")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'color: #12c287'")]),t._v(" }, date.getDay());\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" date.getDate();\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("watch")]),t._v(": {\n    value(val) {\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("'watch:'")]),t._v(" + val);\n    }\n  }\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])]),t._v("\n")])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("Calendar Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("za-calendar")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("titles")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("['日', '一', '二', '三', '四', '五', '六']")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("周期标题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("multiple")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否日期范围选择开关")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("defaultValue")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String / Number / Date / [Date, Date]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置选中的日期")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String / Number / Date / [Date, Date]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("双向绑定日期值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("min")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String / Number / Date")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当天日期")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("\b最小日期限制")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String / Number / Date")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("min开始往后一年")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("\b最大日期限制")])])])]),t._v(" "),a("h4",[t._v("Calendar Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当选择日期点击时触发的事件。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("multiple 为 true 返回 [Date, Date]，否则返回 Date")])])])])])}],!1,null,null,null);s.default=n.exports},259:function(t,s,a){},332:function(t,s,a){"use strict";a.r(s);var l=a(205),e=a(62),n=a(61),v=a(60),i=(a(259),{components:{Container:e.a,PageHeader:n.a,PageFooter:v.a,Demo:l.default}}),_=a(1),c=Object(_.a)(i,function(){var t=this.$createElement,s=this._self._c||t;return s("Container",{staticClass:"calendar-page"},[s("PageHeader",{attrs:{title:"日历 Calendar"}}),this._v(" "),s("Demo"),this._v(" "),s("PageFooter")],1)},[],!1,null,null,null);s.default=c.exports}}]);
//# sourceMappingURL=34.e6ebb4bc4b1d3e59f727.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{191:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(i(24)),s=a(i(23)),o=a(i(22));function a(t){return t&&t.__esModule?t:{default:t}}i(89),e.default={components:{Container:n.default,PageHeader:s.default,PageFooter:o.default},data:function(){return{visible1:!1,visible2:!1,visible3:!1,visible4:!1,isLoading:!1}},methods:{toastClose:function(t,e){console.log(t,e)}}}},192:function(t,e,i){"use strict";i.r(e);var n=i(191),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=s.a},241:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Container",{staticClass:"toast-page"},[i("PageHeader",{attrs:{title:"轻提示 Toast"}}),t._v(" "),i("main",[i("div",[i("za-panel",[i("za-panel-header",{attrs:{title:"提示信息"}}),t._v(" "),i("za-panel-body",[i("za-cell",[i("za-button",{attrs:{slot:"description",size:"xs",theme:"error"},on:{click:function(e){t.visible1=!0}},slot:"description"},[t._v("开启")]),t._v("\n            错误提示\n          ")],1),t._v(" "),i("za-cell",[i("za-button",{attrs:{slot:"description",size:"xs",theme:"success"},on:{click:function(e){t.visible2=!0}},slot:"description"},[t._v("开启")]),t._v("\n            成功提示(close-on-click-modal)\n          ")],1),t._v(" "),i("za-cell",[i("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(e){t.visible3=!0}},slot:"description"},[t._v("开启")]),t._v("\n            指定关闭时间\n          ")],1)],1)],1),t._v(" "),i("za-panel",[i("za-panel-header",{attrs:{title:"加载中"}}),t._v(" "),i("za-panel-body",[i("za-cell",[i("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(e){t.visible4=!0}},slot:"description"},[t._v("开启")]),t._v("\n            Loading\n          ")],1)],1)],1)],1),t._v(" "),i("za-toast",{attrs:{visible:t.visible1},on:{"update:visible":function(e){t.visible1=e},close:t.toastClose}},[t._v("默认3秒自动关闭")]),t._v(" "),i("za-toast",{attrs:{visible:t.visible2,"close-on-click-modal":!0},on:{"update:visible":function(e){t.visible2=e},close:t.toastClose}},[i("div",{staticClass:"box"},[i("za-icon",{staticClass:"box-icon",attrs:{type:"right-round-fill"}}),t._v(" "),i("div",{staticClass:"box-text"},[t._v("预约成功")])],1)]),t._v(" "),i("za-toast",{attrs:{visible:t.visible3,duration:1e4},on:{"update:visible":function(e){t.visible3=e},close:t.toastClose}},[t._v("指定10秒自动关闭")]),t._v(" "),i("za-loading",{attrs:{visible:t.visible4},on:{"update:visible":function(e){t.visible4=e}}})],1),t._v(" "),i("PageFooter")],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},90:function(t,e,i){"use strict";i.r(e);var n=i(241),s=i(192);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var a=i(0),l=Object(a.a)(s.default,n.a,n.b,!1,null,null,null);e.default=l.exports}}]);
//# sourceMappingURL=16.66366386bcbbe1aa8f02.js.map
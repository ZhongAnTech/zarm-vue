(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{658:function(t,n,e){},659:function(t,n,e){},660:function(t,n,e){"use strict";var a=e(658);e.n(a).a},661:function(t,n,e){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},i=(e(660),e(0)),r=Object(i.a)(a,function(){var t=this.$createElement,n=this._self._c||t;return n("main",[n("div",{staticClass:"main-container"},[this._t("default")],2)])},[],!1,null,"4d605d3f",null);n.a=r.exports},662:function(t,n,e){"use strict";var a=e(659);e.n(a).a},663:function(t,n,e){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}},i=(e(662),e(0)),r=Object(i.a)(a,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"simulator"},[n("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])},[],!1,null,"1196af06",null);n.a=r.exports},839:function(t,n,e){"use strict";e.r(n);var a=e(3),i=e(663),r={components:{Container:e(661).a,Simulator:i.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",function(n,a){e.e(89).then(function(){var a=[e(766)(`./${t}/noticeBar.md`)];n.apply(null,a)}.bind(this)).catch(e.oe)})}},s=e(0),o=Object(s.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("Container",[n("Demo"),this._v(" "),n("Simulator",{attrs:{url:this.path}})],1)},[],!1,null,null,null);n.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{658:function(t,e,n){},659:function(t,e,n){},660:function(t,e,n){"use strict";var a=n(658);n.n(a).a},661:function(t,e,n){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},i=(n(660),n(0)),s=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"main-container"},[this._t("default")],2)])},[],!1,null,"4d605d3f",null);e.a=s.exports},662:function(t,e,n){"use strict";var a=n(659);n.n(a).a},663:function(t,e,n){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}},i=(n(662),n(0)),s=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"simulator"},[e("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])},[],!1,null,"1196af06",null);e.a=s.exports},822:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n(663),s={components:{Container:n(661).a,Simulator:i.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",function(e,a){Promise.all([n.e(1),n.e(108)]).then(function(){var a=[n(749)(`./${t}/badge.md`)];e.apply(null,a)}.bind(this)).catch(n.oe)})}},r=n(0),o=Object(r.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("Container",[e("Demo"),this._v(" "),e("Simulator",{attrs:{url:this.path}})],1)},[],!1,null,null,null);e.default=o.exports}}]);
(function(t){function e(e){for(var r,o,l=e[0],s=e[1],u=e[2],p=0,f=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{staticClass:"elevation-1",attrs:{app:"",dense:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("Vuetify")]),n("span",{staticClass:"font-weight-light"},[t._v("MATERIAL DESIGN")])])],1),n("transition",{attrs:{name:t.transitionName,mode:"in-out"}},[n("router-view")],1)],1)},i=[],o=(n("ac1f"),n("1276"),{data:function(){return{transitionName:null}},watch:{$route:function(t,e){var n=t.path.split("/").length,r=e.path.split("/").length;this.transitionName=n<r?"slide-left":"slide-right"}}}),l=o,s=n("2877"),u=n("6544"),c=n.n(u),p=n("7496"),f=n("40dc"),d=n("2a7f"),v=Object(s["a"])(l,a,i,!1,null,null,null),m=v.exports;c()(v,{VApp:p["a"],VAppBar:f["a"],VToolbarTitle:d["a"]});var h=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slideable-page",on:{scroll:t.saveScroll}},[n("v-container",{staticClass:"fill-height-min",attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",t._l(t.items,(function(e){return n("v-list-item",{key:e.id,attrs:{to:{name:"item",params:{id:e.id}}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Item #"+t._s(e.id))])],1)],1)})),1)],1)],1)],1)},g=[],y={mounted:function(){this.$el.scrollTop=localStorage.getItem("scroll-"+this.$route.path)||0},methods:{saveScroll:function(t){localStorage.setItem("scroll-"+this.$route.path,t.currentTarget.scrollTop)}}},w={mixins:[y],data:function(){for(var t=[],e=0;e<100;e++)t.push({id:e+1});return{items:t}}},_=w,V=n("62ad"),j=n("a523"),O=n("da13"),x=n("5d23"),C=n("0fd9"),S=Object(s["a"])(_,b,g,!1,null,null,null),T=S.exports;c()(S,{VCol:V["a"],VContainer:j["a"],VListItem:O["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VRow:C["a"]});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slideable-page grey lighten-3",on:{scroll:t.saveScroll}},[n("v-container",{staticClass:"fill-height-min",attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",[n("v-alert",{attrs:{type:"info",outlined:""}},[t._v(" Item "+t._s(t.id)+" ")]),n("v-btn",{attrs:{to:"/"}},[t._v("Go Back")])],1)],1)],1)],1)},$=[],P={mixins:[y],computed:{id:function(){return this.$route.params.id}}},k=P,A=n("0798"),E=n("8336"),M=Object(s["a"])(k,I,$,!1,null,null,null),L=M.exports;c()(M,{VAlert:A["a"],VBtn:E["a"],VCol:V["a"],VContainer:j["a"],VRow:C["a"]}),r["a"].use(h["a"]);var N=[{path:"/",name:"list",component:T},{path:"/items/:id",name:"item",component:L}],B=new h["a"]({routes:N}),R=B,G=n("f309");r["a"].use(G["a"]);var J=new G["a"]({icons:{iconfont:"mdi"}});n("7e79");r["a"].config.productionTip=!1,new r["a"]({router:R,vuetify:J,render:function(t){return t(m)}}).$mount("#app")},"7e79":function(t,e,n){}});
//# sourceMappingURL=app.9f25bd55.js.map
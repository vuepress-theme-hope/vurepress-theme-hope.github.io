(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{295:function(t,n,o){},408:function(t,n,o){"use strict";o(295)},449:function(t,n,o){"use strict";o.r(n);var e=o(0),s=o(232),i=o(204),a=e.a.extend({name:"NotFound",components:{Common:s.a},computed:{i18n(){return this.$themeLocaleConfig.error404||Object(i.b)().error404},msg(){return this.i18n.hint[Math.floor(Math.random()*this.i18n.hint.length)]}},methods:{back(){window.history.go(-1)}}}),r=(o(408),o(1)),c=Object(r.a)(a,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("Common",{attrs:{sidebar:!1}},[o("main",{staticClass:"page not-found"},[o("h1",[t._v("404")]),t._v(" "),o("blockquote",{domProps:{textContent:t._s(t.msg)}}),t._v(" "),o("button",{staticClass:"action-button",on:{click:t.back}},[t._v(t._s(t.i18n.back))]),t._v(" "),o("RouterLink",{staticClass:"action-button",attrs:{to:"/"}},[t._v(t._s(t.i18n.home))])],1)])}),[],!1,null,null,null);n.default=c.exports}}]);
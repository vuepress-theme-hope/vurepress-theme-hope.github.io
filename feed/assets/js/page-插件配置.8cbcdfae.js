(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{424:function(t,a,e){"use strict";e.r(a);var v=e(1),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"hostname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hostname"}},[t._v("#")]),t._v(" hostname")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("必填: 是")])]),t._v(" "),e("p",[t._v("部署网站的域名。")]),t._v(" "),e("h2",{attrs:{id:"baselang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#baselang"}},[t._v("#")]),t._v(" baseLang")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("'en-US'")])])]),t._v(" "),e("p",[t._v("主目录所对应的语言。")]),t._v(" "),e("h2",{attrs:{id:"channel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[t._v("#")]),t._v(" channel")]),t._v(" "),e("p",[t._v("channel 选项用于配置 Feed 频道。")]),t._v(" "),e("p",[t._v("可用选项详见 "),e("RouterLink",{attrs:{to:"/zh/config/channel.html"}},[t._v("配置 → 频道设置")])],1),t._v(" "),e("h2",{attrs:{id:"filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" filter")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("(pageA: Page)=> boolean")])]),t._v(" "),e("li",[t._v("默认值: 全部 feed 项目")])]),t._v(" "),e("p",[t._v("自定义的过滤函数，用于过滤哪些项目在 feed 中显示。")]),t._v(" "),e("h2",{attrs:{id:"sort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[t._v("#")]),t._v(" sort")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("(pageA: Page, pageB: page)=> number")])])]),t._v(" "),e("p",[t._v("自定义排序函数，用于对站点中的页面进行排序。")]),t._v(" "),e("p",[t._v("最终生成的 feed 文件将会按照这个顺序对项目进行显示。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("我们强烈建议您设置这个选项，否则 feed 流中，项目的顺序完全由 vuepress 默认输出的 pages 顺序决定。")]),t._v(" "),e("p",[t._v("你可以按照自己的需求对站点内的页面进行排序。")])]),t._v(" "),e("h2",{attrs:{id:"count"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#count"}},[t._v("#")]),t._v(" count")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("number")])]),t._v(" "),e("li",[t._v("默认值: 全部 feed 项目数量")])]),t._v(" "),e("p",[t._v("设置 feed 的最大项目数量。设置后会在所有页面排序好后，截取前 count 个项目。")]),t._v(" "),e("p",[t._v("如果你的站点文章很多，你可能需要考虑设置这个选项以减少 feed 文件大小。")]),t._v(" "),e("h2",{attrs:{id:"output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" output")]),t._v(" "),e("p",[t._v("Feed 的输出配置。")]),t._v(" "),e("h3",{attrs:{id:"output-atom-enable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-atom-enable"}},[t._v("#")]),t._v(" output.atom.enable")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("boolean")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("true")])])]),t._v(" "),e("p",[t._v("是否启用 Atom 输出")]),t._v(" "),e("h3",{attrs:{id:"output-atom-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-atom-path"}},[t._v("#")]),t._v(" output.atom.path")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("atom.xml")])])]),t._v(" "),e("p",[t._v("Atom Feed 输出文件位置(基于输出文件夹)")]),t._v(" "),e("h3",{attrs:{id:"output-json-enable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-json-enable"}},[t._v("#")]),t._v(" output.json.enable")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("boolean")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("true")])])]),t._v(" "),e("p",[t._v("是否启用 json 输出")]),t._v(" "),e("h3",{attrs:{id:"output-json-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-json-path"}},[t._v("#")]),t._v(" output.json.path")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("feed.json")])])]),t._v(" "),e("p",[t._v("JSON Feed 输出文件位置(基于输出文件夹)")]),t._v(" "),e("h3",{attrs:{id:"output-rss-enable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-rss-enable"}},[t._v("#")]),t._v(" output.rss.enable")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("boolean")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("true")])])]),t._v(" "),e("p",[t._v("是否启用 RSS 输出")]),t._v(" "),e("h3",{attrs:{id:"output-rss-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-rss-path"}},[t._v("#")]),t._v(" output.rss.path")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("rss.xml")])])]),t._v(" "),e("p",[t._v("RSS 输出文件位置(基于输出文件夹)")])])}),[],!1,null,null,null);a.default=_.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{457:function(t,e,a){"use strict";a.r(e);var o=a(1),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"hostname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hostname"}},[t._v("#")]),t._v(" hostname")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Required: Yes")])]),t._v(" "),a("p",[t._v("The domain name of the deployment site.")]),t._v(" "),a("h2",{attrs:{id:"baselang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baselang"}},[t._v("#")]),t._v(" baseLang")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("'en-US'")])])]),t._v(" "),a("p",[t._v("The language of the home directory.")]),t._v(" "),a("h2",{attrs:{id:"channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[t._v("#")]),t._v(" channel")]),t._v(" "),a("p",[a("code",[t._v("channel")]),t._v(" option is used to config "),a("em",[t._v("Feed Channels")]),t._v(".")]),t._v(" "),a("p",[t._v("For available options, please see "),a("RouterLink",{attrs:{to:"/config/channel.html"}},[t._v("Config → Channel")])],1),t._v(" "),a("h2",{attrs:{id:"filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" filter")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("(pageA: Page)=> boolean")])]),t._v(" "),a("li",[t._v("Default: All feed items")])]),t._v(" "),a("p",[t._v("A custom filter funciton, used to filter feed items.")]),t._v(" "),a("h2",{attrs:{id:"sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[t._v("#")]),t._v(" sort")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("(pageA: Page, pageB: page)=> number")])])]),t._v(" "),a("p",[t._v("A custom sort function, used to sort feed items.")]),t._v(" "),a("p",[t._v("The final feed items will be the same squence.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("We strongly recommend you to set this option, otherwise the order of items in the feed stream is completely determined by the order of pages output by VuePress.")]),t._v(" "),a("p",[t._v("You can sort the pages in the site according to your needs.")])]),t._v(" "),a("h2",{attrs:{id:"count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#count"}},[t._v("#")]),t._v(" count")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("Default: All feed items count")])]),t._v(" "),a("p",[t._v("Set the maximum number of items in the feed. After setting, after all pages are sorted, the first "),a("code",[t._v("count")]),t._v(" items will be intercepted.")]),t._v(" "),a("p",[t._v("If your site has a lot of articles, you may want to consider setting this option to reduce the feed file size.")]),t._v(" "),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" output")]),t._v(" "),a("p",[t._v("Feed output configuration")]),t._v(" "),a("h3",{attrs:{id:"output-atom-enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-atom-enable"}},[t._v("#")]),t._v(" output.atom.enable")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("true")])])]),t._v(" "),a("p",[t._v("Whether enable Atom output")]),t._v(" "),a("h3",{attrs:{id:"output-atom-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-atom-path"}},[t._v("#")]),t._v(" output.atom.path")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("atom.xml")])])]),t._v(" "),a("p",[t._v("Atom Feed output location")]),t._v(" "),a("h3",{attrs:{id:"output-json-enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-json-enable"}},[t._v("#")]),t._v(" output.json.enable")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("true")])])]),t._v(" "),a("p",[t._v("Whether enable JSON output")]),t._v(" "),a("h3",{attrs:{id:"output-json-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-json-path"}},[t._v("#")]),t._v(" output.json.path")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("feed.json")])])]),t._v(" "),a("p",[t._v("JSON Feed output location")]),t._v(" "),a("h3",{attrs:{id:"output-rss-enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-rss-enable"}},[t._v("#")]),t._v(" output.rss.enable")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("true")])])]),t._v(" "),a("p",[t._v("Whether enable RSS output")]),t._v(" "),a("h3",{attrs:{id:"output-rss-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-rss-path"}},[t._v("#")]),t._v(" output.rss.path")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("rss.xml")])])]),t._v(" "),a("p",[t._v("RSS Feed output location")])])}),[],!1,null,null,null);e.default=s.exports}}]);
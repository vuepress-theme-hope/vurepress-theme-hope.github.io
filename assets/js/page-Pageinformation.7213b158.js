(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{569:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"page-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-information"}},[t._v("#")]),t._v(" Page information")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("<PageInfo />")]),t._v(" component support local config"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn1"}},[t._v("[1]")]),e("a",{staticClass:"footnote-anchor",attrs:{id:"fnref1"}})]),t._v(", and is enabled globally by default. You can disable it by setting "),e("code",[t._v("pageInfo: false")]),t._v(" in "),e("code",[t._v("Front Matter")]),t._v(" of a specific page.")]),t._v(" "),e("p",[t._v("To keep it globally disabled, please set "),e("code",[t._v("pageInfo")]),t._v(" to "),e("code",[t._v("false")]),t._v(" in the plugin options. In this way you can set "),e("code",[t._v("pageInfo")]),t._v(" in "),e("code",[t._v("Front Matter")]),t._v(" of a specific page to enable it locally.")]),t._v(" "),e("h2",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters "),e("MyBadge",{attrs:{text:"Support page config"}})],1),t._v(" "),e("p",[e("code",[t._v("pageInfo")]),t._v(" accepts an array of strings by default, filling in a group of items. The order of filling is the order in which the items are displayed.")]),t._v(" "),e("p",[t._v("The optional values ​​and corresponding contents of the entry are as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Entry")]),t._v(" "),e("th",[t._v("Corresponding content")]),t._v(" "),e("th",[t._v("page frontmatter value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("'author'")])]),t._v(" "),e("td",[t._v("author")]),t._v(" "),e("td",[t._v("author")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'time'")])]),t._v(" "),e("td",[t._v("Writing Date")]),t._v(" "),e("td",[t._v("time")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'category'")])]),t._v(" "),e("td",[t._v("Category")]),t._v(" "),e("td",[t._v("category")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'tag'")])]),t._v(" "),e("td",[t._v("tags")]),t._v(" "),e("td",[t._v("tags")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'readtime'")])]),t._v(" "),e("td",[t._v("Estimated reading time")]),t._v(" "),e("td",[t._v("N / A (automatically generated)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'word'")])]),t._v(" "),e("td",[t._v("Word count")]),t._v(" "),e("td",[t._v("N / A (automatically generated)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'visitor'")])]),t._v(" "),e("td",[t._v("Visits")]),t._v(" "),e("td",[t._v("visitor (only Valine is available)")])])])]),t._v(" "),e("p",[t._v('By default it will display "Author, Visit Number, Writing Date, Category, Tags, Expect Reading Time".')]),t._v(" "),e("h3",{attrs:{id:"author"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" author "),e("MyBadge",{attrs:{text:"Support page config"}})],1),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mr.Hope")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("You can configure "),e("code",[t._v("author")]),t._v(" in the plugin options to set the default author. And you can also configure "),e("code",[t._v("author")]),t._v(" in frontmatter with a new value in the page to override the default author, or set it to "),e("code",[t._v("false")]),t._v(" to cancel the author display.")]),t._v(" "),e("h3",{attrs:{id:"writing-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-time"}},[t._v("#")]),t._v(" Writing time")]),t._v(" "),e("p",[t._v("We recommended to fill it with a standard date format. A standard format is in the form of "),e("code",[t._v("xxxx-xx-xx")]),t._v(', such as "April 1, 2020" should be written as '),e("code",[t._v("2020-04-01")]),t._v(".")]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("time")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2020-01-01")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"category-and-tags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#category-and-tags"}},[t._v("#")]),t._v(" Category and Tags")]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/guide/feature/blog.html"}},[t._v("blog section")]),t._v(" for details")],1),t._v(" "),e("h3",{attrs:{id:"reading-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-time"}},[t._v("#")]),t._v(" Reading time")]),t._v(" "),e("p",[t._v("The default statistic method is 300 words per minute. You can override it by setting "),e("code",[t._v("wordPerminute")]),t._v(" in the plugin configuration. This option does not support individual configuration on the page.")]),t._v(" "),e("h3",{attrs:{id:"view-count"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-count"}},[t._v("#")]),t._v(" View Count "),e("MyBadge",{attrs:{text:"Support page config"}})],1),t._v(" "),e("p",[t._v("When "),e("RouterLink",{attrs:{to:"/guide/feature/comment.html"}},[t._v("Comment Function")]),t._v(" is configured as Valine, this function is enabled by default.")],1),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("visitor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("hr",{staticClass:"footnotes-sep"}),t._v(" "),e("section",{staticClass:"footnotes"},[e("ol",{staticClass:"footnotes-list"},[e("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[e("p",[e("strong",[t._v("Apply Partically Support")])]),t._v(" "),e("p",[e("strong",[t._v("Support local configuration")]),e("MyBadge",{attrs:{text:"Support page config"}}),t._v(" means that the theme allows the configuration of the page to override the global configuration.")],1),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example")]),t._v(" "),e("p",[t._v("Take path navigation as an example:")]),t._v(" "),e("p",[t._v("This feature is enabled globally by default, that is, "),e("code",[t._v("themeConfig.breadcrumb")]),t._v(" is "),e("code",[t._v("true")]),t._v(" by default, and you can set "),e("code",[t._v("breadcrumb: false")]),t._v(" in the Front Matter of a specific page to disable it locally.")]),t._v(" "),e("p",[t._v("Of course, you can also set the "),e("code",[t._v("themeConfig.breadcrumb")]),t._v(" option to "),e("code",[t._v("false")]),t._v(" to disable it globally, and set "),e("code",[t._v("breadcrumb: true")]),t._v(" in the Front Matter of a specific page to enable it locally.")])]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
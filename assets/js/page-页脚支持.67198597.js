(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{656:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("vuepress-theme-hope 为所有页面提供了页脚功能"),s("Badge",{attrs:{text:"支持页面配置"}}),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"全局配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[t._v("#")]),t._v(" 全局配置")]),t._v(" "),s("p",[t._v("在主题配置中，"),s("code",[t._v("footer")]),t._v(" 字段用于全局配置页脚。你可以在 "),s("code",[t._v("themeConfig")]),t._v(" 中设置 "),s("code",[t._v("footer.content")]),t._v(" 和 "),s("code",[t._v("footer.copyright")]),t._v(" 全局设置默认的页脚内容与版权信息。")]),t._v(" "),s("p",[t._v("默认情况下页脚不会显示在页面中。如果希望每个页面都显示页脚，需要将 "),s("code",[t._v("themeConfig.footer.display")]),t._v(" 设置为 "),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"页面配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面配置"}},[t._v("#")]),t._v(" 页面配置")]),t._v(" "),s("p",[t._v("你可以在页面的 frontmatter 中配置 "),s("code",[t._v("footer")]),t._v("，"),s("code",[t._v("copyrightText")]),t._v(" 与 "),s("code",[t._v("medialink")]),t._v(" 字段，指定特定页面的页脚内容。")]),t._v(" "),s("h3",{attrs:{id:"footer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[t._v("#")]),t._v(" footer")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当 "),s("code",[t._v("themeConfig.footer.display")]),t._v(" 为 "),s("code",[t._v("true")]),t._v(" 时，你可以在 frontmatter 中将 "),s("code",[t._v("footer")]),t._v(" 设置为 "),s("code",[t._v("false")]),t._v(" 来禁用特定页面的页脚。")])]),t._v(" "),s("li",[s("p",[t._v("当全局显示页脚未开启时，将 "),s("code",[t._v("footer")]),t._v(" 设置为 "),s("code",[t._v("true")]),t._v(" 会显示默认的页脚文字。")])]),t._v(" "),s("li",[s("p",[t._v("如果你填入一个字符串，它会以 "),s("code",[t._v("v-html")]),t._v(" 指令的形式插入到页脚的位置作为页脚的内容，所以你可以填入 HTMLString。")])])]),t._v(" "),s("h3",{attrs:{id:"copyrighttext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyrighttext"}},[t._v("#")]),t._v(" copyrightText")]),t._v(" "),s("p",[s("code",[t._v("copyrightText")]),t._v(" 字段用于设置特定页面的版权信息，它同样也支持 HTMLString (当你引用了文章且文章使用了特定许可的情况下很有用)。")]),t._v(" "),s("p",[t._v("当然在 "),s("code",[t._v("themeConfig.footer.display")]),t._v(" 为 "),s("code",[t._v("true")]),t._v(" 时，你也可以填入 "),s("code",[t._v("false")]),t._v(" 来隐藏特定页面的版权信息。")]),t._v(" "),s("h3",{attrs:{id:"medialink"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#medialink"}},[t._v("#")]),t._v(" medialink")]),t._v(" "),s("p",[t._v("该字段同 "),s("code",[t._v("themeConfig.blog.links")]),t._v(" ("),s("RouterLink",{attrs:{to:"/zh/guide/blog/blog.html#可配置的项目"}},[t._v("具体配置见此")]),t._v(")，你可以在特定页面配置它以展示不同的社交媒体链接，你也可以填入 "),s("code",[t._v("false")]),t._v(" 来隐藏它。")],1),t._v(" "),s("h2",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("启用默认的页脚文字:")]),t._v(" "),s("div",{staticClass:"language-md line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token front-matter-block"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("自定义页脚文字，同时不显示版权信息和媒体链接")]),t._v(" "),s("div",{staticClass:"language-md line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token front-matter-block"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" This website is served by GitHub Pages\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copyrightText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("medialink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("自定义页脚的内容和版权信息与媒体链接")]),t._v(" "),s("div",{staticClass:"language-md line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token front-matter-block"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' <a href="https'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/Mister"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('Hope"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("Mr.Hope</a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copyrightText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MIT LICENSE\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("medialink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Zhihu")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//zhihu.com")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("当你在主题中设置了 "),s("code",[t._v("footer.display")]),t._v(" 为 "),s("code",[t._v("true")]),t._v(" 时，你还可以局部禁用它")]),t._v(" "),s("div",{staticClass:"language-md line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token front-matter-block"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("如果你希望移除默认的 footer 内容同时保持社交媒体与版权信息显示，请传入一个空字符串。")]),t._v(" "),s("div",{staticClass:"language-md line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token front-matter-block"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
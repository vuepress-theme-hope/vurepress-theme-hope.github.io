(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{526:function(t,s,a){"use strict";a.r(s);var e=a(1),i=function(t){t.options.__data__block__={flowchart_64a570de:"cond=>condition: Process?\nprocess=>operation: Process\ne=>end: End\n\ncond(yes)->process->e\ncond(no)->e",presentation_64a56fec:"\n## Slide 1\n\nA paragraph with some text and a [link](https://mrhope.site)\n\n---\n\n## Slide 2\n\n- Item 1\n- Item 2\n\n---\n\n## Slide 3.1\n\n```js\nconst a = 1;\n```\n\n--\n\n## Slide 3.2\n\n$$\nJ(\\theta_0,\\theta_1) = \\sum_{i=0}\n$$\n"}},n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"markdown-enhance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-enhance"}},[t._v("#")]),t._v(" Markdown Enhance")]),t._v(" "),a("p",[a("code",[t._v("vuepress-theme-hope")]),t._v(" enables more syntax in Markdown via the built-in "),a("a",{attrs:{href:"https://vuepress-theme-hope.github.io/md-enhance",target:"_blank",rel:"noopener noreferrer"}},[t._v("md-enhance"),a("OutboundLink")],1),t._v(" plugin.")]),t._v(" "),a("p",[a("code",[t._v("themeconfig.mdEnhance")]),t._v(" in "),a("code",[t._v(".vuepress/config.js")]),t._v(" will be passed directly to the plugin as a plugin option. Visit "),a("a",{attrs:{href:"https://vuepress-theme-hope.github.io/md-enhance",target:"_blank",rel:"noopener noreferrer"}},[t._v("md-enhance documentation"),a("OutboundLink")],1),t._v(" to see the usage.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),a("p",[t._v("Don’t worry about the size of your site. If you don’t enable related features, the final code won’t include code for these features.")]),t._v(" "),a("p",[t._v("At the same time, VuePress itself adds some Markdown syntaxes. You can "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("view the official documentation"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"enable-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-all"}},[t._v("#")]),t._v(" Enable all")]),t._v(" "),a("p",[t._v("You can set "),a("code",[t._v("themeconfig.mdEnhance.enableAll")]),t._v(" to enable all features of the "),a("a",{attrs:{href:"https://vuepress-theme-hope.github.io/md-enhance",target:"_blank",rel:"noopener noreferrer"}},[t._v("md-enhance"),a("OutboundLink")],1),t._v(" plugin.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mdEnhance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      enableAll"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),a("p",[t._v("Please use this option ONLY for playing or testing.")]),t._v(" "),a("p",[t._v("As time grows,"),a("code",[t._v("vupress-plugin-md-enhance")]),t._v(" is becoming more powerful. It’s adding more syntax to Markdown parser and more code to output.")]),t._v(" "),a("p",[t._v("Enabling features you don’t need will increase dev and build time. ("),a("code",[t._v("markdown-it")]),t._v(" has to check for extra syntaxs)")]),t._v(" "),a("p",[t._v("Also, presentation feature will add a 700KB size chunk (mostly is "),a("code",[t._v("reveal.js")]),t._v(") to your output.")]),t._v(" "),a("p",[t._v("Please use the options below and enable ONLY the feature you want to use.")])]),t._v(" "),a("h2",{attrs:{id:"new-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-feature"}},[t._v("#")]),t._v(" New Feature")]),t._v(" "),a("h3",{attrs:{id:"superscript-and-subscript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#superscript-and-subscript"}},[t._v("#")]),t._v(" Superscript and Subscript")]),t._v(" "),a("p",[t._v("19"),a("sup",[t._v("th")]),t._v(" H"),a("sub",[t._v("2")]),t._v("O")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/feature/markdown/sup-sub.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"align"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align"}},[t._v("#")]),t._v(" Align")]),t._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[t._v("I am center")])]),t._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[t._v("I am right align")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/feature/markdown/align.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"footnote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footnote"}},[t._v("#")]),t._v(" Footnote")]),t._v(" "),a("p",[t._v("This text has footnote"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1"}},[t._v("[1]")]),a("a",{staticClass:"footnote-anchor",attrs:{id:"fnref1"}})]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/feature/markdown/footnote.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"mark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mark"}},[t._v("#")]),t._v(" Mark")]),t._v(" "),a("p",[t._v("You can mark "),a("mark",[t._v("important words")]),t._v(" .")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/feature/markdown/mark.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"flowchart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flowchart"}},[t._v("#")]),t._v(" Flowchart")]),t._v(" "),a("FlowChart",{attrs:{id:"flowchart_64a570de",code:t.$dataBlock.flowchart_64a570de,preset:"vue"}}),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/feature/markdown/flowchart.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"tex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tex"}},[t._v("#")]),t._v(" Tex")]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mfrac",[a("msup",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("∂")]),a("mi",[t._v("r")])],1),a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("∂")]),a("msup",[a("mi",[t._v("ω")]),a("mi",[t._v("r")])],1)],1)],1),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("mfrac",[a("msup",[a("mi",[t._v("y")]),a("mi",[t._v("ω")])],1),a("mi",[t._v("ω")])],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1),a("mo",[t._v("=")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("mfrac",[a("msup",[a("mi",[t._v("y")]),a("mi",[t._v("ω")])],1),a("mi",[t._v("ω")])],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("{")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("log")]),a("mo",[t._v("⁡")]),a("mi",[t._v("y")]),a("msup",[a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mi",[t._v("r")])],1),a("mo",[t._v("+")]),a("munderover",[a("mo",[t._v("∑")]),a("mrow",[a("mi",[t._v("i")]),a("mo",[t._v("=")]),a("mn",[t._v("1")])],1),a("mi",[t._v("r")])],1),a("mfrac",[a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("msup",[a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mi",[t._v("i")])],1),a("mi",[t._v("r")]),a("mo",[t._v("⋯")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("r")]),a("mo",[t._v("−")]),a("mi",[t._v("i")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("log")]),a("mo",[t._v("⁡")]),a("mi",[t._v("y")]),a("msup",[a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mrow",[a("mi",[t._v("r")]),a("mo",[t._v("−")]),a("mi",[t._v("i")])],1)],1)],1),a("msup",[a("mi",[t._v("ω")]),a("mi",[t._v("i")])],1)],1),a("mo",{attrs:{fence:"true"}},[t._v("}")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)\n= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.40003em","vertical-align":"-0.95003em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.37144em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord",staticStyle:{"margin-right":"0.05556em"}},[t._v("∂")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.590392em"}},[a("span",{staticStyle:{top:"-2.9890000000000003em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])])])])])])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord",staticStyle:{"margin-right":"0.05556em"}},[t._v("∂")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.664392em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[t._v("(")])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.341392em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.664392em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")])])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[t._v(")")])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"3.027669em","vertical-align":"-1.277669em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[t._v("(")])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.341392em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.664392em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")])])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[t._v(")")])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size4"},[t._v("{")])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mop"},[t._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.7143919999999999em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.6513970000000002em"}},[a("span",{staticStyle:{top:"-1.872331em","margin-left":"0em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mrel mtight"},[t._v("=")]),a("span",{staticClass:"mord mtight"},[t._v("1")])])])]),a("span",{staticStyle:{top:"-3.050005em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",[a("span",{staticClass:"mop op-symbol large-op"},[t._v("∑")])])]),a("span",{staticStyle:{top:"-4.3000050000000005em","margin-left":"0em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.277669em"}},[a("span")])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.5016639999999999em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.750664em"}},[a("span",{staticStyle:{top:"-2.9890000000000003em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])])])])])])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.824664em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])])])])])]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[t._v("⋯")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mop"},[t._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.824664em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mbin mtight"},[t._v("−")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size4"},[t._v("}")])])])])])])])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/feature/markdown/tex.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"code-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-demo"}},[t._v("#")]),t._v(" Code Demo")]),t._v(" "),a("div",{staticClass:"code-demo-wrapper",attrs:{id:"code-demo-c2e8c0dc","data-title":"A%20normal%20demo","data-code":"%7B%22html%22%3A%22%3Ch1%3EMr.Hope%3C%2Fh1%3E%5Cn%3Cp%3EIs%20%3Cspan%20id%3D%5C%22very%5C%22%3Every%3C%2Fspan%3E%20handsome%3C%2Fp%3E%5Cn%22%2C%22js%22%3A%22document.querySelector(%5C%22%23very%5C%22).addEventListener(%5C%22click%5C%22%2C%20()%20%3D%3E%20%7B%5Cn%20%20alert(%5C%22Very%20handsome!%5C%22)%3B%5Cn%7D)%3B%5Cn%22%2C%22css%22%3A%22span%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%22%7D"}},[a("div",{staticClass:"demo-wrapper"},[a("div",{staticClass:"code-demo-app"})]),t._v(" "),a("div",{staticClass:"code-wrapper"},[a("div",{staticClass:"code"},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Mr.Hope"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Is "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("very"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("very"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" handsome"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#very"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Very handsome!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])]),t._v(" "),a("div",{staticClass:"code-demo-footer"})]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/feature/markdown/demo.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"presentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#presentation"}},[t._v("#")]),t._v(" Presentation")]),t._v(" "),a("Presentation",{key:"presentation_64a56fec",attrs:{id:"presentation_64a56fec",code:t.$dataBlock.presentation_64a56fec,theme:"auto"}}),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/feature/markdown/presentation.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("hr",{staticClass:"footnotes-sep"}),t._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[t._v("This is footnote content "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])])])])],1)}),[],!1,null,null,null);"function"==typeof i&&i(n);s.default=n.exports}}]);
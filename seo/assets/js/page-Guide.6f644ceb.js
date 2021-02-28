(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{453:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("This plugin will inject the "),a("code",[t._v("<meta>")]),t._v(" tag to enhance the search engine optimization of the website.")]),t._v(" "),a("h2",{attrs:{id:"out-of-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#out-of-box"}},[t._v("#")]),t._v(" Out of box")]),t._v(" "),a("p",[t._v("The plugin is used out of the box. Without any configuration, it will extract the corresponding information from the page content to generate the "),a("code",[t._v("<meta>")]),t._v(" tag as much as possible.")]),t._v(" "),a("p",[t._v("By default, the plugin will read the site configuration, theme configuration and page frontmatter to automatically generate "),a("code",[t._v("<meta>")]),t._v(" tags as much as possible. Such as site name, page title, page type, writing date, last update date, and article tags are all automatically generated.")]),t._v(" "),a("p",[t._v("The following are the "),a("code",[t._v("<meta>")]),t._v(" tags and their values that will be injected into "),a("code",[t._v("<head>")]),t._v(" by default:")]),t._v(" "),a("p",[t._v("| property | content |\n| :----------------------: | :-------------------------------------------------------------------: | | |\n| "),a("code",[t._v("og:url")]),t._v(" | "),a("code",[t._v("themeConfig.hostname")]),t._v(" + "),a("code",[t._v("path")]),t._v(" |\n| "),a("code",[t._v("og:site_name")]),t._v(" | "),a("code",[t._v("$site.title")]),t._v(" |\n| "),a("code",[t._v("og:title")]),t._v(" | "),a("code",[t._v("$page.title")]),t._v(" |\n| "),a("code",[t._v("og:description")]),t._v(" | "),a("code",[t._v("$page.frontmatter.description")]),t._v(" |\n| "),a("code",[t._v("og:type")]),t._v(" | "),a("code",[t._v("'article'")]),t._v(" |\n| "),a("code",[t._v("og:image")]),t._v(" | "),a("code",[t._v("themeConfig.hostname")]),t._v(" + "),a("code",[t._v("$page.frontmatter.image")]),t._v(" |\n| "),a("code",[t._v("og:updated_time")]),t._v(" | "),a("code",[t._v("$page.lastUpdatedTime")]),t._v(" |\n| "),a("code",[t._v("og:locale")]),t._v(" | "),a("code",[t._v("$page._computed.$lang")]),t._v(" |\n| "),a("code",[t._v("og:locale:alternate")]),t._v(" | Other languages including in "),a("code",[t._v("$themeConfig.locales")]),t._v(" |\n| "),a("code",[t._v("twitter:card")]),t._v(" | "),a("code",[t._v("'summary_large_image'")]),t._v(" |\n| "),a("code",[t._v("twitter:image:alt")]),t._v(" | "),a("code",[t._v("$site.title")]),t._v(" |\n| "),a("code",[t._v("article:author")]),t._v(" | "),a("code",[t._v("$page.frontmatter.author | | themeConfig.author")]),t._v(" |\n| "),a("code",[t._v("article:tag")]),t._v(" | "),a("code",[t._v("$page.frontmatter.tags | | $page.frontmatter.tag")]),t._v(" |\n| "),a("code",[t._v("article:published_time")]),t._v(" | "),a("code",[t._v("$page.frontmatter.time | | $page.frontmatter.date")]),t._v(" |\n| "),a("code",[t._v("article:modified_time")]),t._v(" | "),a("code",[t._v("$page.lastUpdatedTime")]),t._v(" |")]),t._v(" "),a("h2",{attrs:{id:"free-customization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#free-customization"}},[t._v("#")]),t._v(" Free customization")]),t._v(" "),a("p",[t._v("You can configure the "),a("code",[t._v("meta")]),t._v(" option in the frontmatter of the page to customize the content of the "),a("code",[t._v("<meta>")]),t._v(" tag of a specific page for SEO.")]),t._v(" "),a("p",[t._v("E.g.:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[t._v("meta:\n  - name: keywords\n    content: SEO plugin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Will automatically inject "),a("code",[t._v('<meta name="keywords" content="SEO plugin" />')]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"customize-generation-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customize-generation-process"}},[t._v("#")]),t._v(" Customize generation process")]),t._v(" "),a("p",[t._v("This plugin also allows you to fully control the generation logic of "),a("code",[t._v("<meta>")]),t._v(" tags.")]),t._v(" "),a("h3",{attrs:{id:"seo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seo"}},[t._v("#")]),t._v(" seo")]),t._v(" "),a("p",[t._v("You can use the "),a("code",[t._v("seo")]),t._v(" of the plugin option to pass in a function to inject a new "),a("code",[t._v("<meta>")]),t._v(" tag or override the default generated content in the "),a("a",{attrs:{href:"#out-of-box"}},[t._v("Out of box")]),t._v(" section. You need to return an object in the format of "),a("code",[t._v("<property>: <content>")]),t._v(".")]),t._v(" "),a("p",[t._v("For example, if you return "),a("code",[t._v("{'og:url':'google.com','og:image':'google.com/logo.jpg' }")]),t._v(", the plugin will inject the following content into "),a("code",[t._v("<head>")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("og:url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("google.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("og:image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("google.com/logo.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"custommeta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custommeta"}},[t._v("#")]),t._v(" customMeta")]),t._v(" "),a("p",[t._v("When the "),a("code",[t._v("<meta>")]),t._v(" you need to inject does not use "),a("code",[t._v("property")]),t._v(" and "),a("code",[t._v("content")]),t._v(", or you want to remove the existing meta, you can pass in a custom generation function to the plugin option "),a("code",[t._v("customMeta")]),t._v(" to completely customize the "),a("code",[t._v("<meta>")]),t._v(" tag .")]),t._v(" "),a("p",[t._v("The structure of "),a("code",[t._v("customMeta")]),t._v(" is "),a("code",[t._v("(meta: Meta[], info: PageSeoInfo) => void")])]),t._v(" "),a("p",[t._v("Interface of "),a("code",[t._v("PageSeoInfo")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageSeoInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Current Page Object */")]),t._v("\n  page"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Vuepress Config  */")]),t._v("\n  site"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SiteConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Current ThemeConfig */")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ThemeConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Record"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** langs which are supported */")]),t._v("\n  locale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Current page path */")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("The type of "),a("code",[t._v("Meta")]),t._v(" is "),a("code",[t._v('Record<"content" | "name" | "charset" | "http-equiv", string>')]),t._v(", the key of the object will be rendered as the attribute of the "),a("code",[t._v("<meta>")]),t._v(" tag, and the value will be rendered as The value of the corresponding attribute.")]),t._v(" "),a("p",[t._v("E.g.:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageSeoInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"og:type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("Will inject "),a("code",[t._v('<meta a="1" b="2" />')]),t._v(" into the "),a("code",[t._v("<head>")]),t._v(" of the current page, and remove any existing "),a("code",[t._v('<meta property="og:type" />')]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"seo-introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seo-introduction"}},[t._v("#")]),t._v(" SEO Introduction")]),t._v(" "),a("p",[a("strong",[t._v("S")]),t._v("earch "),a("strong",[t._v("e")]),t._v("ngine "),a("strong",[t._v("optimization")]),t._v(' (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic (known as "natural" or "organic" results) rather than direct traffic or paid traffic. Unpaid traffic may originate from different kinds of searches, including image search, video search, academic search, news search, and industry-specific vertical search engines.')]),t._v(" "),a("p",[t._v("As an Internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a website will receive more visitors from a search engine when websites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.")]),t._v(" "),a("h2",{attrs:{id:"related-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-documents"}},[t._v("#")]),t._v(" Related documents")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open Content Protocol OGP"),a("OutboundLink")],1),t._v(" ("),a("strong",[t._v("O")]),t._v("pen "),a("strong",[t._v("G")]),t._v("raph "),a("strong",[t._v("Pr")]),t._v("otocal)")]),t._v(" "),a("p",[t._v("This plugin perfectly supports this protocol and will automatically generate "),a("code",[t._v("<meta>")]),t._v(" tags that conform to the protocol.")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON-LD 1.1"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Since VuePress does not provide plugins or themes to inject "),a("code",[t._v("<script>")]),t._v(" into the "),a("code",[t._v("<head>")]),t._v(" tag of SSR rendered content, JSON-LD cannot be implemented.")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RDFa 1.1"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("RDFa mainly marks HTML structure. This is what the plugin cannot support. "),a("a",{attrs:{href:"https://vuepress-theme-hope.github.io/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-hope"),a("OutboundLink")],1),t._v(" uses this feature to pass Google's rich media structure test. You can consider using it.")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://schema.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schema.Org"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Schema definition site for structural markup")])])]),t._v(" "),a("h2",{attrs:{id:"related-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-tools"}},[t._v("#")]),t._v(" Related tools")]),t._v(" "),a("p",[t._v("You can use "),a("a",{attrs:{href:"https://search.google.com/test/rich-results",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Rich Media Structure Test Tool"),a("OutboundLink")],1),t._v(" to test this site.")])])}),[],!1,null,null,null);e.default=n.exports}}]);
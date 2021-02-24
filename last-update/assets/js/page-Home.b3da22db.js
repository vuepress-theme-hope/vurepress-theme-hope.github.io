(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{504:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("This plugin will use git to inject a readable last update time and a last update time timestamp into the page.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Why use this plugin")]),t._v(" "),a("p",[t._v("The internationalization support of the official plugin is not good, this plugin provides better multi-language support.")])]),t._v(" "),a("h2",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),a("h3",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"yarn"}},[a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @mr-hope/vuepress-plugin-last-update\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("CodeGroupItem",{attrs:{title:"npm"}},[a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D @mr-hope/vuepress-plugin-last-update\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])],1),t._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/last-updated"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@mr-hope/last-update"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("You must disable the official plugin!")])]),t._v(" "),a("h2",{attrs:{id:"plugin-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-description"}},[t._v("#")]),t._v(" Plugin description")]),t._v(" "),a("p",[t._v("To let the plugin work, your docs should be a git project, the plugin will automatically read the file’s last commit time and inject it into "),a("code",[t._v("lastUpdated")]),t._v(" in a localized form. At the same time, it will inject a timestamp in "),a("code",[t._v("lastUpdatedTime")]),t._v(" for use by other plugins.")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h3",{attrs:{id:"timezone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timezone"}},[t._v("#")]),t._v(" timezone")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Required: No")])]),t._v(" "),a("p",[t._v("Current timezone, useful when you are deploying through CI.")]),t._v(" "),a("blockquote",[a("p",[t._v("For timezone list, please see "),a("a",{attrs:{href:"https://www.zeitverschiebung.net/en/all-time-zones.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Timezone list"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"transformer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transformer"}},[t._v("#")]),t._v(" transformer")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("(timestamp: number, lang: string) => string")])]),t._v(" "),a("li",[t._v("Default value: "),a("code",[t._v("`${dayjs(timestamp).format('LL')} ${dayjs(timestamp).format('HH:mm')}`")])])]),t._v(" "),a("p",[t._v("Time conversion function, by default, will use dayjs to automatically localize according to the current page language.")]),t._v(" "),a("p",[t._v("Such as: "),a("code",[t._v("2020年5月8日 16:05")]),t._v(" "),a("code",[t._v("May 8, 2020 16:05")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);
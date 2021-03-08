(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(t,e,a){},214:function(t,e,a){"use strict";var n=a(0).a.extend({name:"MyTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25}},methods:{setStyle(t){t.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},unsetStyle(t){t.style.transform="translateY(0)",t.style.opacity="1"}}}),r=(a(234),a(1)),i=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"drop",appear:""},on:{appear:this.setStyle,"after-appear":this.unsetStyle,enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},234:function(t,e,a){"use strict";a(208)},301:function(t,e,a){},302:function(t,e,a){},303:function(t,e,a){},304:function(t,e,a){},305:function(t,e,a){},306:function(t,e,a){},307:function(t,e,a){},308:function(t,e,a){},309:function(t,e,a){},414:function(t,e,a){"use strict";a(301)},415:function(t,e,a){"use strict";a(302)},416:function(t,e,a){"use strict";a(303)},417:function(t,e,a){"use strict";a(304)},418:function(t,e,a){"use strict";a(305)},419:function(t,e,a){"use strict";a(306)},420:function(t,e,a){"use strict";a(307)},421:function(t,e,a){"use strict";a(308)},422:function(t,e,a){"use strict";a(309)},451:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(207),i=a(236),s=a(214),o=a(238),l=a(293),c=n.a.extend({name:"Home",components:{MyTransition:s.a,NavLink:o.a},computed:{actionLinks(){const{action:t}=this.$frontmatter;return Array.isArray(t)?t:[t]}},methods:{navigate(t){Object(l.a)(t,this.$router,this.$route)}}}),u=(a(414),a(1)),h=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.$frontmatter.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[a("MyTransition",[t.$frontmatter.heroImage?a("img",{key:"light",class:{light:Boolean(t.$frontmatter.darkHeroImage)},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e(),t._v(" "),t.$frontmatter.darkHeroImage?a("img",{key:"dark",staticClass:"dark",attrs:{src:t.$withBase(t.$frontmatter.darkHeroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),a("div",{staticClass:"hero-info"},[a("MyTransition",{attrs:{delay:.04}},[!1!==t.$frontmatter.heroText?a("h1",{attrs:{id:"main-title"},domProps:{textContent:t._s(t.$frontmatter.heroText||t.$title||"Hello")}}):t._e()]),t._v(" "),a("MyTransition",{attrs:{delay:.08}},[a("p",{staticClass:"description",domProps:{textContent:t._s(t.$frontmatter.tagline||t.$description||"Welcome to your VuePress site")}})]),t._v(" "),a("MyTransition",{attrs:{delay:.12}},[t.$frontmatter.action?a("p",{staticClass:"action"},t._l(t.actionLinks,(function(t){return a("NavLink",{key:t.text,staticClass:"action-button",class:t.type||"",attrs:{item:t}})})),1):t._e()])],1)],1),t._v(" "),a("MyTransition",{attrs:{delay:.16}},[t.$frontmatter.features&&t.$frontmatter.features.length?a("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(e,n){var r;return a("div",{key:n,staticClass:"feature",class:(r={link:e.link},r["feature"+n%9]=!0,r),on:{click:function(a){e.link&&t.navigate(e.link)}}},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e()]),t._v(" "),a("MyTransition",{attrs:{delay:.24}},[a("Content",{staticClass:"theme-default-content custom"})],1)],1)}),[],!1,null,null,null).exports,p=a(215),m=a(191);const d=(t,{text:e,link:a,active:n})=>t("RouterLink",{props:{to:a,activeClass:"",exactActiveClass:""},class:{active:n,"anchor-link":!0}},[t("div",{},[e])]),g=(t,{children:e,path:a,route:n,maxDepth:r,depth:i=2})=>!e||i>r?null:t("ul",{class:"anchor-list"},e.map(e=>{const s=Object(m.e)(n,`${a}#${e.slug}`);return t("li",{class:["anchor","anchor"+i]},[d(t,{text:e.title,link:`${a}#${e.slug}`,active:s}),g(t,{children:e.children||!1,path:a,route:n,maxDepth:r,depth:i+1})])}));var f=n.a.extend({name:"Anchor",functional:!0,render(t,{parent:{$page:e,$route:a,$themeConfig:n,$themeLocaleConfig:r}}){const i=(e.frontmatter.sidebarDepth||r.sidebarDepth||n.sidebarDepth||2)+1,s=Object(p.b)(e.headers||[]);return t("div",{attrs:{class:"anchor-place-holder"}},[t("aside",{attrs:{id:"anchor"}},[t("div",{class:"anchor-wrapper"},[g(t,{children:s,path:a.path,route:a,maxDepth:i})])])])}}),v=(a(415),Object(u.a)(f,void 0,void 0,!1,null,null,null).exports);const $={type:"valine",appId:"2vSLKb0SqFKKWEgrOPGy3sp1-gzGzoHsz",appKey:"vma8Ewk61WeNkI81O3CGpT2i",author:"Mr.Hope"},_={"/zh/":{author:"作者🖊",time:"写作日期📅",origin:"原创💡",views:"访问量🔢",category:"分类🌈",tag:"标签🏷",readingTime:"阅读时间⌛",words:"字数🔠"},"/en/":{author:"Author🖊",time:"Writing Date📅",origin:"Original💡",views:"Page views🔢",category:"Category🌈",tag:"Tags🏷",readingTime:"Reading Time⌛",words:"Words🔠"},"/vi/":{author:"Người viết🖊",time:"Ngày viết📅",origin:"Nguồn💡",views:"Views của trang🔢",category:"Category🌈",tag:"Tags🏷",readingTime:"Thời gian đọc⌛",words:"Words🔠"},"/":{author:"Author🖊",time:"Writing Date📅",origin:"Original💡",views:"Page views🔢",category:"Category🌈",tag:"Tags🏷",readingTime:"Reading Time⌛",words:"Words🔠"}},y={"/zh/":{word:"约 $word 字",minute:"小于 1 分钟",time:"大约 $time 分钟"},"/en/":{word:"About $word words",minute:"Less than 1 minute",time:"About $time min"},"/vi/":{word:"Khoảng $word từ",minute:"Ít hơn 1 phút",time:"Khoảng $time phút"},"/":{word:"About $word words",minute:"Less than 1 minute",time:"About $time min"}},b={"/zh/":"请留言","/en/":"Write a comment here","/vi/":"Để lại bình luận","/":"Write a comment here"};var w=n.a.extend({name:"Valine",props:{valineConfig:{type:Object,required:!0}},computed:{valineEnable(){const{valineConfig:t}=this;return Boolean(t&&t.appId&&t.appKey)},commentDisplay(){if(!this.valineEnable)return!1;const t=!1!==this.valineConfig.comment,e=this.$page.frontmatter.comment;return t&&!1!==e||!0===e},visitorDisplay(){if(!this.valineEnable)return!1;const t=!1!==this.valineConfig.visitor,e=this.$page.frontmatter.visitor;return t&&!1!==e||!0===e}},watch:{$route(t,e){t.path!==e.path&&n.a.nextTick(()=>{this.initValine()})}},mounted(){this.valineEnable&&setTimeout(()=>{this.initValine()},500)},methods:{initValine(){const{valineConfig:t}=this;a.e(18).then(a.t.bind(null,450,7)).then(e=>{(new e.default).init({el:"#valine",appId:t.appId,appKey:t.appKey,placeholder:t.placeholder||b[this.$localePath||"/"],meta:t.meta||["nick","mail","link"],requiredFields:t.requiredFields||["nick"],avatar:t.avatar||"retro",visitor:this.visitorDisplay,recordIP:t.recordIP||!1,path:"undefined"==typeof window?"":window.location.pathname,pageSize:t.pageSize||10,enableQQ:t.enableQQ||!0,emojiCDN:t.emojiCDN||"",emojiMaps:t.emojiMaps,lang:"zh-CN"===this.$lang?"zh-CN":"en"})})}}}),C=(a(416),Object(u.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.commentDisplay,expression:"commentDisplay"}],staticClass:"valine-wrapper"},[e("div",{attrs:{id:"valine"}})])}),[],!1,null,null,null).exports),x=n.a.extend({name:"Comment",components:{Valine:C},data:()=>({options:$}),computed:{pluginEnable(){return"disable"!==this.options.type&&(this.$frontmatter.comment||!1!==this.options.comment&&("valine"===this.options.type||!1!==this.$frontmatter.comment))}}}),k=Object(u.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.pluginEnable,expression:"pluginEnable"}],staticClass:"comments-wrapper"},["valine"===this.options.type?e("Valine",{attrs:{"valine-config":this.options}}):"vssue"===this.options.type?e("Vssue",{attrs:{title:this.$title}}):this._e()],1)}),[],!1,null,null,null).exports,T=n.a.extend({name:"PageEdit",computed:{i18n(){return this.$themeLocaleConfig.meta||{contributor:"Contributors",editLink:"Edit this page",updateTime:"Last Updated"}},contributors(){return!1===this.$themeConfig.contributor?[]:this.$page.contributors||[]},contributorsText(){return this.i18n.contributor},updateTime(){return!1===this.$themeConfig.updateTime?"":this.$page.updateTime||""},updateTimeText(){return this.i18n.updateTime},editLink(){const t=this.$page.frontmatter.editLink||!1!==this.$themeConfig.editLinks&&!1!==this.$page.frontmatter.editLink,{repo:e,docsRepo:a}=this.$site.themeConfig;return!(!t||!e&&!a||!this.$page.relativePath)&&this.createEditLink()},editLinkText(){return this.i18n.editLink}},methods:{createEditLink(){const{repo:t="",docsRepo:e=t,docsDir:a="",docsBranch:n="master"}=this.$themeConfig;if(/bitbucket.org/u.test(e))return`${e.replace(m.a,"")}/src/${n}/${a?a.replace(m.a,"")+"/":""}${this.$page.relativePath}?mode=edit&spa=0&at=${n}&fileviewer=file-view-default`;if(/gitlab.com/u.test(e))return`${e.replace(m.a,"")}/-/edit/${n}/${a?a.replace(m.a,"")+"/":""}${this.$page.relativePath}`;return`${(m.j.test(e)?e:"https://github.com/"+e).replace(m.a,"")}/edit/${n}/${a?a.replace(m.a,"")+"/":""}${this.$page.relativePath}`}}}),I=(a(417),Object(u.a)(T,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-meta"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.updateTime?a("div",{staticClass:"meta-item update-time"},[a("span",{staticClass:"label"},[t._v(t._s(t.updateTimeText)+":")]),t._v(" "),a("span",{staticClass:"info"},[t._v(t._s(t.updateTime))])]):t._e(),t._v(" "),t.contributors&&t.contributors.length?a("div",{staticClass:"meta-item contributors"},[a("span",{staticClass:"label"},[t._v(t._s(t.contributorsText)+": ")]),t._v(" "),a("span",{staticClass:"info"},[t._l(t.contributors,(function(e,n){return[a("span",{key:n,staticClass:"contributor",attrs:{title:"email: "+e.email}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n!==t.contributors.length-1?[t._v(", ")]:t._e()]}))],2)]):t._e()])}),[],!1,null,null,null).exports),P=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon author-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,O=n.a.extend({name:"AuthorInfo",components:{AuthorIcon:P},data:()=>({commentOption:$}),computed:{author(){const{author:t}=this.$frontmatter;return t||(!1===t?"":this.commentOption.author||"")},hint(){return _[this.$localePath||"/"].author}}}),E=Object(u.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return this.author?e("span",{attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[e("AuthorIcon"),this._v(" "),e("span",{attrs:{property:"author"},domProps:{textContent:this._s(this.author)}})],1):this._e()}),[],!1,null,null,null).exports,j=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon category-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,L=a(199),M=n.a.extend({name:"CategoryInfo",components:{CategoryIcon:j},props:{category:{type:String,default:""}},computed:{categoryName(){if(this.category)return Object(L.a)(this.category);const{category:t}=this.$frontmatter;return t?Object(L.a)(t):""},canUse(){return!1!==this.$themeConfig.blog},hint(){return _[this.$localePath||"/"].category}},methods:{navigate(){const t=`/category/${this.categoryName}/`;this.canUse&&this.$route.path!==t&&this.$router.push(t)}}}),A=(a(418),Object(u.a)(M,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.categoryName?a("span",{staticClass:"category-info",class:{enable:t.canUse},attrs:{role:t.canUse?"navigation":"","aria-label":t.hint,"data-balloon-pos":"down"},on:{click:t.navigate}},[a("CategoryIcon"),t._v(" "),a("span",{attrs:{property:"articleSection"},domProps:{textContent:t._s(t.categoryName)}})],1):t._e()}),[],!1,null,null,null).exports),z=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon time-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093l-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0",fill:"currentColor"}})])}),[],!1,null,null,null).exports,N=n.a.extend({name:"ReadingTimeInfo",components:{TimeIcon:z},computed:{readingTime(){return`PT${Math.max(Math.round(this.$page.readingTime.minutes),1)}M`},text(){const t=y[this.$localePath||"/"].minute,e=y[this.$localePath||"/"].time;return this.$page.readingTime.minutes<1?t:e.replace("$time",Math.round(this.$page.readingTime.minutes).toString())},hint(){return _[this.$localePath||"/"].readingTime}}}),D=Object(u.a)(N,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.text?a("span",{staticClass:"reading-time-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[a("TimeIcon"),t._v(" "),a("span",{domProps:{textContent:t._s(t.text)}}),t._v(" "),a("meta",{attrs:{property:"timeRequired",content:t.readingTime}})],1):t._e()}),[],!1,null,null,null).exports,H=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon tag-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,V=n.a.extend({name:"TagInfo",components:{TagIcon:H},props:{tags:{type:Array,default:()=>[]}},computed:{$tags(){if(0!==this.tags.length)return this.tags;const{tags:t,tag:e=t}=this.$frontmatter;return"string"==typeof e?[Object(L.a)(e)]:Array.isArray(e)?e.map(t=>Object(L.a)(t)):[]},clickable(){return!1!==this.$themeConfig.blog},hint(){return _[this.$localePath||"/"].tag}},methods:{navigate(t){const e=`/tag/${t}/`;this.$route.path!==e&&this.$router.push(e)}}}),B=(a(419),Object(u.a)(V,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return 0!==t.$tags.length?a("span",{attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[a("TagIcon"),t._v(" "),a("ul",{staticClass:"tags-wrapper"},[t._l(t.$tags,(function(e,n){var r;return a("li",{key:e,staticClass:"tag",class:(r={clickable:t.clickable},r["tag"+n%9]=!0,r),on:{click:function(a){return t.navigate(e)}}},[a("span",{attrs:{role:t.clickable?"navigation":""},domProps:{textContent:t._s(e)}})])})),t._v(" "),a("meta",{attrs:{property:"keywords",content:t.$tags.join(",")}})],2)],1):t._e()}),[],!1,null,null,null).exports),S=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon calendar-icon",attrs:{viewBox:"0 0 1030 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,W=n.a.extend({name:"TimeInfo",components:{CalendarIcon:S},computed:{time(){const{date:t,time:e=t}=this.$frontmatter;if("string"==typeof e){if(-1!==e.indexOf("T")){const[t,a]=e.split("T"),[n]=a.split(".");return`${t} ${"00:00:00"===n?"":n}`}return e}return this.$page.createTime||""},hint(){return _[this.$localePath||"/"].time}}}),R=Object(u.a)(W,(function(){var t=this.$createElement,e=this._self._c||t;return this.time?e("span",{staticClass:"time-info",attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[e("CalendarIcon"),this._v(" "),e("span",{attrs:{property:"datePublished"},domProps:{textContent:this._s(this.time)}})],1):this._e()}),[],!1,null,null,null).exports,K=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,q=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,U=n.a.extend({name:"VisitorInfo",components:{EyeIcon:K,FireIcon:q},data:()=>({count:0,valineConfig:$}),computed:{valineEnable(){const{valineConfig:t}=this;return Boolean(t&&"valine"===t.type&&t.appId&&t.appKey)},enableVisitor(){if(!this.valineEnable)return!1;const t=!1!==this.valineConfig.visitor,e=this.$frontmatter.visitor;return t&&!1!==e||Boolean(e)},visitorID(){const{base:t}=this.$site;return t?`${t.slice(0,t.length-1)}${this.$page.path}`:this.$page.path},hint(){return _[this.$localePath||"/"].views}},watch:{$route(t,e){t.path!==e.path&&setTimeout(()=>{this.getCount()},500)}},mounted(){setTimeout(()=>{this.getCount()},1500)},methods:{getCount(){const t=document.querySelector(".leancloud_visitors .leancloud-visitors-count");if(t){const e=t.textContent;e&&!isNaN(Number(e))?this.count=Number(e):setTimeout(()=>{this.getCount()},500)}}}}),F=Object(u.a)(U,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"visitor-info",attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[this.count<1e3?e("EyeIcon"):e("FireIcon"),this._v(" "),e("span",{staticClass:"leancloud_visitors",attrs:{id:this.visitorID,"data-flag-title":this.$page.title}},[e("span",{staticClass:"leancloud-visitors-count"},[this._v("...")])])],1)}),[],!1,null,null,null).exports,Q=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon word-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,G=n.a.extend({name:"ReadTimeInfo",components:{WordIcon:Q},computed:{words(){return y[this.$localePath||"/"].word.replace("$word",this.$page.readingTime.words.toString())},hint(){return _[this.$localePath||"/"].words}}}),J=Object(u.a)(G,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.words?a("span",{staticClass:"words-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[a("WordIcon"),t._v(" "),a("span",{domProps:{textContent:t._s(t.words)}}),t._v(" "),a("meta",{attrs:{property:"wordCount",content:t.$page.readingTime.words}})],1):t._e()}),[],!1,null,null,null).exports,Y=(a(65),n.a.extend({name:"PageInfo",components:{AuthorInfo:E,CategoryInfo:A,ReadingTimeInfo:D,TagInfo:B,TimeInfo:R,VisitorInfo:F,WordInfo:J},data:()=>({commentConfig:$}),computed:{config(){const t=this.$themeConfig.pageInfo,e=this.commentConfig.pageInfo,a=this.$page.frontmatter.pageInfo;return!1!==a&&(Array.isArray(a)?a:!1!==e&&(Array.isArray(e)?e:!1!==t&&(Array.isArray(t)?t:["author","visitor","time","category","tag","reading-time"])))},iconPrefix(){const{iconPrefix:t}=this.$themeConfig;return""===t?"":t||"icon-"},isOriginal(){return!0===this.$frontmatter.original},originText(){return _[this.$localePath||"/"].origin}}})),X=(a(420),Object(u.a)(Y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title",attrs:{vocab:"https://schema.org/",typeof:"Article"}},[a("h1",[t.$frontmatter.icon?a("i",{class:"iconfont "+t.iconPrefix+t.$frontmatter.icon}):t._e(),t._v(" "),a("span",{attrs:{property:"headline"}},[t._v(t._s(t.$page.title))])]),t._v(" "),t.config?a("div",{staticClass:"page-info"},[t.isOriginal?a("span",{staticClass:"origin",domProps:{textContent:t._s(t.originText)}}):t._e(),t._v(" "),t._l(t.config,(function(e){return a(e+"-info",{key:t.$route.path+e,tag:"component"})}))],2):t._e(),t._v(" "),t.$frontmatter.image?a("meta",{attrs:{property:"image",content:t.$withBase(t.$frontmatter.image)}}):t._e(),t._v(" "),a("hr")])}),[],!1,null,null,null).exports),Z=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon next-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M906.772 512c0 4.772-2.211 9.267-5.99 12.175L524.257 813.66a15.37 15.37 0 01-18.616.092 15.368 15.368 0 01-5.038-17.91l75.714-191.672h-443.73c-8.488 0-15.36-6.881-15.36-15.36v-153.6c0-8.489 6.872-15.36 15.36-15.36h443.73l-75.714-191.682a15.358 15.358 0 015.048-17.91c5.51-4.158 13.128-4.137 18.606.092l376.525 289.485a15.323 15.323 0 015.99 12.165z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,tt=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon prev-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M906.783 588.79c-.02 8.499-6.882 15.36-15.38 15.37l-443.7-.01 75.704 191.682c2.52 6.42.482 13.763-5.038 17.91-5.52 4.168-13.138 4.147-18.616-.092L123.228 524.175a15.362 15.362 0 01-6-12.165c0-4.782 2.222-9.277 6-12.185L499.753 210.35a15.388 15.388 0 019.38-3.195c3.236 0 6.502 1.034 9.236 3.103 5.52 4.147 7.578 11.49 5.038 17.91L447.683 419.84l443.72-.01c8.498.01 15.36 6.881 15.36 15.36l.02 153.6z",fill:"currentColor"}})])}),[],!1,null,null,null).exports;const et=(t,e)=>{for(const a of t)"group"===a.type?et(a.children||[],e):e.push(a)},at=(t,{themeConfig:e,page:a,route:n,site:r,sidebarItems:i})=>{const s=e[t+"Links"],o=a.frontmatter[t];return!1!==s&&!1!==o&&("string"==typeof o?Object(p.c)(r.pages,Object(m.k)(o,n.path)):((t,e,a)=>{const n=[];et(e,n);for(let e=0;e<n.length;e++){const r=n[e];if("page"===r.type&&r.path===decodeURIComponent(t.path))return n[e+a]}return!1})(a,i,"prev"===t?-1:1))};var nt=n.a.extend({name:"PageNav",components:{NextIcon:Z,PrevIcon:tt},props:{sidebarItems:{type:Array,default:()=>[]}},computed:{prev(){return at("prev",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})},next(){return at("next",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})}}}),rt=(a(421),Object(u.a)(nt,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.prev||t.next?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},["external"===t.prev.type?a("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[a("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n        "),a("OutboundLink")],1):a("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[a("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")],1)],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},["external"===t.next.type?a("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),a("OutboundLink"),t._v(" "),a("NextIcon")],1):a("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),a("NextIcon")],1)],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),it=a(237),st=n.a.extend({name:"Page",components:{Anchor:v,Comment:k,MyTransition:s.a,PageEdit:I,PageInfo:X,PageNav:rt,Password:it.a},props:{sidebarItems:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]}},data:()=>({password:""}),computed:{commentEnable(){return!1!==this.$themeConfig.comment},pagePassword(){const{password:t}=this.$frontmatter;return"number"==typeof t?t.toString():"string"==typeof t?t:""},pageDescrypted(){return this.password===this.pagePassword}}}),ot=(a(422),Object(u.a)(st,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[a("MyTransition",[a("BreadCrumb",{key:t.$route.path})],1),t._v(" "),t._t("top"),t._v(" "),t.commentEnable?a("MyTransition",{attrs:{delay:.04}},[a("PageInfo",{key:t.$route.path})],1):t._e(),t._v(" "),a("MyTransition",{attrs:{delay:.08}},[t.pagePassword&&!t.pageDescrypted?a("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":function(e){t.password=e}}}):t._e()],1),t._v(" "),!t.pagePassword||t.pageDescrypted?a("MyTransition",{attrs:{delay:.12}},[a("Anchor",{key:t.$route.path})],1):t._e(),t._v(" "),a("MyTransition",{directives:[{name:"show",rawName:"v-show",value:!t.pagePassword||t.pageDescrypted,expression:"!pagePassword || pageDescrypted"}],attrs:{delay:.08}},[a("Content",{key:t.$route.path,staticClass:"theme-default-content"})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?a("MyTransition",{attrs:{delay:.12}},[a("PageEdit",{key:t.$route.path})],1):t._e(),t._v(" "),!t.pagePassword||t.pageDescrypted?a("MyTransition",{attrs:{delay:.14}},[a("PageNav",t._b({key:t.$route.path},"PageNav",{sidebarItems:t.sidebarItems},!1))],1):t._e(),t._v(" "),t.pagePassword&&!t.pageDescrypted||!t.commentEnable?t._e():a("MyTransition",{attrs:{delay:.16}},[a("Comment",{key:t.$route.path})],1),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),lt=n.a.extend({name:"Layout",components:{BlogInfo:r.a,BlogHome:r.a,Common:i.a,Home:h,Page:ot}}),ct=Object(u.a)(lt,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Common",{attrs:{sidebar:!0!==t.$frontmatter.blog},scopedSlots:t._u([t.$frontmatter.blog&&!1!==t.$themeConfig.blog?{key:"sidebar-bottom",fn:function(){return[a("BlogInfo")]},proxy:!0}:null,{key:"default",fn:function(e){return[t.$frontmatter.blog&&!1!==t.$themeConfig.blog?a("BlogHome"):t.$frontmatter.home?a("Home"):a("Page",{attrs:{headers:e.headers,"sidebar-items":e.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})]}}],null,!0)})}),[],!1,null,null,null);e.default=ct.exports}}]);
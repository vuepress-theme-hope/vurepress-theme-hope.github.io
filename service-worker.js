if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.7b667fa7.css",revision:"e7f93f670e87b308cc02883269467de0"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/129.702b7c31.js",revision:"de6689a7de885830ab3e47e11aeab06d"},{url:"assets/js/130.8c2ecb9d.js",revision:"a5b4601133271d60b092ee66165c1806"},{url:"assets/js/131.142450e3.js",revision:"426d5546af359fe7f6c1de233079cb84"},{url:"assets/js/132.488cdf1a.js",revision:"63ce780227c0f12b6b2ec3e16333b72f"},{url:"assets/js/133.43fe796a.js",revision:"227e2759430c6cba2bbed7d7e96a6e8a"},{url:"assets/js/app.0452e832.js",revision:"a885e48496f4499700c4a2a890b6757d"},{url:"assets/js/layout-Blog.ea172fd1.js",revision:"96b9c6f3f64ea23c1f677d9ff4850e06"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.9ae6cd43.js",revision:"4c3d0f31040a7c317f6b2045712f1f2d"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.6ba2ba52.js",revision:"7b4a63e3f4fbc87adfcf0653a4e64308"},{url:"assets/js/layout-Layout.82ea2298.js",revision:"1b4b7893caab358b5be5a0fd33407cd0"},{url:"assets/js/layout-NotFound.047fd5b5.js",revision:"10e1d77393058e696f73d8d3da459f66"},{url:"assets/js/layout-Slide.978032ca.js",revision:"0cb1ca3422f9d5602dfc1a5217a38513"},{url:"assets/js/page-AboutVuePress.81caba84.js",revision:"ee118534c8165691a68e86ac4f11c24a"},{url:"assets/js/page-Basic.3cea6903.js",revision:"e3ef1bfc9b09085d00bab16dbc646437"},{url:"assets/js/page-Bloghomepage.79157769.js",revision:"f75b97782f0ff5da0bc1908c6fdbf7c7"},{url:"assets/js/page-Blogrelated.a287051b.js",revision:"224e5b4a601049f999642dafc8182a15"},{url:"assets/js/page-CodeDemo.2b6771e6.js",revision:"90bc98d85c70462f7e49c9b0a227ee19"},{url:"assets/js/page-CommentFunction.3a96158f.js",revision:"659fdb266e05db6349fb8dbedbcc152f"},{url:"assets/js/page-Commonproblems.54bbb5e7.js",revision:"579c37e944f40d5309c95ca3e1793664"},{url:"assets/js/page-Config.76b34aa2.js",revision:"ffe65010115e780df2e340b3be3384be"},{url:"assets/js/page-Customalignment.eab7a911.js",revision:"a2f4c03f44fd8a82750801fa7d9cc176"},{url:"assets/js/page-DarkmodeandThemecolor.289b5042.js",revision:"ffa017f2a139d72e5a9dd8331fb8097f"},{url:"assets/js/page-DefaultThemeConfig.4e759c7a.js",revision:"fbe67d15be72b312ed80fe275fba197e"},{url:"assets/js/page-Demos.933898e1.js",revision:"ee5d6251d5d6473d667143bd424e1c76"},{url:"assets/js/page-EmojiList.f4d17e96.js",revision:"5b8e488c32cb77bea47cb92d44d53d85"},{url:"assets/js/page-Emoji列表.d164850a.js",revision:"c06892825910cf145f89cfe1e84756fa"},{url:"assets/js/page-Encryptionfunction.497a893b.js",revision:"3ea13eec7c17dcc0b435a469f4c294d0"},{url:"assets/js/page-FeedSupport.30778946.js",revision:"dcd146bd19873af24243f4550177ae7a"},{url:"assets/js/page-Feed支持.312a93eb.js",revision:"b109768caa98a46d9169cf8dfc57a6c7"},{url:"assets/js/page-FileStructure.078c7925.js",revision:"3b0c4d047f72bea59e501d2e2c4391b8"},{url:"assets/js/page-Flowchart.8c39d94e.js",revision:"4f2b32809f645feedf7b250828e16a70"},{url:"assets/js/page-Footnote.ed89410d.js",revision:"e25176e01529bb597e7936d2b91126a8"},{url:"assets/js/page-Home.d081c308.js",revision:"33ef65c15e6f98a85a7b719f52a92cc6"},{url:"assets/js/page-HomePage.e053697a.js",revision:"208a62c3ac27c79f6c06eef0633a45db"},{url:"assets/js/page-Iconsupport.8bc8aca9.js",revision:"879841eecb06b7842419e48413915894"},{url:"assets/js/page-InstallUsage.4a129fa1.js",revision:"8781e3eaa07b41469fd1e95ccb7d1d0f"},{url:"assets/js/page-Introduction.523e737d.js",revision:"5e905113a53bbbd1114ae1d4984d3146"},{url:"assets/js/page-Layout.ef384a7f.js",revision:"c7d9b5ccd5a82b424364af416c53663a"},{url:"assets/js/page-MarkdownDEMO.ee7d4c0b.js",revision:"cbaad4551ae1459ec02ba675900be680"},{url:"assets/js/page-MarkdownEnhance.d32682a8.js",revision:"8b6d5f3ba2b2e39322f5514e60083654"},{url:"assets/js/page-MarkdownIntroduction.26d7008e.js",revision:"c081a75d612c64e7c58061275d5d0c6d"},{url:"assets/js/page-Markdown介绍.aa794f2a.js",revision:"98dd8635ecb4fecb7859cbd389ccaa57"},{url:"assets/js/page-Markdown增强.86c1fe2e.js",revision:"f39d1e9d846ebdb8656a834e10628f7b"},{url:"assets/js/page-Markdown示例.759b17b8.js",revision:"9344bdc0dd271f974469d41d9bde4e38"},{url:"assets/js/page-Markup.8b2524fc.js",revision:"c6bd53d9b1a4b163ebb0c8759c9a2242"},{url:"assets/js/page-Nature.1efe143c.js",revision:"63b14dad223381cb67cc5f1822aaad9f"},{url:"assets/js/page-NavBar.fdf82562.js",revision:"2294d7c55efe3bd30d81a760d2aa0412"},{url:"assets/js/page-NewComponent.a09eaf74.js",revision:"9d80b572e1ae48b4718d8188bd8d8846"},{url:"assets/js/page-Newfeature.1b55a952.js",revision:"2d7f75c0c205ac641cc36d1af1ce75eb"},{url:"assets/js/page-Object.166073e0.js",revision:"ee9c4e0d119db0c8bcba6d9c39a44579"},{url:"assets/js/page-Page.78cf8447.js",revision:"02bca46cfba923de6cc90be1024328d4"},{url:"assets/js/page-PageConfig.8bb313d4.js",revision:"fbe90985d2f5818d5cb461db2cb4bd6e"},{url:"assets/js/page-PageEnhance.56854e8f.js",revision:"158714ebc6593eeeb3dbee331fdb368a"},{url:"assets/js/page-Pageinformation.fd247073.js",revision:"c3c7c00945ea1bba867fc8af01a6b4bb"},{url:"assets/js/page-People.8b33fb54.js",revision:"dd33592ee177a83b9ceb9bf67fd4f643"},{url:"assets/js/page-Place.988a3a43.js",revision:"ab7522eb523b706b5e5506d6992fbee7"},{url:"assets/js/page-PluginDescription.f020fc47.js",revision:"f4074de8b27c92bdca9f3e0220c4d65b"},{url:"assets/js/page-Plugins.aaabe6a9.js",revision:"2c7e459811f67343d2c29b7180218fcb"},{url:"assets/js/page-Presentationsupport.e5433c63.js",revision:"50a2dae8ccc27548f90478afb0a8323b"},{url:"assets/js/page-PWA.ee969f2f.js",revision:"235b25f342276573c8f1d8f5cb571606"},{url:"assets/js/page-SEOandSitemap.01cea4b0.js",revision:"7e9437e79541c9eada6f5f46570bf9ef"},{url:"assets/js/page-SEO和Sitemap.34679236.js",revision:"0e6d4244207ac3624470b2a09502672c"},{url:"assets/js/page-Sidebar.ca0a7afa.js",revision:"83ac9c694372c0501cf81df677e9aa16"},{url:"assets/js/page-Slide.6cf0b60e.js",revision:"c3768ba206845368eb6c5cf7813489ce"},{url:"assets/js/page-Stylusconfig.fa48d171.js",revision:"cd8d05561c611d89fe7061522c0aa380"},{url:"assets/js/page-Stylus配置.c75e6929.js",revision:"a6afefa354cad4e92b9e3183be7fe1a9"},{url:"assets/js/page-SuperscriptandSubscript.4ea9eb06.js",revision:"6976daf5fd8561b6afafb17ff40cab21"},{url:"assets/js/page-Symbol.d532def2.js",revision:"f1e0757c722ce1f255c4cde6045d7191"},{url:"assets/js/page-TexSupport.212e0742.js",revision:"8232acecf4f43e44254c0d60963afad7"},{url:"assets/js/page-Tex语法支持.52567026.js",revision:"ff98ac6f1234e3d3034089ce25aa7adb"},{url:"assets/js/page-ThemeConfig.4908f39a.js",revision:"71437255176b3aa4c146593139be2033"},{url:"assets/js/page-ThemeFeatureConfig.abaaf7de.js",revision:"721734fbd376c3903d7b5f8ac9c8cea5"},{url:"assets/js/page-ThemeLayoutConfig.185c331a.js",revision:"568a8f2a36ebf415e19b46bf4129c96f"},{url:"assets/js/page-ThemePluginConfig.3cf36f1b.js",revision:"ad3009c647114cf1b8367c4377692821"},{url:"assets/js/page-TSsupport.ade337ba.js",revision:"d1d6bd4b30e962a51999f0e8e5645b7e"},{url:"assets/js/page-TS支持.9e45bf40.js",revision:"c14ccd38590643499c01c24283c86024"},{url:"assets/js/page-vuepress-plugin-container.67e70293.js",revision:"5cb0b62fcf1273c9f068dadf8c713dca"},{url:"assets/js/page-vuepress-plugin-copyright.0bc94f6d.js",revision:"56af643cc41278ff3e39ccd7a4b674bd"},{url:"assets/js/page-VuePress.68d21eed.js",revision:"45054d4553450bdf67f21b7ffe3d26de"},{url:"assets/js/page-VuePressCases.9010da50.js",revision:"f0dc9fbf73f7b6a22a45164d43f1a0be"},{url:"assets/js/page-VuePresscommands.b38c2cc2.js",revision:"5f5789097e348623bbcd3c969e6ab747"},{url:"assets/js/page-VuePress案例.d9c3173a.js",revision:"6a62bd096643ccde73f379a202e3791c"},{url:"assets/js/page-上下角标.871bec92.js",revision:"9f2b4c11c842e92a6854d8bf4085ad95"},{url:"assets/js/page-主页.8ff6137c.js",revision:"32419b056f52bf7560931b6d1c5be02c"},{url:"assets/js/page-主题功能配置.ed209292.js",revision:"d8994c9bb6970b5ac94b244d920f9728"},{url:"assets/js/page-主题布局配置.e0005a8e.js",revision:"21a7c950f0505120b8d166a3e2a76755"},{url:"assets/js/page-主题插件配置.74d08f32.js",revision:"87dabe491ce098a273ca59653f32c9e6"},{url:"assets/js/page-主题配置.cbc8a7f0.js",revision:"9c75063ace2dee174a7f7f3e2a872457"},{url:"assets/js/page-人物.7146a082.js",revision:"c2f25da37a12234e6a5fc63fc4bbab1a"},{url:"assets/js/page-介绍.a6ade1aa.js",revision:"55bdaa37cf9b6f86b79d2406c6c4ac15"},{url:"assets/js/page-代码演示.cf6c09b3.js",revision:"341f7f1d50ad9b0410520c86766b4ad8"},{url:"assets/js/page-侧边栏.342e937f.js",revision:"ecd4627255232393c1800861641983f4"},{url:"assets/js/page-加密功能.b4133225.js",revision:"70675de545bfb5c465d2256e80383401"},{url:"assets/js/page-博客相关.29884473.js",revision:"aab119d835d4da13346a7e7893a4404d"},{url:"assets/js/page-博客首页.35d0678d.js",revision:"abd78d1dd687089c5882102e5bb8e571"},{url:"assets/js/page-图标支持.fd0c86b8.js",revision:"70e85adb590e7f46481d1604c628e5f4"},{url:"assets/js/page-地点.326b82fa.js",revision:"72b591b2649728dcb334f2a553ae5046"},{url:"assets/js/page-基础知识.6e6f45a4.js",revision:"bf14a381a8966e4627bb35762de45f76"},{url:"assets/js/page-安装使用.8a8d2ada.js",revision:"e74e0b896749028ddc940f2f516a1697"},{url:"assets/js/page-对象.6124eb1d.js",revision:"3642907d49bd1aad23b072683a78a35e"},{url:"assets/js/page-导航栏.bef47ee5.js",revision:"0d4b9d5483ff12c633399e9e20d08174"},{url:"assets/js/page-布局.c113aa72.js",revision:"14164477b5a6590e3620d74c7a1a8b83"},{url:"assets/js/page-常见问题.8b0ef148.js",revision:"252d42ec713ca39a46da803227f8d71e"},{url:"assets/js/page-幻灯片.4870c5e5.js",revision:"b5fc71463c9c732b4cc299c41d474fc1"},{url:"assets/js/page-幻灯片支持.232b6a63.js",revision:"297ff5a59443362c9d6b029f501c89e9"},{url:"assets/js/page-插件.e97e5df2.js",revision:"3c98a1d81caabf1884b73941bba4932f"},{url:"assets/js/page-插件说明.0acc987e.js",revision:"d278b2bf9daa0634c419e059f8836e15"},{url:"assets/js/page-文件结构介绍.8b4319a9.js",revision:"98e62785667ecc32d0ed944594da666c"},{url:"assets/js/page-新增特性.b7bfe59e.js",revision:"f7964893849199cad6195b4afac60f20"},{url:"assets/js/page-新增组件.39c2a769.js",revision:"7945fae3b325e3a9d95736decbcddc08"},{url:"assets/js/page-标记.7aad2c94.js",revision:"0d07d726de91e77e9e089d95d6041ab5"},{url:"assets/js/page-流程图支持.881d68ad.js",revision:"9b811e42d58e6421f48f0bd1978b8620"},{url:"assets/js/page-深色模式与主题色.786b85f7.js",revision:"190ecb120c74891632e3e2aef5fec6eb"},{url:"assets/js/page-符号.c6af8a3b.js",revision:"c584f409c18f2f41aec7feec7e8b6e33"},{url:"assets/js/page-脚注.3dba2c51.js",revision:"08eb0ae5f6525af81d4fec81518ce1ba"},{url:"assets/js/page-自定义对齐.4a39cac4.js",revision:"526c8f961719a5b9d8adc4accc9b6fc3"},{url:"assets/js/page-自然.365a4131.js",revision:"1659d802ca80481fd502e74a114a0660"},{url:"assets/js/page-评论功能.56e94190.js",revision:"96ea90fcb429866d873ac2c41014b0db"},{url:"assets/js/page-配置.4a336b7a.js",revision:"8b47c6a641f5305ddce41a68b8cd9b8a"},{url:"assets/js/page-页面.26dec8f1.js",revision:"d9f1cb89676d3568b9f36beb29a733d6"},{url:"assets/js/page-页面信息.d6f50e58.js",revision:"6061fd2e58e3a9eead93026f50ecce10"},{url:"assets/js/page-页面增强.225487d5.js",revision:"51859de1b0d7a743d892ce45122a8024"},{url:"assets/js/page-页面配置.5c12e439.js",revision:"2105865e7cc3b7c0d4da609cfd0f17d4"},{url:"assets/js/page-项目指令.0e34eba7.js",revision:"2432cfa5d3bd85544174548aab0caa9c"},{url:"assets/js/page-项目案例.2c282220.js",revision:"6afc8462f389ca76ec4f6f6e12c90861"},{url:"assets/js/page-首页.2a1e1a52.js",revision:"249bd9e42029908e99fec7ec3e2c5f5e"},{url:"assets/js/page-默认主题配置.460df482.js",revision:"b156e208641f587eef2ac3ba6874151a"},{url:"assets/js/vendors~docsearch.593f47e7.js",revision:"e1b745445710e0e5d505da7584564625"},{url:"assets/js/vendors~flowchart.34e201fe.js",revision:"43a31fbf528864a2780db735367f1e3e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.07a47424.js",revision:"852e57d85d21db9e44d6b9f0a4164077"},{url:"assets/js/vendors~photo-swipe.530119e8.js",revision:"121176191b26fcfd40d95e4400ad435b"},{url:"assets/js/vendors~reveal.7bc3a9ff.js",revision:"43797503ea363b8469191372b8af7a38"},{url:"assets/js/vendors~valine.4b531ef9.js",revision:"5e75dc7385b3d6c778dee58ec18f11e4"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"96f224f78efa0e59415063fe13f6a266"},{url:"article/index.html",revision:"34bcf857ab5661314dccaec6f08477ef"},{url:"basic/index.html",revision:"021ca4ffde365b8b87c5b3dea6529577"},{url:"basic/markdown/demo/index.html",revision:"e747ee3029e8c7e7a59bd9ef2d607ba0"},{url:"basic/markdown/emoji/index.html",revision:"29e2a8e394a40dc1b50100d4dc3e9e52"},{url:"basic/markdown/emoji/nature/index.html",revision:"c78ca2b1073a32d8dc9c13032db7eb06"},{url:"basic/markdown/emoji/object/index.html",revision:"0ed8b96865f2094e12b0efdb13d5f3e1"},{url:"basic/markdown/emoji/people/index.html",revision:"92e3b3ddcf414210941e693f1d77b4fb"},{url:"basic/markdown/emoji/place/index.html",revision:"69bac5618cca926d8ab22631fdd750d9"},{url:"basic/markdown/emoji/symbol/index.html",revision:"cf3d9f6ffa05600d5fa2fb311fb9e7e5"},{url:"basic/markdown/index.html",revision:"4c666838ef1f3063fea4ea9050b32bff"},{url:"basic/vuepress/case/index.html",revision:"60bd2704c9eaf131816f092639acab1c"},{url:"basic/vuepress/command/index.html",revision:"6afad4d7ce4928299aaaa0cfda06d856"},{url:"basic/vuepress/file/index.html",revision:"a67d6af887a804c2c0a2ea49b52421d9"},{url:"basic/vuepress/index.html",revision:"13dafc818760b2820efadf9226d4b022"},{url:"basic/vuepress/plugin/index.html",revision:"8ee9a16b5d7bc49b72d67de62064abfd"},{url:"basic/vuepress/theme/index.html",revision:"f5bfc78297a614965d855c99f9907842"},{url:"category/basic/index.html",revision:"2ab541c5b57b2cd926850febf71c94fc"},{url:"category/basic/page/2/index.html",revision:"aea07d71e0380098688ce39cc8b18d4c"},{url:"category/basic/page/3/index.html",revision:"24db04586cc7813aba73805d41a4a646"},{url:"category/config/index.html",revision:"fed247498d83b2026018a10759db4d16"},{url:"category/config/page/2/index.html",revision:"b92d0ccecfed42394df6377a6e98fe91"},{url:"category/config/page/3/index.html",revision:"bf74f952dfac649ed4d5effd9e63f6d0"},{url:"category/demo/index.html",revision:"0bb8f26b124bc85520a9ecf25f2ac7ee"},{url:"category/FAQ/index.html",revision:"a3609cbcf5233a0d8514f615e11dcc04"},{url:"category/feature/index.html",revision:"d79baa74e05b29d8281da71a420cd899"},{url:"category/feature/page/2/index.html",revision:"33bd8cc3e513fbe9072d010daa5d4937"},{url:"category/feature/page/3/index.html",revision:"edeadfb14e8ce1dc060f035e053133f7"},{url:"category/index.html",revision:"f590e53a5c8692f8d6208a13cba74fe2"},{url:"category/instruction/index.html",revision:"15dc22df7eff9639cdebdd32c9d3329d"},{url:"category/layout/index.html",revision:"a0044977fba52405f28d82f86cff9a13"},{url:"category/layout/page/2/index.html",revision:"eb5db2d54ec7a0986852acb8977c34b9"},{url:"category/markdown/index.html",revision:"c9da60ff729b8002a832f0962f00d9bb"},{url:"config/index.html",revision:"ce30575d661bc05ea75c22f35f230110"},{url:"config/page/index.html",revision:"c01405f7da68ab9f9c991960cdbf2605"},{url:"config/plugin/container/index.html",revision:"cb219eb2a6cb48e23700213d78d35985"},{url:"config/plugin/copyright/index.html",revision:"0faeaac5cf6e8b2b679ec23dd943b454"},{url:"config/plugin/index.html",revision:"43df5754cbce3a4b00a7468bde8dc8fe"},{url:"config/stylus/index.html",revision:"d4b060cf9d9c9e8926392899bd148b17"},{url:"config/theme/apperance/index.html",revision:"be82ea0fcda467a397c47650d83cf325"},{url:"config/theme/default/index.html",revision:"b9fcbee7da65ed79a3ece1ce9ac5edbd"},{url:"config/theme/feature/index.html",revision:"ec0460194d8d04bd531f53c46676910e"},{url:"config/theme/index.html",revision:"172882a4a05f4bd0bfd89d4e6ce1dd0d"},{url:"config/theme/plugin/index.html",revision:"53ee97cee45c7e054d8c007cf066a0c2"},{url:"demo/index.html",revision:"b051b32cf3994f2ce6970278f0ce6eb6"},{url:"encrypt/index.html",revision:"06b55fed3875879cf6403364e084f9dc"},{url:"FAQ/index.html",revision:"0cf04f5dae81b97b59247ed9f35e3905"},{url:"guide/feature/blog/index.html",revision:"3fc284ef5700db098fbc8b8f5dd389db"},{url:"guide/feature/comment/index.html",revision:"984f7290169bc9b4ea0a288c91b91c22"},{url:"guide/feature/component/index.html",revision:"b387d0f99cc456b7db6a7c0860e03f62"},{url:"guide/feature/encrypt/index.html",revision:"09b23a791181716f884d4518c8ff8149"},{url:"guide/feature/feed/index.html",revision:"b174130e4fc3bd7439e343f15f43ed71"},{url:"guide/feature/icon/index.html",revision:"da36746ef3c080a9b520b9efd3eb4aa9"},{url:"guide/feature/index.html",revision:"41de2970f76fab898aa2a3db63b90a49"},{url:"guide/feature/markdown/align/index.html",revision:"4e431dbf8302b0d0fe98d55229bcbbf3"},{url:"guide/feature/markdown/demo/index.html",revision:"026af069edf1d666d4148a93af5675a1"},{url:"guide/feature/markdown/flowchart/index.html",revision:"a579d1be3b9b7d6e950312c18b2e049d"},{url:"guide/feature/markdown/footnote/index.html",revision:"6f71223b8c9ad4059b19a80d06bcf66a"},{url:"guide/feature/markdown/index.html",revision:"a7ec64807e307bf0ee617f9af020a8dd"},{url:"guide/feature/markdown/mark/index.html",revision:"2e4dd72eb5f0bf64276c54236189949c"},{url:"guide/feature/markdown/presentation/index.html",revision:"37a0c9d02ed56b757108b9d2d4013394"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"8c81687bbe7034a18476490eeb0b6275"},{url:"guide/feature/markdown/tex/index.html",revision:"348da5183cde26652bf8e06278cf58e4"},{url:"guide/feature/page-info/index.html",revision:"669908f06ff684cf5abeb449fec65d6d"},{url:"guide/feature/page/index.html",revision:"2df09bd9d2c8579fed114f1693025de0"},{url:"guide/feature/pwa/index.html",revision:"9f3d1e4e583a2a9b5b7aeab3c6928cb9"},{url:"guide/feature/seo-sitemap/index.html",revision:"db0e9f06a9d98d5ec61e21cf323d9c3f"},{url:"guide/feature/theme/index.html",revision:"f993d75829b3e029194c615a9fb2ba10"},{url:"guide/feature/typescript/index.html",revision:"b4addb09b7a76fa4f676c533958560e9"},{url:"guide/index.html",revision:"8e56daa9c3b73a4d1ae81bc967622909"},{url:"guide/install/index.html",revision:"1728a5821f4d7d40b5b1f8b0595b73b9"},{url:"guide/layout/blog/index.html",revision:"ae98be5a4407521307fbcda2381582d7"},{url:"guide/layout/home/index.html",revision:"53c041f22eb1e5b2b56ed2e0d0572c59"},{url:"guide/layout/index.html",revision:"6e860fff10d0179e9c72ab42055e624d"},{url:"guide/layout/navbar/index.html",revision:"0c8d61fd3152cb79c116b20e9d29dfb8"},{url:"guide/layout/page/index.html",revision:"875f540538003798671fab5ce5c3fe1f"},{url:"guide/layout/sidebar/index.html",revision:"3060a71598e2f7e2c3830dc775517742"},{url:"guide/layout/slides/index.html",revision:"eea3f0c47ea639dffceffd8c95189fd4"},{url:"index.html",revision:"8507d1a6930f3fbfb6efcb522aa7bf56"},{url:"slide/index.html",revision:"e4e4199756069f20a8f3eb49cb881e61"},{url:"tag/blog/index.html",revision:"a8ebff959fe7db17ae8f95aecebdfb94"},{url:"tag/comment/index.html",revision:"710d0811f6786c6ad7c59cd893a606f7"},{url:"tag/components/index.html",revision:"fca65bd53e9f77dd9837586d3086c9b8"},{url:"tag/config/index.html",revision:"ff0e1c22b0050539debe38f2ca5108db"},{url:"tag/config/page/2/index.html",revision:"6ec7ecccec73f95c5c8f5ad0a09355d9"},{url:"tag/config/page/3/index.html",revision:"014be98e1a22e68aab0034922081f815"},{url:"tag/emoji/index.html",revision:"eea1d549d19cd8ef48d3dde356265bf4"},{url:"tag/emoji/page/2/index.html",revision:"a6ceb66bc3c7bb8e635839a843fd7030"},{url:"tag/encrypt/index.html",revision:"42ce9ebfb64964f6387ae4440ce0ebd0"},{url:"tag/feature/index.html",revision:"24e5b66d3d03bdc8e554bf1ed280f7b9"},{url:"tag/feature/page/2/index.html",revision:"517ebfe69dfdca90087b6c35b80b04b3"},{url:"tag/feature/page/3/index.html",revision:"a47c79163a641d7f291efc9bf81923ad"},{url:"tag/feature/page/4/index.html",revision:"9379caec1df12ba7b543b4eea83b59e4"},{url:"tag/feature/page/5/index.html",revision:"cde7c481e12869e87a254f55e87fd82b"},{url:"tag/feed/index.html",revision:"75b8990ade3c1d68ee74b1728aec1905"},{url:"tag/frontmatter/index.html",revision:"67dd140fe366b5a39cb5f5052508ee32"},{url:"tag/home/index.html",revision:"533d3b24c27d75cb999e56795d5caa0b"},{url:"tag/icon/index.html",revision:"75c6bb0693a6f5e7409a73dca11b035f"},{url:"tag/index.html",revision:"68bf44be3703a56b2976329225225c36"},{url:"tag/intro/index.html",revision:"7d8f1e005d1e15d0f65a822be05a978e"},{url:"tag/layout/index.html",revision:"6177b938310852824521ecfefa44916c"},{url:"tag/layout/page/2/index.html",revision:"0c60ce62a0d3d68ce9e08c7ab8f9eb49"},{url:"tag/markdown/index.html",revision:"ba846819aa7789b890dbde45bd10e238"},{url:"tag/markdown/page/2/index.html",revision:"2c1d2857f94a8dc3e48623070b4bf7a3"},{url:"tag/markdown/page/3/index.html",revision:"e113e9b22f3d937ebe48e3b8f7f4f1c9"},{url:"tag/markdown/page/4/index.html",revision:"6978a7f5fbe17d47c44f0e12a7ff8b1f"},{url:"tag/navbar/index.html",revision:"40a379ee4198b44ce51f28f657c0c03e"},{url:"tag/page-info/index.html",revision:"b0890bfc5d63507940484bec3ace47ca"},{url:"tag/page/index.html",revision:"ce1f923fc92ac62fa1716a8adf86a9c1"},{url:"tag/plugin/index.html",revision:"83feb22af402115db7cd63b3eac6e3cd"},{url:"tag/pwa/index.html",revision:"2e4ead96354a9df554759e3492dda02c"},{url:"tag/seo/index.html",revision:"f591332ba75d4f97dfaf350c1673f0de"},{url:"tag/sidebar/index.html",revision:"30e4e051b377ad02f0780824aced18dc"},{url:"tag/sitemap/index.html",revision:"b0a5aa09e601ed47758cd0d19d495f47"},{url:"tag/slides/index.html",revision:"290d248ceadfcee2301c8fae8256b601"},{url:"tag/style/index.html",revision:"48adedf85b017bd579cd8e7a1c7bc13f"},{url:"tag/themeConfig/index.html",revision:"3c278a6237c6e75329003b7c990a76e2"},{url:"tag/typescript/index.html",revision:"01a53ee3b53f991b54ead83b0197a3d5"},{url:"tag/vuepress/index.html",revision:"b8a582081f6c437f4a6f6f96c844ef02"},{url:"tag/vuepress/page/2/index.html",revision:"0fdf3525bc3f9e973f2a6f41027aebc8"},{url:"timeline/index.html",revision:"bcb6eab5f6f16ef357ef21aed1f2508e"},{url:"zh/basic/index.html",revision:"61e83225846847e9638ebef36d898967"},{url:"zh/basic/markdown/demo/index.html",revision:"336baec54773bf6f2ac49efe97cc0dc3"},{url:"zh/basic/markdown/emoji/index.html",revision:"5d17d1b82caa8894c9e75da574b87e14"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"28d946705f348c3f25742c40ce4ec49f"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"b6d375b8b67f1f78aa1f7bf8f970aba1"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"eea77433971ec163140bdd6afa3af180"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"f3f9c014ef4e3a6b1b3453a76f7336c0"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"7f736610dabab3f43b4e734f39d8a9b3"},{url:"zh/basic/markdown/index.html",revision:"cc6feb19cacc34230e6b551555a384cf"},{url:"zh/basic/vuepress/case/index.html",revision:"8bf977f3d8aac8de3677d8eb538126a9"},{url:"zh/basic/vuepress/command/index.html",revision:"f13370c71ef7f48eff521c5e039621ae"},{url:"zh/basic/vuepress/file/index.html",revision:"1ad1a6dda1f71478ea49e544627472c3"},{url:"zh/basic/vuepress/index.html",revision:"117c1a1f65aff33bdc56ab04335a7496"},{url:"zh/basic/vuepress/plugin/index.html",revision:"81759ae8145ceb77483b9f05dc8a45db"},{url:"zh/basic/vuepress/theme/index.html",revision:"a915fbf57d19ea9a3f178be59649adef"},{url:"zh/config/index.html",revision:"f0cc1d10ef1e911e1cfa21f2be2bb337"},{url:"zh/config/page/index.html",revision:"b268748882b070694b8f8de16ba33b8c"},{url:"zh/config/plugin/container/index.html",revision:"eaf41fde0a7d9ad27aa7999e928f1eb5"},{url:"zh/config/plugin/copyright/index.html",revision:"c255d8e28f976bb7e34c02c5616a86f9"},{url:"zh/config/plugin/index.html",revision:"b134c4806f8d84588f3a889e5d15c1bc"},{url:"zh/config/stylus/index.html",revision:"4b92e9e1147890f57166962e0a5d8198"},{url:"zh/config/theme/apperance/index.html",revision:"343c22b00a0b51d0912edda40d35455a"},{url:"zh/config/theme/default/index.html",revision:"1c3a9c6a69f6de342ad83f0e277b0617"},{url:"zh/config/theme/feature/index.html",revision:"5746420726c3c97d77da92075822bc49"},{url:"zh/config/theme/index.html",revision:"d1180152cde8121a8c10e6e7abea768d"},{url:"zh/config/theme/plugin/index.html",revision:"86c76a4bb80f6539c2e7b64e3954b9f0"},{url:"zh/demo/index.html",revision:"d2d77d320ee3b4e9bd7d1b3c4201c3b0"},{url:"zh/FAQ/index.html",revision:"2888ad97f7a2ebca7278175466563c5e"},{url:"zh/guide/feature/blog/index.html",revision:"cb4fe86594795ade3f87614eb2dbc6ea"},{url:"zh/guide/feature/comment/index.html",revision:"f9d1d4abf5ca2433c8cc78dca0656933"},{url:"zh/guide/feature/component/index.html",revision:"9a4dd9012d194cd7dc98600ca3b6357a"},{url:"zh/guide/feature/encrypt/index.html",revision:"3797602f16127a3622355541ca5b5d5e"},{url:"zh/guide/feature/feed/index.html",revision:"07cf3b11bd1d0346b159d38bf6dac2d3"},{url:"zh/guide/feature/icon/index.html",revision:"7025b963c6128a40a4a625c242e31b67"},{url:"zh/guide/feature/index.html",revision:"066f6d276932fe99ff18ab11cd5ceac2"},{url:"zh/guide/feature/markdown/align/index.html",revision:"c7e04dd589c125d3ef8e95113035c0a1"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"8b1e603d9412e8e1c392b67d7e98734e"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"d7f5e10afe316bb749f9603ec7812528"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"b488d22225dab52d66d37f8eac63ecb3"},{url:"zh/guide/feature/markdown/index.html",revision:"87ffe1377ce34d487acf68bbb1962152"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"be7c9257b06d9972c68bd96f3d7879f7"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"b686b3c6e4bb1b0a66c02fe201162ee1"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"0dc2130f05261ac21a595a0628986f54"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"6565e77c9a4dc6ac06f56037367736db"},{url:"zh/guide/feature/page-info/index.html",revision:"8049f6eb03a68ee195605b739cb6447c"},{url:"zh/guide/feature/page/index.html",revision:"c38bac06eca5d8312fd8acc95ba1c840"},{url:"zh/guide/feature/pwa/index.html",revision:"37bc7c769b08307d7f030d99b70fdbcb"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"9b3821d7f6ccdd69ce49917ae28ad3c9"},{url:"zh/guide/feature/theme/index.html",revision:"a6bcaf21aed3f8d584f644b7167a3553"},{url:"zh/guide/feature/typescript/index.html",revision:"b2e7b214ef45053c7452817a552eb205"},{url:"zh/guide/index.html",revision:"94b63c3e71f74d4c277e32ca24c5110e"},{url:"zh/guide/install/index.html",revision:"e15a8897c98d84f2a8c73dbb3e1afa60"},{url:"zh/guide/layout/blog/index.html",revision:"88f63cb7daad06969dc058a0026b898d"},{url:"zh/guide/layout/home/index.html",revision:"b36ca0d35249fb3315328bc5a598ba70"},{url:"zh/guide/layout/index.html",revision:"dd9b4bb5d001f224f7c6c9ccf3e824bb"},{url:"zh/guide/layout/navbar/index.html",revision:"a986d374e08f0a5a7b2a808177df763f"},{url:"zh/guide/layout/page/index.html",revision:"8026cbc15c299d81f0ef013e1a647c66"},{url:"zh/guide/layout/sidebar/index.html",revision:"5520a265d8c3358ec50d6fb9fdd7c27d"},{url:"zh/guide/layout/slides/index.html",revision:"dadf0d77e8fc4b5f2e8d4a6eae9c2c59"},{url:"zh/index.html",revision:"b63104270d473d79fe3a93360a32b4b4"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.c3dc68c7.png",revision:"c3dc68c733676095a82cf811b2ee4f97"},{url:"assets/img/darkmode.49bdcce2.png",revision:"49bdcce283cf45658b2f14dd59581194"},{url:"assets/img/darkmode.f4b38a9a.png",revision:"f4b38a9a3c54865f430513351d683b7c"},{url:"assets/img/home.41b92bac.png",revision:"41b92bacb4e514c1a9dd0416542292fb"},{url:"assets/img/home.b0fc3313.png",revision:"b0fc3313e9b47b58bb3149a37176fdb5"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.576a16be.png",revision:"576a16be27110e8e710442bbc8f98416"},{url:"assets/img/iconfont-edit.ae174b67.png",revision:"ae174b67620849ac9aebf32ab1dcf9a2"},{url:"assets/img/iconfont-new.10965ce6.png",revision:"10965ce685dd8be3bc8a2898be737970"},{url:"assets/img/slides.1194fc70.png",revision:"1194fc70c2e81246453d8fdd819cab6e"},{url:"assets/img/slides.72c24f1c.png",revision:"72c24f1c815dcaca94bbc1cb45238d82"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-ab6d3691"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.bb5faa42.css",revision:"10ceed141f83af9cc2c04204e1db8341"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/127.fe727bf2.js",revision:"0ef631d4cc9d6d97130ec4d9241ba0f5"},{url:"assets/js/128.6e4d7f5d.js",revision:"fa39c26b012f4b5ac291dde375c462bc"},{url:"assets/js/129.ed73c627.js",revision:"b6a2e2e5e5ba4c61c4b668f9117e5738"},{url:"assets/js/130.cf66bdde.js",revision:"559aaa8ee6c64ca03c44fbe5e05c22bf"},{url:"assets/js/131.3750d86e.js",revision:"0957fc218f90a45c3f2bb612cde05f19"},{url:"assets/js/app.9fea98fd.js",revision:"e156bb470b26ca0a65925e444b9131f1"},{url:"assets/js/layout-Blog.ea172fd1.js",revision:"96b9c6f3f64ea23c1f677d9ff4850e06"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.210559c6.js",revision:"081e8799557a89193847ae565f5a79e5"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.9bd7b8ea.js",revision:"6de9f7126d844a16c83af1ecf261701e"},{url:"assets/js/layout-Layout.3ad4b2ea.js",revision:"0672e75a72bef125ee78e6faeeb849b3"},{url:"assets/js/layout-NotFound.047fd5b5.js",revision:"10e1d77393058e696f73d8d3da459f66"},{url:"assets/js/layout-Slide.978032ca.js",revision:"0cb1ca3422f9d5602dfc1a5217a38513"},{url:"assets/js/page-AboutVuePress.81caba84.js",revision:"ee118534c8165691a68e86ac4f11c24a"},{url:"assets/js/page-Basic.3cea6903.js",revision:"e3ef1bfc9b09085d00bab16dbc646437"},{url:"assets/js/page-Bloghomepage.79157769.js",revision:"f75b97782f0ff5da0bc1908c6fdbf7c7"},{url:"assets/js/page-Blogrelated.a287051b.js",revision:"224e5b4a601049f999642dafc8182a15"},{url:"assets/js/page-CodeDemo.1586929c.js",revision:"01e73ca8cfc958182d501420f9c83c46"},{url:"assets/js/page-CommentFunction.3a96158f.js",revision:"659fdb266e05db6349fb8dbedbcc152f"},{url:"assets/js/page-Commonproblems.54bbb5e7.js",revision:"579c37e944f40d5309c95ca3e1793664"},{url:"assets/js/page-Config.76b34aa2.js",revision:"ffe65010115e780df2e340b3be3384be"},{url:"assets/js/page-Customalignment.ca28bc3c.js",revision:"943362b4ebee347dccc545a188139e03"},{url:"assets/js/page-DarkmodeandThemecolor.289b5042.js",revision:"ffa017f2a139d72e5a9dd8331fb8097f"},{url:"assets/js/page-DefaultThemeConfig.4e759c7a.js",revision:"fbe67d15be72b312ed80fe275fba197e"},{url:"assets/js/page-Demos.933898e1.js",revision:"ee5d6251d5d6473d667143bd424e1c76"},{url:"assets/js/page-EmojiList.f4d17e96.js",revision:"5b8e488c32cb77bea47cb92d44d53d85"},{url:"assets/js/page-Emoji列表.d164850a.js",revision:"c06892825910cf145f89cfe1e84756fa"},{url:"assets/js/page-Encryptionfunction.497a893b.js",revision:"3ea13eec7c17dcc0b435a469f4c294d0"},{url:"assets/js/page-FeedSupport.0b8e5df1.js",revision:"1a091294851fe64e55218e418a8c5a1a"},{url:"assets/js/page-Feed支持.312a93eb.js",revision:"b109768caa98a46d9169cf8dfc57a6c7"},{url:"assets/js/page-FileStructure.078c7925.js",revision:"3b0c4d047f72bea59e501d2e2c4391b8"},{url:"assets/js/page-Flowchart.de2dbc2a.js",revision:"cd9082e3cc3dd832176dac1f787d4d8e"},{url:"assets/js/page-Footnote.9d325817.js",revision:"7c77b159100bd225380779b02cd13bac"},{url:"assets/js/page-Home.d081c308.js",revision:"33ef65c15e6f98a85a7b719f52a92cc6"},{url:"assets/js/page-HomePage.e053697a.js",revision:"208a62c3ac27c79f6c06eef0633a45db"},{url:"assets/js/page-Iconsupport.8bc8aca9.js",revision:"879841eecb06b7842419e48413915894"},{url:"assets/js/page-InstallUsage.4a129fa1.js",revision:"8781e3eaa07b41469fd1e95ccb7d1d0f"},{url:"assets/js/page-Introduction.523e737d.js",revision:"5e905113a53bbbd1114ae1d4984d3146"},{url:"assets/js/page-Layout.ef384a7f.js",revision:"c7d9b5ccd5a82b424364af416c53663a"},{url:"assets/js/page-MarkdownDEMO.ee7d4c0b.js",revision:"cbaad4551ae1459ec02ba675900be680"},{url:"assets/js/page-MarkdownEnhance.d32682a8.js",revision:"8b6d5f3ba2b2e39322f5514e60083654"},{url:"assets/js/page-MarkdownIntroduction.26d7008e.js",revision:"c081a75d612c64e7c58061275d5d0c6d"},{url:"assets/js/page-Markdown介绍.aa794f2a.js",revision:"98dd8635ecb4fecb7859cbd389ccaa57"},{url:"assets/js/page-Markdown增强.05075326.js",revision:"43a7257ef05ae36e2b766d5cf7b7b0da"},{url:"assets/js/page-Markdown示例.759b17b8.js",revision:"9344bdc0dd271f974469d41d9bde4e38"},{url:"assets/js/page-Markup.8e374b21.js",revision:"2532a5c9edb739fb59eb955e2bc99a0f"},{url:"assets/js/page-Nature.1efe143c.js",revision:"63b14dad223381cb67cc5f1822aaad9f"},{url:"assets/js/page-NavBar.fdf82562.js",revision:"2294d7c55efe3bd30d81a760d2aa0412"},{url:"assets/js/page-NewComponent.a09eaf74.js",revision:"9d80b572e1ae48b4718d8188bd8d8846"},{url:"assets/js/page-Newfeature.1b55a952.js",revision:"2d7f75c0c205ac641cc36d1af1ce75eb"},{url:"assets/js/page-Object.166073e0.js",revision:"ee9c4e0d119db0c8bcba6d9c39a44579"},{url:"assets/js/page-Page.78cf8447.js",revision:"02bca46cfba923de6cc90be1024328d4"},{url:"assets/js/page-PageConfig.8bb313d4.js",revision:"fbe90985d2f5818d5cb461db2cb4bd6e"},{url:"assets/js/page-PageEnhance.56854e8f.js",revision:"158714ebc6593eeeb3dbee331fdb368a"},{url:"assets/js/page-Pageinformation.fd247073.js",revision:"c3c7c00945ea1bba867fc8af01a6b4bb"},{url:"assets/js/page-People.8b33fb54.js",revision:"dd33592ee177a83b9ceb9bf67fd4f643"},{url:"assets/js/page-Place.988a3a43.js",revision:"ab7522eb523b706b5e5506d6992fbee7"},{url:"assets/js/page-PluginDescription.f020fc47.js",revision:"f4074de8b27c92bdca9f3e0220c4d65b"},{url:"assets/js/page-Plugins.aaabe6a9.js",revision:"2c7e459811f67343d2c29b7180218fcb"},{url:"assets/js/page-Presentation.b1bae5b4.js",revision:"4f89591645a971b49d7307491ac31244"},{url:"assets/js/page-PWA.ee969f2f.js",revision:"235b25f342276573c8f1d8f5cb571606"},{url:"assets/js/page-SEOandSitemap.01cea4b0.js",revision:"7e9437e79541c9eada6f5f46570bf9ef"},{url:"assets/js/page-SEO和Sitemap.34679236.js",revision:"0e6d4244207ac3624470b2a09502672c"},{url:"assets/js/page-Sidebar.ca0a7afa.js",revision:"83ac9c694372c0501cf81df677e9aa16"},{url:"assets/js/page-Slide.0ece5a4f.js",revision:"51698273fb86eddc3120d66c3da00ba0"},{url:"assets/js/page-Stylusconfig.fa48d171.js",revision:"cd8d05561c611d89fe7061522c0aa380"},{url:"assets/js/page-Stylus配置.c75e6929.js",revision:"a6afefa354cad4e92b9e3183be7fe1a9"},{url:"assets/js/page-SuperscriptandSubscript.fb901a7f.js",revision:"6764167d8fdd9c14901e6f4f65b27602"},{url:"assets/js/page-Symbol.d532def2.js",revision:"f1e0757c722ce1f255c4cde6045d7191"},{url:"assets/js/page-Tex.bb1b47e2.js",revision:"d3b6d200941d26662470b0691292ff66"},{url:"assets/js/page-ThemeConfig.9176404d.js",revision:"983b2cc9b50eafdc3be5d766632f7f9a"},{url:"assets/js/page-ThemeFeatureConfig.85d58733.js",revision:"d7801924010c85c247910282110afaa7"},{url:"assets/js/page-ThemeLayoutConfig.28314c64.js",revision:"067152eb8e62b278c5399d1dc2d0e7d8"},{url:"assets/js/page-ThemePluginConfig.027de0ac.js",revision:"5fb8934a136f4438f0deb5aa8cf5a645"},{url:"assets/js/page-TSsupport.ade337ba.js",revision:"d1d6bd4b30e962a51999f0e8e5645b7e"},{url:"assets/js/page-TS支持.9e45bf40.js",revision:"c14ccd38590643499c01c24283c86024"},{url:"assets/js/page-vuepress-plugin-container.e41202d5.js",revision:"e93a29ce672d46e41c883ad2195b3d19"},{url:"assets/js/page-vuepress-plugin-copyright.5ac89f96.js",revision:"11c264d4f86c9f606014264f55040822"},{url:"assets/js/page-VuePress.6a156773.js",revision:"b61686321d936d0911cec62506ea2326"},{url:"assets/js/page-VuePressCases.84a3a14a.js",revision:"a3c61a62eb15900799f8a39ccf27a45b"},{url:"assets/js/page-VuePresscommands.d6b72ffb.js",revision:"a5652ce9622019221ac28d2f84283c1b"},{url:"assets/js/page-VuePress案例.a4b2d776.js",revision:"45860e1ba637d9731235006251e8c208"},{url:"assets/js/page-上下角标.c5ef3661.js",revision:"774dd7853afbf0b3bf472bae6ce5eafd"},{url:"assets/js/page-主页.7fad92df.js",revision:"0a8cba65285376ffeff730a46713001e"},{url:"assets/js/page-主题功能配置.7c12d0b8.js",revision:"9ba378d0e0d8867674acd02fb9844df0"},{url:"assets/js/page-主题布局配置.4abf0b81.js",revision:"1355295d4cdf17de01c89da64ff1a172"},{url:"assets/js/page-主题插件配置.44143a76.js",revision:"bb6cabde986947fc4de8c7d9ca5652b6"},{url:"assets/js/page-主题配置.c7a014ea.js",revision:"ba6dee4f67749e90c32c2adaea4a792c"},{url:"assets/js/page-人物.053a143a.js",revision:"cf9ad4da7204cc6a76824f933c864f76"},{url:"assets/js/page-介绍.da7380e7.js",revision:"257e342a80cb3f23177480c24945879b"},{url:"assets/js/page-代码演示.906601cb.js",revision:"a51dc9488b30bee2aa00f881f499d75e"},{url:"assets/js/page-侧边栏.7a97e3c5.js",revision:"15bb21f5d89a622f7af97b2cfdcd0af0"},{url:"assets/js/page-加密功能.01e17a43.js",revision:"4c397ebcd53f66876ad307fc60ca935e"},{url:"assets/js/page-博客相关.a17a6e2a.js",revision:"5bc718dfd3a2a40a052600bcc50d1a14"},{url:"assets/js/page-博客首页.cae02a22.js",revision:"d43adc473d3bfe6d7987e2d63fb22c22"},{url:"assets/js/page-图标支持.81959ca0.js",revision:"b442e72f92bc6f742d678cc82be523cc"},{url:"assets/js/page-地点.b3d5c5ad.js",revision:"5717012f2bea228571dfd66169c8218d"},{url:"assets/js/page-基础知识.a9fe8ade.js",revision:"7ea6334f0b1a4ed1e99b8c76b407864b"},{url:"assets/js/page-安装使用.50fc23f6.js",revision:"e63db214c230a34f88ef04b49d325f1f"},{url:"assets/js/page-对象.0494bd26.js",revision:"81958927fa5ec82f8d89990c7aef7aa5"},{url:"assets/js/page-导航栏.6ed66017.js",revision:"c8d2d3b782c11705fca48103814f84ce"},{url:"assets/js/page-布局.b5c48246.js",revision:"267c28900cc8d7dc3b6fbaf9707e58bf"},{url:"assets/js/page-常见问题.1babf5c3.js",revision:"71cf895bb193e58e13b95510c52a30fc"},{url:"assets/js/page-幻灯片.271255b1.js",revision:"8cd2687d2b79d071499062b842927261"},{url:"assets/js/page-插件.56c05820.js",revision:"74c2b2987e694be4bcbcb9988b1d5e8e"},{url:"assets/js/page-插件说明.e48edf4a.js",revision:"619647e4219a04d8532d64be667d1b5d"},{url:"assets/js/page-文件结构介绍.205a2c71.js",revision:"9e2660ad64a8330b0d42d19abd9f5b3f"},{url:"assets/js/page-新增特性.c6e8fe71.js",revision:"e40410f905ff281d22dd203b9d23e191"},{url:"assets/js/page-新增组件.2bedddef.js",revision:"92a8e1730c3bf1c651e1c354655164ed"},{url:"assets/js/page-标记.22b2e592.js",revision:"5b3e3f3ce3e9da6ef4da70dfdf754fab"},{url:"assets/js/page-流程图.63a4a563.js",revision:"8a6f449708377d35edaeaa1273b5cedd"},{url:"assets/js/page-深色模式与主题色.c1086e00.js",revision:"faf9e2f019d8e3b879454ae1a38650d7"},{url:"assets/js/page-符号.55c28fbb.js",revision:"2461d3aaac35f1fe1bf9ca2c9c0fbe7c"},{url:"assets/js/page-脚注.9468e39c.js",revision:"dd69f28ca8ee18d3d2a1c6922580143b"},{url:"assets/js/page-自定义对齐.41bbf1b8.js",revision:"8a4fb131f6afd886a9d11c51262f7f64"},{url:"assets/js/page-自然.8c36f9a2.js",revision:"a2933885d8a88ff9db08040f116cc716"},{url:"assets/js/page-评论功能.41c0f469.js",revision:"46fde8e629200bf437f7e0077dd8900a"},{url:"assets/js/page-配置.24901324.js",revision:"6aea21d24b6c70cd207b83ae67b7f7dc"},{url:"assets/js/page-页面.97f70295.js",revision:"9fecd74b153113937dda6f664dcfd4e0"},{url:"assets/js/page-页面信息.b268a1a7.js",revision:"862c068c9dd9a81223dc3a35917caf1e"},{url:"assets/js/page-页面增强.ed5c97dc.js",revision:"67b8f3b4f27e02c34cb0949fd539fac6"},{url:"assets/js/page-页面配置.0c87baa0.js",revision:"1cb81dadd26be65d43416b25e2623880"},{url:"assets/js/page-项目指令.b817a737.js",revision:"776fe302dd0e6781d368d8593b2d2260"},{url:"assets/js/page-项目案例.4ad2ac2b.js",revision:"4ae82a556137f21b9ffb3aa41178d7fd"},{url:"assets/js/page-首页.88be2607.js",revision:"5243ed4debd0aaf095ee790d28cd319e"},{url:"assets/js/page-默认主题配置.fd615e85.js",revision:"2aa29f87d828973c375ebf61916a8fae"},{url:"assets/js/vendors~docsearch.7f8f33bd.js",revision:"f7a83f3c2e4d04afd32767b1fbd80ba4"},{url:"assets/js/vendors~flowchart.441e298d.js",revision:"98a2494b8c4a8f363d6d701447884dc0"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4d10d045.js",revision:"c6766ff1f90c1e2fada3031525e31988"},{url:"assets/js/vendors~photo-swipe.aa1530c5.js",revision:"58cf3e266e173f94e93d309f3927df09"},{url:"assets/js/vendors~reveal.3b97b216.js",revision:"d8b902fcf7380e140d9cf36fa725c805"},{url:"assets/js/vendors~valine.e9604dcb.js",revision:"4b0e5cd02fa3d6bf324973531625a971"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"0b06dc8e99e91b6c597d9859085675f0"},{url:"article/index.html",revision:"e43e43044f2cbb4cc898afba60bb3d4f"},{url:"basic/index.html",revision:"48e2dd41b9cadef5acd118c7ff423f8d"},{url:"basic/markdown/demo/index.html",revision:"d7fae43fb0d9cc08d5792d22f101d3f3"},{url:"basic/markdown/emoji/index.html",revision:"4b4afc00e7690a0c239a3e2030fb9da5"},{url:"basic/markdown/emoji/nature/index.html",revision:"91e05298044dd3a3de5b34944a2ece1f"},{url:"basic/markdown/emoji/object/index.html",revision:"6a75b3bd3373639e0bacf8828f040aca"},{url:"basic/markdown/emoji/people/index.html",revision:"d4750ea62601f399c9b9eb3ff6e6ee09"},{url:"basic/markdown/emoji/place/index.html",revision:"7e96e47751d56f0de12723179e09d888"},{url:"basic/markdown/emoji/symbol/index.html",revision:"c25a8c9a8f533ae7aaaa2a3dd6b6ecb4"},{url:"basic/markdown/index.html",revision:"9a700bb7ca07ac00e1a5f11ad5252039"},{url:"basic/vuepress/case/index.html",revision:"1351f5b02006738ca2d008063e718ad7"},{url:"basic/vuepress/command/index.html",revision:"ba76f14676a32d60d39613681ca8d96e"},{url:"basic/vuepress/file/index.html",revision:"04af2b31757b836ddf7222547bb9f447"},{url:"basic/vuepress/index.html",revision:"9344029ba667992a8fb0b49653932bde"},{url:"basic/vuepress/plugin/index.html",revision:"fe012ee41a196b0015159c97d206fa28"},{url:"basic/vuepress/theme/index.html",revision:"dda650772cec068e88001cd717db00dc"},{url:"category/basic/index.html",revision:"332789827673a52aa438f6ac21399929"},{url:"category/basic/page/2/index.html",revision:"b87a1a0f63563eac9e639d4e0ae4669d"},{url:"category/basic/page/3/index.html",revision:"91412233404f5579305f56470f977b39"},{url:"category/config/index.html",revision:"9c03f4039b7bb656fdb98acfa12a8edf"},{url:"category/config/page/2/index.html",revision:"c33fc39fdff970d0c71c5940ed06176c"},{url:"category/config/page/3/index.html",revision:"aaec51a007e8f62fa3bdc0149f31c0c1"},{url:"category/demo/index.html",revision:"e91085fca99b9f1e1309542dbb636b70"},{url:"category/FAQ/index.html",revision:"ab980f67a74d829737a7aaac896f4160"},{url:"category/feature/index.html",revision:"2908e268b8996cce0190dcc9806c8693"},{url:"category/feature/page/2/index.html",revision:"d49a77d08268635df419e6b36dc83a9a"},{url:"category/feature/page/3/index.html",revision:"3dab7280d67b30651d8c797436f7b6ed"},{url:"category/index.html",revision:"a051bb6aad14f70c606b6463b23cd96f"},{url:"category/instruction/index.html",revision:"e8fb09b603a9f60085dd093b79697e91"},{url:"category/layout/index.html",revision:"1ae04a76d41dcce10cd347973e6d3529"},{url:"category/layout/page/2/index.html",revision:"22c2096cd38eb972cf7fe4544008e0eb"},{url:"category/markdown/index.html",revision:"3ae98cf39430c554a3603899b665a6ec"},{url:"category/markdown/page/2/index.html",revision:"c4fed4424c8678065b93102ae11930b1"},{url:"config/index.html",revision:"30dfd05e5b337f00964830b43926fdb0"},{url:"config/page/index.html",revision:"264d2a5ddcb000d557cd311b8ac08d87"},{url:"config/plugin/container/index.html",revision:"0a3d18ae5a734ee038d2a9d14c4bc3c7"},{url:"config/plugin/copyright/index.html",revision:"98038d45468ea6eb56fd26a554570454"},{url:"config/plugin/index.html",revision:"e2ecba0fe2d5e82e4a345f31aa5a446a"},{url:"config/stylus/index.html",revision:"b1895166736a2b1f6ea9198c1567a35d"},{url:"config/theme/apperance/index.html",revision:"34017c6651e95576178554a7860ffd65"},{url:"config/theme/default/index.html",revision:"4f3fc7605a1da5557639229ca340767f"},{url:"config/theme/feature/index.html",revision:"c451799850afcdd9d8cccd9474eb9141"},{url:"config/theme/index.html",revision:"1266a0ddec03d5ff09c2fc0e59baeb66"},{url:"config/theme/plugin/index.html",revision:"81e35d36d74d2822ae85790c6eae217e"},{url:"demo/index.html",revision:"ed87c21edaaa1f2d6c96be1f4e8be8e8"},{url:"encrypt/index.html",revision:"c68723abef4b0638c52c5f852802f133"},{url:"FAQ/index.html",revision:"d7127a3c6316d7275db8527a993434d1"},{url:"guide/feature/blog/index.html",revision:"de7e7a0b827605598ab5ea4b1d676419"},{url:"guide/feature/comment/index.html",revision:"b2cf9f62c4c7e48d90623bf72cb50754"},{url:"guide/feature/component/index.html",revision:"e422e67b55e17eda04fb5d3f247ab4d0"},{url:"guide/feature/encrypt/index.html",revision:"8718b707340522a37cb8a5e16d199318"},{url:"guide/feature/feed/index.html",revision:"156dfa3db9e4157817d76ac47a82e3ed"},{url:"guide/feature/icon/index.html",revision:"685bfaec40ee62453563fe8cbe27deef"},{url:"guide/feature/index.html",revision:"d4f49d83d451395f0e2f7db1d3a50faa"},{url:"guide/feature/markdown/align/index.html",revision:"321d46980941eeacdd8f24f4118d21d9"},{url:"guide/feature/markdown/demo/index.html",revision:"99ec736203abd7e276156f58b8cb5dcc"},{url:"guide/feature/markdown/flowchart/index.html",revision:"ce0464b3b81e8a60763e5b6ee1910051"},{url:"guide/feature/markdown/footnote/index.html",revision:"924421981df88e9b09068b158adaa0af"},{url:"guide/feature/markdown/index.html",revision:"0093818829de314540b50dd256f048a5"},{url:"guide/feature/markdown/mark/index.html",revision:"cc39b4fa84da39aa68a65ffb7b8ad9ea"},{url:"guide/feature/markdown/presentation/index.html",revision:"da4de7570fd475aee28eee962dc613ac"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"3d9da4dd5c4120f87e7ea28ee6e8e76e"},{url:"guide/feature/markdown/tex/index.html",revision:"e5067d3847e44b487a743847843b2abb"},{url:"guide/feature/page-info/index.html",revision:"6d47662b2cdf6876c2822fef7028dd94"},{url:"guide/feature/page/index.html",revision:"2545b136e43613cc18bdccdfbf49812d"},{url:"guide/feature/pwa/index.html",revision:"a17b769a23f4d0c925016b3bdfeb492b"},{url:"guide/feature/seo-sitemap/index.html",revision:"004e2199a1c3d6abb583da797fc57509"},{url:"guide/feature/theme/index.html",revision:"e92588c97eb6417eb7ff8bf931779537"},{url:"guide/feature/typescript/index.html",revision:"301e7bf06dfe92ed2e3fa8042979a1e4"},{url:"guide/index.html",revision:"896509805dadce3221b513e74effc281"},{url:"guide/install/index.html",revision:"752b97b0b1ce3c10055ea34b05b26db8"},{url:"guide/layout/blog/index.html",revision:"22603edfa44b3c5e1bbb32a60384cb79"},{url:"guide/layout/home/index.html",revision:"c48933bc1c8b8042a2e3dea4d1bd7f25"},{url:"guide/layout/index.html",revision:"7c50d9a571503af8478b4d9a90c46aed"},{url:"guide/layout/navbar/index.html",revision:"1776427b2a904150d004e0f840fb7c65"},{url:"guide/layout/page/index.html",revision:"a8ffbd0251670865a9a800a9171b5da2"},{url:"guide/layout/sidebar/index.html",revision:"c65399b00ed6d890d59865771f46f8a3"},{url:"guide/layout/slides/index.html",revision:"c4b8f557f8da5171bb5c919b8ede4561"},{url:"index.html",revision:"4b2b738d1ff28f9929086b2ee3003830"},{url:"slide/index.html",revision:"cfe600060e85e975873f07fc5645f783"},{url:"tag/blog/index.html",revision:"7b3704a01f73379f94d002d0f1e37358"},{url:"tag/comment/index.html",revision:"75c6caf08efe8cb22cc6f388a2a44e8e"},{url:"tag/components/index.html",revision:"86754e7dc5c6b439f0c88d68f6fee518"},{url:"tag/config/index.html",revision:"cc62bfcc4894bf370e88e3f664ff92ed"},{url:"tag/config/page/2/index.html",revision:"955e1e3c4cc150384613376f7a0b9fea"},{url:"tag/config/page/3/index.html",revision:"633fa02fbeccb211ecabde151e75ea6a"},{url:"tag/emoji/index.html",revision:"c0fdcee9af488828ceb017d966802588"},{url:"tag/emoji/page/2/index.html",revision:"4902ce08b281e273b2f4fb480dc00f4f"},{url:"tag/encrypt/index.html",revision:"ded9dcc528df1effa578bfcd8a1677c5"},{url:"tag/feature/index.html",revision:"735a59ae4492b8eb697be467333ed459"},{url:"tag/feature/page/2/index.html",revision:"28a07f8d5cb92f42cfd7d560c5dfe70f"},{url:"tag/feature/page/3/index.html",revision:"8ef3f9c37b457304e0ecc69dace48a7b"},{url:"tag/feature/page/4/index.html",revision:"dd538940c9c84ef85cb4e4a95e3f5d58"},{url:"tag/feature/page/5/index.html",revision:"f8359e0d54f347663f6fd505a5bee0da"},{url:"tag/feed/index.html",revision:"cc0420af5763722f93cdf2ea35128e57"},{url:"tag/frontmatter/index.html",revision:"9c563c7e74afbff4c81d2d902aabf19b"},{url:"tag/home/index.html",revision:"7c22670e8bf38d287982719538e8777a"},{url:"tag/icon/index.html",revision:"e646a4366a34ce5196c717104f26d4cf"},{url:"tag/index.html",revision:"182853231e6865035d1b1962a5680a7d"},{url:"tag/intro/index.html",revision:"794b715cadd3984687c15c3e1ebf6864"},{url:"tag/layout/index.html",revision:"4a0b65d5e23a262bfb472920b59fa267"},{url:"tag/layout/page/2/index.html",revision:"e2204a83b748e33cebac4e0e43930f50"},{url:"tag/markdown/index.html",revision:"4fd9d980cb0117725b8f1f44970e3d6d"},{url:"tag/markdown/page/2/index.html",revision:"e470598f6e6706bb9c0c429dd7bb4335"},{url:"tag/markdown/page/3/index.html",revision:"a9659af5e02a1697b47fff53bd2b4ec3"},{url:"tag/markdown/page/4/index.html",revision:"4db24544c2c469a1779e05397270b19d"},{url:"tag/navbar/index.html",revision:"2515338a9ebd89eaa9d44bbe1cba8243"},{url:"tag/page-info/index.html",revision:"87dedf29b43d93491affdbfa14038924"},{url:"tag/page/index.html",revision:"c7978e912f3ce1e9b69135bf4c268a06"},{url:"tag/plugin/index.html",revision:"b90d768258e68013f66ce41640ebde6b"},{url:"tag/pwa/index.html",revision:"4f528b5af31befd48239ebc48754f2ee"},{url:"tag/seo/index.html",revision:"9d46e5bbfefdc19e7c21b4870b7b9a7e"},{url:"tag/sidebar/index.html",revision:"ca4f15e08447cb0834f01cdbef8c8071"},{url:"tag/sitemap/index.html",revision:"d96367f2f480a6c099540bc5bf92cd98"},{url:"tag/slides/index.html",revision:"efcd9079834634689ba39534fc6058c3"},{url:"tag/style/index.html",revision:"a23aa30f03ddc3248a7f23d7ae490a30"},{url:"tag/themeConfig/index.html",revision:"4a72cc2fd19a72299aa320858a7ca310"},{url:"tag/typescript/index.html",revision:"3b331d24271088576fd107b86078bca4"},{url:"tag/vuepress/index.html",revision:"5ac4866d8a5e03185b0ad058ff386aca"},{url:"tag/vuepress/page/2/index.html",revision:"40bbaeb45ac617cfe295a8746654e8f6"},{url:"timeline/index.html",revision:"60382f4db772bed7570d7240f6eb3b07"},{url:"zh/basic/index.html",revision:"942de3fa4e7875425f7f0d5f31a1df10"},{url:"zh/basic/markdown/demo/index.html",revision:"4800a2a6d1868594448c3ec11a17d735"},{url:"zh/basic/markdown/emoji/index.html",revision:"4156128c282a9974b841efe07db0626b"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"0d5b3a8f0de382decd388cbf5d761ca3"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"3947ec1aecb9d874b8aa8ec341d3bef7"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"252129f8eaec2200b4be02fa737fe3a3"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"a1826ca931b5c4955f6e781f7a2342dc"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"f19e2fea8691f02a9cf0b57c57209d76"},{url:"zh/basic/markdown/index.html",revision:"629359a22195f530c98b4b6001d21f8a"},{url:"zh/basic/vuepress/case/index.html",revision:"cfaa1bc2293505105cbbbe8296680dea"},{url:"zh/basic/vuepress/command/index.html",revision:"989a547eb4b2ade9add168ae2a3abac5"},{url:"zh/basic/vuepress/file/index.html",revision:"8cf63e45a75f0f2c2318042c3dec4462"},{url:"zh/basic/vuepress/index.html",revision:"5993491be9781fe436ae9c38b771a732"},{url:"zh/basic/vuepress/plugin/index.html",revision:"e6d570be70befab8ceed939d0c43df27"},{url:"zh/basic/vuepress/theme/index.html",revision:"1bf38ec939e5fbfe4d3afa991a56e9ff"},{url:"zh/config/index.html",revision:"ae268929bc8041b40b8a6097a6f63219"},{url:"zh/config/page/index.html",revision:"70709ecaf42c228b41b13663018c14ee"},{url:"zh/config/plugin/container/index.html",revision:"bcec2a572aac0213320802b101b7028c"},{url:"zh/config/plugin/copyright/index.html",revision:"161e0620d43328f26f0b27d172afe90c"},{url:"zh/config/plugin/index.html",revision:"60b13446451f10f260d041e383c9c97b"},{url:"zh/config/stylus/index.html",revision:"779d592cde7e742cfd8ae76ec87f7794"},{url:"zh/config/theme/apperance/index.html",revision:"eca4c946157265337bebaabd31dd3168"},{url:"zh/config/theme/default/index.html",revision:"6d9cb247db9cc9526247a81719b4c17b"},{url:"zh/config/theme/feature/index.html",revision:"5cd5050ae67f670ad00a88cb880f6c2e"},{url:"zh/config/theme/index.html",revision:"f69d661447c2446cbc8575dcf72d87be"},{url:"zh/config/theme/plugin/index.html",revision:"6f9b869aac2bf14a63742230fee55d72"},{url:"zh/demo/index.html",revision:"e27abef3f7008fa992bff68a60e0d1bc"},{url:"zh/FAQ/index.html",revision:"7c3ca30ca668dedc9cfc9b79aa0235d6"},{url:"zh/guide/feature/blog/index.html",revision:"a6e7d39a18247e5ab339a6de4a099e07"},{url:"zh/guide/feature/comment/index.html",revision:"5fb30c7d0c3c6c33a3705f065b8042e3"},{url:"zh/guide/feature/component/index.html",revision:"772c04e715efc9e770473a1a0a82efb0"},{url:"zh/guide/feature/encrypt/index.html",revision:"139938b779d350dba383461fc0c77704"},{url:"zh/guide/feature/feed/index.html",revision:"1c74c4bf9f25726ffc19ae7085da5030"},{url:"zh/guide/feature/icon/index.html",revision:"46a990887de62a2c2bc8f94e70f33389"},{url:"zh/guide/feature/index.html",revision:"d4ad9985898cd3d9815359bbe761a339"},{url:"zh/guide/feature/markdown/align/index.html",revision:"049c6bc9146d6ba785e33ab3b37fc684"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"e9075098f1fe3edc0e35ef467408aff5"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"5391053baa39a0c5a7b769623a88c113"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"e15a1800cada406f8fee0345edfa0a2a"},{url:"zh/guide/feature/markdown/index.html",revision:"7f9c02474de4203f54bcc2cbd53d65d4"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"de1bf51e7e049f813feb3f11f0353973"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"22ee40af91d47c1da68938d3248d42c4"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"536167b4d3d8cff9d64db71925a44c29"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"af9e69c3efd1ccf25c9477d670f8193a"},{url:"zh/guide/feature/page-info/index.html",revision:"8f88d9a026ba4059eae061c5bad7353f"},{url:"zh/guide/feature/page/index.html",revision:"87438fe973e6b1015a64070b02962050"},{url:"zh/guide/feature/pwa/index.html",revision:"1a67a1d9d336dc4293a853f990e28f55"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"18cff3fd488f7b28364768e199ba1831"},{url:"zh/guide/feature/theme/index.html",revision:"000f5a5a76aab28b6641282fd414ba4d"},{url:"zh/guide/feature/typescript/index.html",revision:"71c2c3588a37a198f0cc229c7040407d"},{url:"zh/guide/index.html",revision:"54f1714c1501ebd41a8551eb86e277da"},{url:"zh/guide/install/index.html",revision:"294c1f8b975f71a910006186f28930b0"},{url:"zh/guide/layout/blog/index.html",revision:"a82aaf8e0baaabf5c46bf0d6636b3733"},{url:"zh/guide/layout/home/index.html",revision:"fba545825e6140ddcaae21f1fbf26f4d"},{url:"zh/guide/layout/index.html",revision:"4cc5a5cc8eb8acfe5bf35f14dfef6de9"},{url:"zh/guide/layout/navbar/index.html",revision:"0039c2822cb9b322a634232af59acb5b"},{url:"zh/guide/layout/page/index.html",revision:"c4d10c24cf0f6307d75e52cfce8e1dac"},{url:"zh/guide/layout/sidebar/index.html",revision:"dda70abcd5111fb9cd53c16361155e0f"},{url:"zh/guide/layout/slides/index.html",revision:"31e4ca107a2565dcef1c6a7159f2e507"},{url:"zh/index.html",revision:"dd97b58366bce319615ec1ec01f9374a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.c3dc68c7.png",revision:"c3dc68c733676095a82cf811b2ee4f97"},{url:"assets/img/darkmode.49bdcce2.png",revision:"49bdcce283cf45658b2f14dd59581194"},{url:"assets/img/darkmode.f4b38a9a.png",revision:"f4b38a9a3c54865f430513351d683b7c"},{url:"assets/img/home.41b92bac.png",revision:"41b92bacb4e514c1a9dd0416542292fb"},{url:"assets/img/home.b0fc3313.png",revision:"b0fc3313e9b47b58bb3149a37176fdb5"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.576a16be.png",revision:"576a16be27110e8e710442bbc8f98416"},{url:"assets/img/iconfont-edit.ae174b67.png",revision:"ae174b67620849ac9aebf32ab1dcf9a2"},{url:"assets/img/iconfont-new.10965ce6.png",revision:"10965ce685dd8be3bc8a2898be737970"},{url:"assets/img/slides.1194fc70.png",revision:"1194fc70c2e81246453d8fdd819cab6e"},{url:"assets/img/slides.72c24f1c.png",revision:"72c24f1c815dcaca94bbc1cb45238d82"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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

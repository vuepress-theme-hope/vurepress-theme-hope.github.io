if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-97c03f0a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.0d17614a.css",revision:"1729450939d8f6044d29ccbfc9ed2771"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/127.1a48abb0.js",revision:"c59695b02de4bb9be239fcffde7e823e"},{url:"assets/js/128.6a7a5a28.js",revision:"ff6c1972d65a515e9b389a0f582caae6"},{url:"assets/js/129.deee6fd9.js",revision:"0bc9776cdc6ecb28ce53683366bf5aba"},{url:"assets/js/130.d26b42bc.js",revision:"f9a2dbc7b93051a92a685109bec70f0a"},{url:"assets/js/131.64c1d7c1.js",revision:"5eefe85e2a78f0257502aa872b8ddfd5"},{url:"assets/js/app.723d2169.js",revision:"992bc20341b0c306804145bbc4bf92a3"},{url:"assets/js/layout-Blog.015dbf95.js",revision:"65957e3cb528e51f68c31c2e400b86f5"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.fc2089fb.js",revision:"776b850a29b087cbb4cdb9ca83a62bdc"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.455482d3.js",revision:"3cc7b3fa4b572057c6f3e7545c4a26e6"},{url:"assets/js/layout-Layout.29c5bdcd.js",revision:"51f9f11312293f8f479c3620b72bd119"},{url:"assets/js/layout-NotFound.4f12dc65.js",revision:"9bd14b3fb45526323f136f597653d402"},{url:"assets/js/layout-Slide.84e553aa.js",revision:"59b27997e9eeda4dab493d4ce660cedf"},{url:"assets/js/page-AboutVuePress.1aaea001.js",revision:"e18471a6031fc5b4de8e0c0a0495acad"},{url:"assets/js/page-Basic.0db06e48.js",revision:"43cd85a7a323c7894a0c028cbbdc8135"},{url:"assets/js/page-Bloghomepage.d2d08f74.js",revision:"fa6fe385b0f97cc520a631cf5e5a1cc9"},{url:"assets/js/page-Blogrelated.0926f9c8.js",revision:"ba6673c4c9dce6fc8bc2b268f37fd473"},{url:"assets/js/page-CodeDemo.7f97d1e9.js",revision:"09e444989bc8ac8c564d2a955e30bbe4"},{url:"assets/js/page-CommentFunction.be7ac4b3.js",revision:"0979b5e779d4664240724f98e3c7fcb5"},{url:"assets/js/page-Commonproblems.bf239380.js",revision:"2a20bc585f01fcf6d9218784854da6c4"},{url:"assets/js/page-Config.facaf9bf.js",revision:"a14eabfee11692ae03b4254be8ab6189"},{url:"assets/js/page-Customalignment.6217b6e9.js",revision:"2144115d50e227a6291f4f21e6f175a2"},{url:"assets/js/page-DarkmodeandThemecolor.39f3709a.js",revision:"ac1fa05f46d0b64a67a0a9a6fb01722a"},{url:"assets/js/page-DefaultThemeConfig.06dfa1d7.js",revision:"5df52de46d1f66951da67b8e676338e9"},{url:"assets/js/page-Demos.3d5b0270.js",revision:"15c6628da7a72284d14c602f31741cbe"},{url:"assets/js/page-EmojiList.f633c57d.js",revision:"9ede44bdf08e81bd5131aeb9c1bb13d6"},{url:"assets/js/page-Emoji列表.8aed7f13.js",revision:"3618dabbc6adcc8d0320da92e836e148"},{url:"assets/js/page-Encryptionfunction.9126b093.js",revision:"2dad8fc30e373182746b55282c47d2a4"},{url:"assets/js/page-FeedSupport.87d9e391.js",revision:"175ca0fd1a2c7ec8dcbf97c477e72711"},{url:"assets/js/page-Feed支持.f4c9a3fb.js",revision:"f4fa9ce24b0adbad402a426984fd98f8"},{url:"assets/js/page-FileStructure.1e1c8190.js",revision:"a05571607c352b5b4afab9ef16e44749"},{url:"assets/js/page-Flowchart.dea7b708.js",revision:"352301fda2e121b266c26e6b1dff18d3"},{url:"assets/js/page-Footnote.fa5884e8.js",revision:"e0d721531fb530f13afa3409208dd5a7"},{url:"assets/js/page-Home.a51e9973.js",revision:"2e0ca393648e0079131efec46b91ceff"},{url:"assets/js/page-HomePage.7da7441c.js",revision:"749b5950cba237a7ba5a4f438fe5f89d"},{url:"assets/js/page-Iconsupport.b5221c50.js",revision:"d2b21ae9d1a95515a60b1df0325426cb"},{url:"assets/js/page-InstallUsage.61b8caec.js",revision:"38956847e76ec9b22834a91effac800a"},{url:"assets/js/page-Introduction.bdd73912.js",revision:"e4110a5194c290c2dd502c9000dd1e5b"},{url:"assets/js/page-Layout.255c6a4e.js",revision:"4d38e0b41569fca8d5e21409e669bf39"},{url:"assets/js/page-MarkdownDEMO.e89f31c6.js",revision:"42ddd5c2e1d3b529a62ed14b495f0e2e"},{url:"assets/js/page-MarkdownEnhance.d8d54624.js",revision:"72c2a094cf06cb3f9a00c0bc6ddae332"},{url:"assets/js/page-MarkdownIntroduction.41bdac69.js",revision:"7e57dc2db799218fcc761e70473a0f0a"},{url:"assets/js/page-Markdown介绍.3d5ffe30.js",revision:"4ed9d597cfd611261eef67e57cf51573"},{url:"assets/js/page-Markdown增强.75ce8b2f.js",revision:"81bcc6f625c69ff76299ab9f8e8222b3"},{url:"assets/js/page-Markdown示例.1a52663a.js",revision:"aaf57852fd40a8a43b26cb9ace87b47c"},{url:"assets/js/page-Markup.1c6b8bb9.js",revision:"f76fb51e98d7cf47fcc15ffc7081a612"},{url:"assets/js/page-Nature.02c3e07e.js",revision:"cc7afad69cd850358edf434a58d6df20"},{url:"assets/js/page-NavBar.755a3b3b.js",revision:"5baffd945dfd0edc7c39a2549e6690db"},{url:"assets/js/page-NewComponent.ed44f898.js",revision:"abf9bf90f2b83d6d9071ed3d8d58d144"},{url:"assets/js/page-Newfeature.cb6db822.js",revision:"223b6d644a85c192920e9661150eba42"},{url:"assets/js/page-Object.6fd7445b.js",revision:"7d4e796e4f9dd61038f57e83e2c195c1"},{url:"assets/js/page-Page.c8076584.js",revision:"f535f8d5d791d4c55c287b8526eb687c"},{url:"assets/js/page-PageConfig.b407097d.js",revision:"0c5933636928e2ad57004732d38c5c03"},{url:"assets/js/page-PageEnhance.49b6b002.js",revision:"bbaa16071195de353510fb9600efcb49"},{url:"assets/js/page-Pageinformation.bf689c29.js",revision:"70230f3108a7f1b63af64f139d3811d6"},{url:"assets/js/page-People.d69d2f67.js",revision:"be27f850fbbad3658d47f15f60a1c650"},{url:"assets/js/page-Place.25473ef0.js",revision:"c38523ab8f77d312e3bbcb0530bbccc3"},{url:"assets/js/page-PluginDescription.1b52d293.js",revision:"ce5aeb3f676705a02b0c3f53d3599ae0"},{url:"assets/js/page-Plugins.08de5761.js",revision:"e284f29416042015eb5e78bf7dbee162"},{url:"assets/js/page-Presentation.cefe3946.js",revision:"311783f5fb957184725781312831eb8c"},{url:"assets/js/page-PWA.006a0e07.js",revision:"d3db172e6befbd89eb9eca824570c901"},{url:"assets/js/page-SEOandSitemap.50b3f5ef.js",revision:"3f2b1d6bd3a384c229017aaae7aa4cd8"},{url:"assets/js/page-SEO和Sitemap.1ce3c2f7.js",revision:"4960083bd724ad907f4e855419bd155f"},{url:"assets/js/page-Sidebar.b2e5c598.js",revision:"ab5fe344e2b4d06725b2a4b700a53503"},{url:"assets/js/page-Slide.14e0cf5c.js",revision:"055f0e86e21602b5d1352b9400cf424c"},{url:"assets/js/page-Stylusconfig.529eb23c.js",revision:"a21f21727004994bc78c5014d9ec25e6"},{url:"assets/js/page-Stylus配置.f6e42817.js",revision:"20592586e6a5abcd661968eef88197f3"},{url:"assets/js/page-SuperscriptandSubscript.4d21d113.js",revision:"5da57605787f5846d457978142807bb0"},{url:"assets/js/page-Symbol.010ae255.js",revision:"ebf19cec7c110604e4f8901585743d3a"},{url:"assets/js/page-Tex.ca1bb961.js",revision:"f36d6413436894e3680aab4c37f09de4"},{url:"assets/js/page-ThemeConfig.a5b07068.js",revision:"e68b86622392c75ba196c6278747133d"},{url:"assets/js/page-ThemeFeatureConfig.e3817df3.js",revision:"1311630e2992e87ccdb28bd3c6596b5c"},{url:"assets/js/page-ThemeLayoutConfig.04ec704d.js",revision:"5b8b1964fc2d5cf202ead86f661e0fce"},{url:"assets/js/page-ThemePluginConfig.24974e36.js",revision:"2efe175e273913013fcdf65d4f2714db"},{url:"assets/js/page-TSsupport.e7052e76.js",revision:"a71c3ebccbbca614de036b34d18f3db0"},{url:"assets/js/page-TS支持.7fca2f1e.js",revision:"0053c5e4697a857c911cfade557b7e87"},{url:"assets/js/page-vuepress-plugin-container.ebca39f6.js",revision:"5e2cbfb6cde2558307aee9e491ecee9c"},{url:"assets/js/page-vuepress-plugin-copyright.3b5d55ac.js",revision:"f0e52f4e265c1cef0fc5a30e2291c3b4"},{url:"assets/js/page-VuePress.eeb0f5d5.js",revision:"b34d23d51b98259c1841d9c536c3fd95"},{url:"assets/js/page-VuePressCases.cd8197c2.js",revision:"a710cc7770c362a6f0a2e43f494bce51"},{url:"assets/js/page-VuePresscommands.05ebae1d.js",revision:"ff96c7350c5214eb2ac3f4a95f9f3e9f"},{url:"assets/js/page-VuePress案例.61bbd254.js",revision:"4ddde09681235a828177076f4e2e664f"},{url:"assets/js/page-上下角标.b0cd1504.js",revision:"82bf8587986b096443a80af939aa520f"},{url:"assets/js/page-主页.98177b2c.js",revision:"bd856e455f725fce1d84a56894bd6426"},{url:"assets/js/page-主题功能配置.deed5651.js",revision:"0ab47577ceaa229994c6cb2dd19d8476"},{url:"assets/js/page-主题布局配置.bfc5ff97.js",revision:"78a8b6a241f9bfdae23e80c455ffbb87"},{url:"assets/js/page-主题插件配置.860b3839.js",revision:"a4fc727eace316414b09e8e4b7b7443c"},{url:"assets/js/page-主题配置.15bba46c.js",revision:"a09c2d13eb9df652efee96f6acc09dbb"},{url:"assets/js/page-人物.7b54c65c.js",revision:"49be5cb22da9458e8aa630dea34cb15d"},{url:"assets/js/page-介绍.a0753432.js",revision:"8d564a198f7643f6738eea7df42092be"},{url:"assets/js/page-代码演示.65bc6581.js",revision:"f426558fc76748cd18c00dba58505959"},{url:"assets/js/page-侧边栏.2450ad6f.js",revision:"0b9a2d2ede59f5e802a2f0c686669230"},{url:"assets/js/page-加密功能.be360113.js",revision:"69fb07fa9a7d760d1618f85224ed80fc"},{url:"assets/js/page-博客相关.25f8acf4.js",revision:"cb201a91a65b15fbb30c7f4283b25b25"},{url:"assets/js/page-博客首页.80bca5e0.js",revision:"c682818f17f66b07d4eb9a035f10e6b7"},{url:"assets/js/page-图标支持.af23e04f.js",revision:"7b582c3a7eb5b1a931fa91fe522c1721"},{url:"assets/js/page-地点.85c7c405.js",revision:"5c393960102354e7444c8fc6d41de4ba"},{url:"assets/js/page-基础知识.5f1a226c.js",revision:"b4dc54c54ebfb2991e447b8aa4f41281"},{url:"assets/js/page-安装使用.47fc1469.js",revision:"c95dd5d93954bd06ffde45f12883d4ef"},{url:"assets/js/page-对象.b1976b8a.js",revision:"dfbd004a436d877b338d28c588483d62"},{url:"assets/js/page-导航栏.ebc9a95a.js",revision:"516b1d64f0dd45638e6605ef7fdc7657"},{url:"assets/js/page-布局.19a0ac43.js",revision:"c7017bffaccceba67bf4688c18f2df13"},{url:"assets/js/page-常见问题.c498e542.js",revision:"30170874071e80b364749a08c89cee56"},{url:"assets/js/page-幻灯片.ba2faf55.js",revision:"519d223dccc3cd70909dbe6404c6616c"},{url:"assets/js/page-插件.fb068e22.js",revision:"38ad4260e393ed56933c526ba0c307a2"},{url:"assets/js/page-插件说明.30b4af2d.js",revision:"0598b02923317c5d83716aa2cf6a5ce8"},{url:"assets/js/page-文件结构介绍.f6a5ba7c.js",revision:"0ae7eddb83d159a7ab7bc22033d6ac96"},{url:"assets/js/page-新增特性.35754430.js",revision:"ba436a3eb2a857ccf5a71a308a4c9f55"},{url:"assets/js/page-新增组件.59051e8b.js",revision:"1ae892803f4d1103d8ebbb45eb460a50"},{url:"assets/js/page-标记.6a143fc4.js",revision:"f51d6d0ae76205e3df522f163d6d69e7"},{url:"assets/js/page-流程图.ab90d8c7.js",revision:"850d09839d73e976e36ad03cbab8d328"},{url:"assets/js/page-深色模式与主题色.12a75882.js",revision:"c32238914749f1981ea2361f74541cb2"},{url:"assets/js/page-符号.3843437e.js",revision:"5254b0179111fc3045737a25d7ba0bd8"},{url:"assets/js/page-脚注.4f3b0e8b.js",revision:"992d0a2effbb1e09d486b56ca2444031"},{url:"assets/js/page-自定义对齐.fd99838c.js",revision:"01c87af31aa7b60018ce06ab093b1258"},{url:"assets/js/page-自然.17bbc944.js",revision:"8f213073837a9f151358304a29c25e0d"},{url:"assets/js/page-评论功能.6e44bc94.js",revision:"19cf84edc97886ea0e03e1777864333b"},{url:"assets/js/page-配置.5b69e329.js",revision:"78b362c1fb63916c57e197a3dac284b4"},{url:"assets/js/page-页面.ce7078be.js",revision:"0be1d0339542017b19fd91c0e20e00c9"},{url:"assets/js/page-页面信息.4cd85c16.js",revision:"ddfe44dc6c1210aeb56ec149ec3e8933"},{url:"assets/js/page-页面增强.ba9bb553.js",revision:"3552842125251ad1c3322c8932ab5c1f"},{url:"assets/js/page-页面配置.8b0e91be.js",revision:"b1ff2b7d3f60ed3e1b66e650667b35d8"},{url:"assets/js/page-项目指令.e52599ce.js",revision:"282877653de400bed92b321128d3ccae"},{url:"assets/js/page-项目案例.d66a0db1.js",revision:"a4c783d36e25c13a0e2f4618d7b57423"},{url:"assets/js/page-首页.faa65351.js",revision:"6ec204c0f08e55c020a79dbaaed28a2e"},{url:"assets/js/page-默认主题配置.87ad83d6.js",revision:"119b484647fa467e46bda05741a090e7"},{url:"assets/js/vendors~docsearch.97af3da3.js",revision:"27ca506105e8294916730000f614b6b6"},{url:"assets/js/vendors~flowchart.0d527be5.js",revision:"030552b2d9236a37e6869715fe6561a9"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.8c81e4c6.js",revision:"b09655b229859a81c7dcb72d337b7c96"},{url:"assets/js/vendors~photo-swipe.e65d3a1b.js",revision:"67824e5f252138b167899a297ead90b9"},{url:"assets/js/vendors~reveal.bce88cb4.js",revision:"4b00ae5a9d541e369e9cc35969c4dc89"},{url:"assets/js/vendors~valine.f15eb59c.js",revision:"7bc4f0194970aa89ddbab5f6c186b0c6"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"468bf10a7acfe3bff268baf80224df2d"},{url:"article/index.html",revision:"0a63c0a121b4f8dcf03b4dcb67ee4ed6"},{url:"basic/index.html",revision:"a1202f32b93c5dd00ec0d49f425c856b"},{url:"basic/markdown/demo/index.html",revision:"ab50aca65cb32b6025a7eb8d94f7ed23"},{url:"basic/markdown/emoji/index.html",revision:"d080f68a82085b428ca0dd233130318a"},{url:"basic/markdown/emoji/nature/index.html",revision:"13d4aa69f043c9599f25ac0dbe412f5d"},{url:"basic/markdown/emoji/object/index.html",revision:"ed3538fc2ce4dae76f2b9a55e510582d"},{url:"basic/markdown/emoji/people/index.html",revision:"72fe6939bde8c39feddc4f5b53fdadf2"},{url:"basic/markdown/emoji/place/index.html",revision:"8692c2a4a06a45ce53472daeb7693500"},{url:"basic/markdown/emoji/symbol/index.html",revision:"391021eb4d418c66f1dbd1a60db732a1"},{url:"basic/markdown/index.html",revision:"cb600f8b0f2833c527f81b1f11b34aa1"},{url:"basic/vuepress/case/index.html",revision:"aa668dec580a4c7eac4a47e1e8a93fce"},{url:"basic/vuepress/command/index.html",revision:"099610998f9b90870aa19736e0c6d4cc"},{url:"basic/vuepress/file/index.html",revision:"29f49d124a992cd3d65a873f5fd811ce"},{url:"basic/vuepress/index.html",revision:"b52ec7bf0215f4c96984241565cc34e1"},{url:"basic/vuepress/plugin/index.html",revision:"418fa2759997f810ec22df4fd8864de0"},{url:"basic/vuepress/theme/index.html",revision:"e35d3f844d8d0936fa07bf8cb81a8ee0"},{url:"category/basic/index.html",revision:"38eb84668d80ea00dcf38425c95d1f7f"},{url:"category/basic/page/2/index.html",revision:"92ccc2a0b797a492951cde3e486046b2"},{url:"category/basic/page/3/index.html",revision:"453477c234e9a54a3af298e017ce00eb"},{url:"category/config/index.html",revision:"4d1b4b3eb636e9220460d16104d11a42"},{url:"category/config/page/2/index.html",revision:"af1f0ef73faf615884e4db7f6af3126c"},{url:"category/config/page/3/index.html",revision:"86d3591a8931118a5ba551c07950e20e"},{url:"category/demo/index.html",revision:"bc3949dac1e1670940575ec1d625912e"},{url:"category/FAQ/index.html",revision:"32543bc5b3b1f444c09ec5f73d433bf7"},{url:"category/feature/index.html",revision:"9b2790036c3501f7b44aa069975ec3c7"},{url:"category/feature/page/2/index.html",revision:"a334060b8f43e902a3ea5bea940f1256"},{url:"category/feature/page/3/index.html",revision:"b959af67d1b36c0fc93a3ec99492d5ed"},{url:"category/index.html",revision:"43708d9d1037aa01f6abf358810c5819"},{url:"category/instruction/index.html",revision:"34d78928e6c193e7ff8b10f873fad827"},{url:"category/layout/index.html",revision:"eae6594e71e4903e2c25d89aff6d9d10"},{url:"category/layout/page/2/index.html",revision:"48a4e99ce1162fa868966a53a29b6969"},{url:"category/markdown/index.html",revision:"1fe808b9cd2bcaba26915761a675a2cb"},{url:"category/markdown/page/2/index.html",revision:"bd348005460b9d0edbccae9d02b60006"},{url:"config/index.html",revision:"fb308e7a3e9f2421980a0975f63ced2c"},{url:"config/page/index.html",revision:"a01adab488a17298e2351cdde1b72d39"},{url:"config/plugin/container/index.html",revision:"b7c65f98753402120895c9cfaa829b8a"},{url:"config/plugin/copyright/index.html",revision:"9afec69ef97fc716d6576e762818e66b"},{url:"config/plugin/index.html",revision:"8acae2886ba22797c72a18244571b498"},{url:"config/stylus/index.html",revision:"6ed1fd9c2e62a3ce1c20142415b8bc88"},{url:"config/theme/apperance/index.html",revision:"0dc0d95987bb30cfd5875f7f5020546f"},{url:"config/theme/default/index.html",revision:"17fe11452969c2adb8a3fc44435d14db"},{url:"config/theme/feature/index.html",revision:"2ac3c47a45499dd58981b24bf19f51ce"},{url:"config/theme/index.html",revision:"d1bf040500af8908fc5757a6cc74a366"},{url:"config/theme/plugin/index.html",revision:"7c674828a6c295a2678fe3e6cfacb81f"},{url:"demo/index.html",revision:"ec28e3c4278f8280ed6ec55685fcf131"},{url:"encrypt/index.html",revision:"aeaa6d75d443f15fc2ac2853cc43f723"},{url:"FAQ/index.html",revision:"77a216c5e68a724fb6fb97f8a305e64b"},{url:"guide/feature/blog/index.html",revision:"1024b536b7f05142660186793b7cc962"},{url:"guide/feature/comment/index.html",revision:"3b3e42e8dbfcfed9d582132aa0ea6a49"},{url:"guide/feature/component/index.html",revision:"b9b57754e4f01b22ee129dba0defb659"},{url:"guide/feature/encrypt/index.html",revision:"fcb57acf8035595749893de5fa78ac1b"},{url:"guide/feature/feed/index.html",revision:"a2df81c85af1aebedfca8d28cb3cd2ae"},{url:"guide/feature/icon/index.html",revision:"7f56bec05e26343ffcbff86ac7d1140f"},{url:"guide/feature/index.html",revision:"8d6084d5098d8a704071411c30beb714"},{url:"guide/feature/markdown/align/index.html",revision:"9420d579392c9fde1a8512f9ee86bfc9"},{url:"guide/feature/markdown/demo/index.html",revision:"9f67ec020866b207060a43f7e59c9c4d"},{url:"guide/feature/markdown/flowchart/index.html",revision:"0bbed6d463dd5540efe167489a797cba"},{url:"guide/feature/markdown/footnote/index.html",revision:"ce29d1fd72b01c210daa76053110e80a"},{url:"guide/feature/markdown/index.html",revision:"0ce8df96c91f854097c2672796517d09"},{url:"guide/feature/markdown/mark/index.html",revision:"6791d9d18b7d2b70d5e26695c55f6972"},{url:"guide/feature/markdown/presentation/index.html",revision:"4ca99c56748b2f6f6573f774c60f8471"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"93cbcef8cc5d901908577f3892f417fd"},{url:"guide/feature/markdown/tex/index.html",revision:"0882749fd45033d0f8d26e592c61ba1a"},{url:"guide/feature/page-info/index.html",revision:"b794891310df5b77c3ab081fc9dbe951"},{url:"guide/feature/page/index.html",revision:"9fe4473c3039bae8479e06ded113ace9"},{url:"guide/feature/pwa/index.html",revision:"90b21c3ad3e2abeaecb925c352327d78"},{url:"guide/feature/seo-sitemap/index.html",revision:"fd080caa14893a2a58183476c0ac9fb8"},{url:"guide/feature/theme/index.html",revision:"8813f6860156cda684b390d0ec311f14"},{url:"guide/feature/typescript/index.html",revision:"c850aa22887b67dfb6ce7af2ea7a9659"},{url:"guide/index.html",revision:"554c633ca1482c420746d22dd61e2449"},{url:"guide/install/index.html",revision:"1c7856fadba33eacb4b26036fdc48bc1"},{url:"guide/layout/blog/index.html",revision:"7c9a438939e3d788dcb956a521cf00a6"},{url:"guide/layout/home/index.html",revision:"974e394bd766b0d3bdbf1d27090ff7f8"},{url:"guide/layout/index.html",revision:"9be7bd6fc3d72bfcb995b3bc82d97da5"},{url:"guide/layout/navbar/index.html",revision:"d52c483e4160720f0189607a09ea88e0"},{url:"guide/layout/page/index.html",revision:"7ea1c730e47476ff8e93e75a85003181"},{url:"guide/layout/sidebar/index.html",revision:"ea7755c469970c2593381428dac1de02"},{url:"guide/layout/slides/index.html",revision:"1f80931ad27fa60dd38bd3030d70d7bc"},{url:"index.html",revision:"8d55a59cba292bcfa3e37e856480b284"},{url:"slide/index.html",revision:"ca5bc968627f68f48f17a2d3e37a3fb4"},{url:"tag/blog/index.html",revision:"e95d09f0991dd6aab7543b5e72191936"},{url:"tag/comment/index.html",revision:"4cf3fbca134823a4f4d5ddb5ea6ce788"},{url:"tag/components/index.html",revision:"4e4dc5e0bd1b5d4bf1f0c3dd6525b0ef"},{url:"tag/config/index.html",revision:"2d882e4bf3de6a1f89153dde745a823d"},{url:"tag/config/page/2/index.html",revision:"2852f0163d211fab1b7b95a737146257"},{url:"tag/config/page/3/index.html",revision:"b030434150f88a195177cec620725afc"},{url:"tag/emoji/index.html",revision:"44449fc7f1447c1cdfa9afeb666d57bd"},{url:"tag/emoji/page/2/index.html",revision:"71827993b696a9134fbfc68ef8728be0"},{url:"tag/encrypt/index.html",revision:"5df359ee3402f7ea363cdf89f1c3d4ac"},{url:"tag/feature/index.html",revision:"7b1aa72f3079a5ef3931a8c6e27c3f15"},{url:"tag/feature/page/2/index.html",revision:"7c2867c49d6d3f838cf394193465fb00"},{url:"tag/feature/page/3/index.html",revision:"e3bd35f923c20de8d69b88827df391ce"},{url:"tag/feature/page/4/index.html",revision:"0d58f7bc4c0246b2f5249e4f8b101f58"},{url:"tag/feature/page/5/index.html",revision:"4c4c4ef49136d374d02c8fefb573a257"},{url:"tag/feed/index.html",revision:"73b489cf21f2a3a4654c925f4e5db6f0"},{url:"tag/frontmatter/index.html",revision:"39f95d82bfefc6b61c978b503246a21d"},{url:"tag/home/index.html",revision:"2d07071180b17fff49f0cf52ba734b08"},{url:"tag/icon/index.html",revision:"b0d51129b69a25a1ed36dd9cd016c7ae"},{url:"tag/index.html",revision:"08419a5d94bf098ff785c962db0d21b5"},{url:"tag/intro/index.html",revision:"5ae96d6ae924fee7afb5121a7faa48b7"},{url:"tag/layout/index.html",revision:"599f71e6578860f5565b2b74ed7efb68"},{url:"tag/layout/page/2/index.html",revision:"cc919d7a70788b881bbc079f347c0417"},{url:"tag/markdown/index.html",revision:"972188691164dda97451b25949bcf93e"},{url:"tag/markdown/page/2/index.html",revision:"061fc35f2ffcdbfa8007b5273e9d842a"},{url:"tag/markdown/page/3/index.html",revision:"dd50af886336414eac32e459c4266045"},{url:"tag/markdown/page/4/index.html",revision:"12b8d4dc77b3222903c035ad4c021e18"},{url:"tag/navbar/index.html",revision:"ec7d4bbc28578f70380ef40908a1171e"},{url:"tag/page-info/index.html",revision:"0162b91ec258900d2cd16d6bdf24a65f"},{url:"tag/page/index.html",revision:"8902648581124f19c20ba13864de1d91"},{url:"tag/plugin/index.html",revision:"9ccc92d31d8bc9052c38d39169b0c6da"},{url:"tag/pwa/index.html",revision:"cdf8bfacd4eb8d6b2451bdbb4780ba47"},{url:"tag/seo/index.html",revision:"3e0247c8e1c340337393355fd42bb891"},{url:"tag/sidebar/index.html",revision:"9ebe399c3f37d34317c8fda8a0cd942a"},{url:"tag/sitemap/index.html",revision:"e4703cc461568278ba0d338b7135faec"},{url:"tag/slides/index.html",revision:"f17fa1d4b754f65b25c2be3671c39ace"},{url:"tag/style/index.html",revision:"2587c609d2c074e11ee49f64d8e64d48"},{url:"tag/themeConfig/index.html",revision:"6348a09e908575516f10c59ed0ba3fd1"},{url:"tag/typescript/index.html",revision:"38c086cc49ceb01ddb4bee6c39c99675"},{url:"tag/vuepress/index.html",revision:"1844fcf55139208df32d1e6259618c5d"},{url:"tag/vuepress/page/2/index.html",revision:"b9b53ac9b4942476ce4ddd137a317cb4"},{url:"timeline/index.html",revision:"3c6ba386bf7509fd3f5c56bc455125ca"},{url:"zh/basic/index.html",revision:"5c2a7ed354a02db71339adfe9b99a7c7"},{url:"zh/basic/markdown/demo/index.html",revision:"0f2f73b8ba0c371712e54bc2f4511c02"},{url:"zh/basic/markdown/emoji/index.html",revision:"15f3081f827c16afd9babb0447e09b41"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"e00df525a41f43a5b6be7d7d02f135bb"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"c3151c58e0a6eb91d87e82578e46f86f"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"21a783f8c665cdeba934a49c621bae8f"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"b47e109a86a2341a0584d84fcd2108b5"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"73eb99ca6362821e826d022384edc28a"},{url:"zh/basic/markdown/index.html",revision:"6ceb424a4fa69e7ba9718da8b935a89e"},{url:"zh/basic/vuepress/case/index.html",revision:"97b91b9d9261a12937eb170ed599d2e4"},{url:"zh/basic/vuepress/command/index.html",revision:"149c0c2474d45350fdf5f3672821f2fc"},{url:"zh/basic/vuepress/file/index.html",revision:"9efb1bcfc9d692aa1341c3b878c341ec"},{url:"zh/basic/vuepress/index.html",revision:"3b05e11ba76d8d01ed61791047bc41eb"},{url:"zh/basic/vuepress/plugin/index.html",revision:"1490f2bb044ac549de7d9c9082721b48"},{url:"zh/basic/vuepress/theme/index.html",revision:"515a8264e984a8bd307ac1b112faf539"},{url:"zh/config/index.html",revision:"730be6f55004b886e91bb6316ee47501"},{url:"zh/config/page/index.html",revision:"1c8f1fa0e5fb34be86c0b19b5e11e793"},{url:"zh/config/plugin/container/index.html",revision:"38b7aa16771cf7f88519527700d11ca2"},{url:"zh/config/plugin/copyright/index.html",revision:"ccd382bff459eae40fdd2110ea467411"},{url:"zh/config/plugin/index.html",revision:"f48b6e0b7616c008f58de09a64aab833"},{url:"zh/config/stylus/index.html",revision:"8b7e9b8a956f3958ad11d832431b39c9"},{url:"zh/config/theme/apperance/index.html",revision:"172891d9cf44d00cc14f6eeda8bfab71"},{url:"zh/config/theme/default/index.html",revision:"a830638962dcce812c359190a014a943"},{url:"zh/config/theme/feature/index.html",revision:"746a6390a163f68b3d63c0d5060ff82c"},{url:"zh/config/theme/index.html",revision:"67e3ea4dd515f6f098f1ef6fae2a9bee"},{url:"zh/config/theme/plugin/index.html",revision:"17bc85079612e304f7fe0808395f07fa"},{url:"zh/demo/index.html",revision:"4a30672fe6386f6b9043dd7a88bd821b"},{url:"zh/FAQ/index.html",revision:"80781f4364ab24e6a9b9609e6b460bc6"},{url:"zh/guide/feature/blog/index.html",revision:"3abb54490af4dd102d3f3c59285b400b"},{url:"zh/guide/feature/comment/index.html",revision:"6b9d21e899ddf426e6bb69cc41510608"},{url:"zh/guide/feature/component/index.html",revision:"ff057528150ecb70c95f49c689fe4767"},{url:"zh/guide/feature/encrypt/index.html",revision:"2a19aa1a42e365cf7985676396961da1"},{url:"zh/guide/feature/feed/index.html",revision:"35c7b69160bf1c86e18c2c916d70f4fe"},{url:"zh/guide/feature/icon/index.html",revision:"e340ff84967fc5970b4b606e7a2cfc41"},{url:"zh/guide/feature/index.html",revision:"a7307c1e820dcdfb88719fd861ac4f32"},{url:"zh/guide/feature/markdown/align/index.html",revision:"5366fc92240837a39f04a97f60a2b626"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"e8d51e6cc02daf38b51590dc314a750d"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"b4e72bcbd9378e9542d5f668c75d9bb8"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"9ed7480294fe304f621cbbbafdb53c35"},{url:"zh/guide/feature/markdown/index.html",revision:"9af3e3af523da764cc839ec28e12ed0e"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"6a2333ed6b6942714868c85846afba53"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"aa564236d84a09f13b9dca6403ceb8eb"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"53cb6ea52dd6b73fbf47aaed50fb2068"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"ac376bf49f56208c62caa47d680938d2"},{url:"zh/guide/feature/page-info/index.html",revision:"97a25b6118f9cad84c67ea232cf0757d"},{url:"zh/guide/feature/page/index.html",revision:"825e100d793d113675771b313fa9c058"},{url:"zh/guide/feature/pwa/index.html",revision:"e8f0dec83daec77d63f018a87f1d3bb7"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"4d98a483895a4a0262b1619c28824ff3"},{url:"zh/guide/feature/theme/index.html",revision:"c174b52189a24609d8a12c9803a38932"},{url:"zh/guide/feature/typescript/index.html",revision:"f503ec134f2a078783ebc58f7ddbbc4f"},{url:"zh/guide/index.html",revision:"fdb601200766142294df9d65af19d9b0"},{url:"zh/guide/install/index.html",revision:"56c9ac48ae78f2219843eefe4fa5671d"},{url:"zh/guide/layout/blog/index.html",revision:"1dee5f5b63d69da6ffa931c2459c19d6"},{url:"zh/guide/layout/home/index.html",revision:"b4ddd37396f5d2d034f4ba0c65464f2b"},{url:"zh/guide/layout/index.html",revision:"3647785ea5461db1f2645c941b160235"},{url:"zh/guide/layout/navbar/index.html",revision:"a5bf9335c1c3c1c286a3fbbd72b26bcb"},{url:"zh/guide/layout/page/index.html",revision:"7c35506fda50ae501555b59f94c15074"},{url:"zh/guide/layout/sidebar/index.html",revision:"a7021767019364bf81aab7c439df377e"},{url:"zh/guide/layout/slides/index.html",revision:"ca955bad4347ddf5c7ea084e3e0bda17"},{url:"zh/index.html",revision:"9460600c0c0d683251db72789edd2d01"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.c3dc68c7.png",revision:"c3dc68c733676095a82cf811b2ee4f97"},{url:"assets/img/darkmode.49bdcce2.png",revision:"49bdcce283cf45658b2f14dd59581194"},{url:"assets/img/darkmode.f4b38a9a.png",revision:"f4b38a9a3c54865f430513351d683b7c"},{url:"assets/img/home.41b92bac.png",revision:"41b92bacb4e514c1a9dd0416542292fb"},{url:"assets/img/home.b0fc3313.png",revision:"b0fc3313e9b47b58bb3149a37176fdb5"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.576a16be.png",revision:"576a16be27110e8e710442bbc8f98416"},{url:"assets/img/iconfont-edit.ae174b67.png",revision:"ae174b67620849ac9aebf32ab1dcf9a2"},{url:"assets/img/iconfont-new.10965ce6.png",revision:"10965ce685dd8be3bc8a2898be737970"},{url:"assets/img/slides.1194fc70.png",revision:"1194fc70c2e81246453d8fdd819cab6e"},{url:"assets/img/slides.72c24f1c.png",revision:"72c24f1c815dcaca94bbc1cb45238d82"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=f(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-17f866c8"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f6015225.css",revision:"3434a43116d9f0f773ee2a1c1dccbdfc"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/35.52733ba6.js",revision:"0ea93a6610c5ff23dd6ad62e3d99ec59"},{url:"assets/js/36.67545e77.js",revision:"bf235f8d51bd7dfc3f21eba516248faa"},{url:"assets/js/37.238cf5ec.js",revision:"2f5c2f2801e26622f566e0eb9eb564a6"},{url:"assets/js/38.3461581c.js",revision:"efa0c405c890bdba8957a2dd7c7514fd"},{url:"assets/js/39.6155f744.js",revision:"0c53a8e7765a48165c27b85f1c41597f"},{url:"assets/js/app.153a1322.js",revision:"f1e61148e492057cfcafaa0557e855c2"},{url:"assets/js/layout-Blog.20488c90.js",revision:"8d72b2379f01ba402e26bc04aae39284"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.dbf425d8.js",revision:"720a351b62d110d3bada8e92c0fcf568"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.48dea84f.js",revision:"0b3c927dc52d32bccbac0c2674724296"},{url:"assets/js/layout-Layout.0d789ef2.js",revision:"077c586f693e708550eb199c937ee8ca"},{url:"assets/js/layout-NotFound.1e6cf430.js",revision:"7a97e303aefdbecabf88956c0c4e288b"},{url:"assets/js/layout-Slide.f6884210.js",revision:"3d9fd3146daaa9c1a6391ddb130453b5"},{url:"assets/js/page-APIConfig.545776fd.js",revision:"a509fe3274baea7eee3f861df37cc915"},{url:"assets/js/page-BitBucketOAuthConsumer.047ca0df.js",revision:"ca3748237eb17deec5b66dc60915227d"},{url:"assets/js/page-GiteeThirdPartyApplication.43a5eb33.js",revision:"57500f05e84c9c1f18771c2c0f83381a"},{url:"assets/js/page-Gitee第三方应用.f91750b4.js",revision:"d1b13638867576589ccb04086c3ca215"},{url:"assets/js/page-GitHubOAuthApp.c208db4a.js",revision:"7a9944922a3efd593aede09333b9d6af"},{url:"assets/js/page-GitLabApplication.dd4f5436.js",revision:"3fb56351b44aef0c7e492523b6305833"},{url:"assets/js/page-Guide.3a809199.js",revision:"a2434571e6e751544c0bf067d460e02a"},{url:"assets/js/page-Home.ad0b4937.js",revision:"af5a8fd5fcea4d38f618162e453225b7"},{url:"assets/js/page-Pageinformation.6c06add8.js",revision:"d2a3d87bcbf688eb3c61ddddacd5220c"},{url:"assets/js/page-SupportedPlatforms.20b0afc5.js",revision:"bb87c3c422d4f76ce2fa71ac11d4e858"},{url:"assets/js/page-UsingVssue.d8352af0.js",revision:"1ccb5e6943c02c655cce29e438d6617f"},{url:"assets/js/page-Valine.20a5f4f1.js",revision:"ad7df970f58e562b66a398266b3b0787"},{url:"assets/js/page-ValineConfig.c2bbb90c.js",revision:"6217f6a25d463ac4686ef86410eb918e"},{url:"assets/js/page-valine配置.1aeb84b8.js",revision:"0233143b487c47ec367350389703fd83"},{url:"assets/js/page-VssueOptions.8c4d5a3a.js",revision:"e4d2986cc9735cf42ee1e6f2943b35f1"},{url:"assets/js/page-Vssue配置.be7cb850.js",revision:"a44a26951dceaddff0cb82d079d4e408"},{url:"assets/js/page-主页.7926e110.js",revision:"8185dfe8f594bbe02d6572164c8b6c22"},{url:"assets/js/page-使用Vssue.9ff84c15.js",revision:"03af4c0b7007177a395b711b374f8563"},{url:"assets/js/page-指南.830b9a9b.js",revision:"de0b13a8d94f6dd4b206015c61f4fac8"},{url:"assets/js/page-支持的代码托管平台.a653d467.js",revision:"e7f104a1ea74cdab3aa78d4b19163339"},{url:"assets/js/page-配置.3803e6d8.js",revision:"4987eff5834aba8aa14071dcd6af2a15"},{url:"assets/js/page-页面信息.7af0e377.js",revision:"3a6bdeaa7c4c17f7ce876be71e65c470"},{url:"assets/js/vendors~flowchart.f009c16e.js",revision:"00a0f0923626cee6f95595c8942477b7"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.2f888c39.js",revision:"5f7a290803329dc899c2bc7f703658ff"},{url:"assets/js/vendors~photo-swipe.6e483747.js",revision:"62ca730a0092655aa6928e7c7961a659"},{url:"assets/js/vendors~reveal.480f2553.js",revision:"760781865e94d4c9dcdcb77fd685ec56"},{url:"assets/js/vendors~valine.ec96139f.js",revision:"a0c96a8d8a5c2d35a7c5c3b4b4d010b3"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"96edc316cf7a1cb1afebf111540ecd84"},{url:"config/index.html",revision:"78fa861315bb74b66be30aa28619c6df"},{url:"config/valine/index.html",revision:"84c40d47023412b8339f153504fbe530"},{url:"config/vssue/index.html",revision:"47fe834513df636c67594bf118bf993a"},{url:"guide/bitbucket/index.html",revision:"83b24ea1adedd627250ed8c4c1e03052"},{url:"guide/gitee/index.html",revision:"1b8ab253f643a18fb85ef269ae27bcbb"},{url:"guide/github/index.html",revision:"b1a60bd83f75b71f83bdf6a5d5025464"},{url:"guide/gitlab/index.html",revision:"75325bcedded8b99d0b6faefec1225d3"},{url:"guide/index.html",revision:"51d5a0a74b47e742f08bff7ab06c7166"},{url:"guide/page-info/index.html",revision:"b649288106a051bc268d25cc20b6e057"},{url:"guide/supported-platforms/index.html",revision:"f7c5c533bcaf23007234c90ef185d3d6"},{url:"guide/valine/index.html",revision:"271e431d8eece627179bca55eb46f798"},{url:"guide/vssue/index.html",revision:"3c4947c620353242d47791d334b3dc49"},{url:"index.html",revision:"82e27c69246b5aff1972f8d423a170cb"},{url:"zh/config/index.html",revision:"84385c775a2c025c66a28b4ccb95ba8c"},{url:"zh/config/valine/index.html",revision:"010d2443418e5b89189812913eaf3d19"},{url:"zh/config/vssue/index.html",revision:"ba0529fac11bdcfaf8492e59a3840710"},{url:"zh/guide/bitbucket/index.html",revision:"0db63b5fe9602bb5c51751a5c620181d"},{url:"zh/guide/gitee/index.html",revision:"8297d3ce2011b5334339f5f8037e390f"},{url:"zh/guide/github/index.html",revision:"d5ffffc8fb7906cfe85d50291797b373"},{url:"zh/guide/gitlab/index.html",revision:"62ff82a541345b603dba120f5b2e5b45"},{url:"zh/guide/index.html",revision:"f6920e1fea1b19a7cf93d3b2d554e2f2"},{url:"zh/guide/page-info/index.html",revision:"c0c21cb93468e5321ff58856e0bcecb4"},{url:"zh/guide/supported-platforms/index.html",revision:"d3bfdf0b211fe96af6a14e70e53ead64"},{url:"zh/guide/valine/index.html",revision:"9540c45e74f20f4e92008eff3cb30d8c"},{url:"zh/guide/vssue/index.html",revision:"aa81765b1d6a26078a4b9230772719dd"},{url:"zh/index.html",revision:"bc6da534a7ae92ba639bab714e471648"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"8fb998d2c4b2f220ffe160bec5a8b7e8"},{url:"assets/icon/config-monochrome.png",revision:"9b595baf417a780a9303b27cbbd90b08"},{url:"assets/icon/guide-maskable.png",revision:"5cb5beea2e1d662315456d0ae0d5b859"},{url:"assets/icon/guide-monochrome.png",revision:"e7cdce40205b69056052c55ede7ee4b0"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/oauth-app-bitbucket-02.c8beb6e8.png",revision:"c8beb6e894f63ffc339ba00dcb65e3b4"},{url:"assets/img/oauth-app-bitbucket-03.09b5ed37.png",revision:"09b5ed3786e81568470486ef9896185c"},{url:"assets/img/oauth-app-bitbucket-04.0c45a140.png",revision:"0c45a1403e8f2ab38b739e63702ddb0e"},{url:"assets/img/oauth-app-bitbucket-05.a2f2d6ac.png",revision:"a2f2d6acfa737a030adbdcd75aa971c1"},{url:"assets/img/oauth-app-bitbucket-07.cf8fc7f4.png",revision:"cf8fc7f4b4929303a4b9f46720a43b88"},{url:"assets/img/oauth-app-bitbucket-08.7f00911c.png",revision:"7f00911ca41acb2b1a046ee0568af107"},{url:"assets/img/oauth-app-bitbucket-09.c2ab277d.png",revision:"c2ab277d8ad4e98c7f4f691aa7ea72fb"},{url:"assets/img/oauth-app-bitbucket-10.f37491f1.png",revision:"f37491f109980cbe7914f34e28846a71"},{url:"assets/img/oauth-app-bitbucket-11.79a3f6d2.png",revision:"79a3f6d233e75495005ac449ce11641d"},{url:"assets/img/oauth-app-bitbucket-12.089f6791.png",revision:"089f679110bd790abaa8f3c23a44c611"},{url:"assets/img/oauth-app-bitbucket-13.7aa7d9c4.png",revision:"7aa7d9c466b279fde1d6eb54e77e82fa"},{url:"assets/img/oauth-app-gitee-01.2a3c853a.png",revision:"2a3c853a940c5a6c57d29bcd8a9eb590"},{url:"assets/img/oauth-app-gitee-03.363b3a3c.png",revision:"363b3a3c6cd4837594809fd4dc84cfa0"},{url:"assets/img/oauth-app-gitee-05.bffbad68.png",revision:"bffbad6850c6fd028a5853e362136de9"},{url:"assets/img/oauth-app-gitee-06.6e88fc1c.png",revision:"6e88fc1c896e84776053fcb4322e25e2"},{url:"assets/img/oauth-app-gitee-07.ba63f365.png",revision:"ba63f365645adcaf42e18e50ced4b8af"},{url:"assets/img/oauth-app-gitee-08.9bf7b38e.png",revision:"9bf7b38e1e9e14557e8f556d191b180b"},{url:"assets/img/oauth-app-gitee-09.bd995516.png",revision:"bd99551642054ab701428019a3c7a66b"},{url:"assets/img/oauth-app-github-01.7919ae3d.png",revision:"7919ae3d0dc3d6e3c9a175b0237bc390"},{url:"assets/img/oauth-app-github-02.0d3bf018.png",revision:"0d3bf018dede16124c37f53e933982a8"},{url:"assets/img/oauth-app-github-03.affa7728.png",revision:"affa7728746e815425b57991fce7fdc5"},{url:"assets/img/oauth-app-github-04.26a18f63.png",revision:"26a18f6346d2cbcf8f62d3526efdbb9a"},{url:"assets/img/oauth-app-github-05.de3a1e8b.png",revision:"de3a1e8b71d73434c55ee6a02846320c"},{url:"assets/img/oauth-app-github-06.2dfcd3c0.png",revision:"2dfcd3c030f75a738185d96ad1cc861c"},{url:"assets/img/oauth-app-github-07.ca635603.png",revision:"ca635603c2c60699528ba6d71e5d5b28"},{url:"assets/img/oauth-app-github-08.a426516b.png",revision:"a426516b6bd7b9ab7d7713c4c9706ddb"},{url:"assets/img/oauth-app-github-09.7973e808.png",revision:"7973e8084c2b285a06afa61d4d2ce5eb"},{url:"assets/img/oauth-app-github-10.82a78dae.png",revision:"82a78dae7d2daba58c60903e03172236"},{url:"assets/img/oauth-app-gitlab-01.fce804e9.png",revision:"fce804e92d44edbca5e1718033c6ca7b"},{url:"assets/img/oauth-app-gitlab-02.5086d383.png",revision:"5086d3832fdd5c502e67146179ed2667"},{url:"assets/img/oauth-app-gitlab-03.579755c0.png",revision:"579755c057a278c4cb560815224f4a69"},{url:"assets/img/oauth-app-gitlab-04.452c719d.png",revision:"452c719df7bd6c0e2e8b551bbdb5c286"},{url:"assets/img/oauth-app-gitlab-05.5ce60c45.png",revision:"5ce60c45e5f3953580857aecba0060df"},{url:"assets/img/oauth-app-gitlab-06.f94755f6.png",revision:"f94755f6c0e1a8f3afe8801949556d7a"},{url:"assets/img/oauth-app-gitlab-07.b5f392f5.png",revision:"b5f392f51bb73b882885c582c21a13b3"},{url:"assets/img/oauth-app-gitlab-08.a422bfa3.png",revision:"a422bfa3a70f9b84cad3d9d3d510620d"},{url:"assets/img/oauth-app-gitlab-09.a508e2d4.png",revision:"a508e2d495c213affbdbf3b668e1a399"}],{}),e.cleanupOutdatedCaches()}));
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

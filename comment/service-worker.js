if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=f(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-97c03f0a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.858b9bb5.css",revision:"53679b904eee64ebba0b106045768963"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/35.c078481f.js",revision:"e9e47dc9f65ad0ef9ea027d35493c7ce"},{url:"assets/js/36.e62297c3.js",revision:"3b9b1d2a5fe6c28da7175d2774ccc83d"},{url:"assets/js/37.c2d66659.js",revision:"738437ecc93833e8a56ea2c9da200a85"},{url:"assets/js/38.7eeb1a8e.js",revision:"fbf01d5b6c8eb6e72e16024b8d0ca91a"},{url:"assets/js/39.9cd16fd8.js",revision:"7b7bcb7d07a50b3318f878e1ad90edf9"},{url:"assets/js/app.8683152b.js",revision:"f80b23280a83b0c5c758d35796ad53bd"},{url:"assets/js/layout-Blog.38be6a2f.js",revision:"2b1e79a148854a757624dbee496fdc51"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.bba38fde.js",revision:"f6227e9e103ae84bf06504099a30a422"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.fb1f1ad7.js",revision:"d7244ce6c5348a76ec8ac21304191243"},{url:"assets/js/layout-Layout.3c517eab.js",revision:"608f6bd9b9b90d2900bedd97328b6555"},{url:"assets/js/layout-NotFound.92c35e06.js",revision:"886d711c62d017d842abeff7e8e810fd"},{url:"assets/js/layout-Slide.9ce5b58d.js",revision:"0518801415b583c07659f0b5c73a663f"},{url:"assets/js/page-APIConfig.d3de5e15.js",revision:"b11893813444c5ad5062fcb90ef4fb79"},{url:"assets/js/page-BitBucketOAuthConsumer.34c5e912.js",revision:"dbbc5bf004ce19eadc914db47baa20ee"},{url:"assets/js/page-GiteeThirdPartyApplication.6e6ba744.js",revision:"df37b98deafb5afc5049629df57cf5b8"},{url:"assets/js/page-Gitee第三方应用.37d8176d.js",revision:"88316c8735778b5d6cb6a33a4afe0d32"},{url:"assets/js/page-GitHubOAuthApp.20b3f993.js",revision:"002c716cff6dfaec28439d51a0b647b9"},{url:"assets/js/page-GitLabApplication.8bb87a24.js",revision:"d2f1a00be38bef383a93396f77a9aae5"},{url:"assets/js/page-Guide.fd1b625f.js",revision:"592445b4a8c0a3728db608f63da8fe35"},{url:"assets/js/page-Home.59393646.js",revision:"272f1ec197c56f67c4ec7a2544bdcb1c"},{url:"assets/js/page-Pageinformation.7e82793c.js",revision:"368c265e5155bd11b2e6615e38b3bf6a"},{url:"assets/js/page-SupportedPlatforms.28898c35.js",revision:"4daa73c1bb4865e74f7dddba9fa06f14"},{url:"assets/js/page-UsingVssue.61a96c9e.js",revision:"10e24dd665eeb318d321b04f2f7281de"},{url:"assets/js/page-Valine.211f7c07.js",revision:"cbd0f730753b0d004b656c5db38a69dc"},{url:"assets/js/page-ValineConfig.fc95df16.js",revision:"c0dcf086df2f715d8996a821028c0315"},{url:"assets/js/page-valine配置.96c27ddf.js",revision:"6a26b5d9762fe5302a676f7dd6333e64"},{url:"assets/js/page-VssueOptions.88fff13c.js",revision:"87bec47765358357684c9dc762c1662c"},{url:"assets/js/page-Vssue配置.0030fb1f.js",revision:"7fa56f29b83648b7d00345af816ab1cd"},{url:"assets/js/page-主页.c34a00e5.js",revision:"98fd8c492994e4bdd3997eee8b2a0b0b"},{url:"assets/js/page-使用Vssue.5252d668.js",revision:"4b1a803f2341cc0fb49b8116e183a1ce"},{url:"assets/js/page-指南.e0d575ac.js",revision:"4c1eab3f562196e4d7d04f3fefe3f088"},{url:"assets/js/page-支持的代码托管平台.dd0d913f.js",revision:"5d404861a49e4cbda5a8f9a4e0bf5ce3"},{url:"assets/js/page-配置.ff4c5c22.js",revision:"61e83cd3a03ef3fcc25a1a9a1a66b713"},{url:"assets/js/page-页面信息.9fce460e.js",revision:"9e3162470449d85e9147e2e161454e5a"},{url:"assets/js/vendors~flowchart.73dbf370.js",revision:"37ebb45e4dd8c7da44424c7a8955bc8f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4c1785e3.js",revision:"caf25b6a8cdb6919ef5fdea38c588d1f"},{url:"assets/js/vendors~photo-swipe.156869fe.js",revision:"c8b4a825abb989dbb977f400d75e62de"},{url:"assets/js/vendors~reveal.e8f782ce.js",revision:"e057fe6c6cdfbe3f377e152c7a8bee75"},{url:"assets/js/vendors~valine.63a4bcc2.js",revision:"c8ffb40b1f741f9fb8450d85f0dffc31"},{url:"logo.svg",revision:"c1cc507c5ecf9ef91f5bc8e94d15f94e"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"302ee03a4750c785c9a2937f660468c5"},{url:"config/index.html",revision:"f4e8c036516b3d3cbef71cc22b36a21f"},{url:"config/valine/index.html",revision:"eb4ca98c0ce0787488684a54b5168a49"},{url:"config/vssue/index.html",revision:"a39b7797ca47b5e2d0288228917c4357"},{url:"guide/bitbucket/index.html",revision:"0c4ed9e7e1c30b49b23002dd835acb07"},{url:"guide/gitee/index.html",revision:"8b5818cabd34af569390f87257dbc7a3"},{url:"guide/github/index.html",revision:"66bdcb170feb9ec9576715d99453342f"},{url:"guide/gitlab/index.html",revision:"07e3e362163834835efbd12f2fbf9b0e"},{url:"guide/index.html",revision:"7945255df9f863fac059d138c3a26c48"},{url:"guide/page-info/index.html",revision:"9cf929b85210678cd3f66f93b382141c"},{url:"guide/supported-platforms/index.html",revision:"eaceda27012851ef3375139df56f5cf0"},{url:"guide/valine/index.html",revision:"5fbe55dff7b455e820d72423efc127aa"},{url:"guide/vssue/index.html",revision:"ee3ee84fee8ab14ca7ac7ac34c29b4e5"},{url:"index.html",revision:"c5ca1e7886ddc89810fb13845bc04d68"},{url:"zh/config/index.html",revision:"6badecc2ad1a8d7f61a73a2ae12aee14"},{url:"zh/config/valine/index.html",revision:"c7f573d7a0f7d355a168822c0aa8821a"},{url:"zh/config/vssue/index.html",revision:"73c8f0819877d9cc2bfee57e6f979ce2"},{url:"zh/guide/bitbucket/index.html",revision:"c3cdbadc187604a01560d48cd34c1766"},{url:"zh/guide/gitee/index.html",revision:"d95cf63d760fd4f484fa6b7d7cb369aa"},{url:"zh/guide/github/index.html",revision:"2b6fa49e7729ed933b9302b15bd5716f"},{url:"zh/guide/gitlab/index.html",revision:"26fc1d1f728e102bed35e7729525a826"},{url:"zh/guide/index.html",revision:"af3f2e8489c887261076c5dc2f49dbc3"},{url:"zh/guide/page-info/index.html",revision:"cd9b6f587616d66deab4a4ce901df606"},{url:"zh/guide/supported-platforms/index.html",revision:"7754b65bd8718bbdee8ccf841e7bcd7e"},{url:"zh/guide/valine/index.html",revision:"ec7895d849f8bdb18dd6beb3032f4c40"},{url:"zh/guide/vssue/index.html",revision:"02f2c08e9b9b624a775d081344b8fd5a"},{url:"zh/index.html",revision:"a64ab3bbfcafd38efc8fc00b46568c29"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"8fb998d2c4b2f220ffe160bec5a8b7e8"},{url:"assets/icon/config-monochrome.png",revision:"9b595baf417a780a9303b27cbbd90b08"},{url:"assets/icon/guide-maskable.png",revision:"5cb5beea2e1d662315456d0ae0d5b859"},{url:"assets/icon/guide-monochrome.png",revision:"e7cdce40205b69056052c55ede7ee4b0"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/oauth-app-bitbucket-02.c8beb6e8.png",revision:"c8beb6e894f63ffc339ba00dcb65e3b4"},{url:"assets/img/oauth-app-bitbucket-03.09b5ed37.png",revision:"09b5ed3786e81568470486ef9896185c"},{url:"assets/img/oauth-app-bitbucket-04.0c45a140.png",revision:"0c45a1403e8f2ab38b739e63702ddb0e"},{url:"assets/img/oauth-app-bitbucket-05.a2f2d6ac.png",revision:"a2f2d6acfa737a030adbdcd75aa971c1"},{url:"assets/img/oauth-app-bitbucket-07.cf8fc7f4.png",revision:"cf8fc7f4b4929303a4b9f46720a43b88"},{url:"assets/img/oauth-app-bitbucket-08.7f00911c.png",revision:"7f00911ca41acb2b1a046ee0568af107"},{url:"assets/img/oauth-app-bitbucket-09.c2ab277d.png",revision:"c2ab277d8ad4e98c7f4f691aa7ea72fb"},{url:"assets/img/oauth-app-bitbucket-10.f37491f1.png",revision:"f37491f109980cbe7914f34e28846a71"},{url:"assets/img/oauth-app-bitbucket-11.79a3f6d2.png",revision:"79a3f6d233e75495005ac449ce11641d"},{url:"assets/img/oauth-app-bitbucket-12.089f6791.png",revision:"089f679110bd790abaa8f3c23a44c611"},{url:"assets/img/oauth-app-bitbucket-13.7aa7d9c4.png",revision:"7aa7d9c466b279fde1d6eb54e77e82fa"},{url:"assets/img/oauth-app-gitee-01.2a3c853a.png",revision:"2a3c853a940c5a6c57d29bcd8a9eb590"},{url:"assets/img/oauth-app-gitee-03.363b3a3c.png",revision:"363b3a3c6cd4837594809fd4dc84cfa0"},{url:"assets/img/oauth-app-gitee-05.bffbad68.png",revision:"bffbad6850c6fd028a5853e362136de9"},{url:"assets/img/oauth-app-gitee-06.6e88fc1c.png",revision:"6e88fc1c896e84776053fcb4322e25e2"},{url:"assets/img/oauth-app-gitee-07.ba63f365.png",revision:"ba63f365645adcaf42e18e50ced4b8af"},{url:"assets/img/oauth-app-gitee-08.9bf7b38e.png",revision:"9bf7b38e1e9e14557e8f556d191b180b"},{url:"assets/img/oauth-app-gitee-09.bd995516.png",revision:"bd99551642054ab701428019a3c7a66b"},{url:"assets/img/oauth-app-github-01.7919ae3d.png",revision:"7919ae3d0dc3d6e3c9a175b0237bc390"},{url:"assets/img/oauth-app-github-02.0d3bf018.png",revision:"0d3bf018dede16124c37f53e933982a8"},{url:"assets/img/oauth-app-github-03.affa7728.png",revision:"affa7728746e815425b57991fce7fdc5"},{url:"assets/img/oauth-app-github-04.26a18f63.png",revision:"26a18f6346d2cbcf8f62d3526efdbb9a"},{url:"assets/img/oauth-app-github-05.de3a1e8b.png",revision:"de3a1e8b71d73434c55ee6a02846320c"},{url:"assets/img/oauth-app-github-06.2dfcd3c0.png",revision:"2dfcd3c030f75a738185d96ad1cc861c"},{url:"assets/img/oauth-app-github-07.ca635603.png",revision:"ca635603c2c60699528ba6d71e5d5b28"},{url:"assets/img/oauth-app-github-08.a426516b.png",revision:"a426516b6bd7b9ab7d7713c4c9706ddb"},{url:"assets/img/oauth-app-github-09.7973e808.png",revision:"7973e8084c2b285a06afa61d4d2ce5eb"},{url:"assets/img/oauth-app-github-10.82a78dae.png",revision:"82a78dae7d2daba58c60903e03172236"},{url:"assets/img/oauth-app-gitlab-01.fce804e9.png",revision:"fce804e92d44edbca5e1718033c6ca7b"},{url:"assets/img/oauth-app-gitlab-02.5086d383.png",revision:"5086d3832fdd5c502e67146179ed2667"},{url:"assets/img/oauth-app-gitlab-03.579755c0.png",revision:"579755c057a278c4cb560815224f4a69"},{url:"assets/img/oauth-app-gitlab-04.452c719d.png",revision:"452c719df7bd6c0e2e8b551bbdb5c286"},{url:"assets/img/oauth-app-gitlab-05.5ce60c45.png",revision:"5ce60c45e5f3953580857aecba0060df"},{url:"assets/img/oauth-app-gitlab-06.f94755f6.png",revision:"f94755f6c0e1a8f3afe8801949556d7a"},{url:"assets/img/oauth-app-gitlab-07.b5f392f5.png",revision:"b5f392f51bb73b882885c582c21a13b3"},{url:"assets/img/oauth-app-gitlab-08.a422bfa3.png",revision:"a422bfa3a70f9b84cad3d9d3d510620d"},{url:"assets/img/oauth-app-gitlab-09.a508e2d4.png",revision:"a508e2d495c213affbdbf3b668e1a399"}],{}),e.cleanupOutdatedCaches()}));
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

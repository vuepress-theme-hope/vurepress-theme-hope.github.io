if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}}))).then((e=>{const a=f(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-97c03f0a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.dd1bb6fe.css",revision:"f5e8a219ed117ef5e4cb1868777ecda1"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/35.c078481f.js",revision:"e9e47dc9f65ad0ef9ea027d35493c7ce"},{url:"assets/js/36.e62297c3.js",revision:"3b9b1d2a5fe6c28da7175d2774ccc83d"},{url:"assets/js/37.c2d66659.js",revision:"738437ecc93833e8a56ea2c9da200a85"},{url:"assets/js/38.7eeb1a8e.js",revision:"fbf01d5b6c8eb6e72e16024b8d0ca91a"},{url:"assets/js/39.9cd16fd8.js",revision:"7b7bcb7d07a50b3318f878e1ad90edf9"},{url:"assets/js/app.37e7f347.js",revision:"562a2e177d8f757d5c654172910f1ee4"},{url:"assets/js/layout-Blog.38be6a2f.js",revision:"2b1e79a148854a757624dbee496fdc51"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.3dd8318c.js",revision:"60075bf6b22d5bb9548be0882256f1ff"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.bc242b1f.js",revision:"04a85fd19baabf4211b5fb8682f62921"},{url:"assets/js/layout-Layout.09f33f5e.js",revision:"f6efc520c06b657b17e7aec970f46ca4"},{url:"assets/js/layout-NotFound.92c35e06.js",revision:"886d711c62d017d842abeff7e8e810fd"},{url:"assets/js/layout-Slide.9ce5b58d.js",revision:"0518801415b583c07659f0b5c73a663f"},{url:"assets/js/page-APIConfig.0dbccf2c.js",revision:"a76b4e2556d80481633696561204f929"},{url:"assets/js/page-BitBucketOAuthConsumer.2e0c4cfc.js",revision:"6dd00c10db1b8b831fa1014ad549226e"},{url:"assets/js/page-GiteeThirdPartyApplication.dfb5fd45.js",revision:"1143f83ca4da38c7a41f71b54bbd659c"},{url:"assets/js/page-Gitee第三方应用.e5ddaf5e.js",revision:"c13671b5eaab5542ab1e9e73f0b266a0"},{url:"assets/js/page-GitHubOAuthApp.63b50373.js",revision:"c8f97b4eef2f676486257025bc67fb01"},{url:"assets/js/page-GitLabApplication.328ff44d.js",revision:"bcc6d740a7f018cc9140ea135aa3c273"},{url:"assets/js/page-Guide.3a8e840a.js",revision:"288249434dbf65b67acf0d4208ee44d1"},{url:"assets/js/page-Home.a2e4550c.js",revision:"c44cea1d6a81b3bc83741e0de6a3587c"},{url:"assets/js/page-Pageinformation.a96242fe.js",revision:"0e721392cd2d90f9edee258b57cb96c5"},{url:"assets/js/page-SupportedPlatforms.4798cad4.js",revision:"2c6aada770e40ef2050ffb91f338828a"},{url:"assets/js/page-UsingVssue.57fbe3a1.js",revision:"db7bd72cce952527312e231b7fccdf6e"},{url:"assets/js/page-Valine.b9e45263.js",revision:"3e0ae2b0113636fa9c3137b519c05419"},{url:"assets/js/page-ValineConfig.fc95df16.js",revision:"c0dcf086df2f715d8996a821028c0315"},{url:"assets/js/page-valine配置.0592a708.js",revision:"192021ade2cf960e94007688f6a33d59"},{url:"assets/js/page-VssueOptions.88fff13c.js",revision:"87bec47765358357684c9dc762c1662c"},{url:"assets/js/page-Vssue配置.2de33086.js",revision:"4e5e21292ee38435b3006e9f520b7a95"},{url:"assets/js/page-主页.08febec0.js",revision:"63163ab2e13e99e0d697c4b24097ccce"},{url:"assets/js/page-使用Vssue.8649e021.js",revision:"17436e3a2c8b0065c39f4b2f6c193dd0"},{url:"assets/js/page-指南.8ee41b67.js",revision:"990820d960c5ea6dde48acd2ed8f18f1"},{url:"assets/js/page-支持的代码托管平台.05c133f3.js",revision:"188a0b43bb77327d3fd2f9d6c00ed55d"},{url:"assets/js/page-配置.e52c6f47.js",revision:"d1a5aaa6726b0d4d09453729012e6d94"},{url:"assets/js/page-页面信息.51060b0f.js",revision:"fe2a5b36f76a6ebb0059c817dfa581de"},{url:"assets/js/vendors~flowchart.73dbf370.js",revision:"37ebb45e4dd8c7da44424c7a8955bc8f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4c1785e3.js",revision:"caf25b6a8cdb6919ef5fdea38c588d1f"},{url:"assets/js/vendors~photo-swipe.156869fe.js",revision:"c8b4a825abb989dbb977f400d75e62de"},{url:"assets/js/vendors~reveal.e8f782ce.js",revision:"e057fe6c6cdfbe3f377e152c7a8bee75"},{url:"assets/js/vendors~valine.63a4bcc2.js",revision:"c8ffb40b1f741f9fb8450d85f0dffc31"},{url:"logo.svg",revision:"c1cc507c5ecf9ef91f5bc8e94d15f94e"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"927ee64f0ec914c178d3273294ddbe0b"},{url:"config/index.html",revision:"56b7473226e4fc096b1b1543ad647671"},{url:"config/valine/index.html",revision:"b38cd04a6a7015492fc8d3a9279989fc"},{url:"config/vssue/index.html",revision:"df8d8f5b4f7ea41300f5462efc1909ee"},{url:"guide/bitbucket/index.html",revision:"8a4c5b6f32acb0bc77e2396636be6c19"},{url:"guide/gitee/index.html",revision:"d8567c69bb7a153448384be66b192849"},{url:"guide/github/index.html",revision:"849e6456666aa2593ffcb2e8ed8546ad"},{url:"guide/gitlab/index.html",revision:"99c76f48cd21c72a78ac9117d1fe410a"},{url:"guide/index.html",revision:"377baf78422b6cd76e9924a814123a75"},{url:"guide/page-info/index.html",revision:"4fa7429da47810cfdb74469ea659af4d"},{url:"guide/supported-platforms/index.html",revision:"121936ca299db1a9bea7350b130af718"},{url:"guide/valine/index.html",revision:"f900cfe9bd6884f9d82295196ed97e2d"},{url:"guide/vssue/index.html",revision:"74220e1c813b4d9876fe568b3eec148e"},{url:"index.html",revision:"c796c351b7c6bd4f5b97c7354589a222"},{url:"zh/config/index.html",revision:"e04635491bd9c6ac1ad994abccc9a41f"},{url:"zh/config/valine/index.html",revision:"fa74d9d11169b42dd396daffaaeafe4d"},{url:"zh/config/vssue/index.html",revision:"93c171cbe94ddcce70e7d9104c32d747"},{url:"zh/guide/bitbucket/index.html",revision:"f84fda7a984036feb5aba7b773c60475"},{url:"zh/guide/gitee/index.html",revision:"774373cf2d06cea86af501b61075aa42"},{url:"zh/guide/github/index.html",revision:"5273ecc232a1315b8873795d9439193e"},{url:"zh/guide/gitlab/index.html",revision:"7a0f639dc1eda858cb1729a2b7af4535"},{url:"zh/guide/index.html",revision:"99f01b68ed56876e7fed5aa7f265b403"},{url:"zh/guide/page-info/index.html",revision:"64096ba71ffd55ded931832174270b31"},{url:"zh/guide/supported-platforms/index.html",revision:"beaefab2904359053e87f9dc610c9e93"},{url:"zh/guide/valine/index.html",revision:"40fa92f485a3e10021f061ffac4d2313"},{url:"zh/guide/vssue/index.html",revision:"2d7f0ae5c2d943d34804c1d883297033"},{url:"zh/index.html",revision:"d94545537d898650014e88e16c0f213d"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"8fb998d2c4b2f220ffe160bec5a8b7e8"},{url:"assets/icon/config-monochrome.png",revision:"9b595baf417a780a9303b27cbbd90b08"},{url:"assets/icon/guide-maskable.png",revision:"5cb5beea2e1d662315456d0ae0d5b859"},{url:"assets/icon/guide-monochrome.png",revision:"e7cdce40205b69056052c55ede7ee4b0"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/oauth-app-bitbucket-02.c8beb6e8.png",revision:"c8beb6e894f63ffc339ba00dcb65e3b4"},{url:"assets/img/oauth-app-bitbucket-03.09b5ed37.png",revision:"09b5ed3786e81568470486ef9896185c"},{url:"assets/img/oauth-app-bitbucket-04.0c45a140.png",revision:"0c45a1403e8f2ab38b739e63702ddb0e"},{url:"assets/img/oauth-app-bitbucket-05.a2f2d6ac.png",revision:"a2f2d6acfa737a030adbdcd75aa971c1"},{url:"assets/img/oauth-app-bitbucket-07.cf8fc7f4.png",revision:"cf8fc7f4b4929303a4b9f46720a43b88"},{url:"assets/img/oauth-app-bitbucket-08.7f00911c.png",revision:"7f00911ca41acb2b1a046ee0568af107"},{url:"assets/img/oauth-app-bitbucket-09.c2ab277d.png",revision:"c2ab277d8ad4e98c7f4f691aa7ea72fb"},{url:"assets/img/oauth-app-bitbucket-10.f37491f1.png",revision:"f37491f109980cbe7914f34e28846a71"},{url:"assets/img/oauth-app-bitbucket-11.79a3f6d2.png",revision:"79a3f6d233e75495005ac449ce11641d"},{url:"assets/img/oauth-app-bitbucket-12.089f6791.png",revision:"089f679110bd790abaa8f3c23a44c611"},{url:"assets/img/oauth-app-bitbucket-13.7aa7d9c4.png",revision:"7aa7d9c466b279fde1d6eb54e77e82fa"},{url:"assets/img/oauth-app-gitee-01.2a3c853a.png",revision:"2a3c853a940c5a6c57d29bcd8a9eb590"},{url:"assets/img/oauth-app-gitee-03.363b3a3c.png",revision:"363b3a3c6cd4837594809fd4dc84cfa0"},{url:"assets/img/oauth-app-gitee-05.bffbad68.png",revision:"bffbad6850c6fd028a5853e362136de9"},{url:"assets/img/oauth-app-gitee-06.6e88fc1c.png",revision:"6e88fc1c896e84776053fcb4322e25e2"},{url:"assets/img/oauth-app-gitee-07.ba63f365.png",revision:"ba63f365645adcaf42e18e50ced4b8af"},{url:"assets/img/oauth-app-gitee-08.9bf7b38e.png",revision:"9bf7b38e1e9e14557e8f556d191b180b"},{url:"assets/img/oauth-app-gitee-09.bd995516.png",revision:"bd99551642054ab701428019a3c7a66b"},{url:"assets/img/oauth-app-github-01.7919ae3d.png",revision:"7919ae3d0dc3d6e3c9a175b0237bc390"},{url:"assets/img/oauth-app-github-02.0d3bf018.png",revision:"0d3bf018dede16124c37f53e933982a8"},{url:"assets/img/oauth-app-github-03.affa7728.png",revision:"affa7728746e815425b57991fce7fdc5"},{url:"assets/img/oauth-app-github-04.26a18f63.png",revision:"26a18f6346d2cbcf8f62d3526efdbb9a"},{url:"assets/img/oauth-app-github-05.de3a1e8b.png",revision:"de3a1e8b71d73434c55ee6a02846320c"},{url:"assets/img/oauth-app-github-06.2dfcd3c0.png",revision:"2dfcd3c030f75a738185d96ad1cc861c"},{url:"assets/img/oauth-app-github-07.ca635603.png",revision:"ca635603c2c60699528ba6d71e5d5b28"},{url:"assets/img/oauth-app-github-08.a426516b.png",revision:"a426516b6bd7b9ab7d7713c4c9706ddb"},{url:"assets/img/oauth-app-github-09.7973e808.png",revision:"7973e8084c2b285a06afa61d4d2ce5eb"},{url:"assets/img/oauth-app-github-10.82a78dae.png",revision:"82a78dae7d2daba58c60903e03172236"},{url:"assets/img/oauth-app-gitlab-01.fce804e9.png",revision:"fce804e92d44edbca5e1718033c6ca7b"},{url:"assets/img/oauth-app-gitlab-02.5086d383.png",revision:"5086d3832fdd5c502e67146179ed2667"},{url:"assets/img/oauth-app-gitlab-03.579755c0.png",revision:"579755c057a278c4cb560815224f4a69"},{url:"assets/img/oauth-app-gitlab-04.452c719d.png",revision:"452c719df7bd6c0e2e8b551bbdb5c286"},{url:"assets/img/oauth-app-gitlab-05.5ce60c45.png",revision:"5ce60c45e5f3953580857aecba0060df"},{url:"assets/img/oauth-app-gitlab-06.f94755f6.png",revision:"f94755f6c0e1a8f3afe8801949556d7a"},{url:"assets/img/oauth-app-gitlab-07.b5f392f5.png",revision:"b5f392f51bb73b882885c582c21a13b3"},{url:"assets/img/oauth-app-gitlab-08.a422bfa3.png",revision:"a422bfa3a70f9b84cad3d9d3d510620d"},{url:"assets/img/oauth-app-gitlab-09.a508e2d4.png",revision:"a508e2d495c213affbdbf3b668e1a399"}],{}),e.cleanupOutdatedCaches()}));
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

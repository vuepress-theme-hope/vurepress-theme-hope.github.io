if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-97c03f0a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.a69aa444.css",revision:"45af3d95348fcef32d03c6704e633bf5"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/39.2424ffa1.js",revision:"553ddfbeb6e93f1e2e70fa8a595ed733"},{url:"assets/js/40.41db8819.js",revision:"0bb62d2f535b452d496d0666eb12539d"},{url:"assets/js/41.8434fa7e.js",revision:"c5f98585fa1accdde924f8fa80f52762"},{url:"assets/js/42.0f60c11a.js",revision:"ff532bdf9d125b250adfc23ca477015b"},{url:"assets/js/43.a09c0c60.js",revision:"f22e24205ce44d0fc90c9c45b40937e9"},{url:"assets/js/app.c389ed65.js",revision:"109124be920c5eb707da834b59a56907"},{url:"assets/js/layout-Blog.22c4ff7a.js",revision:"7c75c6bd5c969da690c726d0322ac1cb"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ded3567a.js",revision:"e049a17c17dd49859b0bf5b655ccab5b"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.fb1f1ad7.js",revision:"d7244ce6c5348a76ec8ac21304191243"},{url:"assets/js/layout-Layout.83f98dd5.js",revision:"2bf29673d6c56e56a5b138b40aff5713"},{url:"assets/js/layout-NotFound.d97f659d.js",revision:"9a74f2ea896fe3686f87be87abb101f5"},{url:"assets/js/layout-Slide.c750be59.js",revision:"661411b61e577888371903eab313038f"},{url:"assets/js/page-CodeDemo.c73616ad.js",revision:"7353f1c90fbf0ef2d82d4fa3cac81ba1"},{url:"assets/js/page-Config.6a945dc9.js",revision:"fb62cebe88e6f86eaa9166c6fa19e0b0"},{url:"assets/js/page-Customalignment.eec752dd.js",revision:"493a8a3ae9297cf7eb0633bc5dd4032f"},{url:"assets/js/page-Demo.65eec836.js",revision:"2755777d59ad0f4a90b07493e8e5c807"},{url:"assets/js/page-Flowchart.786bfd05.js",revision:"767bfca5c01354177da550da065c52b5"},{url:"assets/js/page-Footnote.d34c7652.js",revision:"57f870c383c38ecd1b64f351045cffd5"},{url:"assets/js/page-GetStarted.2a43514b.js",revision:"cf3905016ec40690b77b4567a1a0f7a4"},{url:"assets/js/page-Home.dddbf96f.js",revision:"4b4dc31a38c57063bf4d7e99e82a0df9"},{url:"assets/js/page-Markup.9f2fdf8a.js",revision:"4876fa8d785dabaacce6b61bace57108"},{url:"assets/js/page-Presentation.522e2b70.js",revision:"d44ca8ce4133391c767d1fb70b0927c7"},{url:"assets/js/page-SuperscriptandSubscript.ba812922.js",revision:"7a58072464e5adc09e826931aeec4561"},{url:"assets/js/page-Tex.5a7db85a.js",revision:"39f4ddb3c404c743b7e4568a4cefeecc"},{url:"assets/js/page-Tex语法.4e7f0cc6.js",revision:"376ba30962b2338fe9e8183166f1c424"},{url:"assets/js/page-Themes.f4a69d18.js",revision:"0c1c282dd1d8c60d0414fd70b341bfe8"},{url:"assets/js/page-上下角标.91d53aba.js",revision:"250f67d09fe612a19b293829a13c7869"},{url:"assets/js/page-主页.5d2b4eca.js",revision:"415fe8ff1e4333859383fece26eac474"},{url:"assets/js/page-代码演示.715ccdca.js",revision:"49fb973acf4a8972d9f7ecc59d93edab"},{url:"assets/js/page-幻灯片主题.a6d79bcf.js",revision:"2de96f91e3fda1e7326f9b5dbdabe1fa"},{url:"assets/js/page-幻灯片支持.af8cbecf.js",revision:"c273cb863cda0b9d1b72b75dc916bb92"},{url:"assets/js/page-幻灯片演示.0de0af06.js",revision:"da66ee1f60546c05d81e1d92af9bb8e2"},{url:"assets/js/page-快速上手.838866aa.js",revision:"9a74c0d0180b1047183702dfcbef9108"},{url:"assets/js/page-标记.2da4befb.js",revision:"275510b0aff54b051120d05f64637597"},{url:"assets/js/page-流程图.19a43891.js",revision:"3996b1ffc74745d6db37a594c1617e9c"},{url:"assets/js/page-脚注.2e0941d1.js",revision:"e864566a296b5d59d973e906f7bb3e30"},{url:"assets/js/page-自定义对齐.b9ae8eeb.js",revision:"4061ea19b8c83ae2984d4f532ea699d9"},{url:"assets/js/page-配置.3e40f256.js",revision:"1ac1cff6a01fc556ae5517d00af9da00"},{url:"assets/js/vendors~flowchart.409cbc00.js",revision:"a52aec82211d8af47947f34657eaaf73"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.5b7bb038.js",revision:"54638d646d4625ced8aa336442258068"},{url:"assets/js/vendors~photo-swipe.7d20c59d.js",revision:"a3bfe9771ce6639b40320c1a1cbf018f"},{url:"assets/js/vendors~reveal.58f0a425.js",revision:"97ec6675e9db2120fd6b2868ed0f82c1"},{url:"assets/js/vendors~valine.9f36f146.js",revision:"7c94987eca7cbc280b7f73ad67b686b5"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"094c38d6a5d729c7c043ba6914e35cbe"},{url:"config/index.html",revision:"e2856904fe0aaa229f987537e1a4600e"},{url:"guide/align/index.html",revision:"216dbd278837bd1bdd961628a92a8ece"},{url:"guide/demo/index.html",revision:"9374fc96f9b6bcb4f12792f4e3357ad2"},{url:"guide/flowchart/index.html",revision:"0bd577bd5a9d84a467c31f6ba297c4de"},{url:"guide/footnote/index.html",revision:"351ab635cad0ab76bb9ff010582eb4db"},{url:"guide/index.html",revision:"8f5a0141efae884e70345e0d7db7e0a7"},{url:"guide/mark/index.html",revision:"2e08ddecd264fb846b97de79461edf0e"},{url:"guide/presentation/demo/index.html",revision:"17987b018011e30f13ea505c9021a111"},{url:"guide/presentation/index.html",revision:"c9bc75c77086437d0ebd2fe0f0fde890"},{url:"guide/presentation/themes/index.html",revision:"7a761a9a2ac37fc0106adc45174aefdc"},{url:"guide/sup-sub/index.html",revision:"318c0e1196ad1776d34ae092a85d65ee"},{url:"guide/tex/index.html",revision:"8cbfc577472951c9c3cbbf6adf3230f1"},{url:"index.html",revision:"bc0def5555d31d36853112508cb27c40"},{url:"zh/config/index.html",revision:"b9619abeec6b121c093c75410459c3e0"},{url:"zh/guide/align/index.html",revision:"f45adf92015c0f9447f050ffb46ed238"},{url:"zh/guide/demo/index.html",revision:"dd0784cceecbd890e6c9200762d4580d"},{url:"zh/guide/flowchart/index.html",revision:"ed05f63e61264038a37e36f8f8cdb119"},{url:"zh/guide/footnote/index.html",revision:"edb79ec25a388f75f6cf38878be13188"},{url:"zh/guide/index.html",revision:"e4907fc74e871a81359772509844cb20"},{url:"zh/guide/mark/index.html",revision:"0cc554213ffa86673ac3c39b6057cb17"},{url:"zh/guide/presentation/demo/index.html",revision:"0cb030e1374518fe25bb62f184bca7b5"},{url:"zh/guide/presentation/index.html",revision:"003b112a933d5af9caa688441d16d8d0"},{url:"zh/guide/presentation/themes/index.html",revision:"1b0f31636e16335f39b7468b6040244f"},{url:"zh/guide/sup-sub/index.html",revision:"c2f40630772c6ce5ac71c88b408f4bd1"},{url:"zh/guide/tex/index.html",revision:"92dcc52208a3ecb83119208d88e9ee1f"},{url:"zh/index.html",revision:"a38cc8c2d51c94fbbc443b581f3729b6"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"b75883647416c36200e4beec68700e71"},{url:"assets/icon/config-monochrome.png",revision:"63cfa67502c8967bd58042182757dcd1"},{url:"assets/icon/guide-maskable.png",revision:"83f680eb8e3d20df2650184092151431"},{url:"assets/icon/guide-monochrome.png",revision:"6a7f3acdb8b7e7a74725ee971a098ef8"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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

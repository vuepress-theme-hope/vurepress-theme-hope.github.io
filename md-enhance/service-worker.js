if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.fae1f0c2.css",revision:"ecacf08572915dd3fb1ba2e629738f0f"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/35.bf055898.js",revision:"b1774c7980d96138fb99026ae43c3b9e"},{url:"assets/js/36.2355618c.js",revision:"dc4a1bab648674f85b3ac06dbae9a3d7"},{url:"assets/js/37.c5859867.js",revision:"21af9f2ba1ee95bb1db763d638316948"},{url:"assets/js/38.a18f4f9c.js",revision:"4a0cad44f90c37f05b2d406cdda49021"},{url:"assets/js/39.1123ec9f.js",revision:"eb4311ec34d16b23ef4fa51b348d44bc"},{url:"assets/js/app.20342e22.js",revision:"4819b59536b8810871e801ac3e004507"},{url:"assets/js/layout-Blog.139e1b8e.js",revision:"a7cfa4db31883f2b180e3231d78fff75"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.f3c0a0d1.js",revision:"bc938b102686f1bd84ec23adb5d51d25"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.26b79313.js",revision:"2211c55c43cc9bb0e8bf80cbc836f83b"},{url:"assets/js/layout-Layout.8489aeed.js",revision:"d0ed9d03660b0b2651144703835f96ae"},{url:"assets/js/layout-NotFound.5cebe6d4.js",revision:"09affe7c5fab5bfa44250720d9c3a4a9"},{url:"assets/js/layout-Slide.cfcf5bdd.js",revision:"f34a8da959fe49ebc82344b5bc430eb7"},{url:"assets/js/page-Align.00158167.js",revision:"ddd1a7ba1b23ace332343a790a54143b"},{url:"assets/js/page-CodeDemo.0a2b6fc0.js",revision:"b4cb68dc6d758648d1f132c9e6fd609f"},{url:"assets/js/page-Config.c74144b1.js",revision:"edf41c9900a656baa58a989d151517a9"},{url:"assets/js/page-Flowchart.35a3bbd2.js",revision:"6cc4f1c946222a8c9dbad4b01dbed7dd"},{url:"assets/js/page-Footnote.3b5f14c7.js",revision:"fa10f518a54d0307aa8adba149593263"},{url:"assets/js/page-Home.79284377.js",revision:"24576ba6df0068e4ac592895f47d89e2"},{url:"assets/js/page-Mark.cd0e8f18.js",revision:"90268b7e90e609d6a049db6f2eed6300"},{url:"assets/js/page-Markdown中的新语法.d6c99507.js",revision:"38679ddbc7db2ec0bdac55feaa656ec8"},{url:"assets/js/page-NewsyntaxinMarkdown.f9da4be1.js",revision:"8c6c65e39cfe57bd08c41a1595b7af2d"},{url:"assets/js/page-Presentationsupport.374e6b84.js",revision:"62486d5770c53b298ddc88e0565eea2c"},{url:"assets/js/page-SuperscriptandSubscript.9d20c932.js",revision:"37faaa1b2fc0b7162272e0188689d480"},{url:"assets/js/page-TexSupport.15a250a5.js",revision:"9480798d70c4c518d56c785938054ea3"},{url:"assets/js/page-Tex语法支持.3ae5e864.js",revision:"9b2a7dc991b94fa45c7d3df54b3c51ab"},{url:"assets/js/page-上下角标.345ea11d.js",revision:"f142081622c8040af45bfdcf95d9469d"},{url:"assets/js/page-主页.5e282280.js",revision:"0a73221b31b07f4a40e555f0259a3658"},{url:"assets/js/page-代码演示.afd429a3.js",revision:"183b4151ede873e3ebf9d6c689e3d66a"},{url:"assets/js/page-幻灯片支持.84ca9e9a.js",revision:"71e40599bd7e3b1a46500933b378515e"},{url:"assets/js/page-标记.736f1fad.js",revision:"02ea25e89e204d3fe38a0e33d89e4008"},{url:"assets/js/page-流程图支持.b24c2d33.js",revision:"d2185b6084b2e003f9f51550f1db8276"},{url:"assets/js/page-脚注.39d4b160.js",revision:"051dc0a29fe240ec646cc73584d8212c"},{url:"assets/js/page-自定义对齐.f64eef7d.js",revision:"49eb48acf7e32ad25868976a7d47660a"},{url:"assets/js/page-配置.2f9bf2e6.js",revision:"5aa53c21098c7c279d764fe6cd044695"},{url:"assets/js/vendors~flowchart.a586f64c.js",revision:"9c0ee18de51935c9f771392aa47b95c1"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.d8fe9764.js",revision:"602b831f88a4d8976916b3264f35700c"},{url:"assets/js/vendors~photo-swipe.80ce26ae.js",revision:"64740878346b66026da945978fd0b267"},{url:"assets/js/vendors~reveal.8ded610f.js",revision:"1e6e21a78dfb53ba1caa215180ad7289"},{url:"assets/js/vendors~valine.aa8e6eb2.js",revision:"ab57e20a47c65a2011d2888268c2e97c"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"657dabed14176d978222aac4df1bab13"},{url:"config/index.html",revision:"701cf6a2b5c75075280376d3b61f2e63"},{url:"guide/align/index.html",revision:"c3d915bc35a88683468d05bd0ab3bbe6"},{url:"guide/demo/index.html",revision:"5bd00347134b15acb0b453441afee5bc"},{url:"guide/flowchart/index.html",revision:"e552910bde9593e56220c43cf3f776ad"},{url:"guide/footnote/index.html",revision:"817380e6ef04eea4f885c7d15f24e895"},{url:"guide/index.html",revision:"a7bbb42b6dd0778db7e6d50a7e5c75ec"},{url:"guide/mark/index.html",revision:"d049441b2d3975d6fb97fb2151792a27"},{url:"guide/presentation/index.html",revision:"b927e841b2941637107c937fe237279b"},{url:"guide/sup-sub/index.html",revision:"418903cc4fac7867f2c261d860c1f583"},{url:"guide/tex/index.html",revision:"caf42fe92131071c597ac03abeb7bff8"},{url:"index.html",revision:"5264ee4cf0b81129cea6af7d395130b6"},{url:"zh/config/index.html",revision:"79e5e7d6c8a453aa247ea9e8d4041f58"},{url:"zh/guide/align/index.html",revision:"022e13bc84a92fd1c2be85588b7da418"},{url:"zh/guide/demo/index.html",revision:"220f7c5a59eb94c916429920836e29c4"},{url:"zh/guide/flowchart/index.html",revision:"b0c3bc91f44ecc6cd33266b4f0ec521c"},{url:"zh/guide/footnote/index.html",revision:"1e8290e3b1854849bb2dfabfd6a7b9fa"},{url:"zh/guide/index.html",revision:"a666e0f205338582469c813f7d92fe5c"},{url:"zh/guide/mark/index.html",revision:"863d68d8528b91a6b3c18a5dfeb2fd84"},{url:"zh/guide/presentation/index.html",revision:"bcfcea102817e3593d1a6633fadf7302"},{url:"zh/guide/sup-sub/index.html",revision:"627c16cca7a75f9ceeeee3cf72e964b1"},{url:"zh/guide/tex/index.html",revision:"1c2c6f82e226e0b211093f6a6d536510"},{url:"zh/index.html",revision:"2be2f0af8c00a466a0212a45e7caadd7"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"b75883647416c36200e4beec68700e71"},{url:"assets/icon/config-monochrome.png",revision:"63cfa67502c8967bd58042182757dcd1"},{url:"assets/icon/guide-maskable.png",revision:"83f680eb8e3d20df2650184092151431"},{url:"assets/icon/guide-monochrome.png",revision:"6a7f3acdb8b7e7a74725ee971a098ef8"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-17f866c8"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.3481560d.css",revision:"f9fc202bfe50e8010aea63e2fc707319"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/23.1b423fcb.js",revision:"bc5503d1789aec81348b6a6de9f71cf4"},{url:"assets/js/24.1a2ec541.js",revision:"ac13408b415d8fcd4c25846a64f30348"},{url:"assets/js/25.6a5a3092.js",revision:"61c6459e914ab94e37420ab30f187f44"},{url:"assets/js/26.3d971aaa.js",revision:"ff3126a9001ed6cf15c6d6892ebb33c1"},{url:"assets/js/27.cbc1d846.js",revision:"3287a0bbe42bc95d25d49e61d667d086"},{url:"assets/js/app.51a5bd1e.js",revision:"7dee55ea04b2f87bd0db93cd9f0797ab"},{url:"assets/js/layout-Blog.5a72f95a.js",revision:"7bd2e8a80eb318e9f43bfbf9f3cede87"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.7a07c32c.js",revision:"071817c91989f59373505fc7664102d2"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.48dea84f.js",revision:"0b3c927dc52d32bccbac0c2674724296"},{url:"assets/js/layout-Layout.ff24d167.js",revision:"c222f9524fc32388a3bcf38234f71e04"},{url:"assets/js/layout-NotFound.0935a0de.js",revision:"a048b23d085cc9ae2e0c0d0612dd2956"},{url:"assets/js/layout-Slide.cfcf5bdd.js",revision:"f34a8da959fe49ebc82344b5bc430eb7"},{url:"assets/js/page-ChannelConfig.22a457d2.js",revision:"ab92b65f724b6d31904d845f438e8b5c"},{url:"assets/js/page-Guide.0d2aaf94.js",revision:"ba5b411a53f314d90aa3a8fb36302c2e"},{url:"assets/js/page-Home.a9cd7e6b.js",revision:"19d6c163a28d854690010ebc56f2478c"},{url:"assets/js/page-ItemConfig.ec06693c.js",revision:"580a2c68e2be1ce1b65812f6c2712f3b"},{url:"assets/js/page-PluginConfig.2cec4c8f.js",revision:"53362dba0c33425b60575861417e4410"},{url:"assets/js/page-主页.4131d767.js",revision:"c32cf0abb2b8cc653eae4e7187af9ab9"},{url:"assets/js/page-指南.4012b376.js",revision:"5e47ea4c6f2091fb347833a1e68f7251"},{url:"assets/js/page-插件配置.635967c6.js",revision:"d8362e0f63d7d1753ff9e8a1c6e6fe89"},{url:"assets/js/page-项目设置.d6542c4f.js",revision:"b7dbb8b2c23bf66c0f6e99c013794c42"},{url:"assets/js/page-频道设置.0a1daed8.js",revision:"51f77958c002064a167cd47ff4b1b98c"},{url:"assets/js/vendors~flowchart.e57b666c.js",revision:"d1970bd9aa8040e851e627ed5aa2145b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fc74fe4e.js",revision:"a4f07ed230dd435d39ecb5de01b34f3e"},{url:"assets/js/vendors~photo-swipe.9b6c9cee.js",revision:"5d22d032a6ce90b1a9fd7ec7129e1ca3"},{url:"assets/js/vendors~reveal.bf0bae9c.js",revision:"f491829bc56a03340b6599beaed0e02a"},{url:"assets/js/vendors~valine.877ad763.js",revision:"98e47408ee0a0b1ef9a347c8b5d52897"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"76d84190629771aac0be8cd9e42b3df7"},{url:"config/channel/index.html",revision:"daee39597977b3a7cfc2c10d79368628"},{url:"config/index.html",revision:"60f14627cfc238edb943c75f848ab3b4"},{url:"config/item/index.html",revision:"1e1bdae57c3d0950282ca5493c34d6e8"},{url:"guide/index.html",revision:"b41b976836348e156db06b8b5d57abd6"},{url:"index.html",revision:"175b48bf974751c8291479c966d84f0b"},{url:"zh/config/channel/index.html",revision:"082d72d70769efb73d9256e5af8fa155"},{url:"zh/config/index.html",revision:"056a9a9ac2aaf7f28ef770b9831bb695"},{url:"zh/config/item/index.html",revision:"d0822f8088bd26371223373227e3059b"},{url:"zh/guide/index.html",revision:"4704243318ae2ab952ed6da269993af3"},{url:"zh/index.html",revision:"838e17a5b13eacd7f5cfb1f4d582fba6"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"2f08061e28d534808dee39e2ba05b92d"},{url:"assets/icon/config-monochrome.png",revision:"bd3bacddddc4a2938375880bdd506af9"},{url:"assets/icon/guide-maskable.png",revision:"08ed31fafa239f372b8f1eb5877e46b7"},{url:"assets/icon/guide-monochrome.png",revision:"32a3bb35c073c6c910c8a5570350ce55"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,o,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(o.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-ab6d3691"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.1582b086.css",revision:"5507039575bfeb33408d35473927b3e7"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/12.7872e38d.js",revision:"a6522557c144449951dd6ab1c2047e21"},{url:"assets/js/app.52702e10.js",revision:"ca19848fbc87e9ae105bf82b36258bdc"},{url:"assets/js/layout-Blog.12d5cfe0.js",revision:"2328d4c25abf23b86acd303866524b3d"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.8432f31c.js",revision:"a01dc153000a17122a78208cfffba657"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.d983f883.js",revision:"5d4f5dc7a8fba28218262128611ee4f7"},{url:"assets/js/layout-Layout.e8d79c27.js",revision:"a2eb171996baaed15f1524214a9fcfef"},{url:"assets/js/layout-NotFound.d7b1d2e9.js",revision:"21044ca33f75bdff16859a038619cac7"},{url:"assets/js/layout-Slide.da69d8ce.js",revision:"5d9b865f6ae5cc728d4b9c545a504334"},{url:"assets/js/page-Home.642a818f.js",revision:"edfc8cef6af25c2ef3c95ab20e785a62"},{url:"assets/js/page-主页.f9844616.js",revision:"e966ef39c2447a83debcabbf388448c3"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.a501bb51.js",revision:"c5f6e048e941d4f5c8fa297693eb8e5d"},{url:"assets/js/vendors~photo-swipe.0f4e5945.js",revision:"2482bdedd79734c0f4a9f8d97592fb13"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"487fda75d0dc3cd2eaa1c281e861a6eb"},{url:"index.html",revision:"c18ff620fd9f59096e9198dea7d980db"},{url:"zh/index.html",revision:"fdec1f53f2bf02f04091a6e8ad228b9e"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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

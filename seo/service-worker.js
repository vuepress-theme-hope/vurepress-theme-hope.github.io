if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,o,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(o.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.b9785404.css",revision:"fa65eb304a87ec74f0063d37aeaa6741"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/12.7872e38d.js",revision:"a6522557c144449951dd6ab1c2047e21"},{url:"assets/js/app.a6325d2e.js",revision:"aae140635232ce2ff1ff631b5e6e6c97"},{url:"assets/js/layout-Blog.8a97146c.js",revision:"13b5167fa303a9e63323377b01f5fc11"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.6e29179a.js",revision:"6b538ab7af7e8987278b61b14bc27640"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.9eb928c3.js",revision:"fff6159001f9b692adc3b2266304fe67"},{url:"assets/js/layout-Layout.de833f4d.js",revision:"341bd525f5196ca7132655c99f5edced"},{url:"assets/js/layout-NotFound.a8b2d58d.js",revision:"4aaef61807d89a43ef7ed20cafb31ee2"},{url:"assets/js/layout-Slide.da69d8ce.js",revision:"5d9b865f6ae5cc728d4b9c545a504334"},{url:"assets/js/page-Home.fb7e484a.js",revision:"c0193c4a09681511c1430d2ee9407822"},{url:"assets/js/page-主页.9761ebba.js",revision:"77d1b6cd23c48da65eadd24c69db4b3f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.6bc18351.js",revision:"3396058bb2b4aecb2d6cfd8cc1cdb367"},{url:"assets/js/vendors~photo-swipe.0f4e5945.js",revision:"2482bdedd79734c0f4a9f8d97592fb13"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"91889b1a1dce91ec9e0e56c0dd1565b8"},{url:"index.html",revision:"d8040b88d81c9729822998989c226cea"},{url:"zh/index.html",revision:"bd01c190243f814e4ad41ecf0e2ddebe"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-ab6d3691"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.fe76ca22.css",revision:"589a1c4ff611c823acd40220c1a2d3b1"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/17.30f798c5.js",revision:"5690aac02509f1cd3bd40ad44f170db0"},{url:"assets/js/app.dd29e558.js",revision:"1dc2119feda3c34a60d8e713925e7f52"},{url:"assets/js/layout-Blog.0fb999b5.js",revision:"41e09b9f01888c2349c34496301bd6e3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.24b49169.js",revision:"f3ee0316f2fac4eade36242c94fa6a6c"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.686785e6.js",revision:"f178f5b04eadffdee16ebec9c68d5988"},{url:"assets/js/layout-Layout.5daa2297.js",revision:"a469a3f9e3e209336d8260c8d27ddc16"},{url:"assets/js/layout-NotFound.94eea476.js",revision:"f1287af8a6a4d6692dbe1a1347ed2ac5"},{url:"assets/js/layout-Slide.82838e5d.js",revision:"d20667eb5e48204d5eec132bb08f21e8"},{url:"assets/js/page-APIConfig.7e38f46b.js",revision:"dc5e43e1f08d4c80b3e1901a88bc7782"},{url:"assets/js/page-Guide.a14a19b0.js",revision:"f14b07da77fcf6d7cd911ef920f5f128"},{url:"assets/js/page-Home.f064aa7b.js",revision:"8f22c24489ef823ffbf51271a60119c4"},{url:"assets/js/page-主页.7cb5bc64.js",revision:"32133952a94a0cd7abbc95d8557b3401"},{url:"assets/js/page-指南.85e3f924.js",revision:"724d783af1eccd49e61a1f99cc1f47f7"},{url:"assets/js/page-配置.2c2df5ac.js",revision:"fe657d90d2d4031da48fb2a2d4a31ca8"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.655bdbd2.js",revision:"64d678fcb8afde553332faf360c63e4b"},{url:"assets/js/vendors~photo-swipe.2a20fd99.js",revision:"c1b22257538b0affdb3bcd5768689384"},{url:"assets/js/vendors~valine.2074367e.js",revision:"e298c2fa8dcf94e0befb19421eb3f328"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"29bbb676b5dfa605de413131622e16bd"},{url:"config/index.html",revision:"c6e963219712a1df8f2c6059163a531f"},{url:"guide/index.html",revision:"47aa22f118df947a0a6eedc3d717db04"},{url:"index.html",revision:"0e72139797c6ecc95b5d35014b20a82f"},{url:"zh/config/index.html",revision:"98897c421ac980388bce793e2c8f8d6e"},{url:"zh/guide/index.html",revision:"fa841c4a4a41d1a2fb5a158190fdfecc"},{url:"zh/index.html",revision:"b7fd73f8ea239a4deae0359f1838c26b"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"2f08061e28d534808dee39e2ba05b92d"},{url:"assets/icon/config-monochrome.png",revision:"bd3bacddddc4a2938375880bdd506af9"},{url:"assets/icon/guide-maskable.png",revision:"08ed31fafa239f372b8f1eb5877e46b7"},{url:"assets/icon/guide-monochrome.png",revision:"32a3bb35c073c6c910c8a5570350ce55"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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

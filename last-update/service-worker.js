if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.53d21118.css",revision:"e29bc5b66ce9056290a139a8f95891e9"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/12.5ecaea47.js",revision:"389984d03cbc32dd3ff3b7eadc39132c"},{url:"assets/js/app.de876328.js",revision:"e65043df378b2b4063436d88e4fedc35"},{url:"assets/js/layout-Blog.57e05b28.js",revision:"c52de9c082c0ec95e909abb647e570f9"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.705aa04b.js",revision:"4bba9ff9d741f1326b8e443c637a0bf6"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.84f68044.js",revision:"c6415c4f032d37b84c8ad84ec543d42a"},{url:"assets/js/layout-Layout.427eaf7d.js",revision:"2db8b8cf1c4e8a79b68251c62141d29f"},{url:"assets/js/layout-NotFound.dbf6ee8d.js",revision:"5292974cec0f9c75c42c78088ece2bff"},{url:"assets/js/layout-Slide.94ed2dd6.js",revision:"be8bcb18d919cd330eddb165b17d494c"},{url:"assets/js/page-Home.4d46b583.js",revision:"3e1be73d80d809a245f4dce70d6f5e97"},{url:"assets/js/page-主页.558ccb55.js",revision:"f17c7e8da3d677a0ec89ab7aad1a3731"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.59f13964.js",revision:"594c810d2afc78e514834e155b0f157d"},{url:"assets/js/vendors~photo-swipe.ff121d5b.js",revision:"90073e5b474fe4ecd5958f3b98da114e"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"04d6b4b55dabc6e9816bdca3d673ae0f"},{url:"article/index.html",revision:"74643e644f670b29d8e115fe822937b3"},{url:"category/index.html",revision:"737a3f53c975ba0827f1b622a6d2d78e"},{url:"encrypt/index.html",revision:"52a605c60389cd648a058644253409d1"},{url:"index.html",revision:"e1440ffdc9863e957f991fa36db62bec"},{url:"slide/index.html",revision:"01c101ba8d808b1ce7ba176144f265df"},{url:"tag/index.html",revision:"6000ee6bd030f162cb25b0a48dbb1059"},{url:"timeline/index.html",revision:"b15c518d3c5f3a7d827c8ec4890d8332"},{url:"zh/index.html",revision:"214f39183cf2824fcb7bcff7c07cf49a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"}],{}),e.cleanupOutdatedCaches()}));
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

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.ed029b80.css",revision:"3bbb6a84530b8853fce6a0a788c6915a"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/21.369e4aa6.js",revision:"f21b3f9ae6fd1258a0e1b6a1f5eedac7"},{url:"assets/js/app.3a5523fa.js",revision:"1188556feca31658316b0d68f6cfa8fc"},{url:"assets/js/layout-Blog.eb325ddc.js",revision:"9e363f179235d3fcab732b20cd02c53b"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.bce16a87.js",revision:"6b8b7ae9424edcb2fbb04ba9aa96faed"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.25a443c7.js",revision:"2eb141de70641763df549d497c2c4cf3"},{url:"assets/js/layout-Layout.f69ab58e.js",revision:"8c640a89bd22d72e8dfa070e0ca1cc91"},{url:"assets/js/layout-NotFound.9c64d3fc.js",revision:"0f901588fd253a8814856de8e87de726"},{url:"assets/js/layout-Slide.82838e5d.js",revision:"d20667eb5e48204d5eec132bb08f21e8"},{url:"assets/js/page-ChannelConfig.0f02158c.js",revision:"28b86d27ec2ebe7b0caca8982aff0ffb"},{url:"assets/js/page-Guide.1a921f59.js",revision:"e6d08ad29b70aafea9f529ec2fd7987a"},{url:"assets/js/page-Home.86d2fd63.js",revision:"21cb4aa9b04667ac993fdb9ce5a80ec8"},{url:"assets/js/page-ItemConfig.cad110db.js",revision:"4f5712176fdf3aa67f91977f03a6e8b6"},{url:"assets/js/page-PluginConfig.12d3a94a.js",revision:"d9a889dac25263fef1ab9c222de5b059"},{url:"assets/js/page-主页.5599a182.js",revision:"d5706483b2f3d9a6de46114ec1b78c1b"},{url:"assets/js/page-指南.3e0473ce.js",revision:"a13a48dbcc193c1746ec76e36283bba4"},{url:"assets/js/page-插件配置.8cbcdfae.js",revision:"1e8799e1e52f5e3074755b06e2c12b75"},{url:"assets/js/page-项目设置.1e5e10af.js",revision:"236672f2203770d9cd95b186f6ad7cc1"},{url:"assets/js/page-频道设置.04b25f9d.js",revision:"bd43412d8cf0a30777cac2e0fd89bd9e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.249a5ce7.js",revision:"1ad421ce8daf59dd2b6eb9ba019560b4"},{url:"assets/js/vendors~photo-swipe.bf228f47.js",revision:"09dda02634440392c8eb31e293177107"},{url:"assets/js/vendors~valine.64a4825c.js",revision:"32d1fdef99117aa57db96b2a887e153f"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"45aaaff174e8af3273b2038ec4329cc8"},{url:"config/channel/index.html",revision:"b19a9c9ed86d1da26a1e07e3785b7af4"},{url:"config/index.html",revision:"613d1530c9fd4a9e2aa261641f8ca5ad"},{url:"config/item/index.html",revision:"055265d26a193493842c46dd802ee15f"},{url:"guide/index.html",revision:"1e0053e9b5849ca5f7f5b5b1eaf2efac"},{url:"index.html",revision:"287ba621063bc3737a69020b49a1a18b"},{url:"zh/config/channel/index.html",revision:"4f0b0ead73f265ab3b3dd15843ade2bf"},{url:"zh/config/index.html",revision:"0c438873c469ac1ba6511c4be39d7af4"},{url:"zh/config/item/index.html",revision:"2de37e220a1bdcaf0393654b05ccfaf8"},{url:"zh/guide/index.html",revision:"991ec2bd7b59aad3d0352af613055759"},{url:"zh/index.html",revision:"4a0f96460bc12c8ec6e6f27af8b3cbe3"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"2f08061e28d534808dee39e2ba05b92d"},{url:"assets/icon/config-monochrome.png",revision:"bd3bacddddc4a2938375880bdd506af9"},{url:"assets/icon/guide-maskable.png",revision:"08ed31fafa239f372b8f1eb5877e46b7"},{url:"assets/icon/guide-monochrome.png",revision:"32a3bb35c073c6c910c8a5570350ce55"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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

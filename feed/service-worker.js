if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.ed029b80.css",revision:"3bbb6a84530b8853fce6a0a788c6915a"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/21.369e4aa6.js",revision:"f21b3f9ae6fd1258a0e1b6a1f5eedac7"},{url:"assets/js/app.7af2edc6.js",revision:"0aeb8101165d4e1c6efc0fa7c288794a"},{url:"assets/js/layout-Blog.eb325ddc.js",revision:"9e363f179235d3fcab732b20cd02c53b"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.bce16a87.js",revision:"6b8b7ae9424edcb2fbb04ba9aa96faed"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.25a443c7.js",revision:"2eb141de70641763df549d497c2c4cf3"},{url:"assets/js/layout-Layout.f69ab58e.js",revision:"8c640a89bd22d72e8dfa070e0ca1cc91"},{url:"assets/js/layout-NotFound.9c64d3fc.js",revision:"0f901588fd253a8814856de8e87de726"},{url:"assets/js/layout-Slide.82838e5d.js",revision:"d20667eb5e48204d5eec132bb08f21e8"},{url:"assets/js/page-ChannelConfig.0f02158c.js",revision:"28b86d27ec2ebe7b0caca8982aff0ffb"},{url:"assets/js/page-Guide.1a921f59.js",revision:"e6d08ad29b70aafea9f529ec2fd7987a"},{url:"assets/js/page-Home.86d2fd63.js",revision:"21cb4aa9b04667ac993fdb9ce5a80ec8"},{url:"assets/js/page-ItemConfig.cad110db.js",revision:"4f5712176fdf3aa67f91977f03a6e8b6"},{url:"assets/js/page-PluginConfig.12d3a94a.js",revision:"d9a889dac25263fef1ab9c222de5b059"},{url:"assets/js/page-主页.5599a182.js",revision:"d5706483b2f3d9a6de46114ec1b78c1b"},{url:"assets/js/page-指南.3e0473ce.js",revision:"a13a48dbcc193c1746ec76e36283bba4"},{url:"assets/js/page-插件配置.8cbcdfae.js",revision:"1e8799e1e52f5e3074755b06e2c12b75"},{url:"assets/js/page-项目设置.1e5e10af.js",revision:"236672f2203770d9cd95b186f6ad7cc1"},{url:"assets/js/page-频道设置.04b25f9d.js",revision:"bd43412d8cf0a30777cac2e0fd89bd9e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.249a5ce7.js",revision:"1ad421ce8daf59dd2b6eb9ba019560b4"},{url:"assets/js/vendors~photo-swipe.bf228f47.js",revision:"09dda02634440392c8eb31e293177107"},{url:"assets/js/vendors~valine.64a4825c.js",revision:"32d1fdef99117aa57db96b2a887e153f"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"e6029f757c547e0bacd354de0cd921ef"},{url:"config/channel/index.html",revision:"a3e999ff4f334351be14569149168810"},{url:"config/index.html",revision:"19961a5c88c04f2f45b600ae50b83e0f"},{url:"config/item/index.html",revision:"99b557bf04b587eb06272f8db7972ca6"},{url:"guide/index.html",revision:"54b611b69e6ea77e8ce369db468df186"},{url:"index.html",revision:"9b10b0c74ce1fa02a3e213b365e0543d"},{url:"zh/config/channel/index.html",revision:"8193c4a4c0de063400c25adc5c939e9c"},{url:"zh/config/index.html",revision:"ba403a2119cae7d660ccdd8c40778ee7"},{url:"zh/config/item/index.html",revision:"5adbee98c26e72bddbd7b2ba18ed416d"},{url:"zh/guide/index.html",revision:"3a767ad4d3372dcfdda37cf1463efa8a"},{url:"zh/index.html",revision:"ed1d0658b070982ece353d8b75189b07"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"2f08061e28d534808dee39e2ba05b92d"},{url:"assets/icon/config-monochrome.png",revision:"bd3bacddddc4a2938375880bdd506af9"},{url:"assets/icon/guide-maskable.png",revision:"08ed31fafa239f372b8f1eb5877e46b7"},{url:"assets/icon/guide-monochrome.png",revision:"32a3bb35c073c6c910c8a5570350ce55"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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

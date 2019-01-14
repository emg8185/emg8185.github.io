/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/style.css",
    "revision": "647b9980f1d24b4e17ed2ead1a154951"
  },
  {
    "url": "font/NotoSansJP-Bold-sub.woff",
    "revision": "8928860536c2f81edbe523db33d9e339"
  },
  {
    "url": "font/NotoSansJP-Bold-sub.woff2",
    "revision": "dd6cec205f4494e0a884e565ce923b63"
  },
  {
    "url": "font/NotoSansJP-Regular-sub.woff",
    "revision": "09cfe50e7912d0334cf72872b9e3c866"
  },
  {
    "url": "font/NotoSansJP-Regular-sub.woff2",
    "revision": "21c1940eec0d243804eafdda0bf6e42c"
  },
  {
    "url": "font/roboto-v18-latin-300.woff",
    "revision": "a1471d1d6431c893582a5f6a250db3f9"
  },
  {
    "url": "font/roboto-v18-latin-300.woff2",
    "revision": "55536c8e9e9a532651e3cf374f290ea3"
  },
  {
    "url": "font/roboto-v18-latin-700.woff",
    "revision": "cf6613d1adf490972c557a8e318e0868"
  },
  {
    "url": "font/roboto-v18-latin-700.woff2",
    "revision": "037d830416495def72b7881024c14b7b"
  },
  {
    "url": "font/roboto-v18-latin-regular.woff",
    "revision": "bafb105baeb22d965c70fe52ba6b49d9"
  },
  {
    "url": "font/roboto-v18-latin-regular.woff2",
    "revision": "5d4aeb4e5f5ef754e307d7ffaef688bd"
  },
  {
    "url": "img/bg.jpg",
    "revision": "d5c959ff621972e83a9352011440e698"
  },
  {
    "url": "img/css3.svg",
    "revision": "9d43aed00576b970f464be8365ad77df"
  },
  {
    "url": "img/emg8185.png",
    "revision": "b3fc8be8ad2d4da07aef66ef97cf8e9c"
  },
  {
    "url": "img/favicon/android-chrome-192x192.png",
    "revision": "5df013b6f01bad3fffa85fca52968c15"
  },
  {
    "url": "img/favicon/android-chrome-512x512.png",
    "revision": "5cd98a5200bf504f9192c0574e661d65"
  },
  {
    "url": "img/favicon/apple-touch-icon.png",
    "revision": "fdbdd26f6d9b0bf1b4e90d265c46ada0"
  },
  {
    "url": "img/favicon/favicon-16x16.png",
    "revision": "8b683a3951f117e034a4c8af2983a002"
  },
  {
    "url": "img/favicon/favicon-32x32.png",
    "revision": "8bef4dbd347372bd500cfe60e333ba62"
  },
  {
    "url": "img/favicon/mstile-144x144.png",
    "revision": "8762f9a6afafd5eb892dbd916859bf0d"
  },
  {
    "url": "img/favicon/mstile-150x150.png",
    "revision": "35fc97d70d95443cf1a51963ba440bd6"
  },
  {
    "url": "img/favicon/mstile-310x150.png",
    "revision": "726eab8879c56d204cf73f87a401d1ef"
  },
  {
    "url": "img/favicon/mstile-310x310.png",
    "revision": "ce46feadf189f4b562e56bd2cc9d12ce"
  },
  {
    "url": "img/favicon/mstile-70x70.png",
    "revision": "8bc26b3fb54c923854f07dd6f02558c8"
  },
  {
    "url": "img/favicon/safari-pinned-tab.svg",
    "revision": "fd876fbf77726365852d3df824b16ab5"
  },
  {
    "url": "img/html5.svg",
    "revision": "268c5debdd4f5f1b9c603a0b03e01a61"
  },
  {
    "url": "img/javascript.svg",
    "revision": "bb16e776ff6a3c5bbb8a7fc12f251048"
  },
  {
    "url": "img/logo.svg",
    "revision": "3f432842f2c293e8bb57446648bf5996"
  },
  {
    "url": "img/php.svg",
    "revision": "8d4120941660b266544d5fb4fc288892"
  },
  {
    "url": "img/twitter.svg",
    "revision": "0505a0684744de5a06e5e97b6e6acc55"
  },
  {
    "url": "img/up.svg",
    "revision": "b565c9b2f1b1c66ac569d09368a0167c"
  },
  {
    "url": "img/wordpress.svg",
    "revision": "5518dbd987f96b642417ef408e12ca5d"
  },
  {
    "url": "index.html",
    "revision": "352cf3d0fa54f4ce4ee0b78f3e43e4ae"
  },
  {
    "url": "install-service-worker.html",
    "revision": "d1341bf4ffc0db19d94b73f14d7c25d8"
  },
  {
    "url": "manifest.json",
    "revision": "2480f0f0950f7b72de7898a611a84ae5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn.ampproject.org/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');

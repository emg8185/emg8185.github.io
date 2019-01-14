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
    "revision": "045601ff4016f2dd46a32705ad69a450"
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
    "url": "img/bg.webp",
    "revision": "4da7e3d1d0a862dbfeea6dc24317ad2b"
  },
  {
    "url": "img/css3.svg",
    "revision": "9d43aed00576b970f464be8365ad77df"
  },
  {
    "url": "img/emg8185.jpg",
    "revision": "9506dcba951e31a17c805d18e7387146"
  },
  {
    "url": "img/emg8185.webp",
    "revision": "0dc75018aa50aec0373e95dc07694a64"
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
    "url": "img/ogp.jpg",
    "revision": "934baf991f81ea5d72ab774f0fdbd6da"
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
    "revision": "54dab52cbf70f0ed9cccbce41ceecb79"
  },
  {
    "url": "install-service-worker.html",
    "revision": "d1341bf4ffc0db19d94b73f14d7c25d8"
  },
  {
    "url": "manifest.json",
    "revision": "2480f0f0950f7b72de7898a611a84ae5"
  },
  {
    "url": "workbox-config.js",
    "revision": "3641b9ebd8f1481a99bc2c9dd5ab3b17"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn.ampproject.org/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');

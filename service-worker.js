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
    "url": "404.html",
    "revision": "02ff54c36448d1be4bbb5a0a5c62dad7"
  },
  {
    "url": "assets/css/1.styles.693384c6.css",
    "revision": "a757f4ea65ae3b3b4ef26eea1cf6bc50"
  },
  {
    "url": "assets/css/styles.8f06cc84.css",
    "revision": "0dd27dd72dee7d39ff5d300fb45cddc3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.693384c6.js",
    "revision": "909227c9bf46daa82442ffc2da43f503"
  },
  {
    "url": "assets/js/2.750528e4.js",
    "revision": "2374fb7f28c1b4d239b4a410f146e4ef"
  },
  {
    "url": "assets/js/app.8f06cc84.js",
    "revision": "40a2818b6b0cd2f1081377d74e437fc3"
  },
  {
    "url": "datepick/zh-cn.html",
    "revision": "904073f7b04f34d5dbc656a5ed267a80"
  },
  {
    "url": "index.html",
    "revision": "8e097d0536f48f25464e7e904074b91d"
  },
  {
    "url": "logo.jpg",
    "revision": "47f7e57bf69a8ff5db384642790d1e03"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

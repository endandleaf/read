'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "2ecc7ca78ec3f844f32ef38cc64eaa84",
"flutter_bootstrap.js": "e8cddca130f5077c35b8d4fc0f0182a6",
"main.dart.js_79.part.js": "0e68c28d7b72105227dc05fcf4e144be",
"main.dart.js_69.part.js": "c96eeacc167c1201851c207fee575a27",
"main.dart.js_101.part.js": "4af35d3355960ec85155d393f9fa573c",
"main.dart.js_111.part.js": "1b0b8c3e04190e804766d0ed869dfc3e",
"main.dart.js_24.part.js": "de98ed325e105c93f597ca6dccf30768",
"main.dart.js_34.part.js": "8003a4d13baa756088bc4d42261d41ef",
"main.dart.js_205.part.js": "2949c9ba6547e0561a5bbbba8181d3f7",
"main.dart.js_56.part.js": "3a6bc2d25e6e748009d46070b56db084",
"main.dart.js_163.part.js": "a09e0ba3e836be450ea8e43e166781d2",
"main.dart.js_145.part.js": "921dc24248bd840c3a1857028ff844c8",
"main.dart.js_155.part.js": "6bd1b554d493440d6089ef54df21d6e1",
"version.json": "93850be85ddb7e80194ef3cdced9958a",
"main.dart.js_7.part.js": "3e98ce663812eac9f60fd2023f8672c9",
"main.dart.js_70.part.js": "426e3597d21fb687ea0910972fd0e22e",
"main.dart.js_12.part.js": "604462c63c7626b9ad818ce1d84f5e32",
"main.dart.js_127.part.js": "9387fc62cafe0b9bbd4cdfaf1f660d7c",
"main.dart.js_137.part.js": "57469f0703348019407f2a41055bbea1",
"main.dart.js_84.part.js": "88cf6edf8304c8acabe810ab1cb9fa9d",
"main.dart.js_94.part.js": "5bd9b9564f4d5a349fc5076a4d755b87",
"main.dart.js_118.part.js": "b7207e41b2a2a23a202cae9bb8de8e57",
"main.dart.js_108.part.js": "e6b8ab8d4a7ba1f3289367bfbe93ec5c",
"main.dart.js_154.part.js": "6a0f04b973d9687d9d7fdc8d005ae22e",
"main.dart.js_71.part.js": "044a7095e01a66ffe528e38def7e6f4f",
"main.dart.js_61.part.js": "8a686e8354b1838bb88bb8875a8ca9de",
"main.dart.js_6.part.js": "bd137fb3f60a0b19e17411a77274edeb",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_136.part.js": "2fee948cd6c2bb5e0643c78f910590ef",
"main.dart.js_109.part.js": "2f1236c0f241c8c0229f8f36af7e7bc9",
"main.dart.js_196.part.js": "ca1c9a97ff25f086071373f71754d407",
"main.dart.js_186.part.js": "fcfc59fd36a4fd72d830703e8f122750",
"main.dart.js_68.part.js": "da74f2d74f4560188d032d17459c185d",
"main.dart.js_78.part.js": "6232ca4f5cfe37779cf70f8054f821e2",
"main.dart.js_100.part.js": "772a5f1d2a8a632f34f9c56fdea0b573",
"main.dart.js_25.part.js": "a4c3470c5999d6314288e6eb5cf4ca23",
"main.dart.js_57.part.js": "9bed0f3f7ad57f22c7c9380eca0237b7",
"main.dart.js_47.part.js": "9a0678e83b156e6c15341dc7be453a88",
"main.dart.js_204.part.js": "d2cc5e38f2f48a2068747e05f69f8125",
"main.dart.js_172.part.js": "bd87dc2dc42cdc92b438961da86564cf",
"main.dart.js_162.part.js": "d0074b3ad8207c996e289a5230e0ac06",
"main.dart.js_4.part.js": "af61daa18e955b8f3e88e5c88e0cabde",
"main.dart.js_156.part.js": "c61e9cc68e5619a382b8ab6a8ca886c7",
"main.dart.js": "b2782e33d21074194ddf270a8659c86e",
"main.dart.js_97.part.js": "a2f367fb653a49ec03470550a04bd238",
"main.dart.js_184.part.js": "57ff67f62fc47ed867e1252155565b27",
"main.dart.js_18.part.js": "6390def80fad7e9e216f233d87b9243d",
"main.dart.js_170.part.js": "ff1c649ceb5467d946a736cfc1bbcaf0",
"main.dart.js_45.part.js": "a1e718b6ffa27e971f22f9a8800afc4b",
"main.dart.js_206.part.js": "718e57e17a26ba8035f922f924e26847",
"main.dart.js_55.part.js": "01d43d02cecd21d5af26a3efd2bbfeaa",
"main.dart.js_37.part.js": "1056e463b50424e98a92870308369509",
"main.dart.js_102.part.js": "945a85938f6e90642d8651471eeabf3a",
"main.dart.js_19.part.js": "582353c2c45ccb67f45444a944b884cf",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_195.part.js": "00d2f34a85db420a483d2177be6c7a15",
"main.dart.js_171.part.js": "7b9c9f800dbcaf2446eb47163b747bee",
"main.dart.js_54.part.js": "5e529d65e52290cc542fd5973087fd26",
"main.dart.js_44.part.js": "ba616794b8375786c07e443f29229718",
"main.dart.js_36.part.js": "b0d5966554e41a2c0eb75f53a55499de",
"main.dart.js_26.part.js": "d305b90c5c96857362ec93edd1ad0cb7",
"main.dart.js_113.part.js": "028c95155eacb5b997d0d502b563c588",
"main.dart.js_103.part.js": "e2d1acd5ebb0a157cb6002f0e0971847",
"main.dart.js_135.part.js": "4c9a57aa71f51a0643c7809a73f76bad",
"main.dart.js_125.part.js": "99889fe347ef26ff6fb5fb0a0e27f3eb",
"main.dart.js_72.part.js": "189824dfd6392a14df97d12eb1ff6ee8",
"main.dart.js_5.part.js": "97316489ac7f972169b48a036ecb014a",
"main.dart.js_62.part.js": "923e787a3ef04e613fd93db30f9a85e2",
"main.dart.js_157.part.js": "d013e4701ffccbd0578e5e3902150b3c",
"main.dart.js_147.part.js": "8e87f2f88116657890890b45cd3703f0",
"main.dart.js_96.part.js": "619682db6d2f92340df55fcd75bd44db",
"main.dart.js_86.part.js": "52d72c06446af150446c2d07cd990baa",
"main.dart.js_168.part.js": "9e03580dcd5794fa33e189adcfde8e6e",
"main.dart.js_178.part.js": "52a0bfef7858e2e351fa27e098878baf",
"main.dart.js_83.part.js": "957b771807699a75cffec8e7030520ce",
"main.dart.js_93.part.js": "d37e753f74472f12d5de740d77a5a557",
"main.dart.js_58.part.js": "c7bbb070fe503fad9a71fe18d57d5839",
"main.dart.js_48.part.js": "4f5f0817427c8cb8fd65e57bd69f54ec",
"main.dart.js_15.part.js": "25b0114a0189954aa8ea1462db6065dc",
"main.dart.js_130.part.js": "b94d4a56c3a16e19f47879ad9c2e73d5",
"main.dart.js_199.part.js": "1bfe21aa1bbfdef09cee6df0fa581c50",
"main.dart.js_189.part.js": "41208f71c4c6497aadbec4c1a54407c3",
"main.dart.js_152.part.js": "fab1e43bc0ab5f7e9804432a696c64ea",
"main.dart.js_202.part.js": "0d56182664f6b43df383b94fe5538cf9",
"main.dart.js_51.part.js": "0bdf94ef825999649411ccc423e37a8e",
"main.dart.js_174.part.js": "1c1e5870ac2605c408e9e32f29678105",
"main.dart.js_106.part.js": "aeb5de27b34024c6aa1c0fce46b17846",
"main.dart.js_23.part.js": "89395d255180d802a98bbabcf82ee231",
"main.dart.js_129.part.js": "3d56e907eb106b9d853903b7775e2a3a",
"main.dart.js_180.part.js": "c3d56282e73f2ec0e99547add2be9f4f",
"main.dart.js_50.part.js": "01de433f2d64bee132198d35a05133a0",
"main.dart.js_203.part.js": "9b227983d4138c60661412ecb8baea93",
"main.dart.js_165.part.js": "46f8a1317056727270dc62917863744a",
"main.dart.js_107.part.js": "11a0f4ed91bc15c313043e0746863a85",
"main.dart.js_32.part.js": "2e526cea63fa04b1dd928ab70e719d00",
"icons/Icon-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"main.dart.js_191.part.js": "cfc0e711f99d0d4d04116e365dbd04fa",
"main.dart.js_181.part.js": "5423a97ff0861c58a46544aae13a35bf",
"main.dart.js_128.part.js": "484bf64adfc0736b857e3de9bdc85151",
"main.dart.js_138.part.js": "f3283db7eda6b096ac85e27a24ad7be8",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_82.part.js": "4918c7b5354308cfaf2de3b34c7f6adf",
"main.dart.js_49.part.js": "7f57d17ec14a58d40147885cac1d5a93",
"main.dart.js_198.part.js": "776809147098b1a43a930e1465701e11",
"main.dart.js_121.part.js": "4589b8adb917702be543a58bd477eab8",
"main.dart.js_143.part.js": "20b38c1b0a3c8ff5c351c1f21bf2b35b",
"main.dart.js_76.part.js": "8e256cf4b42b64d502791cd716e8c3a8",
"main.dart.js_66.part.js": "415389eba1240984e4ecc08a80f50625",
"main.dart.js_1.part.js": "43a37efea1de0a29cc2cd82e2fc8f291",
"main.dart.js_20.part.js": "0f8266034d2cc55c7273c439eb41e03b",
"main.dart.js_105.part.js": "ec654c30f2a90eb8b93e8ceb6ca893d6",
"main.dart.js_115.part.js": "30072a20649d10eae9cb403a810a5a3e",
"main.dart.js_99.part.js": "37223865f93ccfb344b231a69f2aa4e3",
"main.dart.js_89.part.js": "8d881e0257c99858b5adb6394b357554",
"main.dart.js_167.part.js": "78d0d14987b9c9c853826130e9adc65f",
"main.dart.js_42.part.js": "fc4fde9565f4313089073d19bc05faa6",
"main.dart.js_201.part.js": "aaf8147042e13a262d317ff9825fb3c1",
"main.dart.js_52.part.js": "de04acd3a2f7e8909554f436134920c1",
"main.dart.js_183.part.js": "d3b4585c1914f1aa6493338a915826bc",
"main.dart.js_193.part.js": "2897a827c6d11b6db54a944734a8ffbf",
"main.dart.js_208.part.js": "51b92d9518d1ed2826d33192f19dae39",
"main.dart.js_39.part.js": "091cc03d07bc0e024475a47d25b948b3",
"main.dart.js_29.part.js": "10b1e0277cb474326afbd1dc41d2991d",
"main.dart.js_80.part.js": "0d2ecd69e3a9a1c3ebb6024cdd53481c",
"main.dart.js_90.part.js": "af797bbd9570fb9a9f985ddc3965095e",
"main.dart.js_64.part.js": "dc172cf26bbf22a5d42a1e2446b67cc1",
"main.dart.js_3.part.js": "d9cd3931a6312d9bdc4bd3c2711abf6a",
"main.dart.js_74.part.js": "8caf4fa27599eff65be1b3f0d9d0d74a",
"main.dart.js_141.part.js": "82e7fc23abd482f48ed51d6c072cf296",
"main.dart.js_151.part.js": "fdfb4f23f7da324a7b3856cb45a31321",
"main.dart.js_133.part.js": "26bb5fd92d2ba51f9574f770e0e73479",
"assets/AssetManifest.json": "3eb09be2ac2ecbd14a6ea6229a1da724",
"assets/NOTICES": "4bed55e60542427a46b87e9a68deba74",
"assets/FontManifest.json": "bed231d7b112623f57dc119fc603f653",
"assets/AssetManifest.bin.json": "24c267e3ce25db2a67d84a9ca69767b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3e0799ee356749c201caf5a5829e90fd",
"assets/fonts/boldface/AlimamaShuHeiTi-Bold.ttf": "9c8d7f88c39c3d90cd41ea9db70a9fa7",
"assets/fonts/circle/AlimamaFangYuanTiVF-Thin.ttf": "3be809e80815a8bc0feba3b241231c88",
"assets/fonts/MaterialIcons-Regular.otf": "800b2d9c542283b40a245cbbd20f403e",
"assets/assets/images/no_cover.jpeg": "7e48f3134478ff6a02bdaae12702e698",
"assets/assets/images/fq.png": "6e5136dee28ad0cb3a351ed047fac21c",
"assets/assets/images/splash.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/logo.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/qq.png": "491c32aad179267434096dc7f2b16214",
"assets/assets/images/qd.png": "7a81e826d519521b044abcf143a4bbcc",
"assets/assets/images/ic_launcher_round.webp": "a5b7d4275a1106f28902462be6eb7d9b",
"assets/assets/images/default_avatar.jpeg": "3cfd6cec07546522179cab14e9375c10",
"assets/assets/bg/8.jpg": "8fbc91e94bf5d0a50825840e228f9000",
"assets/assets/bg/9.jpg": "0092d2edcce59d898890d67d70782a42",
"assets/assets/bg/14.jpg": "7127ce518e454e811fbd4a6aa100ee85",
"assets/assets/bg/12.jpg": "3d39267e17bd07c35310c1c5aee6d373",
"assets/assets/bg/13.jpg": "36d67fb6aa9f88225c3de8724a4ee936",
"assets/assets/bg/11.jpg": "6efea1c466b21b16ae47840176119076",
"assets/assets/bg/10.jpg": "48b9f025bc1bcf4e604a885eb64c1573",
"assets/assets/bg/4.jpg": "3358e92098b1750ffb4cb139697fc40d",
"assets/assets/bg/5.jpg": "9d83e37c90acb62f65ef7516a203ed57",
"assets/assets/bg/7.jpg": "87e353a5aeb7db7ca04a50dd46c3b200",
"assets/assets/bg/6.jpg": "d062fef5a96ad859963bc7e1110fb025",
"assets/assets/bg/2.jpg": "1b3318fbc6dfc92d14c03e42565a0edc",
"assets/assets/bg/3.jpg": "98c18f5b62d40ca8b18a7241a91db4d1",
"assets/assets/bg/1.jpg": "bad1907a1b54e710ca483ba47d23c671",
"main.dart.js_209.part.js": "944af84c6d5d8b5309c70237a8934a33",
"main.dart.js_28.part.js": "264cacd731705ae27c9e8346c7d9e779",
"main.dart.js_38.part.js": "b81992d84f35daed29daad87e46d34b4",
"main.dart.js_75.part.js": "6e5d9a421b59bb692ce0ae311df6119f",
"main.dart.js_65.part.js": "f3a65eb3cc2b8083fe77d3531cc43ccb",
"main.dart.js_150.part.js": "2e60550e5bf48220c2843c5f5d135282",
"main.dart.js_132.part.js": "73a3308aa39c2e2169c079adca8ba5db",
"main.dart.js_88.part.js": "9117f9a957f28d6e077ce2176f4b4f51",
"main.dart.js_98.part.js": "51b955acdb8d90a7ac2946449170efed",
"main.dart.js_31.part.js": "6782cc54d38739d84afffe26460477dc",
"main.dart.js_104.part.js": "d6397f17f8ac19eedc8c37c7b0d79ef1",
"main.dart.js_176.part.js": "ddef53ce44d71d7bf1d1992623e47ef7",
"main.dart.js_166.part.js": "4153a99e7d5d031d9f261ca5141efbc0",
"main.dart.js_210.part.js": "e709b779855033227f75a8d1438da323",
"main.dart.js_53.part.js": "74273c6c4b1e08cd02827ac09ef6b6e2",
"main.dart.js_43.part.js": "0554adc60c1e3de4fb8369f706b0d7c0",
"main.dart.js_192.part.js": "754f4e5e602703fd840729f9dd998ebb",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"main.dart.js_149.part.js": "3b15b2c165b2ad24170691641ec43d5b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

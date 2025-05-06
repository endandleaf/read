'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "454a2ae20322d71f6e363210fbea54bb",
"main.dart.js_79.part.js": "1539194282341f9a780d8fb43d81ef08",
"main.dart.js_24.part.js": "7962619b458d44b3c8dc263b6a2a6bc5",
"main.dart.js_34.part.js": "b7f9ddc26343dba1a650971be765f2f0",
"main.dart.js_46.part.js": "5317811dc0e10827aac6e6057107cd56",
"main.dart.js_56.part.js": "629c0a3d14f67b3848ad00595f8d0e22",
"main.dart.js_173.part.js": "41fee26183c42609a74d74ddf6d7e162",
"main.dart.js_145.part.js": "a32e4d5378eac66835080481004be76a",
"main.dart.js_155.part.js": "86d08b5cc3c1f947ccf18b3c3878037e",
"version.json": "37cac5ceff6e315dd609aac7604176c0",
"main.dart.js_7.part.js": "c0fd324278844d79cff4958d2051a11e",
"main.dart.js_60.part.js": "5e0b1943e2f0ca9dee32422a5e1920bb",
"main.dart.js_70.part.js": "52e746e7fd56549da3713e57acbcc8bd",
"main.dart.js_12.part.js": "83906e5cfaa24e8559a3a6deb2decfb5",
"main.dart.js_127.part.js": "6590a89c287da9fe207f6ec0b91f4ad5",
"main.dart.js_84.part.js": "9d6eea96bfe4f9ac01b979bea5680bf8",
"main.dart.js_118.part.js": "258b7b34c2f03a4494b6c8bc90226679",
"main.dart.js_154.part.js": "bda9d84fc144f9325ad9dd17e1ebdea6",
"main.dart.js_71.part.js": "9403d8e26ab936427c2b5024c9d3f1c3",
"main.dart.js_61.part.js": "37cfd172f1fce5e9fcb583b5101b6ade",
"main.dart.js_6.part.js": "28f2625c508991151127bb6c166fa297",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_136.part.js": "d5065a86beb2ff4970949b7b9107eb64",
"main.dart.js_126.part.js": "f84aeb7329ceac5c467da55c3dda9b1e",
"main.dart.js_119.part.js": "d6dd27d09b10d72cb04b500809fe5421",
"main.dart.js_95.part.js": "d1e4d4ccc3ba65ec2406ffeab0d96da9",
"main.dart.js_85.part.js": "209578ee648c976bc25d8514f20db83e",
"main.dart.js_68.part.js": "31e8cd924dda379d030a81d873a6c475",
"main.dart.js_110.part.js": "f15e6d5f29753d22de3c332e0db4b441",
"main.dart.js_25.part.js": "db5a514c95349f7685968e6d6d7e72a2",
"main.dart.js_57.part.js": "ec46a7872eb67f0cdd855f43ddc07aaa",
"main.dart.js_47.part.js": "f9c95d925147fe4fb06768f986257811",
"main.dart.js_162.part.js": "e4d3b5a089e0dfca56af71efc4a15c4a",
"main.dart.js_11.part.js": "33c126fecf32e14249a461c3064ed1fe",
"main.dart.js_63.part.js": "394041ca97153a7f226f3be8ba1ad948",
"main.dart.js_73.part.js": "ea25f8ec356314970d7737bbe56e4ba7",
"main.dart.js_146.part.js": "8129f4158c0a7c53afdb0e80472995a4",
"main.dart.js": "de9e0ba683dea8fde4cf6cbb30574326",
"main.dart.js_87.part.js": "8cdaa6c6044439c73a10699b5023c363",
"main.dart.js_97.part.js": "8a577e17d038103e65f940aa000225fb",
"main.dart.js_179.part.js": "19a0a867b96268088147c05842df6627",
"main.dart.js_169.part.js": "e6d56440ed5bc1905c7208957b66051c",
"main.dart.js_18.part.js": "72ad8c30d42aa5d5a6e806c59374d9c5",
"main.dart.js_170.part.js": "75c49ada84034c0dccb990c451bc3bc8",
"main.dart.js_45.part.js": "d39a1dd973704b074973f84dd26434ef",
"main.dart.js_55.part.js": "0dd17347c3e04beaadcac3c7ce9458d7",
"main.dart.js_27.part.js": "43d12a0f2e9a85060220e2d4e4c2fce2",
"main.dart.js_37.part.js": "fe1ad6b015ab4b141a1e3ba15b1c31cb",
"main.dart.js_19.part.js": "aaf9dc7d2f897f9c749bf7dfc1b3367c",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_161.part.js": "8b550523695bc470bbc7a5bc8b6a7bc8",
"main.dart.js_44.part.js": "b25d003ae9bc36bbe010c06f55c318ad",
"main.dart.js_36.part.js": "3c545678a855c9d19d779561f384e824",
"main.dart.js_26.part.js": "3bd23cdc75c83850046e99c611038c57",
"main.dart.js_103.part.js": "dd861658df0b263a80a197dca4889410",
"main.dart.js_135.part.js": "c20148b37fea6d61fb948888083fa70e",
"main.dart.js_125.part.js": "6712dd15d5ea2399b1eae43174f7f659",
"main.dart.js_10.part.js": "d07b85d5faebcec58a89a6aff6915d88",
"main.dart.js_72.part.js": "60ae88585137f8a5c35be48d02dc8dea",
"main.dart.js_5.part.js": "2e84286fdfb39b7f92c16b6d6f0fca54",
"main.dart.js_62.part.js": "411842e2b8cb919840b9434283ba73d9",
"main.dart.js_157.part.js": "78fcf7d271e487464ba006fc48aa7f0d",
"main.dart.js_147.part.js": "b868a62f55446d6a5b5769e274fafa81",
"main.dart.js_86.part.js": "83d0209f2fec2f960ad089c630b7d670",
"main.dart.js_178.part.js": "84bd1d8ee2ef1fc44c18c645e745fea2",
"main.dart.js_93.part.js": "26a405d4dbb366633a4ea136f939d291",
"main.dart.js_58.part.js": "b096c0dd7c45f55677e89f2f6b5ce15e",
"main.dart.js_120.part.js": "ab91efd79107e0b50f5ae571941ea489",
"main.dart.js_130.part.js": "f63ac11a3d33d2c8e7da05ffe933e134",
"main.dart.js_77.part.js": "865152e9ac03d4300a86a95f3f5e6348",
"main.dart.js_41.part.js": "fc4fea26bfcae590aa1bf275b9c3707d",
"main.dart.js_51.part.js": "bc8c247af99a3400c50e74762589040d",
"main.dart.js_23.part.js": "3e8cfaa78634af0f6588d64ad0dfa101",
"main.dart.js_139.part.js": "6aa7c0481c5971f6ce384ff72a7d9bbe",
"main.dart.js_129.part.js": "6ab030fd944e635628d37073714e5032",
"main.dart.js_40.part.js": "5db24ca1f21e56af1242743391db741d",
"main.dart.js_175.part.js": "29509dfe3c55912ff175ea75db3ffdb6",
"main.dart.js_165.part.js": "d5cfb2532742f5e15022ebd6595a1a29",
"main.dart.js_117.part.js": "07c6992308e5214ebe0eb784afd7d892",
"main.dart.js_8.part.js": "c7f9894837bec8e7e06032d9ad272477",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_181.part.js": "6c93fe73d529810363fe47e9f00482f0",
"main.dart.js_138.part.js": "187d089903032f7b3641f5d64233ea15",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "af4867f1d9f25e3856e93fef078d3833",
"main.dart.js_82.part.js": "16256eafd7bae1ff1fbc82a7a7de0ec3",
"main.dart.js_14.part.js": "c3818aa730b617815091db6c164643d7",
"main.dart.js_131.part.js": "d16149de5f28843829aba2e3859e6ead",
"main.dart.js_121.part.js": "233a48721fd812c95fee3882ca463f82",
"main.dart.js_153.part.js": "de15cd64e7a43d20be1cf95a83de128f",
"main.dart.js_76.part.js": "da2da2a710028c2f161b040d667a86d8",
"main.dart.js_1.part.js": "cd9004d865c4f5fd50de077c773b0d31",
"main.dart.js_30.part.js": "86585143136adcf87fe48fef228afc06",
"main.dart.js_105.part.js": "05fcd0d0d8a301249d2e6070674a446a",
"main.dart.js_115.part.js": "7ade774a8b7e89d66244fb495bfe41ec",
"main.dart.js_89.part.js": "0c2e4857a3970778c305118ed75ff74a",
"main.dart.js_167.part.js": "818a72f4ce6a930e2b705c0dcc7434ac",
"main.dart.js_177.part.js": "f7a68bf7a727567df18ff239dd737a71",
"main.dart.js_42.part.js": "58429d63a45c426fa896b487ecac66c5",
"main.dart.js_183.part.js": "692a6626f5966915bfcd3315d565300d",
"main.dart.js_158.part.js": "8a20f12ab33c31700cd24d409fd99c2d",
"main.dart.js_148.part.js": "ac2de325447e201432c747a45e4d06f7",
"main.dart.js_80.part.js": "0e6947bdafe4ea3c253ce229b5e96161",
"main.dart.js_90.part.js": "b7abd9a88c3cdac653e56757201a0c3d",
"main.dart.js_64.part.js": "2fb2570fc5beb7eca96e08ddde5fab35",
"main.dart.js_3.part.js": "6f19c22318e866e1acbcb190aeff5afa",
"main.dart.js_74.part.js": "dfb646290d2049c98145b601396e3d9e",
"main.dart.js_141.part.js": "3d39d4bb8a835d8440302a87f8d82e8c",
"main.dart.js_123.part.js": "1d210c4df705163ef9542f00eaeb9ab2",
"main.dart.js_133.part.js": "f4963689f3ba9e3c3d5cab9cd1a90463",
"main.dart.js_16.part.js": "d53c2e01ea6dce7570b157ea7a5d190c",
"assets/AssetManifest.json": "5cf8a53155e4dd24f61f6607d6b444b3",
"assets/NOTICES": "b0a9c943753cb3474808e5f56866dc42",
"assets/FontManifest.json": "bed231d7b112623f57dc119fc603f653",
"assets/AssetManifest.bin.json": "74769f8481b6f6091526df7c9b6dd7c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c2391a64ec826d8f08244541d7e9ae68",
"assets/fonts/boldface/AlimamaShuHeiTi-Bold.ttf": "9c8d7f88c39c3d90cd41ea9db70a9fa7",
"assets/fonts/circle/AlimamaFangYuanTiVF-Thin.ttf": "3be809e80815a8bc0feba3b241231c88",
"assets/fonts/MaterialIcons-Regular.otf": "da4a9f5f1a53ed97e3008e7960ae8c13",
"assets/assets/images/no_cover.jpeg": "7e48f3134478ff6a02bdaae12702e698",
"assets/assets/images/fq.png": "6e5136dee28ad0cb3a351ed047fac21c",
"assets/assets/images/splash.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/logo.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/qq.png": "491c32aad179267434096dc7f2b16214",
"assets/assets/images/qd.png": "7a81e826d519521b044abcf143a4bbcc",
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
"main.dart.js_91.part.js": "b4f310922e0f891d16483b7f4c893343",
"main.dart.js_81.part.js": "6f5d53ff18f3a77c66b6aecc352db72b",
"main.dart.js_38.part.js": "f853211fe77c61af120ebf6f8121b09a",
"main.dart.js_75.part.js": "7213b3ea0e253cb4d2931ea78ef7792c",
"main.dart.js_2.part.js": "cbce43d9a86d35fa20fe1e6804c5471d",
"main.dart.js_65.part.js": "051741a66d75535e3117d172c715eb43",
"main.dart.js_150.part.js": "ac3813596927ecf9ade8042ac19710d4",
"main.dart.js_140.part.js": "3ea0c44a24ef953d4372619c34feca48",
"main.dart.js_122.part.js": "c99ea59f78a7acb36f26ba9990c8c4be",
"main.dart.js_88.part.js": "90f8f1a0b9748bb46ec43be4ea77dc94",
"main.dart.js_31.part.js": "4cb7ca94f286d48f00bbda19b12776ac",
"main.dart.js_21.part.js": "cde5ed04470e13080f2ba75e77b0bcf2",
"main.dart.js_114.part.js": "b9d25f25be103291ad3de439157773bc",
"main.dart.js_176.part.js": "06dca35e98e6e9e3794995fb6ba039de",
"main.dart.js_53.part.js": "139c731f68394df954d8ac8e6235259e",
"main.dart.js_43.part.js": "56d445fef10e276d31a640ed12a0e5bc",
"main.dart.js_182.part.js": "bf66becdd8fe391cc154ab463786418d",
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
"main.dart.js_149.part.js": "d7965c68e25d1502c71d55e9ec1e6f83",
"main.dart.js_159.part.js": "61922cb1be777a87c9a8177f0c4ef3d9"};
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

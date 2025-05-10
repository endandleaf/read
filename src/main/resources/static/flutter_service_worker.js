'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "b225c9916e87993b363b690b9d20c526",
"main.dart.js_197.part.js": "85254a21f4293d41d87f65308a35aed8",
"flutter_bootstrap.js": "c32840cf981855b63b642c24ec8613e3",
"main.dart.js_79.part.js": "08c581f4d2d57ec6ca266be24ed774ce",
"main.dart.js_69.part.js": "df0b40ab2c2e3ebbb98cd2418cabb01c",
"main.dart.js_101.part.js": "d076211cc77680385be16d1a3cf7b5f2",
"main.dart.js_24.part.js": "bdddf2b53e2e7bbfc0e240f9679ef3cd",
"main.dart.js_34.part.js": "0c5c31ddb7dbe68665389600801e7d45",
"main.dart.js_56.part.js": "3abf485f570b2542291ee2500db773aa",
"main.dart.js_173.part.js": "21fc60ddfaea18bd024f77ed5e7076ac",
"main.dart.js_145.part.js": "2926b7ac4201d87d1c522e3814b08535",
"version.json": "5a42a12f5d1401d5d9947b4a11a885b6",
"main.dart.js_7.part.js": "e2604c9c8c44461c99f28d943af72ff7",
"main.dart.js_60.part.js": "ff0dbafe002635927ef8f4dc3d47a05f",
"main.dart.js_70.part.js": "5fa1c673bebca2b2fc8e4d628a154efc",
"main.dart.js_137.part.js": "b269d12661a2432640449db706086f47",
"main.dart.js_84.part.js": "c957b0fc78bab4bafc71c58237ec145b",
"main.dart.js_94.part.js": "ccf6cc9979048338b7546b9f17b44096",
"main.dart.js_108.part.js": "a8f6435e4214d943303289a45188d4a3",
"main.dart.js_154.part.js": "275e5cc28e30463a60d52ab2d5eb74aa",
"main.dart.js_144.part.js": "b7607f162bd221f86fe740f9dcf25e54",
"main.dart.js_71.part.js": "da9e1eb51f56fd0d97a9594306676492",
"main.dart.js_61.part.js": "fcd61600808dfba72b4235099f785b33",
"main.dart.js_6.part.js": "1448bf682c0aabdc04cf19ee2e4e4a18",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_13.part.js": "715135a90f2d239baea7592d035b0a79",
"main.dart.js_136.part.js": "f7e60d33d1e3e69b2dc1952259c781a9",
"main.dart.js_109.part.js": "7625836df6e7e0824e1d50366a88114f",
"main.dart.js_95.part.js": "e4520471cbbaecbe04a54f44576efd64",
"main.dart.js_196.part.js": "bf1c12607902de4448ff14b5a6969da7",
"main.dart.js_78.part.js": "657cc1736608752dec5603be38ce27fb",
"main.dart.js_110.part.js": "508984f60884158a51e679f91c7cd0ea",
"main.dart.js_100.part.js": "2afbb83fa34b0b2bc24ccfd5ed5018eb",
"main.dart.js_25.part.js": "ce101966729ace52bdedad0951e4e091",
"main.dart.js_57.part.js": "f40a5fff5969e54704bfa7a9b9e9cf1f",
"main.dart.js_172.part.js": "ee046ddab2e2e7fda42ae99eec73441b",
"main.dart.js_134.part.js": "20267416a1f2037e1374b93385cc36d5",
"main.dart.js_4.part.js": "4c5efdc21fb11debd0ca0b82b72c6994",
"main.dart.js_156.part.js": "1d5d07cef27df28e2483c0e2eed0c774",
"main.dart.js": "34cfad988470567d402aa74611c5137d",
"main.dart.js_87.part.js": "b59c97fd21caf7088a59b036733c2645",
"main.dart.js_97.part.js": "320646a5dfcab2817967756a869c823b",
"main.dart.js_179.part.js": "c66331bd207f346849b4da0b8e5fd925",
"main.dart.js_169.part.js": "844e8d1ab6ea29e395cf6b0cc150d942",
"main.dart.js_160.part.js": "58370847fc16c4a1a0b80d56f9864de9",
"main.dart.js_45.part.js": "c10835a042caee89cbb2151b7855ee0a",
"main.dart.js_55.part.js": "00eb317b99a2ff6e379ec2d668bfd651",
"main.dart.js_102.part.js": "5fc7bda9cd5b3bf2ac8d16aafe56e0fb",
"main.dart.js_112.part.js": "5ca26e866efa0197bf63cf0a3288f343",
"main.dart.js_19.part.js": "d273bd83bb5091edd60981b812bd4786",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_195.part.js": "d0d69e9952febce37765f12099a2fa84",
"main.dart.js_185.part.js": "6c9b60a50ce54490f8a424365e40c8ca",
"main.dart.js_54.part.js": "3d5f430a1bb4d67d7ce82cb7cbc16b8d",
"main.dart.js_44.part.js": "93edf09634c7a76a5ec6204371be3a35",
"main.dart.js_36.part.js": "29e693dd7c64f71ba8255ef91a0a5677",
"main.dart.js_26.part.js": "d76d0f1b68ea846e17589a53bf86dcbb",
"main.dart.js_103.part.js": "d6945726c0c05959be4968ed9cb78f73",
"main.dart.js_135.part.js": "11a164da3e1d13b1ee634d2c6bf6d804",
"main.dart.js_125.part.js": "ea00925eef1b59214ce402d9738dabe3",
"main.dart.js_72.part.js": "0c19936b77310e035371657063e5104b",
"main.dart.js_5.part.js": "8230caccb6e5d2b5c1b9cfbac4361967",
"main.dart.js_62.part.js": "ac1e04b0bc227bfb5e626549847c6487",
"main.dart.js_157.part.js": "c7184f3e1e5782e1ab8a599c9b3afb74",
"main.dart.js_147.part.js": "01f142029017cdc2ad1b4219222f715e",
"main.dart.js_96.part.js": "8d794151d033dbdaa1638d550e4ff8ee",
"main.dart.js_86.part.js": "3fc52b32e23d5983805ae3c92d51682a",
"main.dart.js_168.part.js": "d46e24e0bd3a2c71337179cd6613fc54",
"main.dart.js_178.part.js": "f0aa324c6359cbc80488938fc1e776fc",
"main.dart.js_58.part.js": "116e68ff7fa61cb0aa382c0408b17931",
"main.dart.js_199.part.js": "5d2a409d7dc708b3b8d0dede26156a25",
"main.dart.js_189.part.js": "4733f1f84547758b347558dd43643807",
"main.dart.js_142.part.js": "0ffc7d6c6352c3919ceb2f235e982df7",
"main.dart.js_67.part.js": "f1815dc244ee853b5c2ca93357960ff7",
"main.dart.js_77.part.js": "883e2f9769dadc515bea2352f3cb3a1c",
"main.dart.js_202.part.js": "6fb8ea5feb51158c3d127cbb9b54fbdd",
"main.dart.js_41.part.js": "9d2e28fcea6ffb29331da59e316d9e97",
"main.dart.js_51.part.js": "f7a86b069a15cdcd17f469ce827a14e4",
"main.dart.js_164.part.js": "c1a83eaffd4b3dbc168d4448f45f5e6d",
"main.dart.js_174.part.js": "e9f57113d2a30a8764b250d2098cafe9",
"main.dart.js_106.part.js": "b7c4930a3723b20aeae788cd9741e4e0",
"main.dart.js_116.part.js": "10a889fc2b5dd1aeb6edc14e8e0e5e3c",
"main.dart.js_33.part.js": "9fe2a26859e274f4b9d8edf00d2890f9",
"main.dart.js_139.part.js": "9ee392206a06e0cde9d5c98b829db659",
"main.dart.js_190.part.js": "d599e37e6c5121b166479d5c8011d3f7",
"main.dart.js_50.part.js": "ae0544464db843450365c6fa8a77d1a9",
"main.dart.js_40.part.js": "affeb2c652a2ad247c0539c030aeef45",
"main.dart.js_203.part.js": "322395f5f8a817373f8c935f75fbc7de",
"main.dart.js_165.part.js": "750a5e5be566223ed238df176c57abf5",
"main.dart.js_107.part.js": "fc43c831b6843d34102a1544e4d20ab7",
"main.dart.js_8.part.js": "632c15141edd865da5c9912d21a6da48",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_181.part.js": "b061deb25125b7a61b6468ce63d0614f",
"main.dart.js_138.part.js": "c1c5361a6ff3be69c334d0f426049886",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "b71ab48621a239fab9e2be7775ddd99b",
"main.dart.js_82.part.js": "1fcf4a890a4bbe2168129fbf150dea50",
"main.dart.js_49.part.js": "4625110d289edcee03d7c03a2fffc28b",
"main.dart.js_59.part.js": "6eee78a12747f44b7f04e7d2bcc23b76",
"main.dart.js_198.part.js": "252484c7b2fb138d976606965938cb6a",
"main.dart.js_153.part.js": "3d74827f0b0109dbc1860023e2551478",
"main.dart.js_143.part.js": "d467702b800030af80b901aa86f1ad84",
"main.dart.js_76.part.js": "6910a306cde7d496369ab3237a42e16b",
"main.dart.js_1.part.js": "8e8bb95b32db38c59a8cdedd0a2ae5a1",
"main.dart.js_20.part.js": "34e1566f2b81cd19f60d14404ac9570d",
"main.dart.js_105.part.js": "b74a2b90a9abea982e16a19228f59271",
"main.dart.js_99.part.js": "8eab0bb7e45e1af0ec8c0adf4b365fc1",
"main.dart.js_89.part.js": "9523e915df8f13573cf1f514904fa9e8",
"main.dart.js_167.part.js": "23fc0856072acfbb50498dbac89ac790",
"main.dart.js_201.part.js": "8123f9dbe9296eef5b84b8ddae9c9032",
"main.dart.js_193.part.js": "754f8c4429d5fe3b15dfb0e7ce96d473",
"main.dart.js_158.part.js": "4fb397215e6ed7e2d483292f0a9d855d",
"main.dart.js_148.part.js": "03477495b5df3d7c543434d1271f5305",
"main.dart.js_39.part.js": "cf148de83ae3ddc083603877c543fe41",
"main.dart.js_29.part.js": "9a29b1edc1b90769ebd5b972d3730a0a",
"main.dart.js_90.part.js": "80ed19b035cd8296f805450501bcf6ec",
"main.dart.js_3.part.js": "3dea14a25502611e551e215c2f5c9ab8",
"main.dart.js_74.part.js": "7efe588982d2dc914e563ba37473ed50",
"main.dart.js_141.part.js": "71b193e7ee1e37fd7e582365dbb933b4",
"main.dart.js_151.part.js": "0be23c0f2e554ad6848bf44afa2f8912",
"main.dart.js_123.part.js": "ef6a9f1bb52e508df7499a5c21272e83",
"main.dart.js_133.part.js": "dfd63499e135f675177ac4931a527404",
"main.dart.js_16.part.js": "1adf5475a85e82508fa19fc7d405a67d",
"assets/AssetManifest.json": "5cf8a53155e4dd24f61f6607d6b444b3",
"assets/NOTICES": "3a22cc93e735933ba1b226fae788baeb",
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
"assets/fonts/MaterialIcons-Regular.otf": "01489f62adc7a3a52470814574e2bf08",
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
"main.dart.js_91.part.js": "4ae0ceba94f701e77c7c75bf3d620f6c",
"main.dart.js_81.part.js": "9a827e8e0dd7323ca8134f98fdb2cc42",
"main.dart.js_28.part.js": "59f12fc6beb9ccc671dab60db3b7dc20",
"main.dart.js_38.part.js": "05b0347fa69cc7609b0f1fdbedc2f263",
"main.dart.js_75.part.js": "e483ae8b849b64bdd04f4c5ca25f16f7",
"main.dart.js_65.part.js": "8cad82cb385640c8a04f32a865023169",
"main.dart.js_88.part.js": "9d9e252111ceebc77c4cf822b8c156fe",
"main.dart.js_98.part.js": "a6eb9b82e94978be90503e3e126a88ca",
"main.dart.js_31.part.js": "4395297c5d26842ccd0ee8a4dde87323",
"main.dart.js_21.part.js": "edcfee0e997d37adb2b5498ca3657400",
"main.dart.js_114.part.js": "c8814b67e6f8f415af5af360de1b8989",
"main.dart.js_104.part.js": "4c38d1ce9361ecdfbfe6dadcfb845466",
"main.dart.js_176.part.js": "81f0a5b86dacdc715071d2fff21a522c",
"main.dart.js_166.part.js": "11bf98bd0c4d9f34aa49461ae7491a73",
"main.dart.js_53.part.js": "69fa08229ab63531345f01871f58da24",
"main.dart.js_182.part.js": "bbd76e066cc5c88b337d90d3c439808a",
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
"main.dart.js_149.part.js": "e89c34d0a9446d282a5e41cc962a2ebf",
"main.dart.js_159.part.js": "d7efd024a50df3a1193111b77c2a477f"};
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

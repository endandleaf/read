'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6374aebff9c95359cce86674f0d4d71e",
"main.dart.js_79.part.js": "e3ca4730088f9e0f82b469867dbcc481",
"main.dart.js_69.part.js": "a61e845169c49296a1692a9c57bdd0bf",
"main.dart.js_101.part.js": "1d6ea30bdcb2ed6e8925bd472fc7566e",
"main.dart.js_111.part.js": "e2c940ebb75ea7d3fe6d63e9b10017ee",
"main.dart.js_24.part.js": "e8e697ac98381a737e5a127932b8e006",
"main.dart.js_34.part.js": "acc5fa83e771ffdc47c8cf466c0d3610",
"main.dart.js_46.part.js": "2726d7c5cabb2c1d1e99696eba93d6aa",
"main.dart.js_56.part.js": "bdd19f9e9f4a50dd8d87793220499ac8",
"main.dart.js_163.part.js": "f59f0ad7bca5473168f00f12eb3954de",
"main.dart.js_173.part.js": "ed27806aaf3f9a92c789f030a5bc9b5e",
"main.dart.js_145.part.js": "3f4b6d7bb21eeb5ffdfec2c0f9bcf9b0",
"version.json": "a0f6d1c952299e6e0274404fdfc2bf46",
"main.dart.js_70.part.js": "9953c006c890b52d5bde7dae1d2e3ef7",
"main.dart.js_12.part.js": "6af0ebb0023e6a4624d8f5e07db08ac7",
"main.dart.js_127.part.js": "fe9d58992c1bddc543fb8bcfa31e9299",
"main.dart.js_84.part.js": "0bc9a72f48873ce4c10105631a60f6d4",
"main.dart.js_94.part.js": "a47889a205c6e996d27a980c982e27b8",
"main.dart.js_118.part.js": "ea5f3e69a6b1b6e71e54ff9b532af0a6",
"main.dart.js_108.part.js": "f2947c40abfedb5a1f79fd5a5f8cb859",
"main.dart.js_71.part.js": "93ae640f8bcc2e5fb662652a1fa98558",
"main.dart.js_61.part.js": "7f502d780ad7bea44d757a928f518a5c",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_13.part.js": "0474b5a8cd8ec5a3c7a69e42f7bf7af6",
"main.dart.js_136.part.js": "89076df5fe8b0463611530d16fbbc1ef",
"main.dart.js_126.part.js": "621a390fca1847fc64bb02a1975d91cb",
"main.dart.js_109.part.js": "a1a481c7f7e940ae198239355de81382",
"main.dart.js_119.part.js": "1ca13c81d094fb859db747eccfb12f10",
"main.dart.js_95.part.js": "5bf30d3bcb0f13790b4f825d84cfba43",
"main.dart.js_85.part.js": "78cb65e14440ff4ab3fce0e06f1ab678",
"main.dart.js_196.part.js": "e367a05551e5c757e05a93e8fc66d7eb",
"main.dart.js_186.part.js": "8298fab3fb73facbfb66aade6a3d6883",
"main.dart.js_68.part.js": "ce16520209e29d7c763f4c0092a077a6",
"main.dart.js_78.part.js": "b9ae0ce4358823338561c75a11c261e5",
"main.dart.js_110.part.js": "a96580a567eec3b48a6560806c38b93d",
"main.dart.js_100.part.js": "839b8fa7b615c8f70efcc84b194994a2",
"main.dart.js_35.part.js": "91f9d84400dcb5e23023a7588f840034",
"main.dart.js_25.part.js": "f344e26f49a99ecdf7c569ef87453fa5",
"main.dart.js_47.part.js": "97afa042011bc7e7ec3e372157f21583",
"main.dart.js_172.part.js": "2f22e9fd304b0774388554a7191d4aec",
"main.dart.js_162.part.js": "b682b0b64de57fa71fff0adcbc8d6b19",
"main.dart.js_63.part.js": "139ed18514fc5014e08269c3cb17cfa7",
"main.dart.js_4.part.js": "2a745a97ecff120dd412800beddf2934",
"main.dart.js_73.part.js": "532c21e79518b08cc6f33464e2b5c781",
"main.dart.js_146.part.js": "696a3839d14c2ed5c6af3bd616c1c91c",
"main.dart.js_156.part.js": "22c2de404d125007088a7f3d51d2e644",
"main.dart.js": "4f13c151f8667c39c64d9ec2efbf01bc",
"main.dart.js_87.part.js": "56b5919acaeb44e35663e3b4d0adf2e5",
"main.dart.js_97.part.js": "051f327270beecab4bf2d8aca82f5585",
"main.dart.js_179.part.js": "34431c19ffb03bebdd366a919079beae",
"main.dart.js_169.part.js": "339cbc83249d329441c8dee230c7f6e9",
"main.dart.js_184.part.js": "dc82a83cb9cb3ad8a5d978af1a57d3c9",
"main.dart.js_194.part.js": "a25c0e1bc44b7605be80d6786f647caf",
"main.dart.js_18.part.js": "57deb7832c080c9b28cb92298a204716",
"main.dart.js_170.part.js": "062fc8f9f99d4b0e177b555d921595c2",
"main.dart.js_45.part.js": "70a2e4ad16ef3d447f98edc790dc096f",
"main.dart.js_55.part.js": "c2adfe5f76188048f418a8b9e45096e0",
"main.dart.js_27.part.js": "dcf84dacceb5fb9d49cac7e7fa2950cb",
"main.dart.js_37.part.js": "b8b6a7971ded597542dcba1e27627b1e",
"main.dart.js_102.part.js": "ac4dcd3a908c3725b7c13f69129258e6",
"main.dart.js_112.part.js": "f176cae4135d7ab5b6e51085c0d34501",
"main.dart.js_19.part.js": "d2c02362e47d1cfdfbc09864918588f5",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_195.part.js": "cf58dc6d2bd4d28bccdab95c8eaaed01",
"main.dart.js_185.part.js": "b2a9c576c0b5a043c62fb5eebb4c1285",
"main.dart.js_44.part.js": "036a8068d24ec22faa45eb2820127192",
"main.dart.js_36.part.js": "d611f98b88d4f6667f826edb5c406d81",
"main.dart.js_26.part.js": "86462c67ca4b7b36c7fa20d469544a91",
"main.dart.js_113.part.js": "3bb93af080e09d1ded4b59c8d68fdb4f",
"main.dart.js_135.part.js": "7b09c30c9cb97b954eca01d54ee25379",
"main.dart.js_125.part.js": "8ebed40ea6363ed0d29f07187700ccbd",
"main.dart.js_10.part.js": "cf979e194e627a1bc675ed060ee5a240",
"main.dart.js_72.part.js": "a57be979480070a19ddad35ac1135fb9",
"main.dart.js_5.part.js": "62d2e6f8fdc9e1ddb887fa130a088622",
"main.dart.js_62.part.js": "106b107e25df4930cca6b687a904e429",
"main.dart.js_157.part.js": "3e91a958d42320436ecbb0f2cb126bb6",
"main.dart.js_147.part.js": "4972787108854a39c95992242f4c74da",
"main.dart.js_96.part.js": "0e394b8d6c32fb3864a129953eab2281",
"main.dart.js_86.part.js": "f0027e86faf48f7c8ffcdf2284a3cca0",
"main.dart.js_83.part.js": "804a6cc91dab9211f3d815a9024befaf",
"main.dart.js_93.part.js": "4d7ff3ed13b71bd22be806bed4ebb902",
"main.dart.js_58.part.js": "a34a5b55344b2bd9c82ec13d795e6f39",
"main.dart.js_48.part.js": "cc7aa8daf052b1efe7bebb5442f2e159",
"main.dart.js_15.part.js": "67c68256ffbac4c5c7e318936eede358",
"main.dart.js_120.part.js": "c8518add02c306a6bfe930c3be4a4764",
"main.dart.js_142.part.js": "ea0390e77b4100636bf82f1e857b1d90",
"main.dart.js_152.part.js": "7b87d5e5163d8c9b7a1ede90529c92dc",
"main.dart.js_67.part.js": "83acbf7109fcaf1ebdfb9a9dfb48424c",
"main.dart.js_77.part.js": "f01c83aacf7f88e8988f842fb4e2283e",
"main.dart.js_41.part.js": "376106689325032a1048913695f7d66a",
"main.dart.js_51.part.js": "c5903a56f694413c9e386053c9bc954e",
"main.dart.js_164.part.js": "592a60ffd33133cb4f331224d7745309",
"main.dart.js_106.part.js": "48f9ee8567f575865dc32ee32537f891",
"main.dart.js_116.part.js": "13b49a55c7c4fc0c012f705e3406ca9b",
"main.dart.js_23.part.js": "52bdf429952cb74986a6a094dc49ac75",
"main.dart.js_33.part.js": "ecb82b9b1e09b5e2da83d6546309b2e5",
"main.dart.js_9.part.js": "6a7bede32c6a1a837e009b8ec4d0d671",
"main.dart.js_190.part.js": "f976394e73b7a7aa5bf4e45690f8fcad",
"main.dart.js_40.part.js": "a7bdce02d78ec2c4dd601090e2418027",
"main.dart.js_165.part.js": "06dd869b6bfc0b62f6c3d409665f8459",
"main.dart.js_117.part.js": "7259287864a1d411d1ac7ef8363c96ac",
"main.dart.js_107.part.js": "75b08bce80a7dff434a497263c42f31f",
"main.dart.js_32.part.js": "32d5a8d202d2971631301fca0a768327",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_191.part.js": "851fa1123ab25795e1673bfbf8a0ed41",
"main.dart.js_181.part.js": "dfb31de1578d00fd442ddd3658f91658",
"main.dart.js_128.part.js": "02944276934b38c99bfbf786bd5ba7d8",
"main.dart.js_138.part.js": "f34e82d07b94c5220d900f01a72af821",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "49df27637723a4f8f8028fbca512067a",
"main.dart.js_82.part.js": "ede4f93de90d0010b5c657b041e540e8",
"main.dart.js_49.part.js": "669aa8b4f5746970e290a0ad053e22e3",
"main.dart.js_59.part.js": "4d1238bf00cf0693d1ab91aae42f7ffa",
"main.dart.js_14.part.js": "e6a4ba2fa39a023e73f4cbf82b42e09a",
"main.dart.js_121.part.js": "79d456d5f63d5e3dbe33f35d05a68094",
"main.dart.js_153.part.js": "8273ec0edb3dc538906b1d5ecaa23ff8",
"main.dart.js_143.part.js": "3c68b7412ffe4c576563f168c0d59440",
"main.dart.js_76.part.js": "08771d1116bb1abe994e3afa9d6094d8",
"main.dart.js_66.part.js": "4989760258975f06cc16675702be1334",
"main.dart.js_1.part.js": "dc799f191addcc2ef8b15b2ec6d2457a",
"main.dart.js_20.part.js": "56407a8e0cdda06fe6cd1a073275ed2a",
"main.dart.js_30.part.js": "18559bdbfe54eb0817c543e10d6d6f73",
"main.dart.js_105.part.js": "16d89f6fd82216de897d61611f0368ae",
"main.dart.js_115.part.js": "710ec24c68568eeb3a6d96dca6b32fda",
"main.dart.js_89.part.js": "bf18e2ca3dddc16191f7e0c61f27fb0f",
"main.dart.js_177.part.js": "b82796ada20601eaac216c4a6af3ac35",
"main.dart.js_42.part.js": "fccd52732a89358174af0acbdf767ea7",
"main.dart.js_52.part.js": "2805a18c96c12cdd8d26141091c27686",
"main.dart.js_183.part.js": "54dd82d35a8835745f539064aa46edb2",
"main.dart.js_193.part.js": "0b4ddcd8c204c742ddb438e460e6c4c8",
"main.dart.js_148.part.js": "dba70bcabaa2847dfd9f977841ae8979",
"main.dart.js_39.part.js": "8944ad4ddb9f3c894191399d222bbea0",
"main.dart.js_29.part.js": "9030339ec165ac2863102cdc4fd8e0fe",
"main.dart.js_80.part.js": "3e046f3db71ac8b1fe52d5f9e888debc",
"main.dart.js_64.part.js": "ff60630adc9a2d88a0e22af4182995aa",
"main.dart.js_3.part.js": "9314d8a90957c01231a1a4d192066623",
"main.dart.js_74.part.js": "04b44b01a3ba00f4b82ee4e744102f0c",
"main.dart.js_141.part.js": "161024e52e09b0ca490699cb8f70884f",
"main.dart.js_151.part.js": "43a43a8ff195e0d3ed48494fe2d0f873",
"main.dart.js_123.part.js": "8fa65b0e19012e4d7065df587a44d77e",
"main.dart.js_16.part.js": "f07f9fe74c35e33a5441bb2405bbee4b",
"assets/AssetManifest.json": "52e658feb5a1f0467c890aa6abc838b6",
"assets/NOTICES": "36a64e33c04dd452e39ae2f080421c95",
"assets/FontManifest.json": "bed231d7b112623f57dc119fc603f653",
"assets/AssetManifest.bin.json": "1babefab09fd6a4338c7d1e3613640a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b313ac7f7a6c648eae790196fb022fa4",
"assets/fonts/boldface/AlimamaShuHeiTi-Bold.ttf": "9c8d7f88c39c3d90cd41ea9db70a9fa7",
"assets/fonts/circle/AlimamaFangYuanTiVF-Thin.ttf": "3be809e80815a8bc0feba3b241231c88",
"assets/fonts/MaterialIcons-Regular.otf": "2350e96d11d44e1491cd1762721bd492",
"assets/assets/images/no_cover.jpeg": "7e48f3134478ff6a02bdaae12702e698",
"assets/assets/images/fq.png": "6e5136dee28ad0cb3a351ed047fac21c",
"assets/assets/images/splash.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/logo.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/qq.png": "491c32aad179267434096dc7f2b16214",
"assets/assets/images/qd.png": "7a81e826d519521b044abcf143a4bbcc",
"assets/assets/images/default_avatar.jpeg": "3cfd6cec07546522179cab14e9375c10",
"main.dart.js_81.part.js": "9465567194a78204326c697572286d25",
"main.dart.js_28.part.js": "e1c5c20f627ef23597a0e98672ecab72",
"main.dart.js_75.part.js": "b6ce2bf9f345504808ae092ae07a7d8e",
"main.dart.js_2.part.js": "02a4c38cfb6959ffa0ed4d5c1d944e11",
"main.dart.js_65.part.js": "2c08926053c3f7a3f3c82b122132b3dc",
"main.dart.js_150.part.js": "78ef12d0e4ed880ce22f126c3af557a6",
"main.dart.js_122.part.js": "e28ee17afcc6091350ed38512675e9c6",
"main.dart.js_31.part.js": "1e21bfdd478f58d8b7fd6808f82ba9bf",
"main.dart.js_21.part.js": "6293715d66e2f653cf3da613dcd9653e",
"main.dart.js_104.part.js": "98097a0a88d7a40400fd7838f804067d",
"main.dart.js_176.part.js": "13c2505c7cf7863378d14bf1eab2b65e",
"main.dart.js_166.part.js": "a588d944d6da493685afbe679010bcd9",
"main.dart.js_53.part.js": "34f5ba9b50075ab1f717e027246e7b02",
"main.dart.js_43.part.js": "b6ffc4f077c4f6692b60a56a5317da3f",
"main.dart.js_182.part.js": "e71a3fb4ebc47eae2830954d7e04c084",
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
"main.dart.js_149.part.js": "4da606ceaac9678343cccd80430f3717"};
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

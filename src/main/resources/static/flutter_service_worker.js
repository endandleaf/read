'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0090672187616b6fbbece93853b54493",
"main.dart.js_79.part.js": "1fbc96e2db5fc035928cf25f9c65ae72",
"main.dart.js_69.part.js": "36660e3107a453f80bdef27956299be2",
"main.dart.js_111.part.js": "e4c0143a3756168e9acdb604cdb0ebfa",
"main.dart.js_24.part.js": "bcc21db298d6aa57cecdd001173dffa1",
"main.dart.js_34.part.js": "c8a879f75ac6cafa12a97bdf1b991e50",
"main.dart.js_56.part.js": "4b110c2afb9cd5cf8f9f1c735749e32c",
"main.dart.js_155.part.js": "cb6684aeb7e5f295537e508d7c625feb",
"version.json": "f4eedd34820c330afc9c2a24f9be1ef3",
"main.dart.js_223.part.js": "f2424160affa4822ebf7f746c9c6c34b",
"main.dart.js_60.part.js": "c51036fb5391a4003d0b0b78e56e1688",
"main.dart.js_70.part.js": "cca4cd6746c0aa8eabb81db120f18285",
"main.dart.js_127.part.js": "534957dc5cedeeed4d2506b857b4a5cc",
"main.dart.js_84.part.js": "27b2c135077faadd877ebec3c0507610",
"main.dart.js_118.part.js": "fe2bfaba35da78db3e33aa2e31cbc318",
"main.dart.js_108.part.js": "5e91549455fb803f77a5d77c576c738d",
"main.dart.js_71.part.js": "7f47bd053a639ea6142f7ee254d15d45",
"main.dart.js_61.part.js": "5bc7ea3646235e5e519ff5e9fe8ef582",
"main.dart.js_222.part.js": "23abb05e899515827aeee362c6aaac56",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_13.part.js": "6be3c341dbaf5604be6cc7d8fe55aabf",
"main.dart.js_136.part.js": "f87b735d1d5f8001a52f19670314f528",
"main.dart.js_85.part.js": "36b8c1bb8467914e6900014332b90272",
"main.dart.js_68.part.js": "22053d5856bc714b2e76984b2c28ee9c",
"main.dart.js_78.part.js": "bfaf250307ffdea3521141b7d39f5ed4",
"main.dart.js_100.part.js": "37227ffe41e54bb42ac1f3be7ca74336",
"main.dart.js_35.part.js": "1cf94f7b8a60591d489d3ef2230f9ec6",
"main.dart.js_25.part.js": "be7b3fcbd35b0060f069a8d903c5a48b",
"main.dart.js_57.part.js": "e39dba4bedd48e5b4ee48e17a2db6d09",
"main.dart.js_214.part.js": "91e3af310c3cd059aa5e5cbfa443f61c",
"main.dart.js_47.part.js": "79f375e85423f8db370e463bf30e9330",
"main.dart.js_162.part.js": "f9ed0c7fceb47284a1a2a7d9c628b110",
"main.dart.js_124.part.js": "e38b07c5b49f556b73f4a6d2a3caddcc",
"main.dart.js_134.part.js": "aebe180fab8c3195f705530a914e4817",
"main.dart.js_11.part.js": "ac7ea02a4a2be3e936228cfcfa11400f",
"main.dart.js_63.part.js": "ceb598c32b67c7c374a1ff35a663513f",
"main.dart.js_220.part.js": "3956b05ff5a4c447dd9777a0eae63b5c",
"main.dart.js_4.part.js": "8ae612e2b284c69d0e0994263f4341c2",
"main.dart.js_73.part.js": "c110d6dd6c9d2cca17140885833350be",
"main.dart.js_230.part.js": "22ddc5c1d94c382402d0b8c4c46d1a6c",
"main.dart.js": "ee14b3f088dc6bee83fe72d09109623b",
"main.dart.js_87.part.js": "ecb869af758ff3ea25688ba25e9ee985",
"main.dart.js_97.part.js": "a37fc41965e8e6f309da74f329d0e41f",
"main.dart.js_179.part.js": "af4d883628f68c455251013aa9d87fba",
"main.dart.js_169.part.js": "233051612e7cb8519a71c311e1fedc97",
"main.dart.js_229.part.js": "c7eae1f337d525dd66d485be698d4f90",
"main.dart.js_184.part.js": "d9155b69cc5963412c542ad1af72d616",
"main.dart.js_194.part.js": "e58aacd8e46afd592d1f863f1a93da66",
"main.dart.js_18.part.js": "266e089796fd2f14ac2a4f257597981f",
"main.dart.js_160.part.js": "82fd6c9e013b4490f901c51b21a8f2c3",
"main.dart.js_206.part.js": "fbb1f9ae0d06fb35531da28e4b09695c",
"main.dart.js_55.part.js": "e638ddbb6741ba5ec3454f901771ddc7",
"main.dart.js_216.part.js": "9fac4f1fec521e0c46c719ab8c06a1f2",
"main.dart.js_37.part.js": "d4cc5224809a62d0aa42f403ec121e85",
"main.dart.js_228.part.js": "26e1c19fafa39e8fbe782462bf4bedca",
"main.dart.js_19.part.js": "8f421eba260a7c270c6b82e2489c0109",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_195.part.js": "61e5e6299eb47aa33e983de90bf89263",
"main.dart.js_171.part.js": "26e05349844490211c0e1715d2a987b3",
"main.dart.js_161.part.js": "f291802c29351ad453d68f02af4f2376",
"main.dart.js_36.part.js": "ab23d51c472216e0d6e10a5ad2276d01",
"main.dart.js_26.part.js": "64a135bc1eb80f01590ad28df70bdb90",
"main.dart.js_113.part.js": "e753f7106049f027fe4174736a91e233",
"main.dart.js_103.part.js": "eed1de6545928dafd28882c2a3206d35",
"main.dart.js_135.part.js": "6b98b8809d4497f3a1e024242c5945b7",
"main.dart.js_125.part.js": "37dbedc646e8f84af3675d7a0f684a6f",
"main.dart.js_10.part.js": "8df974be030e916f50cd75a48ef83670",
"main.dart.js_231.part.js": "2b3dc107a1109ffc651245f17dce704a",
"main.dart.js_72.part.js": "f1c93fa87d617dde0e85de6f94b3d30c",
"main.dart.js_5.part.js": "d2fed994bdcba7e6b88a4b558d885f99",
"main.dart.js_62.part.js": "9acd1aa90d842a0d06d11be06769549d",
"main.dart.js_157.part.js": "1099d5d77fbe8301714380ecf2fe1298",
"main.dart.js_96.part.js": "a738577489551fda8349470c570d2d19",
"main.dart.js_86.part.js": "1eaf0f0592ce6870d0e0cb334bbdb4fd",
"main.dart.js_178.part.js": "095c88d60c248ecf2b149306e05fa69a",
"main.dart.js_83.part.js": "0d630d1bf7251bd72db7dace1c121131",
"main.dart.js_93.part.js": "0a77205fc1ebbb8b13301e60a3c373a9",
"main.dart.js_48.part.js": "d28120ca3af2a5474082a071139a456c",
"main.dart.js_15.part.js": "6f075b0a9ac833968650fad2de671d0d",
"main.dart.js_120.part.js": "bb8b1e9de5c0760a1dd90cb22de37d1f",
"main.dart.js_130.part.js": "cd55a12491618ba63e9aae692d07691e",
"main.dart.js_199.part.js": "e0bf6838bc6bbe9abc0c388a4b827a92",
"main.dart.js_152.part.js": "a35c99254932b4f4f13eec20a632c655",
"main.dart.js_224.part.js": "cb1994cc139b1dca726f42f0c28006f0",
"main.dart.js_67.part.js": "b9c08fcf47772c6c50213e17ed37bb8d",
"main.dart.js_77.part.js": "b4d28b3cce7e7020690702b7b454fef5",
"main.dart.js_202.part.js": "3586f0dd9657043c618966130ef69e8b",
"main.dart.js_41.part.js": "0d0db06e361e3a132861e4104683eb71",
"main.dart.js_212.part.js": "139297708928d4755e2a6976d2b95bae",
"main.dart.js_51.part.js": "93d303b0485831ef25111a22a1823f56",
"main.dart.js_174.part.js": "5f81ce27b6133bc952da49ef7a5b5436",
"main.dart.js_116.part.js": "b962d4f9b689330013f7611fcf976bc9",
"main.dart.js_23.part.js": "0e0b70a024741fcb7a380dcf71ec1dfa",
"main.dart.js_33.part.js": "a1c4983d18a34a91464d6c0de8f038f0",
"main.dart.js_139.part.js": "c50fee80e858a03ebd403f82b7daa889",
"main.dart.js_129.part.js": "0d9fef9066d5be4d29bfb51d84e35770",
"main.dart.js_180.part.js": "e5120c9b3027692a63f076b97a7293ca",
"main.dart.js_50.part.js": "447220a7f005668b30e89370711b83a7",
"main.dart.js_213.part.js": "27fd4e58e2665724f189ce7733dd0b32",
"main.dart.js_40.part.js": "10713638c147d3dc1a4e73bef7cd4951",
"main.dart.js_203.part.js": "10e88a628550b6615f176778ab09f3d6",
"main.dart.js_175.part.js": "87a839d9e97062ee88e787cb1ed29769",
"main.dart.js_165.part.js": "9255c733c795f09fc386e2f817e1b339",
"main.dart.js_117.part.js": "52f118fbfafeb48040ce2293c1bb3718",
"main.dart.js_107.part.js": "6b6f1ccc1f3f459c5ab7acaba0ef6d7d",
"main.dart.js_32.part.js": "76855f1ac54bd31f5ab8686d68153ff0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_191.part.js": "c2a721b3becddfe260ecec921f230cd3",
"main.dart.js_128.part.js": "af05cf6a2ad3f812a85b669f0b83ed7a",
"main.dart.js_138.part.js": "27cc3dc173d2554da8ddc64f8801ffc7",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "6075dfc9c123b24d0585c2b5f2e15742",
"main.dart.js_82.part.js": "8ab80a630d1e03e56109031dac0ea4b6",
"main.dart.js_49.part.js": "903b600b6ed5d9ce3d0a3d9e0818e24f",
"main.dart.js_59.part.js": "e605587cb23cd5c95caa03070188e2a5",
"main.dart.js_198.part.js": "998b344d8b9416ab4731e3cd41e0bb17",
"main.dart.js_14.part.js": "0f1b48f67382aa96bdb3303116aaa3e7",
"main.dart.js_131.part.js": "986fbfb0c92f90ff104bc4e1e01d7da4",
"main.dart.js_121.part.js": "59c94e1ef313c0d607de6e970e7805d4",
"main.dart.js_153.part.js": "b1122e59c1fabd1cb523d037ba97f057",
"main.dart.js_143.part.js": "8c1ee0eff7edf34c8c350cabd1700fe9",
"main.dart.js_76.part.js": "9ab212bdaae8f9edbad911d9e880f544",
"main.dart.js_66.part.js": "7f3243b9800c67b77bdc0c88c74558a4",
"main.dart.js_1.part.js": "4f697d88ba8cf586d080a9ceabffb5f4",
"main.dart.js_225.part.js": "095e9330ccc3b9da047b010a9fb96aea",
"main.dart.js_20.part.js": "334c3ded00980002e5717902c65296e2",
"main.dart.js_30.part.js": "4ff3e85423437b69ac389271e657021f",
"main.dart.js_105.part.js": "fbc5f3b2f9824a88d9c425a13233081c",
"main.dart.js_115.part.js": "78777dcc5329ad22677263283d85ddfe",
"main.dart.js_99.part.js": "d72e9c0ba0a24b9a784a0aa9a410f8aa",
"main.dart.js_167.part.js": "0ac931011ff941bdf9a2d0d7b142e086",
"main.dart.js_177.part.js": "f75368c6aeee86a2118ae5f4b1b1c8f2",
"main.dart.js_42.part.js": "b3b4eb7a19d5fdb088066730bef230db",
"main.dart.js_52.part.js": "394fb345176d75f2cde484a59acf9eae",
"main.dart.js_183.part.js": "8a3309fce8fdc17d0f3be6848d3ee9d0",
"main.dart.js_193.part.js": "6cda3ffa021d565b626f7a79808d80a2",
"main.dart.js_208.part.js": "8b7368c3ee0acc1eccfb48aee2e30cc0",
"main.dart.js_39.part.js": "9d4da046066882923e395e970658d07e",
"main.dart.js_29.part.js": "d21e9942104d4cbada4cf0a978a285e3",
"main.dart.js_90.part.js": "73c99ea0742fc21a0f86137ff0048a42",
"main.dart.js_3.part.js": "4e8bc0658b514bd7684ccf18160b9a83",
"main.dart.js_74.part.js": "7888611fb404e140096b578e28f6a309",
"main.dart.js_123.part.js": "fe47bbe9a8ec2d13a32ae8b40c807d8a",
"main.dart.js_133.part.js": "5310460ce7c443def56415930d912a2d",
"main.dart.js_16.part.js": "1b17ae1a15c403fba9fc553140f0d0b0",
"assets/AssetManifest.json": "52e658feb5a1f0467c890aa6abc838b6",
"assets/NOTICES": "8137fcb029a3be92fb9417f0a284d5ce",
"assets/FontManifest.json": "bed231d7b112623f57dc119fc603f653",
"assets/AssetManifest.bin.json": "1babefab09fd6a4338c7d1e3613640a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b313ac7f7a6c648eae790196fb022fa4",
"assets/fonts/boldface/AlimamaShuHeiTi-Bold.ttf": "9c8d7f88c39c3d90cd41ea9db70a9fa7",
"assets/fonts/circle/AlimamaFangYuanTiVF-Thin.ttf": "3be809e80815a8bc0feba3b241231c88",
"assets/fonts/MaterialIcons-Regular.otf": "fde54df9080024a72a72dfe6b20ea2cc",
"assets/assets/images/no_cover.jpeg": "7e48f3134478ff6a02bdaae12702e698",
"assets/assets/images/fq.png": "6e5136dee28ad0cb3a351ed047fac21c",
"assets/assets/images/splash.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/logo.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/qq.png": "491c32aad179267434096dc7f2b16214",
"assets/assets/images/qd.png": "7a81e826d519521b044abcf143a4bbcc",
"assets/assets/images/default_avatar.jpeg": "3cfd6cec07546522179cab14e9375c10",
"main.dart.js_91.part.js": "c5412f0c2264ee9f65277e85e0cf1524",
"main.dart.js_28.part.js": "c551f70a4e17f8f468f8994d0f15d6d8",
"main.dart.js_38.part.js": "08fe51b54953de0851cb8d3d0995e88a",
"main.dart.js_75.part.js": "9814609c8b63cdb1b4cf72286946c629",
"main.dart.js_226.part.js": "c0b5f01fa3c12baf328e73023e8d06b2",
"main.dart.js_2.part.js": "6ff040aa60ce3c5a2aee34978acba321",
"main.dart.js_65.part.js": "38c247f65b91981346a22cb36393d8bc",
"main.dart.js_140.part.js": "709345dedefcd19151cdea6d94c70ef0",
"main.dart.js_132.part.js": "a78f2b6f8077c6e3cb0013e9a3a1cdb3",
"main.dart.js_122.part.js": "a42418cce95b4e985fa80e19c23dcfa0",
"main.dart.js_88.part.js": "1178ed4ed03a52ffcdb97381c1cd03be",
"main.dart.js_98.part.js": "0f0482c1ec338f5b07181514c4c72e8d",
"main.dart.js_31.part.js": "8d9f28fb626a44ce937fece2f4e96631",
"main.dart.js_21.part.js": "266a8be97ce61a9370f53c406b7d9a75",
"main.dart.js_114.part.js": "88028555a9710ce216b395a1506081dd",
"main.dart.js_104.part.js": "7601a1371167a891fa44edc419807569",
"main.dart.js_176.part.js": "86c18ce2180b222ae0d8e045e26caa48",
"main.dart.js_166.part.js": "684f95b911c2c22eb807ba6cb7778fdb",
"main.dart.js_53.part.js": "eba96dcec158ed104f75f796cdf5f70b",
"main.dart.js_200.part.js": "1316bf9da55f2ae0b04064b065c8b44f",
"main.dart.js_43.part.js": "a8b29c629b679cfd4a1910db6e93d732",
"main.dart.js_192.part.js": "d0dcb2c82c1cb9aa690d5f14890313ee",
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
"main.dart.js_149.part.js": "121e7acbdd94146a825876c27cfb1965",
"main.dart.js_159.part.js": "c7251ee6201e4a69021da86de175d12c"};
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

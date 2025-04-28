'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_248.part.js": "e793e9f15689b3b46ddb1f5b26886afa",
"main.dart.js_187.part.js": "cd93bae2c997dd87e3aa769e1678efb1",
"flutter_bootstrap.js": "db01214e0f46a5a40450f47520976a88",
"main.dart.js_69.part.js": "96fcba0fd5887120ea51f7c74a85199e",
"main.dart.js_101.part.js": "2aa51d550aec25c9649e905ce90b9292",
"main.dart.js_111.part.js": "291918f910cb6b611428356d0533f9b3",
"main.dart.js_24.part.js": "2ac11f7e36dedac0f36eba6a7cd8461a",
"main.dart.js_34.part.js": "3e582ec5beb6f8a69010376180ab3f01",
"main.dart.js_46.part.js": "f56f3f72fbc8286a80c63dd0deb4c9a5",
"main.dart.js_56.part.js": "08e9d4be3c1cea94a1db80d74d4bf870",
"main.dart.js_163.part.js": "d5ff1c21f580d65b5d0832c20899047f",
"main.dart.js_145.part.js": "cb43c5606020babc459b2bbd78c0199b",
"version.json": "5f7db36d5352dacaf96d3b329f122886",
"main.dart.js_60.part.js": "76fd1c1610d7b8dd894d51b36f48c5f9",
"main.dart.js_70.part.js": "f38f793f2ba3ab8e65ecffe04c02d8bb",
"main.dart.js_241.part.js": "6d9287420950b2aeb98c76a6081d92c7",
"main.dart.js_12.part.js": "b8a5c5f44abc72de0d5225faa62f8226",
"main.dart.js_127.part.js": "bb867e39cbb5b9d359fb78bee837aece",
"main.dart.js_137.part.js": "5384d7cfae4c61ffe6c2862ad8c60266",
"main.dart.js_84.part.js": "74299506e606d8a3b5629f97f32852c5",
"main.dart.js_94.part.js": "af6bc43e321d847e4158e0072dd64743",
"main.dart.js_118.part.js": "dbfa1bdb9a4fed157016387e9c671211",
"main.dart.js_144.part.js": "c9e3b27f124f976fce1956ed53d2c0c0",
"main.dart.js_71.part.js": "b8e4c5b2d772db4f2f0c3d889794e228",
"main.dart.js_232.part.js": "acaa1573a8456fb34a38a36f8abdaf03",
"main.dart.js_61.part.js": "afcad11704736d7b08f00a8337c9b71b",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_13.part.js": "a6a17e982c1c282009b6b702aedb6bbf",
"main.dart.js_240.part.js": "f3db5faec73e6325eaedc63d28b75511",
"main.dart.js_136.part.js": "13486bcc127be2a53f66c8df35cf7fbb",
"main.dart.js_126.part.js": "4ee1ffbe8bb2ccbce8d988aef04f9301",
"main.dart.js_109.part.js": "4ba636aee4ecd71e6ab92c842d565925",
"main.dart.js_119.part.js": "e2f578518dd946ad302d834dec91c4b7",
"main.dart.js_85.part.js": "477532f50cc43350887e4d6a5bf0b2c5",
"main.dart.js_186.part.js": "80a60867cecdf4c84e157a3b243acb4e",
"main.dart.js_68.part.js": "0febcc4c5f615991c3f01a3c946e79ac",
"main.dart.js_100.part.js": "3a9330f8b8faec582e3ead7873d017b0",
"main.dart.js_35.part.js": "e540a56c8f3138fc7c724b757325c3e1",
"main.dart.js_25.part.js": "78cb936a08fe2e69054f2f8eb6beebaf",
"main.dart.js_47.part.js": "90f75240367320ecf6a26b5f5f649eba",
"main.dart.js_124.part.js": "2e7d2af018ea6a55588646a0ce544bec",
"main.dart.js_134.part.js": "20b57a636cc3c29381721f8e566bf427",
"main.dart.js_242.part.js": "f2090f13363ad525192372fc8ba9d155",
"main.dart.js_11.part.js": "f703f9b8f55bc51cd47945ea772a93ba",
"main.dart.js_63.part.js": "401b45dbf0852e9f1a1c6dec624257a2",
"main.dart.js_220.part.js": "8bad9f7a022433a16744ea712208205e",
"main.dart.js_4.part.js": "77901a6e427efa8f33ba9ed995c234e7",
"main.dart.js_73.part.js": "32aff448d83579f09be600a5d80f33f4",
"main.dart.js_230.part.js": "bdf6e9d5ad6b04886e5de9a448faa136",
"main.dart.js": "4b08ba4bd16e46c1d8e0a89b3d7eb4a0",
"main.dart.js_87.part.js": "bd350e5417d53b7515568d3f37ddcd08",
"main.dart.js_97.part.js": "b8b980d8a39a3837b98487af9ec6b1b0",
"main.dart.js_169.part.js": "6d70c8eda0d02a308a82ac5924e9cdd5",
"main.dart.js_160.part.js": "f94df767d9f2c02f40da78bc82e4ec72",
"main.dart.js_170.part.js": "3a983dae4a4f10c62d04e9c2005c06a7",
"main.dart.js_45.part.js": "bc9546354cf7904db2494f6616d279aa",
"main.dart.js_55.part.js": "67e6afd16ce67de45d3a753f0168ef21",
"main.dart.js_216.part.js": "b11cba5510e4d1f095e50a56de3a3328",
"main.dart.js_27.part.js": "c116064de580dc4e4e8dcd1d35097cb4",
"main.dart.js_37.part.js": "ca4222bd7f032c0922b56a74b8a49e51",
"main.dart.js_238.part.js": "4b12c617e0a5fa34bc862b02ba2a3dfe",
"main.dart.js_19.part.js": "78909deee899af35fe0cee4f4bcadddf",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_171.part.js": "b4dcf44c043aaad4a6765b1e392a9e18",
"main.dart.js_217.part.js": "653a50155cfad65be2af2835d35a9f68",
"main.dart.js_54.part.js": "004104ddeb08805ff6966a7db7640d2e",
"main.dart.js_207.part.js": "28741ab578f0dc335a21599e8fbc18de",
"main.dart.js_36.part.js": "a381add2c06c6b7ac94faf30acbb91d7",
"main.dart.js_26.part.js": "27699f5c149ea415e32f6e7ad71b9d26",
"main.dart.js_135.part.js": "25adfadd3097b131c71c56a9887e9279",
"main.dart.js_125.part.js": "9277fbd48682491ed84f968eb429d98b",
"main.dart.js_243.part.js": "6f0df627105b653c059f6c049d48673d",
"main.dart.js_231.part.js": "440d1f31b73f0261d362974a42895386",
"main.dart.js_72.part.js": "306feaf0210ac7cf6dacb3c402283fde",
"main.dart.js_221.part.js": "0b77b29df9e23b7a7ce7aa558d747955",
"main.dart.js_147.part.js": "33b9d5bd518f2f906f27115c7c05dab2",
"main.dart.js_86.part.js": "918e130716e63a9c68313a3b028a6d07",
"main.dart.js_168.part.js": "666e9b5d52500007685f1c779d1bb1fe",
"main.dart.js_178.part.js": "54e758542ee3e34f057581e7694e3d8d",
"main.dart.js_83.part.js": "4ab5cc92b7d55c57e3c6eb09b80ca285",
"main.dart.js_93.part.js": "6b15f405afdb51fc6bc21df4e096f7b8",
"main.dart.js_58.part.js": "11aad304334417ea6f9b8642440b9ead",
"main.dart.js_48.part.js": "2d65495bb55e476b4175cc5a5534d7e9",
"main.dart.js_246.part.js": "4ea8ec5a44f53090cc86b21fcfe75a9b",
"main.dart.js_15.part.js": "9f54ebca9b59afe73d0fb166522c9c66",
"main.dart.js_120.part.js": "47ca6c85c2d1e5c1b656231409024770",
"main.dart.js_130.part.js": "05867f666332b70cc14568117a9f083f",
"main.dart.js_189.part.js": "c0d8bc62d8f0810c2b933995c50a79f4",
"main.dart.js_142.part.js": "6494fd004d58fe72d5acd1c50be29515",
"main.dart.js_152.part.js": "d3b32fac0d6847f5c0aa033f0e570334",
"main.dart.js_224.part.js": "b9ad03f53c70340bbfad71f14b0ef137",
"main.dart.js_67.part.js": "06251a9f3e98bab93d00b59d7a3fbc2c",
"main.dart.js_234.part.js": "14c6be365b7767a9256a8e9c563fe160",
"main.dart.js_77.part.js": "6a8cb2cb56161c73c0be3d6f5332d598",
"main.dart.js_41.part.js": "13887a8d47f7054af828b816dfdb66a5",
"main.dart.js_212.part.js": "3aafa775d7e855bcd381cfd787feb22c",
"main.dart.js_51.part.js": "c3e28316ecfdbffa20ee320b8ebc0251",
"main.dart.js_164.part.js": "a5440d183f1768c278d9529953a33ab0",
"main.dart.js_174.part.js": "746e9cd7ac5cd84dbd4a18e32859675b",
"main.dart.js_106.part.js": "245bc7a8a282760bfff53201f75ef07c",
"main.dart.js_116.part.js": "d28da7c26efa1d49c4c1ae96016ff5e6",
"main.dart.js_33.part.js": "893c01bc2ec3c32aba28986a6d080bce",
"main.dart.js_9.part.js": "ac99459d27781c50ef2643a9a3737ebc",
"main.dart.js_139.part.js": "98598c9abf6ded76e9560ebcbbd3ca23",
"main.dart.js_190.part.js": "e4531c043b13821a251e25c2f2a79d51",
"main.dart.js_50.part.js": "39c00498a1d780e41ad109e564eaa3de",
"main.dart.js_213.part.js": "085904222e42c709b983d2d8f824532b",
"main.dart.js_40.part.js": "f29ab2a95d1bcd38e5603cb05d645798",
"main.dart.js_175.part.js": "31efa5276c45ddd451430ece73476fc9",
"main.dart.js_165.part.js": "84123da2e9b1fe93a307dece931d38af",
"main.dart.js_117.part.js": "c2065779ca0398d14cf9bae408834943",
"main.dart.js_107.part.js": "595c62ab64d9c810072831fa48299038",
"main.dart.js_32.part.js": "9b386139f083dd341dc975f25b5cad46",
"main.dart.js_22.part.js": "11986a3f8631deb4d8f21ab9d6241371",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_181.part.js": "13963e705fd4332841a178b3d1f47054",
"main.dart.js_128.part.js": "3a764f3b5ee6d7c2da06ee5ce59354da",
"main.dart.js_138.part.js": "6dc51e0ba000dbdc6e28134f97e595ab",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "6391e432684e1e639cab2344c75988d9",
"main.dart.js_82.part.js": "ac1d3f8feb5ff48b69c1b604c91b3fea",
"main.dart.js_49.part.js": "a022e6b3b5712f8a6eb4ba828c0ab616",
"main.dart.js_59.part.js": "8d49843d936e45e7350b6d2b2232302c",
"main.dart.js_188.part.js": "54a5ce060b18a4832589b1bd59ac5b7d",
"main.dart.js_198.part.js": "a4af5d7b552f3be6a808aba7c233a80c",
"main.dart.js_14.part.js": "d7b235c56743ce9c5f2b4f1ee736ea4b",
"main.dart.js_247.part.js": "5a7fe2afce70b46363d5cf0bcbceb0fc",
"main.dart.js_131.part.js": "62ef4fb1e1dbfaea1a53b7d5e194918b",
"main.dart.js_153.part.js": "a778bf90bc0898f86b6dd191acd6cdd3",
"main.dart.js_143.part.js": "d83d0e7305000bc6a90aa94734f2ce4e",
"main.dart.js_76.part.js": "870b8b18b35c652107872a8a2369cc10",
"main.dart.js_235.part.js": "05b4baeeffae5b8683e99bd8923544ab",
"main.dart.js_66.part.js": "f2426b9819243b9f0116f4a1050827be",
"main.dart.js_1.part.js": "6640fb4382b32ee711ff1d6e29652b14",
"main.dart.js_20.part.js": "d748e092232db7c6f125af12bcb14c1c",
"main.dart.js_30.part.js": "04b93a238287d79a440bf633f159f208",
"main.dart.js_105.part.js": "c7d1df098cf3e5eff40cd0e38c337267",
"main.dart.js_99.part.js": "2b25abbc4b0e94a1f47f3c1b2b78e3ac",
"main.dart.js_177.part.js": "b41e2041480b7c264f803ec2d9443969",
"main.dart.js_52.part.js": "96fe0cfa76701d04ca80e0662fa5adff",
"main.dart.js_211.part.js": "17c580483b7448ebda3b4371c3092f1e",
"main.dart.js_148.part.js": "2f602349f0adc2073db4eb4c17812855",
"main.dart.js_218.part.js": "67cd450c48536aae2069b60c1449c29b",
"main.dart.js_208.part.js": "d4577d8ce325ad02c6b4fe8696d415fe",
"main.dart.js_39.part.js": "abd6d73a2644b1c1ec6bb64db3d4bd8b",
"main.dart.js_29.part.js": "a468b20a9cd5a43d6550dcb456ba78d8",
"main.dart.js_80.part.js": "6f6203a48d9a05332382106f76b26b2e",
"main.dart.js_90.part.js": "0302b3415ee6fa7f57ddecb03fff31d7",
"main.dart.js_64.part.js": "be8205f179eeb3473df9b25f3b352709",
"main.dart.js_3.part.js": "5918401db4df206008b1d8648608e87e",
"main.dart.js_74.part.js": "e5c14282dce27aca7690e77cb8f17db5",
"main.dart.js_141.part.js": "e177864c323c9e18552cc1559126938a",
"main.dart.js_123.part.js": "a719d4b5fc70282add3a9037d8592a04",
"main.dart.js_133.part.js": "0223e67c1f3133cd1fa91f0564a4c72e",
"main.dart.js_16.part.js": "7093f6ccc78e368e15afb4de14e5e735",
"assets/AssetManifest.json": "af11875f112eb8ffd1f0b010162a396e",
"assets/NOTICES": "b550795a598d504496ee69ca684b710d",
"assets/FontManifest.json": "bed231d7b112623f57dc119fc603f653",
"assets/AssetManifest.bin.json": "c6630824523744e301534bdb05eafedf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ab19daf687e4a7f2d17274b3711264cb",
"assets/fonts/boldface/AlimamaShuHeiTi-Bold.ttf": "9c8d7f88c39c3d90cd41ea9db70a9fa7",
"assets/fonts/circle/AlimamaFangYuanTiVF-Thin.ttf": "3be809e80815a8bc0feba3b241231c88",
"assets/fonts/MaterialIcons-Regular.otf": "e6bae5337c5ff7accfc9696fea08911d",
"assets/assets/images/no_cover.jpeg": "7e48f3134478ff6a02bdaae12702e698",
"assets/assets/images/fq.png": "6e5136dee28ad0cb3a351ed047fac21c",
"assets/assets/images/splash.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/logo.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/qq.png": "491c32aad179267434096dc7f2b16214",
"assets/assets/images/qd.png": "7a81e826d519521b044abcf143a4bbcc",
"assets/assets/images/default_avatar.jpeg": "3cfd6cec07546522179cab14e9375c10",
"main.dart.js_209.part.js": "d152bca82acca23cbc55b996d091eb48",
"main.dart.js_91.part.js": "a3f1a302349fee243b1b4c87f1368b16",
"main.dart.js_81.part.js": "29f89da60129b56003273cda1711d069",
"main.dart.js_28.part.js": "344e4fca4306e38868ff5bedf74d6755",
"main.dart.js_38.part.js": "7cdef1589c8d63ebfcd852a33a0a4f3c",
"main.dart.js_75.part.js": "2865e33ad36bbd02c7c439625c284f37",
"main.dart.js_226.part.js": "154c75975bdf58ea1bb974cac11f1ab3",
"main.dart.js_2.part.js": "7ddcca307d6ab7ff2c2f594a55af4a3b",
"main.dart.js_65.part.js": "4360e59ba9d67e46f18e46fdaffa3b8a",
"main.dart.js_140.part.js": "1c6ea802cd28bce6343cc2a26a44c1c1",
"main.dart.js_132.part.js": "1f387b9cb568048e783fc123cc9090f3",
"main.dart.js_17.part.js": "4b01c747034f1accdd6fd30d39963b85",
"main.dart.js_244.part.js": "bef7685d27d3a4b5bde2f9ad83109267",
"main.dart.js_88.part.js": "a4411c30f778f9d7364fde96cb016265",
"main.dart.js_98.part.js": "c60fab7747c706fe38cdb9958443190b",
"main.dart.js_31.part.js": "1045c84bda938eb885a6098179f856af",
"main.dart.js_21.part.js": "ac4c86f48acb16b5f0be1abfffa706f7",
"main.dart.js_114.part.js": "40f204f71891727534877f017df04257",
"main.dart.js_176.part.js": "196d02f7e65d9fef070634ffcebbaef5",
"main.dart.js_210.part.js": "4c0f648041a2543d9c33549a6ca5e5bb",
"main.dart.js_53.part.js": "c4907900c363df25454419c253e6c7c4",
"main.dart.js_200.part.js": "d9da023038013d8af5af62cf16a1bf9a",
"main.dart.js_192.part.js": "02ef3f320e00c3031bdd1440c65ae8df",
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
"main.dart.js_149.part.js": "d94fdda4041a7d4cac951e5506bcc1bc"};
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

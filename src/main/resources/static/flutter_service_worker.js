'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_197.part.js": "0bd9304d73b9a81512671b0b51c68fd6",
"flutter_bootstrap.js": "e9db9b1a40d897a6fda4ec7a4de5c710",
"main.dart.js_79.part.js": "7aaf354fa3b462a2917f6bb5690844c4",
"main.dart.js_101.part.js": "a5c0f9ce008951c2f1b42f56022d2106",
"main.dart.js_111.part.js": "c9d84b3344a7f2ca24592d88988863ca",
"main.dart.js_24.part.js": "db53a3a5619a7fa610e5d341ce4e522e",
"main.dart.js_34.part.js": "f548480de0d07c37e118f2d525060e6a",
"main.dart.js_205.part.js": "884bc50f25c09870b00349dd9ba6930e",
"main.dart.js_46.part.js": "57cb54069a05e52380b873da19c47fa1",
"main.dart.js_56.part.js": "35913ed862a6dd9fe72a93964ab2faa9",
"main.dart.js_173.part.js": "bdd0974fbc1c53cbb76edc3844817d48",
"main.dart.js_145.part.js": "eb7fbd11ddb46d27c7215e37ee53954b",
"version.json": "6e0cccf2574f3ac21385c0a76766947b",
"main.dart.js_7.part.js": "85ad59ce872eaa9f8e0e13ab53ac31f8",
"main.dart.js_60.part.js": "06c196f2844c8aa5b0bb11e16e6816b3",
"main.dart.js_70.part.js": "7242e52f9b928ccfec1e138731362793",
"main.dart.js_84.part.js": "821210aa252347f10b308178e527965c",
"main.dart.js_94.part.js": "571de919f3d4e51db0bf7dae00860444",
"main.dart.js_108.part.js": "e1ab2d354d10e312dfa628d8300c8a92",
"main.dart.js_71.part.js": "e647f40dd78652ba757a4d1208e5fcaf",
"main.dart.js_61.part.js": "6fdb1e6250f36eefd1bc0d7b192eca62",
"main.dart.js_6.part.js": "445a9010911a22d97ff956ea2bd58f1b",
"main.dart.js_222.part.js": "53d57bba3cab7af7f435b58b0a9efc62",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_13.part.js": "876d18aa8150813eebe0a49d6ab7dad8",
"main.dart.js_126.part.js": "3ec6415d86c601bc3fb3e1bd191360eb",
"main.dart.js_109.part.js": "313b5dc1b051286a29a243c7148fe347",
"main.dart.js_186.part.js": "9c2e9a7cb06f4fbbebb10f057f6789cb",
"main.dart.js_68.part.js": "6c329d9f36b685643f28f135b0f17e7b",
"main.dart.js_78.part.js": "6fc7d42765b8250ceff83039ecf8ef6d",
"main.dart.js_110.part.js": "8565a8d7e916c7613eb9ee9e7b5c2a4e",
"main.dart.js_100.part.js": "f064d9f11300255eccb55e1905904d9b",
"main.dart.js_35.part.js": "d8184bc2d46f69191599f71e3ae3c8cb",
"main.dart.js_25.part.js": "857b5873958587d31cd26dbd55abb3c4",
"main.dart.js_57.part.js": "35b453b6e89ccb526c49f982def91ca5",
"main.dart.js_172.part.js": "5cfbfccf56ef21c3b5225e3636f412aa",
"main.dart.js_162.part.js": "d9b2735a3b2d69f7e129024b6ec45f9b",
"main.dart.js_134.part.js": "ccea25fe1836fdccd085944992926e03",
"main.dart.js_63.part.js": "ec80272be5879957661bdb7b5e7965b4",
"main.dart.js_220.part.js": "2e53539dc7b69b082c10776a9c38f1d1",
"main.dart.js_4.part.js": "4a983b6fd4b8afb8e8298e90d170551b",
"main.dart.js_73.part.js": "d250ea938b99acde3baa93b073c60245",
"main.dart.js_146.part.js": "f0c29809b9a778acaa3e680308c5849c",
"main.dart.js_156.part.js": "b03785697a29fa2feaaf8da4295d00a5",
"main.dart.js": "e6c030e9dd39e82df28409b97c562a2a",
"main.dart.js_87.part.js": "8c8f4496048c50d1bfa25e602574c963",
"main.dart.js_97.part.js": "f437ea75d2028af5195a3c206a073793",
"main.dart.js_179.part.js": "3907366377c7dd04844019b688cf26fe",
"main.dart.js_169.part.js": "103c7ebaf78351f3ddce5b91ad8d78dc",
"main.dart.js_184.part.js": "875aa8a2ded89813af19d0ebde79ccad",
"main.dart.js_194.part.js": "0e3268931ba4eb3af776c44696479957",
"main.dart.js_160.part.js": "955a6a516365579d4d2d03c026fcbee5",
"main.dart.js_170.part.js": "6f5631768d0fabcb92b81c39033739b4",
"main.dart.js_45.part.js": "fe252321e034d71a735e108e61d5786c",
"main.dart.js_206.part.js": "e36b76dfc58df0a5c8833e9698d0cb22",
"main.dart.js_55.part.js": "fb6c420adb4c5386a75aed3b226d94a4",
"main.dart.js_216.part.js": "33ac831b66df80227a8e39d1f094d4e8",
"main.dart.js_37.part.js": "d1b8ba86652a62d27004d55fe255fe87",
"main.dart.js_102.part.js": "c9973ea73d5af459479a4f4a3991233b",
"main.dart.js_112.part.js": "ac0c4619ad5be29cd1e045addb8a9473",
"main.dart.js_19.part.js": "35cf1d10e52f288ef7394c9b0c17776a",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_195.part.js": "09b34867db77434a79b59adb94407c39",
"main.dart.js_185.part.js": "4452d847501321c7aa9df3d8cacf84c0",
"main.dart.js_171.part.js": "11c83b9ebf4149e4a01ac9a14d6ea6c1",
"main.dart.js_161.part.js": "dee41dd4167c8360d7bb5badcd4a0c43",
"main.dart.js_54.part.js": "8112e68ff4937aef7d099a82a169e805",
"main.dart.js_207.part.js": "69296567df079609bf5b5e7144c43df1",
"main.dart.js_26.part.js": "fced2d6375a0ac698620e9eb80f4fb9d",
"main.dart.js_103.part.js": "fbad2ee59276563fbf0700b685ea6949",
"main.dart.js_125.part.js": "1a95e81900243fb97f7e051c6784ece2",
"main.dart.js_221.part.js": "487d9b05dbecbcf66f426de2f8c3f958",
"main.dart.js_5.part.js": "4953aa50617f6058be57a86825487068",
"main.dart.js_62.part.js": "29f5e2ecb6d99007b296e97611909707",
"main.dart.js_147.part.js": "f88847a4201d62bc21d2ed3ab04ee7e2",
"main.dart.js_86.part.js": "4cfa7105c2bf14eef79cc5f5242999cf",
"main.dart.js_178.part.js": "73e39edb0b68e2b9ea0a0ea48f3d749a",
"main.dart.js_93.part.js": "de354ab307350e6b86684a1833d65077",
"main.dart.js_58.part.js": "c00d4739035b311ef2a42852283d0bac",
"main.dart.js_142.part.js": "5252def4d687c9eff629530ceb2cbaf1",
"main.dart.js_152.part.js": "1c1a2ce8469acdad5e4fddd93865b859",
"main.dart.js_224.part.js": "8c018a7a01035a608cd846ac9bdaf53a",
"main.dart.js_77.part.js": "22d8df8e356075ab44df2c04c50027cf",
"main.dart.js_41.part.js": "f3ab2d442114f376d125a6197c01db29",
"main.dart.js_212.part.js": "a6974e871e1096235cd190dcb09f77e9",
"main.dart.js_51.part.js": "4deb79b10e322d02325a2eeaddb4fb67",
"main.dart.js_164.part.js": "608953c3dd34f4a0ac73029c1f5d72d5",
"main.dart.js_106.part.js": "ae1f02c4a23b23db520635703e30a3b5",
"main.dart.js_116.part.js": "ae2699bcbc02262953a2de1203ee733d",
"main.dart.js_180.part.js": "591908d46a9825b6ec316d26d2a14089",
"main.dart.js_190.part.js": "f6840e0abcfb8c0e946c45289830bae1",
"main.dart.js_50.part.js": "652a24c98d96067953ba1a0f3a618ea4",
"main.dart.js_213.part.js": "003a2c75c8b52600262265a61166a34d",
"main.dart.js_40.part.js": "3a1daafe90a9d4fccd6de4989d226c75",
"main.dart.js_203.part.js": "4550e472840836fe38f81dfee3e6101b",
"main.dart.js_107.part.js": "2d5bea12cf3ce11d7cd9883157fb6919",
"main.dart.js_32.part.js": "ea66c37eb25a247285a2684b4fcb7b61",
"main.dart.js_8.part.js": "eb1afc4c5552fedbe0a8ab80cac5c239",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_181.part.js": "0bf7107646153bfe9f15c9efea8d93b4",
"main.dart.js_128.part.js": "9a9080401b5af906ecccdd0f869fbd9c",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "c974ac187a4d493be1062b79392a5033",
"main.dart.js_82.part.js": "5eb3cd2e37bc4e1a44c1a984341e0f5a",
"main.dart.js_59.part.js": "91f1db586d4ad88866e2b1846f5c6fcc",
"main.dart.js_188.part.js": "335a09f4cd717e72e6216e94d18e8058",
"main.dart.js_198.part.js": "174c78d1a1832137a9cd022869ba5e35",
"main.dart.js_153.part.js": "11fe9e130e1a962183235da5975bcc6a",
"main.dart.js_143.part.js": "c3f8c07f7ecc75223bfdb9c25286860c",
"main.dart.js_76.part.js": "92ef960c8a58084ea620fda7e609ed02",
"main.dart.js_66.part.js": "c5c9b380ffe814b197ed2298c2706929",
"main.dart.js_1.part.js": "db28c9aa1c9a0adf1b8fae2cbb3e34d9",
"main.dart.js_225.part.js": "7cc789efa9d5ee1e7a2f8efb8e619e47",
"main.dart.js_20.part.js": "d9b2369d795c6683f11c23cf73a92eba",
"main.dart.js_30.part.js": "f46e40d84cd2568c37b4740c89a3275b",
"main.dart.js_105.part.js": "1fb2a6db666d59bd953c57a27ae0d275",
"main.dart.js_115.part.js": "8156082ca9560e2d2fae3192faeccb83",
"main.dart.js_99.part.js": "6c1110a429e0e7e52978c4ee9fe30b14",
"main.dart.js_89.part.js": "d34537d34bb1fa69936caa1f4c96cd83",
"main.dart.js_167.part.js": "edb780d4b97d394b9064bb0bbb59caf5",
"main.dart.js_177.part.js": "f525e6e7e03a3981ec2e2c6bd3586413",
"main.dart.js_42.part.js": "70b7c95e897c3744e9e3f2cf3a68542f",
"main.dart.js_201.part.js": "f8f58b49066a66f00562a0842f25a13f",
"main.dart.js_52.part.js": "296b8b06f8f94d2075084a822da24235",
"main.dart.js_158.part.js": "480c0de3e146e182d78ce88fdf43abbf",
"main.dart.js_218.part.js": "d17d690a7f82abf7171b4a2742ffe71f",
"main.dart.js_39.part.js": "02b29a34b369686ff4c59ca02e70b002",
"main.dart.js_29.part.js": "4de2d84fec9146e45f775dd43819ad2b",
"main.dart.js_90.part.js": "c293b4c5b83adea5315b93d9d57551b0",
"main.dart.js_3.part.js": "f95d97ef3b461fcc5ed2366839c81f73",
"main.dart.js_74.part.js": "dced4cb4caf06463f4cabb82a8bce6be",
"main.dart.js_141.part.js": "54f0934679572b0a5baa09906599b141",
"main.dart.js_16.part.js": "3d0fd4a420fdf361ce722af30c84d5f3",
"assets/AssetManifest.json": "89da3a9b84b2f13b32f1f6d2fec424a0",
"assets/NOTICES": "75fccfb8ce1b024b61d30980c0120d4a",
"assets/FontManifest.json": "bed231d7b112623f57dc119fc603f653",
"assets/AssetManifest.bin.json": "adff589c8ccdc704ff041a4fec93ef7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "83dba932535e8676387292461be4e631",
"assets/fonts/boldface/AlimamaShuHeiTi-Bold.ttf": "9c8d7f88c39c3d90cd41ea9db70a9fa7",
"assets/fonts/circle/AlimamaFangYuanTiVF-Thin.ttf": "3be809e80815a8bc0feba3b241231c88",
"assets/fonts/MaterialIcons-Regular.otf": "45a9ce8d334f62be0e4ae2c52d9a5aaf",
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
"main.dart.js_209.part.js": "b547040e6770a0810a3c30830498740a",
"main.dart.js_219.part.js": "5fccd7ef1a9b15ca18d17d70f14cd659",
"main.dart.js_91.part.js": "efe1152f7b84d8a6976349480e67ad6e",
"main.dart.js_81.part.js": "46123b73e6f43e5085b087fd9473f7c8",
"main.dart.js_28.part.js": "fb64fb231c6b659c35eb3acb6bffc77a",
"main.dart.js_75.part.js": "e1f6968ac0c9d0c0dc73582536032b08",
"main.dart.js_226.part.js": "0b5e994a25d47530e3f6d80e755b010c",
"main.dart.js_150.part.js": "f430a1e62db12c8ed5cea2ff896c600c",
"main.dart.js_88.part.js": "a3fdbe2e1beb822d07909c40c9a757c9",
"main.dart.js_98.part.js": "d28bff7a1e8b75329c6f65747cdc97b8",
"main.dart.js_21.part.js": "a73d424d7c6f5d3d5b7cd416ec7bb2d1",
"main.dart.js_114.part.js": "138e5b3471497dfdd1d18e89e2dbaf55",
"main.dart.js_104.part.js": "4e85ada2ff48e5623128b78d517f9a56",
"main.dart.js_176.part.js": "8e8832a398139ea90d8fbe50090a687d",
"main.dart.js_166.part.js": "1b823fa29076f2647fa6a5cd3b116049",
"main.dart.js_210.part.js": "edf1839ff6310cd39618880ee7aa5b4e",
"main.dart.js_200.part.js": "aa35b17a64afd9dc86b4b93544c3faf7",
"main.dart.js_192.part.js": "5375bef89fb96fc9d0ac643be6050989",
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
"main.dart.js_149.part.js": "d2f6b25f8f5b3544b5c6b46557eac180"};
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

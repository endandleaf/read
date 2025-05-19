'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_197.part.js": "d3c14bb1919ce2cb55e4e9a90968f6e7",
"flutter_bootstrap.js": "02b69a4b49cd58888ad50b2c8dcaa43b",
"main.dart.js_79.part.js": "c42d95cf4c1023191c3c1dbb334933c0",
"main.dart.js_69.part.js": "b08e3ba87dc3d193e0aec743d355a44b",
"main.dart.js_101.part.js": "1f2657b8e877220433f0f877b3d61ae9",
"main.dart.js_111.part.js": "cc1d681f82b9604f7e67809c822fec81",
"main.dart.js_24.part.js": "85460304639d4a67342e9470c0596ddc",
"main.dart.js_205.part.js": "2a0bb78b7008701664576fb7b3dfa047",
"main.dart.js_46.part.js": "a29bc610ff4957dfbd3709bc6339597a",
"main.dart.js_56.part.js": "c9bab71d3ea26b414263b8eb125933c4",
"main.dart.js_163.part.js": "8768b666d93f11edbc157f503072e2b2",
"main.dart.js_173.part.js": "ef543037c14d991ea6699c73976ff190",
"main.dart.js_155.part.js": "4a269cf1ed06f51b545053a3a78d279c",
"version.json": "740cb7b200265515c7a403ab118eb740",
"main.dart.js_7.part.js": "6abaca37843f4e24e2f439bf6e648e2c",
"main.dart.js_70.part.js": "e91d1fef094f389b9ca076e63d8d1a53",
"main.dart.js_12.part.js": "9e639a081d27a30b018d949cab2cec65",
"main.dart.js_137.part.js": "7c8981aa5ea0c6a331b3fe76dd11bdca",
"main.dart.js_84.part.js": "b4288b896303bf8db6485a65c7e98d49",
"main.dart.js_108.part.js": "a639a68d12d00a3c9a29770c3d088d0e",
"main.dart.js_144.part.js": "47d9a7ad95b6b5e28be39064066c57d7",
"main.dart.js_71.part.js": "84ff6fab2fe2d64f1e7ad7f29985fc39",
"main.dart.js_61.part.js": "3f6a34d6625d764bf28a232157d8ce3f",
"main.dart.js_6.part.js": "9bbde0b48b859aab92ef4d931194ddc2",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_109.part.js": "051e801b8331000c357ba98fbb60f8e9",
"main.dart.js_85.part.js": "5761a4eab9ce18b4f85fe181fef05542",
"main.dart.js_186.part.js": "6a041ca17ab1cbb192cb664dfc8dc5fc",
"main.dart.js_68.part.js": "dbc5a77841a6f7f1eb8c7a6e31d54cba",
"main.dart.js_110.part.js": "847f3738907fd0844e4d4d9368ffe1c5",
"main.dart.js_100.part.js": "6729c05f96ffa27777840122ee9d1fba",
"main.dart.js_35.part.js": "309d7934f5ccf593360a090d33fcf179",
"main.dart.js_25.part.js": "74516680d34a0fd5c5068f0e5fbba1c1",
"main.dart.js_57.part.js": "effff6b5536f58ed7cde3b41ba86dd2d",
"main.dart.js_204.part.js": "f70cb2e248e0e473d2a95a297d7fcae3",
"main.dart.js_172.part.js": "baa8392d0b2041538118722fb91102c9",
"main.dart.js_124.part.js": "68e656010c10e9ba03f0756ddd72e2d4",
"main.dart.js_134.part.js": "d8dfb663989b9a8f42a0d277cc5c224a",
"main.dart.js_4.part.js": "e9cb22ebd6ee83bd708b8c3e140ef11d",
"main.dart.js_73.part.js": "cdbc89223cda8e00d6f9b45c9d16e079",
"main.dart.js_146.part.js": "4befdd9540265e678a5edb96dae73779",
"main.dart.js_156.part.js": "e52c43fc9cf40e4e03c2cac2e9ec7216",
"main.dart.js": "ba48bb08d49b535f5557180a7b60dd01",
"main.dart.js_87.part.js": "728b711c7408e02f6228d7278ab8b8a9",
"main.dart.js_97.part.js": "d3cf37cd1b387765aa650b2550022708",
"main.dart.js_169.part.js": "86cf7ce0a5a3dbb62ca0ece5d4a83b31",
"main.dart.js_194.part.js": "0259e7d5c76cc5d1ec03f5d706376239",
"main.dart.js_18.part.js": "b990aba26f2186579f7c393b40a90f3e",
"main.dart.js_45.part.js": "311b50174f5b75b4a3dabba441e6372a",
"main.dart.js_206.part.js": "9d765d9e833b02503a7d4dae3cc3c91e",
"main.dart.js_55.part.js": "8b60d685387ae806f7ed4135337da35e",
"main.dart.js_27.part.js": "0443bd1365484c201cc8b647bedce536",
"main.dart.js_37.part.js": "8d65748556acea7f4004fa5c2ca1ff04",
"main.dart.js_102.part.js": "fb57f1fdb51e0b3483a2d1a0d5d46b79",
"main.dart.js_19.part.js": "dc12944abca6710417b3d0b1068a305b",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_195.part.js": "311cf451587c4e5711e5503681f267ff",
"main.dart.js_185.part.js": "36b7a072c5d02b84a21102f6f9da666b",
"main.dart.js_54.part.js": "3d896d5ff9fcb6635d1045f692e05982",
"main.dart.js_207.part.js": "5b555b002bb66c6d0796d02d5d40e86c",
"main.dart.js_44.part.js": "48a8452d9328b7799969170f4e9a83cf",
"main.dart.js_26.part.js": "7ead54522faf730727a253ac097cef54",
"main.dart.js_103.part.js": "ef1eb1f71db82579c8da698b343410c7",
"main.dart.js_135.part.js": "373db075c341591e44b8d4fa182c7823",
"main.dart.js_72.part.js": "3464752ff63e7cb58c43b3abaa93e432",
"main.dart.js_5.part.js": "fc8132676e9179a470ef8b55ef603ef0",
"main.dart.js_62.part.js": "56e8df02e9df61e95b15b90f092382ce",
"main.dart.js_157.part.js": "89e88ef8e607372ef2204f33b3ea8e3e",
"main.dart.js_147.part.js": "472cbff7ee1e5c1a4633427c16137680",
"main.dart.js_96.part.js": "a35fe82b25ee173c93428dae5ced61ba",
"main.dart.js_168.part.js": "4cfb2814037016060d29453c2ec0c8ff",
"main.dart.js_178.part.js": "78cb413159a950275e961087956697ad",
"main.dart.js_83.part.js": "3133b2410a32792bf31e9786e48799de",
"main.dart.js_93.part.js": "eec98d5f803c00bd2fcd6f8803fdeaf7",
"main.dart.js_58.part.js": "c841d03a734bd65495515e0afed0f916",
"main.dart.js_48.part.js": "e1a01fc22dd48f84a603200bdaea336e",
"main.dart.js_15.part.js": "ea75e650c349787ee269fcee372a837b",
"main.dart.js_120.part.js": "aadeba6800b07dde8f0c3c84a829ff08",
"main.dart.js_130.part.js": "2e089c95ce0a2cedfe9eb28ea403df00",
"main.dart.js_189.part.js": "e62817a1092412c757cbf984b88761c7",
"main.dart.js_142.part.js": "6ed8c39f3b5123c402613f6d2c376f09",
"main.dart.js_152.part.js": "ba2e3eb1d969b1cf2eab8dbc5ced7922",
"main.dart.js_67.part.js": "43d00ba5d394f3cc62f6235b305b176d",
"main.dart.js_77.part.js": "816bb9c9b03f42dcdf786451a86a83ab",
"main.dart.js_212.part.js": "fbd24172e80abd83faaaa2cc3eaab749",
"main.dart.js_51.part.js": "5478b5352dcd28113e6351d8e14afc36",
"main.dart.js_164.part.js": "58ec7b998e56bc55e219058a1bc34c60",
"main.dart.js_174.part.js": "523a84fbc2dea0abbbaee02e8ce4da75",
"main.dart.js_106.part.js": "2a94e8faa4c372cce1856ed7976f2d5d",
"main.dart.js_23.part.js": "9669bf255e0830f7d0d325b2c8859044",
"main.dart.js_33.part.js": "75c99bbd1fb4ab9b694292d3757e79d0",
"main.dart.js_139.part.js": "0d7251ad121f9030885d6491af512cda",
"main.dart.js_180.part.js": "832d11dd9a111e90588ca17dfc4e9fff",
"main.dart.js_50.part.js": "55609471f1b8226af71b747809006295",
"main.dart.js_40.part.js": "2e9eb1432263ecbc727673613a90d31c",
"main.dart.js_203.part.js": "49383e669a7a20651ee4404d2745698d",
"main.dart.js_117.part.js": "47074599fad94c1c688f79f2bf670b91",
"main.dart.js_107.part.js": "7c1382d27373d6043f8016fecefa40a2",
"main.dart.js_32.part.js": "7ba6fb15797f415eb89e79ce25219f81",
"icons/Icon-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"main.dart.js_191.part.js": "b958b38f2a49dde05f0281eeabaa1733",
"main.dart.js_128.part.js": "802260687cfd1a2e7db65b1c9a1cef0d",
"main.dart.js_138.part.js": "706dea2022ebb6df374bd0c13265edb4",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "079d4ec8d18f0a405cd15d5232c2f470",
"main.dart.js_49.part.js": "5c03b41d195a393e980ab26ada6780e3",
"main.dart.js_188.part.js": "305bc4ecfc9c34287320eff0de47cb20",
"main.dart.js_198.part.js": "449b0996c3d559d4cc92e2159c9d545a",
"main.dart.js_131.part.js": "bf93d8819846cac753806b07e9370e82",
"main.dart.js_121.part.js": "37afb1e1a5e96a93fafab4319330929c",
"main.dart.js_153.part.js": "760e499af63cc93b7f356a3bd0629ecf",
"main.dart.js_76.part.js": "31337a449451d2e514b8a10fc5879ad6",
"main.dart.js_66.part.js": "159675797bdb8f87ee6850f4a87cdc0d",
"main.dart.js_1.part.js": "a9bd4f81d17147ad3b566a2967b934e6",
"main.dart.js_20.part.js": "28d55b376ac909c99d73a0a079119898",
"main.dart.js_30.part.js": "4d8791fb6552a2e6660678b8c4bff8fa",
"main.dart.js_105.part.js": "a37ba074466f24186b9768b7b4937f56",
"main.dart.js_99.part.js": "fdb74d2250cdc239108c09c1b5d794ee",
"main.dart.js_89.part.js": "8061642b48224e57a555144a3bf9276d",
"main.dart.js_167.part.js": "a65a63ef80fa69e14dd27c0b42b69f51",
"main.dart.js_201.part.js": "5b2105309ab9bd64890467de9599bc4d",
"main.dart.js_52.part.js": "656c0d82963da2687ff09931315e4991",
"main.dart.js_211.part.js": "61cc32a304a3688f886bb514126abe2b",
"main.dart.js_183.part.js": "52095c1be15b44597e55f29442ddfafc",
"main.dart.js_193.part.js": "4b00cc3430f6d1768fef638e14ac56ba",
"main.dart.js_158.part.js": "dc5ee8004402df61e920337647c07bff",
"main.dart.js_148.part.js": "29dcaa6af320ebc1f6af8e851526ea4a",
"main.dart.js_208.part.js": "5ff920cd33b6d1a0c6d679a96f218206",
"main.dart.js_39.part.js": "7fbecc1572be595112a339861458d280",
"main.dart.js_29.part.js": "db87f4e2c76b43bedcebf031d81ae94e",
"main.dart.js_80.part.js": "669d1344bf9813e78cfd87491a7baab4",
"main.dart.js_90.part.js": "7bd6ea3f369512c7a6d7de042e21a050",
"main.dart.js_64.part.js": "c18a83d4cc24435922c433ae6fd471d5",
"main.dart.js_3.part.js": "1e2274a44bceee25390a7268cc99cff9",
"assets/AssetManifest.json": "3eb09be2ac2ecbd14a6ea6229a1da724",
"assets/NOTICES": "c2405d025e3a6c7ce19f2d7686fd2b37",
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
"assets/fonts/MaterialIcons-Regular.otf": "00f18257a7d60a62be6befc46f7aad6e",
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
"main.dart.js_91.part.js": "33449635109acdc4f6283fa7e7aeb5ca",
"main.dart.js_81.part.js": "1de6f9ca5202801073da702281237ec4",
"main.dart.js_38.part.js": "a195330a4c3a3894d566b628681d0f33",
"main.dart.js_75.part.js": "a5318f893e6830abc1ca408b8a8cf26d",
"main.dart.js_65.part.js": "48e17afb5d2d78b08bcc81278e192fa4",
"main.dart.js_150.part.js": "8d8fb0635f29b6c861f19246d5239246",
"main.dart.js_132.part.js": "35f26a412393aecf07e55e076aa4e8c0",
"main.dart.js_98.part.js": "deb48be6254d2097a5d99719045473c6",
"main.dart.js_114.part.js": "46efc4517dae522403f7a40f455f6d44",
"main.dart.js_104.part.js": "c2371798f58b306d114677a94c4a943b",
"main.dart.js_176.part.js": "ef68ddcca40d4443cfcaa43c1f66ad93",
"main.dart.js_166.part.js": "6f12e37fbd5f92060592e9d064104e57",
"main.dart.js_210.part.js": "fc0def1549ff0cdea28ebf95f2bf81cd",
"main.dart.js_53.part.js": "fe99fb278001e1c120965f8e352c7264",
"main.dart.js_200.part.js": "e7ae93a4d49e8961b406f0ee6bcddbe9",
"main.dart.js_43.part.js": "706e2eedbe73c6c682cd9aa7fdb9d71c",
"main.dart.js_182.part.js": "a5a958ebe38d28af44c871836383828f",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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

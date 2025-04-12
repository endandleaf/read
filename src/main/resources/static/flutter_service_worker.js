'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_197.part.js": "aba9f65a51776c60f34b28565f6a29c9",
"flutter_bootstrap.js": "c447b45ed81eb1f70aa8ec57cac00c0b",
"main.dart.js_79.part.js": "d21bb3752ce6c45d0fb0d1b6d2a10774",
"main.dart.js_69.part.js": "f672005a637d6db7c2038b7d3c1b3b96",
"main.dart.js_101.part.js": "08b32920a73a10ce3670a26b8728bae9",
"main.dart.js_111.part.js": "72255cff842abcefba669079e9ddcf6d",
"main.dart.js_24.part.js": "4b08763dfa98c3324f8159c33f1dcf20",
"main.dart.js_34.part.js": "be227fbd440220f5bd1d1fc4bcce4fb3",
"main.dart.js_46.part.js": "350244477397a44fcfd8f8e0fadd5afe",
"main.dart.js_56.part.js": "dc50d66fb52ede3b006718d0a31ba260",
"main.dart.js_163.part.js": "cb2ce63938eb40460f160b854067034f",
"main.dart.js_173.part.js": "52f53b410064fc119fe8c161bfa415c4",
"main.dart.js_145.part.js": "03ef7e2744032f96c2eef016cf7ee7f1",
"main.dart.js_155.part.js": "9badca9b586076b6313e6d2d2d3a6d2f",
"version.json": "109e5bb28578f5816f38973249ebe1ca",
"main.dart.js_70.part.js": "2239391cb48815c8dac3064f4cb43f0a",
"main.dart.js_12.part.js": "7545346c4df4bb1031ce8cdb7348c224",
"main.dart.js_127.part.js": "2e93101094e5a803500b1bd105508146",
"main.dart.js_84.part.js": "338cb29667b6baf199b5f4eccf0f727e",
"main.dart.js_94.part.js": "f77747f9abc3cc662bc5af02da1254cd",
"main.dart.js_118.part.js": "757c100c521632a786bd862d225a6b27",
"main.dart.js_108.part.js": "81e0ba3948c217a7bbacc16f1e2f5a48",
"main.dart.js_154.part.js": "3fe6472eb382064e353ccdbe3aeb2b9f",
"main.dart.js_71.part.js": "928b5c1ae6ca089603c94e2221c613c2",
"main.dart.js_61.part.js": "0ab652db51ebbdf33d76cb977c25157a",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_13.part.js": "8b3fdeb57d29a919a44f29a102c9e43c",
"main.dart.js_136.part.js": "6dbb5f17f7ca1c535ea1e102ff43a7e5",
"main.dart.js_126.part.js": "35c9869fa1a6c461b040d189ace95733",
"main.dart.js_109.part.js": "adadfe2f1a84599340d3f7e55c85f33e",
"main.dart.js_119.part.js": "92197701ef7cccc1bf41f520e94a8679",
"main.dart.js_95.part.js": "e7748a0b63d387202ddb64b2cc3e8ccf",
"main.dart.js_85.part.js": "ad8872675611ee656fa2b06aeb1fe485",
"main.dart.js_196.part.js": "c518a1d82a8a0b8850fac000575362f0",
"main.dart.js_186.part.js": "51c642606fa95f59468136599ead68fc",
"main.dart.js_68.part.js": "55581431efbf8d64114824a58ec7f628",
"main.dart.js_78.part.js": "28387ffe45f865c9bb5b9475a4455634",
"main.dart.js_110.part.js": "29b181b9c66c9a36c94a97ed41219842",
"main.dart.js_100.part.js": "030f8ce52e664a459aeb299eedae7401",
"main.dart.js_35.part.js": "91862f2952901edb13e518c236b83d9d",
"main.dart.js_25.part.js": "34cf94ba8267ed843d2237837fd748b2",
"main.dart.js_57.part.js": "5a1ae5b34eae35043202f3a09c30c838",
"main.dart.js_47.part.js": "b94d6bfb63873b6c7a717cdf27c74e35",
"main.dart.js_204.part.js": "0d3fb5edf7bc3380a9a9b285d75f562d",
"main.dart.js_172.part.js": "4b81d4d7ae1f92f2bf36ec1ec27671d9",
"main.dart.js_162.part.js": "d0dbe13272cb6adc3b7332ca98cf13b6",
"main.dart.js_124.part.js": "5c704942b93a378cff5b984d61f1ca6b",
"main.dart.js_134.part.js": "f62c530b302434c3bbb24b1c76dfecea",
"main.dart.js_63.part.js": "37757316d17f83a23764c085fa15ba8e",
"main.dart.js_4.part.js": "1202de772dffd22d32d735df78dceda8",
"main.dart.js_73.part.js": "ee3ef6dd5cf403cf8eaae250ba576a1a",
"main.dart.js_146.part.js": "7b6e2092ab0c89c25a86153b4c946c16",
"main.dart.js_156.part.js": "70d6c3d2d671ed28c3788f25636f38fd",
"main.dart.js": "743e762936480169abb936effabbac4b",
"main.dart.js_87.part.js": "0ef5a525e0ef415855decd12397bca19",
"main.dart.js_97.part.js": "6e1895a81eaaff3b5fe729cc69bc10d5",
"main.dart.js_179.part.js": "01144d81fc2146f34ec92556035c7341",
"main.dart.js_169.part.js": "607819086ec69682a236d9343e5124c3",
"main.dart.js_184.part.js": "bd182484420b667456219f931cd00ca2",
"main.dart.js_194.part.js": "2db07d71304f88b23ffeb720f2f7ddd0",
"main.dart.js_18.part.js": "be8c8413de18753ea74bba38fce93f13",
"main.dart.js_170.part.js": "982de74a294ca2ed234eb41555c4e9f6",
"main.dart.js_45.part.js": "a5af5725775052a8afdca566cd5e6fd4",
"main.dart.js_55.part.js": "bbb98c4058566f92eda2dcde1ca9fb6f",
"main.dart.js_27.part.js": "80b986c2817f6fa255a7ff299b444a1d",
"main.dart.js_37.part.js": "44cb2ffd940b09beece718bb8ea8d5af",
"main.dart.js_102.part.js": "c33bfc157449177b3426ca4bcdf4ad05",
"main.dart.js_112.part.js": "c460786e91d784aec6d710c78ffda9cf",
"main.dart.js_19.part.js": "1dec6b2da5dd3fc3c04cfe7138f91408",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_195.part.js": "28e0aac4dc3067ae48ee4f41af8d7035",
"main.dart.js_185.part.js": "bc657c863752fb1f8412a6e1df1bbfc7",
"main.dart.js_171.part.js": "fa8bf0a907f09da01b45073d1a4d24a2",
"main.dart.js_44.part.js": "185268cc2e05d151fe2e5b5f5d2f3c3e",
"main.dart.js_36.part.js": "5617a4ba1eae339f489ceaed395baf88",
"main.dart.js_26.part.js": "ebdfc766f814de335dc1933ab55bba3d",
"main.dart.js_113.part.js": "d14b924dd2cccee915a86899eebde6a6",
"main.dart.js_103.part.js": "4f967239d56b7615f6bdb5f951c3878c",
"main.dart.js_135.part.js": "e6c2b08d4fa6dec3ac69ce6438ff43ae",
"main.dart.js_125.part.js": "9e04730ddf0fc622421878cab39e5b6e",
"main.dart.js_10.part.js": "1009e4ec83947561d5d8e5d0d94c264e",
"main.dart.js_72.part.js": "e72223533c3ab8baec68bfb6a7cc9c1a",
"main.dart.js_5.part.js": "960e5f66229b4dfd094a26e3b15f6ced",
"main.dart.js_62.part.js": "dfae367ed08f7606270dc8b37cb6ad1b",
"main.dart.js_157.part.js": "e5df91ecc7e5fc70d6552ab40f103ba0",
"main.dart.js_147.part.js": "5e5b161a6472558230533c5ee4230b87",
"main.dart.js_96.part.js": "90809b9400e92b61a76e5c56f2751032",
"main.dart.js_86.part.js": "4737e89d77d8bdfded2de5f45002fb91",
"main.dart.js_83.part.js": "3d9be066ed4ff33e57755bbf8432cc0f",
"main.dart.js_93.part.js": "34d2766f07f0a3be24c6d1013afeb35a",
"main.dart.js_58.part.js": "15dc213acfb5c768d33a5ae303195d3a",
"main.dart.js_48.part.js": "59777b4dc50c182911126355c58a464a",
"main.dart.js_15.part.js": "6669e6aac2bfe629d165efe4e9985617",
"main.dart.js_120.part.js": "b12ee88c0feb6bc7695c6a4c1f9c104d",
"main.dart.js_130.part.js": "ae73911c62822c353c9972eb3b191595",
"main.dart.js_199.part.js": "e620a5be60a294e65aa3f5dbdd445912",
"main.dart.js_189.part.js": "e3bc238c8110900c9fccfae4f2948572",
"main.dart.js_142.part.js": "87c13367e2d3c23d205d869c27c794c9",
"main.dart.js_152.part.js": "72c672d7eaa781694a0d53582c739138",
"main.dart.js_67.part.js": "9ad488d05efab6f7acb4a23faa70410b",
"main.dart.js_77.part.js": "dcdd165eaa7df0791dbdf36bf6c29ece",
"main.dart.js_202.part.js": "64aca427d856cc93948e5f364f5c9798",
"main.dart.js_41.part.js": "6560178924b162d089a6b9325176a04e",
"main.dart.js_51.part.js": "e0757562fcdef17949044dc053933c6d",
"main.dart.js_164.part.js": "9a4653c0261a8055886393755d699dcc",
"main.dart.js_106.part.js": "e1878ede842a81c68541b407f0e0cc45",
"main.dart.js_116.part.js": "82ba180d1f167a8306394f1d2afec923",
"main.dart.js_23.part.js": "dd6f9e573c7a5124f0f4917e9846750e",
"main.dart.js_33.part.js": "9ff0233a894632d7f0362b0a2c8f8c4c",
"main.dart.js_9.part.js": "dabd9d45ecb8668a436ba1792122e82a",
"main.dart.js_129.part.js": "4a8973f341fc8db176e18bc92319ca65",
"main.dart.js_180.part.js": "ae4c6b1f8f1ebcac03fadc2d117863fe",
"main.dart.js_190.part.js": "d3dcce11a3aa79e3ff59413bb58b1ff7",
"main.dart.js_50.part.js": "c6770f55f1cf52061e15785ca886ddbe",
"main.dart.js_40.part.js": "74a234ca4b76078d94445562f83b5853",
"main.dart.js_203.part.js": "0e3a142b7258a152c1eb8c819f5c3f53",
"main.dart.js_165.part.js": "efdffa4b4d618d2c44f96111687c0629",
"main.dart.js_117.part.js": "9f362304fbcf09519c7cdea2cb828491",
"main.dart.js_107.part.js": "5c4eaf05cf05befe974ad2e5d07936a1",
"main.dart.js_32.part.js": "ec65a464c9f30ac5a822c1241c6d2057",
"main.dart.js_22.part.js": "c1834a9ccb7441a63406bb1d54405996",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_191.part.js": "036e34623fb5370d6a1580b711ae64a4",
"main.dart.js_181.part.js": "62acd8267dd6576f6435e7f485f99337",
"main.dart.js_128.part.js": "cec9e33792e227a9d41eb10b5e94bb95",
"main.dart.js_138.part.js": "13249ac13930ad89862c55ef958a8312",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "3afd0c8d73fb9d5b07adec88e31c790c",
"main.dart.js_82.part.js": "41efc72f654c0c96ec5ba047f321b6ea",
"main.dart.js_49.part.js": "16de6d3868e67e1a15f1f1a7c07fbbbe",
"main.dart.js_59.part.js": "bc9a5f14f3511b50fd5ae9b937411ace",
"main.dart.js_188.part.js": "9f8ecaf9fe6b6305289cad344e07615f",
"main.dart.js_198.part.js": "f65713fc927dfa475c8fb3c9b7c1dbcc",
"main.dart.js_14.part.js": "e65bd979a97fdba8b8398f851d4a735c",
"main.dart.js_131.part.js": "f06ac2fc721646946e0a91681c183e61",
"main.dart.js_121.part.js": "88977d523e43931c70c5f437d66bacc1",
"main.dart.js_153.part.js": "9cbcb78b22508896b28275ce581c292a",
"main.dart.js_143.part.js": "706941bb2401cc390029be884ce3b16e",
"main.dart.js_76.part.js": "0d926907da92896537ace8f73d282774",
"main.dart.js_66.part.js": "495167587080ef5757a5ec0d51aa857c",
"main.dart.js_1.part.js": "6f26e67bd0e3346ddec99fffa082b66c",
"main.dart.js_20.part.js": "feb6d54fc00027208ecac889add41328",
"main.dart.js_30.part.js": "ab65cca68dda418a38cc19e027527e9d",
"main.dart.js_105.part.js": "715b6ca1a87988addb18635574202cb4",
"main.dart.js_115.part.js": "8a5c3e6ba2ba651ac882e94e58c885de",
"main.dart.js_99.part.js": "0f12938f0ac4f7bc5f7d5875e4b26d08",
"main.dart.js_89.part.js": "16faa5d8effc6a2f58094f0cd4c8df3b",
"main.dart.js_177.part.js": "1fcfaaebea1d8bbf475be2e733410db7",
"main.dart.js_42.part.js": "085dd7d7d0b701f9a18ad32322927171",
"main.dart.js_201.part.js": "d5367074ee073e6ce19bd9b00ac32d9d",
"main.dart.js_52.part.js": "faa918e33a0e0cf823f572be6a19bf31",
"main.dart.js_183.part.js": "1b8001f7f86273e7fdd9cedfe72ee2ef",
"main.dart.js_193.part.js": "e4654c066c5d598d626a36ce9ebb8d0f",
"main.dart.js_158.part.js": "a35601bd8dd795ef035fff5a6cec866a",
"main.dart.js_148.part.js": "4dd886e44ee6caae36cec3e5fa812bde",
"main.dart.js_39.part.js": "74904d7584b6851097e093ef0685c23e",
"main.dart.js_29.part.js": "702cc696c32dc3491af8723bcfcb546e",
"main.dart.js_80.part.js": "95eb36f63735c5556af9ab125792a865",
"main.dart.js_64.part.js": "00aeb13cefe3aaadb4546306b6da6073",
"main.dart.js_3.part.js": "1983185a940a5ee3002b47274ca1c05e",
"main.dart.js_74.part.js": "58f7e4355c2e2c346079b0979c243d54",
"main.dart.js_141.part.js": "083831eedfe4d74349e97716cd6ec193",
"main.dart.js_151.part.js": "c5ed35cb7c03ea8ad3384d9df369511d",
"main.dart.js_123.part.js": "7653f6b273c67cd2b592421b28e98e7a",
"main.dart.js_16.part.js": "f4352829992c8d0c0c0806371017f97a",
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
"assets/fonts/MaterialIcons-Regular.otf": "2350e96d11d44e1491cd1762721bd492",
"assets/assets/images/no_cover.jpeg": "7e48f3134478ff6a02bdaae12702e698",
"assets/assets/images/fq.png": "6e5136dee28ad0cb3a351ed047fac21c",
"assets/assets/images/splash.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/logo.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/qq.png": "491c32aad179267434096dc7f2b16214",
"assets/assets/images/qd.png": "7a81e826d519521b044abcf143a4bbcc",
"assets/assets/images/default_avatar.jpeg": "3cfd6cec07546522179cab14e9375c10",
"main.dart.js_81.part.js": "fb9b63eb4821881bbe3153453a3362d7",
"main.dart.js_28.part.js": "31e2a2348c88757badcd50646681ea86",
"main.dart.js_38.part.js": "49ed934236498260ffb99f0bb3f6a461",
"main.dart.js_75.part.js": "02f1913441c64fe82b8ed188dffbb444",
"main.dart.js_2.part.js": "396b79f54f6fbfb3c583c8357b657f8d",
"main.dart.js_65.part.js": "bd62d6741e0b3f99dee01b3999843abd",
"main.dart.js_150.part.js": "b89a77812950477665372de53982ac64",
"main.dart.js_140.part.js": "365c0b97a68ab0958627da664ec7e497",
"main.dart.js_132.part.js": "fab931cc51ad97f19978c7e31f4be794",
"main.dart.js_122.part.js": "f531d120e7f4bfeae7d9436e6a1d49b3",
"main.dart.js_17.part.js": "15ae597b0e92242a5e17277e95be76f7",
"main.dart.js_98.part.js": "8275eabd4a247fe608051181ec9f484e",
"main.dart.js_31.part.js": "8910793d798f57ad284d764d74ed120b",
"main.dart.js_21.part.js": "d34020a6227f7ae98e78aaf83a216b84",
"main.dart.js_114.part.js": "1d543f64e2eb98e7c4162eff5a3e7aa1",
"main.dart.js_104.part.js": "152a2b3f145f92d198786282eb1415ad",
"main.dart.js_176.part.js": "91836e36ec4090d9a03bb309dc7c34c5",
"main.dart.js_166.part.js": "ba093fe8e0bfcc7c4858d7dfed041e2d",
"main.dart.js_53.part.js": "511e5c570828056d3e6fdd197d8d4751",
"main.dart.js_43.part.js": "986230f09fc59db34c69d9d15647fa35",
"main.dart.js_192.part.js": "eb8547c8a83ec5cd981d112e028ea405",
"main.dart.js_182.part.js": "5d460e92a06896812abbf1c4fac526c6",
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
"main.dart.js_149.part.js": "5a3f87cbce380a3b3b2de078c199e69d",
"main.dart.js_159.part.js": "f5f8f61c89d7c0cb8054643f5742341d"};
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

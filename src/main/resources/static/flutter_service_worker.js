'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_197.part.js": "aba9f65a51776c60f34b28565f6a29c9",
"flutter_bootstrap.js": "9e834b760e2ecb90c892c93b0154d12e",
"main.dart.js_79.part.js": "972bce72f778f7c6900b0d93ebc2c7af",
"main.dart.js_69.part.js": "0f8d039d4c0b3fa72aec23683e1b748a",
"main.dart.js_101.part.js": "08b32920a73a10ce3670a26b8728bae9",
"main.dart.js_111.part.js": "652118e217d1d9b0fbc18e020d315bb7",
"main.dart.js_24.part.js": "1b6f00a035e631d107871a89deafa154",
"main.dart.js_34.part.js": "be227fbd440220f5bd1d1fc4bcce4fb3",
"main.dart.js_46.part.js": "350244477397a44fcfd8f8e0fadd5afe",
"main.dart.js_56.part.js": "ae8f552c01a5a3aaa337ad60b9d4c624",
"main.dart.js_163.part.js": "cb2ce63938eb40460f160b854067034f",
"main.dart.js_173.part.js": "82aaddd0b3fb26166cf3fcc754caf182",
"main.dart.js_145.part.js": "03ef7e2744032f96c2eef016cf7ee7f1",
"main.dart.js_155.part.js": "9badca9b586076b6313e6d2d2d3a6d2f",
"version.json": "7ec59a5f2615b2c9ea1b4035582ccfb8",
"main.dart.js_70.part.js": "2239391cb48815c8dac3064f4cb43f0a",
"main.dart.js_12.part.js": "7545346c4df4bb1031ce8cdb7348c224",
"main.dart.js_127.part.js": "3d3a244a5e2d9630cd6fd190393f2f1f",
"main.dart.js_84.part.js": "204684c09ef6c99ed09d09b29bdb99e3",
"main.dart.js_94.part.js": "f77747f9abc3cc662bc5af02da1254cd",
"main.dart.js_118.part.js": "757c100c521632a786bd862d225a6b27",
"main.dart.js_108.part.js": "71a217911ea5ba74e7f5afca32f89262",
"main.dart.js_154.part.js": "3fe6472eb382064e353ccdbe3aeb2b9f",
"main.dart.js_71.part.js": "4c96909cd764e507bff17a9db64f010c",
"main.dart.js_61.part.js": "0ab652db51ebbdf33d76cb977c25157a",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_13.part.js": "8b3fdeb57d29a919a44f29a102c9e43c",
"main.dart.js_136.part.js": "6dbb5f17f7ca1c535ea1e102ff43a7e5",
"main.dart.js_126.part.js": "8abc7f33c92ded0c05f04ef47e543559",
"main.dart.js_109.part.js": "adadfe2f1a84599340d3f7e55c85f33e",
"main.dart.js_119.part.js": "92197701ef7cccc1bf41f520e94a8679",
"main.dart.js_95.part.js": "ad5d8474b3add98a3662f3c0ca7c28e2",
"main.dart.js_85.part.js": "b9462ee6e5fdf39680cda75929984c8e",
"main.dart.js_196.part.js": "e9d6bf10e3ae36564e5225a64db3eb01",
"main.dart.js_186.part.js": "fdb0237d309c30888bb14ae228d0fccd",
"main.dart.js_68.part.js": "48e52adc1c23e59824e6640ed955bc80",
"main.dart.js_78.part.js": "5af15c1361ff7f9b270dc1b9098c1ca3",
"main.dart.js_110.part.js": "5297ffc58ffc5b71d00e74ef824b122f",
"main.dart.js_100.part.js": "29fa601621f01931d81b33264eff5d48",
"main.dart.js_35.part.js": "91862f2952901edb13e518c236b83d9d",
"main.dart.js_25.part.js": "4174c64561f201703b7a2f617e351d5b",
"main.dart.js_57.part.js": "9c391c8b49caf2f030f76d0f29da4ed8",
"main.dart.js_47.part.js": "23547f96ee3ce1e0c9baf62fafbd539c",
"main.dart.js_204.part.js": "cb6136c05cff20c877b690c640b3ddd8",
"main.dart.js_172.part.js": "e2088bfbb577cb8a4d4420d05b131f48",
"main.dart.js_162.part.js": "298505bd5701f7f05f52986ac1d8b862",
"main.dart.js_124.part.js": "87c069dc381368e3a450769f4ff824dd",
"main.dart.js_134.part.js": "8b939bc7cd882243689ef9372198d339",
"main.dart.js_63.part.js": "f1e672394267be3bc6e19f89d1fc89d7",
"main.dart.js_4.part.js": "1202de772dffd22d32d735df78dceda8",
"main.dart.js_73.part.js": "ee3ef6dd5cf403cf8eaae250ba576a1a",
"main.dart.js_146.part.js": "7b6e2092ab0c89c25a86153b4c946c16",
"main.dart.js_156.part.js": "29d1e9c7417a8b24b40435c78810ba43",
"main.dart.js": "5d9ebe91b964e5f638b2ef384628f17d",
"main.dart.js_87.part.js": "c93050a6eb7d6fb0c3216336ea3dce15",
"main.dart.js_97.part.js": "6e1895a81eaaff3b5fe729cc69bc10d5",
"main.dart.js_179.part.js": "1bb66a109a70937c90e9ed7bc4bb98f5",
"main.dart.js_169.part.js": "607819086ec69682a236d9343e5124c3",
"main.dart.js_184.part.js": "647d3028990b2d9f59815a7de4f7bcc1",
"main.dart.js_194.part.js": "2db07d71304f88b23ffeb720f2f7ddd0",
"main.dart.js_18.part.js": "be8c8413de18753ea74bba38fce93f13",
"main.dart.js_170.part.js": "39e33f2aa22b5ff29f0ecea7849ab9fb",
"main.dart.js_45.part.js": "53f7384dd9c9dea85ccf012dc90014db",
"main.dart.js_55.part.js": "bbb98c4058566f92eda2dcde1ca9fb6f",
"main.dart.js_27.part.js": "c820ccca896db87fdc6baba5ac698b25",
"main.dart.js_37.part.js": "9fcc142bd96920cab9b9e9aa29e4fb56",
"main.dart.js_102.part.js": "c33bfc157449177b3426ca4bcdf4ad05",
"main.dart.js_112.part.js": "c947d6fd1f3519b6224b714bbd63f84a",
"main.dart.js_19.part.js": "1dec6b2da5dd3fc3c04cfe7138f91408",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_195.part.js": "28e0aac4dc3067ae48ee4f41af8d7035",
"main.dart.js_185.part.js": "bc657c863752fb1f8412a6e1df1bbfc7",
"main.dart.js_171.part.js": "e2993bd75bc97e532443efb4b037d771",
"main.dart.js_44.part.js": "4a69451006e7cbe21e35e6e81bb895ee",
"main.dart.js_36.part.js": "13fe0ec68c1302ccf885bbee757e4929",
"main.dart.js_26.part.js": "b4c937a904f00a6c6e8d933e7a5c84cb",
"main.dart.js_113.part.js": "d14b924dd2cccee915a86899eebde6a6",
"main.dart.js_103.part.js": "def52c4030b301936e3685901b2736dd",
"main.dart.js_135.part.js": "e6c2b08d4fa6dec3ac69ce6438ff43ae",
"main.dart.js_125.part.js": "21674028b25f4ece79562e199acca09d",
"main.dart.js_10.part.js": "53dc7c2302b06cf45a0dedcd180a4318",
"main.dart.js_72.part.js": "52dde52df6b2a24fe5dbee01bfb66916",
"main.dart.js_5.part.js": "75a41777077b066b2b59d10807d3b3e2",
"main.dart.js_62.part.js": "dfae367ed08f7606270dc8b37cb6ad1b",
"main.dart.js_157.part.js": "e5df91ecc7e5fc70d6552ab40f103ba0",
"main.dart.js_147.part.js": "246ce61756ec8857636bf529a5b3426b",
"main.dart.js_96.part.js": "2d8822e57fb8a072ae393d65e2abf62e",
"main.dart.js_86.part.js": "4737e89d77d8bdfded2de5f45002fb91",
"main.dart.js_83.part.js": "65b7f69d88d1c3f06e9dd964359fb699",
"main.dart.js_93.part.js": "34d2766f07f0a3be24c6d1013afeb35a",
"main.dart.js_58.part.js": "8433c28029c4ef3b79239ae8c975b6b1",
"main.dart.js_48.part.js": "4a15b42d9985d8db94103447e86de9c3",
"main.dart.js_15.part.js": "3c1095520c748061443053ec094bfcd8",
"main.dart.js_120.part.js": "13a9db64189433f3b2844238c8ee9738",
"main.dart.js_130.part.js": "5015b78c540e3c0fae4381ac0afe036f",
"main.dart.js_199.part.js": "ca3e5d4bc92d99a968eb041d1a54201f",
"main.dart.js_189.part.js": "36f3b615b2e221dbd53532bc9e3aae1c",
"main.dart.js_142.part.js": "87c13367e2d3c23d205d869c27c794c9",
"main.dart.js_152.part.js": "1fb2d97a026971cd93c45b94e82c0b15",
"main.dart.js_67.part.js": "461859ba764897029420b1ee37325246",
"main.dart.js_77.part.js": "dcdd165eaa7df0791dbdf36bf6c29ece",
"main.dart.js_202.part.js": "b355825edfee892a764259d95b55dd89",
"main.dart.js_41.part.js": "ed6bd48b81f72b9fd7ecd575b5898a1c",
"main.dart.js_51.part.js": "fce762443625d0233d7c621e9d7fc389",
"main.dart.js_164.part.js": "9a4653c0261a8055886393755d699dcc",
"main.dart.js_106.part.js": "e1878ede842a81c68541b407f0e0cc45",
"main.dart.js_116.part.js": "dcc32e812ffc2ad7a594db8ff837f226",
"main.dart.js_23.part.js": "dd6f9e573c7a5124f0f4917e9846750e",
"main.dart.js_33.part.js": "f4d04b00d832da9bef2a48b3d35d354c",
"main.dart.js_9.part.js": "bf8e7bcf992ee157f067031dda2b893d",
"main.dart.js_129.part.js": "af8c1f370f14055bf209e8a9bbc850c2",
"main.dart.js_180.part.js": "f967653271373b85cd28ba39b5b7d6b9",
"main.dart.js_190.part.js": "32e72c692350323e2ab134f2dbb22d2d",
"main.dart.js_50.part.js": "c6770f55f1cf52061e15785ca886ddbe",
"main.dart.js_40.part.js": "de53b1c073eed16601a1deae5998b213",
"main.dart.js_203.part.js": "0e3a142b7258a152c1eb8c819f5c3f53",
"main.dart.js_165.part.js": "efdffa4b4d618d2c44f96111687c0629",
"main.dart.js_117.part.js": "c105a3f7a4e583bb1d706e1690aa9ef1",
"main.dart.js_107.part.js": "de1cd9235221b3a3ec91ba33fdc1c1c2",
"main.dart.js_32.part.js": "86bdb6e825dadd994111951a58991b4b",
"main.dart.js_22.part.js": "69fc5945796722fcc1827a9637d2be74",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_191.part.js": "b94ba4cb72d1cbc7135da04468f339d2",
"main.dart.js_181.part.js": "62acd8267dd6576f6435e7f485f99337",
"main.dart.js_128.part.js": "cec9e33792e227a9d41eb10b5e94bb95",
"main.dart.js_138.part.js": "13249ac13930ad89862c55ef958a8312",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "3afd0c8d73fb9d5b07adec88e31c790c",
"main.dart.js_82.part.js": "41efc72f654c0c96ec5ba047f321b6ea",
"main.dart.js_49.part.js": "16de6d3868e67e1a15f1f1a7c07fbbbe",
"main.dart.js_59.part.js": "53310221cd92d29471f97384d8ba6b7e",
"main.dart.js_188.part.js": "d0d84e4d31aff705e707c72a845e7ab3",
"main.dart.js_198.part.js": "87730f49b7127e479c65e2ee783de165",
"main.dart.js_14.part.js": "a7275e19f156a1d2c7b3e78b85438244",
"main.dart.js_131.part.js": "f117fa179a12d92a075d2c8ecf243627",
"main.dart.js_121.part.js": "1d3ea66b49ec69dd94fd1a7ca1ae458e",
"main.dart.js_153.part.js": "aca285762168da98551e85f5ed996da7",
"main.dart.js_143.part.js": "1122232d3a69e863dd4f818b52a4fdee",
"main.dart.js_76.part.js": "45b7b449d6fd7e474ebb0713846e19d9",
"main.dart.js_66.part.js": "be42c60b77066a3564d3c91dd12e2265",
"main.dart.js_1.part.js": "a78910cda1e226c45b9c9fc632ff321c",
"main.dart.js_20.part.js": "703a57f83fbb4390f30170f631b52805",
"main.dart.js_30.part.js": "82e7107b0b07c57e5e30e3321ecefdf2",
"main.dart.js_105.part.js": "f24ec11978fed40c7f4cb61afd0a66c4",
"main.dart.js_115.part.js": "103422a306f9ae3374b467dc684afe6b",
"main.dart.js_99.part.js": "3a58af62c3a3735d04a6694241c697e3",
"main.dart.js_89.part.js": "16faa5d8effc6a2f58094f0cd4c8df3b",
"main.dart.js_177.part.js": "f22c062bd5c51d9caa886f127db1c92a",
"main.dart.js_42.part.js": "2da4d6ea077b18a660a7bbb38f57a68a",
"main.dart.js_201.part.js": "765e6e9c929a30851fed3ad0f9434b69",
"main.dart.js_52.part.js": "900870739b1e6ed6fb90d384433562bd",
"main.dart.js_183.part.js": "8f5ac903bbddbd09a34df935d44a2859",
"main.dart.js_193.part.js": "e4654c066c5d598d626a36ce9ebb8d0f",
"main.dart.js_158.part.js": "a35601bd8dd795ef035fff5a6cec866a",
"main.dart.js_148.part.js": "d4c3a92d4803a6e9006d7caa9dcb6c68",
"main.dart.js_39.part.js": "74904d7584b6851097e093ef0685c23e",
"main.dart.js_29.part.js": "6db9d3f993cb7fa5ce107f21ebaf9baa",
"main.dart.js_80.part.js": "95eb36f63735c5556af9ab125792a865",
"main.dart.js_64.part.js": "00aeb13cefe3aaadb4546306b6da6073",
"main.dart.js_3.part.js": "b3272e4583561530f261987617359278",
"main.dart.js_74.part.js": "5711cdf0e6daf3cf679e32ebca655796",
"main.dart.js_141.part.js": "d63a1b3e96347acdb1b0b5a8fd16b589",
"main.dart.js_151.part.js": "c5ed35cb7c03ea8ad3384d9df369511d",
"main.dart.js_123.part.js": "b505a46e88a724f08a64f4d552e5d62b",
"main.dart.js_16.part.js": "fa0481a219a0e6bc76558297ba32ccba",
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
"main.dart.js_81.part.js": "e7f4cba92f682163427033fdcf312df1",
"main.dart.js_28.part.js": "428c2b0753543ea86e7c3b7bcd698347",
"main.dart.js_38.part.js": "49ed934236498260ffb99f0bb3f6a461",
"main.dart.js_75.part.js": "54222ca646bab618effaf6c96865d15d",
"main.dart.js_2.part.js": "ac1594604809faa92d84688736a5bea6",
"main.dart.js_65.part.js": "f7c5f3aaf030e6b8a37233dad931ea93",
"main.dart.js_150.part.js": "b89a77812950477665372de53982ac64",
"main.dart.js_140.part.js": "84450f43e88d45db33ca4d463956d97f",
"main.dart.js_132.part.js": "3d035958c694893974d62e6bb360c061",
"main.dart.js_122.part.js": "f51a7b7c3333c24131b9d57a1219bb18",
"main.dart.js_17.part.js": "15ae597b0e92242a5e17277e95be76f7",
"main.dart.js_98.part.js": "ca7effa00bdf94fa6ad18d1006306dba",
"main.dart.js_31.part.js": "9345e1b0e189104c16ce0550add792c1",
"main.dart.js_21.part.js": "6863f1d9b3c50c198bab6409f583ba8f",
"main.dart.js_114.part.js": "1d543f64e2eb98e7c4162eff5a3e7aa1",
"main.dart.js_104.part.js": "e12c14172f032d7edb2e4802f3baea45",
"main.dart.js_176.part.js": "c9f4f5e5f8f7842eed0b1cf4a0e15065",
"main.dart.js_166.part.js": "ba093fe8e0bfcc7c4858d7dfed041e2d",
"main.dart.js_53.part.js": "511e5c570828056d3e6fdd197d8d4751",
"main.dart.js_43.part.js": "8ab6496c3a6b8a9604822d4339beb56e",
"main.dart.js_192.part.js": "044e34a750d10bcebc5a1ba872dfbd7f",
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
"main.dart.js_149.part.js": "8ee89f8b4973ebbf2645719ffa881c4c",
"main.dart.js_159.part.js": "28fd515e5f2f650980dd191b08f14861"};
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

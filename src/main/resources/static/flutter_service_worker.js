'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "fee40abdc1233e8e35b106e7fcd814a4",
"main.dart.js_197.part.js": "aba9f65a51776c60f34b28565f6a29c9",
"flutter_bootstrap.js": "a2f5a74f25935e65d420bf5dfff7b1e1",
"main.dart.js_79.part.js": "a664f961e6334195e96023cfefd69a3d",
"main.dart.js_69.part.js": "20bb64b89b9cd36ddc492bdf3a84acbb",
"main.dart.js_101.part.js": "08b32920a73a10ce3670a26b8728bae9",
"main.dart.js_111.part.js": "34dc3c8840e57bce9ba0f6c76259ed16",
"main.dart.js_24.part.js": "6cabeee6e7474abf1d0d3be83f6dbed9",
"main.dart.js_34.part.js": "3d986dd8a4b552b7fddd576cb1babb7c",
"main.dart.js_46.part.js": "94d6fe0f7aa1c16a0c1639e40454992e",
"main.dart.js_56.part.js": "b106658ae7286ee4d5c140d274507b16",
"main.dart.js_163.part.js": "cb2ce63938eb40460f160b854067034f",
"main.dart.js_173.part.js": "a24573804b86f65e5f26f911d73c9569",
"main.dart.js_145.part.js": "851996157318845d8d0adbd195802bd7",
"main.dart.js_155.part.js": "9badca9b586076b6313e6d2d2d3a6d2f",
"version.json": "2c3d8a0c8cc446371ac0cec853ee032f",
"main.dart.js_60.part.js": "9ab7b0cb9050168ee79be25e013df239",
"main.dart.js_70.part.js": "c456c6382ac18f6accc7dbb2df8825a1",
"main.dart.js_12.part.js": "083759c6fd41663bc2c0d028ffc64f9f",
"main.dart.js_127.part.js": "3620a28b7454279de057a0fe074668e4",
"main.dart.js_137.part.js": "ea34ab3a4e5ac9cebda30f81a27f8f5a",
"main.dart.js_84.part.js": "7f8c29c56c67b6126148314dcee7fa4d",
"main.dart.js_94.part.js": "7b8b7a8671a9571d5befa404726235a2",
"main.dart.js_118.part.js": "ce09d61a8300efb28aef4c1584ab1681",
"main.dart.js_108.part.js": "81e0ba3948c217a7bbacc16f1e2f5a48",
"main.dart.js_154.part.js": "3fe6472eb382064e353ccdbe3aeb2b9f",
"main.dart.js_144.part.js": "7bdd2fcd16fc27051f5d383c0b397f8e",
"main.dart.js_71.part.js": "e6e9ecd53213ddd48b6bd1b703b902ac",
"main.dart.js_61.part.js": "238954938b6e85b1485a4b5912f38580",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_13.part.js": "14c9289178fec39f74134f4cea1072d4",
"main.dart.js_136.part.js": "33411058c63e513b9208d651d1ea9f82",
"main.dart.js_126.part.js": "35c9869fa1a6c461b040d189ace95733",
"main.dart.js_109.part.js": "49f2b26c4eab075ba6d64faf2bd1e813",
"main.dart.js_119.part.js": "6c5d5eb89e2a1aed79fa53eb42293119",
"main.dart.js_95.part.js": "a4c7049fce20846857a32e0c6a279aea",
"main.dart.js_85.part.js": "0f66778d4fcee909544d462e12a5a67c",
"main.dart.js_196.part.js": "c518a1d82a8a0b8850fac000575362f0",
"main.dart.js_186.part.js": "51c642606fa95f59468136599ead68fc",
"main.dart.js_68.part.js": "64b94f1abcfe780ea51794eb100007a3",
"main.dart.js_78.part.js": "cfd5100f60ec6cb4c7d8add4c80ed8d6",
"main.dart.js_110.part.js": "00f8a1d5f97e20e096468c07999789d1",
"main.dart.js_100.part.js": "15d90a00bda7795de5a208c6bfed8dde",
"main.dart.js_35.part.js": "1b9f73797c3c542aee6f82804d1181d3",
"main.dart.js_25.part.js": "6f3f530a671fd3fca50b19e96ae9b8c3",
"main.dart.js_57.part.js": "d3d76b312499e5538961a768021262cc",
"main.dart.js_47.part.js": "c77aeff4ef02e23a6e45f4080a2ae2e0",
"main.dart.js_204.part.js": "0d3fb5edf7bc3380a9a9b285d75f562d",
"main.dart.js_172.part.js": "e510badd06ae1bb4feff41d0abac2c7a",
"main.dart.js_162.part.js": "05bb3b146a5e7023fc949aa7622cc2fe",
"main.dart.js_124.part.js": "423e281f03beb94f4de0ca2e8cfd66e8",
"main.dart.js_134.part.js": "b06006d6a199f93c71656d1ccb1560c1",
"main.dart.js_63.part.js": "362e91606d119d79b44faa36974ce6f3",
"main.dart.js_4.part.js": "808a6f231f7e71343db2eb43d9b0a1f9",
"main.dart.js_73.part.js": "bc62b072601dc76d0582ffc7aec12b4a",
"main.dart.js_146.part.js": "09fd8f7e09140ac57cdef6e97b513dec",
"main.dart.js_156.part.js": "70d6c3d2d671ed28c3788f25636f38fd",
"main.dart.js": "a1579286ad9049f8cf30cda0fd74aa1c",
"main.dart.js_87.part.js": "0ef5a525e0ef415855decd12397bca19",
"main.dart.js_97.part.js": "e26ab5fc0a60b9b51042b0cf7e755c37",
"main.dart.js_179.part.js": "261d2c61f4515eb822f267c3c84a054c",
"main.dart.js_169.part.js": "a9db4c3ea285f1642cffa047c05e0078",
"main.dart.js_184.part.js": "bd182484420b667456219f931cd00ca2",
"main.dart.js_194.part.js": "2db07d71304f88b23ffeb720f2f7ddd0",
"main.dart.js_18.part.js": "be8c8413de18753ea74bba38fce93f13",
"main.dart.js_160.part.js": "b3f12a07326a7e64bb7d7e435de5392d",
"main.dart.js_170.part.js": "982de74a294ca2ed234eb41555c4e9f6",
"main.dart.js_45.part.js": "f3582045fc50c34968a092e72c3e3fcf",
"main.dart.js_55.part.js": "aaa0a601a046674d4d22d5c74d5d3fee",
"main.dart.js_27.part.js": "0658b19a9c46a4966d78303854fd851d",
"main.dart.js_37.part.js": "000a2106f5c4d6a87bf6bd5478000c8f",
"main.dart.js_102.part.js": "1413a327ea0c598d475793809e6ff749",
"main.dart.js_112.part.js": "b27d5602827cf23d3be339a8f66b0f4d",
"main.dart.js_19.part.js": "fd61ce625cce211ed24ed73f017940a3",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_195.part.js": "28e0aac4dc3067ae48ee4f41af8d7035",
"main.dart.js_185.part.js": "77706b86d8a159d7e5b56a48c5fa8abc",
"main.dart.js_171.part.js": "fa8bf0a907f09da01b45073d1a4d24a2",
"main.dart.js_161.part.js": "9e242b063dd5501f6e293fb0dc3ced3a",
"main.dart.js_54.part.js": "700b43d506d7f883fde37fa0715f09cf",
"main.dart.js_44.part.js": "96987d62af72f6fdbf49e2b229911411",
"main.dart.js_36.part.js": "bbe6b2d00df3444b69c6a47fbaf09018",
"main.dart.js_26.part.js": "e2851b34f7dc2f694355b441a8249fd9",
"main.dart.js_113.part.js": "d14b924dd2cccee915a86899eebde6a6",
"main.dart.js_103.part.js": "fe0c8b0cb652524442b9e9bff029dd59",
"main.dart.js_135.part.js": "e6c2b08d4fa6dec3ac69ce6438ff43ae",
"main.dart.js_125.part.js": "a75bb8e4cca8df103d826788114a4303",
"main.dart.js_10.part.js": "fe6b577e1b30a34ddfe52d615369a2a5",
"main.dart.js_72.part.js": "cabcce63747b9ed1bbe9fcd09d4074db",
"main.dart.js_5.part.js": "6e0dd6f0a18a47d8382058ade41c8760",
"main.dart.js_62.part.js": "5c40ae7f9ae7d7163cfe424b994cdd72",
"main.dart.js_157.part.js": "e5df91ecc7e5fc70d6552ab40f103ba0",
"main.dart.js_147.part.js": "2ae4653629f15604dd242ae37de98ab2",
"main.dart.js_96.part.js": "ce51f5b7d17565a0430a471a7e30331b",
"main.dart.js_86.part.js": "4737e89d77d8bdfded2de5f45002fb91",
"main.dart.js_168.part.js": "6de2b0de0d6356b064ce17d7674638a7",
"main.dart.js_178.part.js": "2582c24db65c60654698a8ca63fabedf",
"main.dart.js_83.part.js": "0595d598d632e97e0bd17921c731443f",
"main.dart.js_93.part.js": "34d2766f07f0a3be24c6d1013afeb35a",
"main.dart.js_58.part.js": "783fce9e201080241da9db5958e7d8e3",
"main.dart.js_48.part.js": "e90cb2c1a076a62a0a7c664d67dc128b",
"main.dart.js_15.part.js": "32dca71251dc11ae45f7a124057a0974",
"main.dart.js_120.part.js": "9206060d9e1c718a6d42f89f0e50e3d3",
"main.dart.js_130.part.js": "ae73911c62822c353c9972eb3b191595",
"main.dart.js_199.part.js": "e620a5be60a294e65aa3f5dbdd445912",
"main.dart.js_189.part.js": "e3bc238c8110900c9fccfae4f2948572",
"main.dart.js_142.part.js": "87c13367e2d3c23d205d869c27c794c9",
"main.dart.js_152.part.js": "eb7f0c673c54ecfe25882a78f3a97ef0",
"main.dart.js_67.part.js": "8b5e8e8b347d0cd15bbddfc043dee4a2",
"main.dart.js_77.part.js": "2fe9be2a61e71e5fcd7388d674e0e053",
"main.dart.js_202.part.js": "64aca427d856cc93948e5f364f5c9798",
"main.dart.js_41.part.js": "41235760a0a43328a71f256ae8cdfe7c",
"main.dart.js_51.part.js": "a2a6d52d69eaf105bd40bf3dbc29c6ba",
"main.dart.js_164.part.js": "9a4653c0261a8055886393755d699dcc",
"main.dart.js_106.part.js": "f4ab8e492ca2a5f1b9dda05254cfca8a",
"main.dart.js_116.part.js": "f0ed556146ca4ee84bc20c7088a6d52f",
"main.dart.js_23.part.js": "dd6f9e573c7a5124f0f4917e9846750e",
"main.dart.js_33.part.js": "914bbcabd81d50f59c2306c8e9a69254",
"main.dart.js_9.part.js": "0eac3adc59372d047dc4ddfac5f4632e",
"main.dart.js_139.part.js": "a83aeaa9780a3d75eed3f3a9ac4b496c",
"main.dart.js_129.part.js": "4a8973f341fc8db176e18bc92319ca65",
"main.dart.js_180.part.js": "85bf9a5a7d48d01a4c92337f08a1c9a2",
"main.dart.js_190.part.js": "50f5475d4deec5ec5cefe7cc7ebc2af1",
"main.dart.js_50.part.js": "3928044e8e4a68939b07767a4ef3d41e",
"main.dart.js_40.part.js": "de1b764679bd938b2081738347f78416",
"main.dart.js_203.part.js": "0e3a142b7258a152c1eb8c819f5c3f53",
"main.dart.js_175.part.js": "e6c9e70f99c3ada685ad0d2febde7691",
"main.dart.js_165.part.js": "d4e0c6fbad4923b6fe9af2148423fda4",
"main.dart.js_117.part.js": "e7000ec82560d729ce126044046c87af",
"main.dart.js_107.part.js": "429632f75a213bd3bfe45455d8bed552",
"main.dart.js_32.part.js": "f77a8d7b59b2efafb47be672adf126ab",
"main.dart.js_22.part.js": "c05517455319e624b0a07391ef4758fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_191.part.js": "0213a521bdc634418c88a71fdc010fb4",
"main.dart.js_181.part.js": "733a86be421a8b79ed913bace20bc15b",
"main.dart.js_128.part.js": "cec9e33792e227a9d41eb10b5e94bb95",
"main.dart.js_138.part.js": "13249ac13930ad89862c55ef958a8312",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "3afd0c8d73fb9d5b07adec88e31c790c",
"main.dart.js_82.part.js": "08c2cac96da1d4b268343ece2f574a63",
"main.dart.js_49.part.js": "16de6d3868e67e1a15f1f1a7c07fbbbe",
"main.dart.js_59.part.js": "bc9a5f14f3511b50fd5ae9b937411ace",
"main.dart.js_188.part.js": "08648f5108349060df6127720c107f1f",
"main.dart.js_198.part.js": "f65713fc927dfa475c8fb3c9b7c1dbcc",
"main.dart.js_14.part.js": "5a4536f4a9ef6c8d463f1d5b97e37152",
"main.dart.js_131.part.js": "f06ac2fc721646946e0a91681c183e61",
"main.dart.js_121.part.js": "88977d523e43931c70c5f437d66bacc1",
"main.dart.js_153.part.js": "9cbcb78b22508896b28275ce581c292a",
"main.dart.js_143.part.js": "9148d9896fe96d634874c7421c6307a6",
"main.dart.js_76.part.js": "f18708789322b40d3396b4e9aa56eca9",
"main.dart.js_66.part.js": "e96b3dd217c188975d8c8bb4bd988d75",
"main.dart.js_1.part.js": "7d536b1efb25a5238cbf0d4b44c718b0",
"main.dart.js_20.part.js": "b6278730d8bd0f705016e53492626208",
"main.dart.js_30.part.js": "151b395fa0364b8f0130740b203c7a1d",
"main.dart.js_105.part.js": "b111fc9d5042a95d9ba6abc85a1777e5",
"main.dart.js_115.part.js": "d13801602f23d4fd9391553d0d6332e6",
"main.dart.js_99.part.js": "0f12938f0ac4f7bc5f7d5875e4b26d08",
"main.dart.js_89.part.js": "836d2f5667a3fe323a0d6fcacf934718",
"main.dart.js_177.part.js": "005535797c55c90938c834ab709a4bc9",
"main.dart.js_42.part.js": "eaa0243232f001679ae122957e5109f7",
"main.dart.js_201.part.js": "d5367074ee073e6ce19bd9b00ac32d9d",
"main.dart.js_52.part.js": "01227038012f51aab79c20ac4da1e02b",
"main.dart.js_183.part.js": "1b8001f7f86273e7fdd9cedfe72ee2ef",
"main.dart.js_193.part.js": "7df255e837959be08054db2dc9cd700b",
"main.dart.js_158.part.js": "15cc25ce47b85c201887491bfd7cf1fd",
"main.dart.js_148.part.js": "7e3fc505147515854444d8f4aa4224d4",
"main.dart.js_39.part.js": "74904d7584b6851097e093ef0685c23e",
"main.dart.js_29.part.js": "84834ed04449b201318716a24a2f3333",
"main.dart.js_80.part.js": "4f029c4ca94e2a28c0abcd812815d58b",
"main.dart.js_90.part.js": "0caeaec15bb8d2799c7aa99482d60d33",
"main.dart.js_64.part.js": "dce0a2b8f3ecb6ef098dc8c666f73273",
"main.dart.js_3.part.js": "5038ab2eccb2a156f258699a74a29294",
"main.dart.js_74.part.js": "b9bb3409900d4979ae7325ebdb253330",
"main.dart.js_141.part.js": "c2e6e4e983809e8767e3af1dca81d738",
"main.dart.js_151.part.js": "e8652516c07cd20468040ee4f26ce1f5",
"main.dart.js_123.part.js": "2b06b3a4bb7dfaf3a561b8d10d6b272f",
"main.dart.js_133.part.js": "f6ad11746680e2e7abc5a1e55ac4bad0",
"main.dart.js_16.part.js": "96d8ea3d75704750063251d5a19a89f1",
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
"assets/fonts/MaterialIcons-Regular.otf": "67f6f3286bf82faaafc31e3e5d3dd570",
"assets/assets/images/no_cover.jpeg": "7e48f3134478ff6a02bdaae12702e698",
"assets/assets/images/fq.png": "6e5136dee28ad0cb3a351ed047fac21c",
"assets/assets/images/splash.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/logo.png": "4371e4db6d28c3d27973f5a840fa69ee",
"assets/assets/images/qq.png": "491c32aad179267434096dc7f2b16214",
"assets/assets/images/qd.png": "7a81e826d519521b044abcf143a4bbcc",
"assets/assets/images/default_avatar.jpeg": "3cfd6cec07546522179cab14e9375c10",
"main.dart.js_91.part.js": "7e555570ed969b5b83e6ba6ab70dfeb8",
"main.dart.js_81.part.js": "e710b0de416a671c4ede74cbb0a22c0b",
"main.dart.js_28.part.js": "3b45b0194aad19ed883e73048e3a18cc",
"main.dart.js_38.part.js": "e68705ae322ab8b137771bf1731b383c",
"main.dart.js_75.part.js": "02f1913441c64fe82b8ed188dffbb444",
"main.dart.js_2.part.js": "f03aa3d53617f43d74dca57ecfc7dacf",
"main.dart.js_65.part.js": "c2509acc59cf3351328cce71c1fb5f69",
"main.dart.js_150.part.js": "b89a77812950477665372de53982ac64",
"main.dart.js_140.part.js": "81a23745a00c68209939ba660be50253",
"main.dart.js_132.part.js": "fab931cc51ad97f19978c7e31f4be794",
"main.dart.js_122.part.js": "8bb9420c6f6f9047087188843b4eb69c",
"main.dart.js_17.part.js": "8689ecd6842e7cedd74759a9aefea4b5",
"main.dart.js_98.part.js": "8275eabd4a247fe608051181ec9f484e",
"main.dart.js_31.part.js": "fc338ef056de8195b5a29f9d85dce463",
"main.dart.js_21.part.js": "15b58e6de4b256b68a4a021d26b770a8",
"main.dart.js_114.part.js": "f2bd4e8fa244bc56e1b897b62745564f",
"main.dart.js_104.part.js": "c873d6d4b1b6322118639d1ad496e20a",
"main.dart.js_176.part.js": "91836e36ec4090d9a03bb309dc7c34c5",
"main.dart.js_166.part.js": "405ed9b4c0b854ea3a1a7cfabbeef1d4",
"main.dart.js_53.part.js": "511e5c570828056d3e6fdd197d8d4751",
"main.dart.js_43.part.js": "c23348017839a246669bf1b08245757f",
"main.dart.js_192.part.js": "b80db720627aec60c28c8169ace3a42b",
"main.dart.js_182.part.js": "aa1e13e70ddec420e8681f03055aeea2",
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
"main.dart.js_159.part.js": "8c63bf9bb6cc50375ffdd32ec71e1f12"};
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

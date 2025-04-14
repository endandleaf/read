'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "3e0c1d0b505dfa328e97803b4e129466",
"main.dart.js_197.part.js": "aba9f65a51776c60f34b28565f6a29c9",
"flutter_bootstrap.js": "b7fe9cc3ed54fd01c21603620b108436",
"main.dart.js_79.part.js": "a664f961e6334195e96023cfefd69a3d",
"main.dart.js_69.part.js": "20bb64b89b9cd36ddc492bdf3a84acbb",
"main.dart.js_101.part.js": "08b32920a73a10ce3670a26b8728bae9",
"main.dart.js_111.part.js": "11c344d6cc2f310ff00b54d2e5db0060",
"main.dart.js_24.part.js": "68fdea1480646b60d7fa7cc844fc7280",
"main.dart.js_34.part.js": "3d986dd8a4b552b7fddd576cb1babb7c",
"main.dart.js_46.part.js": "94d6fe0f7aa1c16a0c1639e40454992e",
"main.dart.js_56.part.js": "531bd7f6897280c048d2582f48fec1c8",
"main.dart.js_163.part.js": "cb2ce63938eb40460f160b854067034f",
"main.dart.js_173.part.js": "4036e76505f7ec90edda4d8725729edb",
"main.dart.js_145.part.js": "851996157318845d8d0adbd195802bd7",
"main.dart.js_155.part.js": "9badca9b586076b6313e6d2d2d3a6d2f",
"version.json": "2c3d8a0c8cc446371ac0cec853ee032f",
"main.dart.js_60.part.js": "9ab7b0cb9050168ee79be25e013df239",
"main.dart.js_70.part.js": "e8af0732482a4a9214df818ed65eba3e",
"main.dart.js_12.part.js": "083759c6fd41663bc2c0d028ffc64f9f",
"main.dart.js_127.part.js": "48c0960200994bd515f9bd9d0f84921e",
"main.dart.js_137.part.js": "ea34ab3a4e5ac9cebda30f81a27f8f5a",
"main.dart.js_84.part.js": "1547077f5c7c156cd2524ce11382a988",
"main.dart.js_94.part.js": "52ca35f6846503008ef1cb8e42aa07af",
"main.dart.js_118.part.js": "ce09d61a8300efb28aef4c1584ab1681",
"main.dart.js_108.part.js": "81e0ba3948c217a7bbacc16f1e2f5a48",
"main.dart.js_154.part.js": "3fe6472eb382064e353ccdbe3aeb2b9f",
"main.dart.js_144.part.js": "68d0754f1830cb8ddf1996f5a46f6571",
"main.dart.js_71.part.js": "61567739ae1d09a378ab5e23ce5c60d8",
"main.dart.js_61.part.js": "fa9e8fe181be78176aaf928a947a7f9a",
"index.html": "f5c63c3c2bcf52234963567aca19a5a3",
"/": "f5c63c3c2bcf52234963567aca19a5a3",
"main.dart.js_13.part.js": "14c9289178fec39f74134f4cea1072d4",
"main.dart.js_136.part.js": "88ba36f3fb65b6a4ab867194b9db9c8d",
"main.dart.js_126.part.js": "35c9869fa1a6c461b040d189ace95733",
"main.dart.js_109.part.js": "49f2b26c4eab075ba6d64faf2bd1e813",
"main.dart.js_119.part.js": "6c5d5eb89e2a1aed79fa53eb42293119",
"main.dart.js_95.part.js": "555728f732eacc1f58710220d85307a9",
"main.dart.js_85.part.js": "0f66778d4fcee909544d462e12a5a67c",
"main.dart.js_196.part.js": "c518a1d82a8a0b8850fac000575362f0",
"main.dart.js_186.part.js": "51c642606fa95f59468136599ead68fc",
"main.dart.js_68.part.js": "85b63fad1aca9a898ebd99dba0a3f652",
"main.dart.js_78.part.js": "fed3e9e8c74c974d5d0f9cbdb0dd5b52",
"main.dart.js_110.part.js": "b88c6c9fa09cd09b521bac5416ddc95b",
"main.dart.js_100.part.js": "88eb12c1e53e45803b5641e5ae1947a6",
"main.dart.js_35.part.js": "1b9f73797c3c542aee6f82804d1181d3",
"main.dart.js_25.part.js": "83248544a8b626148d5cf1f277fe9326",
"main.dart.js_57.part.js": "2f69c11a7c82214f7b60414d0724b944",
"main.dart.js_47.part.js": "cfb5f7be8794c0106c0547adf262f5cf",
"main.dart.js_204.part.js": "0d3fb5edf7bc3380a9a9b285d75f562d",
"main.dart.js_172.part.js": "578815ad0c58466ab0be465e518511e9",
"main.dart.js_162.part.js": "05bb3b146a5e7023fc949aa7622cc2fe",
"main.dart.js_124.part.js": "7d25c930522bc2c89a2f147ab8d46b61",
"main.dart.js_134.part.js": "844ef3cf2ac643f1758b180d83171074",
"main.dart.js_63.part.js": "9ab3505b6fe0c9e01789e9c2a6c5719a",
"main.dart.js_4.part.js": "808a6f231f7e71343db2eb43d9b0a1f9",
"main.dart.js_73.part.js": "c22d54c5d6d6d50d947a48ff6eb5bfec",
"main.dart.js_146.part.js": "09fd8f7e09140ac57cdef6e97b513dec",
"main.dart.js_156.part.js": "70d6c3d2d671ed28c3788f25636f38fd",
"main.dart.js": "0df7f696d6eeb9d2fa2978dac74f02fc",
"main.dart.js_87.part.js": "0ef5a525e0ef415855decd12397bca19",
"main.dart.js_97.part.js": "f60538dd665044a545bf2d0d763c106c",
"main.dart.js_179.part.js": "cd3e77b4b086c2a11b4d78e21e7b7723",
"main.dart.js_169.part.js": "583ed4f29756e4c795d443380f65e804",
"main.dart.js_184.part.js": "bd182484420b667456219f931cd00ca2",
"main.dart.js_194.part.js": "2db07d71304f88b23ffeb720f2f7ddd0",
"main.dart.js_18.part.js": "be8c8413de18753ea74bba38fce93f13",
"main.dart.js_160.part.js": "ab7667979f0e456eb9e7838dbb2e227d",
"main.dart.js_170.part.js": "982de74a294ca2ed234eb41555c4e9f6",
"main.dart.js_45.part.js": "7066ba7c2c221fb2c2fc7fb74708ab32",
"main.dart.js_55.part.js": "215d13381ea3a6f43c622951721c8e70",
"main.dart.js_27.part.js": "bf346a91383a6a16a4c302b5f3bb7db3",
"main.dart.js_37.part.js": "5f1b2783da4ec6c54264636363f33055",
"main.dart.js_102.part.js": "b66e2a06be2d2ebe9af382fadc8a0832",
"main.dart.js_112.part.js": "32a9d7daf9eb2799e0ad8460f3397d20",
"main.dart.js_19.part.js": "fd61ce625cce211ed24ed73f017940a3",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"main.dart.js_195.part.js": "28e0aac4dc3067ae48ee4f41af8d7035",
"main.dart.js_185.part.js": "77706b86d8a159d7e5b56a48c5fa8abc",
"main.dart.js_171.part.js": "fa8bf0a907f09da01b45073d1a4d24a2",
"main.dart.js_161.part.js": "60b6cffb308ae2d7eb895b6064667bf0",
"main.dart.js_54.part.js": "700b43d506d7f883fde37fa0715f09cf",
"main.dart.js_44.part.js": "c3ffd9ad248ec0051890a809054e02d5",
"main.dart.js_36.part.js": "af47e6092ee036eb3e853bc408287d63",
"main.dart.js_26.part.js": "e75318a35038d81849fa52416676ae6a",
"main.dart.js_113.part.js": "d14b924dd2cccee915a86899eebde6a6",
"main.dart.js_103.part.js": "d033318bbfd3ed6f222952af44384cf7",
"main.dart.js_135.part.js": "e6c2b08d4fa6dec3ac69ce6438ff43ae",
"main.dart.js_125.part.js": "d5d40724816e82722b11312fb3ba784f",
"main.dart.js_10.part.js": "208b970d7755942677ff131dc79f1d86",
"main.dart.js_72.part.js": "cabcce63747b9ed1bbe9fcd09d4074db",
"main.dart.js_5.part.js": "86db591a2f60b60a01aa506f63e61813",
"main.dart.js_62.part.js": "5c40ae7f9ae7d7163cfe424b994cdd72",
"main.dart.js_157.part.js": "e5df91ecc7e5fc70d6552ab40f103ba0",
"main.dart.js_147.part.js": "2ae4653629f15604dd242ae37de98ab2",
"main.dart.js_96.part.js": "b13da8b74b1e727136a5bbd5abe79462",
"main.dart.js_86.part.js": "4737e89d77d8bdfded2de5f45002fb91",
"main.dart.js_168.part.js": "c9d092c5a3fa3e8c8f612af99f3a8001",
"main.dart.js_178.part.js": "f1b2c1c40148368a7487004818393950",
"main.dart.js_83.part.js": "0595d598d632e97e0bd17921c731443f",
"main.dart.js_93.part.js": "34d2766f07f0a3be24c6d1013afeb35a",
"main.dart.js_58.part.js": "efbef7e964d34367db003c3e0f653732",
"main.dart.js_48.part.js": "6435b7fcf22bf2fe7b92d28adabe88ab",
"main.dart.js_15.part.js": "8706c64047301defd2277ba46c0b1b61",
"main.dart.js_120.part.js": "143902dc692cdf31573881ffebb67d87",
"main.dart.js_130.part.js": "ae73911c62822c353c9972eb3b191595",
"main.dart.js_199.part.js": "e620a5be60a294e65aa3f5dbdd445912",
"main.dart.js_189.part.js": "e3bc238c8110900c9fccfae4f2948572",
"main.dart.js_142.part.js": "87c13367e2d3c23d205d869c27c794c9",
"main.dart.js_152.part.js": "eb7f0c673c54ecfe25882a78f3a97ef0",
"main.dart.js_67.part.js": "dad09e997a0807ee1ba16d944e85e890",
"main.dart.js_77.part.js": "2fe9be2a61e71e5fcd7388d674e0e053",
"main.dart.js_202.part.js": "64aca427d856cc93948e5f364f5c9798",
"main.dart.js_41.part.js": "a3ff35ba558732b0563ef108a491094e",
"main.dart.js_51.part.js": "eaf393a193eef6fc22b39b9aeb50b7aa",
"main.dart.js_164.part.js": "9a4653c0261a8055886393755d699dcc",
"main.dart.js_106.part.js": "9c09ba0697694b2bc39816f44b0012ff",
"main.dart.js_116.part.js": "3ff5004c0154085e18458f5f4e3b0846",
"main.dart.js_23.part.js": "dd6f9e573c7a5124f0f4917e9846750e",
"main.dart.js_33.part.js": "914bbcabd81d50f59c2306c8e9a69254",
"main.dart.js_9.part.js": "e8e39b8a3181dc7366360efe5fefa8d1",
"main.dart.js_139.part.js": "400feff539209831a9e2df39eff1965b",
"main.dart.js_129.part.js": "4a8973f341fc8db176e18bc92319ca65",
"main.dart.js_180.part.js": "0484688b56e6aac03c1012303d3cdc6a",
"main.dart.js_190.part.js": "61fcc2b96efa62fef5f970252cf2ac03",
"main.dart.js_50.part.js": "3928044e8e4a68939b07767a4ef3d41e",
"main.dart.js_40.part.js": "1c2e02a30e0cd9a86a34eaa4e7fa6171",
"main.dart.js_203.part.js": "0e3a142b7258a152c1eb8c819f5c3f53",
"main.dart.js_175.part.js": "9020fceef5637fd42413185c4347677a",
"main.dart.js_165.part.js": "c3d57d476c8b60de48cf67824fb31734",
"main.dart.js_117.part.js": "c312292ece71affbfb9f402021c11217",
"main.dart.js_107.part.js": "902aa1b2e269740f0449e3d50d8a9df2",
"main.dart.js_32.part.js": "9b04fa370006591511f44f106b136370",
"main.dart.js_22.part.js": "ec66a6b45d74b08facc01a209721dee5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_191.part.js": "3afbbd20488f8d43644ace9373e6c79e",
"main.dart.js_181.part.js": "a93d0de48073ec83821dec363d57da0e",
"main.dart.js_128.part.js": "cec9e33792e227a9d41eb10b5e94bb95",
"main.dart.js_138.part.js": "13249ac13930ad89862c55ef958a8312",
"manifest.json": "ce255632f156b3abd6f7816522c4ff1a",
"main.dart.js_92.part.js": "3afd0c8d73fb9d5b07adec88e31c790c",
"main.dart.js_82.part.js": "5873314affb0628cb0624828cadf2631",
"main.dart.js_49.part.js": "16de6d3868e67e1a15f1f1a7c07fbbbe",
"main.dart.js_59.part.js": "bc9a5f14f3511b50fd5ae9b937411ace",
"main.dart.js_188.part.js": "17436aec61e6c9db703fcb650283ad3d",
"main.dart.js_198.part.js": "f65713fc927dfa475c8fb3c9b7c1dbcc",
"main.dart.js_14.part.js": "5a4536f4a9ef6c8d463f1d5b97e37152",
"main.dart.js_131.part.js": "f06ac2fc721646946e0a91681c183e61",
"main.dart.js_121.part.js": "88977d523e43931c70c5f437d66bacc1",
"main.dart.js_153.part.js": "9cbcb78b22508896b28275ce581c292a",
"main.dart.js_143.part.js": "9148d9896fe96d634874c7421c6307a6",
"main.dart.js_76.part.js": "b68222b276071760284a086467c4e444",
"main.dart.js_66.part.js": "e96b3dd217c188975d8c8bb4bd988d75",
"main.dart.js_1.part.js": "e7c044572ec21d162a242ac9fe043100",
"main.dart.js_20.part.js": "3602da84e819b5017d3f87b75cc0ba6e",
"main.dart.js_30.part.js": "9e6d32cbf86ee552badddefc7dc6eed3",
"main.dart.js_105.part.js": "f3e81acbb7285de12e16bd41b83365b3",
"main.dart.js_115.part.js": "b2c3811add4c06048861231e0b3c48d3",
"main.dart.js_99.part.js": "0f12938f0ac4f7bc5f7d5875e4b26d08",
"main.dart.js_89.part.js": "5ef452758c87231c9328e97d011ef676",
"main.dart.js_177.part.js": "b1882343a84598b471a288406d4b8e89",
"main.dart.js_42.part.js": "ccaf2c664b7a03b1b634dfe19a7943ab",
"main.dart.js_201.part.js": "d5367074ee073e6ce19bd9b00ac32d9d",
"main.dart.js_52.part.js": "bf4455098df0190042dd43d8d2e38b5d",
"main.dart.js_183.part.js": "1b8001f7f86273e7fdd9cedfe72ee2ef",
"main.dart.js_193.part.js": "f8de6525a9ac82f48b776a8b7adde015",
"main.dart.js_158.part.js": "15cc25ce47b85c201887491bfd7cf1fd",
"main.dart.js_148.part.js": "638870a4c0431d07d52135c6a4c92fea",
"main.dart.js_39.part.js": "74904d7584b6851097e093ef0685c23e",
"main.dart.js_29.part.js": "5f098c608ab1f63570d7c711b7ef3c0e",
"main.dart.js_80.part.js": "c68013611a30cb51b1c400a599766eb9",
"main.dart.js_90.part.js": "0caeaec15bb8d2799c7aa99482d60d33",
"main.dart.js_64.part.js": "bd0a6fe599494f70c091a597c1656e7b",
"main.dart.js_3.part.js": "89fbe8fc554d666625c0b9bf2d27e852",
"main.dart.js_74.part.js": "b9bb3409900d4979ae7325ebdb253330",
"main.dart.js_141.part.js": "6f2be329a337fa44007b778f32bfd904",
"main.dart.js_151.part.js": "0d776a0f9b6c7afe466c553be585fd5d",
"main.dart.js_123.part.js": "4029ecd36dcfb70dd5a85743f1751343",
"main.dart.js_133.part.js": "d3edb09115d513e0fcdac380d67a4928",
"main.dart.js_16.part.js": "fc293545e6af5cad84788db456534ba8",
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
"main.dart.js_91.part.js": "ab8655c718d4c1e82f797b08135b4f21",
"main.dart.js_81.part.js": "c4549a29507bc15f3538de4b946c8e68",
"main.dart.js_28.part.js": "cfb258639b1c3324883854e74fdcc183",
"main.dart.js_38.part.js": "e68705ae322ab8b137771bf1731b383c",
"main.dart.js_75.part.js": "02f1913441c64fe82b8ed188dffbb444",
"main.dart.js_2.part.js": "b1b000e840ad2aac0973aa5e5d2e49e7",
"main.dart.js_65.part.js": "d05591235673c7d84a0a301bc34d18a3",
"main.dart.js_150.part.js": "b89a77812950477665372de53982ac64",
"main.dart.js_140.part.js": "a0d15025954025261d5d836e993395e2",
"main.dart.js_132.part.js": "fab931cc51ad97f19978c7e31f4be794",
"main.dart.js_122.part.js": "cc20024a3df325b3678f8dc56634cfca",
"main.dart.js_17.part.js": "8689ecd6842e7cedd74759a9aefea4b5",
"main.dart.js_98.part.js": "8275eabd4a247fe608051181ec9f484e",
"main.dart.js_31.part.js": "75e64b4ce029159938522cefc419bab4",
"main.dart.js_21.part.js": "78b2e4f6bc1a457397d52415ab4f225c",
"main.dart.js_114.part.js": "f2bd4e8fa244bc56e1b897b62745564f",
"main.dart.js_104.part.js": "c873d6d4b1b6322118639d1ad496e20a",
"main.dart.js_176.part.js": "91836e36ec4090d9a03bb309dc7c34c5",
"main.dart.js_166.part.js": "ba39b7458fe472e8380932f24f6eca75",
"main.dart.js_53.part.js": "511e5c570828056d3e6fdd197d8d4751",
"main.dart.js_43.part.js": "f5cbec1005b8fab92b0c4ce6078149b2",
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
"main.dart.js_159.part.js": "246d5b16019d725f1480a383da689824"};
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

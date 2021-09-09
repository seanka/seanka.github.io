'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5de4d02c8566f9519336669342684881",
".git/config": "327ac400080e64f879b1c9a6cd890067",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "b117c6c06df78a71de1da685e0983973",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8a7702b464c1bccc2ae10daa84febe65",
".git/logs/refs/heads/master": "8a7702b464c1bccc2ae10daa84febe65",
".git/logs/refs/remotes/origin/master": "33d570b2fadc0e9bf15cbaa92693709d",
".git/objects/00/9de7d4e40506c8c14177f4eea4c683f122348d": "e409a5316029e69bbec1fe064baf07bf",
".git/objects/03/e4d80c78b3c036a6f0e4b2ba8f085a043802f1": "742794708d4093fb65db2bce0e6df807",
".git/objects/04/a78eb9d810b00fd7a8dd94da196a10ad724d26": "cb01f1a57a3efa8cbc0583c246abadd9",
".git/objects/06/e7be60698f4c2a0d9b14db447ef62e9a9e7484": "5958c88349aec46152db796fa83d3272",
".git/objects/09/04f607641b2307998d2a33dee672f8abcb914f": "3110ef060d7641a8be6b5d7664bfb595",
".git/objects/09/cfd6387184021c00397793b8fc2a56d4a25d10": "ac1566ba4feb2aeac36364c010b21a6e",
".git/objects/0b/aeed2577cadd44d7b95d649bd6c38707f00174": "3a87015688932786a760b56edf8fd7a6",
".git/objects/11/c09f2d33b3c6c7a55094928a775fa0f3036236": "981079f3d14b2d181e63a1c2ce82cb5f",
".git/objects/18/cd7f6fad7589b8baa8d73ba36aa5e68b55d5da": "34b0f7fc20a3b5f096780e46c7b9ab5a",
".git/objects/19/1d65a1547d4c88484bee2e4a371323a3cfcf30": "27f612740a296e4689702b2278763c6c",
".git/objects/19/eadcd41d007d8b1e1e3dbc7f4850bc8dc40f68": "f89b4e9570247aca212436f6efba5005",
".git/objects/1c/17ee733cc22d7552f695ca78507cb610d045b5": "a2a6061d852e0647181d23a517024d08",
".git/objects/1c/685d7d7b5e7d1c5d98ce2038efaffcd13cbb92": "5f0882291df6ea276777ace3a6e9345f",
".git/objects/1c/9dcbe31e2c053c9497fdda661bb250caa0c1de": "0c1b96c263e5cccbf90e4bcf352f8978",
".git/objects/1e/86ac36e8b70c5fd946fcd6d7ff5ce9887bb149": "1230da7640e0c1a505af5348791a204b",
".git/objects/1f/1d877f8e79d83da991ee8dbad5cd8c5f32a8e5": "33d8f3530835c2c9a5ddd2652c9d73a8",
".git/objects/20/1c88c00b9eb9fdee7448cc3ef49fa44cc498d9": "e7878fb4133b2d75419d4386ea97ea79",
".git/objects/20/cb147071ce05a069f2ccf37cc5cbe6168353d3": "f56a28269394effd7582c2ccbbdbb895",
".git/objects/21/20882bbc61a0ac914e48a50842cf726440745e": "1e9f02798f489007f8ac3f83b3ed77ea",
".git/objects/24/d62194539231d33151e606f66017e92dc1bc02": "f5ae1551fb171acef28ead15275bb395",
".git/objects/25/e163bfb564607e17e2fe7e5064a8de45a0873a": "28902c021ed488fd4bf3f80da931b946",
".git/objects/26/3f5dc7bc2b3d756f9193dfa43e13abb2b43416": "89dc89518b581e7f2c75ed0a3fde2cd9",
".git/objects/28/80b34823c853e9d585d109a1ef48cbe8b5e1b2": "0321d4ec81354e413c9c4fa9415a17d2",
".git/objects/29/682db364b26be9f4cd02c7edf9c250c38fc60c": "ace9b1ff79253c0f5fd7757b70edb226",
".git/objects/32/43980702c93fa2640b12367c761581f54cb11b": "c665cae509d413614a864db0cd58bf1a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/5c0e0e1788662ed87a4e4d4b2a5d3bd2349007": "ef669aa5469b1bb82927eac40f10fb11",
".git/objects/33/3376fba88b155e4c9fb15bb1ac7115152ea9b0": "db097458b4885a1d452af3c48da53f8c",
".git/objects/3a/343806bed2c9f0add8a4afc87dd627b4b7b94a": "e64d2e369eededffbdc819701aa04fcf",
".git/objects/3b/f061e2b23dffca9c50b1965b930bbc6eaaafcd": "118bd287346c5de79a2f72e5682bccc0",
".git/objects/3c/648fc11d423fe5b31f7ebc8faa3b6786a52c00": "0778d8e9524a01b4dc2115d77c8dfaa4",
".git/objects/3c/b2edd78958582a5d9d87eb96c872ac2a4b6767": "49584c97338d9f2eac2c7b1fae23aae5",
".git/objects/3e/f0d08b78334c20ba5ff9ff9804cadf1f3f60a0": "c82d184055174fef7e1511e30d5bed6a",
".git/objects/3f/925143f70658bd5ea9fd1e5c2bd57be18f6de2": "35abbb026799374de879e46b8ef0ca0c",
".git/objects/41/ef8b82dcd073476d4a3b6912934a5fca6aa62e": "f2fe6f47e0610ee76679be83c544f933",
".git/objects/42/a3c4e90c4d1177a6d39143b5acbfdbad36e460": "261bab99c6aa15d3bf868ae7a074a366",
".git/objects/43/aa156f267f90a60f97600645ff0c795407c9c6": "62d5627c663cb732fc1d3a33d02bb01c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/c2619af96e492b9e0a5a778e303e768baeac44": "b3a8e31e40a3f5420e1a804229513e90",
".git/objects/4a/ecf3b2273d29c536b8c368e4fe2b4e977c9c2e": "3d1ff4e154c43954da43f8c4334a6a9b",
".git/objects/4f/3ad218cab0bcbf976d3d8548dff7e9488cb1c0": "385f1d14addf5ebff98f57ea80dde07b",
".git/objects/54/28c9c6dd788af7e626be91d6986d07cf6ae1b6": "054c49471d86b61bf98b92587c38cb8f",
".git/objects/54/453d60066c30c63c8279442c96da3302bbe995": "d22423257403a263c09292908d9a12dd",
".git/objects/55/5af3c77f41f1a0917addd01b4080de97376a40": "e4a6bab1d77b0157803ccac2e3bf0d8a",
".git/objects/58/b23f02171a7238ec82b2eff8cedab39ca52b9f": "e986b3281d8cac25306c157d545d232a",
".git/objects/5b/8635f3baf64589c446280def3a08050b42e17d": "3f59ffe243b00a75e59fcab27c2437e5",
".git/objects/5c/4b7dd0bbe804ae9c60663326a9cffeb1039ea0": "05846c1c8be13089b095043a9b3fcf42",
".git/objects/5c/8df689699dde03874fefc6568b0905292e7af1": "12093d6773459c5a924c9cf2920fa5ac",
".git/objects/60/df0d8fcf933be7f43ab623c680558c5b09731c": "87c10d63413ca70be3a721c9d3472f85",
".git/objects/64/928cdf7cc33ed0d8e84de47e3fe680183519b4": "f4f2f89ea0d5182197e65d6f3f07291e",
".git/objects/67/150bca9ffcfa227ac8f469431e8e392a4cca79": "31b35227e34ca57e2a987501750ca983",
".git/objects/6d/895efc236bb7ef76d5d9de859800a77745d4ef": "702b3cccb2273504a4c70781b3134481",
".git/objects/6d/e54f7ff7ec380e01408afefad110e5afbc6064": "e2d6ad3c32fd5341f8fc2edbb5f72447",
".git/objects/6e/2e89d294cd7b748fd73e090cc0a92ba499d889": "a2adcd6ac9fc9aafb5438bcc56e4bc34",
".git/objects/6e/7caf75db6b6d2b2398203cd22269a13692737d": "ea3fb93ce2a6480f3ce65d65e244aee0",
".git/objects/70/85dc36c05dfda7486a55a7f2e5cc17372e9311": "340bf3d304df1ef72c3f96a1ccb72152",
".git/objects/71/1745ec3d46c0caf9959b1d0740efc44339317e": "11f6d73b8a4997fec7383a8c19ce51f8",
".git/objects/71/fb8be3f9219f44241ee31f25f0f0dcff424614": "e4e1152df9f208062d4e72bcb94224e1",
".git/objects/72/e208977f87c944dd3dc7f45b7ff18993ed77a8": "078554d8e76c5ac3bc3beed22b92abab",
".git/objects/74/25dd241faa74c45bb0c7ac4105cfb10e94f001": "6e3ed1e5467dd4d3f1a82e9cc73b33e2",
".git/objects/76/c7e5650fcb704ee79599d3f39b234789f3bc06": "36f4fb764c8fafbd896fcc00b9db4e9d",
".git/objects/79/668bee15133e33191423c1b2d2cd750546f91a": "4a2b13c58d7f388f589e5b71878022f1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/cae61e472d55926283646ad92d397e7dd16b36": "9626992fb1b9f38e114393de7e88385a",
".git/objects/7e/fa846ec78c8d1ab4ab124e1fb4fad62c0d7e80": "f3df363c9ab4e55e7c0f9822ba165b96",
".git/objects/7f/f9565ce7036d9fcb75049e12345648346e1fc3": "312fc2dcfad94b4ab68a4a6c203ebb2e",
".git/objects/80/490d0b815f5baca7a123a028696009aaafc4c7": "1d4b76f600d109a24fffd3d8b44b1888",
".git/objects/80/65fcc8eb6c91dd788acc3d2d19f8e937649fa0": "66a0f72bc1dfea3ea47f0dba81e12542",
".git/objects/81/0a516f30a6dcbd072466b39be4c360aeec89ff": "3fd584d8d3a6f555e16ff345deb444e4",
".git/objects/81/8dfb01ecfb7621c69bebf64b938c6ced93fc78": "e3d3601f6246e375e6a5c2564f7690c6",
".git/objects/82/f720ff6758bae2bf149cb7f69541be0030d928": "ce9eef4b70535cb752419c7dde05d0f4",
".git/objects/82/ff6ff7c7cebdf36a31c6bbf9d4142add6055fe": "e9d63b0f4c520f2573e91489d5a90a81",
".git/objects/83/3c20008d15ef370884906f5071c80b497c20ab": "e8885eea4910e7eb088632a1728dcec1",
".git/objects/85/20d9227cbd42881d432757ebbb8776e3de01d7": "f24d0c0d62792f4d33f4e6998273eff2",
".git/objects/85/d9c8553b0fb4affe8d680521f18b35541a0df7": "1bab32cc10b1f9df58d613666459d761",
".git/objects/86/cd3d627b29cc16747a6f098c34642117caa8d2": "a84cd7ab8275feb42d280f5cadb24f64",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/88/433b9563b9b1cd5b8c8819857d568d73474f0d": "db97e621f963cef3db79ba2457cfbf74",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d0941d9c2560142b49214a2ab516bfdc2fb1df": "bcd952f138a7e350849fbcd25d9fdb5d",
".git/objects/89/f91b7cc04bc95393c77fa58ab5b550d5800a71": "fea9bbd1538e59ac8b81e5c8a7b55853",
".git/objects/8a/7866df2909fc18e8c6841d1e7801becbbecf27": "52bfd35589883a8062ad17b0d3e2647a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fa0ee74fd6e00f159031557e69b3076a837333": "fe7580e7d0117f02dcc6da95ec84ea26",
".git/objects/8b/08770a026b57c8bfd9de1232d825dbd05826bc": "20e21f80a4337ac05b124a56d8ad18f0",
".git/objects/8c/cf4f8dd8440f377e597fd031285239e4a7ad45": "27abc5a45d235f1df6fc8be874eef205",
".git/objects/8f/ba769e443fc181952297497799c7babfe750a8": "2b40b80501d8274fa57bfcbf9f2f0267",
".git/objects/95/638f1b3508d1d1aedc756c523c89d6c44852cd": "ea934e33dc63cdf9549c649c8c69fb59",
".git/objects/99/a3abbe493e786ca07deb8d05877f517468f10c": "c12452f650d68c8d5c7a98155cd29078",
".git/objects/9a/42021ed4f091678851fbcb6233e18382cfa586": "9230f4607a767f558253a8b6eca4cc14",
".git/objects/9b/781a1b4aafcdc167b38ff6bbe7f9525f46c007": "d4e22f884f22a8da0f03134527e2baa6",
".git/objects/9b/c0efe17a120ec6c80d54d9b5bb9c6054a44fb5": "6ac75b232a1d527eeadde0fc1f9f675c",
".git/objects/9f/df98c9f26aaad73752f59f06951f18c46d4f48": "ce58b3a5c530998cb7473fe375c8f0c4",
".git/objects/a0/df7755c73a15825e3323a55436ca5699a6cfcb": "787ff2ed5f245765e9efa540c77c2320",
".git/objects/a1/20cc89963b9f7f3fbe34d62e3a38eab399d8a8": "d9f0ee9ee5a74798e38c8ead1f390d31",
".git/objects/a1/25c075de8871398ba39a879e02b14eb05e42ff": "c25bd77156e64aa652873cbbabc17ab1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/eea7bebbfe263ea1560d66f7253f94c1aabdf6": "3e8c00768b716676a4beea818e7025a8",
".git/objects/a2/5a9de19998ae19c1dd3be8e72590db6f5c9f13": "804d01969bf77748ef398a7abada5835",
".git/objects/a4/9a4f4346a7960616ef8c14e4cf698b311606b2": "01c569a522b9425a678722bb2ab47687",
".git/objects/a5/c490ba888c356c431cbad19a501589cb1840f7": "1bf83493b1bcd2333b19d55094e89098",
".git/objects/a8/08f2d6fcf7145c039487a523c6cd4f28c6141f": "799b61fc840d48b4dc7b31709f69e8c9",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/05578a4a889d9dff555034fab5424bd7828a7a": "07dae83ee8d68e9bae13b68a49ecd63a",
".git/objects/ac/2395c06fa4e1eee9ccace6b6dab7c5afc2e9df": "19f9286f5459ef3db9f509fd250d16ca",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/af/d7f0a83dfa059c098aa65ef2df83aa11de2a7f": "42083a6c7f379ff60cf15f66860e0188",
".git/objects/b2/c9677a21ad9b7a39f67f5d81a33bb4abc579d0": "ca9eb0232dd8c425f4538606cf5c444d",
".git/objects/b3/d8adf112e9c509a63d489fcf064dc072c5647b": "6d7048f5f88cd7f193d91f1f2d26bae3",
".git/objects/b5/0281cd4c462424a3c7e6381ed2fd999f95856f": "c8fba4b7ef09b61f899b66059861ab8c",
".git/objects/b5/29998151ccb2b130bde6be054db40075888b95": "bbe7ddc2a019104bd234a17903f8117e",
".git/objects/b5/31de7aba6fae9f01c7231dfc7fe6932f2e545a": "ea4f26f4809d2836ac1e63c387ff114b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e542a7110ad6a326dbe3b30bf45c4489a9710f": "9a2c9fc3a80bdee98280072bd2737a72",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/3bc6f49bb38a0a76afd6c1ce4fa8efb7bdf455": "ce186b883e00223a8d3d9b3e0a0bb08d",
".git/objects/bd/0953666783780d46ff0de3f44762a0b89447f5": "07eca90cd7ea47994ca263ebcd3b6e8e",
".git/objects/be/4a4f6156d4471d913acb72f9297be9c1019005": "91160dcc6c1a75ef7525dfecf9885b6e",
".git/objects/be/9f558c87d5e880e6186a01b40c23c89f7870bd": "b9fc4106182a4c44e4467c0ec7bba6bf",
".git/objects/bf/0bbe67b795d92de94eeb0995e97cb4af03005a": "299659fb3d7a99700f03ae654c4ba7e5",
".git/objects/bf/1da26a4520d04734f06e90929f068a5ca4382f": "05ea4e5f379b57b2c30edfb91233143a",
".git/objects/bf/36359470659330820877fd9910525b48242937": "fd69e6a786e0578ffbe13e76c8e7c97a",
".git/objects/bf/7e1cb02db91ba4f61dad5d5e21e45de92a2848": "15f050dcb6bc897d91530cec9c657795",
".git/objects/c1/46144826caab31c164722c37ceb7e51f6a0955": "9b16bfc3b2536814aa3054ae2dc102f1",
".git/objects/c1/4ed5500829e0c62a0395d44dfcdfe69acc8edc": "c6fa3a2d0b91286d1ae436145c545207",
".git/objects/c4/cb4265caf0c9cebbe11cdcd401f11c8703a6de": "75198bea1aae888d23fb56035901d6c2",
".git/objects/c4/d59a251b71fc9306b67caa34e5e2122b033ca3": "5ca3aed58a6eb4f627aedf9d684df92d",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/c8/3e8b044f191a958c23cfc98198a012f583f49e": "aeebafd800cee6af3dc5fe54187fa8b5",
".git/objects/cc/9e2c7b20d9dc8c788b97cc2aa9679fa91606a7": "54945a610340667a8c92f1035db4a648",
".git/objects/d1/d77d60b30c605e62a06db36d8cf68986579bc1": "b291a5712212277e72f3481b4131fbd8",
".git/objects/d3/1f9241b5f873d9e6fe4d7ccce1ba0f5418e04e": "30fca9b263ca746c25a00d46495c90f2",
".git/objects/d4/629871ac0f36a3fb6e0f171e16ce5e3184311b": "6759643be529be86bf5d37adeaacb35a",
".git/objects/d4/bde98ccf6e0c285ab82fff3caff98efa741429": "4744cc3688f1f16501cb6bca7b9c9d17",
".git/objects/d5/9154b788a58684761f078f2a7aec43f2dbd9a2": "10921081862575a6ce64725d6b6f3472",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/eb279bae1f2329d907f27abe84f76e45a6448a": "8bb84d5e211dc56b5710e1f3c73439db",
".git/objects/d9/8a92ffdfcec6a2fdc2ddca781667abf359487e": "7ccae4906c6474fefb56db9c2eb89a84",
".git/objects/dc/946e1b92bf38f3f8b4a76bff2590576e411130": "3a99b27967dfc05ad84ae0d760d489d0",
".git/objects/dc/99626c2ef7411f1c3b28f588da7a921c5337a1": "64fb4cbb9e172db8fe35d071f9c44159",
".git/objects/dd/0276f18eaba26041f26d71100da346ddef7b64": "9896747f1c85a79e53a52a81aa575a64",
".git/objects/de/f0f74be8e5372b1c55f1bcb533d6b4ae6eca4a": "bcfa038d35445ff1621817c7fdc6e970",
".git/objects/df/71f0557d15dfce21136ba53c24084c425eb72a": "e76d46cd623a058c8b6094e57df84e40",
".git/objects/e2/514c2c7e1281306ae74c3a6d9273b71c092c54": "5281a637e21d3004dd1f34a50cb35188",
".git/objects/e2/db4d38f9d084fc44315476f56e612573db10ba": "d8c9500a3a3bcf3fdf056a3cecee7754",
".git/objects/e4/89a2c4f6b77606158c19a130cdbe3dbfe20007": "cd84db18a1989c6db4ba6a49578e0b41",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ae0c50fdf280d7dafd1d1873df83843162b9f7": "5819ee6542df65c999a8da9fe871b229",
".git/objects/e6/354928a83bf1b2839647ecab45f0ce9d78c6c8": "ba16afb440443e70c2f26bbf365ce9e7",
".git/objects/e9/81e030549911518ef63b6643ff82cf8a34db30": "2c4bd17089411bba0fa28454ee4cc149",
".git/objects/eb/3c1a62614ca3126a0404441096abc02d15c210": "78fd905faae4cc340425bda76b810750",
".git/objects/eb/41ca703c8764c033709d5c4f39938d02ad484f": "4c5d1b1cb49680b1c64c118d22a30263",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0761dc938897ae640bbf70afaf95b370a324c6": "0faf50ec411710fad3da99b33b96e4be",
".git/objects/ed/18cd089aa97f556dc1679170a65422325865c2": "a6b5d780bfb69ac3660d319610f00576",
".git/objects/ef/681d51ec77f50f6abe68fde1289d6aa9c7a47c": "76bf3fc6c4b6c6e0a6905c53ce607def",
".git/objects/ef/c032998566fe80de3742be9c8a16922a379249": "5af9eb8e73db69111fd1be8a8ec8980b",
".git/objects/f7/5743adfc71cd4c93fef05a100201213180de57": "58a73492421f5bd00158d9ef95673df9",
".git/objects/f7/9c9ccc66f9d8b393760c900533cbc5b67fc076": "0c927ae903dee8f77699156597259c79",
".git/objects/f7/f03dce881c6ed82a8d514d82a7bed4ab9964fe": "f86c964bed59c8bc7e5446a821e09989",
".git/objects/fa/0140acfd25e5ce56f9941954343f6e3c563564": "5fe52c823a5016721a8c6b5f8300e4e7",
".git/objects/fa/cccf4e2eb3aa46ffd3d7d2fa6f19e554027b4b": "93415e123a6d6bb9eb82324d2d317046",
".git/objects/fb/63ea0d428ea3ba5d3751901e2cd86f6c53c84c": "0a03c73c1fa7794813fd1bb083429c8d",
".git/objects/fe/ea19a2416134c0a6cd7b69a9e65af900973c96": "62a9ce445eda1e15e2ecfdbff04bb9ad",
".git/objects/ff/7747fc02c82842e84279ea3ee39e9f1d5d7205": "e8b2147844ab0b6529d0a7ac7cb1cf0e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "858ba80665011a9e7bda1c2d7ea3fcca",
".git/refs/remotes/origin/master": "858ba80665011a9e7bda1c2d7ea3fcca",
"assets/AssetManifest.json": "6e8c4ad6254c748b7b337cdd5963c5b4",
"assets/assets/fonts/Raleway-Black.ttf": "38b405eba92acbb5aef45d8152f2a736",
"assets/assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "c9503ab0f939e9d37fcfb59b25acf8b3",
"assets/assets/fonts/Raleway-ExtraLight.ttf": "3d22c4cbf0bbf560dbc16342b6bdccd4",
"assets/assets/fonts/Raleway-Light.ttf": "6c084270ccdeb72fd9f5a5144cea628f",
"assets/assets/fonts/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway-SemiBold.ttf": "8a192102b50118c45033e53ce897f103",
"assets/assets/fonts/Raleway-Thin.ttf": "07ac22f3d71e66a0799703116b533ac5",
"assets/assets/images/about%2520me.png": "45fc53cef099ef7871af5d4097892031",
"assets/assets/images/bnwCover.png": "879af40606ae33109325e426d992336e",
"assets/assets/images/eduLines.png": "892853aa67b02bf21b44170f39e624ee",
"assets/assets/images/github.png": "f4c9b1eb7b7e7bb13aff444930b062bd",
"assets/assets/images/github_pressed.png": "778a1db2bcce2557e3dcce3535e364c2",
"assets/assets/images/gmail.png": "f31e2d037418bade89c6451ecf65199c",
"assets/assets/images/gmail_pressed.png": "26a6dfdfb0fdac142f2f6a2296328105",
"assets/assets/images/home.png": "5d79b3847af4562b4720644032cbfb05",
"assets/assets/images/ig.png": "beb0cea625c9effc9282304a6f4462b0",
"assets/assets/images/ig_pressed.png": "73ba9107ca6de6288e9034d98ccbe191",
"assets/assets/images/linkedin.png": "ba4402e42dc318907d935afde04add9d",
"assets/assets/images/linkedin_pressed.png": "b1f47f33f7b8b2cb9bffae4b5fd986fc",
"assets/assets/images/portfolio.png": "c65ed62bdd64c2f5143cb7e91679aec6",
"assets/assets/images/skills%2520and%2520certifications.png": "9385fdc5f4c821f0a4a6b8da57f60f4c",
"assets/assets/images/wa.png": "e27964cb1505ac1f9084efaa05c68f46",
"assets/assets/images/wa_pressed.png": "7e288f0a45ed2de90d538af0b1b000d3",
"assets/FontManifest.json": "fc4c983ea8a2d68243204a1779fb596d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cb4c3fb257d325fa1071941430d3d04f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2b18881bcc0f48162d31a1a34832b97e",
"/": "2b18881bcc0f48162d31a1a34832b97e",
"main.dart.js": "391ec89e4e09a019959c7b5bfcab9d51",
"manifest.json": "a479ab087b1d23deb66594b2965a376e",
"version.json": "90ab06358b8788b9d44109322102af1b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

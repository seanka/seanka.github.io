'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e5a9202b1d6c72f85a90fa36539b0220",
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
".git/index": "92fb754b90a6cb43b53bee3b5e91cb6d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f6665d674a75ac1d524805fe160d2aa",
".git/logs/refs/heads/master": "7f6665d674a75ac1d524805fe160d2aa",
".git/logs/refs/remotes/origin/master": "2ac75ec35f1fbf388aec983abfcb32ed",
".git/objects/09/04f607641b2307998d2a33dee672f8abcb914f": "3110ef060d7641a8be6b5d7664bfb595",
".git/objects/09/cfd6387184021c00397793b8fc2a56d4a25d10": "ac1566ba4feb2aeac36364c010b21a6e",
".git/objects/0b/aeed2577cadd44d7b95d649bd6c38707f00174": "3a87015688932786a760b56edf8fd7a6",
".git/objects/11/c09f2d33b3c6c7a55094928a775fa0f3036236": "981079f3d14b2d181e63a1c2ce82cb5f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/f0d08b78334c20ba5ff9ff9804cadf1f3f60a0": "c82d184055174fef7e1511e30d5bed6a",
".git/objects/49/c2619af96e492b9e0a5a778e303e768baeac44": "b3a8e31e40a3f5420e1a804229513e90",
".git/objects/4a/ecf3b2273d29c536b8c368e4fe2b4e977c9c2e": "3d1ff4e154c43954da43f8c4334a6a9b",
".git/objects/54/453d60066c30c63c8279442c96da3302bbe995": "d22423257403a263c09292908d9a12dd",
".git/objects/5b/8635f3baf64589c446280def3a08050b42e17d": "3f59ffe243b00a75e59fcab27c2437e5",
".git/objects/6d/895efc236bb7ef76d5d9de859800a77745d4ef": "702b3cccb2273504a4c70781b3134481",
".git/objects/76/c7e5650fcb704ee79599d3f39b234789f3bc06": "36f4fb764c8fafbd896fcc00b9db4e9d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/f9565ce7036d9fcb75049e12345648346e1fc3": "312fc2dcfad94b4ab68a4a6c203ebb2e",
".git/objects/80/65fcc8eb6c91dd788acc3d2d19f8e937649fa0": "66a0f72bc1dfea3ea47f0dba81e12542",
".git/objects/81/8dfb01ecfb7621c69bebf64b938c6ced93fc78": "e3d3601f6246e375e6a5c2564f7690c6",
".git/objects/82/f720ff6758bae2bf149cb7f69541be0030d928": "ce9eef4b70535cb752419c7dde05d0f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f91b7cc04bc95393c77fa58ab5b550d5800a71": "fea9bbd1538e59ac8b81e5c8a7b55853",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/08770a026b57c8bfd9de1232d825dbd05826bc": "20e21f80a4337ac05b124a56d8ad18f0",
".git/objects/a1/25c075de8871398ba39a879e02b14eb05e42ff": "c25bd77156e64aa652873cbbabc17ab1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/08f2d6fcf7145c039487a523c6cd4f28c6141f": "799b61fc840d48b4dc7b31709f69e8c9",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/2395c06fa4e1eee9ccace6b6dab7c5afc2e9df": "19f9286f5459ef3db9f509fd250d16ca",
".git/objects/b5/31de7aba6fae9f01c7231dfc7fe6932f2e545a": "ea4f26f4809d2836ac1e63c387ff114b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/46144826caab31c164722c37ceb7e51f6a0955": "9b16bfc3b2536814aa3054ae2dc102f1",
".git/objects/c4/cb4265caf0c9cebbe11cdcd401f11c8703a6de": "75198bea1aae888d23fb56035901d6c2",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/d4/bde98ccf6e0c285ab82fff3caff98efa741429": "4744cc3688f1f16501cb6bca7b9c9d17",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/f0f74be8e5372b1c55f1bcb533d6b4ae6eca4a": "bcfa038d35445ff1621817c7fdc6e970",
".git/objects/e2/514c2c7e1281306ae74c3a6d9273b71c092c54": "5281a637e21d3004dd1f34a50cb35188",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ae0c50fdf280d7dafd1d1873df83843162b9f7": "5819ee6542df65c999a8da9fe871b229",
".git/objects/e9/81e030549911518ef63b6643ff82cf8a34db30": "2c4bd17089411bba0fa28454ee4cc149",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/681d51ec77f50f6abe68fde1289d6aa9c7a47c": "76bf3fc6c4b6c6e0a6905c53ce607def",
".git/objects/f7/9c9ccc66f9d8b393760c900533cbc5b67fc076": "0c927ae903dee8f77699156597259c79",
".git/refs/heads/master": "26730459c7113cd970a9faf7f642d893",
".git/refs/remotes/origin/master": "26730459c7113cd970a9faf7f642d893",
"assets/AssetManifest.json": "e1b1c55403b9e54fd24481753ec0762d",
"assets/assets/fonts/Sen-Regular.ttf": "c92d05ebbdb4c63d69dc1c119a69e0ee",
"assets/assets/images/cover.png": "c8db4c5feb2d5d1b447133b17c77329a",
"assets/FontManifest.json": "ddb38bd6836b87a6ae85161dc01c3f3d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8b5f0b8e497484f7604f333baa4fbc5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7347247ea0e17fb9ecc0a4828f083ff9",
"/": "7347247ea0e17fb9ecc0a4828f083ff9",
"main.dart.js": "aa548c760733258feac9e3b46cf3ef4b",
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

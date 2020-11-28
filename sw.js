const STATIC_CACHE_NAME = "cripto-preto-1.0.0";
const ASSETS = [
  "/",
  "./app.js",
  "./index.js",
  "./Fusion_charts_render.js",
  "./Fetch_the_value_of_Bitcoin.js",

  "./estados-unidos.svg",
  "./brasil.svg"
];

// install event
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(STATIC_CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    })
  );
 });

// activate event
self.addEventListener("activate", function (e) {
  console.log("service worker %cactivated","color: green");
  e.waitUntil(
    caches.keys().then(keys => {
      // console.log("keys: ", keys);
      return Promise.all(keys
        .filter(key => key !== STATIC_CACHE_NAME)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", function (e) {
  // console.log("fetch event", e);
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      return cacheRes || fetch(e.request);
    })
  );
});

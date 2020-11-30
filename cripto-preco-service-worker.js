const STATIC_CACHE_NAME = "cripto-preco-v1.0.2";
const ASSETS = [
  "/cripto-preco/",
  "/cripto-preco/app.js",
  "/cripto-preco/index.js",
  "/cripto-preco/index.html",
  "/cripto-preco/brasil.svg",
  "/cripto-preco/estados-unidos.svg",
  "/cripto-preco/Fusion_charts_render.js",
  "/cripto-preco/Fetch_the_value_of_Bitcoin.js"
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
  console.log("service worker %cactivated!", "color: green");
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== STATIC_CACHE_NAME)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      return cacheRes || fetch(e.request);
    })
  );
});

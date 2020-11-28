self.addEventListener("install", function(e) {
 e.waitUntil(
   caches.open("cripto-preco").then(function(cache) {
     return cache.addAll([
       "/cripto-preco/",
       "/cripto-preco/index.html",
       "/cripto-preco/index.js",
       "/cripto-preco/app.js",
       "/cripto-preco/site.webmanifest",
     ]);
   })
 );
});

self.addEventListener("fetch", function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

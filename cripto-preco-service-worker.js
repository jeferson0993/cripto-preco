self.addEventListener("install", function(e) {
 e.waitUntil(
   caches.open("cripto-preco").then(function(cache) {
     return cache.addAll([
       "/",
       "/sw.js",
       "/app.js",
       "/index.js",
       "/index.html",
       "/brasil.svg",
       "/estados-unidos.svg",
       "/Fusion_charts_render.js",
       "/Fusion_charts_render.js",
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

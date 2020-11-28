self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/cripto-preco/a2hs/',
       '/cripto-preco/a2hs/index.html',
       '/cripto-preco/a2hs/index.js',
       '/cripto-preco/a2hs/style.css',
       '/cripto-preco/a2hs/images/fox1.jpg',
       '/cripto-preco/a2hs/images/fox2.jpg',
       '/cripto-preco/a2hs/images/fox3.jpg',
       '/cripto-preco/a2hs/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

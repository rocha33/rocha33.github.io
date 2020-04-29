self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([         	 
       'rocha33.github.io/index.html',
       'rocha33.github.io/index.js',
       'rocha33.github.io/style.css',
       'rocha33.github.io/images/fox1.jpg',
       'rocha33.github.io/images/fox2.jpg',
       'rocha33.github.io/images/fox3.jpg',
       'rocha33.github.io/images/fox4.jpg'
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

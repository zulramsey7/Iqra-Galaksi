self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('iqra-cache').then(cache => {
      return cache.addAll([
        '/index.html',
        '/input.css',
        '/output.css',
        '/audio/alif.mp3', // tambah fail penting
        // ...
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

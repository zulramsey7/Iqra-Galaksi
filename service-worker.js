const CACHE_NAME = 'iqra-galaksi-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/output.css',
  '/audio/lagu-latar.mp3',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/manifest.json',
  // Tambah fail penting lain di sini
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

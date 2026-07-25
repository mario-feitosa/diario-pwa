const CACHE_NAME = 'diario-professor-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Passa as requisições para a rede
  event.respondWith(fetch(event.request).catch(() => {
    console.log("Usuário offline");
  }));
});
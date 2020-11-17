/* eslint-disable no-restricted-globals */
var cacheName = 'OnlineGameShop';
var filesToCache = [
  '/images/splash_img.jpg',
  '/images/gamesImg/action-shooter/action-shooter_1.jpg',
  '/images/gamesImg/action-shooter/action-shooter_2.jpg',
  '/images/gamesImg/action-shooter/action-shooter_3.jpg',
  '/images/gamesImg/action-shooter/action-shooter_4.jpg',
  '/images/gamesImg/action-shooter/action-shooter_5.jpg',
  '/images/gamesImg/adventure-rpg/adventure-rpg_1.jpg',
  '/images/gamesImg/adventure-rpg/adventure-rpg_2.jpg',
  '/images/gamesImg/adventure-rpg/adventure-rpg_3.jpg',
  '/images/gamesImg/adventure-rpg/adventure-rpg_4.jpg',
  '/images/gamesImg/adventure-rpg/adventure-rpg_5.jpg',
  '/images/gamesImg/mmorpg/mmorpg_1.jpg',
  '/images/gamesImg/mmorpg/mmorpg_2.jpg',
  '/images/gamesImg/mmorpg/mmorpg_3.jpg',
  '/images/gamesImg/mmorpg/mmorpg_4.jpg',
  '/images/gamesImg/mmorpg/mmorpg_5.jpg',
  '/images/gamesImg/rts/rts_1.jpg',
  '/images/gamesImg/rts/rts_2.jpg',
  '/images/gamesImg/rts/rts_3.jpg',
  '/images/gamesImg/rts/rts_4.jpg',
  '/images/gamesImg/rts/rts_5.jpg',
  '/index.html',
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});

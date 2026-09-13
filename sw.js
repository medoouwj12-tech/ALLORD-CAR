/**
 * ALLORD CAR - Service Worker for Mobile PWA
 * Version 3 - Fast Network-First for Photos & Instant Client Takeover
 */

const CACHE_NAME = 'allord-car-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/translations.js',
  './js/app.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon.svg',
  './assets/icons/apple-touch-icon.png',
  './assets/cars/mercedes-e-class-black-amg.jpg',
  './assets/cars/mercedes-e-class-exclusive.jpg',
  './assets/cars/mercedes-c-class-white-gt.jpg',
  './assets/cars/mercedes-c-class-white-exclusive.jpg',
  './assets/cars/hummer-white-lambo-doors.jpg',
  './assets/cars/hummer-white-side.jpg',
  './assets/cars/range-rover-evoque-white.jpg',
  './assets/cars/chrysler-300c-white-wedding.jpg',
  './assets/cars/chrysler-300c-black-wedding.jpg',
  './assets/cars/mg-zs-blue-wedding.jpg',
  './assets/cars/mg-zs-blue-suv.jpg',
  './assets/cars/mg5-blue-wedding.jpg',
  './assets/cars/mg5-black-wedding.jpg',
  './assets/cars/chevrolet-optra-wedding.jpg',
  './assets/cars/chevrolet-optra-black.jpg'
];

// Install Event - Force Skip Waiting so new SW activates immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ALLORD CAR SW v3] Pre-caching all mobile assets & car photos');
      return cache.addAll(ASSETS_TO_CACHE);
    }).catch((err) => {
      console.warn('[ALLORD CAR SW v3] Pre-cache non-fatal error:', err);
    })
  );
});

// Activate Event - Immediately delete old caches (v1, v2) and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ALLORD CAR SW v3] Deleting stale cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  // Pass WhatsApp and external API requests directly through
  if (event.request.url.includes('wa.me') || event.request.url.includes('whatsapp.com')) {
    return;
  }

  // 1. Network-First for Car Photos and Images (ensures phone always gets real fresh pictures)
  if (
    event.request.destination === 'image' ||
    event.request.url.match(/\.(jpg|jpeg|png|webp|svg|gif)$/i)
  ) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // 2. Stale-While-Revalidate for other shell assets (HTML, CSS, JS)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });

      return cachedResponse || fetchPromise;
    })
  );
});

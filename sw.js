/**
 * ALLORD CAR - Service Worker for Mobile PWA
 * Fast Caching & Offline VIP Limousine Experience
 */

const CACHE_NAME = 'allord-car-v2';
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
  './assets/cars/hummer-white-lambo-doors.jpg',
  './assets/cars/range-rover-evoque-white.jpg',
  './assets/cars/chrysler-300c-white-wedding.jpg',
  './assets/cars/chrysler-300c-black-wedding.jpg',
  './assets/cars/mg-zs-blue-wedding.jpg',
  './assets/cars/mg5-blue-wedding.jpg',
  './assets/cars/mg5-black-wedding.jpg',
  './assets/cars/chevrolet-optra-wedding.jpg'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ALLORD CAR SW] Caching shell assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ALLORD CAR SW] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event (Stale-While-Revalidate with Cache Fallback)
self.addEventListener('fetch', (event) => {
  // Pass WhatsApp and external API requests directly through
  if (event.request.url.includes('wa.me') || event.request.url.includes('whatsapp.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch update in background
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {/* Offline */});

        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        // Cache external fonts & scripts dynamically
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (event.request.url.includes('fonts.googleapis.com') ||
           event.request.url.includes('fonts.gstatic.com') ||
           event.request.url.includes('cdnjs.cloudflare.com'))
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback for HTML navigation
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

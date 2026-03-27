const CACHE_NAME = 'trippingfest-v1';

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/css/main.css',
  '/js/app.js',
  '/js/canvas-engine.js',
  '/js/color.js',
  '/js/input-handler.js',
  '/js/mirror.js',
  '/js/persistence.js',
  '/js/recording.js',
  '/js/ui.js',
  '/js/undo.js',
  '/js/wildwalk.js',
  '/js/strokes/stroke-base.js',
  '/js/strokes/stroke-confetti.js',
  '/js/strokes/stroke-crazy-dots.js',
  '/js/strokes/stroke-dot.js',
  '/js/strokes/stroke-freehand.js',
  '/js/strokes/stroke-full-box.js',
  '/js/strokes/stroke-full-circle.js',
  '/js/strokes/stroke-line.js',
  '/js/strokes/stroke-oval-hollow.js',
  '/js/strokes/stroke-polar-centered.js',
  '/js/strokes/stroke-polar-freehand-centered.js',
  '/js/strokes/stroke-polar-freehand.js',
  '/js/strokes/stroke-polar.js',
  '/js/strokes/stroke-polygon.js',
  '/js/strokes/stroke-random.js',
  '/js/strokes/stroke-rectangle-hollow.js',
  '/js/strokes/stroke-registry.js',
  '/js/strokes/stroke-star.js',
  '/js/strokes/stroke-swirl.js',
  '/js/strokes/stroke-symmetric-line.js',
  '/js/strokes/stroke-target-oval.js',
  '/js/strokes/stroke-target-rect.js',
  '/js/strokes/stroke-target.js',
  '/js/strokes/stroke-transform.js',
  '/js/strokes/stroke-tricky-line.js',
  '/js/strokes/stroke-wave.js',
  '/js/strokes/stroke-windmill.js',
  '/js/strokes/stroke-windshield-wipers.js',
  '/assets/demos/Demo1.png',
  '/assets/demos/Demo1.recording',
  '/assets/demos/Demo2.png',
  '/assets/demos/Demo2.recording',
  '/assets/demos/Demo3.png',
  '/assets/demos/Demo3.recording',
  '/assets/demos/Demo4.png',
  '/assets/demos/Demo4.recording',
  '/assets/demos/Demo5.png',
  '/assets/demos/Demo5.recording',
  '/assets/demos/Demo6.png',
  '/assets/demos/Demo6.recording',
  '/assets/demos/Demo7.png',
  '/assets/demos/Demo7.recording',
  '/assets/demos/Demo8.png',
  '/assets/demos/Demo8.recording',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});

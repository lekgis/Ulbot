const CACHE_NAME = 'Ulbot-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/icons/lb.ico'
];

// ติดตั้งครั้งแรก - แคชไฟล์
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// ดึงข้อมูล - ใช้แคชก่อน ถ้าไม่มีค่อยโหลดจากเน็ต
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );

});

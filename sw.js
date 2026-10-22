// Guarda la app al instalar y después la sirve sin red. Cambia VERSION en cada publicación.
const VERSION = '0.4.0';
const CACHE = 'captura-' + VERSION;
const ARCHIVOS = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  // cache 'reload': sin esto el navegador puede guardar el index.html viejo de su propia caché HTTP bajo la versión nueva
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('captura-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Primero la copia guardada; la red solo si falta algo (nunca para datos: la app no tiene servidor).
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});

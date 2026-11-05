// Only the generic offline page is cached. Never cache Supabase responses,
// customer details, authenticated HTML, tokens or reservation requests.
const CACHE = 'crm-employee-offline-v2-leah';
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.add('/app/offline.html')));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('crm-employee-offline-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.mode !== 'navigate' || event.request.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith('/app/')) return;
  event.respondWith(fetch(event.request).catch(() => caches.match('/app/offline.html').then(response => response || new Response('Conéctate a internet para abrir el CRM.', {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}}))));
});

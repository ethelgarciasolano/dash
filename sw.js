const dataCacheName = 'pwa-test-data';
const cacheName = 'pwa-test';
const filesToCache = [
  "/",
  "static/templates/index.html",
  "static/templates/actividades.html",
  "static/templates/beneficiarios.html",
  "static/templates/contacto.html",
  "static/templates/file.html",
  "static/templates/header.html",
  "static/templates/mapa.html",
  "static/templates/tata.html",
  "static/templates/tato.html",
  "static/css/style.css",
  "static/css/base.css",
  "static/css/c3.css",
  "static/css/c3.min.css",
  "static/css/font-awesome.min.css",
  "static/css/responsive.css",
  "static/css/table.css",
  "static/js/base.js",
  "static/js/bootstrap.min.js",
  "static/js/c3.esm.js",
  "static/js/c3.js",
  "static/js/c3.min.js",
  "static/js/contact.js",
  "static/js/jquery.min.js",
  "static/js/main.js",
  "static/js/popper.js",
  "static/js/table.js",
  "static/js/table1.js",
  "static/style/fuente.js",
  "static/images/acopilogo.png",
  "static/images/city.png",
  "static/images/COORDENADAS_2.png",
  "static/images/COORDENADAS_3.png",
  "static/images/COORDENADAS_4.png",
  "static/images/COORDENADAS_5.png",
  "static/images/COORDENADAS_6.png",
  "static/images/COORDENADAS_7.png",
  "static/images/correo.png",
  "static/images/instagram.png",
  "static/images/juventud.png",
  "static/images/reloj.png",
  "static/images/tierra.png",
  "static/images/web.png",
  "static/images/yuca.png",

]



  self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open(cacheName).then(function (cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
    );
  });
  
  
  self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== cacheName && key !== dataCacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
    );
    return self.clients.claim();
  });
  
  
  self.addEventListener('fetch', function (e) {
    //console.log("fetch! ", e.request);
    e.respondWith(
      caches
        .match(e.request)
        .then((res) => {
          return res || fetch(e.request);
        })
        .catch(console.log)
    );
    //   e.waitUntil(response);
  });
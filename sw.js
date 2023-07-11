const dataCacheName = 'pwa-test-data';
const cacheName = 'pwa-test';
const PRECACHE = 'pwa-test';
const RUNTIME = 'runtime';
const filesToCache = [
  "/",
  "actividades",
  "beneficiarios",
  "frame",
  "mapa",
  "contacto",
  'static/resources/maps_main.css',
  'static/resources/ol.css',
  'static/resources/ol-layerswitcher.css',
'  static/resources/qgis2web.css',
'static/resources/loading.css',
  'static/resources/qgis2web_expressions.js',
  'static/resources/polyfills.js',
  'static/resources/functions.js',
  'static/resources/ol.js',
  'static/resources/ol-layerswitcher.js',
  "templates/index.html",
  'static/data/municipio.js',
  'static/data/layers.js',
  'static/resources/Autolinker.min.js',
  'static/resources/qgis2web.js',
  "templates/actividades.html",
  "templates/beneficiarios.html",
  "templates/contacto.html",
  "templates/file.html",
  "templates/header.html",
  "templates/mapa.html",
  "templates/tata.html",
  "templates/tato.html",
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
  "static/styles/fuente.js",
  "static/images/acopilogo.png",
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
  'static/manifest.json',
  "static/images/city.png",
  "static/images/icons/beerjs-logo.png",
  "static/images/icons/icon-192x192_.png",
  "static/images/icons/icon-256x256_.png",
  "static/images/icons/icon-384x384_.png",
  "static/images/icons/icon-512x512_.png",


]



//   self.addEventListener('install', function (e) {
//     console.log('[ServiceWorker] Install');
//     e.waitUntil(  
//       caches.open(cacheName).then(function (cache) {
//         console.log(cache)
//         console.log('[ServiceWorker] Caching app shell');
//         return cache.addAll(filesToCache);
//       })
//     );
//   });
  
  
// // The activate handler takes care of cleaning up old caches.
// self.addEventListener('activate', event => {
//   console.log('activate')
//   const currentCaches = [PRECACHE, RUNTIME];
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
//     }).then(cachesToDelete => {
//       return Promise.all(cachesToDelete.map(cacheToDelete => {
//         return caches.delete(cacheToDelete);
//       }));
//     }).then(() => self.clients.claim())
//   );
// });
  

// self.addEventListener('fetch', event => {
//   console.log('fetch')
//   // Skip cross-origin requests, like those for Google Analytics.
//   if (event.request.url.startsWith(self.location.origin)) {
//     event.respondWith(
//       caches.match(event.request).then(cachedResponse => {
//         if (cachedResponse) {
//           return cachedResponse;
//         }

//         return caches.open(RUNTIME).then(cache => {
//           return fetch(event.request).then(response => {
//             // Put a copy of the response in the runtime cache.
//             return cache.put(event.request, response.clone()).then(() => {
//               return response;
//             });
//           });
//         });
//       })
//     );
//   }
// });

  // self.addEventListener('fetch', function (e) {
  //   console.log("fetch! ", e.request);

  //   e.respondWith(
  //     caches
  //       .match(e.request)
  //       .then((res) => {
  //         return res || fetch(e.request).catch((error) => {
       
  //           console.log(e.request.caches)
  //           console.log(error)
  //         });
  //       })
      
  //   );
  //     // e.waitUntil(response);
  // });



  // window.addEventListener('load', () => {
  //   const status = navigator.onLine;

  //   console.log('load')

  //   const currentCaches = [PRECACHE, RUNTIME];
  //   event.waitUntil(
  //     caches.keys().then(cacheNames => {
  //       return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
  //     }).then(cachesToDelete => {
  //       return Promise.all(cachesToDelete.map(cacheToDelete => {
  //         return caches.delete(cacheToDelete);
  //       }));
  //     }).then(() => self.clients.claim())
  //   );


  // });

  // self.addEventListener('fetch', function (e) {
  //   console.log("fetch! ", e.request);

  //   e.respondWith( 
    
  //         fetch(e.request).then(response => {return response }).catch((error) => {
       
  //                     console.log(e.request.caches)
  //                     console.log(error)
  //                   })

  //         // console.log('tiene');
  //         // caches.open(cacheName).then((cache) => {
  //         // cache.delete(filesToCache);
  //         // cache.addAll(filesToCache);
        
  //       )


  //     })


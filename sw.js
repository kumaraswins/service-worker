
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  'jq.js',
  'main.css',
  'main.js',
];

self.addEventListener('install', function (event) {
    
    //Here you can see we call caches.open with our desired cache name, after this we call cache.addAll and pass in our array of files. This is a chain of promises (caches.open and cache.addAll). event.waitUntil takes a promise and uses it to know how long installation takes, and whether it succeeded. 
    //This will execute only once
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('Opened cache'); 
            return cache.addAll(urlsToCache);
        })
    );
});



self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            return response;
          }
        );
      })
    );
});
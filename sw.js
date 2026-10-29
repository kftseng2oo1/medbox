var C='yaoguanjia-v1',F=['./','./index.html','./icon.svg','./manifest.json'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F);}).catch(function(){}));self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C;}).map(function(x){return caches.delete(x);}));}));self.clients.claim();});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET'||e.request.url.indexOf(self.location.origin)!==0)return;
e.respondWith(fetch(e.request).then(function(r){var c2=r.clone();caches.open(C).then(function(c){c.put(e.request,c2);});return r;}).catch(function(){return caches.match(e.request);}));});

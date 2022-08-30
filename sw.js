const DATA={
  version:"v0.0.0-ALPHA",
  filesToCache:[
    "/index.html",
    "/script.js",
    "/style.css",
    "/src/coder.js",
    "/src/debug.js",
    "/src/ui.js",
    "/src/jsondata/encformats.json",
    "/src/libs/ffmpeg.min.js"
  ]
}
self.addEventListener('install',e=>
                      {console.info("SERVICE WORKER: INSTALL EVENT");
                       	e.waitUntil(caches.open(DATA.version).then(cache=>{console.info(`Service Worker: CACHING FILES: ${cache}`);
                                                                          cache.addAll(DATA.filesToCache).then(()=>self.skipWaiting())}))
					   ;console.info("SERVICE WORKER: INSTALL EVENT FINISHED")})
self.addEventListener('activate',e=>{console.info("SERVICE WORKER: ACTIVATE EVENT");
									 e.waitUntil(caches.keys().then(cacheNames=>{return Promise.all(cacheNames.map(cache=>{if(cache!=DATA.version){console.info('SERVICE WORKER: CLEARING OLD CACHE');return caches.delete(cache)}}))}));
									 console.info("SERVICE WORKER: ACTIVATE EVENT FINISHED")})
self.addEventListener('fetch',e=>{console.info(`SERVICE WORKER: FETCHING "${e.request}"`);
								  e.respondWith(fetch(e.request).then(res=>{const resClone=res.clone();
																			caches.open(DATA.version).then(cache=>{cache.put(e.request,resClone)});
																			
return res}).catch(err=>caches.match(e.request).then(res=>res)))});

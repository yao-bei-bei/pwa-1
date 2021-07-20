importScripts("/pwa-1/precache-manifest.80060960360ef482a5c3b70ccff2a30f.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts('https://unpkg.com/dexie/dist/dexie.js');
// 设置相应缓存的名字的前缀和后缀
workbox.core.setCacheNameDetails({
    prefix: 'pdf-image-vue-cache',
    suffix: 'v1.1.1',
})
// 缓存web的css资源
workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // 使用缓存，但尽快在后台更新
    workbox.strategies.staleWhileRevalidate({
        // 使用自定义缓存名称
        cacheName: 'css-cache'
    })
);

// 缓存web的js资源
workbox.routing.registerRoute(
    // 缓存JS文件
    /.*\.js/,
    // 使用缓存，但尽快在后台更新
    workbox.strategies.staleWhileRevalidate({
        // 使用自定义缓存名称
        cacheName: 'js-cache'
    })
);

// 缓存web的图片资源
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 1 * 24 * 60 * 60 // 设置缓存有效期为30天
            })
        ]
    })
);

// 我们很多资源在其他域名上，比如cdn、oss等，这里做单独处理，需要支持跨域
workbox.routing.registerRoute(
    /^https:\/\/cdn\.my\.com\/.*\.(jpe?g|png|gif|svg)/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cdn-images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 1 * 24 * 60 * 60 // 设置缓存有效期为5天
            })
        ],
        fetchOptions: {
            credentials: 'include' // 支持跨域
        }
    })
);

//缓存get api请求的数据
workbox.routing.registerRoute(
    new RegExp(/.*/),
    workbox.strategies.networkFirst({
        cacheName: 'api'
    })
);

// 缓存post api请求的数据
const bgSyncPlugin = new workbox.backgroundSync.Plugin('apiQueue', {
  maxRetentionTime: 1 * 60
});

workbox.routing.registerRoute(
    /.*/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);




// Listen to fetch requests
self.addEventListener('fetch', function(event) {
    // We will cache all POST requests, but in the real world, you will probably filter for
    // specific URLs like if(... || event.request.url.href.match(...))
    if(event.request.method === "POST"){

        // Init the cache. We use Dexie here to simplify the code. You can use any other
        // way to access IndexedDB of course.
        var db = new Dexie("post_cache");
        db.version(1).stores({
            post_cache: 'key,response,timestamp'
        })

        event.respondWith(
            // First try to fetch the request from the server
            fetch(event.request.clone())
                .then(function(response) {
                    // If it works, put the response into IndexedDB
                    cachePut(event.request.clone(), response.clone(), db.post_cache);
                    return response;
                })
                .catch(function() {
                    // If it does not work, return the cached response. If the cache does not
                    // contain a response for our request, it will give us a 503-response
                    return cacheMatch(event.request.clone(), db.post_cache);
                })
        );
    }
})

/**
 * Serializes a Request into a plain JS object.
 *
 * @param request
 * @returns Promise
 */
function serializeRequest(request) {
    var serialized = {
        url: request.url,
        headers: serializeHeaders(request.headers),
        method: request.method,
        mode: request.mode,
        credentials: request.credentials,
        cache: request.cache,
        redirect: request.redirect,
        referrer: request.referrer
    };

    // Only if method is not `GET` or `HEAD` is the request allowed to have body.
    if (request.method !== 'GET' && request.method !== 'HEAD') {
        return request.clone().text().then(function(body) {
            serialized.body = body;
            return Promise.resolve(serialized);
        });
    }
    return Promise.resolve(serialized);
}

/**
 * Serializes a Response into a plain JS object
 *
 * @param response
 * @returns Promise
 */
function serializeResponse(response) {
    var serialized = {
        headers: serializeHeaders(response.headers),
        status: response.status,
        statusText: response.statusText
    };

    return response.clone().text().then(function(body) {
        serialized.body = body;
        return Promise.resolve(serialized);
    });
}

/**
 * Serializes headers into a plain JS object
 *
 * @param headers
 * @returns object
 */
function serializeHeaders(headers) {
    var serialized = {};
    // `for(... of ...)` is ES6 notation but current browsers supporting SW, support this
    // notation as well and this is the only way of retrieving all the headers.
    for (var entry of headers.entries()) {
        serialized[entry[0]] = entry[1];
    }
    return serialized;
}

/**
 * Creates a Response from it's serialized version
 *
 * @param data
 * @returns Promise
 */
function deserializeResponse(data) {
    return Promise.resolve(new Response(data.body, data));
}

/**
 * Saves the response for the given request eventually overriding the previous version
 *
 * @param data
 * @returns Promise
 */
function cachePut(request, response, store) {
    var key, data;
    getPostId(request.clone())
        .then(function(id){
            key = id;
            return serializeResponse(response.clone());
        }).then(function(serializedResponse) {
        data = serializedResponse;
        var entry = {
            key: key,
            response: data,
            timestamp: Date.now()
        };
        store
            .add(entry)
            .catch(function(error){
                store.update(entry.key, entry);
            });
    });
}

/**
 * Returns the cached response for the given request or an empty 503-response  for a cache miss.
 *
 * @param request
 * @return Promise
 */
function cacheMatch(request) {
    return getPostId(request.clone())
        .then(function(id) {
            return store.get(id);
        }).then(function(data){
            if (data) {
                return deserializeResponse(data.response);
            } else {
                return new Response('', {status: 503, statusText: 'Service Unavailable'});
            }
        });
}

/**
 * Returns a string identifier for our POST request.
 *
 * @param request
 * @return string
 */
public function getPostId(request) {
    return JSON.stringify(serializeRequest(request.clone()));
}

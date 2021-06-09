/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/github/hexo-blog/public/404.html","ecac2e52b866ad558b43a365b8dca733"],["D:/github/hexo-blog/public/about/index.html","1da3449a470ff8683b1056176a185840"],["D:/github/hexo-blog/public/archives/2020/05/index.html","69d0113cb60b82f641b239a035e4cec2"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","82147e76a46baf95a21a125d61ebd5bf"],["D:/github/hexo-blog/public/archives/2020/06/index.html","30ebb91a2f528883a365005955438ff9"],["D:/github/hexo-blog/public/archives/2020/07/index.html","e948d7be38299c6759ec899b7b98b51c"],["D:/github/hexo-blog/public/archives/2020/11/index.html","0b5a816ff6b345c1a14c2ef342db6732"],["D:/github/hexo-blog/public/archives/2020/index.html","204394c78a0338b53bf9a751bd094f62"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","df48fefbfb4be7236dc1b73fa297ba75"],["D:/github/hexo-blog/public/archives/2021/01/index.html","80d96f2febc06baa963b8e5d9e59ea37"],["D:/github/hexo-blog/public/archives/2021/04/index.html","983fd9607752ef25cf366f48e6e2e76b"],["D:/github/hexo-blog/public/archives/2021/06/index.html","880b44a48c57282e55ddc204af58e94b"],["D:/github/hexo-blog/public/archives/2021/index.html","71349a01bc14ef1fd35064ccde251caa"],["D:/github/hexo-blog/public/archives/index.html","7344aaa442d290024da4367d7af5f2b2"],["D:/github/hexo-blog/public/archives/page/2/index.html","7344aaa442d290024da4367d7af5f2b2"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","2712b2d7379d6d2a7a7f2548192c7e0a"],["D:/github/hexo-blog/public/categories/index.html","2cf13468da06a3f48f24cb8868c365b4"],["D:/github/hexo-blog/public/categories/前端/React/index.html","162b32c41950201f88aafd08d234e7a0"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","6071ba7d596801b0c6d1dcd9ee21c0dc"],["D:/github/hexo-blog/public/categories/前端/index.html","b14ba049cdb7b2223ffdd8933386db13"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","02536b776371928b244b37f7352433e8"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","d94899a087aabbb62426f631e403cbb9"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","a7eabb4fe419a813b02a3c199832a5be"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","c0d897016b9d43c0d1fd0862e3eadc7f"],["D:/github/hexo-blog/public/categories/效率工具/index.html","a19a80862b1218873a6056dafc3f5ad1"],["D:/github/hexo-blog/public/categories/测试分类/index.html","9b061243912820dd8bce3782254d11e1"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","e3b2a17ab03134d5fa7d8a1fa8c7bcc5"],["D:/github/hexo-blog/public/categories/记录生活/index.html","3c621ce8f3e6ebaafad03052e3840c27"],["D:/github/hexo-blog/public/categories/黑苹果/index.html","5cea194c5ed2850828f10e64ace42377"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","fafd7075804df3b1f22a917bdddf6742"],["D:/github/hexo-blog/public/index.html","d44473d373ebc233134981d21dd7de27"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","06f074ce7ac7bfad9e55b24699fc7422"],["D:/github/hexo-blog/public/page/2/index.html","008ac423e306105a54c9027db4f3e71b"],["D:/github/hexo-blog/public/posts/20802113/index.html","1fe9a24ab41418e65c1b0059c5218e3c"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","e3ed58a25f3727c11eee30bc487c99f0"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","bda098495a938d02f9180de00d941706"],["D:/github/hexo-blog/public/posts/3901d9e/index.html","64968a95c68e321a4d90c09fb63e5131"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","0a2f9d6e3309b4c4ad8b6339e73898d7"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","32d1bf99db75ed7de57876bc4ace255b"],["D:/github/hexo-blog/public/posts/6af865/index.html","2ede7f1b7e8ebe4c1f23c052ba156a67"],["D:/github/hexo-blog/public/posts/829819a3/index.html","dd67774a24effd214c4cef3baaa3708c"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","ca0d4e6c6570bd7070cbc3d794259a9c"],["D:/github/hexo-blog/public/posts/84d16999/index.html","ce26d85e611cca196e00fd554fa7e98f"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","b968f184c6995b751058c88707f1562d"],["D:/github/hexo-blog/public/posts/b050203a/index.html","c2ee0fbf5d3b16027b95448dfac0c35a"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","bc756b5603ba225324489a6434941455"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","d021e79db52ec64cac0496d4735fded6"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","3a92be1a69304a1a509c3a12349f4fb8"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","c4db6676c23ac1d410cb7d0b771a65e0"],["D:/github/hexo-blog/public/posts/f032f0/index.html","993a11fff9668b842748cbd22b63c039"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","d8ec48abd28e162dc47e407ae660455b"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","d1d8ee422aa1781c5236b3fc8a28f410"],["D:/github/hexo-blog/public/posts/ff905629/index.html","3c28ef83218ac64605cc98a4bc821529"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","3c1d0454aa6439455953ee8bf22d2c53"],["D:/github/hexo-blog/public/tags/Hexo/index.html","7358e0e00b67f84fdadc5975af52adc9"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","faaf9c77d522d7459a1b50dd455f0e4c"],["D:/github/hexo-blog/public/tags/Next-js/index.html","44cd5e68946d65e55e9fdd7f9e7da655"],["D:/github/hexo-blog/public/tags/React/index.html","812cbdaeb72dcc9e6a43cfd7c38953cf"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","19fdb1cdc4fb64b482da2f2484c35c48"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","7e612be7709709fefada6ca04d2f8bc8"],["D:/github/hexo-blog/public/tags/Typora/index.html","4f0dda2980992c4632de7b216262796e"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","2c881cc68da4853a1fc3845d70fda5c0"],["D:/github/hexo-blog/public/tags/index.html","3032748aa1d7ff798372eccc6c795f3d"],["D:/github/hexo-blog/public/tags/jwt/index.html","4a711c75f6845602b8524a4f65dfb067"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","1c2241502a77d4123ea42fa1bfb966d2"],["D:/github/hexo-blog/public/tags/博客/index.html","0e2862205e160c522b74c0225660750d"],["D:/github/hexo-blog/public/tags/工作/index.html","02ca8daa57c75c1bd2b722d12a017e0e"],["D:/github/hexo-blog/public/tags/工具/index.html","af50561c4920a1589b0db39ab222b491"],["D:/github/hexo-blog/public/tags/测试标签/index.html","97f45b476abf898a0cae37aa5e98dc0f"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","62c9a22de760ceabbf4265e845a4b31a"],["D:/github/hexo-blog/public/tags/装机/index.html","dd349fee29a2099618fa6f354a58afa1"],["D:/github/hexo-blog/public/tags/记录生活/index.html","a198046968876f8600e0411a5b2e32eb"],["D:/github/hexo-blog/public/tags/部署/index.html","9352f2d066c87800c573ec5bb24f1cf3"],["D:/github/hexo-blog/public/tags/阿里云/index.html","ee5c19cb966c495baeb683cfe5067f6a"],["D:/github/hexo-blog/public/tags/面试题/index.html","1fb7eeab76725ad860e9757d76000219"],["D:/github/hexo-blog/public/tags/黑苹果/index.html","f59598e41bd38252ade25df41eddfd53"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








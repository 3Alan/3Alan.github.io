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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","ecac2e52b866ad558b43a365b8dca733"],["D:/github/hexo-blog/public/about/index.html","1da3449a470ff8683b1056176a185840"],["D:/github/hexo-blog/public/archives/2020/05/index.html","861a64e4f3a7bd2a19d76f1818f9a096"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","fefd716b3786219f7dcd223f05aa18ed"],["D:/github/hexo-blog/public/archives/2020/06/index.html","719fabf79d52c667e232f55b4d60b7a6"],["D:/github/hexo-blog/public/archives/2020/07/index.html","5684d570041134d8f05bb37e5f49b6d1"],["D:/github/hexo-blog/public/archives/2020/11/index.html","d1bddf5c7943c836727380bbc1f900eb"],["D:/github/hexo-blog/public/archives/2020/index.html","2d4d22258c92bddc2a3585631ee3e604"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","fd66ecf97951ec27684211075a8a9036"],["D:/github/hexo-blog/public/archives/2021/01/index.html","eeda4a7f494bb6625b45a58a83913d7f"],["D:/github/hexo-blog/public/archives/2021/04/index.html","4a84d8fefd4e959071ad64e6b44c2dda"],["D:/github/hexo-blog/public/archives/2021/06/index.html","f5b97d289e2869dab52a063bb63269b6"],["D:/github/hexo-blog/public/archives/2021/index.html","7f05f4017e8ccc2991153a6782d29028"],["D:/github/hexo-blog/public/archives/index.html","9569cdf913b3273718f01c8808077c06"],["D:/github/hexo-blog/public/archives/page/2/index.html","9569cdf913b3273718f01c8808077c06"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","4f2f8f0a3c92220091943d753ab0ccdd"],["D:/github/hexo-blog/public/categories/index.html","2cf13468da06a3f48f24cb8868c365b4"],["D:/github/hexo-blog/public/categories/前端/React/index.html","dc26946c8aafccc770230898bd02b203"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","8c5ec3abf8745e939177ff1ad3081fd4"],["D:/github/hexo-blog/public/categories/前端/index.html","67055e10a14a9e9c5c255ee1a6b70925"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","ef99b2cc491276a731d6050d57045265"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","dcdd1a99cc4480ce726ef44be8d5058e"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","a6bdfe5262943687378eb6cc346bedf0"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","0421a5fdb59cc08e84411d27a35cbc14"],["D:/github/hexo-blog/public/categories/效率工具/index.html","96030d09a948b8046dab530123f59f9a"],["D:/github/hexo-blog/public/categories/测试分类/index.html","b0812b364b04f412bdf8687d02a6da1e"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","b35017cb743946a39bf2b80a5d9fe110"],["D:/github/hexo-blog/public/categories/记录生活/index.html","e714ffb28c5ec8e91cab5f231353bc09"],["D:/github/hexo-blog/public/categories/黑苹果/index.html","36e881e9fe001898b6950bbb03cd6a68"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","fafd7075804df3b1f22a917bdddf6742"],["D:/github/hexo-blog/public/google3eaf2926160a7dbd.html","482c4ea21e6d9bde7f18b6727a706558"],["D:/github/hexo-blog/public/index.html","8936f18206d851857b37522d0267c04a"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","31ae375aa27c0401e2d76b8964488251"],["D:/github/hexo-blog/public/page/2/index.html","b45c51185982af8011c74527665526e0"],["D:/github/hexo-blog/public/posts/20802113/index.html","1fe9a24ab41418e65c1b0059c5218e3c"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","e3ed58a25f3727c11eee30bc487c99f0"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","bda098495a938d02f9180de00d941706"],["D:/github/hexo-blog/public/posts/3901d9e/index.html","64968a95c68e321a4d90c09fb63e5131"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","6ad69a61432c9af33e3943f17fdfce42"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","32d1bf99db75ed7de57876bc4ace255b"],["D:/github/hexo-blog/public/posts/6af865/index.html","2ede7f1b7e8ebe4c1f23c052ba156a67"],["D:/github/hexo-blog/public/posts/829819a3/index.html","dd67774a24effd214c4cef3baaa3708c"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","ca0d4e6c6570bd7070cbc3d794259a9c"],["D:/github/hexo-blog/public/posts/84d16999/index.html","ce26d85e611cca196e00fd554fa7e98f"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","1a748bf4b4e0e7268a0d0367b963ab7a"],["D:/github/hexo-blog/public/posts/b050203a/index.html","c2ee0fbf5d3b16027b95448dfac0c35a"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","bc756b5603ba225324489a6434941455"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","d021e79db52ec64cac0496d4735fded6"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","3a92be1a69304a1a509c3a12349f4fb8"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","6c2c1e22ea0e5895b02a7fd149d44c5c"],["D:/github/hexo-blog/public/posts/f032f0/index.html","993a11fff9668b842748cbd22b63c039"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","d8ec48abd28e162dc47e407ae660455b"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","d1d8ee422aa1781c5236b3fc8a28f410"],["D:/github/hexo-blog/public/posts/ff905629/index.html","3c28ef83218ac64605cc98a4bc821529"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","3b9f9b53acc2379e8b659de0017e97f9"],["D:/github/hexo-blog/public/tags/Hexo/index.html","15893659b79bee280d92b7f5828b0eb9"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","2e37545ab322c0ce8156da0fbc08bcfd"],["D:/github/hexo-blog/public/tags/Next-js/index.html","fc583ecb4ff890dcf7d84dd3ab318160"],["D:/github/hexo-blog/public/tags/React/index.html","e42d24f83e782777f1a98d3e71d85903"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","56347733d2b2dd3896ce61b2abd2ca3f"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","29b61405b2321138e3292c0b40002067"],["D:/github/hexo-blog/public/tags/Typora/index.html","a38f599d32d9b107a4822ecab5c58f08"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","96fd8a6bd82258a26207b47f5bf2e5cd"],["D:/github/hexo-blog/public/tags/index.html","3032748aa1d7ff798372eccc6c795f3d"],["D:/github/hexo-blog/public/tags/jwt/index.html","df127ba932d999865b5cb5ce8d1f27ff"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","49b2504a8ba3712e92f457ce493f8df7"],["D:/github/hexo-blog/public/tags/博客/index.html","324d66158c503030c2220bc28333e856"],["D:/github/hexo-blog/public/tags/工作/index.html","2d928ad6934a423037c7d9d98569ba3f"],["D:/github/hexo-blog/public/tags/工具/index.html","cfab1e0b7957958d3ca26a93397a6e00"],["D:/github/hexo-blog/public/tags/测试标签/index.html","9cad62fd9fb6707a8f68e9bcc2de724f"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","7dda45c9b8afdedfd6ca123e71a24db7"],["D:/github/hexo-blog/public/tags/装机/index.html","da67d173fa19e9d4af8e8c32d528de62"],["D:/github/hexo-blog/public/tags/记录生活/index.html","ad3c9b7a6bd12fe08433952d0811cea3"],["D:/github/hexo-blog/public/tags/部署/index.html","d00897d3079c8ebf222007f849e944c2"],["D:/github/hexo-blog/public/tags/阿里云/index.html","50ac4b686a899049580d227e89ee181a"],["D:/github/hexo-blog/public/tags/面试题/index.html","0b90b3e2fc50a675431bd9f25db54efe"],["D:/github/hexo-blog/public/tags/黑苹果/index.html","31b5d3d217260674e2c526ef082b49a1"]];
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








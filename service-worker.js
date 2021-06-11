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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","8bbe6d34d74267a852745cacd65b0751"],["D:/github/hexo-blog/public/about/index.html","7510dc3b42615627859d3fcf0367dd6d"],["D:/github/hexo-blog/public/archives/2020/05/index.html","c6a42e77d20201a68f16f481b07c0186"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","b3f51b38df684e260c85a483cfe1d847"],["D:/github/hexo-blog/public/archives/2020/06/index.html","96d6108f4ae66431feb07a382fa73c64"],["D:/github/hexo-blog/public/archives/2020/07/index.html","d880271651f2d80ab700f71f240f9136"],["D:/github/hexo-blog/public/archives/2020/11/index.html","2708d18761ba8f05d3d7e0d19817bb87"],["D:/github/hexo-blog/public/archives/2020/index.html","b609c992f891d81c83dfd3eacf121e81"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","eee4cc6e68e3c00557f5460ed84a882f"],["D:/github/hexo-blog/public/archives/2021/01/index.html","5cdb1aad092de71085805b4edd26feec"],["D:/github/hexo-blog/public/archives/2021/04/index.html","5b2a321217dc93a117cf92d7d888bb3e"],["D:/github/hexo-blog/public/archives/2021/06/index.html","4d07535f2f7e12ee33334fd9996c5314"],["D:/github/hexo-blog/public/archives/2021/index.html","3e465d1f3c7d32b2273047d7aff3cace"],["D:/github/hexo-blog/public/archives/index.html","bb8d0e292c8eb9d491763b0609915b7a"],["D:/github/hexo-blog/public/archives/page/2/index.html","bb8d0e292c8eb9d491763b0609915b7a"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","f44663ac8ae3a122fde3ad9f21ec24c3"],["D:/github/hexo-blog/public/categories/index.html","c82ba4eff28b00cbef0aeca2cb716136"],["D:/github/hexo-blog/public/categories/前端/React/index.html","17097953241fe4f434b1b73fc9a87faf"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","2382ce11b4613d9e9ecc61048113d01c"],["D:/github/hexo-blog/public/categories/前端/index.html","b61d591ddcda946389b964dc649e8dcb"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","651e272b30ef57d0c79157f17be029cd"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","9415f9dafc6e6c373173b8a54e2284f5"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","e44a25f1098a5cca72ea3f789473a84a"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","c23db8e9243ae30c22ed50542d60ae77"],["D:/github/hexo-blog/public/categories/效率工具/index.html","564c820bd0e90cb395bc0451345e230f"],["D:/github/hexo-blog/public/categories/测试分类/index.html","b20df2c7ce26f3e64f67d7ebf859ec6e"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","f4a06b84b896d29bed8e8f37f77398e0"],["D:/github/hexo-blog/public/categories/记录生活/index.html","60b013b4fab70ad6dbcc6b41ed022d52"],["D:/github/hexo-blog/public/categories/黑苹果/index.html","410ff96cd1da03b3b9bd66b2b4a4de7a"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","b63b81c555b88a0f0757fb3bdcb35bb6"],["D:/github/hexo-blog/public/index.html","0d15317b4a3547840fa03f20e04cf815"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","e2cfaab093aa926eac65410885c3dd0b"],["D:/github/hexo-blog/public/page/2/index.html","6a180239e6f9b48febb9a1a0c81195b8"],["D:/github/hexo-blog/public/posts/20802113/index.html","07b2185eb5d215b025483917d2e61d1d"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","170c4c030917a718260bc1a5d1e6211c"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","e365a6bcf4df4c3acbaba1625916286e"],["D:/github/hexo-blog/public/posts/3901d9e/index.html","dc42d88e411c2280b71108a07f00b36c"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","bd0d2dfcaedbf3933562252999b4eb5e"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","c58dca1badb35cbec903eb90e7effefd"],["D:/github/hexo-blog/public/posts/6af865/index.html","d52750abda6c5a0e60a3e1bb2d02410a"],["D:/github/hexo-blog/public/posts/829819a3/index.html","dfc7ccded9fc7a43dad94b3338fab193"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","8035753b67c017a6f6de82418b74bd8b"],["D:/github/hexo-blog/public/posts/84d16999/index.html","2712c1038c7b8c35e73f6c7588add612"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","e237d4435eff0cc7958aeb150268b752"],["D:/github/hexo-blog/public/posts/b050203a/index.html","b0c4461ddb795724495c2a631fb96be9"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","0908884afeff894f6923ea333b4782bf"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","dc17de45d0a867078e484b4016720f00"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","ad3d3521bc5b52e11e63b7d2297f7fea"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","c78a88bde82cf7c3ff2e5f7ae04d7563"],["D:/github/hexo-blog/public/posts/f032f0/index.html","596108386cf850e86a907fb82bbd0601"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","3f7a1399ebcedf1293cf7d52ebae85bd"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","d800d40a6fae7d6891772d0b974c8d7d"],["D:/github/hexo-blog/public/posts/ff905629/index.html","c7e475c2338af5faf28f77cd0d5ccbac"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","091ba130d57f57cab4abca77cffca40f"],["D:/github/hexo-blog/public/tags/Hexo/index.html","ae0c28e34c6fb1d76d7c1572e60d6af9"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","da437862a9e78f59dd0f138fd62ffa7f"],["D:/github/hexo-blog/public/tags/Next-js/index.html","d3c2dd718213eb440f5c5588a309f87d"],["D:/github/hexo-blog/public/tags/React/index.html","bdfe90633cb053b6b4f5b6f59ac65ae6"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","6f84aed774ee2db1e20dd54018207e19"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","e12498ac834e435475a3ebd1b138cf43"],["D:/github/hexo-blog/public/tags/Typora/index.html","3ca303360de79ece09793b1efcd1c5c9"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","dadfbbad6f2454308831a04b23836c7b"],["D:/github/hexo-blog/public/tags/index.html","1700f1434a4e6d3e5fe970e955038d38"],["D:/github/hexo-blog/public/tags/jwt/index.html","5f85f3e4fb2ca07bcb174bffc8d55f04"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","a152dc0fd6528a8bf537ddb696248a10"],["D:/github/hexo-blog/public/tags/博客/index.html","3b84ca2575af7e106e6c1d3290ff3230"],["D:/github/hexo-blog/public/tags/工作/index.html","a93c33a8ae8d52f0ff3432cf5cbfca79"],["D:/github/hexo-blog/public/tags/工具/index.html","5f87fc5f12fb425c2ebc64d0a50068d6"],["D:/github/hexo-blog/public/tags/测试标签/index.html","11f377324f6d9322c1fa56f046bc5c46"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","497101a9b7043f90de4560ec0c69f09f"],["D:/github/hexo-blog/public/tags/装机/index.html","a097a10760cdad37b26cdac0b2f736f0"],["D:/github/hexo-blog/public/tags/记录生活/index.html","4191c1cb07a11d1537d5c18b0cbd77de"],["D:/github/hexo-blog/public/tags/部署/index.html","9b5c5d36994791e1af1149804afc6846"],["D:/github/hexo-blog/public/tags/阿里云/index.html","012a00e8b1acf487106c89efffc07e20"],["D:/github/hexo-blog/public/tags/面试题/index.html","307c420128357cea2baeea95ddf3e810"],["D:/github/hexo-blog/public/tags/黑苹果/index.html","58d73a85d24f9262243b03b9236f9785"]];
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








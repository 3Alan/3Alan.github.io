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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","6011ddf6f4b189564865ce716fcdc79f"],["D:/github/hexo-blog/public/about/index.html","9b08347587f1c38a05da4b38baae0f1c"],["D:/github/hexo-blog/public/archives/2020/05/index.html","a9088eba9b1fa60f7706c6829e8f62bb"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","f2192470b23a39628bbae3f6d9a2a049"],["D:/github/hexo-blog/public/archives/2020/06/index.html","45add037f44ecc090beef8f2daa6bbb7"],["D:/github/hexo-blog/public/archives/2020/07/index.html","7b046af45070f61410d9e77756c1e71f"],["D:/github/hexo-blog/public/archives/2020/11/index.html","01b2d679620c5b9860bd3f270f193cb0"],["D:/github/hexo-blog/public/archives/2020/index.html","dda5fb145e6cf0a2a8eb83aa5af1a447"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","9e5876ff449a9b83d693779121606ca2"],["D:/github/hexo-blog/public/archives/2021/01/index.html","93b0717341eeec6ae9de840cfaac1301"],["D:/github/hexo-blog/public/archives/2021/04/index.html","14b7365b7d77ca0d58be98835902544b"],["D:/github/hexo-blog/public/archives/2021/06/index.html","fe3ee6b15e727a2694803daea805919f"],["D:/github/hexo-blog/public/archives/2021/index.html","23d002795628c1afe6baccdde0843f2e"],["D:/github/hexo-blog/public/archives/index.html","9bc7bad1781ada32f0d411ddc2ad2533"],["D:/github/hexo-blog/public/archives/page/2/index.html","9bc7bad1781ada32f0d411ddc2ad2533"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","34a6efabc4b8f3cf4e8030a9a815468e"],["D:/github/hexo-blog/public/categories/index.html","9e7cbe20eb6d929f927cf1225f316d27"],["D:/github/hexo-blog/public/categories/前端/React/index.html","a2b2479fee0c05dc510074c88e3fd52f"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","63e99b7f607c94e8e1ce41c0dc69af1e"],["D:/github/hexo-blog/public/categories/前端/index.html","790cd11f82d1152bf58857651cea116e"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","5cb24f2ef0fc83757e4cf1f5e525509c"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","ff21b7998afc0d90b0da2a031b8019ed"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","77af38b8306426b291240934d01a6cff"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","0950055976cbb866715ff80390896482"],["D:/github/hexo-blog/public/categories/效率工具/index.html","3f528b7e366d6da816815ba6716cfc79"],["D:/github/hexo-blog/public/categories/测试分类/index.html","03e7d4ecf3028db8eacdadf197a63b40"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","b899fe95de8af1501ec953f0cc418ec7"],["D:/github/hexo-blog/public/categories/记录生活/index.html","2e031bb61c5c897c59314a701a7bdd87"],["D:/github/hexo-blog/public/categories/黑苹果/index.html","645c3bb42a8aed226c14674ea5fbaf2b"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","af5b2f8be58f59df632d8c8b5920cd9e"],["D:/github/hexo-blog/public/index.html","0458bf929c72c2809d9f6506f69e03e7"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","c23a4862d8298d6536eb4a5c7ef6f293"],["D:/github/hexo-blog/public/page/2/index.html","3b6d0cc98b05f1c4ee25fe340bad7b1f"],["D:/github/hexo-blog/public/posts/20802113/index.html","63739ee0e107c9c530956a582cd146f9"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","9035cd3afb6394eb530f6d1272c7f4af"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","8cc3e83f653a6ba0b64406cf06201ecd"],["D:/github/hexo-blog/public/posts/3901d9e/index.html","f6ab493ea05e5e4f9445abff58a4337a"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","fc25a3bca044dccda669847792fba5dc"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","4f823553a69a7b154cd469d25f883ed9"],["D:/github/hexo-blog/public/posts/6af865/index.html","3498885c7a8e4d6df28ad532994ebd9e"],["D:/github/hexo-blog/public/posts/829819a3/index.html","12ec82716311fb1b71f5498745299eaf"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","cde9f6c4f345903d40937740e133717a"],["D:/github/hexo-blog/public/posts/84d16999/index.html","87414d8f430a589caaf51fd41afa4ec7"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","e0556d804628a04357445818033575b4"],["D:/github/hexo-blog/public/posts/b050203a/index.html","e925fdb2ecb4d6a5c2c17632d056f733"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","991620bd811355085cd87934edf42df8"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","46d4fc7758544503c1ca9f04ec0b1a21"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","a890cd3b811cf11fc99fd0a0a85779d3"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","d2a80e33587df2cfa119e3c5ed300d20"],["D:/github/hexo-blog/public/posts/f032f0/index.html","c476f1e104e87b3f3e10756a3099a9ca"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","48481a3e34d95419325a42e940cd37c3"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","5105ebe0eb724e1e98c7257ef94ad1ac"],["D:/github/hexo-blog/public/posts/ff905629/index.html","6e4d7cf7664270c87e43b6611895ccfb"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","242957f1e43efb3c080ee6f119d4ce90"],["D:/github/hexo-blog/public/tags/Hexo/index.html","b30e40d97cc552d90ab31f9c4942be3c"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","b584485f3d2fa9dddf7f12a3172fc1db"],["D:/github/hexo-blog/public/tags/Next-js/index.html","4cbca27cbf466dedb78fbaa21dcfe26a"],["D:/github/hexo-blog/public/tags/React/index.html","333f872076528ef1a69c3aed64a957bb"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","70e00a22a1dd312a99323c40771e0bd4"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","e9e6e803996d7aee39f4407990396dc2"],["D:/github/hexo-blog/public/tags/Typora/index.html","ac33073fc8cfb14268ae443e763959e5"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","b5d1ac920b9bdca6f97b6c0cc2c07214"],["D:/github/hexo-blog/public/tags/index.html","e30928b305916c914fbb384657fd352c"],["D:/github/hexo-blog/public/tags/jwt/index.html","c7d51ad776edfe4eed7cdc765809ac7f"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","e3b5ee4ff16a7789bdcaacd5f5b36776"],["D:/github/hexo-blog/public/tags/博客/index.html","a3ae8121466cbf049c751ffa14afa176"],["D:/github/hexo-blog/public/tags/工作/index.html","a87d0f1462c86817a9a72d63c21d3140"],["D:/github/hexo-blog/public/tags/工具/index.html","06a8606845809ebc8a956b37a4d7987c"],["D:/github/hexo-blog/public/tags/测试标签/index.html","9e21a0697597d338434d7e50925e9702"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","4df385f7f2f51cd229ff401ccd4aa5d1"],["D:/github/hexo-blog/public/tags/装机/index.html","26d1ae85cc85c9e83cc425d08484c4e3"],["D:/github/hexo-blog/public/tags/记录生活/index.html","9f30a3b71cec5e6e781c7a89f9aaa88d"],["D:/github/hexo-blog/public/tags/部署/index.html","49da21fab8d887183f7b25d25968b937"],["D:/github/hexo-blog/public/tags/阿里云/index.html","de351e3cb5c84a3209d6b60266fbbf15"],["D:/github/hexo-blog/public/tags/面试题/index.html","fe4329cdcf58006cb0dcc07295aa72af"],["D:/github/hexo-blog/public/tags/黑苹果/index.html","26015328578bf3f4be48f38605769138"]];
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








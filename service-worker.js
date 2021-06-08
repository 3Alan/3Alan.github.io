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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","6011ddf6f4b189564865ce716fcdc79f"],["D:/github/hexo-blog/public/about/index.html","9b08347587f1c38a05da4b38baae0f1c"],["D:/github/hexo-blog/public/archives/2020/05/index.html","17f7da262c0fc8dd29e08cb4cf6d9c7b"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","99d66478a928104da7f5cdaad31e9609"],["D:/github/hexo-blog/public/archives/2020/06/index.html","804b58b63a5fe9821188f3662a678531"],["D:/github/hexo-blog/public/archives/2020/07/index.html","3135411e1556a0f7d3f805ea67a0115d"],["D:/github/hexo-blog/public/archives/2020/11/index.html","926cac3a8099b3b928ee371a958aff70"],["D:/github/hexo-blog/public/archives/2020/index.html","3a802b884c348554ef032b8e42372586"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","bf5ee8c5ea215a29ae1932734d7cea72"],["D:/github/hexo-blog/public/archives/2021/01/index.html","086e27f164f90814ee26c7ac604cc5cc"],["D:/github/hexo-blog/public/archives/2021/04/index.html","7dabef4afb79d18522318c675ff388e5"],["D:/github/hexo-blog/public/archives/2021/06/index.html","c2db5e6326010888fce2a4baf3ea5d93"],["D:/github/hexo-blog/public/archives/2021/index.html","6339a56e8b5a4984fc75d8aa4438b00e"],["D:/github/hexo-blog/public/archives/index.html","05b761c4a81c4aacdcfda7b4a9ba91fb"],["D:/github/hexo-blog/public/archives/page/2/index.html","05b761c4a81c4aacdcfda7b4a9ba91fb"],["D:/github/hexo-blog/public/baidu_verify_code-GFUuQTQyOl.html","d9ba85901072b8d16bf95289f514207e"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","b1f6c91e1b7ee7d4d0195fd6547b76cf"],["D:/github/hexo-blog/public/categories/index.html","9e7cbe20eb6d929f927cf1225f316d27"],["D:/github/hexo-blog/public/categories/前端/React/index.html","d0e6fcd99a951a65219a50efa6a133db"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","02e6557a6d12211941393505a5045938"],["D:/github/hexo-blog/public/categories/前端/index.html","d965e635567eb3fad882632e62feca62"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","4f9b8d0dd3e8b74230420cebe2cbc256"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","4ac0fe5b15f2f2dec660fbd5627755f3"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","b560e4be16d10a5674bbf029abbafc6c"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","45ba70c6b7084a00582eb479dcc6a2ff"],["D:/github/hexo-blog/public/categories/效率工具/index.html","42ae1cc02232b0ea24bb0b453d054938"],["D:/github/hexo-blog/public/categories/测试分类/index.html","2adb37e46feec1ec2f436b65eb6e65b0"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","5758166827b5814526e30ff9acf8e6d5"],["D:/github/hexo-blog/public/categories/记录生活/index.html","f4081fa512b0b83c3d5e7313b9eba709"],["D:/github/hexo-blog/public/categories/黑苹果/index.html","502d03c199ba193e9e105e36da2f770d"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","af5b2f8be58f59df632d8c8b5920cd9e"],["D:/github/hexo-blog/public/index.html","4925fdc7ff246030bd4077fb8d361f2c"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","c9ecbd2518464b0b6e9a6a9247ee1ad8"],["D:/github/hexo-blog/public/page/2/index.html","c5f1fd49439e1aaf870a45069adab35f"],["D:/github/hexo-blog/public/posts/20802113/index.html","63739ee0e107c9c530956a582cd146f9"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","9035cd3afb6394eb530f6d1272c7f4af"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","8cc3e83f653a6ba0b64406cf06201ecd"],["D:/github/hexo-blog/public/posts/3901d9e/index.html","f6ab493ea05e5e4f9445abff58a4337a"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","fc25a3bca044dccda669847792fba5dc"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","4f823553a69a7b154cd469d25f883ed9"],["D:/github/hexo-blog/public/posts/6af865/index.html","3498885c7a8e4d6df28ad532994ebd9e"],["D:/github/hexo-blog/public/posts/829819a3/index.html","12ec82716311fb1b71f5498745299eaf"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","cde9f6c4f345903d40937740e133717a"],["D:/github/hexo-blog/public/posts/84d16999/index.html","87414d8f430a589caaf51fd41afa4ec7"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","e0556d804628a04357445818033575b4"],["D:/github/hexo-blog/public/posts/b050203a/index.html","e925fdb2ecb4d6a5c2c17632d056f733"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","991620bd811355085cd87934edf42df8"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","46d4fc7758544503c1ca9f04ec0b1a21"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","a890cd3b811cf11fc99fd0a0a85779d3"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","d2a80e33587df2cfa119e3c5ed300d20"],["D:/github/hexo-blog/public/posts/f032f0/index.html","c476f1e104e87b3f3e10756a3099a9ca"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","48481a3e34d95419325a42e940cd37c3"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","5105ebe0eb724e1e98c7257ef94ad1ac"],["D:/github/hexo-blog/public/posts/ff905629/index.html","6e4d7cf7664270c87e43b6611895ccfb"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","c9f4c94401eb8e64a5d0782d4519b731"],["D:/github/hexo-blog/public/tags/Hexo/index.html","f5186b6bed7032574afff44d79fef057"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","84953f49b4f12c0f0d70f47f5d3de87a"],["D:/github/hexo-blog/public/tags/Next-js/index.html","b1410aae85c70829549f62ae271323bf"],["D:/github/hexo-blog/public/tags/React/index.html","7c191e073772cd5e52ac681f2cf6e372"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","30f2e1873803140adf8e26052548eb75"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","a0bb55d5769ea56f480a19d69f71c7f2"],["D:/github/hexo-blog/public/tags/Typora/index.html","36431b9368109a1782e34454cf9be684"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","693c4e9a97641d6251cf3727b414166d"],["D:/github/hexo-blog/public/tags/index.html","e30928b305916c914fbb384657fd352c"],["D:/github/hexo-blog/public/tags/jwt/index.html","a6f5e5db4ecc755d69d2104b1d3e6637"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","74a2a30652ec3f129c4c5d177a96dc83"],["D:/github/hexo-blog/public/tags/博客/index.html","2ef1ddc74c65ff8999f607a8112a2828"],["D:/github/hexo-blog/public/tags/工作/index.html","7522a307b301f12e12151b66df2bcd00"],["D:/github/hexo-blog/public/tags/工具/index.html","d48537275fd6a94174fa678a77b6b1b7"],["D:/github/hexo-blog/public/tags/测试标签/index.html","d53c1e01841db422f5cc9812231d6d37"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","0c5ff0bdaed206932675dfd6024f9767"],["D:/github/hexo-blog/public/tags/装机/index.html","1956e544a95d5db07bd1bcaa0ed8b0da"],["D:/github/hexo-blog/public/tags/记录生活/index.html","7c7a93e6ac5c5202c80ae0b6e8713073"],["D:/github/hexo-blog/public/tags/部署/index.html","f1644f14126e685fe2501a2f19240d4b"],["D:/github/hexo-blog/public/tags/阿里云/index.html","c3074998dc5c665993005ce4e7ae0a58"],["D:/github/hexo-blog/public/tags/面试题/index.html","ccdcfd621f3067906e0d6f230d574f83"],["D:/github/hexo-blog/public/tags/黑苹果/index.html","b26d16c92cf58fd8390f9586815a3d48"]];
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








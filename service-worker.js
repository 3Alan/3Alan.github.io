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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","6011ddf6f4b189564865ce716fcdc79f"],["D:/github/hexo-blog/public/about/index.html","9b08347587f1c38a05da4b38baae0f1c"],["D:/github/hexo-blog/public/archives/2020/05/index.html","89c268d3d2ce7a5b02d88686b77e0fff"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","c290874bb2fe91933b066073572a8ebc"],["D:/github/hexo-blog/public/archives/2020/06/index.html","a7193b994d8a3d113a33be554ef1701d"],["D:/github/hexo-blog/public/archives/2020/07/index.html","c7898241d91642d2f0e85cd899c4c36a"],["D:/github/hexo-blog/public/archives/2020/11/index.html","59b0b8318ca5457644aac864b5106579"],["D:/github/hexo-blog/public/archives/2020/index.html","21e23f0fd115dca1e2f5f1c8974d543a"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","e983a9bafb6c215388265d2c42ca4563"],["D:/github/hexo-blog/public/archives/2021/01/index.html","a2f5c0eb4d51dfacd39370e4d4475b83"],["D:/github/hexo-blog/public/archives/2021/04/index.html","43a182eeacc0f63a9e984ddd67080690"],["D:/github/hexo-blog/public/archives/2021/06/index.html","8478574910df03f13752405009ce07ea"],["D:/github/hexo-blog/public/archives/2021/index.html","2963332879c1b543fbefd81e9b0e52fa"],["D:/github/hexo-blog/public/archives/index.html","c09c07f31e17871a3409cef767342666"],["D:/github/hexo-blog/public/archives/page/2/index.html","c09c07f31e17871a3409cef767342666"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","c27c62b95ab95501049f4bf91ec10c67"],["D:/github/hexo-blog/public/categories/index.html","9e7cbe20eb6d929f927cf1225f316d27"],["D:/github/hexo-blog/public/categories/前端/React/index.html","ffe87a91a32509c758620fb818455e74"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","22ef7436e2409fb74b556fbb2397ea83"],["D:/github/hexo-blog/public/categories/前端/index.html","eafac61451b3e02d171f726a8a48b8c3"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","b7baf9be8e45cdafc8bddc34592e88ff"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","7f1eeb36c9fdaac5684e3eebe785738d"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","5bb8c8f26c34cf51b36858b5568b7bc4"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","038e01ff6d24f4633f38b58de6bb0512"],["D:/github/hexo-blog/public/categories/效率工具/index.html","496a1145a6040948b94a70c73b16f6ed"],["D:/github/hexo-blog/public/categories/测试分类/index.html","f5924d3427b9f51dd5ec05b1c9c154db"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","3d98b4f050cd72c8454a59fe759365b3"],["D:/github/hexo-blog/public/categories/记录生活/index.html","f129e770f983e5e6519e7841340c463c"],["D:/github/hexo-blog/public/categories/黑苹果/index.html","3806770d5939e877c1aff5588b0f68c2"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","af5b2f8be58f59df632d8c8b5920cd9e"],["D:/github/hexo-blog/public/index.html","fa7bdeb09cf281c7daf4fee166552e42"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","0a9cde24c85852d2e55b2c3ca73fbb90"],["D:/github/hexo-blog/public/page/2/index.html","c6476a0609eb0f43b14f0ca4cf144e2c"],["D:/github/hexo-blog/public/posts/20802113/index.html","63739ee0e107c9c530956a582cd146f9"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","9035cd3afb6394eb530f6d1272c7f4af"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","8cc3e83f653a6ba0b64406cf06201ecd"],["D:/github/hexo-blog/public/posts/3901d9e/index.html","f6ab493ea05e5e4f9445abff58a4337a"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","d6a8c8c2f02ee8eb1c027628893dfb98"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","4f823553a69a7b154cd469d25f883ed9"],["D:/github/hexo-blog/public/posts/6af865/index.html","3498885c7a8e4d6df28ad532994ebd9e"],["D:/github/hexo-blog/public/posts/829819a3/index.html","12ec82716311fb1b71f5498745299eaf"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","cde9f6c4f345903d40937740e133717a"],["D:/github/hexo-blog/public/posts/84d16999/index.html","87414d8f430a589caaf51fd41afa4ec7"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","1ed2f0ed5e14f538b5e188fc0aac1a79"],["D:/github/hexo-blog/public/posts/b050203a/index.html","e925fdb2ecb4d6a5c2c17632d056f733"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","991620bd811355085cd87934edf42df8"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","46d4fc7758544503c1ca9f04ec0b1a21"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","a890cd3b811cf11fc99fd0a0a85779d3"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","673df5bc1a6387860e813a5de9b2d74b"],["D:/github/hexo-blog/public/posts/f032f0/index.html","c476f1e104e87b3f3e10756a3099a9ca"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","48481a3e34d95419325a42e940cd37c3"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","5105ebe0eb724e1e98c7257ef94ad1ac"],["D:/github/hexo-blog/public/posts/ff905629/index.html","6e4d7cf7664270c87e43b6611895ccfb"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","0fe5e5e0a573b2f609b09b78ab03d97e"],["D:/github/hexo-blog/public/tags/Hexo/index.html","204731b562f86e052243fdda33b48859"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","98ebcb1ae43a05ea8421c04b0f931414"],["D:/github/hexo-blog/public/tags/Next-js/index.html","e51f2383a59b1d1f2444093f5f363dbf"],["D:/github/hexo-blog/public/tags/React/index.html","0b374efd3dcd1ee2aea78d337838c02d"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","b223e851d76d00df20c82de8a7e914b4"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","2323a0840086da9e7b71d039259fcb40"],["D:/github/hexo-blog/public/tags/Typora/index.html","f70fea3f1eed9796914f269122af9e4d"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","972293ecf499bdce4ad67dad4777119c"],["D:/github/hexo-blog/public/tags/index.html","e30928b305916c914fbb384657fd352c"],["D:/github/hexo-blog/public/tags/jwt/index.html","adade5b55e3a078dd773df481f8210df"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","847abc184d43a1fa5d44fb4be7df2418"],["D:/github/hexo-blog/public/tags/博客/index.html","c647ea676e5800c6c709c2b256a35a2f"],["D:/github/hexo-blog/public/tags/工作/index.html","e8b26cad17134639ed023cbd9e168ba4"],["D:/github/hexo-blog/public/tags/工具/index.html","1507f56a48f083d9c6285412f9c1e1f3"],["D:/github/hexo-blog/public/tags/测试标签/index.html","cc5adfea3d5e8bb1f3d0a468edb0f4a7"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","b5fd0901937d5fac98e12334ecb163a9"],["D:/github/hexo-blog/public/tags/装机/index.html","f4b4b9810e27bc7c650e23c48f59df3e"],["D:/github/hexo-blog/public/tags/记录生活/index.html","910e5730c0214d6d3127568ca952252a"],["D:/github/hexo-blog/public/tags/部署/index.html","157c4879d494a3d092266ab5c7ae2609"],["D:/github/hexo-blog/public/tags/阿里云/index.html","e9aa887df4cfab7ea14b2b36faa0affc"],["D:/github/hexo-blog/public/tags/面试题/index.html","9f4c2a8a76c3a01b32b54e74090646b6"],["D:/github/hexo-blog/public/tags/黑苹果/index.html","f4ea07b5265b096ec2997043fe34a718"]];
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








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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","6011ddf6f4b189564865ce716fcdc79f"],["D:/github/hexo-blog/public/about/index.html","9b08347587f1c38a05da4b38baae0f1c"],["D:/github/hexo-blog/public/archives/2020/05/index.html","63941dcd1782bc644353632a8f6135b4"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","d4926c221938f4109d6d2dde9891c2c9"],["D:/github/hexo-blog/public/archives/2020/06/index.html","c976cc99802f71056fee08e209b957dc"],["D:/github/hexo-blog/public/archives/2020/07/index.html","aff59a868de4cde63f571af83bf25646"],["D:/github/hexo-blog/public/archives/2020/11/index.html","3fa296c06699419996487e6355039212"],["D:/github/hexo-blog/public/archives/2020/index.html","96503c78a26ca096f3c16e34f4eecaad"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","56c4a878c0dfad02a1d1b7219e3e2609"],["D:/github/hexo-blog/public/archives/2021/01/index.html","ac8a61ebcc0a22720128c449146815dd"],["D:/github/hexo-blog/public/archives/2021/04/index.html","8f699eb1508a51c7f7392099420d2801"],["D:/github/hexo-blog/public/archives/2021/06/index.html","b56a357dc6edc874a5963dca94f534c3"],["D:/github/hexo-blog/public/archives/2021/index.html","1d3884edb660f342e5495e4476e38b3e"],["D:/github/hexo-blog/public/archives/index.html","2d7a2ad18fe8bad9bca1eb135642d3b5"],["D:/github/hexo-blog/public/archives/page/2/index.html","2d7a2ad18fe8bad9bca1eb135642d3b5"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","aa83903f7f684f31b5679665da1d0a1a"],["D:/github/hexo-blog/public/categories/index.html","9e7cbe20eb6d929f927cf1225f316d27"],["D:/github/hexo-blog/public/categories/前端/React/index.html","556f798d0f5df38753e9be17e85d122d"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","d5391133e45cd718fe29078ca23d92a4"],["D:/github/hexo-blog/public/categories/前端/index.html","c38101997cadd0e9a19a9a693cd599e5"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","4fa31af46b64771721e5b229058624e0"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","8d89ae02c62e2285a5bb6784b9e9249c"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","7d1064c2c15333e6dfb71bce87f06938"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","0625a56cf17a46c61542b7113d50ec89"],["D:/github/hexo-blog/public/categories/效率工具/index.html","48adf2418bd78e32b898fdaa55566574"],["D:/github/hexo-blog/public/categories/测试分类/index.html","c9e6728cf619107d5e8ce9420b3e4467"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","c7ca4a0fb2b2e8c3411c44c0f268792b"],["D:/github/hexo-blog/public/categories/记录生活/index.html","dabb449abe1538e88cbcf88493770970"],["D:/github/hexo-blog/public/categories/黑苹果/index.html","25255383827892535fe05097e4836501"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","af5b2f8be58f59df632d8c8b5920cd9e"],["D:/github/hexo-blog/public/index.html","8d070781ce56853c1e541ede43283e1a"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","12819c890b59f068dfb60bc64d6695e2"],["D:/github/hexo-blog/public/page/2/index.html","b1ee208a421ea9ff1d7e2ce8aced6f23"],["D:/github/hexo-blog/public/posts/20802113/index.html","63739ee0e107c9c530956a582cd146f9"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","9035cd3afb6394eb530f6d1272c7f4af"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","8cc3e83f653a6ba0b64406cf06201ecd"],["D:/github/hexo-blog/public/posts/3901d9e/index.html","f6ab493ea05e5e4f9445abff58a4337a"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","d6a8c8c2f02ee8eb1c027628893dfb98"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","4f823553a69a7b154cd469d25f883ed9"],["D:/github/hexo-blog/public/posts/6af865/index.html","3498885c7a8e4d6df28ad532994ebd9e"],["D:/github/hexo-blog/public/posts/829819a3/index.html","12ec82716311fb1b71f5498745299eaf"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","cde9f6c4f345903d40937740e133717a"],["D:/github/hexo-blog/public/posts/84d16999/index.html","87414d8f430a589caaf51fd41afa4ec7"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","1ed2f0ed5e14f538b5e188fc0aac1a79"],["D:/github/hexo-blog/public/posts/b050203a/index.html","e925fdb2ecb4d6a5c2c17632d056f733"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","991620bd811355085cd87934edf42df8"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","46d4fc7758544503c1ca9f04ec0b1a21"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","a890cd3b811cf11fc99fd0a0a85779d3"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","673df5bc1a6387860e813a5de9b2d74b"],["D:/github/hexo-blog/public/posts/f032f0/index.html","c476f1e104e87b3f3e10756a3099a9ca"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","48481a3e34d95419325a42e940cd37c3"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","5105ebe0eb724e1e98c7257ef94ad1ac"],["D:/github/hexo-blog/public/posts/ff905629/index.html","6e4d7cf7664270c87e43b6611895ccfb"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","d1603a6d6c99712864760eeb70002f41"],["D:/github/hexo-blog/public/tags/Hexo/index.html","17d9a01fe659a98c19985a39e3e73afa"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","9d821e562e5c57c2c684949d201c3098"],["D:/github/hexo-blog/public/tags/Next-js/index.html","3a82c36889dad76b85b3f911240cb712"],["D:/github/hexo-blog/public/tags/React/index.html","d866a8f565945aeb190550a12f219f07"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","47651472bddd62abec8e7eb92b3f7c9e"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","bb1da03b278f14570714ca6f1800fedf"],["D:/github/hexo-blog/public/tags/Typora/index.html","42ed7c5f5fdb79643049c929934d506d"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","9cc22e9ce625f2c7e394443216c966f1"],["D:/github/hexo-blog/public/tags/index.html","e30928b305916c914fbb384657fd352c"],["D:/github/hexo-blog/public/tags/jwt/index.html","ecd9bc2e7355c5e0047e1f36dfee27ff"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","607d3552415b4263cf107cc35ea9e9cd"],["D:/github/hexo-blog/public/tags/博客/index.html","cdae00fcffa171373264de683d66ee69"],["D:/github/hexo-blog/public/tags/工作/index.html","ff9e063e01a832cd1f5cac4bc28bb387"],["D:/github/hexo-blog/public/tags/工具/index.html","e73ffc232448e4ce6e33b9791a4cea15"],["D:/github/hexo-blog/public/tags/测试标签/index.html","c3099ef4699bf08830c654ee101f3ee7"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","0c25181f7655a8db7aa003f673cbfb2f"],["D:/github/hexo-blog/public/tags/装机/index.html","11397428953a42a739dfc1348c95ee49"],["D:/github/hexo-blog/public/tags/记录生活/index.html","01df7b34bd2b1fa125f76b0d5b7d04bc"],["D:/github/hexo-blog/public/tags/部署/index.html","ec19b3c088219b7cc257de9f09db6939"],["D:/github/hexo-blog/public/tags/阿里云/index.html","5a805d50c518b09f10c5de5d9c58b038"],["D:/github/hexo-blog/public/tags/面试题/index.html","9756fc1e07f56ccbc7c718d9d8349eda"],["D:/github/hexo-blog/public/tags/黑苹果/index.html","efc5d9f842d91473699105a02d39a222"]];
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








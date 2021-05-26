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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","6011ddf6f4b189564865ce716fcdc79f"],["D:/github/hexo-blog/public/about/index.html","9b08347587f1c38a05da4b38baae0f1c"],["D:/github/hexo-blog/public/archives/2020/05/index.html","d762fe76a4d35a49a3de106bb9a0a40f"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","587305cefaf4a3624d1e86a97461864c"],["D:/github/hexo-blog/public/archives/2020/06/index.html","18ab094f577003e9f5b43091a1666f9c"],["D:/github/hexo-blog/public/archives/2020/07/index.html","3b752c0574f75c253e57b2ee9bde8e20"],["D:/github/hexo-blog/public/archives/2020/11/index.html","c7b3ca08c79ca6dda1d5d6de46bf834a"],["D:/github/hexo-blog/public/archives/2020/index.html","bc27381bdf2ca4c9fa0f11c6ded50cc5"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","3ed6aa0f58ff13735b920cc172c1914a"],["D:/github/hexo-blog/public/archives/2021/01/index.html","076a0a39ee947986048c5995fd631752"],["D:/github/hexo-blog/public/archives/2021/04/index.html","36f943fc763888ff1ab18e043ae52a1b"],["D:/github/hexo-blog/public/archives/2021/index.html","b83ea14620cdafd0b39cd4ab66ee9d99"],["D:/github/hexo-blog/public/archives/index.html","3096c6f4b66b9cd3bd15f3e2d5ff6e2f"],["D:/github/hexo-blog/public/archives/page/2/index.html","3096c6f4b66b9cd3bd15f3e2d5ff6e2f"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","3821eab52997e1e2607798dce76e8791"],["D:/github/hexo-blog/public/categories/index.html","9285d52ca6a19f0158518c1a7f2c696d"],["D:/github/hexo-blog/public/categories/前端/React/index.html","439aa0573c4d5bcf10e424f6254a0674"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","52fc3d78f1deca6d1a885592efd802a0"],["D:/github/hexo-blog/public/categories/前端/index.html","b29462814426213a1eca5a0aa3d1d754"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","49659c61acb453b6dcaa39769001b3c6"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","0994222668268469eada1923e756a7ff"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","4bc55cf77d9affcca46b1809e17f38d7"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","49caf54e689ca4b6e23f9e19091d265a"],["D:/github/hexo-blog/public/categories/效率工具/index.html","67f919be257920818c041064353de20f"],["D:/github/hexo-blog/public/categories/测试分类/index.html","3a1e26e4fdc2bb999ea40506c562fed9"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","20260fe54becd0a36375225234edd32d"],["D:/github/hexo-blog/public/categories/记录生活/index.html","538cb81cdb41b41576daf5dff1036c3e"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","af5b2f8be58f59df632d8c8b5920cd9e"],["D:/github/hexo-blog/public/index.html","5ab5cb0c84fe156a8f2cf3e9c9642668"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","a6168fd110045373ca03d73abd910fc3"],["D:/github/hexo-blog/public/page/2/index.html","1d0d5537c722c65fec34df803798c744"],["D:/github/hexo-blog/public/posts/20802113/index.html","63739ee0e107c9c530956a582cd146f9"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","9035cd3afb6394eb530f6d1272c7f4af"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","8cc3e83f653a6ba0b64406cf06201ecd"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","fc25a3bca044dccda669847792fba5dc"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","4f823553a69a7b154cd469d25f883ed9"],["D:/github/hexo-blog/public/posts/6af865/index.html","3498885c7a8e4d6df28ad532994ebd9e"],["D:/github/hexo-blog/public/posts/829819a3/index.html","12ec82716311fb1b71f5498745299eaf"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","cde9f6c4f345903d40937740e133717a"],["D:/github/hexo-blog/public/posts/84d16999/index.html","87414d8f430a589caaf51fd41afa4ec7"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","e0556d804628a04357445818033575b4"],["D:/github/hexo-blog/public/posts/b050203a/index.html","aa641d943d4d792f275ab9e2886a2a5c"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","991620bd811355085cd87934edf42df8"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","46d4fc7758544503c1ca9f04ec0b1a21"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","a890cd3b811cf11fc99fd0a0a85779d3"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","d2a80e33587df2cfa119e3c5ed300d20"],["D:/github/hexo-blog/public/posts/f032f0/index.html","c476f1e104e87b3f3e10756a3099a9ca"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","48481a3e34d95419325a42e940cd37c3"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","5105ebe0eb724e1e98c7257ef94ad1ac"],["D:/github/hexo-blog/public/posts/ff905629/index.html","6e4d7cf7664270c87e43b6611895ccfb"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","670d189cfd5606300ec649898d3b7725"],["D:/github/hexo-blog/public/tags/Hexo/index.html","fe57d378c2b5b881b8c88eb68839d170"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","5f1fc1ca87b5bf5c0e575b33b0787494"],["D:/github/hexo-blog/public/tags/Next-js/index.html","210ddf8783f1443e63b3c782264a967c"],["D:/github/hexo-blog/public/tags/React/index.html","afd667af553d564de3d45793e1c7b280"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","66e5b5df14c342e918a50acae1b2fc46"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","2a79f04d990fdf143c7d25a1c9700bae"],["D:/github/hexo-blog/public/tags/Typora/index.html","104b4824886d11269f5702305311577c"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","f87c7fa71bf6f7b0f505348441e8f6fc"],["D:/github/hexo-blog/public/tags/index.html","fc6f9326c0edd9974479c73f7176ffef"],["D:/github/hexo-blog/public/tags/jwt/index.html","667ef767b73f1476c874167e2b1c31e9"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","662611e3b1477b475a4990ea959a92e4"],["D:/github/hexo-blog/public/tags/博客/index.html","74022d2ad70cb9bb9ff5589c1f16a0dc"],["D:/github/hexo-blog/public/tags/工作/index.html","247dc19c48e4e025407e55f612120494"],["D:/github/hexo-blog/public/tags/工具/index.html","4d2eebed24dbb73ed74ab42e5309197e"],["D:/github/hexo-blog/public/tags/测试标签/index.html","d906d1f071e7b8a957c10e4aa08052c4"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","0f9048f643b629c71e3a79d8e81d60f5"],["D:/github/hexo-blog/public/tags/记录生活/index.html","0f9905bf35a7cc11f33bedbc544fcd4f"],["D:/github/hexo-blog/public/tags/部署/index.html","9ba96f04705a42094c8ca2eb6f7f51ca"],["D:/github/hexo-blog/public/tags/阿里云/index.html","9d2bf725cdc167a46d0c6d63e43a5a62"],["D:/github/hexo-blog/public/tags/面试题/index.html","a0db655084e6451484a12f46b3311bf8"]];
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








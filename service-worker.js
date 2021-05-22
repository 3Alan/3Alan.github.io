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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","6011ddf6f4b189564865ce716fcdc79f"],["D:/github/hexo-blog/public/about/index.html","9b08347587f1c38a05da4b38baae0f1c"],["D:/github/hexo-blog/public/archives/2020/05/index.html","bba688b56317c4b3bb5094021ee34872"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","8f974728abdf317b1bf2c0941ea76b1e"],["D:/github/hexo-blog/public/archives/2020/06/index.html","94397e989c39527c8fdfe6d7346c60de"],["D:/github/hexo-blog/public/archives/2020/07/index.html","1d723de93432b817d541c4c05f8bb73a"],["D:/github/hexo-blog/public/archives/2020/11/index.html","020cfe8f81d8619f03e10fc23bf828d9"],["D:/github/hexo-blog/public/archives/2020/index.html","7f4e54e4edc43f45eb3855af3bbd8fed"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","d39e8b1c25e63a74f72a18a94b30aed0"],["D:/github/hexo-blog/public/archives/2021/01/index.html","97ee4e3da0fb6a543d4532a28ada79e6"],["D:/github/hexo-blog/public/archives/2021/04/index.html","1f46e0a459a0c322fade6772ac2e244a"],["D:/github/hexo-blog/public/archives/2021/index.html","5396f719a246744a5eb23c39ebd7376f"],["D:/github/hexo-blog/public/archives/index.html","83cd8752201794231063b1913ff8bea7"],["D:/github/hexo-blog/public/archives/page/2/index.html","83cd8752201794231063b1913ff8bea7"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","7502c031cc7afceb132cea86cf8477a0"],["D:/github/hexo-blog/public/categories/index.html","9285d52ca6a19f0158518c1a7f2c696d"],["D:/github/hexo-blog/public/categories/前端/React/index.html","9acc20942cc12d235bc8c856410452f1"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","049200e967641b4e0e63c8edcc27a4ea"],["D:/github/hexo-blog/public/categories/前端/index.html","a61b56836d681d317a692f59ee1a2105"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","22c3209f36fda1b94d917ea5620344c7"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","dc8ac66b8b8cd4f9c48d62e5217ef4df"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","5c7c99647e92aa0cd2b5cc8048adda96"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","363f54115712fec76d7bcf20ee149ae2"],["D:/github/hexo-blog/public/categories/效率工具/index.html","93e20f0ee56ee753adc54eecebf6bd6f"],["D:/github/hexo-blog/public/categories/测试分类/index.html","93dbd109cdaaa7580b384a8c79769aa0"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","19d64911a81e29b3723a5e828666a3d5"],["D:/github/hexo-blog/public/categories/记录生活/index.html","001e7ce171fe97b1a0699e11c2e2df57"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","af5b2f8be58f59df632d8c8b5920cd9e"],["D:/github/hexo-blog/public/index.html","163a285aa3cbab25fc061c6c1d2f9d41"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","99adfbf113bd34c6ed1df658372d505d"],["D:/github/hexo-blog/public/page/2/index.html","8233ef474a29b560f7a78d027ac35bc9"],["D:/github/hexo-blog/public/posts/20802113/index.html","63739ee0e107c9c530956a582cd146f9"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","682215fdcb8f422aab60599d1dcf7cf8"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","8cc3e83f653a6ba0b64406cf06201ecd"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","d6a8c8c2f02ee8eb1c027628893dfb98"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","4f823553a69a7b154cd469d25f883ed9"],["D:/github/hexo-blog/public/posts/6af865/index.html","3498885c7a8e4d6df28ad532994ebd9e"],["D:/github/hexo-blog/public/posts/829819a3/index.html","12ec82716311fb1b71f5498745299eaf"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","10dc8c0fe0cd24b75641ee1d69412866"],["D:/github/hexo-blog/public/posts/84d16999/index.html","87414d8f430a589caaf51fd41afa4ec7"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","1ed2f0ed5e14f538b5e188fc0aac1a79"],["D:/github/hexo-blog/public/posts/b050203a/index.html","aa641d943d4d792f275ab9e2886a2a5c"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","991620bd811355085cd87934edf42df8"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","46d4fc7758544503c1ca9f04ec0b1a21"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","a890cd3b811cf11fc99fd0a0a85779d3"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","673df5bc1a6387860e813a5de9b2d74b"],["D:/github/hexo-blog/public/posts/f032f0/index.html","c476f1e104e87b3f3e10756a3099a9ca"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","48481a3e34d95419325a42e940cd37c3"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","5105ebe0eb724e1e98c7257ef94ad1ac"],["D:/github/hexo-blog/public/posts/ff905629/index.html","6e4d7cf7664270c87e43b6611895ccfb"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","eeaf0e648f69ea71742a89b1b31f4e0d"],["D:/github/hexo-blog/public/tags/Hexo/index.html","1ed014f0870fbe9d437f1c2291a236ae"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","27f79c7d5eedcc10480c7770134f4207"],["D:/github/hexo-blog/public/tags/Next-js/index.html","f13022b45dae2ec6f06013d202267584"],["D:/github/hexo-blog/public/tags/React/index.html","b9018a454a342c3d29039d40a588ec35"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","6730b62190941c1beb9e3a395c8b6a53"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","9d27f74baf623e38b9e1204876490f90"],["D:/github/hexo-blog/public/tags/Typora/index.html","cf5722aba6f680a34ac262a63fbdb463"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","8ab334723c6c428f7454ea55841ea184"],["D:/github/hexo-blog/public/tags/index.html","fc6f9326c0edd9974479c73f7176ffef"],["D:/github/hexo-blog/public/tags/jwt/index.html","18503a374fac82dc70c598044d3d2a31"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","068b7a499baaa0dce9f0601e8a10837a"],["D:/github/hexo-blog/public/tags/博客/index.html","2eb98654177fb81bfceb13263c001783"],["D:/github/hexo-blog/public/tags/工作/index.html","981ab869c481fcbfb72530513cacc797"],["D:/github/hexo-blog/public/tags/工具/index.html","63f5d15e64414f86369fc26fb1358af8"],["D:/github/hexo-blog/public/tags/测试标签/index.html","30495b24340e016f9f81e78efc83cc4e"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","aab2d7c877c2c5eb67d7efb58e723326"],["D:/github/hexo-blog/public/tags/记录生活/index.html","e5fcde7cae628e8cd00f8b5878df3521"],["D:/github/hexo-blog/public/tags/部署/index.html","cb8ce9ba471a8132e151da02a9e4be45"],["D:/github/hexo-blog/public/tags/阿里云/index.html","a7718a225193e83ab6b27bd9b5c1d612"],["D:/github/hexo-blog/public/tags/面试题/index.html","cf6a3937a95dc25a4b8e1f3771555382"]];
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








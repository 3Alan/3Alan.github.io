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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","8bbe6d34d74267a852745cacd65b0751"],["D:/github/hexo-blog/public/about/index.html","7510dc3b42615627859d3fcf0367dd6d"],["D:/github/hexo-blog/public/archives/2020/05/index.html","11d1de7d6468a36d162ed00282cdfba3"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","959240157776ee467d7122c986a3aa09"],["D:/github/hexo-blog/public/archives/2020/06/index.html","a8e2c3efada68433f83bf9cd20e04164"],["D:/github/hexo-blog/public/archives/2020/07/index.html","cafffb07a634f5bcc2c6d074f50e7af3"],["D:/github/hexo-blog/public/archives/2020/11/index.html","45d8fb4de88ae8fc68abd42b916c1be8"],["D:/github/hexo-blog/public/archives/2020/index.html","03a4feb0fa914e5c443a121c2c1eb651"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","29d075d9df1371226ec2042423897feb"],["D:/github/hexo-blog/public/archives/2021/01/index.html","a2af981188887adee5b040c475e0bbea"],["D:/github/hexo-blog/public/archives/2021/04/index.html","3165021284915224e3211fa5f24bb922"],["D:/github/hexo-blog/public/archives/2021/06/index.html","023f24fa91a3a78e4871bfff0df42424"],["D:/github/hexo-blog/public/archives/2021/index.html","0336f2b4fa38bb9639456cbf68964d85"],["D:/github/hexo-blog/public/archives/index.html","bde48daada3a8e79a009f500bc494a84"],["D:/github/hexo-blog/public/archives/page/2/index.html","bde48daada3a8e79a009f500bc494a84"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","f22d9a739e91e74ed2b2906978bd11f2"],["D:/github/hexo-blog/public/categories/index.html","c82ba4eff28b00cbef0aeca2cb716136"],["D:/github/hexo-blog/public/categories/前端/React/index.html","066c98cbe6f8c3cd1c8212bd4b2e70db"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","0d22a47495b321923aa3beb351935461"],["D:/github/hexo-blog/public/categories/前端/index.html","0d5595066d293e82de0779ec2cc8a6fc"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","34709b8a5a834ea9adca83c2f683d7bc"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","b8c85d1a2b472063d9e5ec646505ff24"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","c3c396b65fb9f0fbef056f53bb49263e"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","9a2b26367f9bc851fa417812eadbbc60"],["D:/github/hexo-blog/public/categories/效率工具/index.html","4cd139a86439c0a3af05733c43cc25fc"],["D:/github/hexo-blog/public/categories/测试分类/index.html","a58ab1f52658b4e48bc71e9065a7fdc5"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","e7783390d24e4007603c0dab43b75e86"],["D:/github/hexo-blog/public/categories/记录生活/index.html","92eb12027494dd769ee66ad50c770c4b"],["D:/github/hexo-blog/public/categories/黑苹果/index.html","4077290276e76acf5cf15568798dc818"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","b63b81c555b88a0f0757fb3bdcb35bb6"],["D:/github/hexo-blog/public/index.html","04affa4578f1093c0d3e97ff5d12d27b"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","cbd663ace7611aa18d3debc555691763"],["D:/github/hexo-blog/public/page/2/index.html","bd50b98b5f6e55a2d2300f89e4671324"],["D:/github/hexo-blog/public/posts/20802113/index.html","07b2185eb5d215b025483917d2e61d1d"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","170c4c030917a718260bc1a5d1e6211c"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","e365a6bcf4df4c3acbaba1625916286e"],["D:/github/hexo-blog/public/posts/3901d9e/index.html","dc42d88e411c2280b71108a07f00b36c"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","bd0d2dfcaedbf3933562252999b4eb5e"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","c58dca1badb35cbec903eb90e7effefd"],["D:/github/hexo-blog/public/posts/6af865/index.html","d52750abda6c5a0e60a3e1bb2d02410a"],["D:/github/hexo-blog/public/posts/829819a3/index.html","dfc7ccded9fc7a43dad94b3338fab193"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","0b2119d40545cda57d4804157df7d689"],["D:/github/hexo-blog/public/posts/84d16999/index.html","2712c1038c7b8c35e73f6c7588add612"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","e237d4435eff0cc7958aeb150268b752"],["D:/github/hexo-blog/public/posts/b050203a/index.html","b0c4461ddb795724495c2a631fb96be9"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","0908884afeff894f6923ea333b4782bf"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","dc17de45d0a867078e484b4016720f00"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","ad3d3521bc5b52e11e63b7d2297f7fea"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","c78a88bde82cf7c3ff2e5f7ae04d7563"],["D:/github/hexo-blog/public/posts/f032f0/index.html","596108386cf850e86a907fb82bbd0601"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","3f7a1399ebcedf1293cf7d52ebae85bd"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","d800d40a6fae7d6891772d0b974c8d7d"],["D:/github/hexo-blog/public/posts/ff905629/index.html","c7e475c2338af5faf28f77cd0d5ccbac"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","5a8a8c62a769ac246a195a1919970e33"],["D:/github/hexo-blog/public/tags/Hexo/index.html","a915fdf99bc2b6b026871304f17b9613"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","e9ee5a8f9c42c744016c9f332d726682"],["D:/github/hexo-blog/public/tags/Next-js/index.html","17adbba35b9c2de1d498339c9ff460bc"],["D:/github/hexo-blog/public/tags/React/index.html","62dc0961a74bc18aa3098391493cce92"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","b1101d5af4703f3971e4ab108b7cf107"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","ae845ae1d77c46c62d0562b7b1d04aff"],["D:/github/hexo-blog/public/tags/Typora/index.html","457559ae04b1d8f234e4573d64114961"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","8a598e3c4080053ccc341a9dd7cd62e4"],["D:/github/hexo-blog/public/tags/index.html","1700f1434a4e6d3e5fe970e955038d38"],["D:/github/hexo-blog/public/tags/jwt/index.html","a4aa97bd04607befce3322de7177ea2c"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","d071b9fb55ab39f837382432f0c351b4"],["D:/github/hexo-blog/public/tags/博客/index.html","09eedaafc79542c29f0457a8ff264fe0"],["D:/github/hexo-blog/public/tags/工作/index.html","ad5a3d9f4dd3bbca024672eb1a253ff8"],["D:/github/hexo-blog/public/tags/工具/index.html","765f158b2858c525fd81555a0d25cbc5"],["D:/github/hexo-blog/public/tags/测试标签/index.html","91a368456278e204825affabd1767900"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","ba213da5d925bb9f1acc8d97d7148a16"],["D:/github/hexo-blog/public/tags/装机/index.html","254c23d99dda26498a5e5399d088cc9a"],["D:/github/hexo-blog/public/tags/记录生活/index.html","f1bd40d7d70d8d5d732ed285c19a9741"],["D:/github/hexo-blog/public/tags/部署/index.html","38ec591f5fb28e6c1ffde3f6ead81ecb"],["D:/github/hexo-blog/public/tags/阿里云/index.html","75b7d4adc7579eb8e49d1c9b3d3479b7"],["D:/github/hexo-blog/public/tags/面试题/index.html","70b9b563de6240a546002682cbd61b73"],["D:/github/hexo-blog/public/tags/黑苹果/index.html","cd572aaf52141186956d8ba522a52a14"]];
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








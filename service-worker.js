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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","8bbe6d34d74267a852745cacd65b0751"],["D:/github/hexo-blog/public/about/index.html","7510dc3b42615627859d3fcf0367dd6d"],["D:/github/hexo-blog/public/archives/2020/05/index.html","a95ead8ead9e62be3b44088365b564c9"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","32948163c56c85d33d639c8c19f2a71a"],["D:/github/hexo-blog/public/archives/2020/06/index.html","b5ce4c3a5498b40ac510782ebc765882"],["D:/github/hexo-blog/public/archives/2020/07/index.html","ad074cc588dea53c4d498d2edf96f0ab"],["D:/github/hexo-blog/public/archives/2020/11/index.html","98870d280cd971f41206ed3eb34f07da"],["D:/github/hexo-blog/public/archives/2020/index.html","520b82b91d0064b437885f4fbd65ee60"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","00d0a28c7ffe8d2cb3b50a7e8cdf940f"],["D:/github/hexo-blog/public/archives/2021/01/index.html","5868f1276180602955bf8818ada4b5e0"],["D:/github/hexo-blog/public/archives/2021/04/index.html","472f968a9df0373512be3804d4d495b0"],["D:/github/hexo-blog/public/archives/2021/06/index.html","688a8647f62447a023d03732b9ae0062"],["D:/github/hexo-blog/public/archives/2021/index.html","0b69083b7698cd5a2a39b793da186754"],["D:/github/hexo-blog/public/archives/index.html","b8e503cb664a82315f3cd4f0217e1239"],["D:/github/hexo-blog/public/archives/page/2/index.html","b8e503cb664a82315f3cd4f0217e1239"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","ef4233ce469fc4ecf3fdf22e2c4696fa"],["D:/github/hexo-blog/public/categories/index.html","c82ba4eff28b00cbef0aeca2cb716136"],["D:/github/hexo-blog/public/categories/前端/React/index.html","ae468786a3df2ff45eb1cfd558e387c8"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","240892385b44064b3fb37c746bf893b3"],["D:/github/hexo-blog/public/categories/前端/index.html","bb8ac3a9e2b792610724987700e1dde1"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","d3216da21eddb8196334943b17b9275b"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","76725882773943fe65ddb55302095a51"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","693006a543ff256bd624870d92dadec2"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","8bc3b66bfaec018d40f9a4628d073aea"],["D:/github/hexo-blog/public/categories/效率工具/index.html","bc478ccf9dd9f38912a63fa16b56481d"],["D:/github/hexo-blog/public/categories/测试分类/index.html","346448c37b256a01a207d46667e0995f"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","b6d489c1ee459b87fef451f22a328ce3"],["D:/github/hexo-blog/public/categories/记录生活/index.html","61a3eaee18b476e22c2d1e13dd190596"],["D:/github/hexo-blog/public/categories/黑苹果/index.html","58dd03c5b491936c98e0cc238659c2f7"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","b63b81c555b88a0f0757fb3bdcb35bb6"],["D:/github/hexo-blog/public/index.html","8b6be1d5b97e6b85bfc5eaf7cba43026"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","35af1969aab16ffbee8bc23af41766a3"],["D:/github/hexo-blog/public/page/2/index.html","a50cf34b5dfec343e714962cea651c28"],["D:/github/hexo-blog/public/posts/20802113/index.html","07b2185eb5d215b025483917d2e61d1d"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","170c4c030917a718260bc1a5d1e6211c"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","e365a6bcf4df4c3acbaba1625916286e"],["D:/github/hexo-blog/public/posts/3901d9e/index.html","dc42d88e411c2280b71108a07f00b36c"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","fda8812183eedf9c1257bf22644cae0e"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","c58dca1badb35cbec903eb90e7effefd"],["D:/github/hexo-blog/public/posts/6af865/index.html","d52750abda6c5a0e60a3e1bb2d02410a"],["D:/github/hexo-blog/public/posts/829819a3/index.html","dfc7ccded9fc7a43dad94b3338fab193"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","60ec82dc88ab0ec84be178611515d702"],["D:/github/hexo-blog/public/posts/84d16999/index.html","2712c1038c7b8c35e73f6c7588add612"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","3b502b176f402c5605b58478d4feed8f"],["D:/github/hexo-blog/public/posts/b050203a/index.html","b0c4461ddb795724495c2a631fb96be9"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","0908884afeff894f6923ea333b4782bf"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","dc17de45d0a867078e484b4016720f00"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","ad3d3521bc5b52e11e63b7d2297f7fea"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","97f4c6dcc36bdaac645f7127c2323ea1"],["D:/github/hexo-blog/public/posts/f032f0/index.html","596108386cf850e86a907fb82bbd0601"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","3f7a1399ebcedf1293cf7d52ebae85bd"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","d800d40a6fae7d6891772d0b974c8d7d"],["D:/github/hexo-blog/public/posts/ff905629/index.html","c7e475c2338af5faf28f77cd0d5ccbac"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","83817eea94d24a4da41487fb99bd744e"],["D:/github/hexo-blog/public/tags/Hexo/index.html","4bac2694925302a2b142763a0b391759"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","8a1399c4daf6f2f93a13cf02ee44256e"],["D:/github/hexo-blog/public/tags/Next-js/index.html","94a9b79dd9558bfddfa43fdc65b5e202"],["D:/github/hexo-blog/public/tags/React/index.html","098b991fbbbdf644920782bae58f6fc9"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","4abbdc3bc21039023c08c0b5959b400e"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","15d8a3c24c2e13d7933475f40d1fd7db"],["D:/github/hexo-blog/public/tags/Typora/index.html","0fab830da691261dcd38bc56c95d0264"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","b92f68d23f4b1786d915547fef2e3a0c"],["D:/github/hexo-blog/public/tags/index.html","1700f1434a4e6d3e5fe970e955038d38"],["D:/github/hexo-blog/public/tags/jwt/index.html","3b70bd16589198cf287f722ce6b050ae"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","e2884c2b80e9aa473bfdb65a37bb5ded"],["D:/github/hexo-blog/public/tags/博客/index.html","3fa602f3ce734f07cbe85d4c8a39b8a9"],["D:/github/hexo-blog/public/tags/工作/index.html","1b2abc947003aa11e71d5475eb6cb15b"],["D:/github/hexo-blog/public/tags/工具/index.html","aafc9110c1fc16797b0978c13bd04bcc"],["D:/github/hexo-blog/public/tags/测试标签/index.html","72c5a2cd82e7776ee21cb8314deaf787"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","d88bb79929fcf5fd9fa9bd1826c5fe80"],["D:/github/hexo-blog/public/tags/装机/index.html","aa00950e3d0e51d1f3179956484c7072"],["D:/github/hexo-blog/public/tags/记录生活/index.html","4e598307248c612b80944aeef48d423b"],["D:/github/hexo-blog/public/tags/部署/index.html","cc0475c123334707068de7890ed1c95f"],["D:/github/hexo-blog/public/tags/阿里云/index.html","9648e6b92f8bdd505dac12b7246a7967"],["D:/github/hexo-blog/public/tags/面试题/index.html","dc4a26b3467dcabb7dc0ec7f58784d4a"],["D:/github/hexo-blog/public/tags/黑苹果/index.html","57818e5ce56b16938271828eb3fe80a7"]];
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








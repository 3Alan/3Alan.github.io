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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","6011ddf6f4b189564865ce716fcdc79f"],["D:/github/hexo-blog/public/about/index.html","9b08347587f1c38a05da4b38baae0f1c"],["D:/github/hexo-blog/public/archives/2020/05/index.html","285a995f1bccb17b4734dfb1f71290ad"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","41e4877990a4053f2e556740cb3d6d8c"],["D:/github/hexo-blog/public/archives/2020/06/index.html","cff277d21704fa50ff12df05bbbb4ef0"],["D:/github/hexo-blog/public/archives/2020/07/index.html","aa955a242bc4aacbb7aad742ec4d4c3b"],["D:/github/hexo-blog/public/archives/2020/11/index.html","e9530c94e9464603e0b5814c5b0eff80"],["D:/github/hexo-blog/public/archives/2020/index.html","1f374d4a8237415f27a8fffaa57f07b0"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","a8b6a9a71fc82850298f9eeb07062006"],["D:/github/hexo-blog/public/archives/2021/01/index.html","936e8f3ac7cf3614706a64e2fee32c2a"],["D:/github/hexo-blog/public/archives/2021/04/index.html","3cc1da4282e1b6426267d7e2fcb66f6e"],["D:/github/hexo-blog/public/archives/2021/index.html","760bede89a30c839dd44bd24510d4a20"],["D:/github/hexo-blog/public/archives/index.html","1be9145e2e9a709ef98b3d25ca5a5c51"],["D:/github/hexo-blog/public/archives/page/2/index.html","1be9145e2e9a709ef98b3d25ca5a5c51"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","246e7f977322f79de5eb1619abd0ea92"],["D:/github/hexo-blog/public/categories/index.html","9285d52ca6a19f0158518c1a7f2c696d"],["D:/github/hexo-blog/public/categories/前端/React/index.html","87da8854917bd7638755df2b6caea001"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","6e68b3c85ee661293b1320f5203260d7"],["D:/github/hexo-blog/public/categories/前端/index.html","e0706cfa2e86d9a3000dcb034539308a"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","d77a3c8525c10d46b3a77247e98850fc"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","064a6dcb1861e1e5bdc1bbedf2c2f922"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","03e934a4ba1a2943a6c9d378a88f3af0"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","cee00b292bbea036b942944887d556d9"],["D:/github/hexo-blog/public/categories/效率工具/index.html","cb92a2e273d5211f36b88ad02775607c"],["D:/github/hexo-blog/public/categories/测试分类/index.html","aa35a14cee18916f1c33a8bdad92c865"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","7b8a94a00f3535c34182b4039671385c"],["D:/github/hexo-blog/public/categories/记录生活/index.html","abefb5e5fb0f0666132af9e8bf4886c8"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","af5b2f8be58f59df632d8c8b5920cd9e"],["D:/github/hexo-blog/public/index.html","49b975d5a331ef0d7c01e6a5be4100f0"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","161df051b0ccecdd14dc1aff8610c373"],["D:/github/hexo-blog/public/page/2/index.html","cf81f0f0b890aaa0043a53ed79e6543a"],["D:/github/hexo-blog/public/posts/20802113/index.html","63739ee0e107c9c530956a582cd146f9"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","682215fdcb8f422aab60599d1dcf7cf8"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","8cc3e83f653a6ba0b64406cf06201ecd"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","d6a8c8c2f02ee8eb1c027628893dfb98"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","4f823553a69a7b154cd469d25f883ed9"],["D:/github/hexo-blog/public/posts/6af865/index.html","3498885c7a8e4d6df28ad532994ebd9e"],["D:/github/hexo-blog/public/posts/829819a3/index.html","12ec82716311fb1b71f5498745299eaf"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","4b121e8f097f040585d27051bbb91d91"],["D:/github/hexo-blog/public/posts/84d16999/index.html","87414d8f430a589caaf51fd41afa4ec7"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","1ed2f0ed5e14f538b5e188fc0aac1a79"],["D:/github/hexo-blog/public/posts/b050203a/index.html","aa641d943d4d792f275ab9e2886a2a5c"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","991620bd811355085cd87934edf42df8"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","46d4fc7758544503c1ca9f04ec0b1a21"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","a890cd3b811cf11fc99fd0a0a85779d3"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","673df5bc1a6387860e813a5de9b2d74b"],["D:/github/hexo-blog/public/posts/f032f0/index.html","c476f1e104e87b3f3e10756a3099a9ca"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","48481a3e34d95419325a42e940cd37c3"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","5105ebe0eb724e1e98c7257ef94ad1ac"],["D:/github/hexo-blog/public/posts/ff905629/index.html","6e4d7cf7664270c87e43b6611895ccfb"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","1b5539dbd52b3c8708d3f02700e809f0"],["D:/github/hexo-blog/public/tags/Hexo/index.html","b877a5f29d3df32342577b26476c90c6"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","a27c2dee3c57087bd19e1b3990d6513c"],["D:/github/hexo-blog/public/tags/Next-js/index.html","e9959d7b5d2129855a1528713b48df36"],["D:/github/hexo-blog/public/tags/React/index.html","5fd6e6d3cb712195acd0c23fcbbbc446"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","a3da4b4a4aca889d7d87b0f14efa43f9"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","c0ff6ca03e06af4b80928da9368267d3"],["D:/github/hexo-blog/public/tags/Typora/index.html","b221f9f327ab2b9bc520f8759b9d0f8c"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","635df7789cd59553ea829099fa4405ba"],["D:/github/hexo-blog/public/tags/index.html","fc6f9326c0edd9974479c73f7176ffef"],["D:/github/hexo-blog/public/tags/jwt/index.html","3aa6a213e57f5656dad649dbdc446978"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","15451d7dae4beb9a527bed05d06a0a4f"],["D:/github/hexo-blog/public/tags/博客/index.html","ad45c63f2260226992248f13b8f5a988"],["D:/github/hexo-blog/public/tags/工作/index.html","7099c93466a18c719f2ab3165e3c13fe"],["D:/github/hexo-blog/public/tags/工具/index.html","6729d967ff976d1af378e9fc0e5f9501"],["D:/github/hexo-blog/public/tags/测试标签/index.html","f227955e766f80bdf417016ba843672d"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","f0a63779f513ef351d381cfc570fa668"],["D:/github/hexo-blog/public/tags/记录生活/index.html","f304c0bbc6b399b9f8a3383aa73c0f3d"],["D:/github/hexo-blog/public/tags/部署/index.html","bd3ccaff88808a3076a1f4848dead588"],["D:/github/hexo-blog/public/tags/阿里云/index.html","996c71166793c1b3d3c1540773d1ba34"],["D:/github/hexo-blog/public/tags/面试题/index.html","2c024daf24aec8b720ded1776f5da58c"]];
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








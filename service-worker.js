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

var precacheConfig = [["D:/github/hexo-blog/public/404.html","6011ddf6f4b189564865ce716fcdc79f"],["D:/github/hexo-blog/public/about/index.html","9b08347587f1c38a05da4b38baae0f1c"],["D:/github/hexo-blog/public/archives/2020/05/index.html","fd602948f9645e51fd5af53de9f23a58"],["D:/github/hexo-blog/public/archives/2020/05/page/2/index.html","c7224af9a5faca0818106fc9997276a5"],["D:/github/hexo-blog/public/archives/2020/06/index.html","ce0d18a031aa9afac1249332c4798c2f"],["D:/github/hexo-blog/public/archives/2020/07/index.html","3c1222ca08fba06efd7ce2e0b94b4db4"],["D:/github/hexo-blog/public/archives/2020/11/index.html","9784875c2d87c1fd5a385623d55afcce"],["D:/github/hexo-blog/public/archives/2020/index.html","e62881c393f01d0abb112dadf668206b"],["D:/github/hexo-blog/public/archives/2020/page/2/index.html","f601b03af11ba0faa9ca12252288f330"],["D:/github/hexo-blog/public/archives/2021/01/index.html","89fce71eef204b732b2cbf176e63e926"],["D:/github/hexo-blog/public/archives/2021/04/index.html","a26d326df71889fdd97d032703bdd6c9"],["D:/github/hexo-blog/public/archives/2021/index.html","2f1f13dcd002680f7f3e41fadc00bbf1"],["D:/github/hexo-blog/public/archives/index.html","d500724ce309aec8c1b965e0301dae0c"],["D:/github/hexo-blog/public/archives/page/2/index.html","d500724ce309aec8c1b965e0301dae0c"],["D:/github/hexo-blog/public/categories/Hexo博客/index.html","3b8a8547460f4ef44fe6351766296435"],["D:/github/hexo-blog/public/categories/index.html","9285d52ca6a19f0158518c1a7f2c696d"],["D:/github/hexo-blog/public/categories/前端/React/index.html","3acbde3e05300e8270ada63c32189dfd"],["D:/github/hexo-blog/public/categories/前端/TypeScript/index.html","192878da09dfb798dee1f85656b23429"],["D:/github/hexo-blog/public/categories/前端/index.html","a03d8412ce6fdf4484d95e7a126613ee"],["D:/github/hexo-blog/public/categories/前端/page/2/index.html","fe608fa612971fdb4df008d96996adfa"],["D:/github/hexo-blog/public/categories/前端/webpack4-0学习总结/index.html","8c9e1b1c389de0c9b545556f33e12b99"],["D:/github/hexo-blog/public/categories/前端/工作/index.html","ea5b7f9474bb2d636a384ca22105d0f2"],["D:/github/hexo-blog/public/categories/前端/面试造轮/index.html","d95e8b6785e61b990cb21c4b7f38b333"],["D:/github/hexo-blog/public/categories/效率工具/index.html","cb782f75fdfaf9e2e5cfabe12d7a7f54"],["D:/github/hexo-blog/public/categories/测试分类/index.html","2cfe796a5081ce6df33d09d683034b8d"],["D:/github/hexo-blog/public/categories/记录生活/2020/index.html","84bf2679ba532bd48850b7d2e1e5d511"],["D:/github/hexo-blog/public/categories/记录生活/index.html","4b2bc55ca6a3932caf4e437b33abc546"],["D:/github/hexo-blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["D:/github/hexo-blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["D:/github/hexo-blog/public/friends/index.html","af5b2f8be58f59df632d8c8b5920cd9e"],["D:/github/hexo-blog/public/index.html","a061d07453580987f0b5417089204699"],["D:/github/hexo-blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/github/hexo-blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/github/hexo-blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["D:/github/hexo-blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/github/hexo-blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/github/hexo-blog/public/list/index.html","ff30ddc4b530044b019be9e8358ad63d"],["D:/github/hexo-blog/public/page/2/index.html","5918c2dc0e037911412289bef6fe45d5"],["D:/github/hexo-blog/public/posts/20802113/index.html","63739ee0e107c9c530956a582cd146f9"],["D:/github/hexo-blog/public/posts/24b4915a/index.html","682215fdcb8f422aab60599d1dcf7cf8"],["D:/github/hexo-blog/public/posts/35b500c6/index.html","8cc3e83f653a6ba0b64406cf06201ecd"],["D:/github/hexo-blog/public/posts/3b0a6cbe/index.html","d6a8c8c2f02ee8eb1c027628893dfb98"],["D:/github/hexo-blog/public/posts/66d3b164/index.html","4f823553a69a7b154cd469d25f883ed9"],["D:/github/hexo-blog/public/posts/6af865/index.html","3498885c7a8e4d6df28ad532994ebd9e"],["D:/github/hexo-blog/public/posts/829819a3/index.html","12ec82716311fb1b71f5498745299eaf"],["D:/github/hexo-blog/public/posts/832ac07a/index.html","8de8d56581e60b162337adcb1dacfbd1"],["D:/github/hexo-blog/public/posts/84d16999/index.html","87414d8f430a589caaf51fd41afa4ec7"],["D:/github/hexo-blog/public/posts/92c49d45/index.html","1ed2f0ed5e14f538b5e188fc0aac1a79"],["D:/github/hexo-blog/public/posts/b050203a/index.html","aa641d943d4d792f275ab9e2886a2a5c"],["D:/github/hexo-blog/public/posts/b4c78541/index.html","991620bd811355085cd87934edf42df8"],["D:/github/hexo-blog/public/posts/c05e5480/index.html","46d4fc7758544503c1ca9f04ec0b1a21"],["D:/github/hexo-blog/public/posts/cf86baf1/index.html","a890cd3b811cf11fc99fd0a0a85779d3"],["D:/github/hexo-blog/public/posts/d4ddb122/index.html","673df5bc1a6387860e813a5de9b2d74b"],["D:/github/hexo-blog/public/posts/f032f0/index.html","c476f1e104e87b3f3e10756a3099a9ca"],["D:/github/hexo-blog/public/posts/f9d92613/index.html","48481a3e34d95419325a42e940cd37c3"],["D:/github/hexo-blog/public/posts/fc7889ef/index.html","5105ebe0eb724e1e98c7257ef94ad1ac"],["D:/github/hexo-blog/public/posts/ff905629/index.html","6e4d7cf7664270c87e43b6611895ccfb"],["D:/github/hexo-blog/public/tags/DIY博客/index.html","fd6097c9a30f40d43d14cd17b810ce94"],["D:/github/hexo-blog/public/tags/Hexo/index.html","25d5a586786991743f0d3c2640e91f0f"],["D:/github/hexo-blog/public/tags/Hexo评论系统/index.html","ea4f079e18a1e5c1a72052fa40603b38"],["D:/github/hexo-blog/public/tags/Next-js/index.html","03b5d0f37cc370077167d54b843d8ce1"],["D:/github/hexo-blog/public/tags/React/index.html","6eb827ceb465abee0b85649bdbc71606"],["D:/github/hexo-blog/public/tags/ReactHook/index.html","0518897f5a1f09f88e102636e2f2e70f"],["D:/github/hexo-blog/public/tags/TypeScript/index.html","691de3a0e523faa8915a64da7073e0c1"],["D:/github/hexo-blog/public/tags/Typora/index.html","c1fc27a667917ec4078c1b35dc4ea7d6"],["D:/github/hexo-blog/public/tags/Valine国际版/index.html","af68a420b7569f7c564eec89d4dfe6c4"],["D:/github/hexo-blog/public/tags/index.html","fc6f9326c0edd9974479c73f7176ffef"],["D:/github/hexo-blog/public/tags/jwt/index.html","0abba846cdde4afd343d63884926b13a"],["D:/github/hexo-blog/public/tags/webpack4-0/index.html","19290004ec0beeab53514fd60c3bc614"],["D:/github/hexo-blog/public/tags/博客/index.html","46b1f10c21fe14f8b5a3bde52dd91173"],["D:/github/hexo-blog/public/tags/工作/index.html","e1601088124ebb8220d906d40b2a332c"],["D:/github/hexo-blog/public/tags/工具/index.html","aafea9be758322f5cb2af31e5e5a1838"],["D:/github/hexo-blog/public/tags/测试标签/index.html","47ce89b228c82b355bf51778dae4c07d"],["D:/github/hexo-blog/public/tags/自动化测试/index.html","a984f069a15ff7701c7fa491e104299a"],["D:/github/hexo-blog/public/tags/记录生活/index.html","b41ae632e459fe49e90cd2d0bcffd19b"],["D:/github/hexo-blog/public/tags/部署/index.html","09baaf255412ab07b70d888cb144cf6c"],["D:/github/hexo-blog/public/tags/阿里云/index.html","bc0a64781a171ac7264acd9b0db69654"],["D:/github/hexo-blog/public/tags/面试题/index.html","754f11a83f51dc254226a67d4582b03f"]];
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








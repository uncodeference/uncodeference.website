'use strict'
self.addEventListener('install', function(e) {
  e.waitUntil(self.skipWaiting())
}),
  self.addEventListener('activate', function(e) {
    e.waitUntil(
      caches.keys().then(function(keyList) {
        console.log('clearing the cache of our old service Worker')
        return Promise.all(
          keyList.map(function(key) {
            return caches.delete(key)
          })
        )
      })
    )
  })

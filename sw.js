// 這個檔案是讓瀏覽器承認我們是 PWA 的必備通行證
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 什麼都不攔截，讓網路請求正常通過
});
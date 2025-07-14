// Service Worker for Paketti Manual Update Notifications
const CACHE_NAME = 'paketti-manual-v1';
const VERSION_KEY = 'paketti-changeslog-version';

// Install event - cache initial resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/CHANGESLOG.html',
        '/dark-mode.css'
      ]);
    })
  );
});

// Activate event - clean up old caches and check for updates
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Check for updates when activated
      return checkForUpdates();
    })
  );
});

// Handle fetch events
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Handle push events for notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New updates available in Paketti Manual!',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'view',
        title: 'View Updates',
        icon: '/favicon.ico'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon.ico'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Paketti Manual Updated!', options)
  );
});

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('/CHANGESLOG.html')
    );
  }
});

// Check for updates function
async function checkForUpdates() {
  try {
    console.log('Checking for updates...');
    
    // Fetch the current CHANGESLOG.html with cache-busting
    const response = await fetch('/CHANGESLOG.html?t=' + Date.now());
    const html = await response.text();
    
    // Extract version/timestamp from HTML
    const versionMatch = html.match(/data-version="([^"]+)"/);
    const currentVersion = versionMatch ? versionMatch[1] : null;
    
    console.log('Current version:', currentVersion);
    
    if (currentVersion) {
      // Get stored version from IndexedDB
      const storedVersion = await getStoredVersion();
      console.log('Stored version:', storedVersion);
      
      if (storedVersion && storedVersion !== currentVersion) {
        console.log('Update detected! Showing notification...');
        
        // Show notification about update
        self.registration.showNotification('Paketti Manual Updated!', {
          body: 'New changes have been added to the Paketti Manual changelog.',
          icon: '/favicon.ico',
          badge: '/favicon.ico',
          tag: 'paketti-update',
          requireInteraction: true,
          actions: [
            {
              action: 'view',
              title: 'View Updates'
            }
          ]
        });
      } else if (!storedVersion) {
        console.log('First visit - storing initial version');
      } else {
        console.log('No updates detected');
      }
      
      // Store the new version
      await storeVersion(currentVersion);
    } else {
      console.log('No version found in HTML');
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
}

// Helper functions for version storage
async function getStoredVersion() {
  return new Promise((resolve) => {
    const request = indexedDB.open('PakettiManual', 1);
    
    request.onerror = () => resolve(null);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['versions'], 'readonly');
      const store = transaction.objectStore('versions');
      const getRequest = store.get(VERSION_KEY);
      
      getRequest.onsuccess = () => {
        resolve(getRequest.result ? getRequest.result.version : null);
      };
      
      getRequest.onerror = () => resolve(null);
    };
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore('versions', { keyPath: 'key' });
    };
  });
}

async function storeVersion(version) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('PakettiManual', 1);
    
    request.onerror = () => reject(request.error);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['versions'], 'readwrite');
      const store = transaction.objectStore('versions');
      
      store.put({ key: VERSION_KEY, version: version });
      
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    };
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore('versions', { keyPath: 'key' });
    };
  });
}

// Handle messages from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CHECK_UPDATES') {
    checkForUpdates();
  }
});

// Set up periodic update checking
setInterval(checkForUpdates, 30 * 60 * 1000); // Check every 30 minutes 
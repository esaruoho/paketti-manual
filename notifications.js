// Paketti Manual Update Notifications
class PakettiNotifications {
  constructor() {
    this.hasPermission = false;
    this.registration = null;
    this.init();
  }

  async init() {
    // Check if the browser supports notifications
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications.');
      return;
    }

    // Check if service workers are supported
    if (!('serviceWorker' in navigator)) {
      console.log('This browser does not support service workers.');
      return;
    }

    // Check current permission status
    this.hasPermission = Notification.permission === 'granted';
    
    // Register service worker
    await this.registerServiceWorker();
    
    // Show permission prompt after a brief delay
    setTimeout(() => {
      this.showPermissionPrompt();
    }, 2000);
    
    // If on CHANGESLOG page, check for updates immediately
    if (window.location.pathname.includes('CHANGESLOG')) {
      setTimeout(() => {
        this.checkForUpdates();
      }, 5000); // Check after 5 seconds to let service worker fully load
    }
  }

  async registerServiceWorker() {
    try {
      this.registration = await navigator.serviceWorker.register('./notification-worker.js');
      console.log('Service Worker registered successfully');
      
      // Listen for updates
      this.registration.addEventListener('updatefound', () => {
        console.log('Service Worker update found');
      });
      
      // Wait for service worker to be active, then check for updates
      if (this.registration.active) {
        this.checkForUpdates();
      } else {
        this.registration.addEventListener('statechange', () => {
          if (this.registration.active) {
            this.checkForUpdates();
          }
        });
      }
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }

  showPermissionPrompt() {
    // Don't show if already granted or denied
    if (Notification.permission !== 'default') {
      return;
    }

    // Create a subtle notification banner
    const banner = this.createNotificationBanner();
    document.body.appendChild(banner);
  }

  createNotificationBanner() {
    const banner = document.createElement('div');
    banner.id = 'notification-banner';
    banner.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #2c3e50;
        color: white;
        padding: 12px;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 1.4;
      ">
        <span style="margin-right: 15px;">📢 Get notified when Paketti Manual is updated!</span>
        <button id="allow-notifications" style="
          background: #3498db;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-right: 8px;
          font-size: 12px;
        ">Allow Notifications</button>
        <button id="dismiss-banner" style="
          background: #95a5a6;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        ">Not Now</button>
      </div>
    `;

    // Add event listeners
    banner.querySelector('#allow-notifications').addEventListener('click', () => {
      this.requestPermission();
      banner.remove();
    });

    banner.querySelector('#dismiss-banner').addEventListener('click', () => {
      banner.remove();
      // Remember that user dismissed (don't show again for this session)
      sessionStorage.setItem('paketti-notification-dismissed', 'true');
    });

    // Don't show if user already dismissed this session
    if (sessionStorage.getItem('paketti-notification-dismissed')) {
      return document.createElement('div'); // Return empty div
    }

    return banner;
  }

  async requestPermission() {
    if (Notification.permission === 'granted') {
      this.hasPermission = true;
      this.showSuccessMessage();
      return;
    }

    if (Notification.permission === 'denied') {
      this.showDeniedMessage();
      return;
    }

    // Request permission
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      this.hasPermission = true;
      this.showSuccessMessage();
      
      // Show a test notification
      this.showTestNotification();
    } else {
      this.showDeniedMessage();
    }
  }

  showSuccessMessage() {
    this.showMessage('✅ Notifications enabled! You\'ll be notified when the Paketti Manual is updated.', '#27ae60');
  }

  showDeniedMessage() {
    this.showMessage('ℹ️ Notifications blocked. You can enable them later in your browser settings.', '#e74c3c');
  }

  showMessage(text, color) {
    const message = document.createElement('div');
    message.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${color};
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        z-index: 10001;
        font-family: Arial, sans-serif;
        font-size: 14px;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      ">
        ${text}
      </div>
    `;

    document.body.appendChild(message);

    // Remove after 5 seconds
    setTimeout(() => {
      message.remove();
    }, 5000);
  }

  showTestNotification() {
    if (this.hasPermission) {
      new Notification('Paketti Manual', {
        body: 'Notifications are now enabled! You\'ll receive updates when new changes are available.',
        icon: './favicon.ico',
        tag: 'paketti-test'
      });
    }
  }

  // Method to manually check for updates (can be called from console)
  async checkForUpdates() {
    if (!this.registration) {
      console.error('Service worker not registered');
      return;
    }

    console.log('Triggering manual update check...');
    
    // Send message to service worker to check for updates
    if (this.registration.active) {
      this.registration.active.postMessage({
        type: 'CHECK_UPDATES'
      });
    } else {
      console.log('Service worker not active yet');
    }
  }

  // Debug method to check current status
  getStatus() {
    return {
      hasPermission: this.hasPermission,
      notificationPermission: Notification.permission,
      serviceWorkerRegistered: !!this.registration,
      serviceWorkerActive: this.registration ? !!this.registration.active : false
    };
  }
}

// Initialize notifications when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.pakettiNotifications = new PakettiNotifications();
  
  // Add debug info to console
  console.log('Paketti Notifications initialized. Debug commands:');
  console.log('- pakettiNotifications.checkForUpdates() - manually check for updates');
  console.log('- pakettiNotifications.getStatus() - check notification status');
});

// Add settings toggle to allow users to manage notifications
function addNotificationSettings() {
  // Only add if on CHANGESLOG page
  if (!window.location.pathname.includes('CHANGESLOG')) {
    return;
  }

  const settingsHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #34495e;
      color: white;
      padding: 10px;
      border-radius: 6px;
      font-family: Arial, sans-serif;
      font-size: 12px;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    ">
      <div style="margin-bottom: 8px;">📢 Update Notifications</div>
      <button id="toggle-notifications" style="
        background: #3498db;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 11px;
        width: 100%;
      ">
        ${Notification.permission === 'granted' ? 'Enabled ✅' : 'Enable'}
      </button>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', settingsHTML);

  document.getElementById('toggle-notifications').addEventListener('click', () => {
    if (Notification.permission === 'granted') {
      // Can't programmatically revoke permission, show instructions
      alert('To disable notifications, please go to your browser settings and block notifications for this site.');
    } else {
      window.pakettiNotifications.requestPermission();
    }
  });
}

// Add settings when page loads
document.addEventListener('DOMContentLoaded', addNotificationSettings); 
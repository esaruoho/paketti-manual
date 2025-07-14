# Paketti Manual Notification System

This document explains how the browser notification system works for the Paketti Manual.

## Features

- **Browser-standard notifications**: Uses the standard Web Notifications API
- **Opt-in system**: Users are prompted to allow notifications with a friendly banner
- **Automatic update detection**: Checks for changes to the CHANGESLOG page
- **Service Worker**: Runs in the background to detect updates
- **Settings control**: Users can manage notification preferences

## How it Works

1. **Initial Visit**: When a user visits the site, a subtle banner appears asking if they want to receive update notifications
2. **Permission Request**: If they click "Allow", the browser's standard permission dialog appears
3. **Service Worker**: A background service worker is registered to handle notifications
4. **Update Detection**: The system checks for version changes in the CHANGESLOG.html file
5. **Notifications**: When updates are detected, users receive a browser notification

### When Updates Are Checked

- **On page load**: When visiting CHANGESLOG.html
- **Service worker activation**: When the service worker first starts
- **Periodic checks**: Every 30 minutes while the page is open
- **Manual trigger**: Via console command `pakettiNotifications.checkForUpdates()`

## Technical Details

### Files
- `notifications.js` - Main notification handling script
- `notification-worker.js` - Service worker for background processing
- `manifest.json` - Web app manifest for PWA features

### Version Tracking
- Each build of CHANGESLOG.html includes a timestamp in the `data-version` attribute
- The service worker compares this with the stored version to detect updates
- Version information is stored in the browser's IndexedDB

### Update Checking
- Checks for updates every 30 minutes while the page is open
- Compares the current version with the stored version
- Shows notifications only for actual changes

## User Experience

- **Non-intrusive**: Banner only appears once per session for new users
- **Standard behavior**: Uses browser's native notification system
- **Easy management**: Settings button on CHANGESLOG page for managing notifications
- **Graceful degradation**: Works even if service workers or notifications aren't supported

## Privacy

- All data is stored locally in the browser
- No personal information is collected or transmitted
- Notifications are purely client-side

## Browser Support

- Works in all modern browsers that support:
  - Web Notifications API
  - Service Workers
  - IndexedDB
- Gracefully falls back if features aren't supported

## Testing and Debugging

### Debug Commands (available in browser console)
- `pakettiNotifications.checkForUpdates()` - manually check for updates
- `pakettiNotifications.getStatus()` - check notification status
- `pakettiNotifications.requestPermission()` - request notification permission

### Test Page
A test page `test-notifications.html` is available for debugging during development, which provides:
- Visual status display
- Manual trigger buttons
- Console log viewer
- Storage clearing functionality

### Troubleshooting
- Check browser console for error messages
- Ensure notifications are enabled in browser settings
- Verify service worker is registered and active
- Check that CHANGESLOG.html contains the `data-version` attribute 
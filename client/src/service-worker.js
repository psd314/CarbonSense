

export default function register() {

  window.addEventListener('install', function(event) {
    console.log('Service worker installing...');
    window.skipWaiting();
  });

  window.addEventListener('activate', function(event) {
    console.log('Service worker activating...');
  });

  // I'm a new service worker

  window.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
  });

}
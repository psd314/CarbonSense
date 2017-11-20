function registerServiceWorker() {
    return navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
            console.log('Service worker successfully registered.');
            return registration;
        })
        .catch(function(err) {
            console.error('Unable to register service worker.', err);
        });
}

function askPermission() {
    return new Promise(function(resolve, reject) {
            const permissionResult = Notification.requestPermission(function(result) {
                resolve(result);
            });

            if (permissionResult) {
                permissionResult.then(resolve, reject);
            }
        })
        .then(function(permissionResult) {
            if (permissionResult !== 'granted') {
                throw new Error('We weren\'t granted permission.');
            }
        });
}

(function() {
    'use strict';
    if (!('serviceWorker' in navigator)) {
        console.log('Service worker not supported');
        return;
    }
    navigator.serviceWorker.register('service-worker.js', {
            
        })
        .then(function(registration) {
            console.log('Registered at scope:', registration.scope);
        })
        .catch(function(error) {
            console.log('Registration failed:', error);
        });
})();


// if (!('serviceWorker' in navigator)) {
//     console.log('Service worker not supported');
//     // return;
// }
// navigator.serviceWorker.register('service-worker.js')
//     .then(function() {
//         console.log('Registered');
//     })
//     .catch(function(error) {
//         console.log('Registration failed:', error);
//     });

// if(navigator.serviceWorker && window.PushManager) {
// 	registerServiceWorker();	
// 	askPermission();
// }
// subscribe/unsubscribe user
// save subscription object to mongo
// set up admin page
// loop through db and send push to all subscribed endpoints

// var app = (function() {

var isSubscribed = false;
var swRegistration = null;
var applicationServerPublicKey = 'BNlOreB1XiuTec8OgtHnweDKXZcAqZJ0LiSp4H68dhnyZcuBESy1jc_2L6khjiL45sUet6EiholjXO_0XaDnYjY';
// TODO 2.1 - check for notification support


if ('serviceWorker' in navigator && 'PushManager' in window) {
    // console.log('Service Worker and Push is supported');

    navigator.serviceWorker.register('service-worker.js')
        .then(function(swReg) {
            console.log('Service Worker is registered', swReg);

            swRegistration = swReg;
            Notification.requestPermission(function(status) {
                console.log('Notification permission status:', status);

                if (status === "granted") {
                    swRegistration.pushManager.getSubscription()
                        .then(function(subscription) {
                            if(subscription === null) {
                                subscribeUser();
                            }
                    });
                }
            });
            // TODO 3.3a - call the initializeUI() function
            // initializeUI();
            // displayNotification();

        })
        .catch(function(error) {
            console.error('Service Worker Error', error);
        });
} else {
    console.warn('Push messaging is not supported');
}

// TODO 2.2 - request permission to show notifications
// Notification.requestPermission(function(status) {
//     console.log('Notification permission status:', status);
//     if (status === "granted") {
//         navigator.serviceWorker.getRegistration().then(function(reg) {
//             subscribeUser();
//         });
//     }
// });

// initializeUI();
// admin page sends to route on server, server sends push to ??
// fires node/main.js???
function displayNotification() {

    // TODO 2.3 - display a Notification
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {

            // TODO 2.4 - Add 'options' object to configure the notification
            var options = {
                body: 'First notification!',
                tag: 'id1',
                vibrate: [100, 50, 100],
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1
                },

                // TODO 2.5 - add actions to the notification
                actions: [{
                        action: 'explore',
                        title: 'Go to the site',
                    }, {
                        action: 'close',
                        title: 'Close the notification',
                    }, ]
                    // TODO 5.1 - add a tag to the notification

            };
            reg.showNotification('Hello world!', options);
        });
    }
}

function initializeUI() {

    swRegistration.pushManager.getSubscription()
        .then(function(subscription) {
            // console.log('sub', subscription);
            // if no subscription object found subscription === null
            isSubscribed = (subscription !== null);

            updateSubscriptionOnServer(subscription);

            if (isSubscribed) {
                console.log('User IS subscribed.');
            } else {
                console.log('User is NOT subscribed.');
            }
        });
}

// TODO 4.2a - add VAPID public key

function subscribeUser() {
    var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
        })
        .then(function(subscription) {
            console.log('User is subscribed:', subscription);

            updateSubscriptionOnServer(subscription);
            isSubscribed = true;
        })
        .catch(function(err) {
            if (Notification.permission === 'denied') {
                console.warn('Permission for notifications was denied');
            } else {
                console.error('Failed to subscribe the user: ', err);
            }
        });
}

function unsubscribeUser() {

    // TODO 3.5 - unsubscribe from the push service
    swRegistration.pushManager.getSubscription()
        .then(function(subscription) {
            if (subscription) {
                return subscription.unsubscribe();
            }
        })
        .catch(function(error) {
            console.log('Error unsubscribing', error);
        })
        .then(function() {
            updateSubscriptionOnServer(null);

            console.log('User is unsubscribed');
            isSubscribed = false;
        });

}

function updateSubscriptionOnServer(subscription) {
    if (subscription !== null) {
        let xhttp = new XMLHttpRequest();
        xhttp.open('POST', '/subscriptions', true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('post success');
            }
        };
        xhttp.send(JSON.stringify(subscription));
    }
    // Here's where you would send the subscription to the application server

    // var subscriptionJson = document.querySelector('.js-subscription-json');
    // var endpointURL = document.querySelector('.js-endpoint-url');
    // var subAndEndpoint = document.querySelector('.js-sub-endpoint');

    // if (subscription) {
    //     subscriptionJson.textContent = JSON.stringify(subscription);
    //     endpointURL.textContent = subscription.endpoint;
    //     subAndEndpoint.style.display = 'block';
    // } else {
    //     subAndEndpoint.style.display = 'none';
    // }
}



function urlB64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// })();



// function registerServiceWorker() {
//     return navigator.serviceWorker.register('service-worker.js')
//         .then(function(registration) {
//             console.log('Service worker successfully registered.');
//             return registration;
//         })
//         .catch(function(err) {
//             console.error('Unable to register service worker.', err);
//         });
// }

// function askPermission() {
//     return new Promise(function(resolve, reject) {
//             const permissionResult = Notification.requestPermission(function(result) {
//                 resolve(result);
//             });

//             if (permissionResult) {
//                 permissionResult.then(resolve, reject);
//             }
//         })
//         .then(function(permissionResult) {
//             if (permissionResult !== 'granted') {
//                 throw new Error('We weren\'t granted permission.');
//             }
//         });
// }

// (function() {
//     'use strict';
//     if (!('serviceWorker' in navigator)) {
//         console.log('Service worker not supported');
//         return;
//     }
//     navigator.serviceWorker.register('service-worker.js', {

//         })
//         .then(function(registration) {
//             console.log('Registered at scope:', registration.scope);
//         })
//         .catch(function(error) {
//             console.log('Registration failed:', error);
//         });
// })();


// // if (!('serviceWorker' in navigator)) {
// //     console.log('Service worker not supported');
// //     // return;
// // }
// // navigator.serviceWorker.register('service-worker.js')
// //     .then(function() {
// //         console.log('Registered');
// //     })
// //     .catch(function(error) {
// //         console.log('Registration failed:', error);
// //     });

// // if(navigator.serviceWorker && window.PushManager) {
// // 	registerServiceWorker();	
// // 	askPermission();
// // }
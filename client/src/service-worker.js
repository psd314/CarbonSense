// (function() {

// })();
register();



function register() {

    // window.self.addEventListener('notificationclick', event => {
    //     console.log('On notification click: ', event.notification.tag);
    //     event.notification.close();
    // });

    window.addEventListener('install', function(event) {
        console.log('Service worker installing...');
        // window.skipWaiting();
    });

    window.addEventListener('activate', function(event) {
        console.log('Service worker activating...');
    });

    // I'm a new service worker

    window.addEventListener('fetch', function(event) {
        console.log('Fetching:', event.request.url);
    });

    window.addEventListener('notificationclose', function(e) {
        var notification = e.notification;
        var primaryKey = notification.data.primaryKey;

        console.log('Closed notification: ' + primaryKey);
    });

    window.addEventListener('notificationclick', function(e) {
        var notification = e.notification;
        var primaryKey = notification.data.primaryKey
        var action = e.action;

        if (action === 'close') {
            notification.close();
        }
    });

    // window.addEventListener('notificationclick', function(e) {
    //     var notification = e.notification;
    //     var primaryKey = notification.data.primaryKey   
    //     var action = e.action;

    //     if (action === 'close') {
    //         notification.close();
    //     } else {
    //         e.waitUntil(
    //             clients.matchAll().then(function(clis) {
    //                 var client = clis.find(function(c) {
    //                     return c.visibilityState === 'visible';
    //                 });
    //                 if (client !== undefined) {
    //                     client.navigate('samples/page' + primaryKey + '.html');
    //                     client.focus();
    //                 } else {
    //                     // there are no visible windows. Open one.
    //                     clients.openWindow('samples/page' + primaryKey + '.html');
    //                     notification.close();
    //                 }
    //             })
    //         );
    //     }

    //     window.registration.getNotifications().then(function(notifications) {
    //         notifications.forEach(function(notification) {
    //             notification.close();
    //         });
    //     });
    // });

    window.addEventListener('push', function(e) {
        var body;

        if (e.data) {
            body = e.data.text();
        } else {
            body = 'Default body';
        }

        var options = {
            body: body,
            icon: 'images/notification-flat.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            },
            actions: [{
                action: 'explore',
                title: 'Go to the site',
                icon: 'images/checkmark.png'
            }, {
                action: 'close',
                title: 'Close the notification',
                icon: 'images/xmark.png'
            }, ]
        };

        e.waitUntil(
            window.registration.showNotification('Push Notification', options)
        );
    });

}
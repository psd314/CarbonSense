const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    endpoint: {
        type: String,
        unique: true
 	},
 	expirationTime: {
 		type: String
 	},
 	keys : {
 		p256dh : {
 			type: String
 		},
 		auth : {
 			type: String
 		}
 	}
}); 

const Subscription = mongoose.model('Subscription', subscriptionSchema); 

module.exports = Subscription; 
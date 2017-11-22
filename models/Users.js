const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: Date
    }, 
    gender: {
        type: String
    },
    location: {
        type: String
    },
    gaugeTarget: {
        type: Number,
        defualt: 100
    }, 
    successStreak: {
        //add to this number for each successful day (day below guageTarget)
        type: Number
    },
    challengeScore: {
        type: Number
    }
}); 

const User = mongoose.model('User', userSchema); 

module.exports = User; 
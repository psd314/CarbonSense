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
    image: {
        type: String
    },
    gaugeTarget: {
        type: Number,
        defualt: 100
    }, 
    successStreak: {
        //add to this number for each successful day (day below guageTarget)
        type: Number,
        default: 0
    },
    challengeScore: {
        type: Number,
        default: 0
    }
}); 

const User = mongoose.model('User', userSchema); 

module.exports = User; 
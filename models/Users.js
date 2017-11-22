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
    dailyPoints: {
        //daily carbonPoints
        type: Number
    },
    daysSuccessful: {
        //add to this number for each successful day (day below guageTarget)
        type: Number
    },
    challengeScore: {
        type: Number
    }, 
    totalScore: {
        //total score by which leaderboard status is established?
        type: Number
    }
}); 

const User = mongoose.model('User', userSchema); 

module.exports = User; 
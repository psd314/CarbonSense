const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type: Date,
        default: 1 / 1 / 1980
    },
    gender: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    gaugeTarget: {
        type: Number,
        default: 100
    },
    dailyScores: [{
        date: {
            type: String
        },
        score: {
            type: Number
        }
    }],
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
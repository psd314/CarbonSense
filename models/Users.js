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
        default: "Rather not say"
    },
    location: {
        type: String,
        default: "not specified"
    },
    image: {
        type: String,
        default: "no image"
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
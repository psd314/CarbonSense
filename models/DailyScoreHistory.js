const mongoose = require('mongoose');

const dailyScoreSchema = new mongoose.Schema({
    date: {
        type: Date, 
        required: true,
        default: Date.now
    },
    user: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
}); 

const DailyScores = mongoose.model('DailyScores', dailyScoreSchema); 

module.exports = DailyScores; 
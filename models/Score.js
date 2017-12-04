const mongoose = require('mongoose');

const dailyScoreSchema = new mongoose.Schema({
    date: {
        type: Date, 
        // required: true
    },
    score: {
        type: Number,
        required: true,
        default: 0
    }
}); 

const DailyScore = mongoose.model('DailyScore', dailyScoreSchema); 

module.exports = DailyScore; 
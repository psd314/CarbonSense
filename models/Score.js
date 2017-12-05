const mongoose = require('mongoose');

const dailyScoreSchema = new mongoose.Schema({
    date: {
        type: String, 
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
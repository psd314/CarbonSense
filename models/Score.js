const mongoose = require('mongoose');

const dailyScoreSchema = new mongoose.Schema({
    date: {
        type: Date, 
        // required: true
    },
    score: {
        type: Number,
        required: true
    }
}); 

const DailyScore = mongoose.model('DailyScore', dailyScoreSchema); 

module.exports = DailyScore; 
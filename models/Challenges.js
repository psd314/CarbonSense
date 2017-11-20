const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    completed: {
        type: Boolean, 
        default: false 
    }
}); 

const Challenge = mongoose.model('Challenge', challengeSchema); 

module.exports = Challenge; 
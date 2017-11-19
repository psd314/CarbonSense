const mongoose = require('mongoose');

const friendsSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }
}); 

const Friends = mongoose.model('Friends', friendsSchema); 

module.export = Friends; 
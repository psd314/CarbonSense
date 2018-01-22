const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new mongoose.Schema({
   question: String,
   options: [{optionText: String, optionValue: String}],
   active: {
       type: boolean,
       default: true
   }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
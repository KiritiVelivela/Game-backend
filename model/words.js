var mongoose = require('mongoose');

//words Schema

var wordsSchema = mongoose.Schema({
  word:{
    type: String,
    required: true
  }
});

var Words = module.exports = mongoose.model('Words', wordsSchema);

// Get Words

module.exports.getWords = function(callback, limit) {
    Words.find(callback);
}

module.exports.add = (word, callback) => {
	Words.create(word, callback);
}

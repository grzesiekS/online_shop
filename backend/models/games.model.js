const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  type: { type: String },
  name: { type: String, required: true},
  price: { type: Number, required: true},
  photos: { type: Array },
  descriptiobn: { type: String, required: true },
  genres: { type: Array, required: true },
});

module.exports = mongoose.model('Game', gameSchema);

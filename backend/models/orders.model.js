const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true},
  email: { type: String, required: true },
  phone: { type: String, required: true, minlength: 9},
  gamesInCart: { type: Array, required: true },
});

module.exports = mongoose.model('Order', orderSchema);

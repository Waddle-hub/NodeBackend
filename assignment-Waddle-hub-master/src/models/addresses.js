const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
  city: String,
  street: String
});

module.exports = mongoose.model('address', addressSchema);

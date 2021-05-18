const mongoose = require('mongoose');
const address = require('./addresses');

const contactSchema = new mongoose.Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: address.schema
  }
});

module.exports = mongoose.model('contact', contactSchema);

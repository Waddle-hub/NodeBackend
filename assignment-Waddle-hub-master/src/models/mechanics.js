
const mongoose = require('mongoose');

const mechanicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  }
});

mechanicSchema.pre('findOneAndUpdate', next => {
  console.log('pre update hook');
  next();
});

module.exports = mongoose.model('issue', mechanicSchema);

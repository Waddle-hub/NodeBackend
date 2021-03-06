const mongoose = require('mongoose');
const contacts = require('./contacts');

const IssueSchema = new mongoose.Schema({
  recorded: {
    type: Date
  },
  contact: {
    type: contacts.schema,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mechanic: {
    type: String,
    required: true
  },
  cause: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  }
});

IssueSchema.pre('findOneAndUpdate', next => {
  console.log('pre update hook');
  next();
});

module.exports = mongoose.model('issue', IssueSchema);

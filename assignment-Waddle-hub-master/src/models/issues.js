const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  recorded: {
    type: Date
  },
  title: {
    type: String,
    required: true
  },
  contact: {
    type: Object,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  state: {
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

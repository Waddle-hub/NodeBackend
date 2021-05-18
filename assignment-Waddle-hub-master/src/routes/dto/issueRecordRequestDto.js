const { body } = require('express-validator');

module.exports = [
  body('description').exists()
];

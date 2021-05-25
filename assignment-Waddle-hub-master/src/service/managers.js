const managerDao = require('../models/issues');

const readIssues = async () => {
  return await managerDao.find().exec();
};

const readIssuesById = async (id) => {
  return await managerDao.findById(id).exec();
};

module.exports = {
  readIssues: readIssues,
  readIssuesById: readIssuesById
};

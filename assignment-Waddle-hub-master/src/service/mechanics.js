const mechanicDao = require('../models/issues');
const issueState = require('../models/issueState');

const readIssues = async () => {
  return await mechanicDao.find().exec();
};

const readIssuesById = async (id) => {
  return await mechanicDao.findById(id).exec();
};

const changeSate = async (id, state) => {
  const currentIssue = readIssuesById(id);
  if (!isStateChangeAllowed(currentIssue.state, state)) {
    throw new Error({ msg: `Invalid State ohange ${currentIssue.state} => ${state}` });
  }
  return await mechanicDao.findByIdAndUpdate(id, { state: state }, { new: true }).exec();
};

const isStateChangeAllowed = (from, to) => {
  return true;
};

const changeStateToInProgress = (id) => {
  return changeSate(id, issueState.IN_PROGRESS);
};
const changeStateToResolved = (id) => {
  return changeSate(id, issueState.RESOLVED);
};
const changeStateToClosed = (id) => {
  return changeSate(id, issueState.CLOSED);
};

module.exports = {
  readIssues: readIssues,
  readIssuesById: readIssuesById,
  changeStateToInProgress: changeStateToInProgress,
  changeStateToResolved: changeStateToResolved,
  changeStateToClosed: changeStateToClosed
};

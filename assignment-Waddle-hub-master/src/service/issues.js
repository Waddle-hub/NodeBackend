const winston = require('winston');
const issueDao = require('../models/issues');
const issueState = require('../models/issueState');

const DUMMY_ISSUE = {
  _id: '603c9813eb0dec3a97b29be7',
  title: 'Issue 1',
  description: 'string',
  state: 'open',
  __v: 0
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: 'logs/service.log'
    }),
    new winston.transports.Console()
  ]
});

const createIssue = async (issue) => {
  try {
    const current = new Date();
    issue.recorded = current.toLocaleString();
    return await issueDao.create({ ...issue, state: issueState.OPEN });
  } catch (err) {
    logger.error({
      message: 'Data access error',
      error: err
    });
    return err;
  }
};

const readIssues = async () => {
  return await issueDao.find().exec();
};

const readIssuesById = async (id) => {
  return await issueDao.findById(id).exec();
};

const changeSate = async (id, state) => {
  const currentIssue = readIssuesById(id);
  if (!isStateChangeAllowed(currentIssue.state, state)) {
    logger.info(`Invalid State Change ${currentIssue.state} => ${state}`);
    throw new Error({ msg: `Invalid State ohange ${currentIssue.state} => ${state}` });
  }
  return await issueDao.findByIdAndUpdate(id, { state: state }, { new: true }).exec();
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
  createIssue: createIssue,
  readIssues: readIssues,
  readIssuesById: readIssuesById,
  changeStateToInProgress: changeStateToInProgress,
  changeStateToResolved: changeStateToResolved,
  changeStateToClosed: changeStateToClosed
};

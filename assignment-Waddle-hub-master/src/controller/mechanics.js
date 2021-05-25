const service = require('../service/mechanics');

exports.readIssue = (req, res, next) => {
  service.readByOpenIssue()
    .then(issues => res.send(issues))
    .catch(err => res.send({ error: err }));
};

exports.stateChangeToResolved = (req, res, next) => {
  service.changeStateToResolved(req.params.id)
    .then(issues => res.send(issues))
    .catch(err => res.status(400).send({ error: err }));
};

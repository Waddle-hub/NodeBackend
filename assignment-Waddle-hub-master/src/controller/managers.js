const service = require('../service/managers');

exports.readIssue = (req, res, next) => {
  if (req.params.id === undefined) {
    service.readIssues()
      .then(issues => res.send(issues))
      .catch(err => res.send({ error: err }));
    return;
  }
  service.readIssuesById(req.params.id)
    .then(issues => res.send(issues === null ? {} : issues))
    .catch(err => res.send({ error: err }));
};

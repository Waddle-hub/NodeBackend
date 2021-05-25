const express = require('express');
const router = express.Router();
const mechanicController = require('../controller/mechanics');

/**
 * @swagger
 * /mechanic/issue/{id}/resolve:
 *      put:
 *          summary: get issue by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: integer
 *                  required: true
 *          responses:
 *              200:
 *                  description: a single issue object
 *              400:
 *                  description: error object
 */
router.put('/mechanic/issue/:id/resolve', mechanicController.stateChangeToResolved);

/**
 * @swagger
 * /mechanic/openIssues:
 *  get:
 *      summary: Fetches all issues
 *      responses:
 *          200:
 *              description: list of issues
 */
router.get('/openIssues', mechanicController.readIssue);

module.exports = router;

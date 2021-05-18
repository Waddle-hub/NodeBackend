const express = require('express');
const router = express.Router();
const issuesController = require('../controller/issues');
// const issueRequestDto = require('./dto/issueRecordRequestDto');
const controller = require('../controller/managers');
/**
 *  @swagger
 *  /managers:
 *      get:
 *       summary: get tasks that are open
 *       responses:
 *           200:
 *              description: list of tasks that are open
 */
router.get('/', controller.listTasksOpen);
module.exports = router;

/**
 * @swagger
 * /managers/{id}:
 *      get:
 *          summary: get issue by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: integer
 *                  required: true
 *          responses:
 *              200:
 *                  description: a single issue object
 *
 */
router.get('/:id', issuesController.readIssue);

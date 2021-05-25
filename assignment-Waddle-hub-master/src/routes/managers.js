const express = require('express');
const router = express.Router();
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
router.get('/', controller.readIssue);
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
router.get('/:id', controller.readIssue);

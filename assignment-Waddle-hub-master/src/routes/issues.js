const express = require('express');
const router = express.Router();
const issuesController = require('../controller/issues');
const issueRequestDto = require('./dto/issueRecordRequestDto');

/**
 * @swagger
 * /issues:
 *  get:
 *      summary: Fetches all issues
 *      responses:
 *          200:
 *              description: list of issues
 */
router.get('/', issuesController.readIssue);

/**
 * @swagger
 * /issues:
 *  post:
 *      summary: create a new issue
 *      requestBody:
 *        content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   required: true
 *                   properties:
 *                      mechanic:
 *                          type: string
 *                      cause:
 *                          type: string
 *                      solution:
 *                          type: string
 *                      state:
 *                          type: string
 *                      description:
 *                          type: string
 *                      contact:
 *                          type: object
 *                          properties:
 *                              name:
 *                               type: string
 *                              phone:
 *                               type: string
 *                              address:
 *                               type: object
 *                               properties:
 *                                  city:
 *                                    type: string
 *                                  addresss:
 *                                    type : string
 *      responses:
 *          200:
 *              description: success
 *          400:
 *              description: problem
 */
router.post('/', issueRequestDto, issuesController.createIssue);

/**
 * @swagger
 * /issues/{id}/in-progress:
 *     put:
 *          summary: set issue to "in progress" state
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
 *
 */
router.put('/:id/in-progress', issuesController.stateChangeToInProgress);

/**
 * @swagger
 * /issues/{id}/close:
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
 *
 */
router.put('/:id/close', issuesController.stateChangeToClosed);

module.exports = router;

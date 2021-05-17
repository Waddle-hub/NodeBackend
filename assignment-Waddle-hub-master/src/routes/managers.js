const express = require('express');
const router = express.Router();
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

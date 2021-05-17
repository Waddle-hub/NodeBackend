const express = require('express');
const router = express.Router();

/**
 *  @swagger
 *  /managers:
 *      get:
 *       summary: get tasks that are open
 *       responses:
 *           200:
 *              description: list of tasks that are open
 */

router.get('/', (req, res) => {
  res.status(200).send('ok');
});
module.exports = router;

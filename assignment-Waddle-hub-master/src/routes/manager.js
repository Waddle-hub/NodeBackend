const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /manager:
 *     get:
 *       summary: List open tasks
 *       responses:
 *          200:
 *            description: list of issues that are open
 **/
router.get('/', (req, res) => { res.status(200).send('ok'); });
module.exports = router;

const express = require('express');
const router = express();

const PersonController = require('../controllers/PersonController');
const AdminMiddleware = require('../middleware/admin');

router
    .get("/people",  PersonController.index)
    .delete("/person", AdminMiddleware, PersonController.delete);

module.exports = router;
const express = require('express');
const router = express();

const PersonController = require('../controllers/PersonController');

router
    .get("/people", PersonController.index)
    .delete("/person", PersonController.delete);

module.exports = router;
const express = require('express');
const router = express();

const PersonController = require('../controllers/PersonController');
const AdminMiddleware = require('../middleware/admin');
const AutenticationMiddleware = require('../middleware/autentication'); 

router
    .get("/people",  PersonController.index)
    .delete("/person", AutenticationMiddleware, AdminMiddleware, PersonController.delete);

module.exports = router;
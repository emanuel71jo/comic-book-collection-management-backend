const express = require('express');
const router = express();

const AutenticationController = require('../controllers/AutenticationController');

router
    .get("/autentication", AutenticationController.autentication)
    .post("/register", AutenticationController.register);

module.exports = router;
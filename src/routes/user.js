const express = require('express');

const router = express();

const UserController = require('../controllers/UserController');

router
    .get("/user", UserController.index)
    .post("/user", UserController.create)
    .delete("/user/:cpf", UserController.delete);


module.exports = router;
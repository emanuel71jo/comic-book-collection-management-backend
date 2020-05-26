const express = require('express');

const router = express();

const UserController = require('../controllers/UserController');
const AdminMiddleware = require('../middleware/admin');
const AutenticationMiddleware = require('../middleware/autentication');

router
    .get("/user", UserController.index)
    .post("/user", AutenticationMiddleware, AdminMiddleware, UserController.create)
    .delete("/user/:cpf", AutenticationMiddleware, AdminMiddleware, UserController.delete);
 

module.exports = router;
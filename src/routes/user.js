const express = require('express');

const router = express();

const UserController = require('../controllers/UserController');
const AdminMiddleware = require('../middleware/admin');

router
    .get("/user", UserController.index)
    .post("/user", AdminMiddleware, UserController.create)
    .delete("/user/:cpf", AdminMiddleware, UserController.delete);
 

module.exports = router;
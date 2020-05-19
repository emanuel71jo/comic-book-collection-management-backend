const express = require("express");
const router = express.Router();

const ComicController = require('./controllers/ComicController');
const UserController = require('./controllers/UserController');
const CollectionController = require('./controllers/CollectionController');
const PersonController = require('./controllers/PersonController');
const LoanController = require('./controllers/LoanController');
const InvoiceController = require('./controllers/InvoiceController');


router
    .get("/comic", ComicController.index)
    .post("/comic", ComicController.create)
    .delete("/comic/:id", ComicController.delete)

    .get("/user", UserController.index)
    .post("/user", UserController.create)
    .delete("/user/:cpf", UserController.delete)

    .get("/collection", CollectionController.index)
    .delete("/collection/:id", CollectionController.delete)

    .get("/peaple", PersonController.index)
    .delete("/person", PersonController.delete)

    .get("/loan", LoanController.index)
    .post("/loan", LoanController.create)
    .delete("/loan", LoanController.delete)
    .put("/loan", LoanController.update)

    .get("/invoice", InvoiceController.index)

module.exports = router;

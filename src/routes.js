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
    .put("/comic/:id", ComicController.update)

    .get("/user", UserController.index)
    .post("/user", UserController.create)
    .delete("/user/:cpf", UserController.delete)
    .put("/user", UserController.update)

    .get("/collection", CollectionController.index)
    .delete("/collection/:id", CollectionController.delete)
    .put("/collection/:id", CollectionController.update)

    .get("/peaple", PersonController.index)
    .delete("/person", PersonController.delete)
    .put("/person", PersonController.update)

    .get("/loan", LoanController.index)
    .post("/loan", LoanController.create)
    .put("/loan", LoanController.update)

    .get("/invoice", InvoiceController.index)
    .put("/invoice", InvoiceController.update)

module.exports = router;

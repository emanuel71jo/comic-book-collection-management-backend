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
    .get("/comic/options", ComicController.store)
    .post("/comic", ComicController.create)
    .delete("/comic", ComicController.delete)
    .put("/comic", ComicController.update)

    .get("/user", UserController.index)
    .post("/user", UserController.create)
    .delete("/user", UserController.delete)
    .put("/user", UserController.update)

    .get("/collection", CollectionController.index)
    .delete("/collection/:id", CollectionController.delete)
    .put("/collection/:id", CollectionController.update)
    .post('/collection', CollectionController.create)

    .get("/peaple", PersonController.index)
    .delete("/person", PersonController.delete)
    .put("/person", PersonController.update)

    .get("/loan", LoanController.index)
    .get("/loan/options", LoanController.store)
    .post("/loan", LoanController.create)
    .delete("/loan", LoanController.delete)
    .put("/loan", LoanController.update)

    .get("/invoice", InvoiceController.index)
    .get("/invoice/options", InvoiceController.store)
    .put("/invoice", InvoiceController.update)

module.exports = router;

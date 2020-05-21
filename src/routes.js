const express = require("express");
const router = express.Router();

const ComicController = require('./controllers/ComicController');
const UserController = require('./controllers/UserController');
const CollectionController = require('./controllers/CollectionController');
const PersonController = require('./controllers/PersonController');
const LoanController = require('./controllers/LoanController');
const InvoiceController = require('./controllers/InvoiceController');
const ReadingController = require('./controllers/ReadingController');
const AutenticationController = require('./controllers/AutenticationController');

const AutenticationMiddleware = require('./middleware/autentication');
const UserMiddleware = require('./middleware/user');
const AdminMiddleware = require('./middleware/admin');
const MulterMiddleware = require('./middleware/multer');


router
    .get("/comic", AutenticationMiddleware, ComicController.index)
    .post("/comic", AutenticationMiddleware, ComicController.create)
    .delete("/comic/:id", AutenticationMiddleware, ComicController.delete)

    .get("/user", AutenticationMiddleware, UserController.index)
    .post("/user", AutenticationMiddleware, UserController.create)
    .delete("/user/:cpf", AutenticationMiddleware, UserController.delete)

    .get("/collection", AutenticationMiddleware, CollectionController.index)
    .delete("/collection/:id", AutenticationMiddleware, CollectionController.delete)

    .get("/peaple", AutenticationMiddleware, PersonController.index)
    .delete("/person", AutenticationMiddleware, PersonController.delete)

    .get("/loan", AutenticationMiddleware, LoanController.index)
    .post("/loan", AutenticationMiddleware, LoanController.create)
    .delete("/loan", AutenticationMiddleware, LoanController.delete)
    .put("/loan", AutenticationMiddleware, LoanController.update)

    .get("/invoice", AutenticationMiddleware, InvoiceController.index)

    .get("/reading", AutenticationMiddleware, ReadingController.index)
    .post("/reading", AutenticationMiddleware, ReadingController.create)
    .delete("/reading", AutenticationMiddleware, ReadingController.delete)
    .put("/reading", AutenticationMiddleware, ReadingController.update)

    .get("/autentication", AutenticationController.autentication)
    .post("/register", AutenticationController.register)


module.exports = router;

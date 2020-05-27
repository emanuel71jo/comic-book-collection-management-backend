const express = require('express');
const router = express();

const CollectionController = require('../controllers/CollectionController');
const AutenticationMiddleware = require('../middleware/autentication');


router
    .get("/collection", CollectionController.index)
    .delete("/collection/:id", CollectionController.delete);

module.exports = router;

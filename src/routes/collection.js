const express = require('express');
const router = express();

const CollectionController = require('../controllers/CollectionController');

router
    .get("/collection", CollectionController.index)
    .delete("/collection/:id", CollectionController.delete);

module.exports = router;

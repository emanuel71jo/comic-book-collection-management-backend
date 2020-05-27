const express = require('express');
const router = express();

const CollectionController = require('../controllers/CollectionController');

const AdminMiddleware = require('../middleware/admin');

router
    .get("/collection", CollectionController.index)
    .delete("/collection/:id", AdminMiddleware, CollectionController.delete);

module.exports = router;

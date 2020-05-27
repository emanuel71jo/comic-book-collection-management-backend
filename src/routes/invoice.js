const express = require('express');
const router = express();

const InvoiceController = require('../controllers/InvoiceController');

const AdminMiddleware = require('../middleware/admin');

router
    .get("/invoice", AdminMiddleware, InvoiceController.index);

module.exports = router;
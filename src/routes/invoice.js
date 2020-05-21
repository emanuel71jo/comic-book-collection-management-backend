const express = require('express');
const router = express();

const InvoiceController = require('../controllers/InvoiceController');

router
    .get("/invoice", InvoiceController.index);

module.exports = router;
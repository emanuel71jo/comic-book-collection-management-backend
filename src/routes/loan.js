const express = require('express');
const router = express();

const LoanController = require('../controllers/LoanController');

router
    .get("/loan", LoanController.index)
    .post("/loan", LoanController.create)
    .delete("/loan", LoanController.delete)
    .put("/loan", LoanController.update);

module.exports = router;